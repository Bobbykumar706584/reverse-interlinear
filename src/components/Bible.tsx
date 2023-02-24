import { useEffect, useState } from "react";
import Books from "./Books";
import Chapters from "./Chapters";
import Text from "./Text";

type OptionType = {
  label: string;
  value: string;
};
type enableType = {
  enable:boolean;
  setEnable: () => void
}
const Bible = ({ setSNumber }: { setSNumber: (s: string) => void }) => {
  const [enable, setEnable] = useState<boolean>(false)
  const [book, setBook] = useState<OptionType | undefined>({
    label: "Genesis",
    value: "gen",
  });
  const [chapter, setChapter] = useState<OptionType | undefined>();
  useEffect(() => {
    setChapter({ value: "1", label: "1" });
  }, [book]);

const enableCheck = () => {
  if(!enable){
    setEnable(true)

  }else{
    setEnable(false)
  }
}
  return (
    <>
      <div className="flex flex-1">
        <Books book={book} setBook={setBook} />
        <Chapters book={book} chapter={chapter} setChapter={setChapter} />
       <div className="flex">
       <input onClick={enableCheck} checked={enable} type="checkbox" className="ml-4 w-5 h-5 mt-5 cursor-pointer"/>
        <span className="ml-2 mt-5">Show Reverse Interlinear</span>
       </div>
      </div>
      <div>
        <Text
          book={book?.value}
          chapter={chapter?.value}
          setSNumber={setSNumber}
          enable={enable}
        />
      </div>
    </>
  );
};

export default Bible;
