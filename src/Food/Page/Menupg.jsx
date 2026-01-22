
// import React from "react";
// import { Box, Grid, Typography, Button, Card, CardMedia } from "@mui/material";
// import Header from '../Header'
// import Footer from '../Footer'

// const products = [
//   {
//     name: "Banana Juice",
//     price: "$12.65",
//     image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/New-Healthy-Drink-5-02.jpg",
//   },
//   {
//     name: "Fresh Green Juice",
//     price: "$14.90",
//     image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/New-Healthy-Drink-4-02.jpg",
//   },
//   {
//     name: "Alphonso Mango Juice",
//     price: "$15.69",
//     image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/New-Healthy-Drink-6-02.jpg",
//   },
//   {
//     name: "Kiwi Juice",
//     price: "$13.50",
//     image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/Fresh-juice-6-02.jpg",
//   },
//   {
//     name: "Bubble Tea",
//     price: "$10.99",
//     image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/Fresh-juice-5-02.jpg",
//   },
//   {
//     name: "Mango Smoothie",
//     price: "$16.00",
//     image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/Fresh-juice-3-02.jpg",
//   },
// ];
// function OrangeJuiceSection() {
//   return (
//     <>
//       <Header></Header>
//       <Box
//         component="section"
//         sx={{
//           width: "100%",
//           minHeight: { xs: "500px", md: "550px" },
//           backgroundImage: `url('https://faryita.wpengine.com/wp-content/uploads/2024/04/h3-slider-02.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           py: { xs: 6, md: 10 },
//           px: { xs: 3, md: 10 },
//           color: "#fff",
//           overflow: "hidden",
//         }}
//       >
//         <Grid container alignItems="center" spacing={2}>
//           {/* Left Oranges */}
//           <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
//             <Box
//               component="img"
//               src="https://faryita.wpengine.com/wp-content/uploads/2024/04/org-img.png"
//               alt="Oranges"
//               sx={{
//                 width: { xs: "150px", md: "300px" },
//                 position: { xs: "relative", md: "absolute" },
//                 left: { md: 0 },
//                 bottom: { md: 0 },
//               }}
//             />
//           </Grid>

//           {/* Center Text */}
//           <Grid item xs={12} md={5} sx={{ textAlign: { xs: "center", md: "left" }, zIndex: 2 }}>
//             {/* Icon above heading */}
//             <Box sx={{ mb: 2 }}>
//               <Box
//                 component="span"
//                 sx={{
//                   display: "inline-block",
//                   fontSize: "24px",
//                 }}
//               >
//                 🍊
//               </Box>
//             </Box>

//             <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
//               Mesmerizing Pure Freshly Squeezed Orange Juice
//             </Typography>

//             <Typography variant="body1" sx={{ mb: 4, maxWidth: "500px" }}>
//               Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna tempus a. Nulla
//               luctus consequat odio, eget pulvinar libero elementum nec. Pellentesque luctus placerat
//               ultricies. Interdum et malesuada fames ac ante ipsum primis.
//             </Typography>

//             {/* Button + Price */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#FFC107",
//                   color: "#000",
//                   px: 4,
//                   py: 1.5,
//                   fontWeight: 600,
//                   "&:hover": { backgroundColor: "#e0a800" },
//                 }}
//               >
//                 Order Now
//               </Button>
//               <Typography variant="subtitle1">
//                 Starts From : <strong>$50.00</strong>
//               </Typography>
//             </Box>
//           </Grid>

//         </Grid>
//       </Box>

//       <Box sx={{ backgroundColor: "#FF7F00", py: 8 }}>
//         <Grid container spacing={10} justifyContent="center">
//           {products.map((product, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: "center" }}>
//               {/* Circle image */}
//               <Card
//                 sx={{
//                   width: 300,
//                   height: 300,
//                   borderRadius: "50%",
//                   overflow: "hidden",
//                   margin: "0 auto",
//                   border: "5px solid #FFA500",
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.name}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </Card>

//               {/* Name and Price below */}
//               <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", mt: 2 }}>
//                 {product.name}
//               </Typography>
//               <Typography variant="subtitle1" sx={{ color: "#fff", mt: 0.5 }}>
//                 {product.price}
//               </Typography>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       <Box>
//         <Box sx={{ display: 'flex', padding: '50px', paddingTop: '100px', bgcolor: '#FFFDE1' }}>
//           <Box>
//             <Typography sx={{ fontSize: '44px', fontFamily: 'fantasy', color: '#af5364' }}>
//               Commonly Juice Queries
//             </Typography>
//             <Typography sx={{ paddingTop: '20px', fontSize: '24px', fontFamily: 'fantasy', color: '#af5364' }}>
//               How Long Will It Take To Get My Package?
//             </Typography>
//             <Typography sx={{ fontSize: '11px', paddingTop: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
//               Diam vulputate ut pharetra sit amet aliquam id diam. Fermentum et sollicitudin ac orci phasellus egestas <br /> tellus rutrum. Tincidunt dui ut ornare lectus sit amet est. Placerat in egestas erat imperdiet sed euismod nisi <br /> porta. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Est ante in nibh mauris <br /> cursus mattis. Vulputate enim nulla aliquet porttitor lacus.
//             </Typography>
//             <Typography sx={{ paddingTop: '40px', fontSize: '22px', fontFamily: 'fantasy' }}>
//               What Are The Advantages Of Milkshakes And Juices?
//             </Typography>
//             <Typography sx={{ paddingTop: '30px', fontSize: '22px', fontFamily: 'fantasy' }}>
//               What Makes Juicing Different From Smoothies?
//             </Typography>
//             <Typography sx={{ paddingTop: '30px', fontSize: '22px', fontFamily: 'fantasy' }}>
//               What Effect Do Juices Have On Obesity?
//             </Typography>
//             <Typography sx={{ paddingTop: '30px', fontSize: '22px', fontFamily: 'fantasy' }}>
//               What Shipping Methods Are Available?
//             </Typography>
//             <Typography sx={{ paddingTop: '30px', fontSize: '22px', fontFamily: 'fantasy' }}>
//               Which Methods Of Payment Are Accepted?
//             </Typography>
//             <Typography sx={{ paddingTop: '30px', fontSize: '22px', fontFamily: 'fantasy' }}>
//               How Long Will Your Juices Stay Fresh?
//             </Typography>
//           </Box>

