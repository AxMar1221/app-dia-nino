import { Button, Typography } from "@mui/material"
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthApp = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login', {
                replace: true
            });
        }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Algo salio mal...',
                text: `${errorMessage}`
            })
        });
    }

  return (
    <>
        <Button
            variant='outlined'
            color='primary'
            onClick={handleLogout}
        >

        <Typography sx={{ ml: 1 }} color='error'>Cerrar sesión</Typography>
        </Button>
    </>
  )
}
