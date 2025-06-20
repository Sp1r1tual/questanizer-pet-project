import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

import authLoginImg from "../../assets/user-authentication-svgrepo-login.png";
import authLoggedInImg from "../../assets/user-authentication-svgrepo-logged-in.png";

import styles from "./NavbarAuthBtn.module.css";

const NavbarAuthBtn = () => {
    const navigate = useNavigate();
    const { isAuthenticated, signOut } = useAuth();

    const handleAuthBtn = () => {
        if (isAuthenticated) {
            signOut();
        } else {
            navigate("/authentication");
        }
    };

    return (
        <button className={styles.authBtn} onClick={handleAuthBtn}>
            <span className={styles.icon}>
                <img
                    className={styles.loginImg}
                    src={isAuthenticated ? authLoggedInImg : authLoginImg}
                    alt="auth-img"
                />
            </span>
            <span className={styles.loginText}>
                {isAuthenticated ? "Logout" : "Login"}
            </span>
        </button>
    );
};

export default NavbarAuthBtn;
