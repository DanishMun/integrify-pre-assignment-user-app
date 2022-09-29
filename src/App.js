import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/home/home.component";
import UserInfo from "./routes/user-info/user-info.component";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
