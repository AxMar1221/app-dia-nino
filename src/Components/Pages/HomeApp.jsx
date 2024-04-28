import { Card, CardContent, CardMedia, Grid } from "@mui/material"

export const HomeApp = () => {
  return (
    <div className='container'>

      <Card sx={{ maxWidth: 350 }}>

            <CardMedia
              width='auto'
              sx={{ width: 350, height: 350, borderRadius: 5 }}
              image='/dia-nino-img.png'
              title='día-niño'
            />

      </Card>
    </div>
  )
}
