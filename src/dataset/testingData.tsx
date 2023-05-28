import { IAnswer } from "../components/Faq/Answer";
import { IFaq } from "../components/Faq/FaqCard";
import { ITag } from "../components/Faq/Tag";

function tagList(tags: string[]): ITag[] {
  const tagList: ITag[] = [];
  tags.forEach((tag) => tagList.push({ name: tag }));

  return tagList;
}

function labelList(labels: IFaq[]): { label: string }[] {
  const labelList: { label: string }[] = [];
  labels.map((label) => {
    labelList.push({ label: label.title });
  });

  return labelList;
}

// const answers: IAnswer[] = [];
 const answers: IAnswer[] = [
  {
    id: 1,
    username: "John",
    content: "Una riposta di John",
  },
  {
    id: 2,
    username: "Joe",
    content: "Una riposta di Joe",
  },
  {
    id: 3,
    username: "Cal",
    content: "Una riposta di Cal",
  },
  {
    id: 4,
    username: "Ola",
    content: "Una riposta di Ola",
  },
  {
    id: 5,
    username: "Vezon",
    content: "Una riposta di Vezon",
  },
];


// let tags: ITag[] = [];
const tags = tagList(["Testing", "Example"]);


export const faqs: IFaq[] = [
  {
    id: 1,
    title: "Domanda",
    answers: answers,
    tags: tags
  },
  {
    id: 2,
    title: "Question",
    answers: answers,
    tags: tags
  },
  {
    id: 3,
    title: "Dunno",
    answers: [],
    tags: []
  },

];

export const labels = labelList(faqs);
