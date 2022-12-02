import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ISearch } from "../../types/types"




function FlightItem(i: ISearch) {

  const { depatureAt, arriveAt, avaliableSeats, prices, id } = i
  const [show, setShow] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState<ISearch[]>([])

  const navigate = useNavigate();


  const handleClick1 = (id: number) => {
    if (i.id === id) {
      const newDetails: any = { depatureAt, arriveAt, avaliableSeats, prices }
      // console.log("qqq", newDetails)
      setSelectedFlight(newDetails)
    }

  }



  const handleClick = () => {
    setShow(!show)
  }

  const handleSubmit = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedFlight)
    }

    fetch("http://localhost:5000/flights", requestOptions)
      .then(res => res.json())
      .then(data => console.log("data3", data))


    navigate("/passenger ")

  }


  return (
    <div className='flighItem'>
      <div>
        <p><span>departure time: </span>{depatureAt}</p>
        <p><span>arrival time: </span>{arriveAt}</p>
        {
          prices.map(item => (
            <div key={id}>
              <p><span>price: </span>{item.adult} {item.currency}</p>
              <div className='moreInfo'>
                <p><span>avaliable Seats: </span>{avaliableSeats}</p>
                <p><span>price for children: </span>{item.child}  {item.currency}</p>
              </div>
            </div>

          ))
        }
      </div>

      <div className="flight-info-more">
        <input type="radio" name="select" value="HTML" onClick={() => handleClick1(id)} />
        <label>Select</label>

        <button className='btn-select' type='submit' onClick={handleSubmit}>Continue</button>
        <button className='btn-detail' onClick={handleClick}>View details</button>
      </div>

    </div>
  )
}

export default FlightItem


