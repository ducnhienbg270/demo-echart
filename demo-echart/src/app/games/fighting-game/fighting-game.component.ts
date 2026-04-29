import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

type GamePhase = 'start' | 'playing' | 'won' | 'lost';

interface Fighter {
  name: string;
  hp: number;
  maxHp: number;
  position: number;
  isAttacking: boolean;
  isHit: boolean;
  attackType: 'punch' | 'kick' | null;
  facingRight: boolean;
}

@Component({
  selector: 'app-fighting-game',
  templateUrl: './fighting-game.component.html',
  styleUrls: ['./fighting-game.component.css']
})
export class FightingGameComponent implements OnInit, OnDestroy {
  gamePhase: GamePhase = 'start';
  
  player: Fighter = {
    name: 'Player',
    hp: 100,
    maxHp: 100,
    position: 20,
    isAttacking: false,
    isHit: false,
    attackType: null,
    facingRight: true
  };
  
  ai: Fighter = {
    name: 'AI',
    hp: 100,
    maxHp: 100,
    position: 70,
    isAttacking: false,
    isHit: false,
    attackType: null,
    facingRight: false
  };
  
  // Cooldowns
  punchCooldown = false;
  kickCooldown = false;
  punchCooldownTime = 500; // ms
  kickCooldownTime = 800; // ms
  
  // Damage values
  punchDamage = 10;
  kickDamage = 15;
  
  // Attack range
  attackRange = 15;
  
  // Movement
  moveSpeed = 2;
  isMovingLeft = false;
  isMovingRight = false;
  
