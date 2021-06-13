import React, { createContext, ReactNode, useReducer } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Theme, themes, ThemeNames } from './theme';

type Props = {
	children: ReactNode;
	hasThemeSupport?: boolean;
};

enum ThemeActionsNames {
	TOGGLE = 'TOGGLE',
	SET = 'SET',
}

type ToggleAction = {
	type: ThemeActionsNames.TOGGLE;
};

type SetAction = {
	type: ThemeActionsNames.SET;
	payload: Theme;
};

type Actions = ToggleAction | SetAction;

type ACTIONS = {
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
};

export const ThemeDispatchContext = createContext<ACTIONS>({} as ACTIONS);

export const ThemeProvider = ({ children }: Props) => {
	const [themePreference, setThemePreference] = useLocalStorage<ThemeNames>(
		'theme-preference',
		ThemeNames.Dark,
	);

	const reducer = (theme: Theme, action: Actions): Theme => {
		switch (action.type) {
			case ThemeActionsNames.TOGGLE:
				const newTheme =
					theme.name === ThemeNames.Light
						? themes[ThemeNames.Dark]
						: themes[ThemeNames.Light];

				setThemePreference(newTheme.name);

				return newTheme;
			case ThemeActionsNames.SET:
				return action.payload ?? themes[ThemeNames.Dark];
			default:
				return theme;
		}
	};

	const [state, dispatch] = useReducer(
		reducer,
		themePreference === ThemeNames.Dark ? { ...themes.Dark } : { ...themes.Light },
	);

	const actions = {
		toggleTheme: () => dispatch({ type: ThemeActionsNames.TOGGLE }),
		setTheme: (theme: Theme) => dispatch({ type: ThemeActionsNames.SET, payload: theme }),
	};

	return (
		<StyledThemeProvider theme={state}>
			<ThemeDispatchContext.Provider value={actions}>
				{children}
			</ThemeDispatchContext.Provider>
		</StyledThemeProvider>
	);
};
