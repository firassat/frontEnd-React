import "./App.css";
import { Container } from "./component/index";
import { Header, Footer } from "./sections/index";
import Home from "./Pages/Home";
import Browse from "./Pages/Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
