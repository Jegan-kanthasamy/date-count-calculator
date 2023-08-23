import "./style.css";
import { useState } from "react";
import moment from "moment";

export default function App() {
  const [step, setStep] = useState(0);

  const [day, setDay] = useState(0);

  const currentDate = new Date();
  console.log(moment(currentDate).format("MMMM Do YYYY, h:mm:ss a"));
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
    <div className="mainContainer">
      <div className="App container">
        <div className="mainCont">
          <button
            className="btn btnMin"
            onClick={step > 1 ? () => setStep(step - 1) : null}
          >
            -
          </button>
          <span className="data">Step: {step}</span>
          <button className="btn" onClick={() => setStep(step + 1)}>
            <p>+</p>
          </button>
        </div>

        <div className="mainCont">
          <button className="btn btnMin" onClick={() => setDay(day - step)}>
            <span>-</span>
          </button>
          <span className="data">Days: {day}</span>
          <button className="btn" onClick={() => setDay(day + step)}>
            <span>+</span>
          </button>
        </div>
        <div>
          <h3 className="info">
            {day} from Today {countDate}
          </h3>
        </div>
      </div>
    </div>
  );
}
