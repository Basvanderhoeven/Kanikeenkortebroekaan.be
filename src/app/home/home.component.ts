import { Component, OnInit } from '@angular/core';
import { WeatherService, IWeathers } from '../services/weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : IWeather[];
  list : IWeather[] = [];
  date = new Date();
  kortebroek : boolean = false;
  constructor(private service : WeatherService) { }

  ngOnInit() {
    this.service.getLijst("Nairobi", undefined, undefined).subscribe(result => this.data = this.MapResult(result));
  }
  private MapResult(result : IWeathers) :IWeather[]{
    for(var i=0; i < result.weather.length; i++){
      var weather : IWeather = {
        id : result.id,
        naam : result.name,
        temp : result.main.temp,
        temp_min : result.main.temp_min,
        temp_max : result.main.temp_max,
        description : result.weather[i].description
      }
      console.log(weather);
      this.list.push(weather);
      if(weather.temp > 17){
        this.kortebroek = true;
      } else{
        this.kortebroek = false;
      }
    }
    return this.list;
  }
}
interface IWeather{
    id : number,
    naam : string,
    temp : number,
    temp_min : number,
    temp_max: number,
    description: string
}