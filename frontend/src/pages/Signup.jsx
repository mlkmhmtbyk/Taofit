import Grid from "@mui/material/Grid2";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "20vh" }}
      sx={{ marginTop: "100px" }}
    >
      <Grid item xs={3}>
        <SignupForm />
      </Grid>
    </Grid>
  );
};

export default Signup;
