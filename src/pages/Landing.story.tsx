import { Landing as LandingComponent, FiatOptions, Props } from './Landing';

const numberOptions = {
	control: {
		type: 'number',
		min: '0',
	},
};

const LandingStory = {
	title: 'App/Landing',
	component: LandingComponent,
	argTypes: {
		gasFeeMatic: numberOptions,
		gasFiat: numberOptions,
		totalGas: numberOptions,
		totalTx: numberOptions,
		gasPerTx: numberOptions,
		fiatSymbol: {
			options: FiatOptions,
			control: { type: 'radio' },
		},
	},
};

export default LandingStory;

// @ts-ignore
const Template = (args: Props) => <LandingComponent {...args} />;

export const LandingPrimary = Template.bind({});
// @ts-ignore
LandingPrimary.args = {
	gasFeeMatic: 0.123,
	gasFiat: 0.617,
	fiatSymbol: FiatOptions.USD,
	totalGas: 1000,
	totalTx: 100,
	gasPerTx: 10,
};
