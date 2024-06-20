import { Suspense } from 'react';
import Header from '../components/header/Header';
import Task from '../components/tasks/Task';
import TasksSidebar from '../components/tasks/TasksSidebar';
import TasksSidebarLoader from '../components/tasks/TasksSidebarLoader';
import { getTasks } from './tasks';


const TasksPage = async () => {
  const res = await getTasks(1, 30);

  return (
    <main className=''>
      <Header />

      <section className='flex gap-4 max-w-[1200px] mx-auto mt-4'>
        <section className='min-w-[200px]'>
          <Suspense fallback={<TasksSidebarLoader />}>
            <TasksSidebar />
          </Suspense>
        </section>
        <section className='grid grid-cols-3 gap-4'>
          {
            res.data && res.data.map((task: any) => (
              <Task key={task.id} task={task} />
            ))
          }
        </section>
      </section>
    </main>
  );
};

export default TasksPage;