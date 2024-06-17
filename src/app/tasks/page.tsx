import { cookies } from 'next/headers';
import { TasksProxy } from '../proxies/tasks.proxies';
import Tasks from '../components/Tasks';

const getTasks = async () => {
  const tasksProxy = new TasksProxy();

  return await tasksProxy.getAll(1, 20);
};

const TasksPage = async () => {
  const { data } = await getTasks();

  return (
    <div>{
      data.map((task: any) => (
        <Tasks key={task.id} task={task} />
      ))
    }</div>
  );
};

export default TasksPage;