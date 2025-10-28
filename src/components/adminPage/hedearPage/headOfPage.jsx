import { Typography, useTheme } from "@mui/material";

export default function Head_Of_Page({title,sub_title}){
         const theme = useTheme();
    
    return(
        <>
           <Typography sx={{mt:2}}>{title}</Typography>
        <p       
 style={{marginTop:'-3px',color:theme.palette.primary.main}}>{sub_title}</p>


        </>
    )
}