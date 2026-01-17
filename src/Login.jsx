import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo admin login
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      history.push("/admin"); // ✅ v5 navigation
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper elevation={5} sx={{ p: 4, width: 380 }}>
        <Typography variant="h5" textAlign="center" fontWeight="bold" mb={3}>
          Admin Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email / Username"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              bgcolor: "#006633",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#004d33" },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
