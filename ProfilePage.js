import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Avatar, Grid, Box, Link } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { decryptToken } from "../authUtils";
import Skeleton from "@mui/material/Skeleton";

// Function to handle missing user data gracefully
const getUserField = (field, fallback) => (field ? field : fallback);

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the encrypted JWT token from session storage
    const encryptedToken = sessionStorage.getItem("jwt");
    console.log("Encrypted Token retrieved from session storage:", encryptedToken);

    if (encryptedToken) {
      try {
        // Decrypt the token
        const decryptedToken = decryptToken(encryptedToken);
        console.log("Decrypted token:", decryptedToken);

        // Decode the decrypted token to extract user information
        const decoded = jwtDecode(decryptedToken);
        console.log("Decoded token successfully:", decoded);
        setUserData(decoded); // Set user data from the decoded token
      } catch (error) {
        console.error("Error decrypting or decoding token:", error);
      }
    } else {
      console.warn("No encrypted token found in session storage.");
    }

    setLoading(false); // Once data fetching and decryption are done, stop the loading state
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <Skeleton variant="circular" width={80} height={80} sx={{ mx: "auto", mb: 2 }} />
        <Skeleton variant="text" width="60%" sx={{ mx: "auto" }} />
        <Skeleton variant="text" width="80%" sx={{ mx: "auto", mb: 1 }} />
        <Skeleton variant="text" width="80%" sx={{ mx: "auto", mb: 1 }} />
      </Container>
    );
  }

  if (!userData) {
    return (
      <Container sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ textAlign: "center", color: "text.primary" }}>
          No user information available. Please{" "}
          <Link href="/login" sx={{ textDecoration: "none", color: "primary.main" }}>
            log in
          </Link>{" "}
          to access your profile.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card
        sx={{
          p: 3,
          textAlign: "center",
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            backgroundColor: "primary.main",
            fontSize: "2rem",
          }}
          src={userData?.avatarUrl || "default-avatar-url.png"} // Use a fallback image URL here
        >
          {getUserField(userData.name?.charAt(0).toUpperCase(), "U")}
        </Avatar>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.5rem", sm: "2rem" },
              color: "text.primary",
            }}
          >
            {getUserField(userData.name, "User Name")}
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Email */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                Email: {getUserField(userData.email, "Not Available")}
              </Typography>
            </Grid>

            {/* Birthdate */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                Birthdate: {getUserField(userData.birthdate, "Not Provided")}
              </Typography>
            </Grid>

            {/* Gender */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                Gender: {getUserField(userData.gender, "Not Specified")}
              </Typography>
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                }}
              >
                Phone: {getUserField(userData.phone_number, "Not Verified")}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Edit Profile Message */}
      {(!userData.email || !userData.phone_number) && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Some details are missing. Please{" "}
            <Link href="/profile/edit" sx={{ textDecoration: "none", color: "primary.main" }}>
              update your profile
            </Link>
            .
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ProfilePage;
