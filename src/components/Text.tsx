import { it } from "node:test";
import { useQuery } from "react-query";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
type TextProps = {
  book: string | undefined;
  chapter: string | undefined;
};
const Text = ({ book, chapter }: TextProps) => {
  const { isLoading, data } = useQuery(["repoData", book, chapter], () =>
    fetch(`/api/bible/${book}/${chapter}`).then((res) => res.json())
  );

  if (isLoading) return <div>Loading Chapter...</div>;
  console.log(data);
  return (
    <div className="m-4 text-justify">
      {data?.contents?.map(
        (item: { verseNumber: number; verseText: string }) => {
          return (
            <div className="py-1" key={item.verseNumber}>
              <span className="font-semibold mr-1">{item.verseNumber}</span>
              <span>{item.verseText}</span>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Text;
