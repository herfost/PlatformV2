import { Box } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import CardContent from "@mui/material/CardContent/CardContent";
import Card from "@mui/material/Card/Card";
import Divider from "@mui/material/Divider/Divider";
import LinkIcon from "@mui/icons-material/Link";
import AnswerCard, { IAnswer } from "./Answer";
import TagCard, { ITag } from "./Tag";

export interface IFaq {
  id: number;
  title: string;
  answers?: IAnswer[];
  tags?: ITag[];
}

export default function FaqCard({ id, title, answers, tags }: IFaq) {
  const titleId = "title-" + id;
  const cardId = "card-" + id;

  const answerList = answers?.map((answer) => {
    return <AnswerCard {...answer} />;
  });

  const tagList = tags?.map((tag) => {
    return <TagCard {...tag} />;
  });

  return (
    <>
      <Card id={cardId} sx={{ margin: 5, boxShadow: "1px 1px 4px black" }}>
        <CardContent sx={{ alignItems: "flex-end" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id={title} variant="h5" component="h1">
              {title}
            </Typography>
            <a href={"#" + titleId}>
              <LinkIcon />
            </a>
          </Box>
          <Divider />
          {answerList}
          {answerList?.length != 0 ? <Divider sx={{ padding: 2 }} /> : <></>}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {tagList}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
