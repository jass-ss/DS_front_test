import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Cancel } from '@mui/icons-material';
import { WrapEditor } from '../none/Modal/Modal_style';
import Tiptap_menu from './Tiptap_menu';
import Tiptap_submit from './Tiptap_submit';
import Tiptap_post from './Tiptap_post';

type Props = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Tiptap = ({ setOpen }: Props) => {
	console.log('tiiptap start');

	const getValue = () => {
		console.log('val');
		const titleValue = title.current?.value;
		const targetCurrent = ref.current;
		return {
			title: titleValue,
			target: targetCurrent,
		};
	};

	const title = useRef<HTMLInputElement>(null);
	const ref = useRef<HTMLInputElement>(null);
	const tag = useRef<HTMLInputElement>(null);

	const [inputSize, setInputSize] = useState<number>();
	const [tagList, setTaglist] = useState<string[]>([]);

	const inputSizing = () => {
		const num = title.current?.value.length;
		num ? setInputSize(num * 2) : null;
	};

	const makeTag = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key == '#') e.preventDefault();
		if ((e.key === 'Enter' || e.key === ' ') && tag.current) {
			e.preventDefault();
			setTaglist([...tagList, tag.current.value]);
			tag.current.value = '';
		}
	};

	return (
		<>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className='editor-top'>
					<input
						type='text'
						ref={title}
						size={inputSize}
						onChange={inputSizing}
						placeholder='제목을 입력해주세요'
					/>
				</div>

				<WrapEditor ref={ref}>
					<Tiptap_post />
				</WrapEditor>

				{/*컴포넌트로 */}
				<div className='tag'>
					<label htmlFor='tag'>태그</label>
					{tagList.map((t, idx) => {
						return (
							<span
								className='tag-value'
								onClick={() => {}}
								key={idx}
								tabIndex={0}>
								{` #` + t}
								<button className='tag-close' onClick={() => {}} tabIndex={0}>
									<Cancel />
								</button>
							</span>
						);
					})}
					{tagList.length < 5 ? (
						<input
							type='text'
							id='tag'
							onKeyDown={makeTag}
							ref={tag}
							placeholder='태그 입력'
						/>
					) : null}
				</div>
				<Tiptap_submit getValue={getValue} setOpen={setOpen} />
			</form>
		</>
	);
};

export default Tiptap;

/* 
에디터지만, 에디터 자체를 css로 손볼 수 있고, 이미지도 불러올 수 있고, 이미지 div 조절로 사이즈 조절 가능 + next.js, typescript 지원 => 드뎌 찾았다 tiptapㅠㅠ 

툴바의 디자인 기능 모두 다 커스터마이징 해야하지만 오히려 조아~ 굿

타입스크립트로 editor를 넘기는 부분이 (또 props 부분이) 어려웟찌만, 하다보니 되었다?@
const editor 여기에 마우스 갖다대니까 타입 알려주길래 갖다붙였다.

문제사항 1 : 글자가 엔터쳐도 다음줄로 안넘어감
=> 이거 왜이러나 싶어서 검사도구로 확인해보니, 엔터를 치면 <p>태그가 만들어지는데 (quill에디터도 그랬다.) position:absolute 였다. 그러니까 엔터쳐봤자, 똑같은 그 자리이지..
부모 엘리먼트에 p{position:relative}로 설정하니 해결.

문제사항2 : 마우스를 갖다대기만해도, 클릭만 해도 리렌더링이 발생, 그렇기 때문에 
버튼 클릭으로 효과주는게 한박자씩 딜레이됨
=> 나는 menubar 컴포넌트를 tiptap컴포넌트 안에다 만들고 리턴으로 버튼컴포넌트들을 만들었다
그러므로, 버튼을 눌러서 리렌더링이 발생하고, tiptap 컴포넌트가 그려지면서 그 안의 menubar 화살표함수가 return으로 버튼컴포넌트를 만들고, 그 후에 에디터 컴포넌트가 만들어진 것 같다.. 리액트 샘플코드를 보니 menubar 화살표함수는 tiptap컴포넌트 밖에 있어서 그대로 수정하니 밀림없이 바로 적용되었다.    

내일은 두근두근 이미지 extend 해봐야지.
*/

/*
	const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) {
			alert('다시 시도해주세요');
		} else {
			const file = event.target.files[0];
			const reader = new FileReader();
			reader.onloadend = (e) => {
				const data = e.target?.result;
				if (typeof data == 'string') {
					console.log(data);
					setImage(data);
					editor.chain().focus().setImage({ src: image }).run();
				}
			};
			reader.readAsDataURL(file);
		}
	};
 */

/*const MenuBar = ({ editor }: { editor: Editor | null }) => {
	if (!editor) {
		return null;
	}

	return (
		<>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={editor.isActive('italic') ? 'is-active' : ''}>
				<FormatItalic />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={editor.isActive('strike') ? 'is-active' : ''}>
				<FormatStrikethrough />
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCode().run()}
				className={editor.isActive('code') ? 'is-active' : ''}>
				<Code />
			</button>
			<button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
				clear marks
			</button>
			<button onClick={() => editor.chain().focus().clearNodes().run()}>
				clear nodes
			</button>
			<button
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={editor.isActive('paragraph') ? 'is-active' : ''}>
				paragraph
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
				h1
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
				h2
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
				h3
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
				h4
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
				h5
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
				h6
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={editor.isActive('bulletList') ? 'is-active' : ''}>
				bullet list
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={editor.isActive('orderedList') ? 'is-active' : ''}>
				ordered list
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={editor.isActive('codeBlock') ? 'is-active' : ''}>
				code block
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={editor.isActive('blockquote') ? 'is-active' : ''}>
				blockquote
			</button>
			<button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
				horizontal rule
			</button>
			<button onClick={() => editor.chain().focus().setHardBreak().run()}>
				hard break
			</button>
			<button onClick={() => editor.chain().focus().undo().run()}>undo</button>
			<button onClick={() => editor.chain().focus().redo().run()}>redo</button>
			{image && (
				<img
					src={image}
					alt='유저 이미지'
					style={{ width: '250px', height: '250px' }}
				/>
			)}
		</>
		);
	}; */
