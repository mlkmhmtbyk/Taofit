import { Card, TextField, Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";

function SignupForm() {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto", padding: 10 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Sign up
      </Typography>
      <TextField
        id="name"
        label="Name"
        type="name"
        margin="normal"
        autoComplete="UserName"
        fullWidth
      />
      <TextField
        id="email"
        label="Email Address"
        type="email"
        margin="normal"
        autoComplete="email"
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        margin="normal"
        fullWidth
      />
      <Grid container justifyContent="space-between">
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Login button clicked")}
          >
            Sign up
          </Button>
        </Grid>
        <Grid>
          <Link
            href="/login"
            sx={{ fontSize: 12, display: "block", marginTop: 1 }}
          >
            Already have an account <br /> Log in
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SignupForm;
