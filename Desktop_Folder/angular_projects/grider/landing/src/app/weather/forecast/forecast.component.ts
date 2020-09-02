import { Component, OnInit } from '@angular/core'
import { ForecastService } from '../forecast.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<{ dateString: string, temp: number }[]>
  // forecastData = []

  constructor(forecastService: ForecastService) {
    // async pipe renders the observable directly in template
    this.forecast$ = forecastService.getForecast()
    // forecastService.getForecast().subscribe(forecastData => this.forecastData = forecastData)
  }

  ngOnInit(): void {

  }

}
