
import "./App.css"

import Description from "./components/Description";
import Title from "./components/Title";
import Content from "./components/Content";

const App = () => {

  return (
    <>
      <div>
        <h1>Lorem</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione maxime enim omnis repudiandae vel fugit, illum voluptates quos consequatur est obcaecati autem. Placeat illum repellat aspernatur deserunt, ea accusamus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eligendi tempora reprehenderit quaerat officia. Recusandae.
        </p>
      </div>
      <div>
        <Title name="Ispum" />
        <Description text="voluptates quos consequatur est obcaecati autem. Placeat illum repellat aspernatur deserunt, ea accusamus?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eligendi tempora reprehenderit quaerat officia. Recusandae " />
      </div>
      <Content name="coucou" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur eligendi tempora reprehen" />
    </>
  );
};

export default App
