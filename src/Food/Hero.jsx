// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";

// function Hero(){
//     return(

//         <Box sx={{display:'flex'}}>
//             <Box sx={{paddingTop:'30px',ml:5}}>
//                 <Box>
//                 <Typography sx={{fontSize:'90px',lineHeight:'100px',fontWeight:'700',fontFamily:'inherit',color:'#0096c7'}}>
//                     Frosty Drinks
//                 </Typography>
//                 <Typography sx={{fontSize:'90px',lineHeight:'110px',fontWeight:'700',fontFamily:'cursive',color:'#353535'}}>
//                     Stay Fresh
//                 </Typography>
//                 </Box>
//                 <Typography sx={{paddingTop:'40px',fontFamily:'inherit',fontWeight:'600',color:'#353535'}}>
//                     For a natural energy drink a stewbarry smoothie,juicer then <br /> your taste smoothie,juicer then your tatse.
//                 </Typography>
//                 <Box sx={{paddingTop:'40px'}}>
//                 <Typography sx={{border:'1px solid',padding:'12px',width:'120px',fontFamily:'inherit',fontWeight:'500',textAlign:'center',color:'white',bgcolor:'#353535'}}>
//                     Order Now
//                 </Typography>
//                 <Box sx={{ml:55}}>
//                     <Typography sx={{fontFamily:'cursive',fontSize:'22px',fontWeight:'600',color:'#353535'}}>
//                         Extra Juicy Flavour
//                     </Typography>
//                     <Typography>
//                         <img style={{width:'220px'}} src="https://rosepng.com/wp-content/uploads/2025/01/real-fruit-juice-2.png" alt="" />
//                     </Typography>
//                 </Box>
//                 </Box>
//             </Box>

//             <Box sx={{padding:'40px',paddingTop:'30px'}}>
//                 <Typography>
//                     <img style={{width:'500px'}} src="https://i.pinimg.com/736x/4f/2d/7f/4f2d7fa947f9d9d1743e8f5ef7159327.jpg" alt="" />
//                 </Typography>
//             </Box>

//         </Box>

//     )
// }

// export default Hero;

import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useState } from "react";

function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontSize: { xs: "36px", sm: "48px", md: "80px" },
              fontWeight: 600,
              color: "#0096c7",
              fontFamily: 'cursive',

            }}
          >
            Frosty Drinks
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "36px", sm: "48px", md: "90px" },
              fontWeight: 700,
              fontFamily: "cursive",
              color: "#353535",
            }}
          >
            Stay Fresh
          </Typography>

          <Typography sx={{ mt: 3, fontSize: "16px", fontWeight: 600, color: "#555", fontFamily: 'inherit' }}>
            For a natural energy drink a strawberry smoothie,
            <br />
            juicer then your taste.
          </Typography>

          {/* ORDER BUTTON */}
          <Box
            onClick={handleOpen}
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              bgcolor: "#353535",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "6px",
              cursor: "pointer",
              display: "inline-block",
              transition: "0.4s",
              "&:hover": {
                color: 'black',
                bgcolor: 'white',
                transform: "translateY(-6px)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.3)",
              },
            }}
          >
            Order Now
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center" }}>
          <img
            src="https://html.imjol.com/khadyo/khadyo/assets/images/img/h32.png"
            alt=""
            style={{ width: "420px", maxWidth: "100%" }}
          />
        </Box>
      </Box>

      {/* 🔥 ORDER PANEL (DIALOG) */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 700 }}>Order Your Drink 🥤</DialogTitle>

        <DialogContent sx={{ mt: 1 }}>
          <TextField fullWidth label="Your Name" margin="normal" />
          <TextField fullWidth label="Drink Name" margin="normal" />
          <TextField fullWidth label="Quantity" type="number" margin="normal" />
          <TextField fullWidth label="Address" multiline rows={3} margin="normal" />
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Hero;
