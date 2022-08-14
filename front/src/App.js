import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditComment from "./pages/EditComment/EditComment";
import ShowComment from "./pages/ShowComment/ShowComments";
import './App.css'

function App() {
  return (
    <div className="main-layout">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowComment />} />
          <Route path="/edit/:id" element={<EditComment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
