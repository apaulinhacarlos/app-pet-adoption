import React, { useContext } from 'react';
import ApiContext from '../context/api.context';
import Animals from '../components/AnimalList';
import { Spinner } from 'react-bootstrap';

const HomePage: React.FC = () => {
  const { isLoading } = useContext(ApiContext);
  
  if (isLoading) {
    return <div 
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Spinner animation="border" role="status" >
        <span className="visually-hidden">
          Carregando...
        </span>
      </Spinner>
    </div>;
  }

  return (
    <>
      <div className="container">
        <header>
          <h1 className="text-center"><strong>Adote Aqui</strong></h1>
          <div>
            <h5 className="text-center my-5">Adote um animalzinho e faça ele feliz!</h5>
          </div>
        </header>
        <Animals />
      </div>
    </>
  ); 
};

export default HomePage;