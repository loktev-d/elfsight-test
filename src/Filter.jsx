import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack spacing={1}>
        <TextField label="Name" />
        <FormControl>
          <InputLabel id="status-label">Status</InputLabel>
          <Select label="Status" labelId="status-label" value="">
            {statusItems.map((item) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Species" />
        <TextField label="Type" />
        <FormControl>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select label="Gender" labelId="gender-label" value="">
            {genderItems.map((item) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Paper>
  );
}
