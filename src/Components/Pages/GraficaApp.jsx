import { Button, Grid, Typography, LinearProgress, Card, CardContent } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';
import { useEffect, useState } from "react";
import { fetchData, processGameData } from "./data";

export const GraficaApp = () => {
  const [newData, setNewData] = useState([]); // Agrega un estado para newData

  useEffect(() => {
    const loadData = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        const newData = processGameData(jsonData);
        setNewData(newData);
      }
    };
    loadData();
  }, []);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(newData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const ranks = newData.slice().sort((a, b) => b.points - a.points);
  const startRank = (currentPage - 1) * itemsPerPage;
  const endRank = currentPage * itemsPerPage;
  const rankSort = ranks.slice(startRank, endRank);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div className='container mt-5'>
      <Typography align='center' variant='h4' color='error' sx={{ mb: 2}}>
        Gráfica general
      </Typography>
      <Card>
        <CardContent>
          <Grid container direction='row' alignItems='flex-end' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {rankSort.map((item) => (
              <Grid item key={item.grupo} className='progressBar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <LinearProgress color='error' variant="determinate" value={(item.points / 100) * 100} sx={{ width: '100%', height: 15, borderRadius: 1 }} />
                <Typography variant='subtitle1' color='error' elevation={24}>{`${item.grupo} a ganado un total de "${item.points}" puntos `}</Typography>
              </Grid>
            ))}
          </Grid>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Button
              variant='outlined'
              color='error'
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <NavigateBeforeOutlined />
              Anterior
            </Button>
            <Button
              variant='outlined'
              color='error'
              onClick={nextPage}
              disabled={currentPage === totalPages}
              style={{ marginLeft: "10px" }}
            >
              Siguiente 
              <NavigateNextOutlined />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
