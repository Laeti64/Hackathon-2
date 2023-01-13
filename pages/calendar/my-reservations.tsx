import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const customStyle = {
    calendar: {
      background: "linear-gradient(to right, #8e2de2, #4a00e0)",
      color: "#fff",
    },
    day: {
      fontWeight: "bold",
    },
    dayWrapper: {
      background: "transparent",
      color: "#fff",
    },
    month: {
      background: "transparent",
      color: "#fff",
    },
    today: {
      background: "#ffc107",
      color: "#000",
    },
    active: {
      background: "#ff5722",
      color: "#fff",
    },
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-gradient-to-b from-emerald-50 to-slate-50">
      <Calendar
        className={"w-100 h-100 mx-auto mt-5"}
        calendarType="US"
        tileClassName={({ date, view }) =>
          view === "month" && date.getDay() === 0 ? "weekend" : null
        }
        /*         tileContent={({ date, view }) =>
          view === "month" && date.getDay() === 6 ? <p>Weekend</p> : null
        } */
        onClickDay={(value) => alert(value)}
        tileContent={({ date, view }) => {
          if (view === "month" && date.getDate() === 12) {
            return (
              <img
                src={
                  "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/141843-cars-feature-audi-e-tron-sportback-image1-rshkifcx17.jpg"
                }
                alt="example image"
              />
            );
          }
        }}
        style={customStyle}
      />
    </div>
  );
};

export default CustomCalendar;
