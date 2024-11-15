import { URLSearchParams } from "url"
import { API_CONFIG } from "./config"
import axios from "axios"
import { Coordinates, WeatherData } from "./type";
class Weather  {
    private createUrl(endpoint: string, params: Record<string, string | number>) {
        const searchParams = new URLSearchParams({
          appid: API_CONFIG.API_KEY,
          ...params,
        });
        return `${endpoint}?${searchParams.toString()}`;
      }

    private async fetchData<T>(url: string) : Promise<T> {
        try {
          const response = await axios.get<T>(url); // <T> ensures response data is typed
          return response.data; // Axios stores the actual data in `response.data`
        } catch (error: any) {
          if (error.response) {
            throw new Error(
              `Weather API Error: ${error.response.statusText} (Status: ${error.response.status})`
            );
          } else if (error.request) {
            throw new Error("No response received from Weather API.");
          } else {
            throw new Error(`Error: ${error.message}`);
          }
        }
      }
       

    private getForecast({lat, lon}:Coordintes): Promise<WeatherData>{
        const url = this.createUrl(`${API_CONFIG.API_KEY}/reverse`, {
            lat: lat.toString(),
            lon: lon.toString(),
            units: "metric",
        })
        return this.fetchData<WeatherData>(url);
    }

    async reverseGeocode({
        lat,
        lon,
      }: Coordinates): Promise<GeocodingResponse[]> {
        const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
          lat: lat.toString(),
          lon: lon.toString(),
          limit: "1",
        });
        return this.fetchData<GeocodingResponse[]>(url);
      }
    
    private searchLocations(){

    }
}
export const weather = new Weather();