import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { IconButton, useTheme } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link, useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

const CardElement = ({ job }) => {
  const navigate = useNavigate()
  const ShowJob = () => navigate('/detail', { state: job })
  const { palette } = useTheme()
  return (
    <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
          <IconButton>
            <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
          </IconButton>{' '}
          {`${job?.city}, ${job?.country}`}
        </Typography>
        <Typography variant='h5' component='div'>
          {job?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {`${job?.minSalary} - ${job?.maxSalary} ${job?.currency}`}
        </Typography>
        <Typography variant='body2'>Age: {`${job?.minAge} - ${job?.maxAge}`}</Typography>
        <Typography variant='body2'>No of Jobs: {`${job?.noOfJobs} - jobs`}</Typography>
      </CardContent>
      <CardActions>
        <Button disableElevation variant='contained' size='small' onClick={ShowJob} startIcon={<AddIcon />}>
          Detail
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardElement
