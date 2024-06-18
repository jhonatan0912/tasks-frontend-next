import { Suspense } from 'react';
import Task from '../components/Task';
import TasksSidebar from '../components/TasksSidebar';
import { getTasks } from './tasks';


const TasksPage = async () => {
  const res = await getTasks(1, 30);

  return (
    <section className='flex gap-5'>
      <section className='min-w-[200px]'>
        <Suspense>
          <TasksSidebar />
        </Suspense>
      </section>
      {
        res.data.map((task: any) => (
          <Task key={task.id} task={task} />
        ))
      }
    </section>
  );
};

export default TasksPage;