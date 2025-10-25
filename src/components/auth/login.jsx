


import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useTheme } from '@mui/material/styles';
import NavPage from '../navPar';

export default function PageLogin(){
    const theme = useTheme();
  
return(
    <>
    <NavPage/>
      <Container  sx={{ height: '100vh', // يملىء كامل الشاشة
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',}} maxWidth="sm"  >
        <Box   >
       
             <Card sx={{ marginTop:'5%',maxWidth: '100%',maxHeight:'50%' , bgcolor: theme.palette.background.paper, // استخدم اللون من الثيم
              display: 'flex',
              boxShadow: theme.shadows[5],
        flexDirection: 'column',
        justifyContent: 'center', // توسيط عمودي
        alignItems: 'center', gap: 1, // هاد بيخلي في مسافة متساوية بين كل العناصر
    p: 3,  }}>
    
<Typography
              sx={{ color: theme.palette.primary.main }}
            >
              join TechStore and start shopping today
            </Typography>    
           <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>userName</Typography>
    <TextField
      fullWidth
      sx={{ borderRadius: '15%' }}
      id="outlined-basic"
      variant="outlined"
      label="enter a user name"
    />
  </Box>
  
   <Box sx={{ width: '100%', alignSelf: 'flex-start' }}>
    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>password</Typography>
    <TextField
      fullWidth
      sx={{ borderRadius: '15%' }}
      id="outlined-basic"
      variant="outlined"
      label="enter a password"
    />
  </Box> 
      <Button        sx={{ width: '100%', borderRadius: '3%' }}
 variant="contained">Log in Now</Button>
 
    <Typography sx={{color: theme.palette.primary.main, mb: 1, fontWeight: 'bold' }}>creat a new acount?</Typography>

    </Card>
        </Box>
      </Container>
    </>
)
}