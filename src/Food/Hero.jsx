// import { Box } from "@mui/material";
// import {Typography} from "@mui/material";

// function Hero(){
//     return(

//         <Box sx={{display:'flex'}}>
//             <Box sx={{paddingTop:'30px',ml:5}}>
//                 <Box>
//                 <Typography sx={{fontSize:'90px',lineHeight:'100px',fontWeight:'700',fontFamily:'inherit',color:'#0096c7'}}>
//                     Frosty Drinks
//                 </Typography>
//                 <Typography sx={{fontSize:'90px',lineHeight:'110px',fontWeight:'700',fontFamily:'cursive',color:'#353535'}}>
//                     Stay Fresh
//                 </Typography>
//                 </Box>
//                 <Typography sx={{paddingTop:'40px',fontFamily:'inherit',fontWeight:'600',color:'#353535'}}>
//                     For a natural energy drink a stewbarry smoothie,juicer then <br /> your taste smoothie,juicer then your tatse.
//                 </Typography>
//                 <Box sx={{paddingTop:'40px'}}>
//                 <Typography sx={{border:'1px solid',padding:'12px',width:'120px',fontFamily:'inherit',fontWeight:'500',textAlign:'center',color:'white',bgcolor:'#353535'}}>
//                     Order Now
//                 </Typography>
//                 <Box sx={{ml:55}}>
//                     <Typography sx={{fontFamily:'cursive',fontSize:'22px',fontWeight:'600',color:'#353535'}}>
//                         Extra Juicy Flavour
//                     </Typography>
//                     <Typography>
//                         <img style={{width:'220px'}} src="https://rosepng.com/wp-content/uploads/2025/01/real-fruit-juice-2.png" alt="" />
//                     </Typography>
//                 </Box>
//                 </Box>
//             </Box>

//             <Box sx={{padding:'40px',paddingTop:'30px'}}>
//                 <Typography>
//                     <img style={{width:'500px'}} src="https://i.pinimg.com/736x/4f/2d/7f/4f2d7fa947f9d9d1743e8f5ef7159327.jpg" alt="" />
//                 </Typography>
//             </Box>

//         </Box>

//     )
// }

// export default Hero;

// =====================================================


// import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";

// function Hero() {
//   const [open, setOpen] = useState(false);
//   const history = useHistory();

//   const [formData, setFormData] = useState({
//     name: "",
//     drink: "",
//     quantity: 1,
//     address: "",
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Save order to localStorage
//     let orders = JSON.parse(localStorage.getItem("orders")) || [];
//     orders.push(formData);
//     localStorage.setItem("orders", JSON.stringify(orders));

//     // Close dialog and go to admin panel
//     handleClose();
//     history.push("/admin");
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column-reverse", md: "row" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           px: { xs: 2, md: 6 },
//           py: { xs: 4, md: 6 },
//         }}
//       >
//         {/* LEFT CONTENT */}
//         <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
//           <Typography
//             sx={{
//               fontSize: { xs: "36px", sm: "48px", md: "80px" },
//               fontWeight: 600,
//               color: "#0096c7",
//               fontFamily: 'cursive',
//             }}
//           >
//             Frosty Drinks
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "36px", sm: "48px", md: "90px" },
//               fontWeight: 700,
//               fontFamily: "cursive",
//               color: "#353535",
//             }}
//           >
//             Stay Fresh
//           </Typography>

//           <Typography sx={{ mt: 3, fontSize: "16px", fontWeight: 600, color: "#555", fontFamily: 'inherit' }}>
//             For a natural energy drink a strawberry smoothie,
//             <br />
//             juicer then your taste.
//           </Typography>

//           {/* ORDER BUTTON */}
//           <Box
//             onClick={handleOpen}
//             sx={{
//               mt: 4,
//               px: 4,
//               py: 1.5,
//               bgcolor: "#353535",
//               color: "#fff",
//               fontWeight: 600,
//               borderRadius: "6px",
//               cursor: "pointer",
//               display: "inline-block",
//               transition: "0.4s",
//               "&:hover": {
//                 color: 'black',
//                 bgcolor: 'white',
//                 transform: "translateY(-6px)",
//                 boxShadow: "0 14px 35px rgba(0,0,0,0.3)",
//               },
//             }}
//           >
//             Order Now
//           </Box>
//         </Box>

//         {/* RIGHT IMAGE */}
//         <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center" }}>
//           <img
//             src="https://html.imjol.com/khadyo/khadyo/assets/images/img/h32.png"
//             alt=""
//             style={{ width: "420px", maxWidth: "100%" }}
//           />
//         </Box>
//       </Box>

//       {/* 🔥 ORDER PANEL (DIALOG) */}
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//         <DialogTitle sx={{ fontWeight: 700 }}>Order Your Drink 🥤</DialogTitle>

//         <DialogContent sx={{ mt: 1 }}>
//           <TextField
//             fullWidth
//             label="Your Name"
//             name="name"
//             margin="normal"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             label="Drink Name"
//             name="drink"
//             margin="normal"
//             value={formData.drink}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             label="Quantity"
//             type="number"
//             name="quantity"
//             margin="normal"
//             value={formData.quantity}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             label="Address"
//             multiline
//             rows={3}
//             name="address"
//             margin="normal"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </DialogContent>

