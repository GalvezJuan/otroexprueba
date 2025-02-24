import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const History = ({ country }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (country) {
      setHistory((prevHistory) => [...prevHistory, country].slice(-5));
    }
  }, [country]);

  return (
    <div className="position-fixed top-0 end-0 p-3 bg-light border rounded shadow" style={{ width: "250px", height: "100vh" }}>
      <h4 className="text-center">Historial</h4>
      <ul className="list-group">
        {history.map((element, index) => (
          <li key={index} className="list-group-item">{element.name.common}</li>
        ))}
      </ul>
    </div>
  );
};
