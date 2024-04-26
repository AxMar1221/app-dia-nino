import { useEffect, useState } from "react";
import { Grid, Typography, LinearProgress, Card, CardContent, Select, MenuItem } from "@mui/material";
import { fetchData, processGameData } from "./data"

export const GrafIndiApp = () => {
  const [selectedGroup, setSelectedGroup] = useState('2A'); // Grupo por defecto
  const [newData, setNewData] = useState([]);

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

  const handleChangeGroup = (event) => {
    setSelectedGroup(event.target.value);
  };

  const selectedGroupData = newData.find(item => item.grupo === selectedGroup);
  console.log(selectedGroupData)
  return (
    <div className='container mt-5'>
      <Typography align='center' variant='h5' color='error'>
        Gráfica por grupo
      </Typography>
      <Card>
        <CardContent>
          <Select
            size='small'
            value={selectedGroup}
            onChange={handleChangeGroup}
            variant='outlined'
            color='error'
            style={{ marginBottom: '20px' }}
          >
            {newData.map((item) => (
              <MenuItem key={item.grupo} value={item.grupo}>{item.grupo}</MenuItem>
            ))}
          </Select>
          <Grid container direction='row' alignItems='flex-end' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {selectedGroupData && Object.entries(selectedGroupData).map(([key, value]) => (
              <Grid item key={key} className='progressBar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <LinearProgress color='error' variant="determinate" value={(value / 50) * 100} sx={{ width: '100%', height: 10, borderRadius: 1 }} />
                <Typography variant='subtitle1' color='error' >{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
