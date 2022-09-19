import imagen from "../img/intercambiar.png";
import Input from "./Input";
import Notfound from "./Waves";
import Waves from "./Waves";

const Card = ({
  weather,
  change,
  changeTemp,
  location,
  setLocation,
  searchLocation,
  notFound,
}) => {
  return (
    <>
      <div className="container">
        {/* UNICACION NO ENCONTRADA */}
        <div>{notFound ? null : <Notfound />}</div>
        <div>
          <Input
            location={location}
            setLocation={setLocation}
            searchLocation={searchLocation}
          />
        </div>

        <div className="box1">
          {/* NOMBRE DE LA CIUDAD Y EL CODIGO DE PAIS  */}
          <h1 className="city">
            {weather?.name} {weather?.sys.country}
          </h1>
        </div>
        {/* NUMERO DE TEMPERATURA */}
        <div className="box__temp">
          <p>
            {changeTemp
              ? (weather?.main.temp - 273.15).toFixed(1) + " °C"
              : (1.8 * (weather?.main.temp - 273) + 32).toFixed(1) + " °F"}
          </p>
        </div>
        <div className="box2__description">
            <h2>{weather?.weather[0].description}</h2>
        </div>
        <div className="box2">
          
          <div className="box2__statitics">
            <div>
              <p>{weather?.clouds.all}%</p>
              <p>Clouds </p>
            </div>
            <div>
              <p>{weather?.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div>
              <p>{weather?.wind.speed} m/s</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`container2`}>
        <div className="box3">
          <Waves />
        </div>
        {/* BOTON QUE CAMBIA LA TEMPERATURA  */}
        <button onClick={change}>
          <img src={imagen} />
          {changeTemp ? "F" : "C"}
        </button>
      </div>
    </>
  );
};

export default Card;