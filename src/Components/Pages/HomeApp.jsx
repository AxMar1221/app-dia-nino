import { Card, CardMedia } from "@mui/material"

export const HomeApp = () => {
  return (
    <div className='container'>

      <Card>
        <CardMedia
          width='auto'
          sx={{ height: 350, borderRadius: 5 }}
          image='/dia-nino-img.png'
          title='día-niño'
        />
      </Card>
    </div>
  )
}
