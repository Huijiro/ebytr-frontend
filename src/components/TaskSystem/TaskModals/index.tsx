import { createContext, useMemo, useState } from 'react';
import TaskCreate from '../TaskCreate';
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
});

interface Props {
  children: React.ReactNode;
}

function TasksModalProvider({ children }: Props) {
  const [create, openCreate] = useState(false);
  const [edit, openEdit] = useState(false);
  const [deleteTask, openDelete] = useState(false);
  const [task, openTask] = useState(false);

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
          <TaskCreate />
        </Window>
      ) : null}
      {deleteTask ? (
        <Window title="Delete task." setOpen={openDelete}>
          <TaskCreate />
        </Window>
      ) : null}
      {task ? (
        <Window title="Task." setOpen={openTask}>
          <TaskCreate />
        </Window>
      ) : null}

      {children}
    </TasksModalContext.Provider>
  );
}

export { TasksModalContext, TasksModalProvider };
