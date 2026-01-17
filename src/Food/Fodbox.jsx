// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";

// function Fodbox(){
//     return(

//      <Box sx={{paddingTop:'120px',display:'flex',marginLeft:'60px'}}>
//         <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'12px',width:'240px'}}>
//             <Typography>
//                 <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
//                 100% Swiss Quality
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit'}}>
//                 You Have come the right place
//             </Typography>
//             <Typography sx={{color:'#2a435d',paddingTop:'20px',fontFamily:'inherit'}}>
//                 Order Now
//             </Typography>
//         </Box>

//          <Box sx={{paddingTop:'50px',marginLeft:'25px',border:'1px solid #a1a0a0ff',padding:'12px',width:'240px'}}>
//             <Typography>
//                 <img src="	https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape4.png" alt="" />
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
//                Organic Production
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit'}}>
//                 You Have come the right place
//             </Typography>
//             <Typography sx={{color:'#2a435d',paddingTop:'20px',fontFamily:'inherit'}}>
//                 Order Now
//             </Typography>
//         </Box>

//          <Box sx={{paddingTop:'50px',marginLeft:'25px',border:'1px solid #a1a0a0ff',padding:'12px',width:'240px'}}>
//             <Typography>
//                 <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape5.png" alt="" />
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
//                 Food Law Certified
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit'}}>
//                 You Have come the right place
//             </Typography>
//             <Typography sx={{color:'#2a435d',paddingTop:'20px',fontFamily:'inherit'}}>
//                 Order Now
//             </Typography>
//         </Box>

//          <Box sx={{paddingTop:'50px',marginLeft:'25px',border:'1px solid #a1a0a0ff',padding:'12px',width:'240px'}}>
//             <Typography>
//                 <img src="	https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape6.png" alt="" />
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
//                 100% Concentration
//             </Typography>
//             <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit'}}>
//                 You Have come the right place
//             </Typography>
//             <Typography sx={{color:'#2a435d',paddingTop:'20px',fontFamily:'inherit'}}>
//                 Order Now
//             </Typography>
//         </Box>
//      </Box>

//     )
// }

// export default Fodbox;




import { Box, Typography, Grid } from "@mui/material";

function Fodbox() {
  const items = [
    {
      img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png",
      title: "100% Swiss Quality",
    },
    {
      img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape4.png",
      title: "Organic Production",
    },
    {
      img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape5.png",
      title: "Food Law Certified",
    },
    {
      img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape6.png",
      title: "100% Concentration",
    },
  ];

  return (
    <Box sx={{ paddingTop: { xs: "60px", md: "120px" } }}>
      <Grid
        container
        spacing={8}
        justifyContent="center"
      >
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                paddingTop: "50px",
                border: "1px solid #a1a0a0ff",
                padding: "12px",
                width: "100%",
                maxWidth: "240px",
                mx: "auto",
                transition: "0.4s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Typography sx={{ textAlign: "center" }}>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    transition: "0.4s ease",
                  }}
                />
              </Typography>

              <Typography
                sx={{
                  color: "#2a435d",
                  fontSize: "22px",
                  fontFamily: "inherit",
                  fontWeight: "700",
                  paddingTop: "14px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#2a435d",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "inherit",
                  textAlign: "center",
                }}
              >
                You Have come the right place
              </Typography>

              <Typography
                sx={{
                  color: "#2a435d",
                  paddingTop: "20px",
                  fontFamily: "inherit",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                Order Now
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Fodbox;
