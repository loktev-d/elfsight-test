import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Container>
  );
}
