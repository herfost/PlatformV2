import { Box } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";

export interface IAnswer {
  id: number;
  username?: string;
  content: string;
}

export interface INoAnswer {
  text?: string;
}

export default function AnswerCard({ id, content, username }: IAnswer) {
  const answerId = "answer-" + id;

  const contentBlock = (
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {content}
    </Typography>
  );

  const usernameBlock = (
    <Typography
      variant="body2"
      color="text.secondary"
      gutterBottom
      sx={{
        marginInline: 2,
        paddingInline: 2,
        backgroundColor: "blue",
        color: "white",
      }}
    >
      {username}
    </Typography>
  );

  return (
    <>
      <Box
        id={answerId}
        sx={{
          marginBlockStart: 2,
          padding: 2,
          boxShadow: "1px 1px 2px black",
          borderColor: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {contentBlock}
        {usernameBlock}
      </Box>
    </>
  );
}

export function NoAnswer({ text = "No Answer" }: INoAnswer) {
  const textBlock = (
    <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
      {text}
    </Typography>
  );

  return <Box>{textBlock}</Box>;
}
