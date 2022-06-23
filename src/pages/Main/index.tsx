import Header from '../../components/Header';
import TasksContainer from '../../components/TaskSystem/TasksContainer';
import Template from '../../components/Template';
import { ThemeProvider } from '../../utils/themeContext';

function Main() {
  return (
    <ThemeProvider>
      <Template>
        <Header />
        <TasksContainer />
      </Template>
    </ThemeProvider>
  );
}

export default Main;
