import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

import CharacterCard from "./CharacterCard";
import { actions } from "./sagas";

export default function CardGrid() {
  const characters = useSelector((state) => state.main.characters);
  const pageCount = useSelector((state) => state.main.pageCount);
  const currentPage = useSelector((state) => state.main.currentPage);

  const dispatch = useDispatch();

  return (
    <>
      {characters?.length ? (
        <>
          <Grid container spacing={2}>
            {characters.map((item) => (
              <Grid item xs={6} lg={4} key={item.id}>
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
          <Box sx={{ mt: 2, mb: 2, display: "flex", justifyContent: "center" }}>
            <Pagination
              color="primary"
              count={pageCount}
              page={currentPage}
              onChange={(e, value) => dispatch(actions.getCharacters(value))}
            />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" component="div">
            Nothing found...
          </Typography>
        </Box>
      )}
    </>
  );
}
