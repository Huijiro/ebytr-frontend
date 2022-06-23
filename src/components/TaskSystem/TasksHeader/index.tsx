import Button from '../../Button';
import Text from '../../Text';
import CSS from './tasksHeader.module.css';

function TasksHeader() {
  return (
    <div className={CSS.header}>
      <Text type="h2">Tasks</Text>
      <Button color="primary">Add Task</Button>
    </div>
  );
}

export default TasksHeader;
