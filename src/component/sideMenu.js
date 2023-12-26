import React from "react";
import {
  Typography,

  Divider,
  Button,
  Card,CardContent
} from "@mui/material";

const SideMenu = () => {
  return (
    <Card >
        <CardContent sx={{ textAlign: 'start' }}>
    {/* Recents */}
    <Typography variant="subtitle1" gutterBottom>
          Recents
        </Typography>
        <Typography>
          Recent Search 1
        </Typography>
        <Typography>
          Recent Search 2
        </Typography>
        <Divider sx={{ my: 1 }} />
        {/* Groups */}
        <Typography variant="subtitle1" gutterBottom>
          Groups
        </Typography>
        <Typography>
          Group 1
        </Typography>
        <Typography>
          Group 2
        </Typography>
        <Divider sx={{ my: 1 }} />
        {/* Events */}
        <Typography variant="subtitle1" gutterBottom>
          Events
        </Typography>
        <Typography>
          Event 1
        </Typography>
        <Typography>
          Event 2
        </Typography>
        <Divider sx={{ my: 1 }} />
        {/* Followed Hashtags */}
        <Typography variant="subtitle1" gutterBottom>
          Followed Hashtags
        </Typography>
        <Typography>
          #Hashtag1
        </Typography>
        <Typography>
          #Hashtag2
        </Typography>

        {/* Divider for Horizontal Line */}
        <Divider sx={{ my: 1 }} />

        {/* Discover More Button */}
        <Button variant="contained" color="primary">
          Discover More
        </Button>
      </CardContent>
    </Card>
  );
};

export default SideMenu;
