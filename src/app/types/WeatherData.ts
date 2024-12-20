export interface WeatherData {
    location: string;
    temperature: number;
    description?: string;
    humidity: number;
    windSpeed: number;
    name?: string;
  }