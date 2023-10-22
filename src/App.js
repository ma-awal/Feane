import './App.css';
import { Routes, Route } from 'react-router-dom';
import UseLoading from './commponents/UseLoading/UseLoading';
import Layout from './layout/Layout';
import Loader from './commponents/Loader/Loader';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import About from './pages/About/About';

import BookTable from './pages/BookTable/BookTable';
import Menu from './pages/Menu/Menu';

import Signin from './commponents/Signin/Signin';
const App = () => {
  const isLoading = UseLoading();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/table" element={<BookTable />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};
export default App;
