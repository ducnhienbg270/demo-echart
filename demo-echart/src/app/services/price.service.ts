import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Gold API Response Interface
interface GoldApiResponse {
  success: boolean;
  timestamp: number;
  time: string;
  date: string;
  count: number;
  prices: {
    [key: string]: {
      name: string;
      buy: number;
      sell: number;
      change_buy: number;
      change_sell: number;
      currency: string;
    };
  };
}

// Gasoline API Response Interface
interface GasolineItem {
  id: number;
  created_at: string;
  updated_at: string;
  date: string;
  title: string;
  price?: number;
  zone1_price?: number;
  zone2_price?: number;
  petrolimex_id?: string;
}

type GasolineApiResponse = GasolineItem[][];

export interface PriceData {
  name: string;
  price: number;
  unit: string;
  change: number;
  changePercent: number;
  icon: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  private goldApiUrl = 'https://www.vang.today/api/prices';
  private gasolineApiUrl = 'https://giaxanghomnay.com/api/pvdate';

  constructor(private http: HttpClient) { }

  getGoldPrices(): Observable<PriceData[]> {
    return this.http.get<GoldApiResponse>(this.goldApiUrl).pipe(
      map(response => this.mapGoldData(response)),
      catchError(error => {
        console.error('Error fetching gold prices:', error);
        return throwError(() => error);
      })
    );
  }

  getGasolinePrices(date?: string): Observable<PriceData[]> {
    // Use current date if not provided
    const targetDate = date || new Date().toISOString().split('T')[0];
    const url = `${this.gasolineApiUrl}/${targetDate}`;
    
    return this.http.get<GasolineApiResponse>(url).pipe(
      map(response => this.mapGasolineData(response)),
      catchError(error => {
        console.error('Error fetching gasoline prices:', error);
        return throwError(() => error);
      })
    );
  }

  private mapGoldData(response: GoldApiResponse): PriceData[] {
    const goldPrices: PriceData[] = [];
    const prices = response.prices;

    // Map common gold types with their API keys
    const goldTypes = [
      { key: 'VNGSJC', name: 'Vàng SJC', color: '#faad14' },
      { key: 'PQHN24NTT', name: 'Vàng PNJ 24K', color: '#faad14' },
      { key: 'DOHNL', name: 'Vàng DOJI', color: '#faad14' },
      { key: 'SJL1L10', name: 'Vàng SJC 9999', color: '#faad14' },
      { key: 'SJ9999', name: 'Vàng SJC Ring', color: '#faad14' },
      { key: 'BT9999NTT', name: 'Vàng Bảo Tín 9999', color: '#faad14' }
    ];

    goldTypes.forEach(type => {
      if (prices[type.key]) {
        const item = prices[type.key];
        const sellPrice = item.sell;
        const change = item.change_sell;
        const changePercent = sellPrice > 0 ? (change / sellPrice) * 100 : 0;

        goldPrices.push({
          name: item.name,
          price: sellPrice,
          unit: 'VNĐ/lượng',
          change: change,
          changePercent: parseFloat(changePercent.toFixed(2)),
          icon: 'gold',
          color: type.color
        });
      }
    });

    // If no data found, return at least 3 items with default values
    if (goldPrices.length === 0) {
      return this.getDefaultGoldPrices();
    }

    return goldPrices.slice(0, 3); // Return top 3
  }

  private mapGasolineData(response: GasolineApiResponse): PriceData[] {
    const gasolinePrices: PriceData[] = [];
    
    // Response is an array of arrays, we'll use the first array (current prices)
    if (!response || response.length === 0 || !response[0]) {
      return this.getDefaultGasolinePrices();
    }

    const currentPrices = response[0];
    const previousPrices = response.length > 2 ? response[2] : [];

    // Map gasoline types with title matching
    const gasolineMapping = [
      { titleMatch: 'RON 95', name: 'Xăng RON 95', color: '#ff4d4f', icon: 'fire' },
      { titleMatch: 'E5 RON 92', name: 'Xăng E5 RON 92', color: '#faad14', icon: 'fire' },
      { titleMatch: 'DO 0,05S', name: 'Dầu Diesel', color: '#52c41a', icon: 'fire' },
      { titleMatch: 'Dầu hỏa', name: 'Dầu Hỏa', color: '#1890ff', icon: 'fire' }
    ];

    gasolineMapping.forEach(mapping => {
      const currentItem = currentPrices.find(item =>
        item.title.includes(mapping.titleMatch)
      );

      if (currentItem) {
        // Get price (prefer zone1_price, fallback to price)
        const currentPrice = currentItem.zone1_price || currentItem.price || 0;
        
        // Calculate change from previous prices
        const previousItem = previousPrices.find(item =>
          item.title.includes(mapping.titleMatch)
        );
        const previousPrice = previousItem ? (previousItem.zone1_price || previousItem.price || 0) : currentPrice;
        const change = currentPrice - previousPrice;
        const changePercent = previousPrice > 0 ? (change / previousPrice) * 100 : 0;

        gasolinePrices.push({
          name: mapping.name,
          price: currentPrice,
          unit: 'VNĐ/lít',
          change: change,
          changePercent: parseFloat(changePercent.toFixed(2)),
          icon: mapping.icon,
          color: mapping.color
        });
      }
    });

    // If no data found, return default values
    if (gasolinePrices.length === 0) {
      return this.getDefaultGasolinePrices();
    }

    return gasolinePrices;
  }

  private parsePrice(priceStr: string): number {
    if (!priceStr) return 0;
    // Remove all non-numeric characters except decimal point and minus sign
    const cleaned = priceStr.replace(/[^\d.-]/g, '');
    return parseFloat(cleaned) || 0;
  }

  private getDefaultGoldPrices(): PriceData[] {
    return [
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

  private getDefaultGasolinePrices(): PriceData[] {
    return [
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
  }
}

// Made with Bob