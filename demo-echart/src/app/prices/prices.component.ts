import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

interface PriceData {
  name: string;
  price: number;
  unit: string;
  change: number;
  changePercent: number;
  icon: string;
  color: string;
}

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

  ngOnInit(): void {
    this.initializePrices();
    this.startAutoUpdate();
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  private initializePrices(): void {
    this.gasolinePrices = [
      {
        name: 'Xăng RON 95',
        price: 23450,
        unit: 'VNĐ/lít',
        change: 150,
        changePercent: 0.64,
        icon: 'fire',
        color: '#ff4d4f'
      },
      {
        name: 'Xăng E5 RON 92',
        price: 22890,
        unit: 'VNĐ/lít',
        change: -80,
        changePercent: -0.35,
        icon: 'fire',
        color: '#faad14'
      },
      {
        name: 'Dầu Diesel',
        price: 20150,
        unit: 'VNĐ/lít',
        change: 200,
        changePercent: 1.0,
        icon: 'fire',
        color: '#52c41a'
      },
      {
        name: 'Dầu Hỏa',
        price: 19800,
        unit: 'VNĐ/lít',
        change: -50,
        changePercent: -0.25,
        icon: 'fire',
        color: '#1890ff'
      }
    ];

    this.goldPrices = [
      {
        name: 'Vàng SJC',
        price: 76500000,
        unit: 'VNĐ/lượng',
        change: 300000,
        changePercent: 0.39,
        icon: 'gold',
        color: '#faad14'
      },
      {
        name: 'Vàng 9999',
        price: 75800000,
        unit: 'VNĐ/lượng',
        change: -200000,
        changePercent: -0.26,
        icon: 'gold',
        color: '#faad14'
      },
      {
        name: 'Vàng 24K',
        price: 75200000,
        unit: 'VNĐ/lượng',
        change: 150000,
        changePercent: 0.20,
        icon: 'gold',
        color: '#faad14'
      }
    ];
  }

  private startAutoUpdate(): void {
    // Update prices every 5 seconds
    this.updateSubscription = interval(5000).subscribe(() => {
      this.updatePrices();
    });
  }

  private updatePrices(): void {
    // Simulate price changes
    this.gasolinePrices = this.gasolinePrices.map(item => {
      const change = (Math.random() - 0.5) * 200;
      const newPrice = item.price + change;
      const changePercent = (change / item.price) * 100;
      
      return {
        ...item,
        price: Math.round(newPrice),
        change: Math.round(change),
        changePercent: parseFloat(changePercent.toFixed(2))
      };
    });

    this.goldPrices = this.goldPrices.map(item => {
      const change = (Math.random() - 0.5) * 500000;
      const newPrice = item.price + change;
      const changePercent = (change / item.price) * 100;
      
      return {
        ...item,
        price: Math.round(newPrice),
        change: Math.round(change),
        changePercent: parseFloat(changePercent.toFixed(2))
      };
    });

    this.lastUpdate = new Date();
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
