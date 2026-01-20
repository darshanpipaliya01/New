// import { Box, Typography, Grid } from "@mui/material";
// import Header from '../Header'
// import Footer from '../Footer'


// function Error() {
//     return (
//         <>
//             <Header></Header>
//             <Box>
//                 <Box sx={{ bgcolor: '#ff679a', padding: '50px' }}>
//                     <Typography sx={{ ml: 30, paddingTop: '50px' }}>
//                         <img style={{ width: '650px' }} src="https://faryita.wpengine.com/wp-content/themes/faryita/assets/images/404-Error.png" alt="" />
//                     </Typography>
//                     <Typography sx={{ fontSize: '50px', paddingTop: '80px', ml: 30, color: 'white', fontWeight: '500', fontFamily: 'inherit' }}>
//                         OPPS ! THE PAGE NOT FOUND.
//                     </Typography>
//                     <Typography sx={{ textAlign: 'center', paddingTop: '24px', fontFamily: 'inherit', fontSize: '22px', color: 'white', fontWeight: '400' }}>
//                         We apologize for the inconvenience. You can use our search bar to find what you're <br /> looking for, or contact us for further assistance.
//                     </Typography>
//                     <Box sx={{ paddingTop: '50px', color: 'white', ml: 60 }}>
//                         <Typography sx={{ width: '150px', padding: '20px', textAlign: 'center', fontFamily: 'inherit', fontWeight: '400', fontSize: '22px', bgcolor: '#ffc935', color: 'black', borderRadius: '50px' }}>
//                             Back To Home
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Box>

//             <Footer></Footer>

//         </>

//     )
// }

// export default Error;


import { Box, Typography, Grid } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

function Error() {
  return (
    <>
      <Header></Header>

      <Box sx={{ bgcolor: "#ff679a", py: { xs: 5, md: 12 }, px: { xs: 2, md: 10 } }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={8} textAlign="center">
            <Box
              component="img"
              src="https://faryita.wpengine.com/wp-content/themes/faryita/assets/images/404-Error.png"
              alt="404 Error"
              sx={{
                width: { xs: "100%", md: "650px" },
                maxWidth: "100%",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Grid>

          {/* Text */}
          <Grid item xs={12} textAlign="center">
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "50px" },
                fontWeight: 500,
                fontFamily: "inherit",
                color: "white",
                mt: { xs: 4, md: 8 },
              }}
            >
              OPPS ! THE PAGE NOT FOUND.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "22px" },
                fontWeight: 400,
                fontFamily: "inherit",
                color: "white",
                mt: 3,
                lineHeight: 1.6,
              }}
            >
              We apologize for the inconvenience. You can use our search bar to find what you're <br />
              looking for, or contact us for further assistance.
            </Typography>
          </Grid>

          {/* Back To Home Button */}
          <Grid item xs={12} textAlign="center" sx={{ mt: 5 }}>
            <Typography
              sx={{
                display: "inline-block",
                px: 5,
                py: 2,
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: 400,
                fontFamily: "inherit",
                bgcolor: "#ffc935",
                color: "black",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#ffdf70",
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                },
              }}
            >
              Back To Home
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
}

export default Error;
