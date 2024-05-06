import { motion } from "framer-motion";
import ChevronDown from "./chevronDown";
import ChevronRight from "./chevronRight";

export default function LakeQuickFacts({
  characteristics,
  title,
  selectedSummary,
  setSelectedSummary,
}) {
  const showContents = title === selectedSummary;

  function handleClick() {
    setSelectedSummary(title);
  }

  return (
    <div className="">
      <div
        className="flex cursor-pointer items-center my-4"
        onClick={handleClick}
      >
        {showContents ? <ChevronDown /> : <ChevronRight />}
        <p className="font-medium mb-0 text-sm md:text-base ">{title}</p>
      </div>
      <motion.ul
        className="ml-[21px]"
        initial={false}
        animate={{ height: showContents ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {characteristics?.map((characteristic) => (
          <motion.li
            key={characteristic}
            className="py-2 border-b border-t border-dotted font-extralight"
          >
            {characteristic}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
