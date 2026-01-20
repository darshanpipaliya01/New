
import { Box, Typography } from "@mui/material";

function Menu(){
    return(

        <Box sx={{paddingTop:'100px',padding:'70px',display:'flex'}}>
            <Box>
            <Typography sx={{fontSize:'50px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                1999
            </Typography>
            <Typography sx={{color:'#2a435d',paddingTop:'10px',fontSize:'20px',fontWeight:'700',fontFamily:'inherit'}}>
                Journey Now
            </Typography>
            <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontWeight:'500',fontSize:'14px',color:'#2a435d'}}>
                FoodKhan Softdrink Open! Get your <br /> and enjoy some festive for yourself!
            </Typography>
              </Box>  


               <Box sx={{marginLeft:'60px'}}>
            <Typography sx={{fontSize:'50px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                2002
            </Typography>
            <Typography sx={{color:'#2a435d',paddingTop:'10px',fontSize:'20px',fontWeight:'700',fontFamily:'inherit'}}>
               Star Fast Food Menu
            </Typography>
            <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontWeight:'500',fontSize:'14px',color:'#2a435d'}}>
                FoodKhan Softdrink Open! Get your <br /> and enjoy some festive for yourself!
            </Typography>
              </Box>  



               <Box sx={{marginLeft:'60px'}}>
            <Typography sx={{fontSize:'50px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
               2008
            </Typography>
            <Typography sx={{color:'#2a435d',paddingTop:'10px',fontSize:'20px',fontWeight:'700',fontFamily:'inherit'}}>
              Star Burger Menu
            </Typography>
            <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontWeight:'500',fontSize:'14px',color:'#2a435d'}}>
                FoodKhan Softdrink Open! Get your <br /> and enjoy some festive for yourself!
            </Typography>
              </Box>  



               <Box sx={{marginLeft:'60px'}}>
            <Typography sx={{fontSize:'50px',fontFamily:'inherit',fontWeight:'900',color:'#006633'}}>
                2020
            </Typography>
            <Typography sx={{color:'#2a435d',paddingTop:'10px',fontSize:'20px',fontWeight:'700',fontFamily:'inherit'}}>
                Star Burger Menu
            </Typography>
            <Typography sx={{paddingTop:'10px',fontFamily:'inherit',fontWeight:'500',fontSize:'14px',color:'#2a435d'}}>
                FoodKhan Softdrink Open! Get your <br /> and enjoy some festive for yourself!
            </Typography>
              </Box>  
        </Box>

    )
}

export default Menu;


// import { Box, Typography } from "@mui/material";

// const data = [
//     {
//         year: "1999",
//         title: "Journey Now",
//         desc: "FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!",
//     },
//     {
//         year: "2002",
//         title: "Star Fast Food Menu",
//         desc: "FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!",
//     },
//     {
//         year: "2008",
//         title: "Star Burger Menu",
//         desc: "FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!",
//     },
//     {
//         year: "2020",
//         title: "Star Burger Menu",
//         desc: "FoodKhan Softdrink Open! Get your and enjoy some festive for yourself!",
//     },
// ];

// function Menu() {
//     return (
//         <Box
//             sx={{
//                 pt: { xs: 6, md: 12 },
//                 px: { xs: 2, md: 6 },
//             }}
//         >
//             <Box
//                 sx={{
//                     display: "grid",
//                     gridTemplateColumns: {
//                         xs: "1fr",
//                         sm: "repeat(2, 1fr)",
//                         md: "repeat(4, 1fr)",
//                     },
//                     gap: { xs: 4, md: 6 },
//                 }}
//             >
//                 {data.map((item, index) => (
//                     <Box
//                         key={index}
//                         sx={{
//                             p: 3,
//                             borderRadius: "14px",
//                             transition: "0.4s",
//                             cursor: "pointer",
//                             "&:hover": {
//                                 transform: "translateY(-10px)",
//                                 boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
//                             },
//                         }}
//                     >
//                         {/* YEAR */}
//                         <Typography
//                             sx={{
//                                 fontSize: { xs: 38, md: 50 },
//                                 fontWeight: 900,
//                                 color: "#006632",
//                                 transition: "0.4s",
//                                 "&:hover": {
//                                     letterSpacing: "2px",
//                                 },
//                             }}
//                         >
//                             {item.year}
//                         </Typography>

//                         {/* TITLE */}
//                         <Typography
//                             sx={{
//                                 mt: 1,
//                                 fontSize: 18,
//                                 fontWeight: 700,
//                                 color: '#006632',
//                                 fontFamily: 'cursive',
//                             }}
//                         >
//                             {item.title}
//                         </Typography>

//                         {/* DESCRIPTION */}
//                         <Typography
//                             sx={{
//                                 mt: 1,
//                                 fontSize: 14,
//                                 fontWeight: 700,
//                                 color: "#2a435d",
//                                 fontFamily: 'inherit',
//                             }}
//                         >
//                             {item.desc}
//                         </Typography>
//                     </Box>
//                 ))}
//             </Box>
//         </Box>
//     );
// }

// export default Menu;
