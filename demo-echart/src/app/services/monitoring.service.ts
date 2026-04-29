import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
  timestamp: Date;
}

export interface RequestMetrics {
  timestamp: Date;
  requests: number;
  errors: number;
  responseTime: number;
}

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  private baselineCPU = 45;
  private baselineMemory = 60;
  private baselineDisk = 35;
  private baselineNetwork = 50;
  private baselineRequests = 1000;
  private baselineResponseTime = 150;

  constructor() { }

  // Generate real-time system metrics
  getSystemMetrics(): Observable<SystemMetrics> {
    return interval(1000).pipe(
      map(() => ({
        cpu: this.generateMetric(this.baselineCPU, 10, 0, 100),
        memory: this.generateMetric(this.baselineMemory, 8, 0, 100),
        disk: this.generateMetric(this.baselineDisk, 5, 0, 100),
        network: this.generateMetric(this.baselineNetwork, 15, 0, 100),
        timestamp: new Date()
      }))
    );
  }

  // Generate real-time request metrics
  getRequestMetrics(): Observable<RequestMetrics> {
    return interval(2000).pipe(
      map(() => {
        const requests = this.generateMetric(this.baselineRequests, 200, 500, 2000);
        return {
          timestamp: new Date(),
          requests: Math.round(requests),
          errors: Math.round(requests * (Math.random() * 0.05)), // 0-5% error rate
          responseTime: this.generateMetric(this.baselineResponseTime, 50, 50, 500)
        };
      })
    );
  }

  // Generate historical data for charts
  generateHistoricalData(points: number, baseline: number, variance: number): number[] {
    const data: number[] = [];
    for (let i = 0; i < points; i++) {
      data.push(this.generateMetric(baseline, variance, 0, 100));
    }
    return data;
  }

  // Generate time series data
  generateTimeSeriesData(hours: number): { time: string[], values: number[] } {
    const time: string[] = [];
    const values: number[] = [];
    const now = new Date();
    
    for (let i = hours * 60; i >= 0; i -= 5) {
      const date = new Date(now.getTime() - i * 60000);
      time.push(this.formatTime(date));
      values.push(this.generateMetric(70, 15, 30, 100));
    }
    
    return { time, values };
  }

  // Generate heatmap data
  generateHeatmapData(): number[][] {
    const data: number[][] = [];
    for (let i = 0; i < 24; i++) {
      const row: number[] = [];
      for (let j = 0; j < 7; j++) {
        row.push(Math.round(Math.random() * 100));
      }
      data.push(row);
    }
    return data;
  }

  // Generate response time distribution
  generateResponseTimeDistribution(): { range: string[], count: number[] } {
    return {
      range: ['0-50ms', '50-100ms', '100-200ms', '200-500ms', '500ms+'],
      count: [
        Math.round(Math.random() * 5000 + 3000),
        Math.round(Math.random() * 3000 + 2000),
        Math.round(Math.random() * 2000 + 1000),
        Math.round(Math.random() * 1000 + 500),
        Math.round(Math.random() * 500 + 100)
      ]
    };
  }

  // Generate server status data
  generateServerStatus(): { name: string, status: string, cpu: number, memory: number }[] {
    const servers = ['Server-01', 'Server-02', 'Server-03', 'Server-04', 'Server-05'];
    return servers.map(name => ({
      name,
      status: Math.random() > 0.1 ? 'online' : 'warning',
      cpu: this.generateMetric(50, 20, 0, 100),
      memory: this.generateMetric(60, 15, 0, 100)
    }));
  }

  private generateMetric(baseline: number, variance: number, min: number, max: number): number {
    const value = baseline + (Math.random() - 0.5) * variance * 2;
    return Math.max(min, Math.min(max, value));
  }

  private formatTime(date: Date): string {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }
}

// Made with Bob
