import { Box, Button } from "@mui/material";
import Products_Page from "../../products";
import Head_Of_Page from "../hedearPage/headOfPage";
import Search_Avatar from "../hedearPage/search&Avatar";
import AddIcon from '@mui/icons-material/Add';


export default function ProductsPage(){
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
                        <Head_Of_Page title="Products Managament" sub_title="Here, view and manage all Products "/>

         </Box>
       
         {/* الزر بأقصى اليمين */}
         <Button sx={{borderRadius:'15px' ,mt: { xs: 1, md: 0 }}}   variant="contained">
           <AddIcon/>
          Add Product </Button>
       </Box>
       
       <Products_Page/>
</>
    )

}