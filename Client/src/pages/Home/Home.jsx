import React from "react";
import data from './data'
import Tours from "./components/Tours";
import Navbar from "./components/Navbar1";


export default Home = () => {

    const [tours, setTours] = useState(data);
  
    function removeTour(id) {
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
    }
  
    if(tours.length === 0) {
      return (
        
          <div className="refresh">
            <Navbar></Navbar>
            <h2>No Tours Left</h2>
            <button className="btn-white" onClick={() => setTours(data)}>
              Refresh
            </button>
          </div>
      );
    }
  
    return (
      <div className="Home">
        <Navbar></Navbar>
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    )
  };