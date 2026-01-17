import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
  FormControl,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function TableBookingMUI() {
  const [people, setPeople] = React.useState(4);
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ people, date, time });
    alert("Finding table...");
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
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                {/* People */}
                <FormControl sx={{ minWidth: 180 }}>
                  <Select
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    sx={{ height: 50 }}
                  >
                    <MenuItem value={4}>4 People</MenuItem>
                    <MenuItem value={3}>3 People</MenuItem>
                    <MenuItem value={2}>2 People</MenuItem>
                    <MenuItem value={1}>1 Person</MenuItem>
                  </Select>
                </FormControl>

                {/* Date */}
                <DatePicker
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  format="DD-MM-YYYY"
                  slotProps={{
                    textField: {
                      sx: { minWidth: 180, height: 50 },
                    },
                  }}
                />

                {/* Time */}
                <TimePicker
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                  slotProps={{
                    textField: {
                      sx: { minWidth: 180, height: 50 },
                    },
                  }}
                />

                {/* Button */}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    height: 50,
                    px: 4,
                    backgroundColor: "#006633",
                    "&:hover": {
                      backgroundColor: "white",
                      color:'black'

                    },
                  }}
                >
                  Find Table
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LocalizationProvider>
  );
}
