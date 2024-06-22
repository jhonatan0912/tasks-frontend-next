
const skeleton = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];

const TasksSidebarLoader = () => {

  return (
    <section className='flex flex-col gap-4 pr-4'>
      {
        skeleton.map((_, i) => (
          <article key={i} className='animate-pulse bg-gray-100 h-10 w-full mb-4 rounded-lg'></article>
        ))
      }
    </section>
  );
};

export default TasksSidebarLoader;