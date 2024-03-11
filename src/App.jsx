import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Loadable from "react-loadable";
import { Suspense } from "react";

const Home = Loadable(() => 
  import('./Home')
)
const About = Loadable(() => 
  import('./About')
)
const Login = Loadable(() => 
  import('./Login')
)
const Signup = Loadable(() => 
  import('./Signup')
)

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
