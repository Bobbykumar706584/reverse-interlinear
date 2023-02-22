import { useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";

type book = {
  active: boolean;
  book: {
    bookCode: string;
    bookId: number;
    bookName: string;
  };
};
type OptionType = {
  label: string;
  value: string;
};
type BooksProps = {
  setBook: (book: OptionType | null) => void;
};

export default function Books({ setBook }: BooksProps) {
  const [selectValue, setSelectValue] = useState<OptionType>();
  const { isLoading, data } = useQuery("repoData", async () => {
    const res = await fetch(
      "https://stagingapi.vachanengine.org/v2/bibles/en_KJV_1_bible/books"
    );
    const books = await res.json();
    return books;
  });
  if (isLoading) return <div>Loading...</div>;

  const options: any = [];
  data?.map((item: book) => {
    options.push({ label: item.book.bookName, value: item.book.bookCode });
  });

  return (
    <>
      <Select
        defaultValue={selectValue}
        className="w-72 m-2"
        isSearchable={true}
        name="bookName"
        options={options}
        onChange={(option) => {
          setBook(option);
          setSelectValue(option || undefined);
        }}
      />
      <div className={`${selectValue ? "block" : "hidden"}`}>
        Jesus Is Tested in the Wilderness 4 Then Jesus was led by the Spirit
        into the wilderness to be tempted[a] by the devil. 2 After fasting forty
        days and forty nights, he was hungry. 3 The tempter came to him and
        said, “If you are the Son of God, tell these stones to become bread.” 4
        Jesus answered, “It is written: ‘Man shall not live on bread alone, but
        on every word that comes from the mouth of God.’[b]” 5 Then the devil
        took him to the holy city and had him stand on the highest point of the
        temple. 6 “If you are the Son of God,” he said, “throw yourself down.
        For it is written: “‘He will command his angels concerning you, and they
        will lift you up in their hands, so that you will not strike your foot
        against a stone.’[c]” 7 Jesus answered him, “It is also written: ‘Do not
        put the Lord your God to the test.’[d]” 8 Again, the devil took him to a
        very high mountain and showed him all the kingdoms of the world and
        their splendor. 9 “All this I will give you,” he said, “if you will bow
        down and worship me.”
      </div>
    </>
  );
}
