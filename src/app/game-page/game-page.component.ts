import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Move } from '../models/move.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-game-page',
  standalone: true,
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class GamePageComponent implements OnInit {
  currentPlayer: string = '';
  currentRound: number = 1;
  selectedMove: string = '';
  moves: Move[] = [];
  roundResults: { round: number, winner: string }[] = [];
  loading: boolean = true;

  constructor(private router: Router, private gameService: GameService, private http: HttpClient) {}

  ngOnInit() {
    this.currentPlayer = this.gameService.getCurrentPlayer();
    this.roundResults = this.gameService.getRoundResults();
      this.fetchMoves();
  }

  fetchMoves() {
    this.loading = true;
    this.http.get<Move[]>(environment.apiUrl + '/moves')
      .subscribe(
        (response) => {
          this.moves = response;
          this.loading = false;
        },
        (error) => {
          console.error('Failed to load moves:', error);
          this.loading = false;
        }
      );
  }

  onMoveSelected() {
    if (this.selectedMove) {
      this.gameService.setPlayerMove(this.selectedMove);
      if (this.gameService.isRoundComplete()) {
        const roundWinner = this.gameService.getRoundWinner(this.moves);
        this.roundResults.push({ round: this.currentRound, winner: roundWinner });
        this.currentRound++;
        if (this.gameService.isGameOver()) {
          this.router.navigate(['/result']);
        } else {
          this.gameService.nextPlayer();
          this.currentPlayer = this.gameService.getCurrentPlayer();
        }
      } else {
        this.gameService.nextPlayer();
        this.currentPlayer = this.gameService.getCurrentPlayer();
      }
      this.selectedMove = '';
    }
  }
}
