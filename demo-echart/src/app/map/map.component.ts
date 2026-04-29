import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapOption: EChartsOption = {};

  async ngOnInit(): Promise<void> {
    await this.loadMapData();
    this.initMap();
  }

  private async loadMapData(): Promise<void> {
    try {
      // Load world map from ECharts CDN
      const response = await fetch('https://echarts.apache.org/examples/data/asset/geo/world.json');
      const geoJson = await response.json();
      echarts.registerMap('world', geoJson);
    } catch (error) {
      console.error('Error loading map data:', error);
    }
  }

  private initMap(): void {
    this.mapOption = {
      title: {
        text: 'World Map - Population Density',
        left: 'center',
        top: 20
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>Population Density: {c} (p/km²)'
      },
      visualMap: {
        min: 0,
        max: 1000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']
        },
        left: 'left',
        top: 'bottom'
      },
      series: [
        {
          name: 'Population Density',
          type: 'map',
          map: 'world',
          roam: true,
          emphasis: {
            label: {
              show: true
            },
            itemStyle: {
              areaColor: '#ffd700'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 0.5
          },
          data: [
            { name: 'Vietnam', value: 331 },
            { name: 'Thailand', value: 137 },
            { name: 'Cambodia', value: 92 },
            { name: 'Laos', value: 31 },
            { name: 'Myanmar', value: 83 },
            { name: 'China', value: 153 },
            { name: 'India', value: 464 },
            { name: 'United States', value: 36 },
            { name: 'Brazil', value: 25 },
            { name: 'Russia', value: 9 },
            { name: 'Japan', value: 347 },
            { name: 'Germany', value: 240 },
            { name: 'United Kingdom', value: 281 },
            { name: 'France', value: 119 },
            { name: 'Italy', value: 206 },
            { name: 'Spain', value: 94 },
            { name: 'Australia', value: 3 },
            { name: 'Canada', value: 4 },
            { name: 'South Korea', value: 527 },
            { name: 'Indonesia', value: 151 }
          ]
        }
      ]
    };
  }
}

// Made with Bob
