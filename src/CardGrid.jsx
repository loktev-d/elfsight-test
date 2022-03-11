import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import CharacterCard from "./CharacterCard";

export default function CardGrid() {
  const characters = useSelector((state) => state.main.characters);

  return (
    <Grid container spacing={2}>
      {characters.map((item) => (
        <Grid item xs={6} lg={4}>
          <CharacterCard
            key={item.id}
            name={item.name}
            imageUrl={item.image}
            gender={item.gender}
            species={item.species}
          />
        </Grid>
      ))}
    </Grid>
  );
}
