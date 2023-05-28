import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import FaqCard from "../components/Faq/FaqCard";
import { faqs, labels } from "../dataset/testingData";

export default function Faq() {
  const options = labels;

  const faqList = faqs.map((faq) => {
    return <FaqCard {...faq} />;
  });

  return (
    <>
      <div className="flex justify-center p-10">
        <Autocomplete
          disablePortal
          options={options}
          sx={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="Domanda" />}
        />
      </div>
      {faqList}
    </>
  );
}
