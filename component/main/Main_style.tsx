import styled from '@emotion/styled';

export const StyledSection = styled.section`
	position: relative;
	width: 85%;
	min-height: 100vh;
	border: 2px solid red;
	margin-left: 15%;
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
