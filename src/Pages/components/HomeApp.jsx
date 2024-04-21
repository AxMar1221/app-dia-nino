import { Card, CardMedia  } from "@mui/material"

export const HomeApp = () => {
  return (
    <div>

      <Card>
          <CardMedia
            sx={{ height: 350, borderRadius: 5}}
            image='/src/assets/dia-nino-img.png'
            title='día-niño'
          />
      </Card>
    </div>
  )
}
