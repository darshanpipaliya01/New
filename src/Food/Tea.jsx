import { Box } from "@mui/material";
import { Typography } from "@mui/material";


function Tea(){
    return(

        <Box sx={{display:'flex'}}>
        <Box sx={{padding:'100px',paddingTop:'80px'}}>
            <Typography sx={{color:'#2a435d',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Brand Iced Green
            </Typography>
            <Box sx={{display:'flex'}}>
            <Typography sx={{color:'#2a435d',fontWeight:'900',lineHeight:'50px',fontFamily:'inherit',fontSize:'40px'}}>
                Tea Lemon
            </Typography>
            <Typography sx={{marginLeft:'10px',lineHeight:'50px',color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Juice
            </Typography>
            </Box>
            <Typography sx={{color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Food Included
            </Typography>
            <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontSize:'14px',fontWeight:'500',color:'#2a435d'}}>
               Christmas is coming! Get your gifts sorted early, then you can <br /> sit back and enjoy some
                                festive beers for yourself!
            </Typography>

            <Box sx={{display:'flex',paddingTop:'20px'}}>
                <Box>
                    <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
                        Extra Juice
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                        15%
                    </Typography>
                </Box>
                 <Box sx={{marginLeft:'30px'}}>
                    <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
                        Alcohol
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                        0%
                    </Typography>
                </Box>
                 <Box sx={{marginLeft:'30px'}}>
                    <Typography sx={{fontSize:'18px',color:'#2a435d',fontFamily:'inherit',fontWeight:'700'}}>
                        Vitamin A-Z
                    </Typography>
                    <Typography sx={{fontSize:'32px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                        90%
                    </Typography>
                </Box>
            </Box>

            <Box sx={{paddingTop:'20px'}}>
                <Typography sx={{fontFamily:'inherit',fontWeight:'600',borderRadius:'10px',bgcolor:'#006633',padding:'10px',width:'100px',border:'1px solid',textAlign:'center',color:'white'}}>
                    Shop Now
                </Typography>
                </Box>
            </Box>


            <Box sx={{paddingTop:'50px',marginLeft:'100px'}}>
                <Typography>
                    <img style={{width:'500px'}} src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-tropical-fruit-juice-with-splash-and-fresh-fruits-png-image_19080900.png" alt="" />
                </Typography>
            </Box>

            </Box>

    );
}


export default Tea;

// import {
//     Box,
//     Typography,
//     Button,
//     Stack,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     TextField,
// } from "@mui/material";
// import { useState } from "react";

// function Tea() {
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <>
//             <Box
//                 sx={{
//                     display: "flex",
//                     flexDirection: { xs: "column-reverse", md: "row" },
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     px: { xs: 3, md: 10 },
//                     py: { xs: 6, md: 12 },
//                     gap: { xs: 4, md: 0 },
//                 }}
//             >
//                 {/* LEFT CONTENT */}
//                 <Box sx={{ width: { xs: "100%", md: "50%" } }}>
//                     <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900, color: "#2a435d" }}>
//                         Brand Iced Green
//                     </Typography>

//                     <Stack direction="row" spacing={1}>
//                         <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900, color: "#2a435d" }}>
//                             Tea Lemon
//                         </Typography>
//                         <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900, color: "#006633" }}>
//                             Juice
//                         </Typography>
//                     </Stack>

//                     <Typography sx={{ fontSize: { xs: 28, md: 40 }, fontWeight: 900, color: "#006633" }}>
//                         Food Included
//                     </Typography>

//                     <Typography sx={{ mt: 2, fontSize: 15, color: "#2a435d" }}>
//                         Christmas is coming! Get your gifts sorted early, then you can
//                         sit back and enjoy some festive beers!
//                     </Typography>

//                     {/* STATS */}
//                     <Stack direction="row" spacing={4} sx={{ mt: 3 }}>
//                         {[
//                             { label: "Extra Juice", value: "15%" },
//                             { label: "Alcohol", value: "0%" },
//                             { label: "Vitamin A-Z", value: "90%" },
//                         ].map((item, idx) => (
//                             <Box key={idx}>
//                                 <Typography sx={{ fontWeight: 700 }}>{item.label}</Typography>
//                                 <Typography sx={{ fontSize: 28, fontWeight: 900, color: "#006633" }}>
//                                     {item.value}
//                                 </Typography>
//                             </Box>
//                         ))}
//                     </Stack>

//                     {/* SHOP NOW BUTTON */}
//                     <Button
//                         onClick={handleOpen}
//                         sx={{
//                             mt: 3,
//                             bgcolor: "#006633",
//                             color: "#fff",
//                             fontWeight: 600,
//                             px: 4,
//                             py: 1.5,
//                             borderRadius: 2,
//                             "&:hover": { bgcolor: 'black' },
//                         }}
//                     >
//                         Shop Now
//                     </Button>
//                 </Box>

//                 {/* RIGHT IMAGE */}
//                 <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "center" }}>
//                     <img
//                         src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-tropical-fruit-juice-with-splash-and-fresh-fruits-png-image_19080900.png"
//                         alt="Tea Juice"
//                         style={{ width: "100%", maxWidth: "500px" }}
//                     />
//                 </Box>
//             </Box>

//             {/* 🔥 SHOP PANEL (MUI DIALOG) */}
//             <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//                 <DialogTitle sx={{ fontWeight: 800 }}>
//                     Order Tea Juice 🍵
//                 </DialogTitle>

//                 <DialogContent sx={{ mt: 1 }}>
//                     <TextField fullWidth label="Customer Name" margin="normal" />
//                     <TextField fullWidth label="Product Name" value="Tea Lemon Juice" margin="normal" />
//                     <TextField fullWidth label="Quantity" type="number" margin="normal" />
//                     <TextField fullWidth label="Address" multiline rows={3} margin="normal" />
//                 </DialogContent>

//                 <DialogActions sx={{ p: 2 }}>
//                     <Button onClick={handleClose} color="error">
//                         Cancel
//                     </Button>
//                     <Button variant="contained" onClick={handleClose}>
//                         Place Order
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     );
// }

// export default Tea;
