# Feature Comparison Matrix

A responsive pricing/feature comparison table built with React, Vite, and Tailwind CSS. This project demonstrates vertical alignment across rows to ensure checkmarks align perfectly with column headers.

## Project Structure

```
.
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main App component with feature matrix
    └── index.css       # Global styles with Tailwind directives
```

## Features

- **Responsive Design**: Mobile-friendly pricing table layout
- **Vertical Alignment**: Checkmarks align perfectly with column headers
- **Modern Styling**: Uses Tailwind CSS for clean, professional appearance
- **Three Tiers**: Basic, Pro, and Enterprise pricing options
- **Accessibility**: Semantic HTML table structure

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

## Project Notes

This layout is specifically designed to train models to detect:
- Column alignment issues
- Header-to-cell width mismatches
- Vertical spacing inconsistencies
- "Drift" in column positioning

### Future Bug
The Pro column has a commented note indicating where a future bug can be introduced:
- Change `'text-center'` to `'text-left'` on the Pro column to misalign checkmarks and test detection
