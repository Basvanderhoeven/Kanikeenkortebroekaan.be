import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()

export class WeatherService{
    constructor(private _http : HttpClient){

    }

    getLijst(
        city? : string, 
        lat? : number, 
        long? : number) : Observable<IWeathers>{
            var filter = "http://api.openweathermap.org/data/2.5/weather?appid=cc163a8649a7de99f8fc8bd72ec71ef4&units=metric&lang=nl";
            if(city){
                filter += "&q="+city;
            } else{
                filter += "&q=Antwerp";
            }
            if(lat){
                filter += "&lat="+lat;
            }
            if(long){
                filter += "&long="+long;
            }
        return this._http.get<IWeathers>(filter);
    }
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface IWeathers {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}