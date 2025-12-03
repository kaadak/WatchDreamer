import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-30T00:00:00"); // FUTURE DATE

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6 justify-center  text-white text-4xl font-bold">
      <div>{timeLeft.days}<p className="text-sm">Days</p></div>
      <div>{timeLeft.hours}<p className="text-sm">Hours</p></div>
      <div>{timeLeft.minutes}<p className="text-sm">Minutes</p></div>
      <div>{timeLeft.seconds}<p className="text-sm">Seconds</p></div>
    </div>
  );
};

export default Countdown;
