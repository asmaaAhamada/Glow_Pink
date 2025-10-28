import Search_Avatar from '../hedearPage/search&Avatar';
import Head_Of_Page from '../hedearPage/headOfPage';
import Table_Products from './Table';

 //mui
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
export default function CatigoreisPage(){
    return(
        <>
        <Search_Avatar/>
        <Box 
  sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end' ,mb:2, '@media (max-width:900px)': {
            flexDirection: 'column', // يخلي العنوان فوق والزر تحت
            alignItems: 'flex-start', // يخلي الزر بمحاذاة اليسار
            gap: 2, // مسافة بينهم
          },
  }}
>
  {/* العنوان والفقرة مع بعض */}
  <Box sx={{display: 'flex', flexDirection: 'column' }}>
    <Head_Of_Page 
      title="Categories Management" 
      sub_title="Here, manage your product Categories." 
    />
  </Box>

  {/* الزر بأقصى اليمين */}
  <Button sx={{borderRadius:'15px' ,mt: { xs: 1, md: 0 }}}   variant="contained">
    <AddIcon/>
   Add Catigoreis </Button>
</Box>
<Table_Products/>

        </>

    )

}