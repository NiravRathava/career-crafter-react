import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { blue } from "@mui/material/colors";

const UserDetails = () => {
  return (
    <Card>
      {/* Banner Image */}
      <CardMedia
        component="img"
        alt="Banner Image"
        height="150"
        image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
      />

      <CardContent>
        {/* Avatar */}
        <Box display="flex" justifyContent="center" mt={-5}>
          <Avatar sx={{ bgcolor: blue[500] }}>N</Avatar>
        </Box>

        {/* User Info */}
        <CardHeader title="John Doe" subheader="Software Engineer" />
        <Divider variant="fullWidth" sx={{ mt: 2, mb: 2 }} />
        {/* Grid for Profile Views and Connections */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2">Profile Views</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography variant="body2" color="textSecondary">
              45
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">Connections</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography variant="body2" color="textSecondary">
              456
            </Typography>
          </Grid>
        </Grid>

        {/* Divider for Horizontal Line */}
        <Divider variant="fullWidth" sx={{ mt: 2, mb: 2 }} />

        <Typography variant="body2">
          Upgrade to Premium for exclusive benefits!
        </Typography>

        <Divider variant="fullWidth" sx={{ mt: 2, mb: 2 }} />

        {/* Save Icon and Button */}
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <IconButton color="dark" aria-label="Save Post">
            <TurnedInNotIcon />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            Save
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
