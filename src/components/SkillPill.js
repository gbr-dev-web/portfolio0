import React from "react";

const SkillPill = ({ text }) => (
  <div
    className="
      px-3 py-1 rounded-full
      outline outline-[1.5px] outline-offset-[-1.5px] outline-white/40
      flex justify-center items-center gap-3
      transition-all duration-300 ease-in-out
      hover:outline-white/80
      hover:brightness-110
    "
  >
    <h6 className="text-xl transition-all duration-300 ease-in-out text-white/60 hover:text-white">
      {text}
    </h6>
  </div>
);

export default SkillPill;
