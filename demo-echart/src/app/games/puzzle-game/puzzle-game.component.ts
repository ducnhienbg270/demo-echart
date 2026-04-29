import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

type GamePhase = 'setup' | 'playing' | 'won' | 'lost';

interface Tile {
  id: number;
  position: number;
  correctPosition: number;
  imageUrl: string;
  isEmpty: boolean;
}

@Component({
  selector: 'app-puzzle-game',
  templateUrl: './puzzle-game.component.html',
  styleUrls: ['./puzzle-game.component.css']
})
export class PuzzleGameComponent implements OnInit, OnDestroy {
  gamePhase: GamePhase = 'setup';
  gridSize = 3;
  tiles: Tile[] = [];
  emptyTilePosition = 8;
  
  // Game stats
  moves = 0;
  timer = 180; // 3 minutes
  timeLeft = 180;
  
  // Image handling
  selectedImage: string | null = null;
  originalImage: string | null = null;
  showOriginalImage = false;
  
  private timerInterval: any;
  private canvas: HTMLCanvasElement | null = null;
  
  ngOnInit(): void {
    this.canvas = document.createElement('canvas');
  }
  
  ngOnDestroy(): void {
    this.clearTimer();
  }
  
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (this.gamePhase !== 'playing') return;
    
    const emptyPos = this.emptyTilePosition;
    const row = Math.floor(emptyPos / this.gridSize);
    const col = emptyPos % this.gridSize;
    
    let targetPos = -1;
    
    switch (event.key) {
      case 'ArrowUp':
        if (row < this.gridSize - 1) targetPos = emptyPos + this.gridSize;
        break;
      case 'ArrowDown':
        if (row > 0) targetPos = emptyPos - this.gridSize;
        break;
      case 'ArrowLeft':
        if (col < this.gridSize - 1) targetPos = emptyPos + 1;
        break;
      case 'ArrowRight':
        if (col > 0) targetPos = emptyPos - 1;
        break;
    }
    
