// import { Typography } from "@mui/material";
// import { Box } from "@mui/material";

// function Bottle(){
//     return(

//         <Box>
//             <Box sx={{paddingTop:'100px'}}>
//             <Box sx={{display:'flex',marginLeft:'350px'}}>
//                 <Typography sx={{color:'#2a435d',fontSize:'38px',fontFamily:'inherit',fontWeight:'800'}}>
//                     Explore Our
//                 </Typography>
//                 <Typography sx={{color:'#063',marginLeft:'10px',fontSize:'38px',fontFamily:'inherit',fontWeight:'800'}}> 
//                     Bottles & Cans
//                 </Typography>
//             </Box>

//             <Box sx={{display:'flex',marginLeft:'50px'}}>
//             <Box sx={{paddingTop:'100px',marginLeft:'80px'}}>
//                  <Typography>
//                     <img style={{width:'200px'}} src="https://goodtimepizza.com.au/wp-content/uploads/2023/10/can_1.png" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'40px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                     Gunna Can
//                 </Typography>
//                 <Typography sx={{marginLeft:'40px',fontSize:'12px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>


//             <Box sx={{paddingTop:'100px',marginLeft:'100px'}}>
//                 <Typography sx={{marginLeft:'20px'}}>
//                     <img style={{width:'220px'}} src="https://wallpapers.com/images/hd/assorted-soft-drink-cans-lineup-0fryp3gqusymp7nm.png" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'6px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                     Dr Pepper Can     
//                 </Typography>
//                 <Typography sx={{fontSize:'14px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>


//             <Box sx={{paddingTop:'100px',marginLeft:'100px'}}>
//                 <Typography>
//                     <img style={{width:'300px'}} src="https://www.shutterstock.com/image-photo/los-angeles-usa-november-12-600nw-230138068.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'20px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                   Ocem Blue
//                 </Typography>
//                 <Typography sx={{fontSize:'14px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>


//             <Box sx={{paddingTop:'80px',marginLeft:'100px'}}>
//                 <Typography>
//                     <img style={{width:'170px'}} src="https://d1j8usc275ufjv.cloudfront.net/flex-cheese/media/images/medium/66bd0b30b5735_46f2ea8428b039c601fb637b43b6b2bb.png?cache=2023-02-16-1-11" alt="" />
//                 </Typography>
//                 <Typography sx={{marginLeft:'10px',color:'#2a435d',fontSize:'24px',fontWeight:'800',fontFamily:'inherit'}}>
//                     Calyps Ocem
//                 </Typography>
//                 <Typography sx={{fontSize:'14px',paddingTop:'18px',fontFamily:'inherit',color:'#2a435d',fontWeight:'500'}}>
//                     It is a long established fact <br /> that a reader BBQ Chicken.
//                 </Typography>
//                 <Typography sx={{paddingTop:'12px',fontSize:'18px',color:'#2a435d',fontWeight:'700',fontFamily:'inherit',marginLeft:'30px'}}>
//                     price :$50.00
//                 </Typography>
//             </Box>
//             </Box>
//             </Box>

//         <Box sx={{paddingTop:'50px',marginLeft:'130px'}}>
//             <Typography sx={{borderRadius:'10px',textAlign:'center',bgcolor:'#006633',color:'white',border:'1px solid',fontFamily:'inherit',fontWeight:'600',width:'100px',padding:'10px'}}>
//                 See All Cans
//             </Typography>
//         </Box>


//         </Box>

//     )
// }

// export default Bottle;



import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useState } from "react";

const bottles = [
  {
    title: "Gunna Can",
    img: "https://goodtimepizza.com.au/wp-content/uploads/2023/10/can_1.png",
  },
  {
    title: "Dr Pepper Can",
    img: "https://wallpapers.com/images/hd/assorted-soft-drink-cans-lineup-0fryp3gqusymp7nm.png",
  },
  {
    title: "Ocem Blue",
    img: "https://www.shutterstock.com/image-photo/los-angeles-usa-november-12-600nw-230138068.jpg",
  },
  {
    title: "Calyps Ocem",
    img: "https://d1j8usc275ufjv.cloudfront.net/flex-cheese/media/images/medium/66bd0b30b5735_46f2ea8428b039c601fb637b43b6b2bb.png",
  },
];

function Bottle() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ py: { xs: 6, md: 12 }, px: { xs: 2, md: 10 } }}>
        {/* Heading */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 6 }}>
          <Typography sx={{ color: "#2a435d", fontSize: { xs: 22, md: 38 }, fontWeight: 800 }}>
            Explore Our
          </Typography>
          <Typography sx={{ color: "#063", fontSize: { xs: 22, md: 38 }, fontWeight: 800 }}>
            Bottles & Cans
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {bottles.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: 250,
                  textAlign: "center",
                  borderRadius: 3,
                  color: '#2a435d',
                  transition: "0.4s",
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ pt: 4 }}>
                  <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    sx={{
                      width: 180,
                      height: 180,
                      objectFit: "contain",
                      mx: "auto",
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography sx={{ fontSize: 22, fontWeight: 800 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 13, py: 2, fontFamily: "cursive", fontWeight: '500' }}>
                    It is a long established fact that a reader BBQ Chicken.
                  </Typography>
                  <Typography sx={{ fontSize: 18, fontWeight: 700, fontFamily: 'inherit' }}>
                    Price : $50.00
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* SEE ALL BUTTON */}
        <Box textAlign="center" mt={6}>
          <Button
            onClick={handleOpen}
            sx={{
              bgcolor: "#006633",
              color: "#fff",
              px: 4,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 600,
              color: 'white',
              "&:hover": { bgcolor: "black", color: 'white' },

            }}
          >
            See All Cans
          </Button>
        </Box>
      </Box>

      {/* SEE ALL CANS PANEL */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: 800 }}>
          All Bottles & Cans 🥤
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={3} mt={1}>
            {bottles.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: "center", p: 2 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: "120px", height: "120px", objectFit: "contain" }}
                  />
                  <Typography sx={{ mt: 2, fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>Price: $50</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Bottle;

