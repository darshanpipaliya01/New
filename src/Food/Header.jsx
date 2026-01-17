// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";
// import logo from './img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png'

// function Header(){
//     return(
//         <Box sx={{display:'flex',paddingTop:'10px',padding:'10px'}}>
//             <Box>
//                 <Typography>
//                     <img style={{width:'150px'}} src={logo} alt="" />
//                     {/* <img style={{width:'100px'}} src="https://t3.ftcdn.net/jpg/02/71/87/46/360_F_271874627_dHmQaKzmsnNjueIQEfbSoGaBBSiCKFYo.jpg" alt="" /> */}
//                 </Typography>
//                 </Box>
//                 <Box sx={{display:'flex',gap:'40px',paddingTop:'40px',ml:16}}>
//                 <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
//                     HOME <i class="fa-solid fa-angle-down"></i>
//                 </Typography>
//                   <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
//                     ABOUT
//                 </Typography>
//                  <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
//                     MENU
//                 </Typography>
//                  <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
//                     BLOG <i class="fa-solid fa-angle-down"></i>
//                 </Typography>
//                  <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
//                     PAGES <i class="fa-solid fa-angle-down"></i>
//                 </Typography>
//                  <Typography sx={{fontWeight:'700',fontFamily:'inherit'}}>
//                     CONTACT
//                 </Typography>
//                 </Box>

//                 <Box sx={{ml:16,display:'flex',paddingTop:'20px'}}>
//                     <Typography sx={{paddingTop:'8px',fontSize:'30px',color:'#063'}}>
//                        <i class="fa-brands fa-shopify"></i>
//                     </Typography>
//                     <Box sx={{ml:6,paddingTop:'8px'}}>
//                         <Typography sx={{border:'1px solid',padding:'12px',borderRadius:'10px',bgcolor:'#063',color:'white',fontFamily:'inherit',fontWeight:'600'}}>
//                             Membership
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Box>

//     );
// }

// export default Header;

    

// ==========================================================================


// import React, { useState } from "react";
// import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link as RouterLink } from "react-router-dom";
// import logo from "./img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png";

// // ===== CONST VARIABLES =====
// const MENU_ITEMS = [
//   { label: "Home", path: "/" },
//     { label: "About", path: "/Aboutpg" },
//   { label: "Error", path: "/Error" },
//   { label: "Menu", path: "/Menupg" },
//   { label: "Blog", path: "/Blogpg" },
//   { label: "Contact", path: "/Contact" },
// ];

// function Header({children}) {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   return (
//     <>
//     <Box sx={{ width: "100%", px: { xs: 2, md: 10 }, py: 2, display: "flex", alignItems: "center" }}>
      
//       {/* LOGO */}
//       <Box>
//         <img src={logo} alt="Logo" style={{ width: "150px" }} />
//       </Box>

//       {/* DESKTOP MENU */}
//       <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center", ml:70 }}>
//         {MENU_ITEMS.map((item, idx) => (
//           <Typography
//             key={idx}
//             component={RouterLink}
//             to={item.path}
//             sx={{
//               fontWeight: 600,
//               color: "#1E3234",
//               textDecoration: "none",
//               position: "relative",
//               transition: "0.3s",
//               "&:hover": { color: "#006633", transform: "translateY(-2px)" },
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 width: "0%",
//                 height: "2px",
//                 bottom: -4,
//                 left: 0,
//                 bgcolor: "#006633",
//                 transition: "0.3s",
//               },
//               "&:hover::after": { width: "100%" },
//             }}
//           >
//             {item.label}
//           </Typography>
//         ))}
//       </Box>

//       {/* MOBILE MENU ICON */}
//       <IconButton
//         sx={{ display: { xs: "block", md: "none" } }}
//         onClick={() => setDrawerOpen(true)}
//       >
//         <MenuIcon fontSize="large" />
//       </IconButton>

//       {/* MOBILE DRAWER */}
//       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 250, p: 2 }}>
//           <List>
//             {MENU_ITEMS.map((item, idx) => (
//               <ListItem key={idx} button component={RouterLink} to={item.path} onClick={() => setDrawerOpen(false)}
//                 sx={{
//                   transition: "0.3s",
//                   "&:hover": { bgcolor: "#006633", color: "#fff", pl: 2 },
//                 }}
//               >
//                 <ListItemText primary={item.label} />
//               </ListItem>
//             ))}
//           </List>

//           {/* MOBILE BUTTON */}
//           <Button
//             fullWidth
//             sx={{
//               mt: 2,
//               bgcolor: "#006633",
//               color: "#fff",
//               py: 1.2,
//               borderRadius: "8px",
//               fontWeight: 600,
//               "&:hover": { bgcolor: "#004d33" },
//             }}
//           >
//             Membership
//           </Button>
//         </Box>
//       </Drawer>
//     </Box>
//     {children}
//     </>
//   );
// }

// export default Header;



// ============================================================


import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "./img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png";

// ===== CONST VARIABLES =====
const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/Aboutpg" },
  { label: "Error", path: "/Error" },
  { label: "Menu", path: "/Menupg" },
  { label: "Blog", path: "/Blogpg" },
  { label: "Contact", path: "/Contact" },
];

function Header({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, md: 10 },
          py: 2,
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Box>
          <img src={logo} alt="Logo" style={{ width: "150px" }} />
        </Box>

        {/* DESKTOP MENU */}
        <Box sx={{ ml:40, display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
          {MENU_ITEMS.map((item, idx) => (
            <Typography
              key={idx}
              component={RouterLink}
              to={item.path}
              sx={{
                fontWeight: 600,
                color: "#1E3234",
                textDecoration: "none",
                position: "relative",
                "&:hover": { color: "#006633" },
              }}
            >
              {item.label}
            </Typography>
          ))}

          {/* LOGIN BUTTON */}
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            sx={{
              borderColor: "#006633",
              color: "#006633",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#006633",
                color: "#fff",
              },
            }}
          >
            Login
          </Button>

          {/* SIGNUP / ADMIN BUTTON */}
          <Button
            component={RouterLink}
            to="/admin"
            variant="contained"
            sx={{
              bgcolor: "#006633",
              fontWeight: 600,
              "&:hover": { bgcolor: "#004d33" },
            }}
          >
            Admin Panel
          </Button>
        </Box>

        {/* MOBILE MENU ICON */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {MENU_ITEMS.map((item, idx) => (
              <ListItem
                key={idx}
                button
                component={RouterLink}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          {/* MOBILE LOGIN */}
          <Button
            fullWidth
            component={RouterLink}
            to="/login"
            sx={{
              mt: 2,
              border: "2px solid #006633",
              color: "#006633",
              fontWeight: 600,
            }}
          >
            Login
          </Button>

          {/* MOBILE ADMIN */}
          <Button
            fullWidth
            component={RouterLink}
            to="/admin"
            sx={{
              mt: 1,
              bgcolor: "#006633",
              color: "#fff",
              fontWeight: 600,
              "&:hover": { bgcolor: "#004d33" },
            }}
          >
            Admin Panel
          </Button>
        </Box>
      </Drawer>

      {children}
    </>
  );
}

export default Header;
