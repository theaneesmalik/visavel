import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import CardElement from '../Components/CardElement'
import Footer from '../Components/Footer'
import LoadingBox from '../Components/LoadingBox'
import SelectComponent from '../Components/SelectComponent'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Home = () => {
  const [jobs, setJobs] = useState([])
  const [country, setCountry] = React.useState('')
  // const { jobs, setUniqueLocation, pages, loading } = useSelector((state) => state.loadJobs)
  const [loading, setLoading] = useState(false)
  const pages = 4

  useEffect(() => {
    axios
      .get(`/jobs/filter?&country=${country}&page=1`, {
        headers: {
          Authorization: `Bearer testAccessToken`,
        },
      })
      .then((res) => {
        setJobs(res.data.jobs)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [country])
  const { palette } = useTheme()

  const [page, setPage] = useState(1)

  //   useEffect(() => {
  //     dispatch(jobTypeLoadAction())
  //   }, [])

  const handleChangeCategory = (e) => {
    setCountry(e.target.value)
  }

  return (
    <>
      <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh' }}>
        <Navbar />
        <Header />
        <Container>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography component='h4' sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                    Filter job by Country
                  </Typography>
                </Box>
                <SelectComponent handleChangeCategory={handleChangeCategory} country={country} />
              </Card>
            </Box>
            <Box sx={{ flex: 5, p: 2 }}>
              {loading ? (
                <LoadingBox />
              ) : jobs && jobs.length === 0 ? (
                <>
                  <Box
                    sx={{
                      minHeight: '350px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <h2>No result found!</h2>
                  </Box>
                </>
              ) : (
                jobs && jobs?.map((job, i) => <CardElement key={i} job={job} />)
              )}
              <Stack spacing={2}>
                <Pagination
                  page={page}
                  count={pages === 0 ? 1 : pages}
                  onChange={(event, value) => setPage(value)}
                />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home
