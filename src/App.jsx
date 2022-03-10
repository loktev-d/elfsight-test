import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { css } from "@mui/material/styles";

import Filter from "./Filter";

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filter />
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </Container>
  );
}
