// App.js
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Certificate from "./components/Certificate";
import Hakkimizda from "./components/Hakkimizda";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ExamsPage from "./components/ExamsPage";
import Question from "./components/Question";
import QuestionInfo from "./components/QuestionInfo";
import { useContext, useEffect } from "react";
import Result from "./components/Result";
import Communicate from "./components/Comunicate";
import Profile from "./components/Profile";
import FAQ from "./components/FAQ";
import Lessons from "./components/Lessons";
import LessonContent from "./components/LessonContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/comunicate" element={<Communicate />} />
        <Route path="/examsPage" element={<ExamsPage />} />
        <Route path="/faq" element = {<FAQ/>}/>
        <Route path="/about" element={<Hakkimizda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question/:examID/:questionID" element={<Question />} />
        <Route path="/questionInfo" element={<QuestionInfo />} />
        <Route path="/result/:userID/:examName" element={<Result/>}></Route>
        <Route path="/user/:userID" element={<Profile/>}></Route>
        <Route path="/lessons" element={<Lessons/>}></Route>
        <Route path="/lessonContent/:educationId" element={<LessonContent/>}></Route>
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;