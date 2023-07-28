import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";
import FaqCard from "../components/Faq/FaqCard";
import { faqsData, labels } from "../data/testingData";

export default function Faq() {
  const [faqElements, setFaqElements] = useState(faqsData);

  const filterByTitle = (
    event: React.SyntheticEvent<Element, Event>,
    search?: string
  ): void => {
    const faqElementsFiltered = faqsData.filter((faq) => {
      return (
         

        event.target != undefined && search != undefined &&
        faq.title.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFaqElements(faqElementsFiltered);
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