    if (targetPos !== -1) {
      event.preventDefault();
      this.moveTile(targetPos);
    }
  }
  
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.processImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }
  
  processImage(imageData: string): void {
    const img = new Image();
    img.onload = () => {
      // Resize to square
      const size = 450;
      if (this.canvas) {
        this.canvas.width = size;
        this.canvas.height = size;
        const ctx = this.canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, size, size);
          this.originalImage = this.canvas.toDataURL();
          this.selectedImage = this.originalImage;
          this.createTiles();
        }
      }
    };
    img.src = imageData;
  }
  
  createTiles(): void {
    this.tiles = [];
    const tileSize = 450 / this.gridSize;
    const totalTiles = this.gridSize * this.gridSize;
    
    for (let i = 0; i < totalTiles; i++) {
      const row = Math.floor(i / this.gridSize);
      const col = i % this.gridSize;
      
      if (this.canvas) {
        const tileCanvas = document.createElement('canvas');
        tileCanvas.width = tileSize;
        tileCanvas.height = tileSize;
        const ctx = tileCanvas.getContext('2d');
        
        if (ctx && this.originalImage) {
          const img = new Image();
          img.src = this.originalImage;
          img.onload = () => {
            ctx.drawImage(
              img,
              col * tileSize, row * tileSize, tileSize, tileSize,
              0, 0, tileSize, tileSize
            );
            
            this.tiles.push({
              id: i,
              position: i,
              correctPosition: i,
              imageUrl: tileCanvas.toDataURL(),
              isEmpty: i === totalTiles - 1
            });
            
            if (this.tiles.length === totalTiles) {
              this.emptyTilePosition = totalTiles - 1;
            }
          };
        }
      }
    }
  }
  
  startGame(): void {
    if (!this.selectedImage) return;
    
    this.gamePhase = 'playing';
    this.moves = 0;
    this.timeLeft = this.timer;
    this.shuffleTiles();
    this.startTimer();
  }
  
  shuffleTiles(): void {
    // Shuffle by making random valid moves
    const shuffleMoves = this.gridSize * this.gridSize * 10;
    
    for (let i = 0; i < shuffleMoves; i++) {
      const validMoves = this.getValidMoves(this.emptyTilePosition);
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      this.swapTiles(this.emptyTilePosition, randomMove, false);
    }
    
    this.moves = 0; // Reset move counter after shuffle
  }
  
  getValidMoves(emptyPos: number): number[] {
    const moves: number[] = [];
    const row = Math.floor(emptyPos / this.gridSize);
    const col = emptyPos % this.gridSize;
    
    // Up
    if (row > 0) moves.push(emptyPos - this.gridSize);
    // Down
    if (row < this.gridSize - 1) moves.push(emptyPos + this.gridSize);
    // Left
    if (col > 0) moves.push(emptyPos - 1);
    // Right
    if (col < this.gridSize - 1) moves.push(emptyPos + 1);
    
    return moves;
  }
  
  canMoveTile(position: number): boolean {
    const validMoves = this.getValidMoves(this.emptyTilePosition);
    return validMoves.includes(position);
  }
  
  moveTile(position: number): void {
    if (this.gamePhase !== 'playing') return;
    if (!this.canMoveTile(position)) return;
    
    this.swapTiles(this.emptyTilePosition, position, true);
    this.moves++;
    
    if (this.checkWin()) {
      this.winGame();
    }
  }
  
  swapTiles(pos1: number, pos2: number, countMove: boolean): void {
    const tile1 = this.tiles.find(t => t.position === pos1);
    const tile2 = this.tiles.find(t => t.position === pos2);
    
    if (tile1 && tile2) {
      const tempPos = tile1.position;
      tile1.position = tile2.position;
      tile2.position = tempPos;
      
      if (tile1.isEmpty) {
        this.emptyTilePosition = tile1.position;
      } else if (tile2.isEmpty) {
        this.emptyTilePosition = tile2.position;
      }
    }
  }
  
  checkWin(): boolean {
    return this.tiles.every(tile => tile.position === tile.correctPosition);
  }
  
  startTimer(): void {
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      
      if (this.timeLeft <= 0) {
        this.loseGame();
      }
    }, 1000);
  }
  
  clearTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  
  winGame(): void {
    this.gamePhase = 'won';
    this.clearTimer();
  }
  
  loseGame(): void {
    this.gamePhase = 'lost';
    this.clearTimer();
  }
  
  resetGame(): void {
    this.clearTimer();
    this.gamePhase = 'setup';
    this.tiles = [];
    this.moves = 0;
    this.timeLeft = this.timer;
    this.selectedImage = null;
    this.originalImage = null;
    this.showOriginalImage = false;
  }
  
  changeGridSize(size: number): void {
    this.gridSize = size;
    if (this.originalImage) {
      this.selectedImage = this.originalImage;
      this.createTiles();
    }
  }
  
  getTileStyle(tile: Tile): any {
    const row = Math.floor(tile.position / this.gridSize);
    const col = tile.position % this.gridSize;
    const tileSize = 450 / this.gridSize;
    
    return {
      width: `${tileSize}px`,
      height: `${tileSize}px`,
      transform: `translate(${col * tileSize}px, ${row * tileSize}px)`,
      backgroundImage: tile.isEmpty ? 'none' : `url(${tile.imageUrl})`,
      opacity: tile.isEmpty ? 0 : 1
    };
  }
  
  isTileCorrect(tile: Tile): boolean {
    return tile.position === tile.correctPosition && !tile.isEmpty;
  }
  
  getTimerColor(): string {
    if (this.timeLeft > 60) return '#4caf50';
    if (this.timeLeft > 30) return '#ff9800';
    return '#f44336';
  }
  
  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
  
  getCompletionTime(): string {
    return this.formatTime(this.timer - this.timeLeft);
  }
}

// Made with Bob