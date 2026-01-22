

import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { useHistory, Link as RouterLink } from "react-router-dom";

function Admin() {
    const history = useHistory();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("adminUser");

        if (!storedUser) {
            history.push("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [history]);

    const handleLogout = () => {
        localStorage.removeItem("adminUser");
        history.push("/login");
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
            <Paper sx={{ p: 4, width: 400 }}>
                <Typography variant="h5" mb={2}>
                    Admin Panel
                </Typography>

                {user && (
                    <>
                        <Typography>
                            <strong>Username:</strong> {user.username}
                        </Typography>
                        <Typography>
                            <strong>Email:</strong> {user.email}
                        </Typography>
                    </>
                )}

                <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                    {/* Logout button */}
                    <Button
                        fullWidth
                        sx={{
                            bgcolor: "#d32f2f",
                            color: "#fff",
                            "&:hover": { bgcolor: "#b71c1c" },
                        }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>

                    {/* Back to Website button */}
                    <Button
                        fullWidth
                        component={RouterLink}
                        to="/"
                        sx={{
                            bgcolor: "#006633",
                            color: "#fff",
                            "&:hover": { bgcolor: "#004d33" },
                        }}
                    >
                        Back to Website
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default Admin;





