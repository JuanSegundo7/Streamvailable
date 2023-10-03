import React from "react";

interface Switch {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

const Switch = ({ type, setType }: Switch) => {
  return (
    <div className="w-[150px] sm:w-[207px] h-[45px] rounded-2xl flex justify-center items-center ">
      <button
        onClick={() => setType("movie")}
        className={`flex justify-center items-center w-full h-full rounded-2xl text-white ${
          type === "movie" && "bg-blue"
        }`}
      >
        Movies
      </button>
      <button
        onClick={() => setType("serie")}
        className={`flex justify-center items-center w-full h-full rounded-2xl text-white ${
          type === "serie" && "bg-blue"
        }`}
      >
        Series
      </button>
    </div>
  );
};

export default Switch;
