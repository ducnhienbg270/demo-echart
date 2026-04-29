# 📊 Grafana-Style Monitoring Dashboard

## Overview
This is a comprehensive real-time monitoring dashboard built with Angular, ECharts, and Ng-Zorro, featuring a Grafana-inspired dark theme with dynamic animations and live data updates.

## 🎯 Features

### Real-Time Monitoring
- **Live System Metrics**: CPU, Memory, Disk, and Network usage updated every second
- **Request Monitoring**: Real-time request rate, error tracking, and response time metrics
- **Animated Metric Cards**: Beautiful cards with hover effects, trend indicators, and color-coded warnings
- **Auto-Refresh**: All data automatically updates without page reload

### Interactive Charts

#### 1. **Gauge Charts**
- CPU Usage Gauge with color-coded zones (green → yellow → red)
- Memory Usage Gauge with animated needle
- Real-time value updates with smooth transitions

#### 2. **Real-Time Line Chart**
- Streams CPU, Memory, and Network data
- Smooth area fills with gradient colors
- Shows last 60 data points (1 minute of history)
- Auto-scrolling timeline

#### 3. **Request Rate Bar Chart**
- Displays requests per minute over 2-hour period
- Gradient-filled bars with hover effects
- Historical trend visualization

#### 4. **Response Time Distribution (Pie Chart)**
- Shows response time breakdown by ranges
- Interactive donut chart with emphasis effects
- Percentage distribution display

#### 5. **Server Status Chart**
- Multi-server CPU and Memory comparison
- Grouped bar chart for 5 servers
- Color-coded by metric type

#### 6. **Network Traffic Chart**
- Inbound and Outbound traffic visualization
- Dual-line area chart with smooth curves
- MB/s measurement display

#### 7. **Weekly Traffic Heatmap**
- 24-hour × 7-day traffic intensity visualization
- Color-coded heat zones (blue → red)
- Interactive tooltips with exact values

## 🎨 Design Features

