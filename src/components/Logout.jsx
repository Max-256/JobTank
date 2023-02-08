
import { logout } from "../services/authService";

function Logout(props){
    logout();
    window.location = "/sign-in"
}

export default Logout;