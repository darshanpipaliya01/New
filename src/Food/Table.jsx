// import React from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   MenuItem,
//   Select,
//   Typography,
//   FormControl,
// } from "@mui/material";

// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// export default function TableBookingMUI() {
//   const [people, setPeople] = React.useState(4);
//   const [date, setDate] = React.useState(null);
//   const [time, setTime] = React.useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ people, date, time });
//     alert("Finding table...");
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box
//         sx={{
//           paddingTop: "150px",
//           paddingBottom: "80px",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//         <Container>
//           {/* Title */}
//           <Box textAlign="center" mb={5}>
//             <Typography variant="h4" fontWeight="bold">
//               Table <span style={{ color: "#006633" }}>Booking</span>
//             </Typography>
//           </Box>

//           {/* Form */}
//           <Grid container justifyContent="center">
//             <Grid item lg={10} md={12}>
//               <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: 2,
//                   justifyContent: "center",
//                 }}
//               >
//                 {/* People */}
//                 <FormControl sx={{ minWidth: 180 }}>
//                   <Select
//                     value={people}
//                     onChange={(e) => setPeople(e.target.value)}
//                     sx={{ height: 50 }}
//                   >
//                     <MenuItem value={4}>4 People</MenuItem>
//                     <MenuItem value={3}>3 People</MenuItem>
//                     <MenuItem value={2}>2 People</MenuItem>
//                     <MenuItem value={1}>1 Person</MenuItem>
//                   </Select>
//                 </FormControl>

//                 {/* Date */}
//                 <DatePicker
//                   value={date}
//                   onChange={(newValue) => setDate(newValue)}
//                   format="DD-MM-YYYY"
//                   slotProps={{
//                     textField: {
//                       sx: { minWidth: 180, height: 50 },
//                     },
//                   }}
//                 />

//                 {/* Time */}
//                 <TimePicker
//                   value={time}
//                   onChange={(newValue) => setTime(newValue)}
//                   slotProps={{
//                     textField: {
//                       sx: { minWidth: 180, height: 50 },
//                     },
//                   }}
//                 />

//                 {/* Button */}
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     height: 50,
//                     px: 4,
//                     backgroundColor: "#006633",
//                     "&:hover": {
//                       backgroundColor: "white",
//                       color:'black'

//                     },
//                   }}
//                 >
//                   Find Table
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </LocalizationProvider>
//   );
// }


// ====================================================================




import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
  FormControl,
  Snackbar,
  Alert,
  CircularProgress,
  InputLabel
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

export default function TableBookingMUI() {
  const [people, setPeople] = useState(4);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  // Loading and success states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!date) {
      setErrorMessage("Please select a date");
      setError(true);
      return;
    }

    if (!time) {
      setErrorMessage("Please select a time");
      setError(true);
      return;
    }

    // Show loading
    setLoading(true);

    try {
      // Simulate API call/processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Save booking to localStorage
      let bookings = JSON.parse(localStorage.getItem("tableBookings")) || [];
      const newBooking = {
        id: Date.now(),
        people: people,
        date: date.format("DD-MM-YYYY"),
        time: time.format("HH:mm A"),
        bookingDate: new Date().toLocaleString(),
        status: "Confirmed"
      };

      bookings.push(newBooking);
      localStorage.setItem("tableBookings", JSON.stringify(bookings));

      // Show success message
      setSuccess(true);
      setLoading(false);

      // Reset form after delay
      setTimeout(() => {
        setPeople(4);
        setDate(null);
        setTime(null);
      }, 1500);

    } catch (err) {
      setLoading(false);
      setErrorMessage("Something went wrong. Please try again.");
      setError(true);
      console.error("Booking error:", err);
    }
  };

  // Disable past dates
  const disablePastDates = (date) => {
    return dayjs(date).isBefore(dayjs(), 'day');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          paddingTop: "150px",
          paddingBottom: "80px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Container>
          {/* Title */}
          <Box textAlign="center" mb={5}>
            <Typography variant="h4" fontWeight="bold">
              Table <span style={{ color: "#006633" }}>Booking</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              Reserve your table for an unforgettable dining experience
            </Typography>
          </Box>

          {/* Form */}
          <Grid container justifyContent="center">
            <Grid item lg={10} md={12}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* People */}
                <FormControl sx={{ minWidth: 200 }}>
                  <InputLabel>People</InputLabel>
                  <Select
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    label="People"
                    disabled={loading}
                    sx={{
                      height: 50,
                      backgroundColor: "white",
                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center"
                      }
                    }}
                  >
                    <MenuItem value={1}>1 Person</MenuItem>
                    <MenuItem value={2}>2 People</MenuItem>
                    <MenuItem value={3}>3 People</MenuItem>
                    <MenuItem value={4}>4 People</MenuItem>
                    <MenuItem value={5}>5 People</MenuItem>
                    <MenuItem value={6}>6 People</MenuItem>
                    <MenuItem value={7}>7 People</MenuItem>
                    <MenuItem value={8}>8 People</MenuItem>
                    <MenuItem value={9}>9 People</MenuItem>
                    <MenuItem value={10}>10 People</MenuItem>
                  </Select>
                </FormControl>

                {/* Date */}
                <DatePicker
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  format="DD-MM-YYYY"
                  disablePast
                  shouldDisableDate={disablePastDates}
                  disabled={loading}
                  slotProps={{
                    textField: {
                      sx: {
                        minWidth: 200,
                        height: 50,
                        backgroundColor: "white",
                      },
                      error: false,
                    },
                  }}
                />

                {/* Time */}
                <TimePicker
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                  disabled={loading}
                  slotProps={{
                    textField: {
                      sx: {
                        minWidth: 200,
                        height: 50,
                        backgroundColor: "white",
                      },
                    },
                  }}
                />

                {/* Button */}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    height: 50,
                    px: 4,
                    minWidth: 200,
                    backgroundColor: "#006633",
                    fontWeight: 600,
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#004d33",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(0, 102, 51, 0.3)",
                    },
                    "&:disabled": {
                      backgroundColor: "#cccccc",
                      color: "#666666",
                    }
                  }}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  {loading ? "Booking Table..." : "Find Table"}
                </Button>
              </Box>

              {/* Booking Summary Preview */}
              {(date || time) && !loading && (
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: "white",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    maxWidth: 600,
                    mx: "auto",
                    textAlign: "center",
                    borderLeft: "4px solid #006633"
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, color: "#006633", fontWeight: 600 }}>
                    Booking Preview
                  </Typography>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                      <Typography variant="body2" color="text.secondary">Guests:</Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {people} {people === 1 ? "Person" : "People"}
                      </Typography>
                    </Grid>
                    {date && (
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">Date:</Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {date.format("DD MMMM YYYY")}
                        </Typography>
                      </Grid>
                    )}
                    {time && (
                      <Grid item xs={12} sm={4}>
                        <Typography variant="body2" color="text.secondary">Time:</Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {time.format("hh:mm A")}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Message Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          ✅ Table booked successfully! Confirmation sent to your email.
        </Alert>
      </Snackbar>

      {/* Error Message Snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          ❌ {errorMessage}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}