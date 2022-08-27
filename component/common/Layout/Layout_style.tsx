import styled from '@emotion/styled';

export const StyledLayout = styled.div`
	width: 100%;
	position: relative;
	background: #f4f4f4;
`;

/* 카테고리는 fixed여서 block처럼 위치가 계산되지 않는다.	
	그러므로 Inner를 margin:0 auto 하면 브라우저 정중앙에 위치하게 된다. 카테고리의 위치를 대신 잡아줄 wrapper div를 추가하거나, Inner의 margin-left를 계산해줘야한다. ( '브라우저 너비에서 카테고리 너비빼고, Inner 너비 뺀 후에 남은 값의 절반'을 카테고리의 너비와 합친 만큼이 margin-left.)
	
*/
export const Inner = styled.div`
	width: 996px;
	border: 2px solid plum;
	margin-left: calc(((100% - (314px + 996px)) / 2) + 314px);
	.wrap {
		position: relative;
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding-left: 24px;
		section {
			background: #ffff;
			min-height: 150vh;
		}
	}
`;
