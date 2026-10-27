/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(356, 100%, 97%)',
            '100': 'hsl(356, 100%, 94%)',
            '200': 'hsl(356, 100%, 86%)',
            '300': 'hsl(356, 100%, 76%)',
            '400': 'hsl(356, 100%, 64%)',
            '500': 'hsl(356, 100%, 50%)',
            '600': 'hsl(356, 100%, 40%)',
            '700': 'hsl(356, 100%, 32%)',
            '800': 'hsl(356, 100%, 24%)',
            '900': 'hsl(356, 100%, 16%)',
            '950': 'hsl(356, 100%, 10%)',
            DEFAULT: '#cb000f'
        },
        secondary: {
            '50': 'hsl(142, 70%, 97%)',
            '100': 'hsl(142, 70%, 94%)',
            '200': 'hsl(142, 70%, 86%)',
            '300': 'hsl(142, 70%, 76%)',
            '400': 'hsl(142, 70%, 64%)',
            '500': 'hsl(142, 70%, 50%)',
            '600': 'hsl(142, 70%, 40%)',
            '700': 'hsl(142, 70%, 32%)',
            '800': 'hsl(142, 70%, 24%)',
            '900': 'hsl(142, 70%, 16%)',
            '950': 'hsl(142, 70%, 10%)',
            DEFAULT: '#25d366'
        },
        accent: {
            '50': 'hsl(201, 25%, 97%)',
            '100': 'hsl(201, 25%, 94%)',
            '200': 'hsl(201, 25%, 86%)',
            '300': 'hsl(201, 25%, 76%)',
            '400': 'hsl(201, 25%, 64%)',
            '500': 'hsl(201, 25%, 50%)',
            '600': 'hsl(201, 25%, 40%)',
            '700': 'hsl(201, 25%, 32%)',
            '800': 'hsl(201, 25%, 24%)',
            '900': 'hsl(201, 25%, 16%)',
            '950': 'hsl(201, 25%, 10%)',
            DEFAULT: '#23323a'
        },
        'neutral-50': '#e5e7eb',
        'neutral-100': '#ffffff',
        'neutral-200': '#18181b',
        'neutral-300': '#9aa7af',
        'neutral-400': '#2d3e48',
        'neutral-500': '#d1d5db',
        'neutral-600': '#000000',
        'neutral-700': '#7f8c8d',
        'neutral-800': '#6b7280',
        'neutral-900': '#555555',
        background: '#f8fafc',
        foreground: '#18181b'
    },
    fontFamily: {
        sans: [
            'Montserrat',
            'sans-serif'
        ]
    },
    fontSize: {
        '9': [
            '9px',
            {
                lineHeight: '13.5px',
                letterSpacing: '0.45px'
            }
        ],
        '10': [
            '10px',
            {
                lineHeight: '15px'
            }
        ],
        '11': [
            '11px',
            {
                lineHeight: '16.5px',
                letterSpacing: '2.2px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '16px',
                letterSpacing: '0.6px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '19.5px',
                letterSpacing: '0.65px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '20px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '28px'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '36px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '40px'
            }
        ],
        '62': [
            '62px',
            {
                lineHeight: '62px',
                letterSpacing: '-1.55px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '16': '32px',
        '20': '40px',
        '24': '48px',
        '28': '56px',
        '32': '64px',
        '40': '80px',
        '96': '192px',
        '120': '240px'
    },
    borderRadius: {
        xs: '1px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px'
    },
    boxShadow: {
        xs: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
        md: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
        lg: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px',
        xl: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '500': '0.5s',
        '700': '0.7s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0, 0, 0.2, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1280px'
    }
},
  },
};
