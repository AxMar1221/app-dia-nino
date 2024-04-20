import { Grid, Typography, LinearProgress, Card, CardContent } from "@mui/material"

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

  return (
    <div className='container'>
      <Card sx={{ margin: '20px', padding: '20px' }}>
        <CardContent>


        <Typography>
          Gráfica general
        </Typography>
        <Grid container direction='row' alignItems='center' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          {data.map((item) => (
            <Grid item key={item.group} className='progressBar' >
              <Typography variant='subtitle1'>{`${item.group}: ${item.points}`}</Typography>
              <LinearProgress variant="determinate" value={(item.points / 200) * 100} />
            </Grid>
          ))}
        </Grid>
        </CardContent>

      </Card>
    </div>
  )
}

