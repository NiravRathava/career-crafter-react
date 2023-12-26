import Post from "../../component/post";
import Grid from "@mui/material/Grid";
import UserDetails from "../../component/userDetails";
import SideMenu from "../../component/sideMenu";
const Home = () => {
  return (
    <Grid container spacing={2} justifyContent="space-around">
      {/* <Grid
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={6}
        md={8}
        lg={3}
        spacing={2}
      >
        <Grid item xs={5}>
          <UserDetails />
        </Grid>
        <Grid item xs={5}>
          <SideMenu />
        </Grid>
      </Grid> */}
      <Grid item xs={6} md={4} lg={3}>
      <UserDetails style={{ marginBottom: "16px" }}/>
      <SideMenu />

      </Grid>
      <Grid item xs={6} md={4} lg={9}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
    </Grid>
  );
};
export default Home;
