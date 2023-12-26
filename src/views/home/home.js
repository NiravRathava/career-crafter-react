import Post from "../../component/post";
import Grid from "@mui/material/Grid";
import UserDetails from "../../component/userDetails";
const Home = () => {
  return (
    <Grid container spacing={2} justifyContent="space-around">
      <Grid item xs={6} md={8} lg={3} >
        <UserDetails style={{ backgroundColor: "red" }}/>
      </Grid>
      <Grid item xs={6} md={4} lg ={9}>
        <Post  />
        <Post  />
        <Post  />
        <Post  />
        <Post  />
      </Grid>
    </Grid>
  );
};
export default Home;
