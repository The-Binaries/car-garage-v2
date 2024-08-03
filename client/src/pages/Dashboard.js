import React, { useState } from "react";
import MechanicPage from "./Mechanic";
import CarPage from "./Car";
function Dashboard() {
  const [view, setView] = useState("car");

  return (
    <>
      <div className="flex items-center justify-center ml-16 mt-16">
        <button
          className={`ui blue label ${view === "mechanic" ? "" : "basic"}`}
          style={{ fontSize: "1.2rem", marginRight: "1rem" }}
          onClick={() => {
            setView("mechanic");
          }}
        >
          Mechanic
        </button>
        <button
          className={`ui blue label ${view === "car" ? "" : "basic"}`}
          style={{ fontSize: "1.2rem" }}
          onClick={() => setView("car")}
        >
          Car
        </button>
      </div>
      {view === "car" ? <CarPage /> : <MechanicPage />}
    </>
  );
}

export default Dashboard;
