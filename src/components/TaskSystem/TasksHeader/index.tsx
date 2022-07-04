import { useContext } from 'react';
import Button from '../../Button';
import Text from '../../Text';
import { TasksModalContext } from '../TaskModals';
import CSS from './tasksHeader.module.css';

function TasksHeader() {
  const { openCreate } = useContext(TasksModalContext);
  return (
    <div className={CSS.header}>
      <Text type="h2">Tasks</Text>
      <div className={CSS.buttons}>
        <Button
          color="primary"
          onClick={() => {
            openCreate(true);
          }}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
}

export default TasksHeader;
