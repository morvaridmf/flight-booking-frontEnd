import './App.scss';
import { useState, useEffect } from 'react';
import Flight from './Components/flight/Flight';
import Info from './Components/info/Info';
import Passenger from './Components/passenger/Passenger';
import Search from './Components/search/Search';
import { IFlight } from "./types/types"
import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {

  const [flights, setFlights] = useState<IFlight[]>([])

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch("http://localhost:5000/flight")
      const data = await response.json()
      // console.log(data)
      setFlights(data)
    }
    fetching();
  }, [])

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="flight" element={<Flight />} />
        <Route path="passenger" element={<Passenger />} />
        <Route path="info" element={<Info />} />

      </Routes>
    </BrowserRouter>



  );
}

export default App;
