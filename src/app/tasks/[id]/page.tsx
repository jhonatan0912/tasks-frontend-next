import React from 'react';

const TaskPage = ({ params }: any) => {
  const { id } = params;

  return (
    <div>TaskPage {id}</div>
  );
};

export default TaskPage;