### Dark Theme (Grafana-Style)
- Deep blue-black gradient background (#0f0f1e → #1a1a2e)
- Semi-transparent cards with backdrop blur
- Subtle grid pattern overlay
- Neon glow effects on interactive elements

### Animations
- **Pulse Animation**: Live indicator dot
- **Shimmer Effect**: Card top border animation
- **Float Animation**: Metric card icons
- **Count-Up Animation**: Metric values
- **Fade-In**: Chart loading transitions
- **Hover Effects**: Card lift and glow on hover

### Color Coding
- **Normal**: Blue (#5470c6)
- **Success**: Green (#91cc75)
- **Warning**: Yellow (#fac858)
- **Critical**: Red (#ee6666)
- **Info**: Cyan (#73c0de)

## 📁 Project Structure

```
demo-echart/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── monitoring.service.ts      # Fake data generation service
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts     # Main dashboard logic
│   │   │   ├── dashboard.component.html   # Dashboard template
│   │   │   └── dashboard.component.css    # Grafana-style CSS
│   │   ├── app.component.ts               # Root component
│   │   ├── app.component.html             # Layout with sidebar
│   │   └── app.component.css              # Dark theme layout styles
│   └── styles.css                         # Global dark theme styles
```

## 🔧 Technical Implementation

### Monitoring Service
The `MonitoringService` generates realistic fake data:
- **System Metrics**: Observable streams updating every 1 second
- **Request Metrics**: Observable streams updating every 2 seconds
- **Historical Data**: Pre-generated time series data
- **Heatmap Data**: 24×7 matrix of traffic intensity
- **Server Status**: Multi-server health simulation

### Data Generation
```typescript
// Real-time metrics with variance
getSystemMetrics(): Observable<SystemMetrics>
getRequestMetrics(): Observable<RequestMetrics>

// Historical data for charts
generateHistoricalData(points, baseline, variance): number[]
generateTimeSeriesData(hours): { time, values }
generateHeatmapData(): number[][]
```

### Chart Configuration
All charts use ECharts with:
- Dark theme color schemes
- Smooth animations
- Interactive tooltips
- Responsive sizing
- Auto-update capabilities

## 🚀 Running the Dashboard

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Access
- Development: `http://localhost:4200`
- Default route: `/dashboard` (monitoring dashboard)
- Alternative route: `/map` (map component)

## 📊 Metric Cards

### System Metrics
1. **CPU Usage** - Processor utilization percentage
2. **Memory** - RAM usage percentage
3. **Network** - Network bandwidth utilization
4. **Disk I/O** - Disk read/write activity

### Request Metrics
1. **Requests/min** - Total requests per minute
2. **Errors** - Error count (0-5% of requests)
3. **Avg Response** - Average response time in milliseconds

### Status Indicators
- **Green**: Normal operation (< 60%)
- **Yellow**: Warning level (60-80%)
- **Red**: Critical level (> 80%)
- **Pulsing**: Critical alerts

## 🎭 Animation Details

### Card Animations
- **Shimmer**: Top border light sweep (3s loop)
- **Float**: Icon vertical movement (3s ease-in-out)
- **Hover Lift**: Card raises 5px on hover
- **Glow**: Border color intensifies on hover

### Value Animations
- **Count-Up**: Numbers animate from 0 to value
- **Pulse**: Critical values pulse at 1s intervals
- **Fade-In**: New values fade in smoothly

### Chart Animations
- **Initial Load**: 500ms fade-in with slide-up
- **Data Update**: Smooth transitions between values
- **Hover**: Emphasis effects on data points

## 🔄 Real-Time Updates

### Update Frequencies
- **System Metrics**: 1 second (1 Hz)
- **Request Metrics**: 2 seconds (0.5 Hz)
- **Current Time**: 1 second
- **Chart Data**: On metric update

### Data Retention
- **Real-time Chart**: Last 60 data points (1 minute)
- **Historical Charts**: Pre-generated data
- **Heatmap**: 24 hours × 7 days

## 🎨 Customization

### Changing Colors
Edit `dashboard.component.css`:
```css
.cpu-card {
  --card-color: #5470c6; /* Change to your color */
}
```

### Adjusting Update Frequency
Edit `monitoring.service.ts`:
```typescript
getSystemMetrics(): Observable<SystemMetrics> {
  return interval(1000) // Change interval (ms)
    .pipe(map(() => ({ /* ... */ })));
}
```

### Modifying Thresholds
Edit `dashboard.component.html`:
```html
<div [class.warning]="currentCPU > 80"    <!-- Warning threshold -->
     [class.critical]="currentCPU > 90">  <!-- Critical threshold -->
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: Full layout with all charts
- **Tablet** (< 768px): Stacked layout, smaller charts
- **Mobile** (< 576px): Single column, compact metrics

### Mobile Optimizations
- Reduced chart heights
- Smaller font sizes
- Simplified metric cards
- Touch-friendly interactions

## 🛠️ Technologies Used

- **Angular 16**: Frontend framework
- **ECharts 5.6**: Charting library
- **ngx-echarts 16**: Angular ECharts wrapper
- **Ng-Zorro 16**: UI component library
- **RxJS 7**: Reactive programming
- **TypeScript 5**: Type-safe development

## 📈 Performance

### Optimizations
- **OnPush Change Detection**: Minimizes re-renders
- **Observable Subscriptions**: Efficient data streaming
- **Chart Merging**: Updates without full re-render
- **CSS Animations**: Hardware-accelerated transforms

### Memory Management
- Automatic subscription cleanup on component destroy
- Limited data point retention (60 points max)
- Efficient data structures

## 🎯 Use Cases

1. **System Monitoring**: Track server health and performance
2. **Application Monitoring**: Monitor request rates and errors
3. **Network Monitoring**: Visualize traffic patterns
4. **Capacity Planning**: Analyze usage trends
5. **Alerting**: Visual indicators for critical states

## 🔮 Future Enhancements

- [ ] Add alert configuration
- [ ] Export data to CSV/JSON
- [ ] Custom time range selection
- [ ] Multiple dashboard layouts
- [ ] User preferences storage
- [ ] Real backend integration
- [ ] WebSocket support for real-time data
- [ ] Advanced filtering options

## 📝 Notes

- All data is **fake/simulated** for demonstration
- Metrics use realistic variance and baselines
- Charts auto-update without page refresh
- Fully responsive and mobile-friendly
- Production-ready code structure

## 🤝 Contributing

Feel free to customize and extend this dashboard for your needs!

---

**Made with ❤️ by Bob**