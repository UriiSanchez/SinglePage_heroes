import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({history}) => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {
        history.replace(lastPath);
        dispatch({type: types.login, payload: {name: 'Uriel Antonio'}});
    }
    
    return ( <div className="container mt-5">
        <h1>LoginScreen</h1>
        <hr/>
        <button className="btn btn-block btn-primary"
            onClick={handleLogin}>
            Login
        </button>
    </div> );
}
 
export default LoginScreen;