import {  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button, useTheme } from '@mui/material';


const products = [
  {
    id: 1,
    name: "Lip balm",
    description: " Hydrating lip balm that keeps your lips soft and smooth all day.",
    price: "120 $",
   
  },
  {
    id: 2,
    name: "Eyeshadow",
    description: "Silky eyeshadow with rich pigment for stunning eye looks",
    price: "250 $",
   
  },
  {
    id: 3,
    name: "Lip gloss",
    description: "Shiny lip gloss that adds a glossy, plump finish to your lips",
    price: "180 $",
   
  },
  {
    id: 4,
    name: "Mascara",
    description: "Volumizing mascara that lifts and defines every lash",
    price: "320 $",
   
  },
];
export default function CardsPage(){
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
                       
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

        </>

    )

}