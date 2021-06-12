import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { StylesProvider } from '@material-ui/core/styles';
import { Web3ConnectionManager } from './components/Web3ConnectionManager';
import { ThemeProvider } from './ThemeProvider';

import { GasCalculator } from './components/GasCalculator';

const getLibrary = (provider: any): Web3Provider => {
	const library = new Web3Provider(provider);

	return library;
};

export const App = () => {
	return (
		<StylesProvider injectFirst>
			<ThemeProvider>
				<Web3ReactProvider getLibrary={getLibrary}>
					<Web3ConnectionManager>
						<GasCalculator />
					</Web3ConnectionManager>
				</Web3ReactProvider>
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
