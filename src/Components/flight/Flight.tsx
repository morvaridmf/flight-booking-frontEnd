import "./flight.scss"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { IFlight } from "../../types/types"
import FlightItem from "./flightItem";




function Flight() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [flightsData, setFlightsData] = useState<IFlight[]>([])

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/flight/search");
        const data = await res.json();
        // console.log("dataaa1", data);
        setFlightsData(data);


      } catch (err: any) {
        setError(err);

      }
      setLoading(false)
    }
    getData();

  }, [])


  return (

    <div className='flight'>
      {loading ? (<h1>Loading...</h1>) : (
        <div className="flight-body">
          <nav>
            <Link to="/" className="link" >
              <h3>Home</h3>
            </Link>
          </nav>
          {flightsData.length < 1 ? (<h2>Sorry!! could not find any flight with this information</h2>) : (flightsData.map((item, index) => (

            <div className="flight-main">
              <div className="flight-departure">
                <h3>Departure flight</h3>
                <section className="flight-info">
                  <div className="flight-info--text">
                    <h4><span>Departire from: </span>{item.depatureDestination}</h4>
                    <h4><span>Arrival to:  </span>{item.arrivalDestination}</h4>
                    <div className="flight-info--box">
                      {item.itineraries.map(i => (<FlightItem{...i} />))}

                    </div>
                  </div>

                </section>

              </div>
              <div className="flight-return">

              </div>
            </div>


          )))}
        </div>
      )}
    </div>


  )
}

export default Flight