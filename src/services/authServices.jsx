import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "https://localhost:44309/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        Email: email,
        Password: password,
      })
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.getCurrentUserEnteredExams();
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, surname, email, password) {
    return axios
      .post(API_URL + "register", {
        FirstName: name,
        LastName: surname,
        Email: email,
        Password: password,
      })
      .then((response) => {
        console.log("Başarılı:", response.data);
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }

  getUsernameFromToken() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.data && user.data.token) {
      const token = user.data.token;
      const decodedToken = jwtDecode(token);

      const username =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ];
      return username || null;
    }
    return null;
  }
  getCurrentUserIdFromToken() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.data && user.data.token) {
      const token = user.data.token;
      const decodedToken = jwtDecode(token);

      const userId =
        decodedToken[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];

      return userId || null;
    }
    return null;
  }

  getCurrentUserEnteredExams() {
    if(this.getCurrentUserIdFromToken()!==null){
      const getUserPointData = async () => {
        const response = await axios.get(
          `https://localhost:44309/api/Users/getbyid?id=${this.getCurrentUserIdFromToken()}`
        );
        return response.data.data.points;
      };
     return  getUserPointData()
    }
    }
}

export default new AuthService();