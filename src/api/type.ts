 export interface Coordinates {
    lat: number, 
    lon: number
}
export interface WeatherData {
    coord: Coordinates;
    weather: WeatherCondition[];
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    city: {
      sunrise: number;
      sunset: number;
      country: string;
    };
    name: string;
    dt: number;
  }