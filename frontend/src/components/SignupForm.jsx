import { useState } from "react";
import { Card, TextField, Button, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useUserStore } from "../store/user.js";
import { useNavigate } from "react-router-dom";
import MyDay from "../pages/MyDay.jsx";

function SignupForm() {
  const { signup } = useUserStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const credentials = { name, email, password };
    await signup(credentials);
    console.log("Signup successful:", credentials);
    navigate("/myDay");
  };

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
        autoComplete="name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Grid container justifyContent="space-between">
        <Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSignup()}
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
