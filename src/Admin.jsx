// AdminPanel.jsx
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';

function AdminPanel() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Load orders from localStorage
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
    }, []);

    const handleDelete = (id) => {
        const updatedOrders = orders.filter(order => order.id !== id);
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        localStorage.setItem("adminPanelOrders", JSON.stringify(updatedOrders));
    };

    const handleStatusChange = (id) => {
        const updatedOrders = orders.map(order => {
            if (order.id === id) {
                return { ...order, status: order.status === "Pending" ? "Completed" : "Pending" };
            }
            return order;
        });
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        localStorage.setItem("adminPanelOrders", JSON.stringify(updatedOrders));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: "#0096c7" }}>
                📋 Admin Panel - Order Management
            </Typography>

            <Typography variant="body1" sx={{ mb: 3 }}>
                Total Orders: {orders.length}
            </Typography>

            {orders.length === 0 ? (
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary">
                        No orders yet. Orders will appear here when customers place orders.
                    </Typography>
                </Paper>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="orders table">
                        <TableHead sx={{ bgcolor: '#0096c7' }}>
                            <TableRow>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Order ID</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Customer Name</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Drink</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Quantity</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Address</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Date & Time</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Status</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 600 }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id} hover>
                                    <TableCell>#{order.id}</TableCell>
                                    <TableCell>{order.name}</TableCell>
                                    <TableCell>{order.drink}</TableCell>
                                    <TableCell>{order.quantity}</TableCell>
                                    <TableCell>{order.address}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>
                                        <Chip
                                            icon={order.status === "Completed" ? <CheckCircleIcon /> : <PendingIcon />}
                                            label={order.status}
                                            color={order.status === "Completed" ? "success" : "warning"}
                                            variant="outlined"
                                            onClick={() => handleStatusChange(order.id)}
                                            clickable
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDelete(order.id)}
                                            title="Delete Order"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
}

export default AdminPanel;