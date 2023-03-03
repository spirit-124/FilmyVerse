import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import Details from "./components/Details";
import { createContext, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const Appstate = createContext();

export default function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App bg-black h-full text-white min-h-screen ">
        {/* <Route path="/" element={<Header />} /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Cards /> */}
      </div>
    </Appstate.Provider>
  );
}

export { Appstate };
