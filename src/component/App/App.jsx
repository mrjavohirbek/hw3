import React, { useState } from "react";
import "../../index.css";
import { useParams, Link } from "react-router-dom";
import CarPage from "../CarPage";
const App = () => {
  const [open, setOpen] = useState(false);
  const { idx } = useParams();

  const cars = [
    {
      model: "Spark",
      price: 25000,
      id: 1,
      description: "Company: Uzb Chevrolet. Mark: Spark.",
      oil: "castrol",
      year: 2010,
      imgSrc:
        "https://www.gannett-cdn.com/-mm-/90a7ef11fb8507048e69b2e6ee9b79ee2e11619b/c=183-81-2260-1254/local/-/media/DetroitNews/2015/04/01/B99257110Z.1_20150401180540_000_GNKFOJKA.1-0.jpg?width=2077&height=1173&fit=crop&format=pjpg&auto=webp",
    },
    {
      model: "Tracker",
      price: 30000,
      id: 2,
      description: "Company: Uzb Chevrolet. Mark: Tracker.",
      oil: "castrol",
      year: 2020,
      imgSrc:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP6kDyU9nkug8wPNb9l3Rrk740oKqEwhSRQ1mKuSLBJg2I9FNi51odIoe0UdvBUWEgSKOZUh1PXJ5jvIQgIc24TdVHosA7nqfCCpa4dXVVfYhZPC8HM1LQTomCwUfcxTzlY4RfGQJ9syIRqQSJLgeCnJz8eT-fsiDher_c_2uI9quawoFr-NbTuewLog/s2560/Novo-Tracker-2023%20%281%29.jpg",
    },
  ];
  return !idx ? (
    <div className="main">
      {cars.map((item) => {
        return (
          <Link
            onClick={() => {
              setOpen(true);
            }}
            to={`/${item.id}`}
          >
            <div className="car">
              <div className="imgBlock">
                <img src={item.imgSrc} />
              </div>{" "}
              <div className="block">
                {" "}
                <p>{item.price}</p>
                <div className="model">Model:{item.model}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    <>
      {" "}
      <div className="main">
        {cars.map((item) => {
          return (
            <Link
              onClick={() => {
                setOpen(true);
              }}
              to={`/${item.id}`}
            >
              <div className="car">
                <div className="imgBlock">
                  <img src={item.imgSrc} />
                </div>{" "}
                <div className="block">
                  {" "}
                  <p>{item.price}</p>
                  <div className="model">Model:{item.model}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <CarPage />
    </>
  );
};

export default App;
