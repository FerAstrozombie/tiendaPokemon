import "./styles.css"

const Inicio = () => {
    return (
    <div>
        <h1>Birenvenido a tu tienda de guitarras</h1>
        <h3>Te contamos un poco sobre nosotros</h3>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    Una Poké Ball (Pokébola en Hispanoamérica por el anime, モンスターボール Monstruo Ball en japonés), también conocida abreviadamente como ball, es un artilugio u objeto diseñado para servir dos funciones básicas en el mundo Pokémon, almacenar y transportar Pokémon, haciendo posible la captura de Pokémon.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagenInicio" src="../imagenes/pokeball.svg" alt="Pokeball" />
                </div>
        </div>
        <div className="textoReducido">              
                <div data-aos="fade-right">
                    <img className="imagenInicio" src="../imagenes/superpotion.svg" alt="Superpocion" />
                </div>
                <div className="flexizado" data-aos="fade-left">
                    <p className="textoInicioDos">
                    La superpoción (Super Potion en inglés, いいキズぐすり Buena medicina para las heridas en japonés) es un objeto curativo introducido en la primera generación que se trata de un tipo de poción más efectivo que el anterior, la poción común. 
                    </p>
                </div>
        </div>
        <div className="textoReducido">              
                <div className="flexizado" data-aos="fade-right">
                    <p className="textoInicioUno">
                    Una medalla (Badge en inglés, バッジ Medalla en japonés) es una insignia que se entrega a los entrenadores Pokémon para demostrar que han logrado vencer a un líder de gimnasio. Cada gimnasio tiene su propia medalla, y generalmente es el propio líder quien hace la entrega después del combate.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img className="imagenInicio" src="../imagenes/volcanobadge.svg" alt="Medalla" />
                </div>
        </div>
    </div>
    )
}

export default Inicio