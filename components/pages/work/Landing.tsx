import { useEffect, useState } from "react";

const Landing = () => {
  const [time, setTime] = useState("Morning");

  useEffect(() => {
    const timestamp = new Date();
    const hour = timestamp.getHours();

    if (hour < 10) {
      setTime("Morning");
    } else if (hour < 14) {
      setTime("Afternoon");
    } else if (hour < 18) {
      setTime("Evening");
    } else {
      setTime("Night");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-[50vh] min-h-[450px] text-[2rem] font-[300]">
      <p>Good {time.toLocaleLowerCase()},</p>
      <p>I am Indra Mahaarta, Software Engineer enthusiast</p>
    </div>
  );
};

export default Landing;
