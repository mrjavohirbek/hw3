import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
const CarPage = () => {
  let { idx } = useParams();
  const [mod, setmod] = useState("modal");
  console.log(idx[1]);
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
  console.log(cars[+idx - 1].imgSrc);
  return (
    <div className="car mod">
      <div className="modal">
        <Link to={"/"}>
          {" "}
          <p>Close</p>
        </Link>
        <div className="imgBlock">
          <img src={cars[+idx - 1].imgSrc} />
        </div>
        <div className="block">
          <p>{cars[+idx - 1].price}</p>
          <div className="model">Model:{cars[+idx - 1].model}</div>
        </div>
        <p className="desc">{cars[+idx - 1].description}</p>
      </div>
    </div>
  );
};

export default CarPage;
