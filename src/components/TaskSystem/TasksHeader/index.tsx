import Button from '../../Button';
import Text from '../../Text';

function TasksHeader() {
  return (
    <div>
      <Text type="h3">Tasks</Text>
      <Button onClick={() => {}} color="primary">
        Add Task
      </Button>
    </div>
  );
}

export default TasksHeader;
