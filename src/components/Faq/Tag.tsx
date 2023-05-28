import { Box } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";

export interface ITag {
  name: string;
}

export default function TagCard({ name }: ITag) {
  return (
    <Typography variant="body2" color="text.secondary" gutterBottom>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          marginInline: 2,
          paddingInline: 2,
        }}
      >
        {name}
      </Box>
    </Typography>
  );
}