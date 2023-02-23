import { useQuery } from "react-query";
import Select from "react-select";

type OptionType = {
  label: string;
  value: string;
};
type ChapterProps = {
  book: OptionType | undefined;
  chapter: OptionType | undefined;
  setChapter: (chapter: OptionType | undefined) => void;
};

const Chapters = ({ book, chapter, setChapter }: ChapterProps) => {
  const { isLoading, data } = useQuery("chapters", async () => {
    const res = await fetch(
      "https://stagingapi.vachanengine.org/v2/bibles/en_KJV_1_bible/versification"
    );
    const books = await res.json();
    return books?.maxVerses;
  });
  if (isLoading) return <div>Loading...</div>;
  const options: OptionType[] = [];
  if (data && book) {
    data[book?.value].map((_: any, i: number) =>
      options.push({ label: String(i + 1), value: String(i + 1) })
    );
  }
  return (
    <Select
      value={chapter}
      className="w-27 m-2"
      isSearchable={true}
      name="bookName"
      options={options}
      onChange={(option) => {
        setChapter(option as OptionType);
      }}
    />
  );
};

export default Chapters;
