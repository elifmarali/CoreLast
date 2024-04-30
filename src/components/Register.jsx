import { useState,  useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AuthService from "../services/authServices";
import AuthContext from "../context/AuthContext";


function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    animationLetter();
  }, []);

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      const isSuccess = await AuthService.register(name, surname, email, password);
      console.log("Register success:", isSuccess);
      if (isSuccess) {
        toast.success("Kayıt Başarılı!");
        setTimeout(() => {
          navigate("/");
        }, 150);
      } else {
        toast.error("Kayıt Başarısız! Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Register error:", error);
      toast.error("Kayıt işlemi sırasında bir hata oluştu.");
    }
  };

  const animationLetter = () => {
    document.querySelectorAll("label").forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letters, i) =>
            `<span style="transition-delay:${i * 50}ms">${letters}</span>`
        )
        .join("");
    });
  };

  return (
    <main className="registerMain">
      <ToastContainer />
      <section className="registerSection">
        <div className="topSection">
          <span>Kayıt</span>Ol!
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name">İsim</label>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <label htmlFor="surname">Soyisim</label>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Şifre</label>
        </div>
        <div className="registerButtonContainer">
          <button onClick={handleRegisterClick} className="registerButton">
            Kayıt Ol
          </button>
        </div>
        <a className="navigateSection">Hesabınız Var Mı?&nbsp;<button onClick={()=>{navigate("/login")}}><u>Giriş Yap!</u></button></a>
      </section>
    </main>
  );
}

export default Register;