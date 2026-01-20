import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Juices(){
    return(

        <Box sx={{display:'flex'}}>
            <Box sx={{paddingTop:'100px',padding:'50px'}}>
            <Typography>
                <img style={{width:'500px'}} src="https://img.freepik.com/premium-photo/plastic-fruit-juice-bottle-with-tropic-fruits-juice-splash-isolated-white-background_144356-8385.jpg" alt="" />
            </Typography>
            </Box>

        <Box sx={{paddingTop:'100px',marginLeft:'50px'}}>
            <Box>
            <Typography sx={{color:'#2a435d',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Best Ingredients Food
            </Typography>
            <Box sx={{display:'flex'}}>
            <Typography sx={{color:'#2a435d',fontWeight:'900',lineHeight:'50px',fontFamily:'inherit',fontSize:'40px'}}>
                Juices
            </Typography>
            <Typography sx={{marginLeft:'10px',lineHeight:'50px',color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                On Right
            </Typography>
            </Box>
            <Typography sx={{color:'#006633',fontWeight:'900',fontFamily:'inherit',fontSize:'40px'}}>
                Handmade
            </Typography>
            </Box>

            <Box sx={{paddingTop:'40px',display:'flex'}}> 
             <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'12px',width:'180px'}}>
            <Typography>
                <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
                Quality Hops
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit',paddingTop:'10px'}}>
                 Lorem ipsum dolor sit amet <br />
                 consectetur adipisicing elit.
            </Typography>
        </Box>

         <Box sx={{paddingTop:'50px',border:'1px solid #a1a0a0ff',padding:'10px',width:'180px',marginLeft:'20px'}}>
            <Typography>
                <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png" alt="" />
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'22px',fontFamily:'inherit',fontWeight:'700',paddingTop:'14px'}}>
                Premium Malts
            </Typography>
            <Typography sx={{color:'#2a435d',fontSize:'14px',fontWeight:'400',fontFamily:'inherit',paddingTop:'10px'}}>
                Lorem ipsum dolor sit amet <br />
                 consectetur adipisicing elit.
            </Typography>
        </Box>

        </Box>
        </Box>

        </Box>

    );
}


export default Juices; 


// import { Box, Typography } from "@mui/material";

// function Juices() {
//     const cards = [
//         {
//             title: "Quality Hops",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png",
//         },
//         {
//             title: "Premium Malts",
//             description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//             img: "https://html.imjol.com/khadyo/khadyo/assets/images/img/htshape3.png",
//         },
//     ];

//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column-reverse", md: "row" }, // mobile: image below text
//                 alignItems: "center",
//                 px: { xs: 2, md: 6 },
//                 py: { xs: 6, md: 12 },
//                 gap: { xs: 6, md: 10 },
//             }}
//         >
//             {/* LEFT IMAGE */}
//             <Box
//                 sx={{
//                     flex: 1,
//                     textAlign: "center",
//                 }}
//             >
//                 <img
//                     src="https://img.freepik.com/premium-photo/plastic-fruit-juice-bottle-with-tropic-fruits-juice-splash-isolated-white-background_144356-8385.jpg"
//                     alt="Juice Bottle"
//                     style={{
//                         width: "100%",
//                         maxWidth: "500px",
//                         transition: "0.4s",
//                     }}
//                 />
//             </Box>

//             {/* RIGHT TEXT */}
//             <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
//                 <Typography
//                     sx={{
//                         color: "#2a435d",
//                         fontWeight: 900,
//                         fontFamily: "inherit",
//                         fontSize: { xs: "28px", sm: "32px", md: "40px" },
//                     }}
//                 >
//                     Best Ingredients Food
//                 </Typography>

//                 <Box
//                     sx={{
//                         display: "flex",
//                         flexWrap: "wrap",
//                         justifyContent: { xs: "center", md: "flex-start" },
//                         gap: 1,
//                         mt: 1,
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             color: "#2a435d",
//                             fontWeight: 900,
//                             lineHeight: { xs: "38px", md: "50px" },
//                             fontSize: { xs: "28px", sm: "32px", md: "40px" },
//                         }}
//                     >
//                         Juices
//                     </Typography>
//                     <Typography
//                         sx={{
//                             color: "#006633",
//                             fontWeight: 900,
//                             lineHeight: { xs: "38px", md: "50px" },
//                             fontSize: { xs: "28px", sm: "32px", md: "40px" },
//                         }}
//                     >
//                         On Right
//                     </Typography>
//                 </Box>

//                 <Typography
//                     sx={{
//                         color: "#006633",
//                         fontWeight: 900,
//                         fontFamily: "inherit",
//                         fontSize: { xs: "28px", sm: "32px", md: "40px" },
//                         mt: 1,
//                     }}
//                 >
//                     Handmade
//                 </Typography>

//                 {/* CARDS */}
//                 <Box
//                     sx={{
//                         display: "flex",
//                         flexDirection: { xs: "column", md: "row" },
//                         gap: { xs: 4, md: 3 },
//                         mt: 5,
//                         justifyContent: { xs: "center", md: "flex-start" },
//                         flexWrap: "wrap",
//                     }}
//                 >
//                     {cards.map((card, index) => (
//                         <Box
//                             key={index}
//                             sx={{
//                                 border: "1px solid #a1a0a0ff",
//                                 p: 2,
//                                 width: { xs: "100%", sm: "45%", md: "180px" },
//                                 textAlign: "center",
//                                 transition: "0.4s",
//                                 borderRadius: 2,
//                                 "&:hover": {
//                                     transform: "translateY(-6px)",
//                                     boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
//                                 },
//                             }}
//                         >
//                             <img
//                                 src={card.img}
//                                 alt={card.title}
//                                 style={{ width: "80px", maxWidth: "100%" }}
//                             />
//                             <Typography
//                                 sx={{
//                                     color: "#2a435d",
//                                     fontSize: { xs: "20px", md: "22px" },
//                                     fontFamily: "inherit",
//                                     fontWeight: 700,
//                                     mt: 2,
//                                 }}
//                             >
//                                 {card.title}
//                             </Typography>
//                             <Typography
//                                 sx={{
//                                     color: "#2a435d",
//                                     fontSize: { xs: "12px", md: "14px" },
//                                     fontWeight: 400,
//                                     fontFamily: "inherit",
//                                     mt: 1,
//                                 }}
//                             >
//                                 {card.description}
//                             </Typography>
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default Juices;
