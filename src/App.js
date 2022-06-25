import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import CreateMap from "./pages/create";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="admin" element={<Layout />}>
        <Route path="board" element={<Admin />} />
        <Route path="map" element={<CreateMap />} />
      </Route>
      <Route path="log/in" element={<Login />} />
    </Routes>
  );
}

export default App;
