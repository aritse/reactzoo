import React from "react";
import ZooItem from "../ZooItem";
import "./style.css";

export default function ZooList(props) {
  return (
    <div className="ZooList">
      <div className="headers">
        <h3>Headers go here</h3>
      </div>
      {props.animals.length ? props.animals.map(a => <ZooItem key={a.id} animal={a} />) : <h3>Loading</h3>}
    </div>
  );
}
