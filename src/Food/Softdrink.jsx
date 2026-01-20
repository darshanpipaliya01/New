// import { Box } from "@mui/material";
// import { Typography } from "@mui/material";

// function Softdrink() {
//   return (

//     <Box sx={{ display: 'flex', paddingTop: '100px' }}>
//       <Box sx={{ display: 'flex', padding: '20px' }}>
//         <Box sx={{ paddingLeft: '50px' }}>
//           <Typography>
//             <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/hticon1.png" alt="" />
//           </Typography>
//           <Box sx={{ display: 'flex', paddingTop: '10px', color: 'orange' }}>
//             <Typography>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//             </Typography>
//           </Box>
//           <Typography sx={{ fontSize: "24px", fontFamily: 'inherit', paddingTop: '10px', fontWeight: '700' }}>
//             5 Star Rating
//           </Typography>
//           <Typography sx={{ fontFamily: 'inherit', fontSize: '16px', paddingTop: '10px', fontWeight: '500' }}>
//             Our All Drink Prodcut <br /> Kegs of
//             the moment!
//           </Typography>
//           <Box sx={{ paddingTop: '40px' }}>
//             <Typography>
//               <img style={{ width: '200px' }} src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg2.jpg" alt="" />
//             </Typography>
//           </Box>
//         </Box>
//         <Box>
//           <Typography>
//             <img style={{ width: '200px', marginLeft: '20px' }} src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg1.jpg" alt="" />
//           </Typography>
//           <Box sx={{ padding: '50px' }}>
//             <Typography sx={{ fontSize: '32px', color: '#006633', fontFamily: 'inherit', fontWeight: '700' }}>
//               25 Years+
//             </Typography>
//             <Typography sx={{ fontSize: '16px', color: '#2a435d', fontFamily: 'inherit', fontWeight: '700' }}>
//               experience skills
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       <Box sx={{ paddingTop: '50px', marginLeft: '50px' }}>
//         <Typography sx={{ fontSize: '40px', fontWeight: '900', fontFamily: 'inherit', color: '#2a435d' }}>
//           Softdrink Help Your <br />
//           Harmoneuous & Relation
//         </Typography>
//         <Typography sx={{ fontSize: '40px', fontWeight: '900', fontFamily: 'inherit', color: '#006633' }}>
//           Health
//         </Typography>
//         <Typography sx={{ fontSize: '13px', paddingTop: '10px', color: '#2a435d', fontFamily: 'inherit', fontWeight: '500' }}>
//           Christmas is coming! Get your gifts sorted early, then you can sit back and enjoy some <br />
//           festive beers for yourself!
//         </Typography>



//         <Box sx={{ display: 'flex', paddingTop: '40px' }}>
//           <Typography>
//             <img style={{ width: '80px' }} src="https://img.freepik.com/premium-photo/smiley-face-with-sunglasses-straw-front-glass-beer_1046684-41171.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
//           </Typography>
//           <Typography sx={{ marginLeft: '20px', fontSize: '22px', paddingTop: '8px', fontWeight: '800', fontFamily: 'inherit', color: '#2a435d' }}>
//             They Who Drink Soft
//             Will think <br /> Batter
//           </Typography>
//         </Box>
//         <Typography sx={{ paddingTop: '20px', marginLeft: '100px', fontFamily: 'inherit', fontWeight: '500', color: '#2a435d' }}>
//           <i style={{ marginRight: '10px' }} class="fa-solid fa-microphone"></i>Washington Lrving
//         </Typography>
//         <Box sx={{ paddingTop: '40px', marginLeft: '20px' }}>
//           <Typography sx={{ border: '1px solid', borderRadius: '10px', color: 'white', bgcolor: '#006633', padding: '10px', width: '130px', textAlign: 'center', fontFamily: 'inherit', fontWeight: '500' }}>
//             Shop Now
//           </Typography>
//         </Box>
//       </Box>
//     </Box>


//   )
// }


// export default Softdrink;

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function Softdrink() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 10 },
        py: 10,
        gap: 6,
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ display: "flex", gap: 4, padding: '10px' }}>
        <Box>
          <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/hticon1.png" alt="" />

          <Box sx={{ display: "flex", color: "orange", mt: 1 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} />
            ))}
          </Box>

          <Typography sx={{ fontSize: 22, fontWeight: 700, mt: 1 }}>
            5 Star Rating
          </Typography>

          <Typography sx={{ mt: 1, fontFamily: 'inherit', fontWeight: '500' }}>
            Our All Drink Product <br /> Kegs of the moment!
          </Typography>

          <Box
            sx={{
              mt: 4,
              overflow: "hidden",
              borderRadius: 2,
              "& img": { transition: "0.4s" },
              "&:hover img": { transform: "scale(1.1)" },
            }}
          >
            <img
              width="200"
              src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg2.jpg"
              alt=""
            />
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              "& img": { transition: "0.4s" },
              "&:hover img": { transform: "scale(1.1)" },
            }}
          >
            <img
              width="200"
              src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htimg1.jpg"
              alt=""
            />
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: 32, fontWeight: 700, color: "#006633" }}>
              25 Years+
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              Experience Skills
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* RIGHT SIDE */}
      <Box>
        <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900 }}>
          Softdrink Help Your <br /> Harmoneuous & Relation
        </Typography>

        <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900, color: "#006633" }}>
          Health
        </Typography>

        <Typography sx={{ mt: 2, fontFamily: 'inherit', fontWeight: '700' }}>
          Christmas is coming! Get your gifts sorted early, then enjoy festive drinks!
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <img
            width="80"
            style={{ borderRadius: "50%" }}
            src="https://img.freepik.com/premium-photo/smiley-face-with-sunglasses-straw-front-glass-beer_1046684-41171.jpg"
            alt=""
          />
          <Typography sx={{ ml: 2, fontSize: 20, fontWeight: 700, fontFamily: 'cursive' }}>
            They Who Drink Soft <br /> Will think Better
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            bgcolor: 'black',
            px: 4,
            py: 1.5,
            "&:hover": {
              bgcolor: "white",
              color: 'black',
              transform: "translateY(-3px)",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}

export default Softdrink;

