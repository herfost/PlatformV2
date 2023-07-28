import FileCopyIcon from "@mui/icons-material/FileCopy";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function FaqForm() {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState(new Array<{ name: string }>());

  const stringify = (): string => {
    return JSON.stringify({
      id: 0,
      title: title,
      answer: [
        {
          id: 0,
          username: username,
          content: content,
        },
      ],
      tags: tag,
    });
  };

  const copyJsonToClipboard = () => {
    navigator.clipboard.writeText(stringify());
  };

  return (
    <>
      <div className="flex justify-center p-10 border-zinc-700 boder">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            padding: "10px",
          }}
        >
          {}

          <TextField
            sx={{ padding: "10px" }}
            placeholder="Titolo"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></TextField>
          <TextField
            sx={{ padding: "10px" }}
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></TextField>
          <TextField
            sx={{ padding: "10px" }}
            placeholder="Contenuto"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></TextField>
          <TextField
            sx={{ padding: "10px" }}
            placeholder="Tag"
            onChange={(event) => {
              const tagList = event.target.value.split(" ");
              setTag(tagList.map((tagName) => ({ name: tagName })));
            }}
          ></TextField>
        </Box>

        <Container
          sx={{
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              displa: "flex",
              width: "90%",
              textAlign: "center",
              textJustify: "center",
              fontSize: "18px",
              fontFamily: "monospace",
            }}
          >
            {stringify()}
          </Typography>
          <Box>
            <Button onClick={copyJsonToClipboard}>
              <FileCopyIcon />
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
}
