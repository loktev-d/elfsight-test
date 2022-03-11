import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

import CharacterCard from "./CharacterCard";

export default function CardGrid() {
  const characters = useSelector((state) => state.main.characters);

  return (
    <Grid
      container
      spacing={2}
      sx={
        !characters?.length
          ? {
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : null
      }
    >
      {characters?.length ? (
        characters.map((item) => (
          <Grid item xs={6} lg={4}>
            <CharacterCard
              key={item.id}
              name={item.name}
              imageUrl={item.image}
              gender={item.gender}
              species={item.species}
            />
          </Grid>
        ))
      ) : (
        <Typography variant="h2" component="div">
          Nothing found...
        </Typography>
      )}
    </Grid>
  );
}
