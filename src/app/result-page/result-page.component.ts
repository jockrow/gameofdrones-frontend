import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-result-page',
  standalone: true,
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class ResultPageComponent implements OnInit {
  winnerName: string = '';

  constructor(
    private router: Router,
    private gameService: GameService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.winnerName = this.gameService.getWinner();
    if (this.winnerName) {
      this.sendWinnerToApi();
    }
  }

  private hasSentWinner: boolean = false;
  sendWinnerToApi() {
    if (!this.hasSentWinner) {
      this.hasSentWinner = true;
      const apiUrl = APP_CONFIG.gameMovesUrl + '/winner';
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = { WinnerName: this.winnerName };

      this.http.post(apiUrl, body, { headers }).subscribe(
        () => {
          console.log('Winner successfully sent to the API');
        },
        (error) => {
          console.error('Error sending winner to the API:', error);
        }
      );
    }
  }

  playAgain() {
    this.gameService.resetGame();
    this.router.navigate(['/']);
  }
}
