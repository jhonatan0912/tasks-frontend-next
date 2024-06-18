import { TaskDto, TasksProxy } from '../proxies/tasks.proxies';

const getTasks = async () => {
  const tasksProxy = new TasksProxy();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const res = await tasksProxy.getAll();

  return res;
};

const TasksSidebar = async () => {
  const response = await getTasks();

  return (
    <aside className='p-4 border-r h-full flex flex-col'>
      <h2 className='text-xl mb-4 font-bold'>Tasks</h2>
      <ul className='flex flex-col gap-4 flex-1'>
        {response.data.map((task: TaskDto) => (
          <li className='shadow-lg border border-gray-400 rounded-md p-4' key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TasksSidebar;