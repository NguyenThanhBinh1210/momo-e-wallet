import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(
    localStorage.getItem("countdownSeconds") || 24 * 60 * 60
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSeconds) => {
        if (prevSeconds > 0) {
          const newSeconds = prevSeconds - 1;
          localStorage.setItem("countdownSeconds", newSeconds);
          return newSeconds;
        }
        return prevSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const remainingSeconds = secondsLeft % 60;

  return (
    <div className="order-time">
      <div className="order-time-box">
        <h3>Đơn hàng sẽ hết hạn sau:</h3>
        <button>{hours} Giờ</button>
        <button>{minutes} Phút</button>
        <button>{remainingSeconds} Giây</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
