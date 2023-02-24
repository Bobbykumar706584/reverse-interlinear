import { useQuery } from "react-query";

const Lemma = ({ strongs }: { strongs: string }) => {
  const { data } = useQuery(["dictData", strongs], async () => {
    const res = await fetch(`/api/dictionary/${strongs}`);
    const dictionary = await res.json();
    return dictionary;
  });
  return <span className="font-semibold">{data?.lemma}</span>;
};

export default Lemma;
