import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";

export default function StatsCards() {
  const theme = useTheme(); // ✅ صحّحنا هنا

  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: "1,250",
      icon: <PeopleIcon />,
      change: "-4% from last week",
      color: theme.palette.primary.main, // رقم + أيقونة
    },
    {
      id: 2,
      title: "Orders This Week",
      value: "320",
      icon: <ShoppingCartIcon />,
      change: "+8% from last week",
      color: theme.palette.success.main,
    },
    {
      id: 3,
      title: "Most Sold",
      value: "Lip Gloss",
      icon: <TrendingUpIcon />,
      change: "+12% from last week",
      color: theme.palette.warning.main,
    },
    {
      id: 4,
      title: "Revenue",
      value: "$12,400",
      icon: <StarIcon />,
      change: "-2% from last week",
      color: theme.palette.error.main,
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid key={stat.id} item xs={12} sm={6} md={3}>
          <Card
            sx={{
              bgcolor: theme.palette.background.paper,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              py: 2,
            }}
          >
            {/* أيقونة والعنوان بنفس الصف */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                gap: 1.5,
                color: stat.color, // اللون من الثيم
              }}
            >
              <Box sx={{ fontSize: { xs: 30, md: 40 } }}>{stat.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
                {stat.title}
              </Typography>
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  textAlign: "center",
                  color: stat.color, // الرقم ياخذ لون الثيم
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {stat.change}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
