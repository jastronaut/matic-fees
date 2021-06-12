import { InjectedConnector } from '@web3-react/injected-connector';

export const injectedConnector = new InjectedConnector({
	supportedChainIds: [
		1, // Mainet
		3, // Ropsten
		4, // Rinkeby
		5, // Göerli
		42, // Kovan,
		137, // matic mainet
	],
});
