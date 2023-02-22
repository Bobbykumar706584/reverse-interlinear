import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Dictionary = ({sNumber}:{sNumber:string}) => {
  fetch(`api/dictionary${sNumber}`).then(res => res.json())
  const [arrowClick, setArrowClick] = useState<boolean>(false);
  const [arrowDown, setArrowDown] = useState<boolean>(false);

  const onArrowtClick = () => {
    if (arrowClick) {
      setArrowClick(false);
    } else {
      setArrowClick(true);
    }
  };

  return (
    <>
      <div className="">
        <div className="p-1 flex flex-1">
          {arrowClick ? (
            <ChevronDownIcon onClick={onArrowtClick} className="w-6 h-6 mt-1" />
          ) : (
            <ChevronRightIcon
              onClick={onArrowtClick}
              className="w-6 h-6 mt-1"
            />
          )}
          <div className=" mt-1">
            <span className="ml-4 font-semibold">bible</span>
            <span className="ml-4 font-semibold">biblo</span>
            <span className="ml-4 font-semibold text-blue-700">g7849</span>
          </div>
        </div>
        <div className={`${arrowClick ? "block" : "hidden"} mt-2 border-t-2`}>
          <div className="p-2">
            <div>
              <span className="font-semibold font-serif">Lexeme: </span>
              <span>ZBCD</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">
                Transliteration:{" "}
              </span>
              <span>ZBCD</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">Strongs Number: </span>
              <span>ZBCD</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">English Word: </span>
              <span>ZBCD</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold font-serif">Pronunciation: </span>
              <span>ZBCD</span>
            </div>
            <div className="mt-2 mb-2">
              <span className="font-semibold font-serif">Definition: </span>
              <span>
                Tailwind lets you conditionally apply utility classes in
                different states using variant modifiers.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dictionary;
