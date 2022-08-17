import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyledArticle, StyledSection, TextBar } from './Main_style';
import EditIcon from '@mui/icons-material/Edit';
import { fData } from '../../firebase';
import { ModalPost } from '../common/Modal/ModalPost';
import parse from 'react-html-parser';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import { ContextUser } from '../../pages/_app';
import { ModalSignUp } from '../common/Modal/ModalSignUp';
import ModalTest from '../common/Modal/ModalTest';

const Main = (/*{ data }: any*/) => {
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState<boolean | React.ReactNode>(false);
	const [list, setList] = useState<
		[] | firebase.default.firestore.DocumentData[]
	>([]);
	const ref = useRef<HTMLElement>(null);
	const context = useContext(ContextUser);

	useEffect(() => {
		if (context.user.job === '') {
			setOpen(true);
			setModal(
				<ModalSignUp
					setOpen={setOpen}
					setModal={setModal}
					token={`${context.token}`}
				/>
			);
		}
	}, []);

	/*
	const { data, isLoading, isError } = useQuery(
		['posts'],
		async () => {
			console.log('getdata');
			const res = await fData
				.collection('ds-Post')
				.orderBy('postOrder', 'desc')
				.limit(5)
				.get();
			const doc = res.docs.map((d) => d.data());
			console.log(data);
			setList(doc);
		},
		{
			staleTime: Infinity,
			cacheTime: Infinity,
		}
	);

	if (isLoading) return <p>loading</p>;
*/

	const more = () => {};

	return (
		<>
			<StyledSection>
				<TextBar>
					<button
						onClick={() => {
							setOpen(true);
							setModal(<ModalPost setOpen={setOpen} />);
						}}>
						<EditIcon />
					</button>
					<button onClick={() => setOpen(true)}>x</button>
				</TextBar>

				{list.map((l, idx) => {
					const now = dayjs();
					return (
						<StyledArticle key={idx} onClick={more}>
							<div className='user-info'>
								{/*<img /> 유저 프로필 이미지 */}
								<span>{l.userId}</span>
								<p>{l.postCreated}</p>
								{l.preImage ? (
									<img src={l.preImage} alt='이미지 미리보기' />
								) : null}
								<div className='prev'>
									{l.postTitle ? <p>{l.postTitle}</p> : null}
									<p>{l.preText}</p>
								</div>
							</div>
						</StyledArticle>
					);
				})}

				{/* side components*/}

				<button
					onClick={() => {
						setOpen(true);
						setModal(<ModalSignUp setOpen={setOpen} setModal={setModal} />);
					}}>
					프로필 설정 테스트
				</button>

				<button
					onClick={() => {
						setOpen(true);
						setModal(<ModalTest setOpen={setOpen} />);
					}}>
					댓글 테스트
				</button>

				{open && modal}
			</StyledSection>
		</>
	);
};

export default Main;
