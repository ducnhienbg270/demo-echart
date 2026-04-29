import { Component, OnInit, OnDestroy } from '@angular/core';

type GamePhase = 'start' | 'order' | 'marinating' | 'grilling' | 'result';
type GrillingResult = 'PERFECT' | 'OK' | 'FAIL';

interface Ingredient {
  name: string;
  icon: string;
  order: number;
}

@Component({
  selector: 'app-cooking-game',
  templateUrl: './cooking-game.component.html',
  styleUrls: ['./cooking-game.component.css']
})
export class CookingGameComponent implements OnInit, OnDestroy {
  // Game state
  gamePhase: GamePhase = 'start';
  score = 0;
  totalOrders = 0;
  completedOrders = 0;
  
  // Marinating phase
  ingredients: Ingredient[] = [
    { name: 'Mật ong', icon: '🍯', order: 1 },
    { name: 'Tỏi', icon: '🧄', order: 2 },
    { name: 'Nước mắm', icon: '🥫', order: 3 }
  ];
  selectedIngredients: number[] = [];
  marinatingComplete = false;
  marinatingError = false;
  
  // Grilling phase
  heatBarPosition = 0;
  heatBarDirection = 1;
  perfectZoneStart = 40;
  perfectZoneEnd = 60;
  okZoneStart = 25;
  okZoneEnd = 75;
  grillingResult: GrillingResult | null = null;
  ribsState: 'raw' | 'pink' | 'golden' | 'burnt' = 'raw';
  showSmoke = false;
  showFire = false;
  
  private heatBarInterval: any;
  
  ngOnInit(): void {
    this.shuffleIngredients();
  }
  
  ngOnDestroy(): void {
    this.clearIntervals();
  }
  
  startGame(): void {
    this.gamePhase = 'order';
    this.score = 0;
    this.totalOrders = 3;
    this.completedOrders = 0;
    setTimeout(() => this.startOrder(), 1000);
  }
  
  startOrder(): void {
    this.gamePhase = 'marinating';
    this.selectedIngredients = [];
    this.marinatingComplete = false;
    this.marinatingError = false;
    this.shuffleIngredients();
  }
  
  shuffleIngredients(): void {
    // Shuffle ingredients array for display
    this.ingredients = [...this.ingredients].sort(() => Math.random() - 0.5);
  }
  
  selectIngredient(ingredient: Ingredient): void {
    if (this.marinatingComplete || this.marinatingError) return;
    
    const expectedOrder = this.selectedIngredients.length + 1;
    
    if (ingredient.order === expectedOrder) {
      // Correct ingredient
      this.selectedIngredients.push(ingredient.order);
      
      if (this.selectedIngredients.length === 3) {
        // All ingredients selected correctly
        this.marinatingComplete = true;
        this.score += 50;
        setTimeout(() => this.startGrilling(), 1500);
      }
    } else {
      // Wrong ingredient
      this.marinatingError = true;
      this.score -= 20;
      setTimeout(() => {
        this.selectedIngredients = [];
        this.marinatingError = false;
      }, 1500);
    }
  }
  
  isIngredientSelected(ingredient: Ingredient): boolean {
    return this.selectedIngredients.includes(ingredient.order);
  }
  
  startGrilling(): void {
    this.gamePhase = 'grilling';
    this.heatBarPosition = 0;
    this.heatBarDirection = 1;
    this.grillingResult = null;
    this.ribsState = 'raw';
    this.showSmoke = false;
    this.showFire = true;
    
    // Start heat bar animation
    this.heatBarInterval = setInterval(() => {
      this.heatBarPosition += this.heatBarDirection * 2;
      
      if (this.heatBarPosition >= 100) {
        this.heatBarPosition = 100;
        this.heatBarDirection = -1;
      } else if (this.heatBarPosition <= 0) {
        this.heatBarPosition = 0;
        this.heatBarDirection = 1;
      }
    }, 20);
  }
  
  clickGrill(): void {
    if (this.grillingResult) return;
    
    clearInterval(this.heatBarInterval);
    
    // Determine result based on heat bar position
    if (this.heatBarPosition >= this.perfectZoneStart && 
        this.heatBarPosition <= this.perfectZoneEnd) {
      this.grillingResult = 'PERFECT';
      this.ribsState = 'golden';
      this.score += 100;
    } else if (this.heatBarPosition >= this.okZoneStart && 
               this.heatBarPosition <= this.okZoneEnd) {
      this.grillingResult = 'OK';
      this.ribsState = 'pink';
      this.score += 50;
    } else {
      this.grillingResult = 'FAIL';
      this.ribsState = 'burnt';
      this.score -= 30;
    }
    
    this.showSmoke = true;
    this.showFire = false;
    
    setTimeout(() => this.showResult(), 2000);
  }
  
  showResult(): void {
    this.gamePhase = 'result';
    this.completedOrders++;
    
    if (this.completedOrders < this.totalOrders) {
      setTimeout(() => this.startOrder(), 3000);
    }
  }
  
  resetGame(): void {
    this.clearIntervals();
    this.gamePhase = 'start';
    this.score = 0;
    this.totalOrders = 0;
    this.completedOrders = 0;
  }
  
  private clearIntervals(): void {
    if (this.heatBarInterval) {
      clearInterval(this.heatBarInterval);
    }
  }
  
  getHeatBarStyle(): any {
    return {
      left: `${this.heatBarPosition}%`
    };
  }
  
  getRibsClass(): string {
    return `ribs-${this.ribsState}`;
  }
  
  getResultIcon(): string {
    switch (this.grillingResult) {
      case 'PERFECT': return '⭐';
      case 'OK': return '👍';
      case 'FAIL': return '💥';
      default: return '';
    }
  }
  
  getResultMessage(): string {
    switch (this.grillingResult) {
      case 'PERFECT': return 'Hoàn hảo! Sườn vàng đẹp!';
      case 'OK': return 'Ổn! Có thể ăn được!';
      case 'FAIL': return 'Thất bại! Sườn bị cháy!';
      default: return '';
    }
  }
}

// Made with Bob