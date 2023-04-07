import React from "react";

class Newclass {
  name = "";

  constructor(props) {
    this.name = props;
  }

    firstMethod() {
      console.log(this.name + " кто лучьши");
    }
}

const cars = new Newclass("merc");
const bmw = new Newclass("bmw");
const tesla = new Newclass("tesla");

console.log(cars);
console.log(bmw);
console.log(tesla);

cars.firstMethod()
bmw.firstMethod()

export default Newclass;
// --------------------------------------------------------------------------------------------------

// import React, { useState } from "react";

// function App() {
//   const [time, setTime] = useState(new Date());
//   const [alarmTime, setAlarmTime] = useState("");
//   const [isAlarmSet, setIsAlarmSet] = useState(false);

//   // Update the time every second
//   setInterval(() => setTime(new Date()), 1000);

//   // Check if the current time matches the alarm time
//   if (isAlarmSet && time.toLocaleTimeString() === alarmTime) {
//     alert("Wake up!");
//     setIsAlarmSet(true);
//   }

//   // Update the alarm time when user sets a new time
//   function handleAlarmTimeChange(event) {
//     setAlarmTime(event.target.value);
//   }

//   // Set the alarm
//   function handleSetAlarm() {
//     setIsAlarmSet(true);
//   }

//   return (
//     <div className="App">
//       <h1>Alarm Clock</h1>
//       <h2>{time.toLocaleTimeString()}</h2>
//       <label>
//         Set Alarm:{" "}
//         <input type="time" onChange={handleAlarmTimeChange} value={alarmTime} />
//       </label>
//       <button onClick={handleSetAlarm}>Set Alarm</button>
//     </div>
//   );
// }

// export default App;

//---------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <h1>Current Time:</h1>
//       <h2>{time.toLocaleTimeString()}</h2>
//       <div className="bottle">
//         <div className="top"></div>
//         <div className="middle"></div>
//         <div className="bottom"></div>
//       </div>
//     </div>
//   );
// }

// export default Clock;
