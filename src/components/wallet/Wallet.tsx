import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { useWeb3React } from '@web3-react/core';
import { TextDark } from '../../colors';
import { ConnectionModal } from './ConnectionModal';
import { WalletStatus } from './WalletStatus';
import { Web3Provider } from '@ethersproject/providers';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ConnectionType } from '../../hooks/useEagerConnect';

const ConnectWalletButton = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: ${rem(10)} ${rem(24)};
	width: ${rem(125)};
	height: ${rem(24)};
	font-size: ${rem(16)};
	color: ${TextDark};
	border-radius: ${rem(8)};
	transition: 250ms opacity ease;
	cursor: pointer;
	color: white;
	background: ${(props) => props.theme.colors.accent};

	&:hover {
		opacity: 0.8;
	}
`;

export const Wallet = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { account, active, deactivate } = useWeb3React<Web3Provider>();
	// eslint-disable-next-line
	const [_, setCachedConnection] = useLocalStorage<ConnectionType | null>(
		'cachedConnection',
		null,
	);

	useEffect(() => {
		if (account) {
			setIsOpen(false);
			console.log(account);
		}
	}, [account, active, isOpen]);

	return (
		<>
			<ConnectionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
			{!active && !account && (
				<ConnectWalletButton onClick={() => setIsOpen(!isOpen)}>
					{'Connect Wallet'}
				</ConnectWalletButton>
			)}
			{active && account && (
				<WalletStatus
					onClick={() => {
						deactivate();
						setCachedConnection(null);
					}}
					account={account}
				/>
			)}
		</>
	);
};
