import {  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button, useTheme, 
  Stack} from '@mui/material';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import CardsPage from './Statistics/4cards';
import SalesBarChart from './Statistics/Statistics chart';


export default function DashboardPage(){
     const theme = useTheme();
    return(
        <>
       <Box sx={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
             <TextField  sx={{width:'80%'}} id="outlined-basic" label="search" variant="outlined" />
                   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

</Box>
        <Typography sx={{mt:2}}>Dashboard review</Typography>
        <p       
 style={{marginTop:'-3px',color:theme.palette.primary.main}}>Here, everything that happened this week will be reviewed.</p>




        {/* //=====================show cards===================== */}
       <Stack direction="column" spacing={2}>
      <CardsPage />
      <SalesBarChart />
    </Stack>
                    {/* //=====================/////show SalesBarChart//////===================== */}

                    

        </>

    )

}