import React from 'react';
import Tiptap from '../Tiptap';
import { StyledModal, Wrap } from './Modal_style';
function ModalPost({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Wrap>
			<StyledModal>
				<input type='text' />
				<Tiptap />
				<button onClick={() => setOpen(false)}>x</button>
			</StyledModal>
		</Wrap>
	);
}

export default ModalPost;
