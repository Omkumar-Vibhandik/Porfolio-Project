import React, { useState, useEffect } from "react";

function TimeClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = dateTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });

  const day = dateTime.toLocaleDateString("en-IN", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });

  const date = dateTime.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  return (
    <div
      style={{ color: "white", fontFamily: "monospace", textAlign: "center" }}
    >
      <div style={{ fontSize: "15px" }}>
        {time} — {day}
      </div>
      <div style={{ fontSize: "14px", textAlign: "right" }}>{date}</div>
    </div>
  );
}

export default TimeClock;
