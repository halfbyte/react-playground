import React from "react";
import {Panel} from "react-bootstrap";

class WeatherInfo extends React.Component {
    render() {
        const {
            props: {
                weather
            }
        } = this;
        const date = new Date(weather.dt * 1000);
        const title = (<span><img alt="forecast" height="32" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
            {`${date.toLocaleDateString()}`}</span>);
        return (<Panel header={title} bsStyle="info">
            <p>{`Clima: ${weather.weather[0].description}`}</p>
            <p>{`Mínima: ${weather.temp.min}º C Máxima: ${weather.temp.max}º C `}</p>
            <p>{`Humedad: ${weather.humidity}%`}</p>
        </Panel>);
    }
}

export default WeatherInfo;