import { BrowserRouter,Routes,Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import Score from "./pages/Score";



function App() {
    return(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:amount/:difficulty" element={<Questions />}/>
      <Route path="/scoree/:score" element={<Score />}/>
    </Routes>
  </BrowserRouter>)
}

export default App;
