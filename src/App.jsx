import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";

export default function App() {
  return (
    <div className="App bg-black h-full text-white min-h-screen ">
      {/* <Route path="/" element={<Header />} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
      </Routes>
      {/* <Cards /> */}
    </div>
  );
}
