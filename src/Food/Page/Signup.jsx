import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Container,
    Link
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Signup logic here
        console.log("Signup submitted:", formData);

        // Simulate API call
        setTimeout(() => {
            // After successful signup:

            // 1. Clear the form
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            // 2. Redirect to login page
            navigate("/login");

            // Or show success message and clear form
            // alert("Signup successful!");
            // setFormData({
            //   name: "",
            //   email: "",
            //   password: "",
            //   confirmPassword: ""
            // });
        }, 500);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        width: "100%",
                        borderRadius: 2
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                        sx={{
                            fontWeight: "bold",
                            color: "#006633",
                            mb: 3
                        }}
                    >
                        Create Account
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            margin="normal"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <TextField
                            fullWidth
                            label="Email *"
                            type="email"
                            name="email"
                            margin="normal"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password *"
                            type="password"
                            name="password"
                            margin="normal"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password *"
                            type="password"
                            name="confirmPassword"
                            margin="normal"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                bgcolor: "#006633",
                                py: 1.5,
                                fontSize: "1rem",
                                fontWeight: "bold",
                                "&:hover": { bgcolor: "#004d33" }
                            }}
                        >
                            SIGN UP
                        </Button>

                        <Box sx={{ textAlign: "center", mt: 2 }}>
                            <Typography variant="body2">
                                Already have an account?{" "}
                                <Link
                                    component={RouterLink}
                                    to="/login"
                                    sx={{
                                        color: "#006633",
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        "&:hover": {
                                            textDecoration: "underline"
                                        }
                                    }}
                                >
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
}

export default Signup;