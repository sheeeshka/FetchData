import React, { useState } from "react";
import { Box, Button, Typography, TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload"; // Import CloudUploadIcon
import logo from "./assets/logo.png"; // Import logo.png

const MainPage = () => {
  const [selectedChart, setSelectedChart] = useState("");
  const [xRange, setXRange] = useState("");
  const [yRange, setYRange] = useState("");
  const [file, setFile] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState({ x: "", y: "" });

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  const handleColumnChange = (event) => {
    const { name, value } = event.target;
    setSelectedColumns((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F7A82D", // Background color from the design
        height: "100vh", // Full viewport height
        width: "99%", // Full viewport width
        display: "flex",
        flexDirection: "column",
        padding: 2,
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Logo and Name Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", // Align content to the left
          alignItems: "center", // Vertically center the items
          marginBottom: 1, // Reduced margin for better fit
          flex: "0 1 auto", // Prevent it from taking too much vertical space
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="FetchData Logo"
          sx={{
            width: 50, // Smaller logo size
            height: 50,
          }}
        />
        
        {/* FetchData Name */}
        <Typography
          sx={{
            color: "#FFCC33", // Color of the name
            fontSize: 28, // Smaller font size for the name
            fontFamily: "Baloo", // Custom font family
            fontWeight: "400", // Font weight for the name
            wordWrap: "break-word", // Ensure the name wraps properly if needed
            marginLeft: 1, // Space between logo and the name
          }}
        >
          FetchData
        </Typography>
      </Box>

      {/* Main Content Container */}
      <Box
        sx={{
          width: "1200px", // Adjust width to be more responsive on smaller screens
          backgroundColor: "#F9C17B",
          borderRadius: "10px",
          padding: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column", // Ensure the layout is stacked
          justifyContent: "flex-start", // Align content to the top
          height: "auto", // Allow container to adjust to content
        }}
      >
        {/* Main Content */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", flexGrow: 1 }}>
          {/* Visualization Section */}
          <Box sx={{ flex: 1, minWidth: "550px", flexBasis: "40%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 0.5, fontSize: "16px" }}>
              Visualization
            </Typography>
            <Box
              sx={{
                width: "85%", // Full width for the chart placeholder
                height: 325, // Reduced height
                backgroundColor: "#FFF",
                borderRadius: "10px",
                boxShadow: "inset 0 0 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Placeholder for Chart */}
              <Typography variant="body2" sx={{ color: "#888", fontSize: "14px" }}>
                Chart Placeholder: {selectedChart || "No chart selected"}
              </Typography>
            </Box>
          </Box>
          
          {/* Controls Section */}
          <Box sx={{ flex: 1, minWidth: "300px", flexBasis: "25%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 0.5, fontSize: "16px" }}>
              Upload CSV File
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 1,
                border: "2px dashed #888",
                borderRadius: "10px",
                marginBottom: 1.5,
                width: 350,
              }}
            >
              <CloudUploadIcon sx={{ fontSize: 24, color: "#888" }} />
              <Typography
                variant="body2"
                sx={{ textAlign: "center", marginTop: 1, marginBottom: 1, fontSize: "12px" }}
              >
                Drag 'n' drop some files here, or click to select files
              </Typography>
              <input
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button variant="contained" sx={{ backgroundColor: "#FFD046", color: "#402E2A", fontSize: "10px" }}>
                  Upload
                </Button>
              </label>
            </Box>

            {/* Visualization and Columns Section (Now aligned horizontally) */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", marginBottom: 1.5 }}>
              {/* Choose Visualization */}
              <Box sx={{ flex: 1, minWidth: "150px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 0.5, fontSize: "12px" }}>
                  Choose Visualization:
                </Typography>
                <RadioGroup
                  value={selectedChart}
                  onChange={handleChartChange}
                  sx={{ flexWrap: "wrap", justifyContent: "space-between" }}
                >
                  {["Bar Chart", "Line Chart", "Pie Chart", "Histogram", "Scatter Plot"].map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio sx={{ color: "#402E2A", fontSize: "10px" }} />}
                      label={option}
                      sx={{ marginBottom: 0, fontSize: "12px" }}
                    />
                  ))}
                </RadioGroup>
              </Box>

              {/* Choose Columns */}
              <Box sx={{ flex: 1, minWidth: "150px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 0.5, fontSize: "12px" }}>
                  Choose Columns:
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <FormControl fullWidth size="small" sx={{ minWidth: "120px" }}>
                    <InputLabel>Range X</InputLabel>
                    <Select
                      label="Range X"
                      value={selectedColumns.x}
                      onChange={handleColumnChange}
                      name="x"
                      sx={{ fontSize: "12px" }}
                    >
                      <MenuItem value="column1">Column 1</MenuItem>
                      <MenuItem value="column2">Column 2</MenuItem>
                      <MenuItem value="column3">Column 3</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth size="small" sx={{ minWidth: "120px" }}>
                    <InputLabel>Range Y</InputLabel>
                    <Select
                      label="Range Y"
                      value={selectedColumns.y}
                      onChange={handleColumnChange}
                      name="y"
                      sx={{ fontSize: "12px" }}
                    >
                      <MenuItem value="column1">Column 1</MenuItem>
                      <MenuItem value="column2">Column 2</MenuItem>
                      <MenuItem value="column3">Column 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD046",
                  color: "#402E2A",
                  fontWeight: "bold",
                  minWidth: "120px",
                  fontSize: "12px", // Smaller font size
                }}
              >
                Unleash Data
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Action Buttons Section */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start", marginTop: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD046",
              color: "#402E2A",
              fontWeight: "bold",
              minWidth: "120px",
              fontSize: "12px",
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD046",
              color: "#402E2A",
              fontWeight: "bold",
              minWidth: "120px",
              fontSize: "12px",
            }}
          >
            Export to PDF
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
