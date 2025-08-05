import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
				futuristic: ['Orbitron', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				// Enhanced immersive colors
				'neural-purple': 'hsl(var(--neural-purple))',
				'cyber-cyan': 'hsl(var(--cyber-cyan))',
				'plasma-orange': 'hsl(var(--plasma-orange))',
				// Additional brand colors (HSL format)
				'vayana-red': 'hsl(353 97% 45%)',
				'vayana-blue': 'hsl(221 73% 31%)',
				'vayana-blue-darker': 'hsl(221 77% 25%)',
				'vayana-green': 'hsl(98 41% 31%)',
				'vayana-gray': 'hsl(240 2% 60%)',
				'vayana-purple': 'hsl(292 49% 36%)',
				'vayana-orange': 'hsl(14 74% 52%)',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(20px)' },
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' },
					'50%': { boxShadow: '0 0 60px hsl(var(--primary) / 0.8)' },
				},
				'constellation': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'100%': { transform: 'scale(1.05) rotate(360deg)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'neuralPulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--neural-purple) / 0.3), inset 0 0 20px hsl(var(--neural-purple) / 0.1)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--neural-purple) / 0.6), inset 0 0 40px hsl(var(--neural-purple) / 0.2)',
						transform: 'scale(1.02)'
					},
				},
				'dataFlow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'morphBackground': {
					'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
				},
				'holographicShift': {
					'0%, 100%': { filter: 'hue-rotate(0deg)' },
					'25%': { filter: 'hue-rotate(90deg)' },
					'50%': { filter: 'hue-rotate(180deg)' },
					'75%': { filter: 'hue-rotate(270deg)' },
				},
				'liquidMotion': {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)', borderRadius: '50%' },
					'33%': { transform: 'scale(1.1) rotate(120deg)', borderRadius: '60% 40%' },
					'66%': { transform: 'scale(0.9) rotate(240deg)', borderRadius: '40% 60%' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'pulse-slow': 'pulse-slow 4s infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 4s ease-in-out infinite',
				'constellation': 'constellation 20s linear infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'neural-pulse': 'neuralPulse 2s ease-in-out infinite',
				'data-flow': 'dataFlow 2s linear infinite',
				'morph-bg': 'morphBackground 8s ease-in-out infinite',
				'holographic': 'holographicShift 6s ease-in-out infinite',
				'liquid': 'liquidMotion 10s ease-in-out infinite',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
				'card-gradient': 'linear-gradient(225deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)',
				'token-gradient': 'linear-gradient(90deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%)',
				'vayana-gradient': 'linear-gradient(90deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%)',
				'neural-mesh': 'var(--gradient-mesh)',
				'neural-gradient': 'var(--gradient-neural)',
				'hologram': 'var(--gradient-hologram)',
				'shimmer-bg': 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.2), transparent)',
				'cyber-grid': 'radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)',
			},
			backgroundSize: {
				'cyber-grid': '40px 40px',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;