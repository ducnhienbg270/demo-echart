import { Component, OnInit, OnDestroy } from '@angular/core';
import { TradingService, CandlestickData, OrderBookItem, TickerData } from '../services/trading.service';
import { EChartsOption } from 'echarts';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements OnInit, OnDestroy {
  // Chart options
  candlestickOption: EChartsOption = {};
  
  // Trading data
  ticker: TickerData | null = null;
  orderBook: { bids: OrderBookItem[], asks: OrderBookItem[] } = { bids: [], asks: [] };
  candlestickData: CandlestickData[] = [];
  
  // Subscriptions
  private priceSubscription?: Subscription;
  private chartUpdateSubscription?: Subscription;
  private orderBookSubscription?: Subscription;
  
  // Animation states
  priceAnimationClass = '';
  
  constructor(private tradingService: TradingService) {}

  ngOnInit(): void {
    // Initialize candlestick data
    this.candlestickData = this.tradingService.generateCandlestickData(100);
    this.updateCandlestickChart();
    
    // Subscribe to real-time price updates
    this.priceSubscription = this.tradingService.getCurrentPrice().subscribe(ticker => {
      this.ticker = ticker;
      this.triggerPriceAnimation(ticker.priceChange);
    });
    
    // Update order book every 500ms
    this.orderBookSubscription = interval(500).subscribe(() => {
      this.orderBook = this.tradingService.generateOrderBook();
    });
    
    // Update chart every 3 seconds with new candle
    this.chartUpdateSubscription = interval(3000).subscribe(() => {
      const lastCandle = this.candlestickData[this.candlestickData.length - 1];
      const newCandle = this.tradingService.generateNewCandle(lastCandle.close);
      
      // Keep only last 100 candles
      if (this.candlestickData.length >= 100) {
        this.candlestickData.shift();
      }
      
      this.candlestickData.push(newCandle);
      this.updateCandlestickChart();
    });
    
    // Initial order book
    this.orderBook = this.tradingService.generateOrderBook();
  }

  ngOnDestroy(): void {
    this.priceSubscription?.unsubscribe();
    this.chartUpdateSubscription?.unsubscribe();
    this.orderBookSubscription?.unsubscribe();
  }

  private updateCandlestickChart(): void {
    const dates = this.candlestickData.map(d => new Date(d.timestamp).toLocaleTimeString());
    const values = this.candlestickData.map(d => [d.open, d.close, d.low, d.high]);
    const volumes = this.candlestickData.map(d => d.volume);

    this.candlestickOption = {
      animation: true,
      backgroundColor: '#1a1a2e',
      grid: [
        {
          left: '5%',
          right: '5%',
          top: '10%',
          height: '60%'
        },
        {
          left: '5%',
          right: '5%',
          top: '75%',
          height: '15%'
        }
      ],
      xAxis: [
        {
          type: 'category',
          data: dates,
          boundaryGap: true,
          axisLine: { lineStyle: { color: '#8392A5' } },
          axisLabel: {
            color: '#8392A5',
            fontSize: 10
          },
          splitLine: { show: false },
          min: 'dataMin',
          max: 'dataMax'
        },
        {
          type: 'category',
          gridIndex: 1,
          data: dates,
          boundaryGap: true,
          axisLine: { lineStyle: { color: '#8392A5' } },
          axisLabel: { show: false },
          splitLine: { show: false },
          min: 'dataMin',
          max: 'dataMax'
        }
      ],
      yAxis: [
        {
          scale: true,
          splitLine: {
            lineStyle: { color: '#2a2a3e' }
          },
          axisLine: { lineStyle: { color: '#8392A5' } },
          axisLabel: {
            color: '#8392A5',
            fontSize: 10
          }
        },
        {
          scale: true,
          gridIndex: 1,
          splitNumber: 2,
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false }
        }
      ],
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: [0, 1],
          start: 70,
          end: 100
        }
      ],
      series: [
        {
          type: 'candlestick',
          name: 'BTC/USDT',
          data: values,
          itemStyle: {
            color: '#26a69a',
            color0: '#ef5350',
            borderColor: '#26a69a',
            borderColor0: '#ef5350'
          }
        },
        {
          type: 'bar',
          name: 'Volume',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: volumes,
          itemStyle: {
            color: function(params: any) {
              const dataIndex = params.dataIndex;
              return values[dataIndex][1] >= values[dataIndex][0] ? '#26a69a80' : '#ef535080';
            }
          }
        }
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        backgroundColor: 'rgba(26, 26, 46, 0.95)',
        borderColor: '#404040',
        textStyle: {
          color: '#fff'
        },
        formatter: function(params: any) {
          const candleData = params[0];
          if (!candleData) return '';
          
          const data = candleData.data;
          return `
            <div style="padding: 5px;">
              <div style="margin-bottom: 5px; font-weight: bold;">${candleData.name}</div>
              <div>Open: <span style="color: #26a69a;">${data[0]}</span></div>
              <div>Close: <span style="color: ${data[1] >= data[0] ? '#26a69a' : '#ef5350'};">${data[1]}</span></div>
              <div>Low: <span style="color: #8392A5;">${data[2]}</span></div>
              <div>High: <span style="color: #8392A5;">${data[3]}</span></div>
              ${params[1] ? `<div>Volume: <span style="color: #8392A5;">${params[1].data.toFixed(2)}</span></div>` : ''}
            </div>
          `;
        }
      }
    };
  }

  private triggerPriceAnimation(change: 'up' | 'down' | 'neutral'): void {
    if (change === 'up') {
      this.priceAnimationClass = 'price-up';
    } else if (change === 'down') {
      this.priceAnimationClass = 'price-down';
    }
    
    setTimeout(() => {
      this.priceAnimationClass = '';
    }, 500);
  }

  getChangeClass(): string {
    if (!this.ticker) return '';
    return this.ticker.changePercent24h >= 0 ? 'positive' : 'negative';
  }

  formatNumber(num: number, decimals: number = 2): string {
    return num.toFixed(decimals);
  }
}

// Made with Bob
