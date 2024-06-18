import React, { useContext } from 'react';
import ApiContext from '../context/api.context';

const App: React.FC = () => {
  const { data, isLoading } = useContext(ApiContext);
  
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à Página Home</h1>
        <p>Esta é uma aplicação simples de React com Vite e TypeScript.</p>
        <div>
          <h2>Dados da API:</h2>
          <ul>
            {data && data.length > 0 ? (
              data.map((item: any, index: any) => (
                <li key={index}>{item.name}</li> // Ajuste conforme a estrutura dos seus dados
              ))
            ) : (
              <li>Nenhum dado disponível</li>
            )}
          </ul>
        </div>
      </header>
    </div>
  ); 
};

export default App;