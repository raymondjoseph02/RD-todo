import { FC } from "react";
interface OutlinBtnProps {
  text: string;
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  idle: boolean;
}

const OutlinBtn: FC<OutlinBtnProps> = ({ text, handleOnClick, idle }) => {
  return (
    <button
      onClick={handleOnClick}
      className={`border border-[1px] p-2 rounded-md text-[1.25rem] font-normal capitalize ${
        idle
          ? "hover:bg-blue-400/90 bg-blue-400 cursor-pointer text-[#FFFF] "
          : "hover:bg-transparent/15 bg-transparent/10 cursor-not-allowed	text-blue-500"
      } border-[#FFFF]/20 `}
    >
      {text}
    </button>
  );
};

export default OutlinBtn;
