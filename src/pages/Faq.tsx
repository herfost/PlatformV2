import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import FaqCard from "../components/Faq/FaqCard";
import { faqsData, labels } from "../data/testingData";
import { useState } from "react";

export default function Faq() {
  const [faqElements, setFaqElements] = useState(faqsData);

  const filterByTitle = (
    event: React.SyntheticEvent<Element, Event>,
    search?: string
  ): void => {
    const faqElementsFiltered = faqsData.filter((faq) => {
      return search == null
        ? faqsData
        : faq.title.toLowerCase().includes(search.toLowerCase());
      /**
         * TODO: Estendere ricerca per contentuo e tag
        || (faq.answers != null && faq.answers?.map((answer) => answer.content.toLowerCase().includes(search.toLowerCase())).length > 0) 
        || (faq.tags != null && faq.tags?.map((tag) => tag.name.toLowerCase().includes(search.toLowerCase())).length > 0);
        */
    });

    setFaqElements("" === search ? faqsData : faqElementsFiltered);
  };

  const options = labels;

  const faqList = faqElements.map((faqElement) => {
    return <FaqCard {...faqElement} />;
  });

  return (
    <>
      <div className="flex justify-center p-10">
        <Autocomplete
          disablePortal
          options={options}
          onInputChange={filterByTitle}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Domanda" />}
        />
      </div>
      {faqList}
    </>
  );
}
