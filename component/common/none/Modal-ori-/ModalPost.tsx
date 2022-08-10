import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Tiptap from '../Tiptap';
import {
	StyledModal,
	StyledModalPost,
	StyledModalSignUp,
	Wrap,
} from './Modal_style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type modalProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setModal?: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

export const ModalPost = ({ setOpen }: modalProps) => {
	const ref = useRef<any>(null);
	useEffect(() => {
		setTimeout(() => ref.current.focus());
	}, []);
	return (
		<Wrap ref={ref} tabIndex={0}>
			<StyledModalPost>
				<Tiptap setOpen={setOpen} />
				<button onClick={() => setOpen(false)}>x</button>
			</StyledModalPost>
		</Wrap>
	);
};

export const ModalSignIn = ({ setOpen }: modalProps) => {
	<Wrap>
		<StyledModal>
			<button onClick={() => setOpen(false)} arira-aria-label='닫기'>
				X
			</button>
		</StyledModal>
	</Wrap>;
};

export const ModalSignOut = ({ setOpen }: modalProps) => {
	<Wrap>
		<StyledModal>
			<button onClick={() => setOpen(false)} arira-label='닫기'>
				X
			</button>
		</StyledModal>
	</Wrap>;
};

export const ModalSingUp = ({
	setOpen,
	setModal,
}: modalProps): ReactJSXElement => {
	const nickname = useRef<HTMLInputElement>(null);
	const text = useRef<HTMLTextAreaElement>(null);

	const [word, setWord] = useState(0);

	const mutation = useMutation(
		async (data: object) => axios.put(`백엔드`, { data }, {}),
		{
			onSuccess: () => {
				if (setModal)
					setModal(<ModalJob setOpen={setOpen} setModal={setModal} />);
			},
			onError: () => alert('죄송합니다, 잠시후 다시 시도하여 주세요'),
		}
	);

	//const queryClient = useQueryClient();

	const postProfile = (e: React.FormEvent) => {
		e.preventDefault();
		const value = {
			nickname: nickname.current?.value,
			text: text.current?.value,
		};
		//mutation.mutate(value); //일단 이 모달에서 선택된 정보를 서버로 보냈는데, 다음 모달에서 두 모달의 정보 한꺼번에 보내는게 나을지 고민.
		console.log(value);
		//setModal(<ModalJob setOpen={setOpen} setModal={setModal} />);
	};

	return (
		<Wrap>
			<StyledModalSignUp>
				<h1>프로필 입력</h1>
				<form onSubmit={postProfile}>
					<input
						type='text'
						name='닉네임'
						placeholder='닉네임을 입력해주세요'
						maxLength={5}
						ref={nickname}
						onKeyDown={(e) => {
							if (e.key === ' ') e.preventDefault();
						}}
					/>
					<p>5자 이하로 입력해주세요</p>
					<textarea
						name='자기소개'
						cols={10}
						rows={5}
						placeholder='자기소개를 입력해주세요'
						ref={text}
						maxLength={255}
						onChange={() =>
							text.current ? setWord(text.current.value.length) : null
						}
					/>
					<p>{word}/255</p>
					<input type='submit' value='다음' />
				</form>
				<button onClick={() => setOpen(false)} arira-label='닫기'>
					X
				</button>
			</StyledModalSignUp>
		</Wrap>
	);
};

export const ModalJob = ({ setOpen, setModal }: modalProps) => {
	const jobs = ['개발자', '디자이너', '기획자', '마케팅'];

	//나중에 드롭다운으로 메뉴 더 생길수도.

	const [job, setJob] = useState({});

	const mutation = useMutation(
		async (data: object) => await axios.put(`백엔드`, { data }, {}),
		{
			onSuccess: () => setOpen(false),
			onError: () => alert('죄송합니다, 잠시후 다시 시도해주세요'),
		}
	);

	return (
		<Wrap>
			<StyledModal>
				<h1>직군 선택</h1>
				{jobs.map((j, idx) => {
					return (
						<button
							key={idx}
							aria-label={j + ` 직군 선택`}
							onClick={() => setJob({ ...job, job: j })}>
							{j}
						</button>
					);
				})}
				<button onClick={() => mutation.mutate(job)}>가입완료</button>

				<button
					onClick={() => {
						if (setModal)
							setModal(<ModalSingUp setOpen={setOpen} setModal={setModal} />);
					}}
					arira-label='이전 단계로'>
					<ArrowBackIcon />
				</button>

				<button onClick={() => setOpen(false)} arira-label='닫기'>
					X
				</button>
			</StyledModal>
		</Wrap>
	);
};
