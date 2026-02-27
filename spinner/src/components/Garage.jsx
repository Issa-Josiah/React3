import Car from "./prop";
import Calm from "./pro2co"
import Description from "./Description";
import Computer from "./comp";
import Football from "./football";

function Garage() {
  return (
    <>
    <h1>My Garage</h1>
      <h2 >🚗 Who lives in my Garage?</h2>
        <Description name="Josiah Mwangi" level="Level 5" />
      <Description name="Kim Kardashian" level="Level 6" />
        <h2>The color of your cars:</h2>
      {/* Component rendered twice */}
      <Car color="red" />
      <Car color="blue" />
       <h3>And what do you watch?</h3>
       <Computer />
        
       <h3>Where do you study?</h3>
       <Calm name="Dedan Kimathi University Of Technology" level="Level 5" />
       <h3>And what do you play?</h3>
       <Football />
       <p>Press the button to check if you scored in the football match and how you celebrate!</p>




    
    </>
  );
}

export default Garage;