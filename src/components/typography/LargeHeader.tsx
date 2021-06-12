import styled from 'styled-components';
import { rem } from 'polished';

export const LargeHeader = styled.div`
	font-weight: 700;
	font-size: ${rem(42)};
	color: ${(props) => props.theme.text.colorDark};
`;