//         <DialogActions sx={{ p: 2 }}>
//           <Button onClick={handleClose} color="error">
//             Cancel
//           </Button>
//           <Button variant="contained" onClick={handleSubmit}>
//             Place Order
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }

// export default Hero;



// ==========================================

import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Snackbar, Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom"; // Changed from useNavigate

function Hero() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory(); // Changed from useNavigate

  const [formData, setFormData] = useState({
    name: "",
    drink: "",
    quantity: 1,
    address: "",
    date: new Date().toLocaleString(),
    status: "Pending"
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "quantity" ? parseInt(value) || 1 : value });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.drink || !formData.address) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    // Show loading
    setLoading(true);

    // Simulate API call/processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      // Get existing orders or initialize empty array
      let orders = JSON.parse(localStorage.getItem("orders")) || [];

      // Create order object with unique ID
      const newOrder = {
        ...formData,
        id: Date.now(), // Unique ID
        date: new Date().toLocaleString(),
        status: "Pending"
      };

      // Add new order to array
      orders.push(newOrder);

      // Save to localStorage
      localStorage.setItem("orders", JSON.stringify(orders));

      // Also save to adminPanelOrders if different storage is needed
      let adminOrders = JSON.parse(localStorage.getItem("adminPanelOrders")) || [];
      adminOrders.push(newOrder);
      localStorage.setItem("adminPanelOrders", JSON.stringify(adminOrders));

      // Show success message
      setLoading(false);
      setSuccess(true);

      // Reset form
      setFormData({
        name: "",
        drink: "",
        quantity: 1,
        address: "",
        date: new Date().toLocaleString(),
        status: "Pending"
      });

      // Close dialog after delay
      setTimeout(() => {
        handleClose();

        // Navigate to admin panel after showing success
        setTimeout(() => {
          history.push("/admin"); // Changed from navigate
        }, 500);
      }, 2000);

    } catch (err) {
      setLoading(false);
      setError(true);
      console.error("Order saving error:", err);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              fontSize: { xs: "36px", sm: "48px", md: "80px" },
              fontWeight: 900,
              color: '#008BFF',
              fontFamily: 'cursive',
            }}
          >
            Frosty Drinks
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "36px", sm: "48px", md: "90px" },
              fontWeight: 700,
              fontFamily: "cursive",
              color: "#353535",
            }}
          >
            Stay Fresh
          </Typography>

          <Typography sx={{ mt: 3, fontSize: "16px", fontWeight: 600, color: "#555", fontFamily: 'inherit' }}>
            For a natural energy drink a strawberry smoothie,
            <br />
            juicer then your taste.
          </Typography>

          {/* ORDER BUTTON */}
          <Box
            onClick={handleOpen}
            sx={{
              mt: 4,
              px: 4,
              py: 1.5,
              bgcolor: "#353535",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "6px",
              cursor: "pointer",
              display: "inline-block",
              transition: "0.4s",
              "&:hover": {
                color: 'black',
                bgcolor: 'white',
                transform: "translateY(-6px)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.3)",
              },
            }}
          >
            Order Now
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", justifyContent: "center" }}>
          <img
            src="https://html.imjol.com/khadyo/khadyo/assets/images/img/h32.png"
            alt=""
            style={{ width: "420px", maxWidth: "100%" }}
          />
        </Box>
      </Box>

      {/* 🔥 ORDER PANEL (DIALOG) */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Order Your Drink 🥤
          {loading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={20} />
              <Typography variant="caption">Processing...</Typography>
            </Box>
          )}
        </DialogTitle>

        <DialogContent sx={{ mt: 1 }}>
          <TextField
            fullWidth
            label="Your Name *"
            name="name"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            required
          />
          <TextField
            fullWidth
            label="Drink Name *"
            name="drink"
            margin="normal"
            value={formData.drink}
            onChange={handleChange}
            disabled={loading}
            required
          />
          <TextField
            fullWidth
            label="Quantity"
            type="number"
            name="quantity"
            margin="normal"
            value={formData.quantity}
            onChange={handleChange}
            disabled={loading}
            InputProps={{ inputProps: { min: 1 } }}
          />
          <TextField
            fullWidth
            label="Delivery Address *"
            multiline
            rows={3}
            name="address"
            margin="normal"
            value={formData.address}
            onChange={handleChange}
            disabled={loading}
            required
          />

          {/* Preview Section */}
          {formData.name && formData.drink && (
            <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Order Summary:</Typography>
              <Typography variant="body2">Name: {formData.name}</Typography>
              <Typography variant="body2">Drink: {formData.drink}</Typography>
              <Typography variant="body2">Quantity: {formData.quantity}</Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose} color="error" disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading || !formData.name || !formData.drink || !formData.address}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Message Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          ✅ Order placed successfully! Redirecting to admin panel...
        </Alert>
      </Snackbar>

      {/* Error Message Snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          ❌ Please fill all required fields!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Hero;