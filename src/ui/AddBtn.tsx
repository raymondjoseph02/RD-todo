import { Plus } from "lucide-react";
import { FC } from "react";

interface BtbProps {
  handleAddTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddBtn: FC<BtbProps> = ({ handleAddTodo }) => {
  return (
    <button
      onClick={handleAddTodo}
      className="flex items-center bg-[#9e78fc] p-2 rounded-md group"
    >
      <Plus
        color="#FFF"
        size={"19.5px"}
        className="transition-transform duration-300 group-hover:rotate-[90deg]"
      />
    </button>
  );
};

export default AddBtn;
