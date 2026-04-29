# Demo EChart - Angular 16 Dashboard

This is an Angular 16 project with ng-zorro-antd and ECharts integration, featuring a dashboard with 4 different chart types.

## Features

- **Column Chart**: Monthly sales data visualization
- **Area Chart**: Website traffic trends
- **Line Chart**: Revenue comparison across multiple products
- **Pie Chart**: Market share distribution

## Technologies Used

- Angular 16
- ng-zorro-antd 16 (Ant Design for Angular)
- ECharts 5
- ngx-echarts 16
- TypeScript

## Project Structure

```
demo-echart/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts    # Dashboard logic with chart configurations
│   │   │   ├── dashboard.component.html  # Dashboard template with 4 charts
│   │   │   └── dashboard.component.css   # Dashboard styles
│   │   ├── app.component.html            # Main app template
│   │   ├── app.component.ts              # Main app component
│   │   └── app.module.ts                 # App module with all imports
│   ├── styles.css                        # Global styles
│   └── index.html                        # Main HTML file
├── angular.json                          # Angular configuration
└── package.json                          # Dependencies
```

## Installation

1. Navigate to the project directory:
```bash
cd demo-echart
```

2. Install dependencies (already done):
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

Or use:
```bash
ng serve
```

The application will be available at `http://localhost:4200/` (or another port if 4200 is in use).

## Chart Details

### 1. Column Chart (Bar Chart)
- **Title**: Monthly Sales
- **Data**: Fake monthly sales data for 12 months
- **Type**: Vertical bar chart
- **Color**: Blue (#5470c6)

### 2. Area Chart
- **Title**: Website Traffic
- **Data**: Fake weekly visitor data
- **Type**: Line chart with filled area
- **Color**: Light blue with gradient (#5b8ff9)

### 3. Line Chart
- **Title**: Revenue Comparison
- **Data**: Fake quarterly revenue data for 3 products
- **Type**: Multi-line chart with smooth curves
- **Colors**: Blue, Green, Yellow

### 4. Pie Chart
- **Title**: Market Share
- **Data**: Fake market share data for 5 products
- **Type**: Pie chart with legend
- **Colors**: Various colors for each segment

## Responsive Design

The dashboard is fully responsive and uses ng-zorro's grid system:
- Desktop: 2 columns (2 charts per row)
- Tablet: 2 columns
- Mobile: 1 column (stacked charts)

## Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Notes

- All chart data is fake/mock data for demonstration purposes
- Charts are interactive with tooltips and hover effects
- The dashboard uses ng-zorro's card component for a clean layout
- ECharts are loaded dynamically for better performance

## License

This project is for demonstration purposes.

## Install echart
```bash
npm install echarts@5 ngx-echarts@16 --save
```