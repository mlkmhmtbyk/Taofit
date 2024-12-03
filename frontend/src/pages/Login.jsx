import Grid from "@mui/material/Grid2";
import LoginForm from "../components/LoginForm";

export default function Login() {
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
      <Grid>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
