import React from "react";
import "./style.css";

import { Card } from "semantic-ui-react";
import moment from "moment";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <div className="main">
        <p className="header">{weatherData.name}</p>
        <div>
          <p className="day">Day: {moment().format("dddd")}</p>
        </div>

        <div>
          <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        </div>
      </div>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
