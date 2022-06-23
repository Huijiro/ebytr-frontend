import { createContext, useMemo, useState } from 'react';
import TaskCreate from '../TaskCreate';
import Window from './window';

interface Modal {
  /* Is create window open? */
  create: boolean;

  /* Create window toggle */
  openCreate: (isOpen: boolean) => void;
}

const TasksModalContext = createContext<Modal>({
  create: false,
  openCreate: () => {},
});

interface Props {
  children: React.ReactNode;
}

function TasksModalProvider({ children }: Props) {
  const [create, openCreate] = useState(false);

  const value = useMemo(
    () => ({
      create,
      openCreate,
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
      {children}
    </TasksModalContext.Provider>
  );
}

export { TasksModalContext, TasksModalProvider };
