'use client';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';import NavPage from '../navPar';
export default function PageRegester(){
  const theme = useTheme();
return(
    <>
     <NavPage/>
      <Container sx={{ height: '100vh', // يملىء كامل الشاشة
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',}} maxWidth="sm"  >
        <Box   >
             <Card sx={{ marginTop:'5%',maxWidth: '100%',maxHeight:'50%' , bgcolor: theme.palette.background.paper, // استخدم اللون من الثيم
              display: 'flex',
              boxShadow: theme.shadows[5], // ظل من الثيم,borderRadius:'5%',
        flexDirection: 'column',
        justifyContent: 'center', // توسيط عمودي
        alignItems: 'center', gap: 1, // هاد بيخلي في مسافة متساوية بين كل العناصر
    p: 3,  }}>
    
<Typography
              sx={{ color: theme.palette.primary.main }}
            >
              join TechStore and start shopping today
            </Typography>     <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>FullName</Typography>
    <TextField
      fullWidth
      sx={{ borderRadius: '15%' }}
      id="outlined-basic"
      variant="outlined"
      label="Enter your full name"
    />
  </Box>
           <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>userName</Typography>
    <TextField
      fullWidth
      sx={{ borderRadius: '15%' }}
      id="outlined-basic"
      variant="outlined"
      label="Choose a user name"
    />
  </Box> <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>phoneNumber</Typography>
    <TextField
      fullWidth
      sx={{ borderRadius: '15%' }}
      id="outlined-basic"
      variant="outlined"
      label="Enter your phonNumber"
    />
  </Box> <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>password</Typography>
    <TextField
      fullWidth
      sx={{ borderRadius: '15%' }}
      id="outlined-basic"
      variant="outlined"
      label="Creat a password"
    />
  </Box> 
      <Button        sx={{ width: '100%', borderRadius: '5px' }}
 variant="contained">creat Account Now</Button>

    </Card>
        </Box>
      </Container>
    </>
)
}