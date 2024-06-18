// import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import ApiProvider from './context/api.provider';

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes/>
      </ApiProvider>
    </BrowserRouter>
  );

  
}

export default App
