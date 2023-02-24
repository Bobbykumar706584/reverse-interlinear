import { XCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "react-query";

const Dictionary = ({
  sNumber,
  updateSNumber,
}: {
  sNumber: string;
  updateSNumber: (s: string) => void;
}) => {
  const { isError, isLoading, data } = useQuery(
    ["dictData", sNumber],
    async () => {
      const res = await fetch(`/api/dictionary/${sNumber}`);
      const dictionary = await res.json();
      return dictionary;
    }
  );
  if (isLoading) return <div>Loading...</div>;
  if (data?.message === "Invalid StrongsNumber")
    return <div className="m-4"> No Data...</div>;
  return (
    <>
      <div className="">
        <div className="p-1 flex ">
          <XCircleIcon
            className="w-6 h-6 mt-1 bg-red-600 rounded-full text-white cursor-pointer"
            onClick={() => updateSNumber("")}
          />
          <div className="mt-1 ">
            <span className="ml-4 font-semibold">{data?.transliteration}</span>
            <span className="ml-4 font-semibold">{data?.lemma}</span>
            <span className="ml-4 font-semibold text-blue-700">
              {data?.strongsNumber?.toUpperCase()}
            </span>
          </div>
        </div>
        <div className={`mt-2 border-t-2`}>
          <div className="p-2">
            <div>
              <span className="font-semibold font-serif">Lemma: </span>
              <span>{data.lemma}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">
                Transliteration:{" "}
              </span>
              <span>{data.transliteration}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">Strongs Number: </span>
              <span>{data.strongsNumber}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">English Word: </span>
              <span>{data?.englishWord}</span>
            </div>
            {data?.derivation && (
              <div className="mt-2">
                <span className="font-semibold font-serif">Derivation: </span>
                <span>{data?.derivation}</span>
              </div>
            )}
            <div className="mt-2">
              <span className="font-semibold font-serif">Pronunciation: </span>
              <span>{data?.pronunciation}</span>
            </div>
            <div className="mt-2 mb-2">
              <span className="font-semibold font-serif">Definition: </span>
              <span>{data?.definition}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dictionary;
