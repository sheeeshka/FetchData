import React from "react";
import { Box, Button, Typography } from "@mui/material";
import logo from "./assets/logo.png"; // Import logo.png
import dawg from "./assets/dawg.png"; // Import dawg.png

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7A82D", // Background color from the design
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        display: "flex",
        flexDirection: "column",
        padding: 4,
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Logo and Name Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", // Align content to the left
          alignItems: "center", // Vertically center the items
          marginBottom: 0, // Remove space below the logo
          flex: "0 1 auto", // Prevent it from taking too much vertical space
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="FetchData Logo"
          sx={{
            width: 80, // Adjust width to make it fit well
            height: 76,
          }}
        />
        
        {/* FetchData Name */}
        <Typography
          sx={{
            color: "#FFCC33", // Color of the name
            fontSize: 48, // Reduce font size for better fit
            fontFamily: "Baloo", // Custom font family
            fontWeight: "400", // Font weight for the name
            wordWrap: "break-word", // Ensure the name wraps properly if needed
            marginLeft: 2, // Space between logo and the name
          }}
        >
          FetchData
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flex: 1, // Take up all available vertical space
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
          alignItems: "center",
          justifyContent: "space-evenly", // Distribute space evenly
          gap: 2, // Space between description and image
        }}
      >
        {/* Left Side: Text */}
        <Box
          sx={{
            maxWidth: 600, // Reduced width for the description
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
            paddingBottom: { xs: 2, md: 0 }, // Add space at the bottom on small screens
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#402E2A", // Dark brown text
              marginBottom: 2,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, // Responsive font size
            }}
          >
            Unleash the Power of Your Data.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#402E2A",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, // Responsive text size
              lineHeight: 1.6,
              marginBottom: 3,
            }}
          >
            FetchData makes data analytics simple and fast. Our platform helps
            businesses quickly retrieve, analyze, and act on data, turning
            insights into action with ease. Just like a loyal dog fetching a
            ball, we fetch the answers you need—reliable, efficient, and always
            on point.
            <br />
            <strong>FetchData — Fetch the answers. Fetch success.</strong>
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD046",
              color: "#402E2A",
              fontWeight: "bold",
              textTransform: "none",
              padding: "12px 24px",
              borderRadius: "25px",
              "&:hover": {
                backgroundColor: "#FFC12C",
              },
            }}
          >
            Fetch Now
          </Button>
        </Box>

        {/* Right Side: Dawg Image */}
        <Box
          component="img"
          src={dawg}
          alt="Dogs Illustration"
          sx={{
            width: { xs: 400, sm: 450, md: 500 }, // Adjust image width for responsiveness
            height: "auto",
            maxWidth: "100%", // Ensure it doesn't overflow
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingPage;
