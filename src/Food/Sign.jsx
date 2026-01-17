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
  TextField,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./img/ChatGPT Image Dec 23, 2025, 07_04_39 PM.png";

const menuItems = ["HOME", "ABOUT", "MENU", "BLOG", "PAGES", "CONTACT"];

function Header() {
  const [open, setOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false); // Show admin panel
  const [authPage, setAuthPage] = useState("login"); // 'login' or 'signup'

  const handleMembershipClick = () => setShowAdmin(true);

  const handleTabChange = (event, newValue) => setAuthPage(newValue);

  // Admin panel with Login/Signup
  const adminPanel = (
    <Box sx={{ p: 5, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h3" sx={{ mb: 3, textAlign: "center", color: "#063" }}>
        Admin Panel
      </Typography>

      {/* Tabs for Login / Signup */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={authPage}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Login" value="login" />
          <Tab label="Signup" value="signup" />
        </Tabs>
      </Paper>

      {authPage === "login" && (
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Password" variant="outlined" type="password" fullWidth />
          <Button
            sx={{ bgcolor: "#063", color: "#fff", "&:hover": { bgcolor: "#045" } }}
          >
            Login
          </Button>
        </Box>
      )}

      {authPage === "signup" && (
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Password" variant="outlined" type="password" fullWidth />
          <TextField label="Confirm Password" variant="outlined" type="password" fullWidth />
          <Button
            sx={{ bgcolor: "#063", color: "#fff", "&:hover": { bgcolor: "#045" } }}
          >
            Signup
          </Button>
        </Box>
      )}

      <Button
        sx={{ mt: 3, bgcolor: "#ccc", color: "#000", "&:hover": { bgcolor: "#aaa" } }}
        onClick={() => setShowAdmin(false)}
      >
        Back to Website
      </Button>
    </Box>
  );

  return (
    <>
      {showAdmin ? (
        adminPanel
      ) : (
        <>
          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
            }}
          >
            {/* LOGO */}
            <Box>
              <img src={logo} alt="logo" style={{ width: "150px" }} />
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: "35px", alignItems: "center" }}>
              {menuItems.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    position: "relative",
                    transition: "0.3s",
                    "&:hover": { color: "#063", transform: "translateY(-3px)" },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: -4,
                      left: 0,
                      bgcolor: "#063",
                      transition: "0.3s",
                    },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>

            {/* RIGHT ICONS */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
              <Typography
                sx={{
                  fontSize: "28px",
                  color: "#063",
                  cursor: "pointer",
                  transition: "0.4s",
                  "&:hover": { transform: "rotate(15deg) scale(1.1)" },
                }}
              >
                <i className="fa-brands fa-shopify"></i>
              </Typography>
              <Button
                sx={{
                  bgcolor: "#063",
                  color: "#fff",
                  px: 3,
                  borderRadius: "10px",
                  fontWeight: 600,
                  transition: "0.3s",
                  "&:hover": {
                    bgcolor: "#045",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                  },
                }}
                onClick={handleMembershipClick}
              >
                Membership
              </Button>
            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* MOBILE DRAWER */}
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 260, p: 2 }}>
              <List>
                {menuItems.map((item, i) => (
                  <ListItem
                    key={i}
                    button
                    sx={{
                      transition: "0.3s",
                      "&:hover": { bgcolor: "#063", color: "#fff", pl: 3 },
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>

              {/* MOBILE BUTTON */}
              <Button
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: "#063",
                  color: "#fff",
                  py: 1.2,
                  borderRadius: "8px",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#045" },
                }}
                onClick={handleMembershipClick}
              >
                Membership
              </Button>
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}

export default Header;
