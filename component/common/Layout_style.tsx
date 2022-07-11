import styled from '@emotion/styled';

export const StyledLayout = styled.div`
	width: 100%;
	position: relative;
`;

export const Inner = styled.div`
	width: 1280px;
	height: 100vh;
	margin: 0 auto;
	border: 2px solid plum;
	p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: plum;
		font: bold 1rem 'arial';
	}
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
