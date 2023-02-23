import { useQuery } from "react-query";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Text = ({ book, chapter }: { book: string; chapter: number }) => {
  const { isLoading, data } = useQuery("repoData", () =>
    fetch("/api/bible/mat/2").then((res) => res.json())
  );
  return (
    <div>
      {data?.contents?.map(
        (item: { verseNumber: number; verseText: string }) => {
          return (
            <>
              <span>{item.verseNumber}</span>
              <span>{item.verseText}</span>
            </>
          );
        }
      )}
    </div>
  );
};

export default Text;
