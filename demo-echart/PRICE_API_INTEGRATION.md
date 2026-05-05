# Price API Integration Documentation

## Overview
This document describes the integration of real-time price APIs for gold and gasoline prices in the demo-echart application.

## APIs Integrated

### 1. Gold Price API
- **URL**: `https://www.vang.today/api/prices`
- **Purpose**: Fetch real-time gold prices from Vietnamese market
- **Data Retrieved**: 
  - Vàng SJC
  - Vàng PNJ
  - Vàng DOJI
  - Vàng 9999
  - Vàng 24K

### 2. Gasoline Price API
- **URL**: `https://giaxanghomnay.com/api/pvdate/{date}`
- **Purpose**: Fetch current gasoline and diesel prices
- **Data Retrieved**:
  - Xăng RON 95
  - Xăng E5 RON 92
  - Dầu Diesel
  - Dầu Hỏa

## Implementation Details

### Files Created/Modified

#### 1. `src/app/services/price.service.ts` (NEW)
A new service that handles all API calls for price data:
- `getGoldPrices()`: Fetches gold prices from vang.today API
- `getGasolinePrices(date?)`: Fetches gasoline prices from giaxanghomnay.com API
- Data mapping functions to transform API responses into application format
- Fallback to default data if API calls fail
- Price parsing utilities to handle various number formats

**Key Features**:
- Error handling with fallback data
- Type-safe interfaces for API responses
- Automatic data transformation and formatting
- Support for multiple gold and gasoline types

#### 2. `src/app/prices/prices.component.ts` (MODIFIED)
Updated the component to use the new PriceService:
- Removed mock data generation
- Added dependency injection for PriceService
- Implemented `loadPrices()` method to fetch real data
- Added loading state and error handling
- Changed auto-update interval from 5 seconds to 30 seconds (more appropriate for API calls)
- Added error message display

**Changes**:
- Import PriceService and PriceData interface
- Constructor injection of PriceService
- Replace `initializePrices()` with `loadPrices()` that calls the service
- Replace `updatePrices()` simulation with real API calls
- Added `isLoading` and `errorMessage` properties

#### 3. `src/app/prices/prices.component.html` (MODIFIED)
Enhanced the template to show loading and error states:
- Added loading indicator when fetching data
- Added error message display with warning icon
- Updated info note to reflect real API usage (30-second updates)

## Data Flow

```
Component Init
    ↓
loadPrices() called
    ↓
PriceService.getGoldPrices() ──→ API Call ──→ Map Data ──→ Update goldPrices[]
    ↓
PriceService.getGasolinePrices() ──→ API Call ──→ Map Data ──→ Update gasolinePrices[]
    ↓
Display in UI
    ↓
Auto-refresh every 30 seconds
```

## Error Handling

The implementation includes robust error handling:
1. **API Failures**: If an API call fails, the service logs the error and falls back to default data
2. **Network Issues**: Errors are caught and displayed to users with appropriate messages
3. **Data Parsing**: Safe parsing of price strings with fallback to 0 if parsing fails
4. **Missing Data**: Default data is provided if API returns no matching items

## Features

### Real-time Updates
- Prices automatically refresh every 30 seconds
- Last update timestamp displayed in the header
- Smooth animations when prices change

### Visual Feedback
- Loading indicator while fetching data
- Error messages if API calls fail
- Color-coded price changes (green for increase, red for decrease)
- Animated price updates

### Responsive Design
- Works on all screen sizes
- Grid layout adapts to mobile, tablet, and desktop
- Touch-friendly interface

## Testing

To test the integration:
1. Run `npm start` in the demo-echart directory
2. Navigate to the Prices page
3. Observe the loading state
4. Check that real prices are displayed
5. Wait 30 seconds to see auto-refresh
6. Check browser console for any API errors

## API Response Examples

### Gold API Response Structure
```json
{
  "success": true,
  "timestamp": 1777944605,
  "time": "08:30",
  "date": "2026-05-05",
  "count": 12,
  "prices": {
    "VNGSJC": {
      "name": "VN Gold SJC",
      "buy": 163300000,
      "sell": 166300000,
      "change_buy": 0,
      "change_sell": 0,
      "currency": "VND"
    },
    "PQHN24NTT": {
      "name": "PNJ 24K",
      "buy": 162500000,
      "sell": 165500000,
      "change_buy": -500000,
      "change_sell": -500000,
      "currency": "VND"
    }
  }
}
```

### Gasoline API Response Structure
The API returns an array of arrays containing price data:
```json
[
  [
    {
      "id": 7837,
      "created_at": "2026-05-04T17:00:04.000000Z",
      "updated_at": "2026-05-04T17:00:04.000000Z",
      "date": "2026-05-05 00:00:00",
      "title": "Xăng RON 95-III",
      "zone1_price": 23750,
      "zone2_price": 24220
    },
    {
      "id": 7835,
      "created_at": "2026-05-04T17:00:04.000000Z",
      "updated_at": "2026-05-04T17:00:04.000000Z",
      "date": "2026-05-05 00:00:00",
      "title": "Xăng E5 RON 92-II",
      "zone1_price": 22620,
      "zone2_price": 23070
    }
  ],
  [...], // Additional price arrays for different dates
  [...] // Previous prices for comparison
]
```

## Future Enhancements

Potential improvements:
1. Add caching to reduce API calls
2. Implement retry logic for failed requests
3. Add historical price charts
4. Support for more gold types and gasoline brands
5. User preferences for update frequency
6. Push notifications for significant price changes
7. Export price data to CSV/Excel

## Notes

- The gasoline API uses date parameter in format YYYY-MM-DD
- Current implementation uses today's date automatically
- Gold prices are in VNĐ per lượng (tael)
- Gasoline prices are in VNĐ per liter
- Both APIs may have CORS restrictions in production - consider using a proxy if needed

## Made with Bob