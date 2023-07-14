import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
// import { useSelector } from 'react-redux'

const SelectComponent = ({ handleChangeCategory, country }) => {
  //   const { jobType } = useSelector((state) => state.jobTypeAll)
  const gulfCountries = ['Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Saudi Arabia', 'United Arab Emirates']

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Country</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={country}
          label='Category'
          onChange={handleChangeCategory}
        >
          <MenuItem value=''>All</MenuItem>
          {gulfCountries &&
            gulfCountries.map((jt) => (
              <MenuItem key={jt} value={jt}>
                {jt}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectComponent
