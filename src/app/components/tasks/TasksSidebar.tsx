import { TaskDto, TasksProxy } from '../../proxies/tasks.proxies';

const getTasks = async () => {
  const tasksProxy = new TasksProxy();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await tasksProxy.getAll();

  return res;
};

const TasksSidebar = async () => {
  const response = await getTasks();

  return (
    <aside className='border-r h-full flex flex-col pr-4 max-w-[250px]'>
      <ul className='flex flex-col gap-4 flex-1'>
        {response.data && response.data.map((task: TaskDto) => (
          <li className='shadow-lg border border-gray-400 rounded-md p-4 overflow-hidden text-ellipsis break-words text-nowrap' key={task.id}>
            #{task.id}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TasksSidebar;