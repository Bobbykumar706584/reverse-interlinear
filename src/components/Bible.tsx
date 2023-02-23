import { useEffect, useState } from "react";
import Books from "./Books";
import Chapters from "./Chapters";
import Text from "./Text";

type OptionType = {
  label: string;
  value: string;
};
const Bible = ({ setSNumber }: { setSNumber: (s: string) => void }) => {
  const [book, setBook] = useState<OptionType | undefined>({
    label: "Genesis",
    value: "gen",
  });
  const [chapter, setChapter] = useState<OptionType | undefined>();
  useEffect(() => {
    setChapter({ value: "1", label: "1" });
  }, [book]);
  return (
    <>
      <div className="flex ">
        <Books book={book} setBook={setBook} />
        <Chapters book={book} chapter={chapter} setChapter={setChapter} />
      </div>
      <div>
        <Text
          book={book?.value}
          chapter={chapter?.value}
          setSNumber={setSNumber}
        />
      </div>
    </>
  );
};

export default Bible;
