import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
export default function MediaCard({ name, time, image }) {
  return (
    <Card sx={{ width: "14vw" }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <h2 className="font-bold">{name}</h2>

        <Typography variant="h3" color="text.secondary">
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}
