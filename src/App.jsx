import logo from './logo.svg';
import './App.css';
import logo1 from './media/logo.png'
import producto1 from './media/producto1.png'
import producto2 from './media/producto2.png'
import producto3 from './media/producto3.png'

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo1} alt='imagen' className="logo"/>
            </li>
            <li>
                <button className="boton">Productos</button>
            </li>
            <li>
                <button className="boton">Carrito</button>
                <span>Antojate de lo natural</span>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h3>Destacados</h3>
              <ul className="contenedor-imagen">
                <li>
                    <img src={producto1} alt="Producto1" />
                </li>
                <li>
                    <img src={producto2} alt="Producto2" />
                </li>
                <li>
                    <img src={producto3} alt="Producto3" />
                </li>
              </ul>
        </section>
        <section>
            <h3>Nuestros clientes</h3>
        </section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
