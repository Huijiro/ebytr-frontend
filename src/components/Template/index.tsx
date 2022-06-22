import CSS from './template.module.css';

interface Props {
  /**
   * Theme mode
   * @todo: add support for dark mode
   */
  mode?: 'light' | 'dark';
  /**
   * Contents of the page
   */
  children: React.ReactNode;
}

const defaultProps = {
  mode: 'light',
};

function Template({ mode, children }: Props) {
  return (
    <div className={mode === 'light' ? CSS.light : CSS.dark}>
      <div className={CSS.base}>{children}</div>
    </div>
  );
}

Template.defaultProps = defaultProps;

export default Template;
