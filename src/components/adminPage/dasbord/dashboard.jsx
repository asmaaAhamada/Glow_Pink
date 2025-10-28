import { useTheme, 
  Stack} from '@mui/material';

import CardsPage from './Statistics/4cards';
import SalesBarChart from './Statistics/Statistics chart';
import Head_Of_Page from '../hedearPage/headOfPage';
import Search_Avatar from '../hedearPage/search&Avatar';


export default function DashboardPage(){
     const theme = useTheme();
    return(
        <>
        {/* //========البحث والملف الشخصي========== */}
    <Search_Avatar/>
               {/* //========//////البحث والملف الشخصي///////////////========= */}

<Head_Of_Page title="Dashboard review" sub_title="Here, everything that happened this week will be reviewed.
 " />

        {/* //=====================show cards===================== */}
       <Stack direction="column" spacing={-6}>
      <CardsPage />
      <SalesBarChart />
    </Stack>
                    {/* //=====================/////show SalesBarChart//////===================== */}

                    

        </>

    )

}