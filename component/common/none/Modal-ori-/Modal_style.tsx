import styled from '@emotion/styled';

export const Wrap = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	left: 0;
	top: 0;
	z-index: 5;
	background: #000000ad;
`;

export const WrapEditor = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow-y: auto;
`;

export const StyledModal = styled.div`
	position: fixed;
	min-width: 20rem;
	background: #fff;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
		p{
			position: relative;
		}
	}
`;

export const StyledModalPost = styled.div`
	position: fixed;
	width: 35rem;
	height: 30rem;
	background: #e5e5e5;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	.ProseMirror {
		width: 100%;
		min-height: 5rem;
		margin: 1rem 0;
		pre {
			background: #0d0d0d;
			color: #fff;
			font-family: 'JetBrainsMono', monospace;
			padding: 0.75rem 1rem;
			border-radius: 0.5rem;

			code {
				color: inherit;
				padding: 0;
				background: none;
				font-size: 0.8rem;
			}
		}
		p {
			position: relative;
			margin: 4px;
			top: auto;
			transform: translate(-50%, 0%);
		}
		img {
			display: inline-block;
			max-width: 150px;
			max-height: 250px;
			margin: 4px;
			object-fit: cover;

			&.ProseMirror-selectednode {
				outline: 3px solid #68cef8;
			}
		}
		blockquote {
			padding-left: 1rem;
			border-left: 2px solid #0d0d0d;
			margin: 1rem;
		}
	}
`;

export const StyledModalSignUp = styled.div`
	position: fixed;
	min-width: 15rem;
	background: #fff;
	border-radius: 15px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
		h1{
			font-size: 24px;
			text-align: center;
		}
		p{
			position: relative;
			font-size: 14px;
			color:#888;
			&:nth-of-child(1){
				margin-left: 1rem;
			}
			&:nth-of-child(2){
				text-align: right
			}
		}
		form{
				width:90%;
				margin: 1rem auto 0;
				input, textarea{
					width:100%;
					font-size: 16px;
					border-radius: 5px;
				}
				input{
					height: 2rem;
				}
				input['submit']{
					background:blue;
				}
		}
		span{
			position: absolute;
			top:0;
			right: 0.5rem;
			font-size: 16px;
		}
	}
`;
