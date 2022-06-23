import Status from '../../../interfaces/status.interface';
import Task from '../../../interfaces/task.interface';
import CSS from './status.module.css';

interface Props {
  /** Task status */
  status: Task['status'];
}

function TaskStatus({ status }: Props) {
  switch (status.name) {
    case Status.DONE:
      return (
        <div className={CSS.status} data-status="done">
          &nbsp;
        </div>
      );
    case Status.ONGOING:
      return (
        <div className={CSS.status} data-status="ongoing">
          &nbsp;
        </div>
      );
    case Status.TODO:
      return (
        <div className={CSS.status} data-status="todo">
          &nbsp;
        </div>
      );
    default:
      return <div className={CSS.status}> &nbsp;</div>;
  }
}

export default TaskStatus;
