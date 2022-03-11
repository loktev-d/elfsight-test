import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const StyledCard = styled(Card)`
  position: absolute;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function CharacterInfoModal(props) {
  const character = useSelector((state) =>
    state.main.characters.find(
      (character) => character.id === state.main.selectedCharacterId
    )
  );

  return (
    <Modal {...props}>
      {character ? (
        <StyledCard>
          <CardMedia
            component="img"
            image={character.image}
            sx={{ height: 350 }}
          />
          <CardHeader title={character.name} />
          <CardContent sx={{ height: 200, overflow: "auto" }}>
            {Object.entries(character)
              .filter(
                ([key, value]) =>
                  ["gender", "status", "type", "origin", "location"].some(
                    (item) => item === key
                  ) && value !== ""
              )
              .map(([key, value], index) => (
                <div key={index}>
                  <Typography variant="p">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {value}
                  </Typography>
                </div>
              ))}
          </CardContent>
        </StyledCard>
      ) : null}
    </Modal>
  );
}
