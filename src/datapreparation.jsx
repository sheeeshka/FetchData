import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png"; 
import BarChartIcon from "@mui/icons-material/BarChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import RadarIcon from "@mui/icons-material/Radar";
import PieChartIcon from "@mui/icons-material/PieChart";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";

const DataPreparationPage = () => {
  const navigate = useNavigate();
  const [selectedVisualization, setSelectedVisualization] = useState("");
  const [file, setFile] = useState(null);
  const [csvHeaders, setCsvHeaders] = useState([]);
  const [selectedRangeX, setSelectedRangeX] = useState("");
  const [selectedRangeY, setSelectedRangeY] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);

    // Simulate parsing CSV headers (replace with actual CSV parsing logic)
    const headers = ["Column 1", "Column 2", "Column 3"];
    setCsvHeaders(headers);
  };

  const handleRemoveDuplicates = () => {
    // Placeholder for removing duplicates logic
    alert("Duplicates removed successfully!");
  };

  const handleUnleashClick = () => {
    navigate("/visualization", {
      state: {
        visualizationType: selectedVisualization,
        rangeX: selectedRangeX,
        rangeY: selectedRangeY,
      },
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFF3E0", 
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        padding: 4,
        boxSizing: "border-box",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="FetchData Logo"
            sx={{
              width: 60,
              height: 60,
            }}
          />
          <Typography
            sx={{
              color: "#FFB74D", 
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            FetchData
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: "#FFB74D",
            borderColor: "#FFB74D",
            fontWeight: "600",
            textTransform: "none",
            padding: "8px 24px",
            borderRadius: "20px",
            "&:hover": { backgroundColor: "#FFF3E0" },
          }}
          onClick={() => navigate("/landingpage")}
        >
          Back to Landing Page
        </Button>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          padding: 4,
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Upload CSV and Preview */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#FFF8E1",
            borderRadius: "16px",
            padding: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#4E342E",
              marginBottom: 2,
            }}
          >
            Upload CSV and Preview
          </Typography>
          <Button
            variant="outlined"
            component="label"
            sx={{
              width: "100%",
              textTransform: "none",
              color: "#4E342E",
              fontWeight: "600",
              border: "2px dashed #CCC",
              padding: "12px",
              borderRadius: "12px",
              marginBottom: 3,
              "&:hover": {
                borderColor: "#FFA726",
                backgroundColor: "#FFF7E5",
              },
            }}
          >
            {file ? file.name : "Drag 'n' Drop or Click to Upload"}
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
          {file && (
            <Box
              sx={{
                maxHeight: "200px",
                overflow: "auto",
                border: "1px solid #CCC",
                borderRadius: "8px",
                padding: 2,
                marginBottom: 2,
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {csvHeaders.map((header) => (
                      <TableCell key={header}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Data 1</TableCell>
                    <TableCell>Data 2</TableCell>
                    <TableCell>Data 3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Data A</TableCell>
                    <TableCell>Data B</TableCell>
                    <TableCell>Data C</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          )}
          {file && (
            <Button
              variant="contained"
              onClick={handleRemoveDuplicates}
              sx={{
                backgroundColor: "#FFB74D",
                color: "#FFFFFF",
                fontWeight: "700",
                width: "20%",
                "&:hover": { backgroundColor: "#FFA726" },
              }}
            >
              Remove Duplicates
            </Button>
          )}
        </Box>

        {/* Right: Visualization Selection */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Choose Visualization */}
          <Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#4E342E",
                marginBottom: 2,
              }}
            >
              Choose Visualization:
            </Typography>
            <Grid container spacing={2}>
              {[
                { label: "Bar Chart", icon: <BarChartIcon /> },
                { label: "Line Graph", icon: <ShowChartIcon /> },
                { label: "Radar Chart", icon: <RadarIcon /> },
                { label: "Polar Area Chart", icon: <ScatterPlotIcon /> },
                { label: "Pie Chart", icon: <PieChartIcon /> },
              ].map((option) => (
                <Grid item xs={6} key={option.label}>
                  <Button
                    variant={selectedVisualization === option.label ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => setSelectedVisualization(option.label)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: selectedVisualization === option.label ? "#FFB74D" : "#FFF",
                      color: "#4E342E",
                      fontWeight: "600",
                      borderRadius: "12px",
                      "&:hover": {
                        backgroundColor: "#FFF3E0",
                      },
                    }}
                  >
                    {option.icon}
                    {option.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Choose Ranges */}
          <Box>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#4E342E",
                marginBottom: 2,
              }}
            >
              Choose Ranges:
            </Typography>
            <TextField
              select
              label="X-Axis Range"
              value={selectedRangeX}
              onChange={(e) => setSelectedRangeX(e.target.value)}
              fullWidth
              SelectProps={{ native: true }}
              sx={{ marginBottom: 2 }}
            >
              <option value="">Select Range X</option>
              {csvHeaders.map((header) => (
                <option key={header} value={header}>
                  {header}
                </option>
              ))}
            </TextField>
            <TextField
              select
              label="Y-Axis Range"
              value={selectedRangeY}
              onChange={(e) => setSelectedRangeY(e.target.value)}
              fullWidth
              SelectProps={{ native: true }}
            >
              <option value="">Select Range Y</option>
              {csvHeaders.map((header) => (
                <option key={header} value={header}>
                  {header}
                </option>
              ))}
            </TextField>
          </Box>

          {/* Unleash Data Button */}
          <Button
            variant="contained"
            onClick={handleUnleashClick}
            disabled={!selectedVisualization || !file || !selectedRangeX || !selectedRangeY}
            sx={{
              backgroundColor: "#FFB74D",
              color: "#FFFFFF",
              fontWeight: "700",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#FFF3E0" },
            }}
          >
            Unleash Data
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DataPreparationPage;
