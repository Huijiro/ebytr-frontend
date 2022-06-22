import Header from '../../components/Header';
import Template from '../../components/Template';
import Text from '../../components/Text';
import { ThemeProvider } from '../../utils/themeContext';

function Main() {
  return (
    <ThemeProvider>
      <Template>
        <Header />
        <Text type="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi optio
          obcaecati facilis nam eum magni temporibus, minus quos illo. Magni
          nesciunt facilis ipsum cumque maxime esse sequi, repellendus
          accusantium rerum? Error voluptatum nemo vel autem voluptatem,
          eligendi necessitatibus perspiciatis veniam eveniet, repellendus
          commodi, nesciunt explicabo? Rerum voluptatum, voluptatibus est
          mollitia dolore expedita blanditiis, ad inventore facere provident,
          architecto illo quam! Nam, ut officiis voluptates reprehenderit
          provident molestias a eligendi. Iusto animi officiis consequuntur
          delectus distinctio adipisci deleniti molestias, reiciendis accusamus
          dignissimos consequatur excepturi ullam necessitatibus laudantium,
          ratione provident corporis aliquid. Illo, optio? Dolor quos reiciendis
          eius, eaque nostrum ullam consequatur nobis illo reprehenderit, enim
          ipsa illum! Repellat totam laboriosam officia ut optio excepturi,
          quia, sit modi, labore vero unde illo.
        </Text>
      </Template>
    </ThemeProvider>
  );
}

export default Main;
