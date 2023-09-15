import "./App.css";
import { Link } from "react-scroll";

function App() {
  const menuItems = [
    {
      id: 1,
      title: "home",
    },
    {
      id: 2,
      title: "portfolio",
    },
    {
      id: 3,
      title: "contact",
    },
    {
      id: 4,
      title: "about",
    },
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <h2>Shop</h2>

          <ul>
            {menuItems.map((menu) => (
              <li>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
          <div className="content">
            <h1 className="content-header" id='home'>home</h1>
          </div>
          <div className="content">
            <h1 className="content-header" id='portfolio'>portfolio</h1>
          </div>
          <div className="content">
            <h1 className="content-header" id='contact'>contact</h1>
          </div>
          <div className="content">
            <h1 className="content-header" id='about'>about</h1>
          </div>

      </main>
    </div>
  );
}

export default App;