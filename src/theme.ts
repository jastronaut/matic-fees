import { PrimaryBlue, Gray2 } from './colors';

export enum ThemeNames {
	Light = 'Light',
	Dark = 'Dark',
}

export type Theme = {
	name: ThemeNames;
	colors: {
		background: string;
		accent: string;
		border: string;
	};
	text: {
		color: string;
		colorDark: string;
	};
};

export const lightTheme: Theme = {
	name: ThemeNames.Light,
	text: {
		color: PrimaryBlue,
		colorDark: 'black',
	},
	colors: {
		background: '#f3f3f3',
		accent: '#8247e5',
		border: Gray2,
	},
};

export const darkTheme: Theme = {
	name: ThemeNames.Dark,
	text: {
		color: PrimaryBlue,
		colorDark: 'white',
	},
	colors: {
		background: 'black',
		accent: '#8247e5',
		border: '#2d2d2d',
	},
};

export const themes = {
	[ThemeNames.Light]: lightTheme,
	[ThemeNames.Dark]: darkTheme,
};
