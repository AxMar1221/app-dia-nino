import { Button, Grid, TextField, Typography } from "@mui/material"

export const AuthApp = () => {
  return (
    <>
        <Typography>
            Iniciar sesión
        </Typography>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              color='error'
              label='Correo electrónico'
              type='email'
              placeholder='Correo electrónico'
              fullWidth
              name='email'
              // value={}
              // onChange={}
            />
          </Grid>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField
              color='error'
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              // value={}
              // onChange={}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant='outlined'
                color='error'
                fullWidth
                type="submit"
              >
                <Typography sx={{ ml: 1 }} color='primary'>Iniciar sesión</Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant='outlined'
                color='error'
                fullWidth
                // onClick={onGoogleSingIn}
                // disabled={isAuthenticated}
              >
                <Typography sx={{ ml: 1 }}>Cancelar</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
    </>
  )
}
