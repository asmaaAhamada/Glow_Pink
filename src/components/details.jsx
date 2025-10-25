
import { Box, Button, useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';import Typography from '@mui/material/Typography';
import r1 from "../assets/imageProducts/r1.jpg"
import DoneAllIcon from '@mui/icons-material/DoneAll';
const listItems = [
  {
    id: 1,
    name: "Ali Connors",
    avatar: "/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "Travis Howard",
    avatar: "/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    name: "Sandra Adams",
    avatar: "/static/images/avatar/3.jpg",
  },
];

export default function DetailsPage(){
      const theme = useTheme(); // الحصول على الـ theme الحالي

    return(
        <>
            <Box
      sx={{
        backgroundColor: theme.palette.background.default, // يتغير حسب الوضع
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // عشان يكون متجاوب على الشاشات الصغيرة
        px: { xs: 2, md: 8 }, // padding أفقي متجاوب
        py: { xs: 4, md: 8 }, // padding عمودي متجاوب
        minHeight: '70vh', // ارتفاع مبدئي
      }}
    >
      {/* ✅ القسم الأيسر - النص والزر */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '1 1 45%' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            mb: 2,mt:6
          }}
        >
          nameproduct
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: '1.1rem',
            color: theme.palette.text.secondary,
          }}
        >
          e created by Asma and Ola to bring you the latest technology at the best prices.
        </Typography>
    <hr
  style={{
    border: `1px solid ${theme.palette.divider}`,
  }}
/>
<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.default" ,mt:'3%' }}>
      {listItems.map((item, index) => (
        <div key={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
                            <DoneAllIcon sx={{color: theme.palette.primary.main}}/>

            </ListItemAvatar>
            <ListItemText
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  {item.name}
                </Typography>
              }
            />
          </ListItem>
          {index < listItems.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </div>
      ))}
    </List>


 

      </Box>

      {/*  - الصورة */}
    
<Box
  sx={{
    backgroundColor: theme.palette.background.default,
    flex: { xs: "1 1 100%", md: "1 1 45%" },
    display: "flex",
    flexDirection: "column", // عشان يكون الزر تحت الصورة
    justifyContent: "center",
    alignItems: "center", // توسيط الزر
    mt: { xs: 4, md: 0 },
  }}
>
  <img
    src={r1}
    alt="Tech products"
    width={400}
    height={400}
    style={{
      maxWidth: "100%",
      height: "auto",
      borderRadius: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    }}
  />

  <Button
    variant="contained"
    color="primary"
    startIcon={<CurrencyExchangeIcon />}
    sx={{
      mt: 2, // مسافة بين الصورة والزر
      width: "65%", // نفس عرض الـ Box
      boxShadow: theme.shadows[5],
      fontWeight: "bold",
    }}
  >
    Pay now
  </Button>
</Box>

      
    </Box>
   

        </>
    )
}