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
  book: OptionType | undefined;
  setBook: (book: OptionType | undefined) => void;
};

export default function Books({ book, setBook }: BooksProps) {
  const { isLoading, data } = useQuery("books", async () => {
    const res = await fetch(
      "https://stagingapi.vachanengine.org/v2/bibles/en_KJV_1_bible/books"
    );
    const books = await res.json();
    return books;
  });
  if (isLoading) return <div>Loading...</div>;

  const options: OptionType[] = [];
  data?.map((item: book) => {
    -0;
    options.push({ label: item.book.bookName, value: item.book.bookCode });
  });

  return (
    <Select
      value={book}
      className="w-72 m-2"
      isSearchable={true}
      name="bookName"
      options={options}
      onChange={(option) => {
        setBook(option as OptionType);
      }}
    />
  );
}
