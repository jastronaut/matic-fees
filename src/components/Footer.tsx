import styled from 'styled-components';
import { rem } from 'polished';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${rem(70)};

	position: absolute;
	bottom: 0;
	width: 100%;

	> a,
	> a:visited {
		opacity: 0.5;
		color: ${(props) => props.theme.colors.accent};
		transition: 0.2s ease opacity;
	}

	> a:hover {
		transition: 0.2s ease opacity;
		opacity: 1;
	}
`;

export const Footer = () => {
	return (
		<Container>
			<a href="https://github.com/jastronaut/matic-fees" title="github">
				source
			</a>
		</Container>
	);
};
