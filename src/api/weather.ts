import { URLSearchParams } from "url"
import { API_CONFIG } from "./config"
import axios from "axios"
import { Coordintes, WeatherData } from "./type";
class Weather  {
    private createUrl(endpoint: string, params: Record<string, string | number>) {
        const searchParams = new URLSearchParams({
          appid: API_CONFIG.API_KEY,
          ...params,
        });
        return `${endpoint}?${searchParams.toString()}`;
      }

    private async fetchUrl<T>(url: string) : Promise<T> {
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
        const url = this.createUrl(`${API_CONFIG.API_KEY}/forecast`, {
            lat: ,
            lon: ,
            units:
        })

    }

    private reverseGeocode(){

    }

    private searchLocations(){

    }
}