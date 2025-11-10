
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {


  return (
   <>
  <div className="App text-3xl font-bold text-blue-500 bg-black w-screen min-h-screen   text-center">
 <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
</div>


   </>
  )
}

export default App
