import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://visavel.com/'>
        Visavel.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const Footer = () => {
  const { palette } = useTheme()
  return (
    <>
      <Box
        sx={{
          height: '70px',
          bgcolor: palette.secondary.midNightBlue,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box component='span' sx={{ color: palette.primary.main }}>
          <Copyright />
        </Box>
      </Box>
    </>
  )
}

export default Footer
