import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { map, switchMap, pluck, filter, mergeMap, toArray } from 'rxjs/operators'

interface OpenWeatherResponse {
  list: {
    dt_txt: string
    main: {
      temp: number
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private url = 'https://api.openweathermap.org/data/2.5/forecast'

  constructor(private http: HttpClient) { }

  getForecast() {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'imperial')
          .set('appid', 'b6ae99a1685d559d7f83f627b4a6490a')
      }),
      switchMap(params => this.http.get<OpenWeatherResponse>(this.url, { params })),
      pluck('list'),
      mergeMap(value => of(...value)),
      filter((value, index) => index % 8 === 0),
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        }
      }),
      toArray()
    )
  }


  getCurrentLocation() {
    return new Observable<Coordinates>(observer => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords)
          observer.complete()
        },
        (err) => observer.error(err)
      )

    })

  }

}
