import img13 from "../assets/imageProducts/13.jpg"; // ✅
import img12 from "../assets/imageProducts/11.jpg"
import img14 from "../assets/imageProducts/111.jpg"; // ✅
import img15 from "../assets/imageProducts/22.png"; // ✅


import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";



const products = [
  {
    id: 1,
    name: "Lip balm",
    description: " Hydrating lip balm that keeps your lips soft and smooth all day.",
    price: "120 $",
    image:img12,
  },
  {
    id: 2,
    name: "Eyeshadow",
    description: "Silky eyeshadow with rich pigment for stunning eye looks",
    price: "250 $",
    image: img13,
  },
  {
    id: 3,
    name: "Lip gloss",
    description: "Shiny lip gloss that adds a glossy, plump finish to your lips",
    price: "180 $",
    image: img14,
  },
  {
    id: 4,
    name: "Mascara",
    description: "Volumizing mascara that lifts and defines every lash",
    price: "320 $",
    image:img15,
  },
];


export default function ProductsPage(){
      const theme = useTheme();
    
    return(
        <>
         <Grid  container spacing={3}>
      {products.map((product) => (
        <Grid  sx={(theme) => ({
    backgroundColor: theme.palette.background.default
  })}key={product.id} item xs={12} sm={6} md={3}>
          <Card sx={{bgcolor: 'background.main', height: "100%", display: "flex", flexDirection: "column" ,borderRadius:'8%'}}>
           
            <Box
        sx={{
                       

            backgroundColor: theme.palette.background.default,
          flex: { xs: '1 1 100%', md: '1 1 45%' },
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
          mt: { xs: 4, md: 0 },
        }}
      > 

 <img
          src={product.image} // ضع مسار الصورة من public/
          alt={product.name}
          width={400}
          height={400}
          style={{
            maxWidth: '100%',
            height: 'auto',
            
          }}
        />
</Box>
   
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography color="primary" gutterBottom variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {product.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {product.price}
              </Typography>
            </CardContent>
            <CardActions>
                {/* <Link href="/details" style={{ width: '100%', display: 'block' }}> */}
              <Button
fullWidth            
  variant="contained"
                color="primary"
              >
Show details              </Button>
{/* </Link> */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
        </>
    )
}