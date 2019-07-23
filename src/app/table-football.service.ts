import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableFootballService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:3000/";

  recordGame(winners, losers, description) {
    let url = this.baseUrl + 'api/play-game';
    let body = JSON.stringify({"winners": winners,
                               "losers": losers,
                               "description": description});

    console.log('here', url);
    return this.http.post(url, body, {headers: {'Content-Type': 'application/json'}});
  }

  searchPlayerWinRate(playerName) {
    let url = this.baseUrl + 'api/winrate/' + this.formatInput(playerName);
    console.log('getUrl', url);
    return this.http.get(url);
  }

  formatInput(anyString) {
    return anyString.toString().trim().toLowerCase();
  }
}
