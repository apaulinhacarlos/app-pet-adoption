import React, { useContext } from 'react';
import ApiContext from '../context/api.context';
import Animals from '../components/AnimalList';

const App: React.FC = () => {
  const { isLoading } = useContext(ApiContext);
  
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Adote Aqui</h1>
          <div>
            <p>Adote um animalzinho e faça ele feliz!</p>
          </div>
        </header>
        <Animals />
      </div>
    </>
  ); 
};

export default App;