import { createContext, useMemo, useState } from 'react';
import Status from '../../../interfaces/status.interface';
import Task from '../../../interfaces/task.interface';
import TaskCreate from '../TaskCreate';
import TaskDelete from '../TaskDelete';
import TaskDetails from '../TaskDetails';
import TaskEdit from '../TaskEdit';
import Window from './window';

interface Modal {
  /* Is create window open? */
  create: boolean;

  /* Create window toggle */
  openCreate: (isOpen: boolean) => void;

  /* Is edit window open? */
  edit: boolean;

  /* Edit window toggle */
  openEdit: (isOpen: boolean) => void;

  /* Is delete window open? */
  deleteTask: boolean;

  /* Delete window toggle */
  openDelete: (isOpen: boolean) => void;

  /* Is task window open? */
  task: boolean;

  /* Task window toggle */
  openTask: (isOpen: boolean) => void;

  /* Task id */
  currentTask: Task;

  /* Set task id */

  setCurrentTask: (task: Task) => void;
}

const TasksModalContext = createContext<Modal>({
  create: false,
  openCreate: () => {},
  edit: false,
  openEdit: () => {},
  deleteTask: false,
  openDelete: () => {},
  task: false,
  openTask: () => {},
  currentTask: {
    id: 0,
    title: '',
    description: '',
    status: { id: 0, name: Status.TODO },
  },
  setCurrentTask: () => {},
});

interface Props {
  children: React.ReactNode;
}

function TasksModalProvider({ children }: Props) {
  const [create, openCreate] = useState(false);
  const [edit, openEdit] = useState(false);
  const [deleteTask, openDelete] = useState(false);
  const [task, openTask] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: 0,
    title: '',
    description: '',
    status: { id: 0, name: Status.TODO },
  });

  const value = useMemo(
    () => ({
      create,
      openCreate,
      edit,
      openEdit,
      deleteTask,
      openDelete,
      task,
      openTask,
      currentTask,
      setCurrentTask,
    }),
    [create],
  );

  return (
    <TasksModalContext.Provider value={value}>
      {create ? (
        <Window title="Create new task." setOpen={openCreate}>
          <TaskCreate />
        </Window>
      ) : null}
      {edit ? (
        <Window title="Edit task." setOpen={openEdit}>
          <TaskEdit task={currentTask} />
        </Window>
      ) : null}
      {deleteTask ? (
        <Window title="Delete task." setOpen={openDelete}>
          <TaskDelete task={currentTask} />
        </Window>
      ) : null}
      {task ? (
        <Window title="Task details." setOpen={openTask}>
          <TaskDetails task={currentTask} />
        </Window>
      ) : null}

      {children}
    </TasksModalContext.Provider>
  );
}

export { TasksModalContext, TasksModalProvider };
