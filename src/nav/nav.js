function nav() {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="logo"></a>
        <div class="nav-burger">
          <ul>
            <li className="principal">
              <a href="#">nouveaux arrivages</a>
            </li>
            <li className="principal">
              <a href="#">prochain événement</a>
            </li>
            <li className="principal deroulant">
              <a href="#">salon</a>
              <ul className="sous">
                <li>
                  <a href="#">le menu1</a>
                </li>
                <li>
                  <a href="#">le menu2</a>
                </li>
                <li>
                  <a href="#">le menu3</a>
                </li>
              </ul>
            </li>
            <li className="principal">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default nav;
