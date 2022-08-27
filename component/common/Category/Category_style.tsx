import styled from '@emotion/styled';

export const Nav = styled.nav`
	position: fixed;
	background: linear-gradient(179.87deg, #151c43 16.31%, #e49ba8 146.31%);
	border: 1px solid;
	width: 314px;
	height: 100vh;
	& {
		ul {
			width: 100%;
			margin-top: 38px;
			color: #fff;
			list-style: none;
			position: relative;
			border: 1px solid #ffff;
			padding: 0;
			li {
				margin: 24px 20px;
				&:hover {
					background: rgba(255, 255, 255, 0.2);
				}
			}
		}
	}
`;
