import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Navbar from "../../components/static/navbar";
import Footer from "../../components/static/footer";
import Home from "../home";
import { useNavigate } from "react-router-dom";

export default function Product () {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = '/check'; 
    navigate(path);
  }

  const email = localStorage.getItem("token")
  console.log(email);

  return (
    <Box>
      <Box minHeight="20vh"
        width="100%"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        sx={{
          backgroundImage: 'url(./yog.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}>

        < Navbar />
      </Box>


      <Box minHeight="25rem" alignItems="center" sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        boxShadow: 3,
        backgroundColor: "#fff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        borderRadius: '16px',

      }}>

        <Grid container
          justifyContent="center"
          alignItems="center">



<Grid container item>
          <Box
            width="100%"
            bgcolor="white"
            borderRadius="xl"
            boxShadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: 'url(./yog.jpg)',
                  backgroundSize: "cover",
                  alignContent: "center",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <Box display="flex" p={1}>
                      
                    </Box>

                    <Box display="flex" color="white" p={1}>
                      
                
                    </Box>

                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Box component="form" p={2} method="post">
                  <Box px={3} py={{ xs: 2, sm: 6 }}>
                    <Typography variant="h2" mb={1}>
                      Você escolheu Yoga
                    </Typography>
                    <Typography variant="body1" color="text" mb={2}>
                    Yoga é um conceito é uma filosofia, que trabalha o corpo e a mente, através de disciplinas tradicionais de quem a pratica. Yoga é relacionada ao budismo e ao hinduísmo, com práticas como exercícios e meditação para trabalhar a parte física e também a mente.
                    </Typography>
                  </Box>
                  <Box pt={0.5} pb={3} px={3}>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <Button color="info" onClick={routeChange}>
                        Comprar aula
                      </Button>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>


        </Grid>

      </Box>

      <br></br>
      <Footer />


    </Box>
  )
} 