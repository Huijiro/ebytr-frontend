import { createContext, useMemo, useState } from 'react';

interface Modal {
  /* Is the window open? */
  isOpen: boolean;

  /* Open or close the window */
  setIsOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<Modal>({
  isOpen: false,
  setIsOpen: () => {},
});

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen],
  );

  return (
    <ModalContext.Provider value={value}>
      {isOpen ? children : null}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
