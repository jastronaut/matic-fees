import { PrimaryBlue, Gray2, Gray4, TextLight } from './colors';

export enum ThemeNames {
	Light = 'Light',
	Dark = 'Dark',
}

export type Theme = {
	name: ThemeNames;
	colors: {
		background: string;
		backgroundModal: string;
		accent: string;
		border: string;
		borderDark: string;
	};
	text: {
		color: string;
		colorDark: string;
		colorLight: string;
	};
};

export const lightTheme: Theme = {
	name: ThemeNames.Light,
	text: {
		color: PrimaryBlue,
		colorDark: 'black',
		colorLight: TextLight,
	},
	colors: {
		background: '#f3f3f3',
		backgroundModal: 'white',
		accent: '#8247e5',
		border: Gray2,
		borderDark: Gray4,
	},
};

export const darkTheme: Theme = {
	name: ThemeNames.Dark,
	text: {
		color: PrimaryBlue,
		colorDark: 'white',
		colorLight: '#94aff1',
	},
	colors: {
		background: 'black',
		backgroundModal: '#2f2f2f',
		accent: '#8247e5',
		border: '#2d2d2d',
		borderDark: '#616161',
	},
};

export const themes = {
	[ThemeNames.Light]: lightTheme,
	[ThemeNames.Dark]: darkTheme,
};
