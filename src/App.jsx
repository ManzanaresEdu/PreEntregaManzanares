import Header from "./components/Header"
import Footer from "./components/Footer"

function App (){
    return (
<>

  <Header />
  
      <section className="products container">
<div className="row">
          <h3 className="section-title text-center">Productos Destacados</h3>
          <div className="product-grid">
              <div className="product">
                  <img src="https://www.brillante.es/wp-content/uploads/2016/11/ensalada-quinoa-integral-manzana__77A4129.jpg"
                      alt="Producto 1" />
                  <h2>Almuerzo vegano: Ensalada de quinoa</h2>
                  <p>$10.000</p>
                  <button>Añadir al carrito</button>
              </div>
              <div className="product">
                  <img src="https://www.brillante.es/wp-content/uploads/2020/03/Poke-vegano-con-shiitake-frito-con-togarashi-soja-pepino-nori-y-furikake.png"
                      alt="Producto 2" />
                  <h2>Pokes veganos</h2>
                  <p>$20.000</p>
                  <button>Añadir al carrito</button>
              </div>
              <div className="product">
                  <img src="https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/04/21/hamburguesa-falafel-veganos.jpeg"
                      alt="Producto 3" />
                  <h2>Hamburguesa vegana</h2>
                  <p>$15.000</p>
                  <button>Añadir al carrito</button>
              </div>
              
          </div>
          </div>
      </section>
   
<Footer />
  </>
    )
  }

  export default App ;