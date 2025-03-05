import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/chi-siamo'}>Chi siamo</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/lista-dei-post'}>Lista post</NavLink>
                        </li>
                    </ul>
                </nav>

            </header>

        </>
    )
};

export default Header;