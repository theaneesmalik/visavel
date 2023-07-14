import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import WorkIcon from '@mui/icons-material/Work'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <AppBar position='static'>
      <Container>
        <Toolbar disableGutters>
          <img src={logo} style={{ marginRight: 1, width: '50px' }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            align='center'
            href='/'
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VISAVEL JOB PORTAL
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
