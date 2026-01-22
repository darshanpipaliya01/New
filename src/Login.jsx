// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// import { Link as RouterLink } from "react-router-dom";


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Login submitted!');
//         setEmail('');
//         setPassword('');
//     };

//     return (
//         <Box
//             sx={{
//                 minHeight: '100vh',
//                 backgroundColor: '#000',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',


//             }}
//         >
//             <Paper elevation={6} sx={{ p: 4, width: 350, borderRadius: 3, backgroundColor: '#fff', color: '#fff' }}>
//                 <Typography variant="h4" textAlign="center" mb={3} sx={{ color: '#000', fontWeight: 'bold' }}>
//                     Login
//                 </Typography>

//                 <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                     <TextField
//                         label="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     <TextField
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />

//                     <Button type="submit" variant="contained">
//                         Login
//                     </Button>

//                     {/* BACK TO WEBSITE */}
//                     <Button
//                         component={RouterLink}
//                         to="/"
//                         fullWidth
//                         variant="outlined"
//                         sx={{
//                             mt: 2,
//                             borderColor: "#006633",
//                             color: "#006633",
//                         }}
//                     >
//                         Back to Website
//                     </Button>

//                 </Box>
//             </Paper>
//         </Box>
//     );
// };

// export default Login;



import React, { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper
} from "@mui/material";
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
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

        // Save data (without password) to localStorage
        localStorage.setItem(
            "adminUser",
            JSON.stringify({
                username: formData.username,
                email: formData.email,
            })
        );

        // Redirect to admin panel
        history.push("/admin");
    };

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Paper sx={{ p: 4, width: 350 }}>
                <Typography variant="h5" textAlign="center" mb={3}>
                    Admin Login
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        margin="normal"
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        margin="normal"
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        margin="normal"
                        onChange={handleChange}
                        required
                    />

                    <Button
                        fullWidth
                        type="submit"
                        sx={{
                            mt: 3,
                            bgcolor: "#006633",
                            color: "#fff",
                            py: 1.2,
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
