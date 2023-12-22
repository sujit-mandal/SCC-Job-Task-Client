import { Dialog, Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
const Addtask = ({ handleOpen, open, handleClose, refetch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const task = {
      title: data.title,
      description: data.description,
      date: data.date,
      priority: data.priority,
      status: "todo",
    };
    axios.post("http://localhost:5000/add-task", task).then((response) => {
      reset();
      refetch();
      handleClose();
    });
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
              Add Task
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Tackle your goals in daily doses...
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
                >
                  <option value="">Select a Level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="flex items-center justify-center mb-4">
                <button
                  className="bg-gradient-to-r from-cyan-700 to-cyan-400 text-white py-2 px-4 rounded hover:shadow-lg hover:shadow-cyan-800 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Task
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
};

export default Addtask;
