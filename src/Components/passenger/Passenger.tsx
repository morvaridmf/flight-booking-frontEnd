import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./passenger.scss"
import { useNavigate } from "react-router-dom"
import { IPassengerInfo } from "../../types/types"


function Passenger() {

  const [passengerInfo, setPassengerInfo] = useState<IPassengerInfo[]>([])
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassengerInfo({
      ...passengerInfo,
      [e.target.name]: e.target.value
    });
  }

  const SelectHandleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setPassengerInfo({
      ...passengerInfo,
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(passengerInfo)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(passengerInfo)
    }

    fetch("http://localhost:5000/passenger", requestOptions)
      .then(res => res.json())
      .then(data => console.log("1", data))

    navigate("/info")
  }

  return (
    <div className='passenger'>
      <nav>
        <Link to="/" >
          <h3>Home</h3>
        </Link>
        <Link to="/flight" >
          <h3>Flight info</h3>
        </Link>
      </nav>
      <div className='passenger-container'>
        <h2>Passenger</h2>
        <div className='passenger-container--input'>
          <p>Passenger 1: </p>
          <form onSubmit={handleSubmit}>
            <div className='passenger-input'>

              <div>
                <label>Title </label>
                <select id="title" name="title" onChange={SelectHandleChange} >
                  <option value="" selected disabled ></option>
                  <option value="Mr" >Mr</option>
                  <option value="Mrs" >Mrs</option>
                  <option value="Miss" >Miss</option>
                </select>
              </div>
              <div>
                <label>First name</label>
                <input type="text" name='firstName'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)} />
              </div>
              <div>
                <label>Last name</label>
                <input type="text" name='lastName'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)} />
              </div>
              <div>

                <label>Date of birth</label>
                <input type="date" name='birthDate' form="YYYY-MM-DD"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)} />
              </div>
              <div>

                <label>Phone number</label>
                <input type="number" name='phoneNumber'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)} />
              </div>
              <div>

                <label>Email</label>
                <input type="text" name='email'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)} />
              </div>

            </div>
            <button type='submit'>continue</button>
          </form>


        </div>

      </div>

    </div>
  )
}

export default Passenger

