import React from "react";

export default function MealCard(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-5">
          <img src={props.img} /> {/*Images were sourced from different sites via google search */}
        </div>
        <div className="col-sm-3">
          <p>{props.name}</p>
          <p>Qauntity: {props.quantity}</p>
        </div>
      </div>
      <br />
    </>
  );
}
