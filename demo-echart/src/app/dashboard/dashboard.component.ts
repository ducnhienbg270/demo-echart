import { Component, OnInit, OnDestroy } from '@angular/core';
import { EChartsOption } from 'echarts';
import { MonitoringService, SystemMetrics, RequestMetrics } from '../services/monitoring.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  
  // Current time for header
  currentTime: Date = new Date();
  
  // Metric cards data
  currentCPU: number = 0;
  currentMemory: number = 0;
  currentDisk: number = 0;
  currentNetwork: number = 0;
  currentRequests: number = 0;
  currentErrors: number = 0;
  currentResponseTime: number = 0;
  
  // Chart options
  cpuGaugeOption: EChartsOption = {};
  memoryGaugeOption: EChartsOption = {};
  realtimeChartOption: EChartsOption = {};
  requestsChartOption: EChartsOption = {};
  responseTimeChartOption: EChartsOption = {};
  heatmapOption: EChartsOption = {};
  serverStatusOption: EChartsOption = {};
  networkTrafficOption: EChartsOption = {};
  
  // Real-time data storage
  private timeData: string[] = [];
  private cpuData: number[] = [];
  private memoryData: number[] = [];
  private networkData: number[] = [];
  private maxDataPoints = 60;

  constructor(private monitoringService: MonitoringService) {}

  ngOnInit(): void {
    this.initializeCharts();
    this.startRealTimeMonitoring();
    
    // Update current time every second
    const timeSub = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
    this.subscriptions.push(timeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initializeCharts(): void {
    this.initCPUGauge();
    this.initMemoryGauge();
    this.initRealtimeChart();
    this.initRequestsChart();
    this.initResponseTimeChart();
    this.initHeatmap();
    this.initServerStatus();
    this.initNetworkTraffic();
  }

  private startRealTimeMonitoring(): void {
    // Subscribe to system metrics
    const systemSub = this.monitoringService.getSystemMetrics().subscribe(
      (metrics: SystemMetrics) => {
        this.updateSystemMetrics(metrics);
      }
    );
    this.subscriptions.push(systemSub);

    // Subscribe to request metrics
    const requestSub = this.monitoringService.getRequestMetrics().subscribe(
      (metrics: RequestMetrics) => {
        this.updateRequestMetrics(metrics);
      }
    );
    this.subscriptions.push(requestSub);
  }

  private updateSystemMetrics(metrics: SystemMetrics): void {
    this.currentCPU = Math.round(metrics.cpu);
    this.currentMemory = Math.round(metrics.memory);
    this.currentDisk = Math.round(metrics.disk);
    this.currentNetwork = Math.round(metrics.network);

    // Update gauges
    this.updateGauge(this.cpuGaugeOption, metrics.cpu);
    this.updateGauge(this.memoryGaugeOption, metrics.memory);

    // Update real-time chart
    this.updateRealtimeChart(metrics);
  }

  private updateRequestMetrics(metrics: RequestMetrics): void {
    this.currentRequests = metrics.requests;
    this.currentErrors = metrics.errors;
    this.currentResponseTime = Math.round(metrics.responseTime);
  }

  private updateGauge(option: EChartsOption, value: number): void {
    if (option.series && Array.isArray(option.series)) {
      (option.series[0] as any).data[0].value = Math.round(value);
      option = { ...option };
    }
  }

  private updateRealtimeChart(metrics: SystemMetrics): void {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    
    this.timeData.push(time);
    this.cpuData.push(metrics.cpu);
    this.memoryData.push(metrics.memory);
    this.networkData.push(metrics.network);

    if (this.timeData.length > this.maxDataPoints) {
      this.timeData.shift();
      this.cpuData.shift();
      this.memoryData.shift();
      this.networkData.shift();
    }

    this.realtimeChartOption = {
      ...this.realtimeChartOption,
      xAxis: {
        ...(this.realtimeChartOption.xAxis as any),
        data: this.timeData
      },
      series: [
        {
          ...(this.realtimeChartOption.series as any)[0],
          data: this.cpuData
        },
        {
          ...(this.realtimeChartOption.series as any)[1],
          data: this.memoryData
        },
        {
          ...(this.realtimeChartOption.series as any)[2],
          data: this.networkData
        }
      ]
    };
  }

  private initCPUGauge(): void {
    this.cpuGaugeOption = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.6, '#5470c6'],
              [0.8, '#fac858'],
              [1, '#ee6666']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5
          }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 12,
          distance: -60,
          formatter: (value: number) => {
            return value + '%';
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 16,
          color: '#464646'
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '0%'],
          valueAnimation: true,
          formatter: (value: number) => {
            return Math.round(value) + '%';
          },
          color: 'auto'
        },
        data: [{
          value: 0,
          name: 'CPU Usage'
        }]
      }]
    };
  }

  private initMemoryGauge(): void {
    this.memoryGaugeOption = {
      series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.6, '#91cc75'],
              [0.8, '#fac858'],
              [1, '#ee6666']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5
          }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 12,
          distance: -60,
          formatter: (value: number) => {
            return value + '%';
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 16,
          color: '#464646'
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '0%'],
          valueAnimation: true,
          formatter: (value: number) => {
            return Math.round(value) + '%';
          },
          color: 'auto'
        },
        data: [{
          value: 0,
          name: 'Memory Usage'
        }]
      }]
    };
  }

  private initRealtimeChart(): void {
    this.realtimeChartOption = {
      title: {
        text: 'Real-time System Metrics',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['CPU', 'Memory', 'Network'],
        top: 30,
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999',
          formatter: '{value}%'
        },
        splitLine: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      series: [
        {
          name: 'CPU',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 2,
            color: '#5470c6'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(84, 112, 198, 0.5)'
              }, {
                offset: 1,
                color: 'rgba(84, 112, 198, 0.1)'
              }]
            }
          },
          data: []
        },
        {
          name: 'Memory',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 2,
            color: '#91cc75'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(145, 204, 117, 0.5)'
              }, {
                offset: 1,
                color: 'rgba(145, 204, 117, 0.1)'
              }]
            }
          },
          data: []
        },
        {
          name: 'Network',
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 2,
            color: '#fac858'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(250, 200, 88, 0.5)'
              }, {
                offset: 1,
                color: 'rgba(250, 200, 88, 0.1)'
              }]
            }
          },
          data: []
        }
      ]
    };
  }

  private initRequestsChart(): void {
    const timeSeriesData = this.monitoringService.generateTimeSeriesData(2);
    
    this.requestsChartOption = {
      title: {
        text: 'Request Rate',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: timeSeriesData.time,
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        },
        splitLine: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      series: [{
        name: 'Requests/min',
        type: 'bar',
        data: timeSeriesData.values.map(v => Math.round(v * 10)),
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#5470c6'
            }, {
              offset: 1,
              color: '#91cc75'
            }]
          }
        },
        emphasis: {
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#91cc75'
              }, {
                offset: 1,
                color: '#5470c6'
              }]
            }
          }
        }
      }]
    };
  }

  private initResponseTimeChart(): void {
    const distribution = this.monitoringService.generateResponseTimeDistribution();
    
    this.responseTimeChartOption = {
      title: {
        text: 'Response Time Distribution',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} requests ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 40,
        textStyle: {
          color: '#fff'
        }
      },
      series: [{
        name: 'Response Time',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#1a1a1a',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
          }
        },
        labelLine: {
          show: false
        },
        data: distribution.range.map((range, index) => ({
          value: distribution.count[index],
          name: range,
          itemStyle: {
            color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de'][index]
          }
        }))
      }]
    };
  }

  private initHeatmap(): void {
    const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
                   '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
                   '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
                   '21:00', '22:00', '23:00'];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data = this.monitoringService.generateHeatmapData();
    
    const heatmapData = data.flatMap((row, i) => 
      row.map((value, j) => [j, i, value])
    );

    this.heatmapOption = {
      title: {
        text: 'Weekly Traffic Heatmap',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      backgroundColor: 'transparent',
      tooltip: {
        position: 'top',
        formatter: (params: any) => {
          return `${days[params.data[0]]} ${hours[params.data[1]]}<br/>Traffic: ${params.data[2]}%`;
        }
      },
      grid: {
        height: '70%',
        top: '15%',
        left: '10%'
      },
      xAxis: {
        type: 'category',
        data: days,
        splitArea: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        }
      },
      yAxis: {
        type: 'category',
        data: hours,
        splitArea: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        }
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '5%',
        textStyle: {
          color: '#fff'
        },
        inRange: {
          color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
      },
      series: [{
        name: 'Traffic',
        type: 'heatmap',
        data: heatmapData,
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  }

  private initServerStatus(): void {
    const servers = this.monitoringService.generateServerStatus();
    
    this.serverStatusOption = {
      title: {
        text: 'Server Status',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['CPU', 'Memory'],
        top: 30,
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: servers.map(s => s.name),
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        }
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999',
          formatter: '{value}%'
        },
        splitLine: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      series: [
        {
          name: 'CPU',
          type: 'bar',
          data: servers.map(s => s.cpu),
          itemStyle: {
            color: '#5470c6'
          }
        },
        {
          name: 'Memory',
          type: 'bar',
          data: servers.map(s => s.memory),
          itemStyle: {
            color: '#91cc75'
          }
        }
      ]
    };
  }

  private initNetworkTraffic(): void {
    const timeSeriesData = this.monitoringService.generateTimeSeriesData(1);
    
    this.networkTrafficOption = {
      title: {
        text: 'Network Traffic',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 16
        }
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Inbound', 'Outbound'],
        top: 30,
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: timeSeriesData.time,
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999'
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#666'
          }
        },
        axisLabel: {
          color: '#999',
          formatter: '{value} MB/s'
        },
        splitLine: {
          lineStyle: {
            color: '#333'
          }
        }
      },
      series: [
        {
          name: 'Inbound',
          type: 'line',
          smooth: true,
          data: timeSeriesData.values.map(v => (v * 0.8).toFixed(2)),
          lineStyle: {
            width: 2,
            color: '#73c0de'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(115, 192, 222, 0.5)'
              }, {
                offset: 1,
                color: 'rgba(115, 192, 222, 0.1)'
              }]
            }
          }
        },
        {
          name: 'Outbound',
          type: 'line',
          smooth: true,
          data: timeSeriesData.values.map(v => (v * 0.6).toFixed(2)),
          lineStyle: {
            width: 2,
            color: '#ee6666'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(238, 102, 102, 0.5)'
              }, {
                offset: 1,
                color: 'rgba(238, 102, 102, 0.1)'
              }]
            }
          }
        }
      ]
    };
  }
}

// Made with Bob
