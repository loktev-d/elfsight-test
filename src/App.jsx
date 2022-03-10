import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Filter from "./Filter";
import { actions } from "./sagas";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCharacters());
  }, []);

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
