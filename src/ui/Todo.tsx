import { Edit2, Trash2Icon } from "lucide-react";
import React, { FC, SetStateAction } from "react";
interface TodoProps {
  title: string;
  date: string;
  time: string;
  setEditId: React.Dispatch<SetStateAction<string>>;
  id: string;
  todoArr: { title: string; date: string; time: string; id: string }[];
  setTodoArr: React.Dispatch<
    SetStateAction<{ title: string; date: string; time: string; id: string }[]>
  >;
  setIsEditModalOpen: React.Dispatch<SetStateAction<boolean>>;
}
const Todo: FC<TodoProps> = ({
  title,
  date,
  time,
  id,
  setEditId,
  todoArr,
  setTodoArr,
  setIsEditModalOpen,
}) => {
  const handleDelete = (id: string) => {
    const newArr = todoArr.filter((todo) => todo.id !== id);
    setTodoArr(newArr);
  };
  const handleEdit = (id: string) => {
    setIsEditModalOpen(true);
    setEditId(id);
  };
  return (
    <div className="flex  items-center justify-between bg-red-100 w-[90%] rounded-md p-2 capitalize">
      <div>
        {title}
        <p className="text-[#000000]/30">
          {time}, {date}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div
          onClick={() => {
            handleEdit(id);
          }}
          className="p-2 bg-[#000000]/5 hover:bg-blue-500/10 transition-color ease-in-out duration-[8ms] group"
        >
          {" "}
          <Edit2 size={"17px"} className="group-hover:text-blue-500" />
        </div>
        <div
          onClick={() => {
            handleDelete(id);
          }}
          className="p-2 bg-[#000000]/5 hover:bg-red-500/20 transition-color ease-in-out duration-[8ms] group"
        >
          <Trash2Icon size={"18px"} className="group-hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
