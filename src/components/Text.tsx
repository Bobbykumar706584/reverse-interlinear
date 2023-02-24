import { useQuery } from "react-query";
import Lemma from "./Lemma";

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
  setSNumber: (s: string) => void;
  enable: boolean;
};
const Text = ({ enable, book, chapter, setSNumber }: TextProps) => {
  const { isLoading, data } = useQuery(["repoData", book, chapter], () =>
    fetch(`/api/bible/${book}/${chapter}`).then((res) => res.json())
  );
  function cleanStrongs(str: string) {
    return str[0] + parseInt(str.substring(1));
  }

  if (isLoading) return <div>Loading Chapter...</div>;

  function showWord(strongs: string, word: string, key: number) {
    return (
      <span
        className="inline-flex flex-col rounded bg-gray-200  p-1 m-1 cursor-pointer"
        onClick={() => {
          setSNumber(strongs);
        }}
        key={key}
      >
        <span>{" " + word}</span>
        {enable && <Lemma strongs={strongs} />}
      </span>
    );
  }
  function getVerse(verse: unknown) {
    return verse?.map((item: unknown, i: number) => {
      if (typeof item === "string") {
        return <span key={i}>{" " + item + " "}</span>;
      }
      if (item?.hasOwnProperty("wj")) {
        return item?.wj.map((val) => {
          return val["+w"] ? (
            showWord(val.attributes[0].strong, val["+w"][0], i)
          ) : val["+add"] ? (
            <span> {val["+add"][0]}</span>
          ) : (
            val
          );
        });
      }
      if (item?.hasOwnProperty("w")) {
        const strongs = cleanStrongs(item.attributes[0].strong);
        return showWord(strongs, item?.w[0], i);
      }
      if (item?.hasOwnProperty("add")) {
        return <span key={i}>{" " + item?.add[0] + " "}</span>;
      }
      if (item?.hasOwnProperty("nd")) {
        return showWord(
          item?.nd[0]["attributes"][0].strong,
          item?.nd[0]["+w"][0],
          i
        );
      }
      if (item?.hasOwnProperty("p")) {
        return "";
      }
      if (item?.hasOwnProperty("footnote")) {
        return "";
      }
      if (item?.hasOwnProperty("q1")) {
        return item?.hasOwnProperty("q1") || "";
      }
      if (item?.hasOwnProperty("b")) {
        return item?.hasOwnProperty("b") || "";
      }
      if (item[0]?.hasOwnProperty("s1")) {
        return (
          <div key={i} className="mt-1 font-bold text-blue-600">
            {item[0]?.s1[0]?.tl[0] || ""}
          </div>
        );
      }
      return "";
    });
  }
  return (
    <div className="m-4 text-justify overflow-auto max-h-[50rem]">
      {data?.contents?.map(
        (item: {
          verseNumber: number;
          verseText: string;
          contents: unknown;
        }) => {
          return (
            <div className="py-1" key={item.verseNumber}>
              <span className="font-semibold mr-1">{item.verseNumber}</span>
              <span>{getVerse(item.contents)}</span>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Text;
