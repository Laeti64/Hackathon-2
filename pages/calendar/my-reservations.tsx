import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useAuth } from "../../src/context/UserContext";
import Router from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CustomCalendar = () => {
  const { isAuth } = useAuth();
  console.log("isAuth", isAuth);
  const router = useRouter();

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
      {isAuth ? (
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
            if (view === "month" && date.getDate() === 13) {
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
      ) : (
        <Link className="input-primary p-5 mt-11" href="/signin">
          Please sign in !
        </Link>
      )}
    </div>
  );
};

export default CustomCalendar;
