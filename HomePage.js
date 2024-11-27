import React from "react";
import { AppBar, Box, Button, Container, Toolbar, Typography, Card, CardContent, CardHeader, CssBaseline, Grid } from "@mui/material";
import { Link } from "react-router-dom"; // For navigation between pages
import { 
  FileCopy as FileCopyIcon, 
  Visibility as VisibilityIcon, 
  TrackChanges as TrackChangesIcon, 
  HelpOutline as HelpOutlineIcon, 
  Chat as ChatIcon 
} from '@mui/icons-material'; // Importing icons

const HomePage = () => {
  // Handle logout functionality (this could be redirected to a login page or log the user out)
  

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
  <CssBaseline />
  {/* Header Section */}

  {/* Main Content */}
  <Container sx={{ paddingTop: "50px", paddingBottom: "30px" }}>
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" sx={{ color: "green", fontWeight: "bold" }}>
        Welcome to DiGiPo - Other Cases Section
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "20px", color: "black" }}>
        This is a platform to file complaints, check their status, and explore
        frequently asked questions. You can also access live chat and video call options for further assistance.
      </Typography>
    </Box>

    {/* Card Section for Functionality */}
    <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
      {[
        { title: "Cases That Can Be Filed", icon: <FileCopyIcon />, link: "/cases" },
        { title: "Cases Applied", icon: <VisibilityIcon />, link: "/usercases" },
        { title: "File a Complaint", icon: <HelpOutlineIcon />, link: "/complaint-form" },
        { title: "FAQ", icon: <HelpOutlineIcon />, link: "/faq" },
      ].map((card, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card sx={{ backgroundColor: "wheat", borderRadius: "8px", boxShadow: 3 }}>
            <CardHeader
              title={card.title}
              sx={{
                backgroundColor: "white",
                color: "brown",
                fontWeight: "bold",
                textAlign: "center",
                padding: "10px",
              }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              {React.cloneElement(card.icon, { sx: { fontSize: 40, color: "brown" } })}
              <Typography variant="body1" sx={{ marginTop: "10px", color: "black" }}>
                {card.title === "FAQ" ? "Find answers to frequently asked questions." : `Access ${card.title.toLowerCase()} here.`}
              </Typography>
              <Link to={card.link}>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "10px",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  {card.title === "FAQ" ? "View FAQs" : card.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

  );
};

export default HomePage;
