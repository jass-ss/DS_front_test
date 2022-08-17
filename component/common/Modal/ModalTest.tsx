import React, { useEffect, useRef, useState } from 'react';
import { StyledModal, Wrap, StyledModalTest } from './Modal_style';

type Props = {
	children?: React.ReactNode;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

//function Modal({ children }: { children: React.ReactNode }) {
function ModalTest({ setOpen }: Props) {
	const target = useRef<HTMLDivElement>(null);
	const [commentOpen, setCommentOpen] = useState(false);
	const arr = [1, 2, 3, 4, 5];

	useEffect(() => {
		if (target.current) {
			console.log(target.current);
			target.current.scrollIntoView();
		}
	}, [commentOpen]); // 댓글컴포넌트가 생겨서 target.currnet가 null이 아니게 된 후 scrollIntoView() 이동을 해야하므로 useEffect()로 commentOpen을 감시.
	return (
		<Wrap>
			<StyledModalTest>
				<div className='wrap'>
					<div className='test1'>
						블라블라
						<button
							onClick={() => {
								setCommentOpen(!commentOpen);
							}}>
							댓글
						</button>
					</div>
					{commentOpen && (
						<div className='comment-list' ref={target}>
							{arr.map((a, idx) => {
								return (
									<div className='comment' key={idx}>
										<div className='profile-image'>이미지</div>
										<div className='text'>
											<p>{a}</p>
											<p>댓글 텍스트</p>
										</div>
									</div>
								);
							})}
						</div>
					)}
				</div>
				<button className='close' onClick={() => setOpen(false)}>
					X
				</button>
			</StyledModalTest>
		</Wrap>
	);
}

export default ModalTest;
