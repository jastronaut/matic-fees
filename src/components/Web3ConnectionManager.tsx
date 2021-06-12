import { useState, useEffect } from 'react';
import { useEagerConnect } from '../hooks/useEagerConnect';
import { useInactiveListener } from '../hooks/useInactiveListener';

type Props = {
	children: JSX.Element;
};

export const Web3ConnectionManager = ({ children }: Props) => {
	// eslint-disable-next-line
	const [showLoader, setShowLoader] = useState(false);

	/**
	 * Attempt to eager-connect to an injected provider (Metamask etc..) if it exists
	 * & has granted access already.
	 */
	const hasTriedEager = useEagerConnect();

	/**
	 * When there's no account connected, react to logins (broadly speaking) on
	 * the injected provider, if it exists.
	 */
	useInactiveListener(!hasTriedEager);

	/* This hook handles the delayed loader state */
	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowLoader(true);
		}, 600);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	/**
	 * On page load, do nothing until an attempt has been made to connect to
	 * the injected connector
	 */
	if (!hasTriedEager) {
		return null;
	}

	return children;
};
