import { Button, Grid, Typography, LinearProgress, Card, CardContent } from "@mui/material";
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';
import { useState } from "react";

const data = [
  { group: '2A', points: 100 },
  { group: '2B', points: 150 },
  { group: '2C', points: 120 },
  { group: '2D', points: 180 },
  { group: '2E', points: 90 },
  { group: '4A', points: 200 },
  { group: '4B', points: 130 },
  { group: '4C', points: 170 },
  { group: '4D', points: 140 },
  { group: '4E', points: 160 },
  { group: '6A', points: 110 },
  { group: '6B', points: 190 },
  { group: '6C', points: 80 },
  { group: '6D', points: 200 },
  { group: '6E', points: 70 },
];

export const GraficaApp = () => {
  
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  
  const ranks = data.slice().sort((a, b) => b.points - a.points);
  const startRank = (currentPage - 1) * itemsPerPage;
  const endRank = currentPage * itemsPerPage;
  const rankSort = ranks.slice(startRank, endRank);

  const nextPape = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }

  const prevPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div className='container mt-5'>
      <Typography align='center' variant='h4' color='error'>
        Gráfica general
      </Typography>
      <Card>
        <CardContent>
          <Grid container direction='row' alignItems='flex-end' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {rankSort.map((item) => (
              <Grid item key={item.group} className='progressBar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <LinearProgress color='error' variant="determinate" value={(item.points / 200) * 100} sx={{ width: '100%', height: 10, borderRadius: 1 }} /> 
                <Typography variant='subtitle1' color='error' elevation={24}>{`${item.group}: ${item.points}`}</Typography>
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
                  onClick={nextPape}
                  disabled={currentPage === totalPages}
                  style={{ marginLeft: "10px" }}
                >
                  Siguiente <NavigateNextOutlined />
                </Button>
              </div>
        </CardContent>
      </Card>
    </div>
  );
};
