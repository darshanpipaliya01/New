// import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
// import logo from './img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png'


// function Footer() {
//     return (

//         <Box sx={{ display: 'flex' }}>
//             <Box sx={{ paddingTop: '50px' }}>
//                 <Typography>
//                     <img style={{ width: '200px' }} src={logo} alt="" />
//                 </Typography>
//                 <Typography sx={{ marginLeft: '50px', fontFamily: 'inherit', fontSize: '14px', fontWeight: '600' }}>
//                     570 8th Ave,New York, NY 10018 <br />
//                     United States
//                 </Typography>
//                 <Typography sx={{ marginLeft: '50px', color: '#006633', paddingTop: '10px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500' }}>
//                     Google map
//                 </Typography>
//             </Box>
//             <Box sx={{ marginLeft: '100px', paddingTop: '100px' }}>
//                 <Typography sx={{ fontSize: '20px', fontFamily: 'inherit', fontWeight: '700', color: '#2a435d' }}>
//                     Delivery Support
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '700', color: '#006633' }}>
//                     <i style={{ marginRight: '10px' }} class="fa-solid fa-phone"></i>123-59794069
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', color: '#2a435d' }}>
//                     Monday – Friday: 9:00-20:00
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', color: '#2a435d' }} >
//                     Saturday: 11:00 – 15:00
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', color: '#006633', fontWeight: '600' }}>
//                     Email Address
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', color: '#2a435d', fontWeight: '600' }}>
//                     <i style={{ marginRight: '10px' }} class="fa-solid fa-envelope"></i>infofoodkahn@gmail.com
//                 </Typography>
//             </Box>
//             <Box sx={{ marginLeft: '100px', paddingTop: '100px' }}>
//                 <Typography sx={{ fontSize: '20px', fontWeight: '700', fontFamily: 'inherit', color: '#2a435d' }}>
//                     Information
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', color: '#2a435d', fontWeight: '500', paddingTop: '10px' }}>
//                     About Us
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', color: '#2a435d', fontWeight: '500', paddingTop: '6px' }}>
//                     Delivery Information
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', color: '#2a435d', fontWeight: '500', paddingTop: '6px' }}>
//                     Privacy Policy
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', color: '#2a435d', fontWeight: '500', paddingTop: '6px' }}>
//                     Sales
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', color: '#2a435d', fontWeight: '500', paddingTop: '6px' }}>
//                     Terms & Conditions
//                 </Typography>
//             </Box>

//             <Box sx={{ marginLeft: '100px', paddingTop: '100px' }}>
//                 <Typography sx={{ fontSize: '20px', fontWeight: '700', fontFamily: 'inherit', color: '#2a435d' }}>
//                     Newsletter
//                 </Typography>
//                 <Box sx={{ paddingTop: '20px' }}>
//                     <form onSubmit={(e) => e.preventDefault()}>
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             required
//                         />
//                         <button type="submit">
//                             <i className="fas fa-paper-plane"></i>
//                         </button>
//                     </form>
//                 </Box>

//                 <Box sx={{ paddingTop: '20px' }}>
//                     <Typography sx={{ textAlign: 'center', fontWeight: '600', borderRadius: '10px', color: 'white', fontFamily: 'inherit', border: '1px solid', padding: '10px', width: '120px', bgcolor: '#006633' }}>
//                         Subscribe
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>

//     );
// }

// export default Footer;


// export default Footer;


import { Box, Typography, TextField, Button } from "@mui/material";
import logo from './img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png';

function Footer() {
    return (
        <Box
            sx={{
                bgcolor: "#f8f8f8",
                py: { xs: 6, md: 10 },
                px: { xs: 3, md: 10 },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Mobile stacked, Desktop row
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "space-between" },
                    gap: { xs: 6, md: 0 }, // Mobile gap between stacked boxes
                    alignItems: { xs: "center", md: "flex-start" },
                }}
            >
                {/* LOGO & ADDRESS */}
                <Box sx={{ textAlign: { xs: "center", md: "left" }, minWidth: 200 }}>
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            width: "200px",
                            maxWidth: "100%",
                            transition: "0.4s",
                            cursor: "pointer",
                        }}
                    />
                    <Typography sx={{ mt: 2, fontSize: "14px", fontWeight: 600 }}>
                        570 8th Ave, New York, NY 10018 <br />
                        United States
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: "16px",
                            fontWeight: 500,
                            color: "#006633",
                            cursor: "pointer",
                            "&:hover": { color: "#0096c7", textDecoration: "underline" },
                        }}
                    >
                        Google map
                    </Typography>
                </Box>

                {/* DELIVERY SUPPORT */}
                <Box sx={{ minWidth: 200, textAlign: { xs: "center", md: "left" } }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}>
                        Delivery Support
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "22px",
                            fontWeight: 700,
                            color: "#006633",
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "flex-start" },
                            gap: 1,
                            "&:hover": { color: "#0096c7" },
                        }}
                    >
                        <i className="fa-solid fa-phone"></i> 123-59794069
                    </Typography>
                    <Typography sx={{ mb: 0.5, textAlign: { xs: "center", md: "left" } }}>
                        Monday – Friday: 9:00-20:00
                    </Typography>
                    <Typography sx={{ mb: 1, textAlign: { xs: "center", md: "left" } }}>
                        Saturday: 11:00 – 15:00
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: "#006633",
                            mb: 1,
                            "&:hover": { color: "#0096c7", cursor: "pointer" },
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        Email Address
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", md: "flex-start" },
                            gap: 1,
                        }}
                    >
                        <i className="fa-solid fa-envelope"></i> infofoodkahn@gmail.com
                    </Typography>
                </Box>

                {/* INFORMATION */}
                <Box sx={{ minWidth: 200, textAlign: { xs: "center", md: "left" } }}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}>
                        Information
                    </Typography>
                    {[
                        "About Us",
                        "Delivery Information",
                        "Privacy Policy",
                        "Sales",
                        "Terms & Conditions",
                    ].map((item, idx) => (
                        <Typography
                            key={idx}
                            sx={{
                                fontWeight: 500,
                                mb: 0.5,
                                cursor: "pointer",
                                textAlign: { xs: "center", md: "left" },
                                "&:hover": { color: "#006633" },
                            }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>

                {/* NEWSLETTER */}
                <Box
                    sx={{
                        minWidth: 220,
                        textAlign: { xs: "center", md: "left" },
                        width: "100%",
                        maxWidth: 300,
                    }}
                >
                    <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}>
                        Newsletter
                    </Typography>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                            placeholder="Enter your email"
                            type="email"
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                width: "100%",
                                bgcolor: "#006633",
                                "&:hover": { bgcolor: "#0096c7" },
                            }}
                        >
                            Subscribe
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
