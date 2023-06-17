import React from "react";

const Test = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <input
        type="text"
        placeholder="enter here"
        className=" inline-block py-3 px-4 w-[500px] border border-slate-500 rounded-lg focus:border-blue-500 "
      />

      <textarea className=" border border-slate-500 w-[30%] rounded-lg" placeholder="enter" rows={10} ></textarea>
    </div>
  );
};

export default Test;
