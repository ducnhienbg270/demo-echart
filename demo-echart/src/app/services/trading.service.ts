import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';

export interface CandlestickData {
  timestamp: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}

export interface OrderBookItem {
  price: number;
  amount: number;
  total: number;
}

export interface Trade {
  id: number;
  price: number;
  amount: number;
  time: Date;
  type: 'buy' | 'sell';
}

export interface TickerData {
  symbol: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  priceChange: 'up' | 'down' | 'neutral';
}

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  private currentPrice = 45000;
  private basePrice = 45000;
  private priceSubject = new BehaviorSubject<TickerData>(this.getInitialTicker());
  
  constructor() {
    this.startPriceUpdates();
  }

  // Get current price as observable
  getCurrentPrice(): Observable<TickerData> {
    return this.priceSubject.asObservable();
  }

  // Generate initial candlestick data (last 100 candles)
  generateCandlestickData(count: number = 100): CandlestickData[] {
    const data: CandlestickData[] = [];
    let price = this.basePrice;
    const now = Date.now();
    
    for (let i = count; i > 0; i--) {
      const timestamp = now - (i * 60000); // 1 minute per candle
      const open = price;
      const change = (Math.random() - 0.5) * 500;
      const close = open + change;
      const high = Math.max(open, close) + Math.random() * 200;
      const low = Math.min(open, close) - Math.random() * 200;
      const volume = Math.random() * 100 + 50;
      
      data.push({
        timestamp,
        open: parseFloat(open.toFixed(2)),
        close: parseFloat(close.toFixed(2)),
        high: parseFloat(high.toFixed(2)),
        low: parseFloat(low.toFixed(2)),
        volume: parseFloat(volume.toFixed(4))
      });
      
      price = close;
    }
    
    this.currentPrice = price;
    return data;
  }

  // Generate new candlestick (for real-time updates)
  generateNewCandle(previousClose: number): CandlestickData {
    const timestamp = Date.now();
    const open = previousClose;
    const change = (Math.random() - 0.5) * 300;
    const close = open + change;
    const high = Math.max(open, close) + Math.random() * 150;
    const low = Math.min(open, close) - Math.random() * 150;
    const volume = Math.random() * 100 + 50;
    
    this.currentPrice = close;
    
    return {
      timestamp,
      open: parseFloat(open.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      volume: parseFloat(volume.toFixed(4))
    };
  }

  // Generate order book data
  generateOrderBook(): { bids: OrderBookItem[], asks: OrderBookItem[] } {
    const bids: OrderBookItem[] = [];
    const asks: OrderBookItem[] = [];
    const spread = 10;
    
    // Generate bids (buy orders)
    for (let i = 0; i < 15; i++) {
      const price = this.currentPrice - spread - (i * 5);
      const amount = Math.random() * 2 + 0.1;
      bids.push({
        price: parseFloat(price.toFixed(2)),
        amount: parseFloat(amount.toFixed(4)),
        total: parseFloat((price * amount).toFixed(2))
      });
    }
    
    // Generate asks (sell orders)
    for (let i = 0; i < 15; i++) {
      const price = this.currentPrice + spread + (i * 5);
      const amount = Math.random() * 2 + 0.1;
      asks.push({
        price: parseFloat(price.toFixed(2)),
        amount: parseFloat(amount.toFixed(4)),
        total: parseFloat((price * amount).toFixed(2))
      });
    }
    
    return { bids, asks };
  }

  // Generate recent trades
  generateRecentTrades(count: number = 20): Trade[] {
    const trades: Trade[] = [];
    const now = Date.now();
    
    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.5 ? 'buy' : 'sell';
      const priceVariation = (Math.random() - 0.5) * 100;
      const price = this.currentPrice + priceVariation;
      const amount = Math.random() * 1 + 0.01;
      
      trades.push({
        id: now - i * 1000,
        price: parseFloat(price.toFixed(2)),
        amount: parseFloat(amount.toFixed(4)),
        time: new Date(now - i * 1000),
        type
      });
    }
    
    return trades;
  }

  // Get 24h statistics
  get24hStats(): {
    high: number;
    low: number;
    volume: number;
    change: number;
    changePercent: number;
  } {
    const high = this.currentPrice + Math.random() * 1000 + 500;
    const low = this.currentPrice - Math.random() * 1000 - 500;
    const volume = Math.random() * 10000 + 5000;
    const change = this.currentPrice - this.basePrice;
    const changePercent = (change / this.basePrice) * 100;
    
    return {
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      volume: parseFloat(volume.toFixed(2)),
      change: parseFloat(change.toFixed(2)),
      changePercent: parseFloat(changePercent.toFixed(2))
    };
  }

  // Start real-time price updates
  private startPriceUpdates(): void {
    interval(1000).subscribe(() => {
      const change = (Math.random() - 0.5) * 100;
      const oldPrice = this.currentPrice;
      this.currentPrice += change;
      
      const priceChange: 'up' | 'down' | 'neutral' = 
        this.currentPrice > oldPrice ? 'up' : 
        this.currentPrice < oldPrice ? 'down' : 'neutral';
      
      const stats = this.get24hStats();
      
      this.priceSubject.next({
        symbol: 'BTC/USDT',
        price: parseFloat(this.currentPrice.toFixed(2)),
        change24h: stats.change,
        changePercent24h: stats.changePercent,
        high24h: stats.high,
        low24h: stats.low,
        volume24h: stats.volume,
        priceChange
      });
    });
  }

  private getInitialTicker(): TickerData {
    const stats = this.get24hStats();
    return {
      symbol: 'BTC/USDT',
      price: this.currentPrice,
      change24h: stats.change,
      changePercent24h: stats.changePercent,
      high24h: stats.high,
      low24h: stats.low,
      volume24h: stats.volume,
      priceChange: 'neutral'
    };
  }

  // Get popular trading pairs
  getTradingPairs(): { symbol: string, price: number, change: number }[] {
    return [
      { symbol: 'BTC/USDT', price: this.currentPrice, change: 2.5 },
      { symbol: 'ETH/USDT', price: 2500 + Math.random() * 100, change: -1.2 },
      { symbol: 'BNB/USDT', price: 320 + Math.random() * 10, change: 3.8 },
      { symbol: 'SOL/USDT', price: 95 + Math.random() * 5, change: 5.2 },
      { symbol: 'XRP/USDT', price: 0.52 + Math.random() * 0.05, change: -0.8 },
      { symbol: 'ADA/USDT', price: 0.45 + Math.random() * 0.03, change: 1.5 }
    ];
  }
}

// Made with Bob
