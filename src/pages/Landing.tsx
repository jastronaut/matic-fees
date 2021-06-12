import styled from 'styled-components';
import { rem } from 'polished';
import { LargeHeader } from '../components/typography/LargeHeader';
import numeral from 'numeral';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: ${rem(30)};
`;

const NumberDetail = styled.span`
	color: ${(props) => props.theme.colors.accent};
`;

const LandingHeader = styled(LargeHeader)`
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	animation: 0.25s ease-in fade-in;

	max-width: ${rem(1000)};
	margin-bottom: ${rem(20)};
	text-align: center;
	transition: 0.5s ease color;

	:last-of-type {
		margin-bottom: 0;
	}

	@media screen and (max-width: 800px) {
		max-width: ${rem(600)};
	}
`;

export const FiatOptions = {
	USD: '$',
	GBP: '£',
	EUR: '€',
	PHP: '₱',
	MEX: '$',
	CAD: '$',
};

export type Props = {
	gasFeeMatic: number;
	gasFiat: number;
	fiatSymbol: string;
	totalGas: number;
	totalTx: number;
	gasPerTx: number;
	failedTxs: number;
	failedCost: number;
};

const LoadingHeader = styled(LandingHeader)`
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	animation: 0.5s linear infinite spin;
`;

export const LandingLoading = () => (
	<Container>
		<LoadingHeader>🤔</LoadingHeader>
	</Container>
);

export const LandingEmpty = () => (
	<Container>
		<LandingHeader>Connect your wallet to see MATIC gas stats.</LandingHeader>
	</Container>
);

export const Landing = (props: Props) => {
	return (
		<Container>
			<LandingHeader>
				{`You've spent `}
				<NumberDetail>{numeral(props.gasFeeMatic).format('0.00000')}</NumberDetail>
				{` MATIC on gas. Right now, that's `}
				<NumberDetail>{`${props.fiatSymbol}${numeral(props.gasFiat).format(
					'0,0.0000',
				)}`}</NumberDetail>
			</LandingHeader>
			<LandingHeader>
				{`You used `}
				<NumberDetail>{numeral(props.totalGas).format('0,0')}</NumberDetail> gas to send{' '}
				<NumberDetail>{numeral(props.totalTx).format('0,0')}</NumberDetail> transactions,
				with an average price of{' '}
				<NumberDetail>{numeral(props.gasPerTx).format('0,0.0000')}</NumberDetail>
				{` gwei.`}
			</LandingHeader>
			<LandingHeader>
				<NumberDetail>{numeral(props.failedTxs).format('0,0')}</NumberDetail> of them
				failed, costing you{' '}
				<NumberDetail>
					{props.failedCost <= 0
						? 'nothing'
						: numeral(props.failedCost).format('0,0.0000')}
				</NumberDetail>{' '}
				MATIC.
			</LandingHeader>
		</Container>
	);
};
