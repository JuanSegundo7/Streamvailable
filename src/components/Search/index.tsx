import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { Values } from "@/@types/values";

interface Search {
  setValues: Dispatch<SetStateAction<Values>>;
  values: Values;
}

const Search = ({ setValues, values }: Search) => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setValues((prevValues: Values) => ({
      ...prevValues,
      keyword,
    }));
  };

  const hadnleSubmit = () => {
    const queryToSearch = new URLSearchParams({
      country: values.country,
      keyword: values.keyword,
    });

    router.push(`/search?${queryToSearch.toString()}`);
  };

  return (
    <div className="mt-10 flex justify-center items-center w-full h-full">
      <input
        onChange={handleChange}
        placeholder="Fast & Furious"
        className="bg-grey border-[1px] border-white text-white w-full max-w-[400px] h-[40px] lg:max-w-full lg:w-[700px] lg:h-[65px] p-4 rounded-none	"
      />
      <button
        onClick={hadnleSubmit}
        className={`ml-[1px] w-[178px] h-[40px] lg:h-[70px] flex justify-center items-center bg-blue  ${
          !values.keyword ? "opacity-25 cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={!values.keyword}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
