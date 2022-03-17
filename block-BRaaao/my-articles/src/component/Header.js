
function Header() {
  return (
    <>
      <header className="flex space-btw">
        <a className="logo" href="#">Logo</a>
        <ul className="nav flex">
          <li> <a href="#">Home</a></li>
          <li> <a href="#">About</a></li>
          <li> <a href="#">Contact</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header