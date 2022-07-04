import { useEffect, useState } from 'react';
import TaskI from '../../../interfaces/task.interface';
import Text from '../../Text';
import Task from '../Task';
import RandomTasks from './mock';
import CSS from './tasksList.module.css';

function TasksList() {
  const [tasks, setTasks] = useState<TaskI[]>(RandomTasks);

  const FetchTasks = async () => {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    FetchTasks();
  }, []);

  return (
    <div className={CSS.container}>
      {tasks.length === 0 ? (
        <Text type="h3">No tasks, feel free to add one.</Text>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
}

export default TasksList;
