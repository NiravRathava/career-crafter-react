import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  CardMedia,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import {
  ThumbUpAlt as LikeIcon,
  ChatBubbleOutline as CommentIcon,
  Repeat as RepostIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({ post }) => {
  const [likes, setLikes] = useState( 0);

  const handleLike = () => {
    setLikes(likes + 1);
    // Add your logic to update likes in the database or state
  };

  return (
    <Card>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} >
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    <CardActions>
      <IconButton onClick={handleLike}>
        <LikeIcon />
      </IconButton>
      <Typography variant="body2">{likes}</Typography>
      <IconButton>
        <CommentIcon />
      </IconButton>
      <IconButton>
        <RepostIcon />
      </IconButton>
      <IconButton>
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  );
};

export default Post;