//           <Box sx={{ ml: 10 }}>
//             <Typography>
//               <img style={{ width: '500px' }} src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h3-faq-off-img.png" alt="" />
//             </Typography>
//           </Box>

//         </Box>
//       </Box>

//       <Footer></Footer>

//     </>
//   );
// }

// export default OrangeJuiceSection;




import React from "react";
import { Box, Grid, Typography, Button, Card, CardMedia } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

const products = [
  { name: "Banana Juice", price: "$12.65", image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/New-Healthy-Drink-5-02.jpg" },
  { name: "Fresh Green Juice", price: "$14.90", image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/New-Healthy-Drink-4-02.jpg" },
  { name: "Alphonso Mango Juice", price: "$15.69", image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/New-Healthy-Drink-6-02.jpg" },
  { name: "Kiwi Juice", price: "$13.50", image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/Fresh-juice-6-02.jpg" },
  { name: "Bubble Tea", price: "$10.99", image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/Fresh-juice-5-02.jpg" },
  { name: "Mango Smoothie", price: "$16.00", image: "https://faryita.wpengine.com/wp-content/uploads/2024/04/Fresh-juice-3-02.jpg" },
];

function OrangeJuiceSection() {
  return (
    <>
      <Header></Header>

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          width: "100%",
          minHeight: { xs: "500px", md: "550px" },
          backgroundImage: `url('https://faryita.wpengine.com/wp-content/uploads/2024/04/h3-slider-02.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 10 },
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          {/* Left Oranges */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box
              component="img"
              src="https://faryita.wpengine.com/wp-content/uploads/2024/04/org-img.png"
              alt="Oranges"
              sx={{
                width: { xs: "150px", md: "300px" },
                position: { xs: "relative", md: "absolute" },
                left: { md: 0 },
                bottom: { md: 0 },
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Grid>

          {/* Center Text */}
          <Grid item xs={12} md={5} sx={{ textAlign: { xs: "center", md: "left" }, zIndex: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Box component="span" sx={{ display: "inline-block", fontSize: "24px" }}>
                🍊
              </Box>
            </Box>

            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Mesmerizing Pure Freshly Squeezed Orange Juice
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, maxWidth: { xs: "100%", md: 500 }, mx: { xs: "auto", md: 0 } }}>
              Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna tempus a. Nulla
              luctus consequat odio, eget pulvinar libero elementum nec. Pellentesque luctus placerat
              ultricies. Interdum et malesuada fames ac ante ipsum primis.
            </Typography>

            {/* Button + Price */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", justifyContent: { xs: "center", md: "flex-start" } }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFC107",
                  color: "#000",
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "#e0a800", transform: "translateY(-3px)" },
                }}
              >
                Order Now
              </Button>
              <Typography variant="subtitle1">
                Starts From : <strong>$50.00</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Products Section */}
      <Box sx={{ backgroundColor: "#FF7F00", py: 8 }}>
        <Grid container spacing={5} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: "center" }}>
              <Card
                sx={{
                  width: { xs: 220, md: 300 },
                  height: { xs: 220, md: 300 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto",
                  border: "5px solid #FFA500",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", mt: 2 }}>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#fff", mt: 0.5 }}>
                {product.price}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, py: { xs: 6, md: 12 }, px: { xs: 3, md: 10 }, bgcolor: "#FFFDE1" }}>
        {/* Text */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontSize: { xs: 28, md: 44 }, fontFamily: "fantasy", color: "#af5364", mb: 2 }}>
            Commonly Juice Queries
          </Typography>
          <Typography sx={{ pt: 2, fontSize: { xs: 18, md: 24 }, fontFamily: "fantasy", color: "#af5364" }}>
            How Long Will It Take To Get My Package?
          </Typography>
          <Typography sx={{ fontSize: { xs: 11, md: 11 }, pt: 2, fontFamily: "inherit", fontWeight: 500 }}>
            Diam vulputate ut pharetra sit amet aliquam id diam. Fermentum et sollicitudin ac orci phasellus egestas <br /> tellus rutrum. Tincidunt dui ut ornare lectus sit amet est. Placerat in egestas erat imperdiet sed euismod nisi <br /> porta. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Est ante in nibh mauris <br /> cursus mattis. Vulputate enim nulla aliquet porttitor lacus.
          </Typography>
          {[
            "What Are The Advantages Of Milkshakes And Juices?",
            "What Makes Juicing Different From Smoothies?",
            "What Effect Do Juices Have On Obesity?",
            "What Shipping Methods Are Available?",
            "Which Methods Of Payment Are Accepted?",
            "How Long Will Your Juices Stay Fresh?"
          ].map((q, i) => (
            <Typography key={i} sx={{ pt: 3, fontSize: { xs: 18, md: 22 }, fontFamily: "fantasy" }}>
              {q}
            </Typography>
          ))}
        </Box>

        {/* Image */}
        <Box sx={{ flex: 1, mt: { xs: 6, md: 0 }, textAlign: "center" }}>
          <Box
            component="img"
            src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h3-faq-off-img.png"
            alt="FAQ"
            sx={{ width: { xs: "80%", md: 500 }, transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}
          />
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default OrangeJuiceSection;
