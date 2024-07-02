import { Route, Routes } from 'react-router-dom';

import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';

function PageRoutes() {
  return (
    <Routes>
      {/* <Route path="/" Component={ Home } /> */}
      {/* <Route path="/login" Component={ Login } /> */}

      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={<Login />} />


    </Routes>
  );
}

export default PageRoutes;