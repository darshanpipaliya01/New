// import { Typography } from "@mui/material";
// import { Box } from "@mui/material";

// function Feedback(){
//     return(

//         <Box>
//             <Box sx={{display:'flex',paddingTop:'150px',marginLeft:'500px'}}>
//                 <Typography sx={{fontSize:'40px',fontWeight:'800',fontFamily:'inherit',color:'#2a435d'}}>
//                     Happy
//                 </Typography>
//                 <Typography sx={{fontSize:'40px',fontWeight:'800',fontFamily:'inherit',color:'#006633',marginLeft:'10px'}}>
//                     Feedback
//                 </Typography>
//             </Box>
//         </Box>

//     );
// }


// export default Feedback;


import { Box, Typography, Stack } from "@mui/material";

function Feedback() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 15 }, // padding top & bottom responsive
                px: { xs: 3, md: 10 }, // responsive horizontal padding
                backgroundColor: "#f5f5f5", // optional background
            }}
        >
            <Stack
                direction={{ xs: "column", sm: "row" }} // stacked on mobile, row on desktop
                spacing={{ xs: 1, sm: 2 }}
                justifyContent="center"
                alignItems="center"
            >
                <Typography
                    sx={{
                        fontSize: { xs: "28px", sm: "36px", md: "40px" }, // responsive font size
                        fontWeight: 800,
                        fontFamily: "inherit",
                        color: "#2a435d",
                        textAlign: "center",
                    }}
                >
                    Happy
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: "28px", sm: "36px", md: "40px" },
                        fontWeight: 800,
                        fontFamily: "inherit",
                        color: "#006633",
                        textAlign: "center",
                    }}
                >
                    Feedback
                </Typography>
            </Stack>
        </Box>
    );
}

export default Feedback;
