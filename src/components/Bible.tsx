import { useState } from "react";
import Books from "./Books";
import Text from "./Text";
type OptionType = {
  label: string;
  value: string;
};
const Bible = () => {
  const [book, setBook] = useState<OptionType | null>();
  return (
    <>
      <div>
        <Books setBook={setBook} />
      </div>
      <div>Verse</div>
      <div>
        <Text book="mat" chapter={1} />
      </div>
    </>
  );
};

export default Bible;