import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

export interface ICardSimple {
  id?: string;
  heading?: string | JSX.Element | JSX.Element[];
  children?: string | JSX.Element | JSX.Element[];
}

export default function CardSimple({ id, heading, children }: ICardSimple) {
  return (
    <Card sx={{ margin: 5, boxShadow: "1px 1px 4px black" }}>
      <CardContent sx={{ alignItems: "flex-end" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id={id} variant="h5" component="h1">
            {heading}
          </Typography>
        </Box>
        <Divider />
        {children}
      </CardContent>
    </Card>
  );
}
