import { useState } from "react";
import Books from "./Books";
import Text from "./Text";
import  Chapters  from "./Chapters";
type OptionType = {
  label: string;
  value: string;
};
const Bible = () => {
  const [book, setBook] = useState<OptionType | null>();
  const [chapter, setChapter] = useState<number>(1)
  return (
    <>
      <div>
        <Books setBook={setBook} />
      </div>
      <div><Chapters /></div>
      <div>Verse</div>
      <div>
        <Text book="mat" chapter={1} />
      </div>
    </>
  );
};

export default Bible;