import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

type GamePhase = 'start' | 'playing' | 'gameover';
type EnemyType = 'basic' | 'fast' | 'tank' | 'boss';
type PowerUpType = 'rapidfire' | 'bomb' | 'heal';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Bullet extends GameObject {
  speed: number;
}

interface Enemy extends GameObject {
  type: EnemyType;
  hp: number;
  maxHp: number;
  speed: number;
  points: number;
}

interface PowerUp extends GameObject {
  type: PowerUpType;
  speed: number;
}

interface FloatingText {
  x: number;
  y: number;
  text: string;
  opacity: number;
}

@Component({
  selector: 'app-shooting-game',
  templateUrl: './shooting-game.component.html',
  styleUrls: ['./shooting-game.component.css']
})
export class ShootingGameComponent implements OnInit, OnDestroy {
  gamePhase: GamePhase = 'start';
  
  // Expose Math to template
  Math = Math;
  
  // Player
  player = {
    x: 50,
    y: 85,
    width: 8,
    height: 8,
    hp: 100,
    maxHp: 100,
    speed: 3,
    fireRate: 300,
    canShoot: true
  };
  
  // Game objects
  bullets: Bullet[] = [];
  enemies: Enemy[] = [];
  powerUps: PowerUp[] = [];
  floatingTexts: FloatingText[] = [];
  
  // Game state
  score = 0;
  combo = 0;
  maxCombo = 0;
  survivalTime = 0;
  
  // Power-up states
  rapidFireActive = false;
  rapidFireTimer = 0;
  
  // Difficulty
  enemySpawnRate = 1500;
  difficultyLevel = 1;
  
  // Controls
  moveLeft = false;
  moveRight = false;
  
  // Effects
  screenShake = 0;
  
  private gameLoop: any;
  private enemySpawnInterval: any;
  private difficultyInterval: any;
  private survivalInterval: any;
  
  ngOnInit(): void {}
  
