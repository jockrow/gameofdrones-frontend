import { Injectable } from '@angular/core';
import { Move } from './models/move.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private player1: string = '';
  private player2: string = '';
  private currentPlayer: string = '';
  private player1Move: string = '';
  private player2Move: string = '';
  private player1Wins: number = 0;
  private player2Wins: number = 0;
  private roundResults: { round: number, winner: string }[] = [];

  setPlayers(player1: string, player2: string) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.resetGame();
  }

  getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  setPlayerMove(move: string) {
    if (this.currentPlayer === this.player1) {
      this.player1Move = move;
    } else {
      this.player2Move = move;
    }
  }

  nextPlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  isRoundComplete(): boolean {
    return !!this.player1Move && !!this.player2Move;
  }

  getRoundWinner(moves: Move[]): string {
    if (this.player1Move === this.player2Move) {
      return 'Tie';
    }

if (moves.some(move => move.name === this.player1Move && move.kills === this.player2Move)) {
      this.player1Wins++;
      return this.player1;
    } else {
      this.player2Wins++;
      return this.player2;
    }
  }

  isGameOver(): boolean {
    return this.player1Wins === 3 || this.player2Wins === 3;
  }

  getWinner(): string {
    if (this.player1Wins === 3) {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  getRoundResults(): { round: number, winner: string }[] {
    return this.roundResults;
  }

  resetGame() {
    this.player1Move = '';
    this.player2Move = '';
    this.player1Wins = 0;
    this.player2Wins = 0;
    this.roundResults = [];
    this.currentPlayer = this.player1;
  }
}
