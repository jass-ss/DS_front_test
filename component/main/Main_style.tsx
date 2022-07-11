import styled from '@emotion/styled';

export const StyledSection = styled.section`
	position: relative;
	width: 100%;
	min-height: 100vh;
	border: 2px solid red;
`;

export const StyledNav = styled.div`
	border: 2px solid plum;
	& {
		Link {
			width: 100px;
			height: 100px;
		}
	}
`;
