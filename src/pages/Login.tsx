import styles from "./login.module.css"
 
const LoginPage = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <img className={styles.icon} src="/steadyIcon.svg" alt="Steady Icon"/>

                <h1 className={styles.title}>Sign in to Steady</h1>

                <div className={styles.emailBox}>
                    <input type="text" placeholder="Email" />
                    <button type="button">Send</button>
                </div>

                <div className={styles.passwordBox}>
                    <input type="text" placeholder="Password" />
                </div>

                <p className={styles.keepSigned}>Keep me signed in</p>
                <a href="">Forgot Password?</a>
                <a href="">Create Steady Account</a>
            </div>
        </div>
    )
}


export default LoginPage