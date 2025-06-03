import { useLocation, useParams } from "react-router-dom";
import { Container, Typography, Avatar } from "@mui/material";

export default function UserDetail() {
  const { state } = useLocation();
  const { uuid } = useParams();

  if (!state?.user) {
    return (
      <Container>
        <Typography>Veri bulunamadı.</Typography>
      </Container>
    );
  }

  const { user } = state;

  return (
    <Container className="p-6">
      <div className="flex flex-col items-center gap-4">
        <Avatar src={user.picture.large} sx={{ width: 100, height: 100 }} />
        <Typography variant="h5">
          {user.name.first} {user.name.last}
        </Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Telefon: {user.phone}</Typography>
        <Typography>Ülke: {user.location.country}</Typography>
      </div>
    </Container>
  );
}
