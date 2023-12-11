import './menu.css'
function Menu({menuOpen}) {
    const linkNames = [
        'Home',
        'About Us',
        'Services',
        'Contact',
    ]
    return (
        <ul className={`menu ${menuOpen && 'menu-open'}`}>
        {linkNames.map((link, i) => (
            <li key={i}>
                <a href="#">{link}</a>
                </li>
        ))}
        </ul>
    )

}
export default Menu