  private gameLoop: any;
  private aiThinkInterval: any;
  
  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    this.stopGame();
  }
  
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.gamePhase !== 'playing') return;
    
    const key = event.key.toLowerCase();
    
    switch (key) {
      case 'a':
        this.isMovingLeft = true;
        event.preventDefault();
        break;
      case 'd':
        this.isMovingRight = true;
        event.preventDefault();
        break;
      case 'j':
        this.playerPunch();
        event.preventDefault();
        break;
      case 'k':
        this.playerKick();
        event.preventDefault();
        break;
    }
  }
  
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent): void {
    if (this.gamePhase !== 'playing') return;
    
    const key = event.key.toLowerCase();
    
    switch (key) {
      case 'a':
        this.isMovingLeft = false;
        break;
      case 'd':
        this.isMovingRight = false;
        break;
    }
  }
  
  startGame(): void {
    this.gamePhase = 'playing';
    this.resetFighters();
    this.startGameLoop();
    this.startAI();
  }
  
  resetFighters(): void {
    this.player = {
      name: 'Player',
      hp: 100,
      maxHp: 100,
      position: 20,
      isAttacking: false,
      isHit: false,
      attackType: null,
      facingRight: true
    };
    
    this.ai = {
      name: 'AI',
      hp: 100,
      maxHp: 100,
      position: 70,
      isAttacking: false,
      isHit: false,
      attackType: null,
      facingRight: false
    };
    
    this.punchCooldown = false;
    this.kickCooldown = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }
  
  startGameLoop(): void {
    this.gameLoop = setInterval(() => {
      this.updateGame();
    }, 1000 / 60); // 60 FPS
  }
  
  updateGame(): void {
    // Update player movement
    if (this.isMovingLeft && this.player.position > 0) {
      this.player.position -= this.moveSpeed;
      this.player.facingRight = false;
    }
    if (this.isMovingRight && this.player.position < 90) {
      this.player.position += this.moveSpeed;
      this.player.facingRight = true;
    }
    
    // Update facing direction based on opponent position
    if (this.player.position < this.ai.position) {
      this.player.facingRight = true;
      this.ai.facingRight = false;
    } else {
      this.player.facingRight = false;
      this.ai.facingRight = true;
    }
    
    // Check win/lose conditions
    if (this.player.hp <= 0) {
      this.loseGame();
    } else if (this.ai.hp <= 0) {
      this.winGame();
    }
  }
  
  startAI(): void {
    this.aiThinkInterval = setInterval(() => {
      this.aiThink();
    }, 100);
  }
  
  aiThink(): void {
    if (this.gamePhase !== 'playing') return;
    
    const distance = Math.abs(this.player.position - this.ai.position);
    
    // AI movement logic
    if (distance > this.attackRange + 5) {
      // Move towards player
      if (this.ai.position < this.player.position && this.ai.position < 90) {
        this.ai.position += this.moveSpeed * 0.8;
      } else if (this.ai.position > this.player.position && this.ai.position > 0) {
        this.ai.position -= this.moveSpeed * 0.8;
      }
    } else if (distance < this.attackRange - 5) {
      // Move away from player
      if (this.ai.position < this.player.position && this.ai.position > 0) {
        this.ai.position -= this.moveSpeed * 0.5;
      } else if (this.ai.position > this.player.position && this.ai.position < 90) {
        this.ai.position += this.moveSpeed * 0.5;
      }
    }
    
    // AI attack logic
    if (distance <= this.attackRange && !this.ai.isAttacking) {
      const random = Math.random();
      if (random < 0.3) {
        this.aiPunch();
      } else if (random < 0.5) {
        this.aiKick();
      }
    }
  }
  
  playerPunch(): void {
    if (this.punchCooldown || this.player.isAttacking) return;
    
    this.player.isAttacking = true;
    this.player.attackType = 'punch';
    this.punchCooldown = true;
    
    // Check if hit
    const distance = Math.abs(this.player.position - this.ai.position);
    if (distance <= this.attackRange) {
      this.hitAI(this.punchDamage);
    }
    
    setTimeout(() => {
      this.player.isAttacking = false;
      this.player.attackType = null;
    }, 300);
    
    setTimeout(() => {
      this.punchCooldown = false;
    }, this.punchCooldownTime);
  }
  
  playerKick(): void {
    if (this.kickCooldown || this.player.isAttacking) return;
    
    this.player.isAttacking = true;
    this.player.attackType = 'kick';
    this.kickCooldown = true;
    
    // Check if hit
    const distance = Math.abs(this.player.position - this.ai.position);
    if (distance <= this.attackRange) {
      this.hitAI(this.kickDamage);
    }
    
    setTimeout(() => {
      this.player.isAttacking = false;
      this.player.attackType = null;
    }, 400);
    
    setTimeout(() => {
      this.kickCooldown = false;
    }, this.kickCooldownTime);
  }
  
  aiPunch(): void {
    if (this.ai.isAttacking) return;
    
    this.ai.isAttacking = true;
    this.ai.attackType = 'punch';
    
    // Check if hit
    const distance = Math.abs(this.player.position - this.ai.position);
    if (distance <= this.attackRange) {
      this.hitPlayer(this.punchDamage);
    }
    
    setTimeout(() => {
      this.ai.isAttacking = false;
      this.ai.attackType = null;
    }, 300);
  }
  
  aiKick(): void {
    if (this.ai.isAttacking) return;
    
    this.ai.isAttacking = true;
    this.ai.attackType = 'kick';
    
    // Check if hit
    const distance = Math.abs(this.player.position - this.ai.position);
    if (distance <= this.attackRange) {
      this.hitPlayer(this.kickDamage);
    }
    
    setTimeout(() => {
      this.ai.isAttacking = false;
      this.ai.attackType = null;
    }, 400);
  }
  
  hitPlayer(damage: number): void {
    this.player.hp = Math.max(0, this.player.hp - damage);
    this.player.isHit = true;
    
    // Knockback
    if (this.player.position < this.ai.position) {
      this.player.position = Math.max(0, this.player.position - 5);
    } else {
      this.player.position = Math.min(90, this.player.position + 5);
    }
    
    setTimeout(() => {
      this.player.isHit = false;
    }, 200);
  }
  
  hitAI(damage: number): void {
    this.ai.hp = Math.max(0, this.ai.hp - damage);
    this.ai.isHit = true;
    
    // Knockback
    if (this.ai.position < this.player.position) {
      this.ai.position = Math.max(0, this.ai.position - 5);
    } else {
      this.ai.position = Math.min(90, this.ai.position + 5);
    }
    
    setTimeout(() => {
      this.ai.isHit = false;
    }, 200);
  }
  
  winGame(): void {
    this.gamePhase = 'won';
    this.stopGame();
  }
  
  loseGame(): void {
    this.gamePhase = 'lost';
    this.stopGame();
  }
  
  stopGame(): void {
    if (this.gameLoop) {
      clearInterval(this.gameLoop);
    }
    if (this.aiThinkInterval) {
      clearInterval(this.aiThinkInterval);
    }
  }
  
  resetGame(): void {
    this.stopGame();
    this.gamePhase = 'start';
  }
  
  getFighterStyle(fighter: Fighter): any {
    return {
      left: `${fighter.position}%`,
      transform: fighter.facingRight ? 'scaleX(1)' : 'scaleX(-1)'
    };
  }
  
  getHPPercentage(fighter: Fighter): number {
    return (fighter.hp / fighter.maxHp) * 100;
  }
  
  getHPColor(fighter: Fighter): string {
    const percentage = this.getHPPercentage(fighter);
    if (percentage > 60) return '#4caf50';
    if (percentage > 30) return '#ff9800';
    return '#f44336';
  }
}

// Made with Bob