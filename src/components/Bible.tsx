import { useEffect, useState } from "react";
import Books from "./Books";
import Chapters from "./Chapters";
import Text from "./Text";

type OptionType = {
  label: string;
  value: string;
};
const Bible = () => {
  const [book, setBook] = useState<OptionType | undefined>({
    label: "Genesis",
    value: "gen",
  });
  const [chapter, setChapter] = useState<OptionType | undefined>();
  useEffect(() => {
    console.log("test");
    setChapter({ value: "1", label: "1" });
  }, [book]);
  return (
    <>
      <div>
        <Books book={book} setBook={setBook} />
      </div>
      <div>
        <Chapters book={book} chapter={chapter} setChapter={setChapter} />
      </div>
      <div>Verse</div>
      <div>
        <Text book="mat" chapter={1} />
      </div>
    </>
  );
};

export default Bible;
