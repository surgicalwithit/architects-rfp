import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>ArchiTECHs</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/">Archimatch</Link>
                </li>
                <li>
                    <Link to="/invite">Invite</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;