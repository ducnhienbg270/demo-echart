import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PriceService, PriceData } from '../services/price.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit, OnDestroy {
  gasolinePrices: PriceData[] = [];
  goldPrices: PriceData[] = [];
  lastUpdate: Date = new Date();
  private updateSubscription?: Subscription;
  Math = Math; // Expose Math to template
  isLoading = false;
  errorMessage = '';

  constructor(private priceService: PriceService) {}

  ngOnInit(): void {
    this.loadPrices();
    this.startAutoUpdate();
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  private loadPrices(): void {
    this.isLoading = true;
    this.errorMessage = '';

    // Load gold prices
    this.priceService.getGoldPrices().subscribe({
      next: (prices) => {
        this.goldPrices = prices;
        this.lastUpdate = new Date();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading gold prices:', error);
        this.errorMessage = 'Không thể tải giá vàng. Sử dụng dữ liệu mặc định.';
        this.isLoading = false;
      }
    });

    // Load gasoline prices
    this.priceService.getGasolinePrices().subscribe({
      next: (prices) => {
        this.gasolinePrices = prices;
        this.lastUpdate = new Date();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading gasoline prices:', error);
        this.errorMessage = 'Không thể tải giá xăng dầu. Sử dụng dữ liệu mặc định.';
        this.isLoading = false;
      }
    });
  }

  private startAutoUpdate(): void {
    // Update prices every 30 seconds (reduced frequency for real API calls)
    this.updateSubscription = interval(30000).subscribe(() => {
      this.loadPrices();
    });
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN');
  }

  getChangeClass(change: number): string {
    return change >= 0 ? 'price-up' : 'price-down';
  }

  getChangeIcon(change: number): string {
    return change >= 0 ? 'arrow-up' : 'arrow-down';
  }
}

// Made with Bob
