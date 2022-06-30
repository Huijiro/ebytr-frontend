import CSS from './details.module.css';

function TaskStatus({ statusId }: { statusId: number }) {
  switch (statusId) {
    case 1:
      return <div className={CSS.toDo}>To do</div>;

    case 2:
      return <div className={CSS.onGoing}>In progress</div>;

    case 3:
      return <div className={CSS.done}>Done</div>;

    default:
      return <div className={CSS.error}>???</div>;
  }
}

export default TaskStatus;
