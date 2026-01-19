import { Box, Typography, Button, Divider, Link, Stack } from "@mui/material";
import Header from '../Header';
import Footer from '../Footer';

const marqueeItems = [
  { type: "text", label: "RICH IN NUTRITION" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-01.png",
  },
  { type: "text", label: "NATURAL FLAVOR" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-02.png",
  },
  { type: "text", label: "FRESH FRUITS" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-03.png",
  },
  { type: "text", label: "THIRST SATISFIER" },
  {
    type: "image",
    src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png",
  },
];

function Aboutpg() {
  return (

    <>
      <Header></Header>
      <Box sx={{ paddingTop: '100px' }}>
        <Box>
          <Typography sx={{ fontSize: '26px', fontFamily: 'fantasy', ml: 62, paddingTop: '60px', color: '#ffc935' }}>
            Perfect Party Partner
          </Typography>
          <Typography sx={{ fontSize: '60px', fontFamily: 'fantasy', ml: 40, paddingTop: "20px", color: '#1E3234' }}>
            Tastiest Fresh Fruit Juice
          </Typography>
          <Typography sx={{ fontSize: '18px', textAlign: 'center', paddingTop: '10px', color: '#1E3234' }}>
            Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna tempus a. <br /> Nulla luctus consequat odio, eget pulvinar libero elementumnec.
          </Typography>
          <Box sx={{ paddingTop: '20px', ml: 70 }}>
            <Typography sx={{ padding: '12px', width: '100px', textAlign: 'center', borderRadius: '30px', fontFamily: 'inherit', fontWeight: '500', bgcolor: '#ffc935' }}>
              Know More
            </Typography>
          </Box>
          <Typography sx={{ paddingTop: '100px' }}>
            <img style={{ width: '100%' }} src="https://www.clipartmax.com/png/full/252-2528383_fruits-hd-wallpapers-fruits-images-hd-png.png" alt="" />
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ paddingTop: '60px', padding: '30px' }}>
              <Typography>
                <img style={{ width: '150px' }} src="https://faryita.wpengine.com/wp-content/uploads/2024/03/Mint-leaves-Img.png" alt="" />
              </Typography>
              <Typography sx={{ paddingTop: '14px', fontSize: '42px', fontFamily: 'fantasy' }}>
                Juice Café with Smoothies <br /> and Fresh Fruits
              </Typography>
              <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontWeight: '400' }}>
                Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. <br />  Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue eu <br /> consequat ac felis donec. Ante in nibh mauris cursus.
              </Typography>
              <Box sx={{ display: 'flex', paddingTop: '20px' }}>
                <Box>
                  <Typography sx={{ color: '#1e3234', fontSize: '20px', fontWeight: '600' }}>
                    Calories
                  </Typography>
                  <Typography sx={{ fontSize: '32px', fontWeight: '600' }}>
                    20%
                  </Typography>
                </Box>

                <Box sx={{ ml: 4 }}>
                  <Typography sx={{ color: '#1e3234', fontSize: '20px', fontWeight: '600' }}>
                    Alcohol
                  </Typography>
                  <Typography sx={{ fontSize: '32px', fontWeight: '600' }}>
                    0%
                  </Typography>
                </Box>

                <Box sx={{ ml: 4 }}>
                  <Typography sx={{ color: '#1e3234', fontSize: '20px', fontWeight: '600' }}>
                    Vitomines
                  </Typography>
                  <Typography sx={{ fontSize: '32px', fontWeight: '600' }}>
                    99%
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ paddingTop: '30px' }}>
                <Typography sx={{ padding: '10px', width: '100px', textAlign: 'center', bgcolor: '#ffc935', borderRadius: '30px', fontFamily: 'inherit', fontWeight: '500' }}>
                  Know More
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography>
                <img style={{ width: '600px' }} src="https://faryita.wpengine.com/wp-content/uploads/2024/03/juice-h1-filler-img-1.png" alt="" />
              </Typography>
            </Box>
          </Box>


          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              paddingTop: '100px',
              py: { xs: 4, md: 6 },
              bgcolor: "#fff",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "max-content",
                animation: "marquee 18s linear infinite",
                "&:hover": {
                  animationPlayState: "paused",
                },
              }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mx: { xs: 2, md: 4 },
                  }}
                >
                  {item.type === "text" ? (
                    <Typography
                      sx={{
                        fontSize: { xs: "22px", md: "18px" },
                        fontWeight: 700,
                        letterSpacing: "2px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </Typography>
                  ) : (
                    <Box
                      component="img"
                      src={item.src}
                      alt=""
                      sx={{
                        height: { xs: 120, md: 100 },
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>

            {/* Keyframes */}
            <style>
              {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
            </style>
          </Box>


          {/* ============= */}

        </Box>
      </Box>
      <Footer></Footer>
    </>

  )
}

export default Aboutpg;



// import { Box, Typography } from "@mui/material";
// import Header from "../Header";
// import Footer from "../Footer";

// const marqueeItems = [
//   { type: "text", label: "RICH IN NUTRITION" },
//   { type: "image", src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-01.png" },
//   { type: "text", label: "NATURAL FLAVOR" },
//   { type: "image", src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-02.png" },
//   { type: "text", label: "FRESH FRUITS" },
//   { type: "image", src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-03.png" },
//   { type: "text", label: "THIRST SATISFIER" },
//   { type: "image", src: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png" },
// ];

// function Homepg() {
//   return (
//     <>
//       <Header></Header>

//       <Box sx={{ pt: { xs: "80px", md: "100px" } }}>
//         {/* ===== Hero Text ===== */}
//         <Typography
//           sx={{
//             fontSize: "26px",
//             fontFamily: "fantasy",
//             color: "#ffc935",
//             pt: "60px",
//             ml: { xs: 0, md: 62 },
//             textAlign: { xs: "center", md: "left" },
//           }}
//         >
//           Perfect Party Partner
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: { xs: "36px", md: "60px" },
//             fontFamily: "fantasy",
//             color: "#1E3234",
//             pt: "20px",
//             ml: { xs: 0, md: 40 },
//             textAlign: { xs: "center", md: "left" },
//           }}
//         >
//           Tastiest Fresh Fruit Juice
//         </Typography>

//         <Typography
//           sx={{
//             fontSize: "18px",
//             textAlign: "center",
//             pt: "10px",
//             color: "#1E3234",
//             px: { xs: 2, md: 0 },
//           }}
//         >
//           Aenean et turpis ipsum. Quisque consequat orci augue, at aliquam urna tempus a. <br />
//           Nulla luctus consequat odio, eget pulvinar libero elementumnec.
//         </Typography>

//         {/* Button */}
//         <Box sx={{ pt: "20px", textAlign: "center" }}>
//           <Typography
//             sx={{
//               p: "12px",
//               width: "100px",
//               mx: "auto",
//               borderRadius: "30px",
//               fontWeight: 500,
//               bgcolor: "#ffc935",
//               cursor: "pointer",
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-3px)",
//                 boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
//               },
//             }}
//           >
//             Know More
//           </Typography>
//         </Box>

//         {/* Fruits Image */}
//         <Box sx={{ pt: "100px" }}>
//           <Box
//             component="img"
//             src="https://www.clipartmax.com/png/full/252-2528383_fruits-hd-wallpapers-fruits-images-hd-png.png"
//             sx={{ width: "100%" }}
//           />
//         </Box>

//         {/* ===== Second Section ===== */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//           }}
//         >
//           {/* Left Text */}
//           <Box sx={{ p: "30px", pt: "60px" }}>
//             <Box
//               component="img"
//               src="https://faryita.wpengine.com/wp-content/uploads/2024/03/Mint-leaves-Img.png"
//               sx={{
//                 width: "150px",
//                 transition: "0.3s",
//                 "&:hover": { transform: "rotate(5deg) scale(1.05)" },
//               }}
//             />

//             <Typography sx={{ pt: "14px", fontSize: "42px", fontFamily: "fantasy" }}>
//               Juice Café with Smoothies <br /> and Fresh Fruits
//             </Typography>

//             <Typography sx={{ pt: "10px", fontWeight: 400 }}>
//               Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. <br />
//               Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue eu <br />
//               consequat ac felis donec. Ante in nibh mauris cursus.
//             </Typography>

//             {/* Stats */}
//             <Box sx={{ display: "flex", pt: "20px", gap: 4 }}>
//               {[
//                 { label: "Calories", value: "20%" },
//                 { label: "Alcohol", value: "0%" },
//                 { label: "Vitomines", value: "99%" },
//               ].map((item, i) => (
//                 <Box key={i}>
//                   <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
//                     {item.label}
//                   </Typography>
//                   <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
//                     {item.value}
//                   </Typography>
//                 </Box>
//               ))}
//             </Box>

//             <Box sx={{ pt: "30px" }}>
//               <Typography
//                 sx={{
//                   p: "10px",
//                   width: "100px",
//                   textAlign: "center",
//                   bgcolor: "#ffc935",
//                   borderRadius: "30px",
//                   fontWeight: 500,
//                   cursor: "pointer",
//                   transition: "0.3s",
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
//                   },
//                 }}
//               >
//                 Know More
//               </Typography>
//             </Box>
//           </Box>

//           {/* Right Image */}
//           <Box>
//             <Box
//               component="img"
//               src="https://faryita.wpengine.com/wp-content/uploads/2024/03/juice-h1-filler-img-1.png"
//               sx={{
//                 width: { xs: "100%", md: "600px" },
//                 transition: "0.4s",
//                 "&:hover": { transform: "scale(1.03)" },
//               }}
//             />
//           </Box>
//         </Box>

//         {/* ===== Marquee ===== */}
//         <Box sx={{ overflow: "hidden", pt: "100px" }}>
//           <Box
//             sx={{
//               display: "flex",
//               width: "max-content",
//               animation: "marquee 18s linear infinite",
//               "&:hover": { animationPlayState: "paused" },
//             }}
//           >
//             {[...marqueeItems, ...marqueeItems].map((item, index) => (
//               <Box key={index} sx={{ display: "flex", alignItems: "center", mx: 4 }}>
//                 {item.type === "text" ? (
//                   <Typography sx={{ fontWeight: 700, letterSpacing: "2px" }}>
//                     {item.label}
//                   </Typography>
//                 ) : (
//                   <Box component="img" src={item.src} sx={{ height: 100 }} />
//                 )}
//               </Box>
//             ))}
//           </Box>

//           <style>
//             {`
//               @keyframes marquee {
//                 0% { transform: translateX(0); }
//                 100% { transform: translateX(-50%); }
//               }
//             `}
//           </style>
//         </Box>
//       </Box>

//       <Footer />
//     </>
//   );
// }

// export default Homepg;

