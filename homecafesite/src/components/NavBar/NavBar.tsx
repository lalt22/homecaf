
import styles from "./NavBar.module.scss"

const NavBar = () => {
    return (
        <div className={styles.nav_section}>
            <nav className={styles.nav_bar}>
                <h1 className="home-caf">HOMECAF</h1>
                <div className={styles.nav_right}>
                    <img src="./src/user.png"></img>
                </div>
            </nav>
        </div>

    )
}

export default NavBar