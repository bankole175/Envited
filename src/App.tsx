import {Route, Routes} from "react-router-dom";
import './App.css'
import {Home} from "./pages/Home";
import {CreateEvent} from "./pages/CreateEvent";

function App() {
    document.body.style = 'background: linear-gradient(0deg, #F6F2FF, #F6F2FF), #FBFAFF'

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </div>
  )
}

export default App
