import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../redux/mainSlice";
import { actions } from "../redux/sagas";

const statusItems = [
  { name: "Any", value: "" },
  { name: "Alive", value: "alive" },
  { name: "Dead", value: "dead" },
  { name: "Unknown", value: "unknown" },
];

const genderItems = [
  { name: "Any", value: "" },
  { name: "Female", value: "female" },
  { name: "Male", value: "male" },
  { name: "Genderless", value: "genderless" },
  { name: "Unknown", value: "unknown" },
];

export default function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.main.filter);

  const handleOnChange = (e) => {
    dispatch(setFilter({ name: e.target.name, value: e.target.value }));
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(actions.getCharacters());
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h5" sx={{ lineHeight: 1 }}>
            Filters
          </Typography>
          <Divider />
          <Box sx={{ height: 1 }}></Box>
          <TextField
            label="Name"
            name="name"
            onChange={handleOnChange}
            value={filter.name}
          />
          <FormControl>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              name="status"
              label="Status"
              labelId="status-label"
              onChange={handleOnChange}
              value={filter.status}
            >
              {statusItems.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Species"
            name="species"
            onChange={handleOnChange}
            value={filter.species}
          />
          <TextField
            label="Type"
            name="type"
            onChange={handleOnChange}
            value={filter.type}
          />
          <FormControl>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              label="Gender"
              labelId="gender-label"
              name="gender"
              onChange={handleOnChange}
              value={filter.gender}
            >
              {genderItems.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ height: 10 }}></Box>
          <Button variant="contained" type="submit">
            Filter
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
