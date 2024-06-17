import React from "react";
import lang from "../components/LanguageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[15%] w-1/2 flex justify-center ">
      <form className=" bg-black ">
        <input
          type="text"
          className="p-4 m-4 w-[500px]"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button className=" py-2 px-4 bg-red-700 text-white rounded-xl w-[130px] m-3  ">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
