import './App.css';
import { Routes, Route } from 'solid-app-router';

import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/User/User';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Users />}></Route>
        <Route path="/:id" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
