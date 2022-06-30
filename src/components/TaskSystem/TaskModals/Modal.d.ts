export interface Modal {
  /* Is create window open? */
  create: boolean;

  /* Create window toggle */
  openCreate: (isOpen: boolean) => void;

  /* Is edit window open? */
  edit: AdvancedOptions;

  /* Edit window toggle */
  openEdit: (advancedOptions: AdvancedOptions) => void;

  /* Is delete window open? */
  deleteTask: boolean;

  /* Delete window toggle */
  openDelete: (isOpen: boolean) => void;

  /* Is task window open? */
  task: boolean;

  /* Task window toggle */
  openTask: (isOpen: boolean) => void;
}
