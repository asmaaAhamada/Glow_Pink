import { Avatar, Box, TextField } from "@mui/material";

export default function Search_Avatar(){
return(
    <>
      <Box sx={{display:'flex' ,justifyContent:'space-between',alignItems:'center',flexWrap: 'wrap',gap:3,
'@media (max-width:900px)': {
            flexDirection: 'column', // يخلي العنوان فوق والزر تحت
            alignItems: 'flex-start', // يخلي الزر بمحاذاة اليسار
            gap: 2, // مسافة بينهم
          },
      }}>
             <TextField  sx={{
          width: '80%', // الوضع العادي
          '@media (max-width:900px)': {
            width: '50%', // شاشة متوسطة
          },
          '@media (max-width:600px)': {
            width: '35%', // موبايل
          },
        }} id="outlined-basic" label="search" variant="outlined" />
                   <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{
          width: 48,
          height: 48,
          "@media (max-width:900px)": {
            width: 40,
            height: 40,
          },
          "@media (max-width:600px)": {
            width: 32,
            height: 32,
          },
        }}/>

</Box>
    
    </>
)
}