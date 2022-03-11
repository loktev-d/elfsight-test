import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import { css, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CharacterCard({ name, imageUrl, gender, species }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imageUrl}
          sx={{ height: 276, backgroundColor: "gray" }}
        />
        <CardHeader
          title={matches && name.length > 15 ? name.slice(0, 20) + "..." : name}
          subheader={`${species} - ${gender}`}
          sx={{
            whiteSpace: "nowrap",
          }}
          css={css`
            .MuiCardHeader-content {
              overflow: hidden;
            }
          `}
        />
      </CardActionArea>
    </Card>
  );
}
