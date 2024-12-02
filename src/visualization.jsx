import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  RadarController,
  PieController,
  PolarAreaController,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Radar, Pie, PolarArea } from "react-chartjs-2";
import logo from "./assets/logo.png"; 

ChartJS.register(
  BarElement,
  LineElement,
  RadarController,
  PieController,
  PolarAreaController,
  Tooltip,
  Legend
);

const VisualizationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [findings, setFindings] = useState("Summary of results will be displayed here...");

  const { visualizationType, rangeX, rangeY } = location.state || {
    visualizationType: "",
    rangeX: "",
    rangeY: "",
  };

  const data = {
    labels: ["Sample 1", "Sample 2", "Sample 3", "Sample 4"],
    datasets: [
      {
        label: `${rangeY} (Y-Axis)`,
        data: [10, 20, 30, 40], // Replace with actual data
        backgroundColor: ["#FFB74D", "#FFA726", "#F44336", "#FF7043"],
        borderColor: "#4E342E",
        borderWidth: 1,
      },
    ],
  };

  const handleGenerateReport = () => {
    console.log("Generating report with title:", title);
    console.log("Chart description:", description);
    console.log("Findings:", findings);
  };

  const renderChart = () => {
    switch (visualizationType) {
      case "Bar Chart":
        return <Bar data={data} />;
      case "Line Graph":
        return <Line data={data} />;
      case "Radar Chart":
        return <Radar data={data} />;
      case "Pie Chart":
        return <Pie data={data} />;
      case "Polar Area Chart":
        return <PolarArea data={data} />;
      default:
        return <Typography>Select a visualization type</Typography>;
    }
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
          onClick={() => navigate("/datapreparation")}
        >
          Back to Data Preparation
        </Button>
      </Box>

      {/* Chart and Details Section */}
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
        {/* Chart Display */}
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
              fontSize: "1.4rem",
              fontWeight: "700",
              color: "#4E342E", 
              marginBottom: 2,
            }}
          >
            Chart Preview
          </Typography>
          <Box
            sx={{
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {renderChart()}
          </Box>
        </Box>

        {/* Chart Details */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Add Title */}
          <TextField
            label="Add Chart Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
            }}
          />

          {/* Add Description */}
          <TextField
            label="Add Chart Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
            }}
          />

          {/* Findings */}
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
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#4E342E",
                marginBottom: 1,
              }}
            >
              Findings:
            </Typography>
            <TextField
              value={findings}
              onChange={(e) => setFindings(e.target.value)}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                marginBottom: 2,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Generate Report Button */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFB74D", 
            color: "#FFFFFF",
            fontWeight: "700",
            textTransform: "none",
            padding: "12px 32px",
            borderRadius: "20px",
            "&:hover": { backgroundColor: "#FFA726" },
          }}
          onClick={handleGenerateReport}
        >
          Generate Report
        </Button>
      </Box>
    </Box>
  );
};

export default VisualizationPage;
