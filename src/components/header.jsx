import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button'; 
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
// import profilePic from 'C:/Users/mkali/react/Stark-s-Project/src/assets/profile.png';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import gift from '/C:/Users/mkali/react/Stark-s-Project/src/assets/icons8-gift-48.png'
import notification from '/C:/Users/mkali/react/Stark-s-Project/src/assets/icons8-notification-50.png'
import { LiaFilterSolid } from "react-icons/lia";
import {
  headerContainer,
  leftSection,
  actionsTitle,
  notificationCount,
  centerSection,
  searchBarBox,
  searchInput,
  searchIconStyle,
  filterButton,
  rightSection,
  verticalLine,
  profileIconStyle,
} from './style1'; 
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function Header() {
  const isMobile = useMediaQuery('(max-width:470px)');
  useEffect(() => {
    document.body.style.backgroundColor = isMobile ? '#f2f4f6' : '#FFFFFF';
    return () => {
      document.body.style.backgroundColor = isMobile ? '#f2f4f6' : '#FFFFFF';
    };
  }, [isMobile]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={headerContainer(isMobile)}>
      <Grid container alignItems="center" spacing={0}>
  <Grid item xs={12} sm={4} md={2}>
    <Box sx={leftSection(isMobile)}>
      <Typography variant="h6" sx={actionsTitle(isMobile)}>
        Actions
      </Typography>
      <Typography variant="body2" sx={notificationCount}>
        16
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={12} sm={4} md={7}>
    <Box sx={centerSection}>
      <Box sx={searchBarBox(isMobile)}>
        <input
          type="text"
          placeholder="Search"
          style={searchInput(isMobile)}
        />
        <SearchIcon style={searchIconStyle(isMobile)} />
      </Box>
      {isMobile && (
        <Button sx={filterButton}>
          <LiaFilterSolid />
        </Button>
      )}
    </Box>
  </Grid>

  {!isMobile && (
    <Grid item xs={12} sm={4} md={3}>
      <Box sx={rightSection}>
        <CustomSelectDemo />
        <Box sx={verticalLine}></Box>
        <Box
          component="img"
          src={gift}
          sx={{ margin: '0 10px', width: '24px', cursor: 'pointer' }}
        />
        <Box
          component="img"
          src={notification}
          sx={{ margin: '0 10px', width: '24px', cursor: 'pointer' }}
        />
        <Box
          component="img"
          src={gift}
          alt="profile"
          sx={profileIconStyle}
        />
      </Box>
    </Grid>
  )}
</Grid>

        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
const CustomSelectDemo = () => {
  const [selectedOption, setSelectedOption] = React.useState(1);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, display: 'flex', alignItems: 'center' }}>
      <FormControl fullWidth>
        <Select
          value={selectedOption}
          onChange={handleChange}
          sx={{
            borderRadius: '8px',
            margin: '0 10px',
            border: '1px solid #E4EAEE',
            padding: '8px 12px',
            height: '40px',

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#A0A0A0',
            },
          }}
        >
          <MenuItem value={1}>Add new</MenuItem>
          <MenuItem value={2}>Action</MenuItem>
          <MenuItem value={3}>Goal</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Header;
