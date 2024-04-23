import { useState } from "react";
import { Grid, Typography, LinearProgress, Card, CardContent, Select, MenuItem } from "@mui/material";
import { updatedData } from "./data";

export const GrafIndiApp = () => {
  const [selectedGroup, setSelectedGroup] = useState('2A'); // Grupo por defecto

  const handleChangeGroup = (event) => {
    setSelectedGroup(event.target.value);
  };

  const selectedGroupData = updatedData.find(item => item.grupo === selectedGroup);

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
            {updatedData.map((item) => (
              <MenuItem key={item.grupo} value={item.grupo}>{item.grupo}</MenuItem>
            ))}
          </Select>
          <Grid container direction='row' alignItems='flex-end' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {selectedGroupData && Object.entries(selectedGroupData).map(([key, value], index, array) => (
              <Grid item key={key} className='progressBar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {(key !== 'grupo' && index !== array.length - 1) && ( // Evita imprimir el último dato
                  <>
                    <LinearProgress color='error' variant="determinate" value={(value / 50) * 100} sx={{ width: '100%', height: 10, borderRadius: 1 }} />
                    <Typography variant='subtitle1' color='error' >{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</Typography>
                  </>
                )}
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
