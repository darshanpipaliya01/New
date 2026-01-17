// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";

// function Image(){
//     return(

//         <Box>
//             <Box sx={{padding:'50px',paddingTop:'200px'}}>
//                 <Typography>
//                     <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/ins1.jpg" alt="" />
//                     <img style={{width:'350px'}} src="https://html.imjol.com/khadyo/khadyo/assets/images/img/inst2.jpg" alt="" />
//                     <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/inst3.jpg" alt="" />
//                     <img src="https://html.imjol.com/khadyo/khadyo/assets/images/img/ins4.jpg" alt="" />
//                 </Typography>
//             </Box>
//         </Box>

//     );
// }


// export default Image;


import { Box } from "@mui/material";

function ImageSection() {
    const imageStyle = {

        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "14px",
        transition: "all 0.4s ease",
    };

    return (
        <Box
            sx={{

                px: { xs: 2, md: 6 },
                pt: { xs: 6, md: 20 },
                pb: 6,
            }}
        >
            <Box
                sx={{
                    padding: '20px',
                    paddingTop: '50px',
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",   // 📱 mobile → 2 images
                        md: "repeat(4, 1fr)",   // 💻 desktop → 4 images
                    },
                    gap: 3,
                }}
            >
                {[
                    "https://html.imjol.com/khadyo/khadyo/assets/images/img/ins1.jpg",
                    "https://html.imjol.com/khadyo/khadyo/assets/images/img/inst2.jpg",
                    "https://html.imjol.com/khadyo/khadyo/assets/images/img/inst3.jpg",
                    "https://html.imjol.com/khadyo/khadyo/assets/images/img/ins4.jpg",
                ].map((img, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "14px",
                            cursor: "pointer",
                            "&:hover img": {
                                transform: "scale(1.12)",
                            },
                            "&:hover::after": {
                                opacity: 1,
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))",
                                opacity: 0,
                                transition: "0.4s",
                            },
                        }}
                    >
                        <img src={img} alt="" style={imageStyle} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default ImageSection;
