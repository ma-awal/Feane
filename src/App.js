import './App.css';
import { Routes, Route } from 'react-router-dom';
import UseLoading from './commponents/UseLoading/UseLoading';
import Layout from './layout/Layout';
import Loader from './commponents/Loader/Loader';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Example from './pages/Analysis/Example';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Shop from './pages/Shop/Shop';
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="/*" element={<Error />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  );
};
export default App;
