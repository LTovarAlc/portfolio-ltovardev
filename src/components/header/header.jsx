/* Header del portfolio */

import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <ul className='header-list'>
                <a href="#projects"><li className="menu-list__item-link">Projects</li></a>
                <a href=""><li className="menu-list__item-link">Skills</li></a>
                <a href=""><li className="menu-list__item-link">About Me</li></a>
                <a href=""><li className="menu-list__item-link">Contact</li></a>
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </ul>
        </header>
    )
}

export default Header