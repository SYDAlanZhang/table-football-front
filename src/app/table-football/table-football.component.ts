import { Component, OnInit } from '@angular/core';
import { TableFootballService } from "../table-football.service"
import { gameDetailsModel, playerDetailsModel } from '../table-football-model';

@Component({
  selector: 'app-table-football',
  templateUrl: './table-football.component.html',
  styleUrls: ['./table-football.component.css']
})
export class TableFootballComponent implements OnInit {
  gameDetails = new gameDetailsModel('', '', '');
  playerName;
  playerDetails = new playerDetailsModel('-', '-', '-');
  constructor(
    private service: TableFootballService,
  ) { }

  ngOnInit() {
  }

  /*
   * Record a game's result,
   * Who's the winner(s), who's the losers(s)
   * Can leave a description of the game as well.
   */
  recordGameResult() {
    this.service.recordGame(this.gameDetails.winner.split(','), this.gameDetails.loser.split(','), this.gameDetails.description).toPromise().then(response => {
      alert(response['message']);
      this.gameDetails = new gameDetailsModel('', '', '')
    }, err => {
      alert('Something went wrong, please try again!')
      console.log(err);
    });
  }

  /*
   * Search a user's total game number, winner game number and winning rate.
   */
  searchPlayerWinRate() {
    this.service.searchPlayerWinRate(this.playerName).toPromise().then(response => {
      this.playerDetails.totalGames = response['message']['totalGame'];
      this.playerDetails.winGames = response['message']['winGame'];
      this.playerDetails.winRate = response['message']['winRate'].toString().substring(0,5) + '%';
    }, err => {
      this.playerDetails = new playerDetailsModel('-', '-', '-');
      alert('Player does not exist!')
      console.log(err);
    });
  }
}