  ngOnDestroy(): void {
    this.stopGame();
  }
  
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.gamePhase !== 'playing') return;
    
    switch (event.key) {
      case 'ArrowLeft':
        this.moveLeft = true;
        event.preventDefault();
        break;
      case 'ArrowRight':
        this.moveRight = true;
        event.preventDefault();
        break;
      case ' ':
        this.shoot();
        event.preventDefault();
        break;
    }
  }
  
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent): void {
    if (this.gamePhase !== 'playing') return;
    
    switch (event.key) {
      case 'ArrowLeft':
        this.moveLeft = false;
        break;
      case 'ArrowRight':
        this.moveRight = false;
        break;
    }
  }
  
  startGame(): void {
    this.gamePhase = 'playing';
    this.resetGame();
    this.startGameLoop();
    this.startEnemySpawning();
    this.startDifficultyScaling();
    this.startSurvivalTimer();
  }
  
  resetGame(): void {
    this.player = {
      x: 50,
      y: 85,
      width: 8,
      height: 8,
      hp: 100,
      maxHp: 100,
      speed: 3,
      fireRate: 300,
      canShoot: true
    };
    
    this.bullets = [];
    this.enemies = [];
    this.powerUps = [];
    this.floatingTexts = [];
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.survivalTime = 0;
    this.enemySpawnRate = 1500;
    this.difficultyLevel = 1;
    this.rapidFireActive = false;
    this.rapidFireTimer = 0;
    this.moveLeft = false;
    this.moveRight = false;
    this.screenShake = 0;
  }
  
  startGameLoop(): void {
    this.gameLoop = setInterval(() => {
      this.updateGame();
    }, 1000 / 60);
  }
  
  startEnemySpawning(): void {
    this.spawnEnemy();
    this.enemySpawnInterval = setInterval(() => {
      this.spawnEnemy();
    }, this.enemySpawnRate);
  }
  
  startDifficultyScaling(): void {
    this.difficultyInterval = setInterval(() => {
      this.difficultyLevel++;
      this.enemySpawnRate = Math.max(500, this.enemySpawnRate - 100);
      
      clearInterval(this.enemySpawnInterval);
      this.startEnemySpawning();
    }, 15000);
  }
  
  startSurvivalTimer(): void {
    this.survivalInterval = setInterval(() => {
      this.survivalTime++;
    }, 1000);
  }
  
  updateGame(): void {
    // Update player movement
    if (this.moveLeft && this.player.x > 0) {
      this.player.x -= this.player.speed;
    }
    if (this.moveRight && this.player.x < 100 - this.player.width) {
      this.player.x += this.player.speed;
    }
    
    // Update bullets
    this.bullets = this.bullets.filter(bullet => {
      bullet.y -= bullet.speed;
      return bullet.y > -5;
    });
    
    // Update enemies
    this.enemies.forEach(enemy => {
      enemy.y += enemy.speed;
    });
    
    // Remove off-screen enemies
    this.enemies = this.enemies.filter(enemy => {
      if (enemy.y > 105) {
        this.combo = 0;
        return false;
      }
      return true;
    });
    
    // Update power-ups
    this.powerUps.forEach(powerUp => {
      powerUp.y += powerUp.speed;
    });
    this.powerUps = this.powerUps.filter(p => p.y < 105);
    
    // Update floating texts
    this.floatingTexts.forEach(text => {
      text.y -= 0.5;
      text.opacity -= 0.02;
    });
    this.floatingTexts = this.floatingTexts.filter(t => t.opacity > 0);
    
    // Check collisions
    this.checkBulletEnemyCollisions();
    this.checkPlayerEnemyCollisions();
    this.checkPlayerPowerUpCollisions();
    
    // Update power-up timers
    if (this.rapidFireActive) {
      this.rapidFireTimer--;
      if (this.rapidFireTimer <= 0) {
        this.rapidFireActive = false;
        this.player.fireRate = 300;
      }
    }
    
    // Update screen shake
    if (this.screenShake > 0) {
      this.screenShake -= 0.5;
    }
    
    // Check game over
    if (this.player.hp <= 0) {
      this.gameOver();
    }
  }
  
  shoot(): void {
    if (!this.player.canShoot) return;
    
    this.bullets.push({
      x: this.player.x + this.player.width / 2 - 1,
      y: this.player.y,
      width: 2,
      height: 4,
      speed: 4
    });
    
    this.player.canShoot = false;
    setTimeout(() => {
      this.player.canShoot = true;
    }, this.player.fireRate);
  }
  
  spawnEnemy(): void {
    const rand = Math.random();
    let type: EnemyType;
    let hp: number;
    let speed: number;
    let points: number;
    let width: number;
    let height: number;
    
    if (this.difficultyLevel > 5 && rand < 0.05) {
      // Boss
      type = 'boss';
      hp = 50;
      speed = 0.5;
      points = 100;
      width = 15;
      height = 15;
    } else if (rand < 0.5) {
      // Basic
      type = 'basic';
      hp = 10;
      speed = 1;
      points = 10;
      width = 6;
      height = 6;
    } else if (rand < 0.8) {
      // Fast
      type = 'fast';
      hp = 5;
      speed = 2;
      points = 15;
      width = 5;
      height = 5;
    } else {
      // Tank
      type = 'tank';
      hp = 20;
      speed = 0.7;
      points = 20;
      width = 8;
      height = 8;
    }
    
    this.enemies.push({
      x: Math.random() * (100 - width),
      y: -height,
      width,
      height,
      type,
      hp,
      maxHp: hp,
      speed,
      points
    });
  }
  
  checkBulletEnemyCollisions(): void {
    this.bullets.forEach((bullet, bulletIndex) => {
      this.enemies.forEach((enemy, enemyIndex) => {
        if (this.isColliding(bullet, enemy)) {
          // Remove bullet
          this.bullets.splice(bulletIndex, 1);
          
          // Damage enemy
          enemy.hp -= 10;
          
          if (enemy.hp <= 0) {
            // Enemy destroyed
            this.enemies.splice(enemyIndex, 1);
            
            // Add score
            const comboMultiplier = Math.min(Math.floor(this.combo / 5) + 1, 5);
            const points = enemy.points * comboMultiplier;
            this.score += points;
            this.combo++;
            this.maxCombo = Math.max(this.maxCombo, this.combo);
            
            // Floating text
            this.addFloatingText(`+${points}`, enemy.x + enemy.width / 2, enemy.y);
            
            // Chance to drop power-up
            if (Math.random() < 0.15) {
              this.spawnPowerUp(enemy.x + enemy.width / 2, enemy.y);
            }
            
            // Screen shake
            this.screenShake = 5;
          }
        }
      });
    });
  }
  
  checkPlayerEnemyCollisions(): void {
    this.enemies.forEach((enemy, index) => {
      if (this.isColliding(this.player, enemy)) {
        // Remove enemy
        this.enemies.splice(index, 1);
        
        // Damage player
        this.player.hp = Math.max(0, this.player.hp - 20);
        this.combo = 0;
        
        // Screen shake
        this.screenShake = 10;
        
        // Floating text
        this.addFloatingText('-20', this.player.x + this.player.width / 2, this.player.y);
      }
    });
  }
  
  checkPlayerPowerUpCollisions(): void {
    this.powerUps.forEach((powerUp, index) => {
      if (this.isColliding(this.player, powerUp)) {
        this.powerUps.splice(index, 1);
        this.activatePowerUp(powerUp.type);
      }
    });
  }
  
  isColliding(obj1: GameObject, obj2: GameObject): boolean {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
  }
  
  spawnPowerUp(x: number, y: number): void {
    const types: PowerUpType[] = ['rapidfire', 'bomb', 'heal'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    this.powerUps.push({
      x: x - 3,
      y,
      width: 6,
      height: 6,
      type,
      speed: 1
    });
  }
  
  activatePowerUp(type: PowerUpType): void {
    switch (type) {
      case 'rapidfire':
        this.rapidFireActive = true;
        this.rapidFireTimer = 300; // 5 seconds at 60fps
        this.player.fireRate = 100;
        this.addFloatingText('🔫 Rapid Fire!', this.player.x + this.player.width / 2, this.player.y - 5);
        break;
      case 'bomb':
        this.enemies = [];
        this.score += 50;
        this.addFloatingText('💣 BOOM! +50', 50, 50);
        this.screenShake = 15;
        break;
      case 'heal':
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + 30);
        this.addFloatingText('❤️ +30 HP', this.player.x + this.player.width / 2, this.player.y - 5);
        break;
    }
  }
  
  addFloatingText(text: string, x: number, y: number): void {
    this.floatingTexts.push({ x, y, text, opacity: 1 });
  }
  
  gameOver(): void {
    this.gamePhase = 'gameover';
    this.stopGame();
  }
  
  stopGame(): void {
    if (this.gameLoop) clearInterval(this.gameLoop);
    if (this.enemySpawnInterval) clearInterval(this.enemySpawnInterval);
    if (this.difficultyInterval) clearInterval(this.difficultyInterval);
    if (this.survivalInterval) clearInterval(this.survivalInterval);
  }
  
  getPlayerStyle(): any {
    return {
      left: `${this.player.x}%`,
      bottom: `${this.player.y}%`,
      width: `${this.player.width}%`,
      height: `${this.player.height}%`
    };
  }
  
  getBulletStyle(bullet: Bullet): any {
    return {
      left: `${bullet.x}%`,
      bottom: `${bullet.y}%`,
      width: `${bullet.width}%`,
      height: `${bullet.height}%`
    };
  }
  
  getEnemyStyle(enemy: Enemy): any {
    return {
      left: `${enemy.x}%`,
      bottom: `${enemy.y}%`,
      width: `${enemy.width}%`,
      height: `${enemy.height}%`
    };
  }
  
  getPowerUpStyle(powerUp: PowerUp): any {
    return {
      left: `${powerUp.x}%`,
      bottom: `${powerUp.y}%`,
      width: `${powerUp.width}%`,
      height: `${powerUp.height}%`
    };
  }
  
  getFloatingTextStyle(text: FloatingText): any {
    return {
      left: `${text.x}%`,
      bottom: `${text.y}%`,
      opacity: text.opacity
    };
  }
  
  getArenaStyle(): any {
    if (this.screenShake > 0) {
      const x = (Math.random() - 0.5) * this.screenShake;
      const y = (Math.random() - 0.5) * this.screenShake;
      return { transform: `translate(${x}px, ${y}px)` };
    }
    return {};
  }
  
  getEnemyIcon(type: EnemyType): string {
    switch (type) {
      case 'basic': return '🟢';
      case 'fast': return '🔴';
      case 'tank': return '🟡';
      case 'boss': return '👾';
      default: return '⚫';
    }
  }
  
  getPowerUpIcon(type: PowerUpType): string {
    switch (type) {
      case 'rapidfire': return '🔫';
      case 'bomb': return '💣';
      case 'heal': return '❤️';
      default: return '⭐';
    }
  }
  
  getHPPercentage(): number {
    return (this.player.hp / this.player.maxHp) * 100;
  }
  
  getHPColor(): string {
    const percentage = this.getHPPercentage();
    if (percentage > 60) return '#4caf50';
    if (percentage > 30) return '#ff9800';
    return '#f44336';
  }
  
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}

// Made with Bob