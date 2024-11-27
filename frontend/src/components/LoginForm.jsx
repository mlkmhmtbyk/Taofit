import { useState } from "react";
import { Card, TextField, Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useUserStore } from "../store/user.js";

function LoginForm() {
  const { login } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const credentials = { email, password };
    await login(credentials);
    console.log("Login successful:", credentials);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", padding: 10 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Log in
      </Typography>
      <TextField
        id="email"
        label="Email Address"
        type="email"
        margin="normal"
        autoComplete="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        margin="normal"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Grid container justifyContent="space-between">
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
          >
            Log in
          </Button>
        </Grid>
        <Grid>
          <Link
            href="/signup"
            sx={{ fontSize: 12, display: "block", marginTop: 1 }}
          >
            Don't have an account? <br /> Sign up
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
}

export default LoginForm;
