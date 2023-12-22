import { Dialog, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
const Updatetask = ({ task, handleOpen, open, handleClose, refetch }) => {
  console.log(task);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const updatedTask = {
      title: data.title,
      description: data.description,
      date: data.date,
      priority: data.priority,
    };
    axios
      .patch(`http://localhost:5000/update-task/${task._id}`, {
        updatedTask,
      })
      .then((res) => {
        handleClose();
      });
  };
  const handleCloseButton = () => {
    handleClose();
  };
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full ">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Update Task
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Update your task without hassle..
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Title
                </label>
                <input
                  className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  {...register("title", { required: true, maxLength: 80 })}
                  placeholder="Enter task title"
                  defaultValue={task.title}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your text here..."
                  rows="4"
                  defaultValue={task.description}
                  {...register("description", {
                    required: true,
                    maxLength: 250,
                  })}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Date
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  defaultValue={task.date}
                  {...register("date", { required: true })}
                  placeholder="Select a date"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Priority
                </label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  {...register("priority", { required: true })}
                  defaultValue={task.priority}
                >
                  <option value="">Select a Level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="flex items-center justify-evenly mb-4">
                <button
                  className="bg-gradient-to-r from-cyan-700 to-cyan-400 text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-cyan-800 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Task
                </button>
                <button
                  className=" text-black border border-black py-2 px-4 rounded "
                  type="button"
                  onClick={handleCloseButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
};

export default Updatetask;
