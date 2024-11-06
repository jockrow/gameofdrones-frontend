import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-page',
  standalone: true,
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  imports: [FormsModule, CommonModule]
})

export class StartPageComponent implements OnInit {
  player1Name: string = '';
  player2Name: string = '';
  namesAreSame: boolean = false;

  @ViewChild('player1Input', { static: true }) player1Input!: ElementRef;

  constructor(private router: Router, private gameService: GameService) {}
    ngOnInit(): void {
    this.player1Input.nativeElement.focus();
    }

  startGame() {
    if (this.player1Name && this.player2Name) {
      this.gameService.setPlayers(this.player1Name, this.player2Name);
      this.router.navigate(['/game']);
    }
  }

  validateNames() {
    if (this.player1Name && this.player2Name) {
      this.namesAreSame = this.player1Name === this.player2Name;
    } else {
      this.namesAreSame = false;
    }
  }

  onEnterKey() {
    this.startGame();
  }
}
