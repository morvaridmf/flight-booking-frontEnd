import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./info.scss"
import { ICombinedInfo } from "../../types/types"


function Info() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [passengerData, setPassengerData] = useState<ICombinedInfo[]>([])
  const [arrivalImage, setArrivalImage] = useState("")


  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/passenger/search");
        const data = await res.json();
        // console.log("dataaa4", data[0].arrivalDestination);
        setPassengerData(data);

        fetch(`https://api.unsplash.com/search/photos/?client_id=7GVbwjCVwcBApOWfILqwgkXLkHGBFjZ2QeagBZKy03A&query=${data[0].arrivalDestination}`)
          .then(res => res.json())
          .then(data1 => {
            const newImage = data1.results[1].urls.full
            setArrivalImage(newImage)
          })

      } catch (err: any) {
        setError(err);

      }
      setLoading(false)

    }
    getData();

  }, [])


  return (
    <div className='info'>
      {loading ? (<h1>Loading...</h1>) : (
        <>
          <nav>
            <Link to="/" >
              <h3>Home</h3>
            </Link>
            <Link to="/flight" >
              <h3>Flight info</h3>
            </Link>
            <Link to="/passenger" >
              <h3>Passenger info</h3>
            </Link>
          </nav>
          <div>


            {passengerData.length > 0 && passengerData.map(p => (
              <div className='info-container'>
                <div className='info-image'>
                  <img src={arrivalImage} />
                </div>
                <div className='info-text'>
                  <h2> {p.depatureDestination} To  {p.arrivalDestination}</h2>
                  <h4>Departure at: {p.depatureAt}  - Arrive at: {p.arriveAt}</h4>
                  <h4> {p.title}. {p.firstName} {p.lastName}</h4>
                  <p>Email: {p.email}</p>
                  <p>Phone: {p.phoneNumber}</p>
                  <p>Date of birth: {p.birthDate}</p>
                </div>


              </div>
            ))
            }
          </div>
        </>
      )}

    </div>
  )
}

export default Info