import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Column Chart Options
  columnChartOption: EChartsOption = {};
  
  // Area Chart Options
  areaChartOption: EChartsOption = {};
  
  // Line Chart Options
  lineChartOption: EChartsOption = {};
  
  // Pie Chart Options
  pieChartOption: EChartsOption = {};

  ngOnInit(): void {
    this.initColumnChart();
    this.initAreaChart();
    this.initLineChart();
    this.initPieChart();
  }

  private initColumnChart(): void {
    this.columnChartOption = {
      title: {
        text: 'Monthly Sales',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110, 130, 180, 160, 190, 210, 240],
          itemStyle: {
            color: '#5470c6'
          }
        }
      ]
    };
  }

  private initAreaChart(): void {
    this.areaChartOption = {
      title: {
        text: 'Website Traffic',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Visitors',
          type: 'line',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          areaStyle: {
            color: 'rgba(91, 143, 249, 0.3)'
          },
          itemStyle: {
            color: '#5b8ff9'
          },
          smooth: true
        }
      ]
    };
  }

  private initLineChart(): void {
    this.lineChartOption = {
      title: {
        text: 'Revenue Comparison',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Product A', 'Product B', 'Product C'],
        top: 30
      },
      xAxis: {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Product A',
          type: 'line',
          data: [150, 230, 224, 218],
          itemStyle: {
            color: '#5470c6'
          },
          smooth: true
        },
        {
          name: 'Product B',
          type: 'line',
          data: [120, 182, 191, 234],
          itemStyle: {
            color: '#91cc75'
          },
          smooth: true
        },
        {
          name: 'Product C',
          type: 'line',
          data: [320, 332, 301, 334],
          itemStyle: {
            color: '#fac858'
          },
          smooth: true
        }
      ]
    };
  }

  private initPieChart(): void {
    this.pieChartOption = {
      title: {
        text: 'Market Share',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 30
      },
      series: [
        {
          name: 'Market Share',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Product A', itemStyle: { color: '#5470c6' } },
            { value: 735, name: 'Product B', itemStyle: { color: '#91cc75' } },
            { value: 580, name: 'Product C', itemStyle: { color: '#fac858' } },
            { value: 484, name: 'Product D', itemStyle: { color: '#ee6666' } },
            { value: 300, name: 'Product E', itemStyle: { color: '#73c0de' } }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}

// Made with Bob
