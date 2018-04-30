import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()

export class WcService{
    constructor(private _http : HttpClient){

    }

    getLijst() : Observable<RootObject>{
        return this._http.get<RootObject>("http://samples.openweathermap.org/data/2.5/weather?q=Antwerp&appid=b6907d289e10d714a6e88b30761fae22" );
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

export interface RootObject {
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