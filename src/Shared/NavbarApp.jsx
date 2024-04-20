import { AppBar, Container, MenuItem, Toolbar } from "@mui/material"
import { NavLink } from "react-router-dom"
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

export const NavBarApp = () => {
  return (
    <>
      <AppBar color='success'>
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'center'}}
          >
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='/home'
              >
                <ScoreboardIcon />
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='infoG'
              >
                General
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='infoI'
              >
                Individual
              </NavLink>
            </MenuItem>
            <MenuItem sx={{ borderRadius: 3 }}>
              <NavLink
                className='color'
                to='/login'
              >
                Iniciar sesión
              </NavLink>
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}


