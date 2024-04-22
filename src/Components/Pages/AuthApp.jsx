import { Button, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import Swal from "sweetalert2";

export const AuthApp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario:', user);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: `Hola: ${user.email}`
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal...',
          text: `${errorCode}`
        });
      });
  };

  const handleCancel = () => {
    setEmail(''); // Borra el contenido del campo de correo electrónico
    setPassword(''); // Borra el contenido del campo de contraseña
  };

  return (
    <>
      <Typography>
        Iniciar sesión
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            color='error'
            label='Correo electrónico'
            type='email'
            placeholder='Correo electrónico'
            fullWidth
            name='email'
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            color='error'
            label='Contraseña'
            type='password'
            placeholder='Contraseña'
            fullWidth
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant='outlined'
              color='error'
              fullWidth
              type='submit'
              onClick={handleLogin}
            >
              <Typography sx={{ ml: 1 }} color='primary'>Iniciar sesión</Typography>
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant='outlined'
              color='error'
              fullWidth
              onClick={handleCancel}
            >
              <Typography sx={{ ml: 1 }}>Cancelar</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
