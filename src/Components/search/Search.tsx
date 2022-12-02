import React, { useState } from 'react'
import "./search.scss"
import { INewFlight } from "../../types/types"
import { useNavigate } from "react-router-dom";



function Search() {

  const navigate = useNavigate();
  const [addFlight, setAddFlight] = useState<INewFlight>({} as INewFlight)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddFlight({
      ...addFlight,
      [e.target.name]: e.target.value
    });
  }

  const SelectHandleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setAddFlight({
      ...addFlight,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(addFlight)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(addFlight)
    }

    fetch("http://localhost:5000/flight", requestOptions)
      .then(res => res.json())
      .then(data => console.log("1", data))

    navigate("/flight")
  }


  return (
    <div className='search'>
      <h1>Book your flight</h1>
      <form onSubmit={handleSubmit}>
        <div className='search-airport'>
          <div className='search-airport--trip'>
            <label>Trip</label>
            <select id="trip" name="trip"
              onChange={SelectHandleChange}>
              <option value="" selected disabled hidden>Choose your trip</option>
              <option value="round-trip" disabled>Round trip</option>
              <option value="one-Way">One way</option>
            </select>
          </div>


          <div className='search-airport--departure'>
            <label>Departs from</label>
            <select id="departure" name="depatureDestination"
              onChange={SelectHandleChange}
            >

              <option value="" selected disabled hidden>Choose your departure airport</option>
              <option value="Oslo">Oslo</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Amsterdam">Amsterdam</option>

            </select>
          </div>

          <div className='search-airport--arrival'>
            <label>Arriving at</label>
            <select id="arriving" name="arrivalDestination"
              onChange={SelectHandleChange}>
              <option value="" selected disabled hidden>Choose your arrival airport</option>
              <option value="Oslo">Oslo</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Amsterdam">Amsterdam</option>
            </select>
          </div>

        </div>
        <div className='search-date'>
          <div className='search-date--departure'>
            <label>Date of departure</label>
            <input name="depatureAt" type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
              min="2022-12-12" max="2022-12-18"
            />
          </div>

          <div className='search-date--arrival'>
            <label>Date of return</label>
            <input type="date" name="arriveAt" disabled
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
              min="2022-12-12" max="2022-12-18" />


          </div>

          <div className='search-date--passenger'>
            <div>
              <label>Passenger ( Adults )</label>
              <input type="number" placeholder='0'
                name="passengerAdult"

                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
              />
            </div>
            <div>
              <label>Passenger ( Children )</label>
              <input type="number" placeholder='0'
                name="passengerChild"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
              />
            </div>
            {/* <div>
                     <label>Total passengers</label>
                    <input type="number" name= "avaliableSeats" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
                    />
                    </div> */}
          </div>

        </div>
        <div className='search-button'>
          <button >Search flights</button>

        </div>

      </form>

    </div>
  )
}


export default Search
