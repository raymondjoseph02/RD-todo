import { useEffect, useState } from "react";
import AddBtn from "./ui/AddBtn";
import Modal from "./ui/Modal";
import { Typewriter } from "react-simple-typewriter";
import Todo from "./ui/Todo";
import EditModal from "./ui/EditModal";
function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [editId, setEditId] = useState("");
  const [reLoad, setReload] = useState(false);
  const [todoArr, setTodoArr] = useState<
    { title: string; date: string; time: string; id: string }[]
  >([]);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const sortArrByTimeDate = () => {
    setTodoArr((prev) =>
      [...prev].sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`).getTime();
        const dateB = new Date(`${b.date}T${b.time}`).getTime();
        return dateA - dateB;
      })
    );
  };

  useEffect(() => {
    sortArrByTimeDate();
  }, [isModalVisible, reLoad]);

  // const handleErrorState = () => {};
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-red-200 ">
      <div
        className=" w-[90%] md:w-[600px] bg-white flex flex-col items-center gap-4
      p-6 rounded-lg"
      >
        <div className="flex flex-col items-center">
          <img src="" alt="" />
          <h1 className="text-[2rem] font-semibold tracking-1">
            {" "}
            Todo List App
          </h1>
          <p className="text-[0.925rem] text-center">
            create your task(s) and{" "}
            <span className="text-red-500">
              <Typewriter
                words={["get organized", "become smart"]}
                loop={true}
              />{" "}
            </span>
            daily
          </p>
        </div>
        <div className="p-2 bg-blue-100 rounded-md">
          <AddBtn handleAddTodo={showModal} />
        </div>
        {todoArr.length > 0 ? (
          todoArr.map((todo) => (
            <Todo
              title={todo.title}
              date={todo.date}
              time={todo.time}
              id={todo.id}
              todoArr={todoArr}
              setTodoArr={setTodoArr}
              key={todo.id}
              setIsEditModalOpen={setIsEditModalOpen}
              setEditId={setEditId}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setTodoArr={setTodoArr}
        todoArr={todoArr}
      />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        todoArr={todoArr}
        todoIdToEdit={editId}
        setTodoArr={setTodoArr}
        setReload={setReload}
      />
    </div>
  );
}

export default App;
