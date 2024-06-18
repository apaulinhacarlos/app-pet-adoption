import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home.page';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" Component={ Home } />
      <Route path="/" element={ <Home /> } />

    </Routes>
  );
}

export default PageRoutes;