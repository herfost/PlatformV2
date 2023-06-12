import { IFaq } from "../components/Faq/FaqCard";
import faqs from "../data/faqs.json";

function labelList(labels: IFaq[]): { label: string }[] {
  const labelList: { label: string }[] = [];
  labels.map((label) => {
    labelList.push({ label: label.title });
  });

  return labelList;
}

export const faqsData: IFaq[] = faqs.data;
export const labels = labelList(faqs.data);
