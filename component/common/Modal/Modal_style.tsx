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

export const StyledModal = styled.div`
	position: fixed;
	min-width: 20rem;
	background: #fff;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	p {
		position: relative;
	}
`;

export const WrapEditor = styled.div`
	width: 100%;
	max-height: 550px;
	overflow-y: auto;
`;

export const StyledModalPost = styled.div`
	position: absolute;
	background: #fff;
	width: 665px;
	min-height: 761px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 0 40px 16px;
	border-radius: 24px;

	h1 {
		font: 700 20px/1.5 'Pretendard';
		margin: 40px 10px;
	}

	form {
		.editor-top {
			width: 100%;
			display: flex;
			justify-content: space-between;

			input[type='text'] {
				display: inline-block;
				max-width: 75%;
				padding: 5px 20px 5px 20px;
				background: #f4f4f4;
				border: none;
				border-radius: 24px;
				font: 500 20px/1.5 'Pretendard';
				color: #5b5b5b;
			}
			.editor-menu {
				display: inline-block;
				right: 0;
				width: 25%;
				> button {
					border: none;
					background: none;
					padding: 0;
					:active > svg {
						width: 36px;
						height: auto;
					}
				}
			}
		}

		.ProseMirror {
			width: 98%;
			min-height: 450px;
			margin-top: 16px;
			font: 400 16px/24px 'Pretendard';
			border: none;
			border-top: 1px solid #dbdbdb;
			border-bottom: 1px solid #dbdbdb;
			padding: 10px 10px 0 10px;

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
				left: auto;
				transform: none;
			}
			img {
				display: inline-block;
				max-width: 200px;
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
		input[type='submit'] {
			width: 100%;
			height: 65px;
			margin: 30px 0 10px;
			font: 700 16px/1.5 'Pretendard';
			text-align: center;
			color: #ffff;
			background: #212c6a;
			border-radius: 8px;
			border: none;
		}
	}
	.tag {
		width: 100%;
		margin: 30px 10px 0 10px;
		font: 700 16px/1.5 'Pretendard';
		.tag-value {
			padding: 6px 8px;
			background: #cdd3ef;
			margin: 0 5px;
			border-radius: 24px;
			font: 400 14px/1.5 'arial';
			&:nth-of-type(1) {
				margin-left: 25px;
			}
		}
		.tag-close {
			color: #8e8e8e;
			border: none;
			background: none;
			font-size: 14px;
			margin: 0 0 0 3px;
			padding: 0;
			vertical-align: middle;
			> svg {
				width: 20px;
				height: auto;
			}
		}
		> input[type='text'] {
			min-width: 80px;
			border: none;
			margin: 0 10px;
			padding: 0 0 0 10px;
			font: 400 14px/1.5 'arial';
		}
	}
	.close {
		position: absolute;
		top: 25px;
		right: 17px;
		border: none;
		background: none;
		font: 400 30px/1.5 'arial';
	}
`;

export const StyledModalSignUp = styled.div`
	position: fixed;
	width: 320px;
	background: #fff;
	border-radius: 24px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
		h1{
			font: 700 20px/1.5 'Pretendard';
			color: #424242;
			text-align: center;
		}
		p{
			position: relative;
			font: 400 12px/0 'Pretendard';
			color: #8E8E8E;
			&:nth-of-type(1){
				margin-left: 5px;
			}
			&:nth-of-type(2){
				text-align: right;
				margin-right:10px;
			}
		}
		form{
				width:90%;
				margin: 1rem auto 0;
				input, textarea{
					width:100%;
					font: 400 14px/21px 'Pretendard';
					color: #5B5B5B;
					border-radius: 8px;
					border: 1px solid #5B5B5B;
					resize: none;
					padding: 10px;
				}
				input{
					height: 2rem;
				}
				textarea{
					margin-top:5px;
				}
				input[type='submit']{
					color:#fff;
					background:#212C6A;
					margin: 0.5rem auto;
					border:none;
				}
		}
		.close{
			position: absolute;
			top:15px;
			right: 0.7rem;
			font: 600 20px/30px 'Pretendard';
			color:#5B5B5B;
			border: none;
			background: none;
		}
	}
`;

export const StyledModalJob = styled.div`
	position: fixed;
	width: 320px;
	background: #fff;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 24px;

	h1 {
		font: 700 20px/1.5 'Pretendard';
		color: #424242;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	p {
		position: relative;
	}

	button {
		display: block;
		position: relative;
		margin: 0 auto;
		color: #424242;
		background: none;
		width: 90%;
		height: 2rem;
		font: bold 24px/1.2 'Pretendard';
		border: none;
		border-radius: 8px;
		&:hover {
			background: #cdd3ef;
		}
	}
	.close,
	.prev {
		position: absolute;
		top: 17px;
		width: 24px;
		height: 24px;
		color: #5b5b5b;
		font: 400 20px/1 'arial';
		&:hover {
			background: none;
		}
	}
	.close {
		right: 0.5rem;
	}
	.prev {
		left: 0.5rem;
		width: 32px;
		svg {
			font: 400 24px/1 'arial';
		}
	}
	.submit {
		position: relative;
		margin: 0.5rem auto;
		background: #212c6a;
		color: #fff;
		font: 700 14px/21px 'Pretendard';
		&:hover {
			background: #212c6a;
		}
	}
`;
