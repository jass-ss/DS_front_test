import styled from '@emotion/styled';

export const StyledLayout = styled.div`
	width: 100%;
	position: relative;
	main {
		overflow: hidden;
	}
`;

export const Inner = styled.div`
	width: 1280px;
	display: flex;
	justify-content: center;
	min-height: 100vh;
	border: 2px solid plum;
	margin-left: calc(100vw - 1280px);
`;
