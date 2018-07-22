interface ICurrentWeather {
    currentTemperature? : string;
    currentWeatherStatus? : string;
    currentTemperatureUrl? : string;
}

interface IWeatherService<T>{
    GetTodaysWeatherForMenuBar:(T:number)=>T
}

export {ICurrentWeather, IWeatherService}