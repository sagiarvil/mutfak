// React Theme — extracted from https://izmirmutfakbanyo.com.tr
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '9': string;
    '10': string;
    '11': string;
    '12': string;
    '13': string;
    '14': string;
    '16': string;
    '18': string;
    '30': string;
    '36': string;
    '62': string;
 *   };
 *   space: {
    '2': string;
    '32': string;
    '40': string;
    '48': string;
    '56': string;
    '64': string;
    '80': string;
    '192': string;
    '240': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
 *   };
 *   shadows: {
    xs: string;
    md: string;
    lg: string;
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#cb000f",
    "secondary": "#25d366",
    "accent": "#23323a",
    "background": "#f8fafc",
    "foreground": "#18181b",
    "neutral50": "#e5e7eb",
    "neutral100": "#ffffff",
    "neutral200": "#18181b",
    "neutral300": "#9aa7af",
    "neutral400": "#2d3e48",
    "neutral500": "#d1d5db",
    "neutral600": "#000000",
    "neutral700": "#7f8c8d",
    "neutral800": "#6b7280",
    "neutral900": "#555555"
  },
  "fonts": {
    "body": "'Montserrat', sans-serif"
  },
  "fontSizes": {
    "9": "9px",
    "10": "10px",
    "11": "11px",
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "30": "30px",
    "36": "36px",
    "62": "62px"
  },
  "space": {
    "2": "2px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "56": "56px",
    "64": "64px",
    "80": "80px",
    "192": "192px",
    "240": "240px"
  },
  "radii": {
    "xs": "1px",
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "full": "9999px"
  },
  "shadows": {
    "xs": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    "md": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px",
    "lg": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
    "xl": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#cb000f",
      "light": "hsl(356, 100%, 55%)",
      "dark": "hsl(356, 100%, 25%)"
    },
    "secondary": {
      "main": "#25d366",
      "light": "hsl(142, 70%, 64%)",
      "dark": "hsl(142, 70%, 34%)"
    },
    "background": {
      "default": "#f8fafc",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#18181b",
      "secondary": "#23323a"
    }
  },
  "typography": {
    "fontFamily": "'Montserrat', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "900",
      "lineHeight": "40px"
    },
    "h2": {
      "fontSize": "30px",
      "fontWeight": "900",
      "lineHeight": "36px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "14px",
      "fontWeight": "400",
      "lineHeight": "20px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
  ]
};

export default theme;
