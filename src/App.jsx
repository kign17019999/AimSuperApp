import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WheelComponent from "react-wheel-of-prizes";

function App() {
  const [count, setCount] = useState(0);
  const [previousResults, setPreviousResults] = useState([]);

  const segments = [
    "โอนไว10บาท",
    "โอนไว50บาท",
    "กอด10ครั้ง",
    "น้ำแซ่บ1แก้ว",
    "ต่อยฟรี1ที",
    "กินฟรี1มื้อ"
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
    setPreviousResults([...previousResults, winner]);
  };

  const appStyle = {
    textAlign: 'left',
    backgroundColor: 'pink',
    padding: '20px' // Add some padding to the app container
  };

  const wheelContainerStyle = {
    border: '2px solid black', // Add a black border around the wheel container
    borderRadius: '10px', // Add border radius to make it rounder
    padding: '20px', // Add padding inside the border
    display: 'inline-block' // Display the wheel container as inline-block to fit the content
  };

  return (
    <>
      <div style={appStyle}>
        <h1>Hello Aim, This is Your Lucky Draw</h1>
        <div style={wheelContainerStyle}> {/* Apply wheel container style */}
          <WheelComponent
            segments={segments}
            segColors={segColors}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Spin2"
            isOnlyOnce={false}
            size={190}
            upDuration={500}
            downDuration={600}
            fontFamily="Arial"
          />
        </div>
        {/* <h2>Previous Spin Results:</h2>
        <ul>
          {previousResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul> */}
      </div>
    </>
  )
}

export default App
