import "./styles.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);

  const [day, setDay] = useState(0);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + day);
  const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const getMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = currentDate.getDate();
  const getDays = dayList[currentDate.getDay()];
  const year = currentDate.getFullYear();
  const month = getMonths[currentDate.getMonth()];
  const countDate = `${getDays} ${date} ${month} ${year}`;

  return (
    <div className="App container">
      <div>
        <button onClick={() => setStep(step + 1)}>+</button>
        <span>Step: {step}</span>
        <button onClick={step > 1 ? () => setStep(step - 1) : null}>-</button>
      </div>
      <div>
        <button onClick={() => setDay(day + step)}>+</button>
        <span>Days: {day}</span>
        <button onClick={() => setDay(day - step)}>-</button>
      </div>
      <div>
        <h3>
          {day} from Today {countDate}
        </h3>
      </div>
    </div>
  );
}
