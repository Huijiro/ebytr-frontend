import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import TasksHeader from '../TasksHeader';
import TasksList from '../TasksList';
import CSS from './tasksContainer.module.css';

function TasksContainer() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={CSS.container} data-mode={mode}>
      <TasksHeader />
      <TasksList />
    </div>
  );
}

export default TasksContainer;
