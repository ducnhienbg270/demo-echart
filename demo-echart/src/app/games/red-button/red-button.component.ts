import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.css']
})
export class RedButtonComponent implements OnInit, OnDestroy {
  gameStarted = false;
  gameOver = false;
  won = false;
  score = 0;
  timer = 3;
  buttonText = "Tăng lương";
  buttonColor = 'red';
  buttonPosition = { top: '50%', left: '50%' };
  
  private timerInterval: any;
  private colorChangeInterval: any;
  private moveInterval: any;
  private textChangeInterval: any;

  // messages = [
  //   "DON'T CLICK ME!",
  //   "SERIOUSLY, DON'T!",
  //   "I'M WARNING YOU!",
  //   "CLICK ME! (Just kidding)",
  //   "DON'T YOU DARE!",
  //   "STAY AWAY!",
  //   "I SAID NO!",
  //   "PLEASE DON'T!",
  //   "LAST WARNING!",
  //   "YOU'LL REGRET IT!"
  // ];

  messages = ['Tăng lương']

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.clearAllIntervals();
  }

  startGame(): void {
    this.gameStarted = true;
    this.gameOver = false;
    this.won = false;
    this.score = 0;
    this.timer = 3;
    
    // Start timer
    this.timerInterval = setInterval(() => {
      this.timer--;
      if (this.timer <= 0) {
        this.winGame();
      }
    }, 1000);

    // Change button color randomly
    this.colorChangeInterval = setInterval(() => {
      const colors = ['red', 'crimson', 'darkred', 'orangered', 'tomato'];
      this.buttonColor = colors[Math.floor(Math.random() * colors.length)];
    }, 800);

    // Move button randomly
    this.moveInterval = setInterval(() => {
      this.moveButton();
    }, 1500);

    // Change button text
    this.textChangeInterval = setInterval(() => {
      this.buttonText = this.messages[Math.floor(Math.random() * this.messages.length)];
    }, 2000);
  }

  moveButton(): void {
    const maxX = 80;
    const maxY = 70;
    const minX = 10;
    const minY = 20;
    
    const newTop = Math.random() * (maxY - minY) + minY;
    const newLeft = Math.random() * (maxX - minX) + minX;
    
    this.buttonPosition = {
      top: `${newTop}%`,
      left: `${newLeft}%`
    };
  }

  onButtonHover(): void {
    // Move button away when hovering
    if (this.gameStarted && !this.gameOver) {
      this.moveButton();
      this.score += 5;
    }
  }

  onButtonClick(): void {
    if (this.gameStarted && !this.gameOver) {
      this.loseGame();
    }
  }

  loseGame(): void {
    this.gameOver = true;
    this.won = false;
    this.clearAllIntervals();
  }

  winGame(): void {
    this.gameOver = true;
    // this.won = true;
    this.won = false;
    this.score += 100;
    this.clearAllIntervals();
  }

  resetGame(): void {
    this.clearAllIntervals();
    this.gameStarted = false;
    this.gameOver = false;
    this.won = false;
    this.score = 0;
    this.timer = 3;
    this.buttonText = "Tăng lương";
    this.buttonColor = 'red';
    this.buttonPosition = { top: '50%', left: '50%' };
  }

  private clearAllIntervals(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.colorChangeInterval) clearInterval(this.colorChangeInterval);
    if (this.moveInterval) clearInterval(this.moveInterval);
    if (this.textChangeInterval) clearInterval(this.textChangeInterval);
  }

  getButtonStyle(): any {
    return {
      position: 'absolute',
      top: this.buttonPosition.top,
      left: this.buttonPosition.left,
      transform: 'translate(-50%, -50%)',
      backgroundColor: this.buttonColor,
      transition: 'all 0.3s ease'
    };
  }
}

// Made with Bob
