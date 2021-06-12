import { useContext } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Gray1, Gray4, TextDark } from '../colors';
import { MoonIcon } from './icons/Moon';
import { Wallet } from './wallet/Wallet';
import { ThemeDispatchContext } from '../ThemeProvider';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: ${rem(70)};
	border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const ContentLeft = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: ${rem(32)};
`;

const Name = styled.div`
	color: ${(props) => props.theme.text.colorDark};
	font-size: ${rem(16)};
	margin-left: ${rem(5)};
`;

const ContentRight = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const ThemeToggleButton = styled.div`
	margin: auto ${rem(22)} auto ${rem(10)};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: ${rem(44)};
	width: ${rem(44)};
	transition: 250ms background ease, 250ms fill ease;
	cursor: pointer;
	border-radius: ${rem(8)};

	&:hover {
		background: ${Gray1};
		path {
			fill: ${TextDark};
		}
	}
`;

const StyledMoonIcon = styled(MoonIcon)`
	path {
		transition: 250ms ease;
		fill: ${Gray4};
	}
`;

export const Navbar = () => {
	const dispatch = useContext(ThemeDispatchContext);
	return (
		<Container>
			<ContentLeft>
				<Name>{'matic-fees.wtf'}</Name>
			</ContentLeft>
			<ContentRight>
				<Wallet />
				<ThemeToggleButton onClick={() => dispatch.toggleTheme()}>
					<StyledMoonIcon />
				</ThemeToggleButton>
			</ContentRight>
		</Container>
	);
};
