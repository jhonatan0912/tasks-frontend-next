import Tasks from '../components/Tasks';
import { getTasks } from './tasks';

const TasksPage = async () => {
  const res = await getTasks(1, 30);

  return (
    <section className='grid grid-cols-5 gap-4 p-4 max-w-[1200px] mx-auto'>{
      res.data.map((task: any) => (
        <Tasks key={task.id} task={task} />
      ))
    }</section>
  );
};

export default TasksPage;