import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Card>
      <CardMedia component="img" height="160" image={user.picture.large} alt={user.name.first} />
      <CardContent>
        <Typography variant="h6">
          {user.name.first} {user.name.last}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Button component={Link} to={`/user/${user.login.uuid}`} variant="outlined" size="small" sx={{ mt: 1 }} state={{ user }}>
          Detay
        </Button>
      </CardContent>
    </Card>
  );
}
