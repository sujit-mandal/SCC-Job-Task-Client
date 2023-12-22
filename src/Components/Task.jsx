import { TbBulb } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { LiaEdit } from "react-icons/lia";
import { useEffect, useState } from "react";
import Addtask from "./Addtask";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useDrag, useDrop } from "react-dnd";
const Task = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);
  const { data: tasks, refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/tasks");
      return res.data;
    },
    staleTime: 5000,
  });

  useEffect(() => {
    const fTodos = tasks?.filter((task) => task.status === "todo");
    const fInProgress = tasks?.filter((task) => task.status === "inprogress");
    const fClosed = tasks?.filter((task) => task.status === "closed");
    setTodos(fTodos);
    setInProgress(fInProgress);
    setClosed(fClosed);
  }, [tasks]);
  const statuses = ["todo", "inprogress", "closed"];
  return (
    <div className="lg:ml-[25%] xl:ml-[20%] 2xl:ml-[15%] pl-5 lg:pl-0 h-screen grid grid-cols-4">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          todos={todos}
          inProgress={inProgress}
          closed={closed}
        ></Section>
      ))}
      <div className="flex justify-center mt-[40%]">
        <div className="">
          <button
            className="flex flex-col justify-center items-center gap-5 px-3 py-5 border-2 border-dashed border-[#2ED7D8] rounded-lg"
            onClick={handleOpen}
          >
            <FiPlusCircle className="text-4xl"></FiPlusCircle>
            <h3 className="text-3xl">Create Task</h3>
          </button>
        </div>
      </div>
      <Addtask
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        refetch={refetch}
      ></Addtask>
    </div>
  );
};

export default Task;

const Section = ({ status, todos, inProgress, closed }) => {
  const queryClient = useQueryClient();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Open";
  let bg = "bg-gradient-to-r from-[#289393] to-[#2ED7D8]";
  let tasksToMap = todos;
  let icon = "TbBulb";

  if (status === "inprogress") {
    text = "In Progress";
    bg = "bg-gradient-to-r from-[#276d90] to-[#00AAFF]";
    tasksToMap = inProgress;
    icon = "GiProgression";
  }
  if (status === "closed") {
    text = "Complete";
    bg = "bg-gradient-to-r from-[#7a46e1] to-[#A179F2]";
    tasksToMap = closed;
    icon = "IoCheckmarkDoneCircleOutline";
  }
  const addItemToSection = (id) => {
    axios
      .patch(`http://localhost:5000/update-task/${id}`, { status })
      .then((res) => {
        queryClient.invalidateQueries("task");
      });
  };
  return (
    <div
      ref={drop}
      className={`w-full ${isOver ? "bg-blue-gray-100" : ""} space-y-5`}
    >
      <Header
        text={text}
        bg={bg}
        icon={icon}
        count={tasksToMap?.length}
      ></Header>
      {tasksToMap?.length > 0 &&
        tasksToMap?.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
    </div>
  );
};
const Header = ({ text, bg, count, icon }) => {
  const getIconComponent = (icon) => {
    switch (icon) {
      case "TbBulb":
        return TbBulb;
      case "GiProgression":
        return GiProgression;
      case "IoCheckmarkDoneCircleOutline":
        return IoCheckmarkDoneCircleOutline;
      default:
        return null;
    }
  };
  const IconComponent = getIconComponent(icon);

  return (
    <div
      className={`${bg} flex items-center justify-between h-12 pl-4 Capitalize text-lg font-semibold text-white mb-5`}
    >
      <div className="flex items-center gap-5">
        <IconComponent className="text-3xl"></IconComponent>
        {text}
      </div>
      <div className="mr-5 bg-white w-6 h-6 text-lg text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};
const TaskCard = ({ task, tasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`py-2 px-3 shadow-lg rounded-lg mr-5 bg-gray-200 flex items-center justify-between cursor-grab ${
        isDragging ? "opacity-25" : "opacity-100"
      }`}
    >
      <p className="text-3xl ">{task.title}</p>

      <div className="flex items-center gap-3 text-2xl">
        <LiaEdit></LiaEdit>
        <IoIosRemoveCircleOutline></IoIosRemoveCircleOutline>
      </div>
    </div>
  );
};
