import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
  return (
    <div className="min-h-screen w-screen bg-[#1e1d1d]">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <h1 className="text-center text-3xl text-white montserrat">
                Under Construction
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
