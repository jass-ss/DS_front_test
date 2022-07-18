import React from 'react';
import { StyledModal, Wrap } from './Modal_style';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import dynamic from 'next/dynamic';

function ModalPost({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { quill, quillRef } = useQuill();

	const modules = {
		toolbar: [
			[{ header: '1' }, { header: '2' }, { font: [] }],
			[{ size: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image', 'video'],
			['clean'],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	};
	const formats = [
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'video',
	];

	return (
		<Wrap>
			<StyledModal>
				<input type='text' />
				<div style={{ width: 500, height: 300 }}>
					<div ref={quillRef} />
				</div>
				<button onClick={() => setOpen(false)}>x</button>
			</StyledModal>
		</Wrap>
	);
}

export default ModalPost;
