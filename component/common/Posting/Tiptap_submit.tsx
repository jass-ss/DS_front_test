import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uuid } from 'uuidv4';
import dayjs from 'dayjs';
import { fData, fStorage } from '../../../firebase';
import Tiptap_loading from './Tiptap_loading';

type Props = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	getValue: () => {
		title: string | undefined;
		target: HTMLInputElement | null;
	};
};

function Tiptap_submit({ getValue, setOpen }: Props) {
	console.log('submit start');

	const [loading, setLoading] = useState(false);

	const queryClient = useQueryClient();
	const mutation = useMutation(
		async (post: object) => await fData.collection('ds-Post').add(post),
		{
			onSuccess: () => {
				setOpen(false);
				queryClient.invalidateQueries(['posts']);
			},
			onError: () => console.log('err'),
		}
	);

	const click = () => {
		const { title, target } = getValue();
		postSubmit(title, target);
	};

	const postSubmit = async (
		title: string | undefined,
		target: HTMLInputElement | null
	) => {
		console.log('전송!!!');

		const standard = dayjs('2022-07-28');
		const date = dayjs();
		const dateFormat = date.format('YY/MM/DD HH:mm:ss');

		if (target !== null) {
			let content: string | undefined;
			let preText: string | undefined;
			const targetEle = target;
			const imgs = targetEle.querySelectorAll('img');

			setLoading(true);

			if (imgs.length != 0) {
				//img element가 있을 때
				//로딩 이미지 처리.
				const imgsArr = Array.from(imgs); //유사 배열은 map(), Promise.all 할 수 없으므로.
				const imgSrc: string[] = [];

				const setAttr = imgsArr.map(async (i, idx) => {
					try {
						const imgRef = fStorage.ref().child(`test/${uuid()}`);
						const res = await imgRef.putString(i.src, 'data_url');
						const resUrl = await res.ref.getDownloadURL();
						//imgSrc.push(resUrl); //모든 이미지를 미리보기 하고싶다면..
						//console.log('URL', resUrl);
						imgs[idx].setAttribute('src', resUrl);
						console.log('attr 변경');
					} catch {
						alert('죄송합니다, 다시 시도해주세요');
						return;
					}
				});

				await Promise.all(setAttr)
					.then((res) => {
						content = targetEle.querySelector('.ProseMirror')?.innerHTML;
						preText = targetEle.querySelector('.ProseMirror')?.innerText;
						console.log(preText);
						imgSrc.push(imgsArr[0].src);
					})
					.then(async () => {
						console.log(content);
						const post = {
							userId: 'dummy',
							postOrder: `${date.diff(standard)}`, //파이어베이스용 코드.. 파베DB 정렬기준.
							postCreated: dateFormat, //dayjs
							postTitle: title,
							postContent: content,
							preImage: imgSrc,
							preText: preText,
							liked: 0,
							commented: [],
						};
						//mutation.mutate(post);
					});
			} else {
				content = target.querySelector('.ProseMirror')?.innerHTML;
				//??꼭 필요할까? content만 저장하고 post읽을때 content에서 inneertext 처리하면 pretext는 저장 안해도 될거같은데?
				preText = target.querySelector('.ProseMirror')?.innerText;
				console.log(preText);

				const post = {
					userId: 'dummy',
					postOrder: `${date.diff(standard)}`, //파이어베이스용 코드.. 파베DB 정렬기준.
					postCreated: dateFormat, //dayjs
					postTitle: title,
					postContent: content,
					preText: preText,
					liked: 0,
					commented: [],
				};
				//mutation.mutate(post);
				console.log(post);
			}
			//나중에 지울 코드. 테스트용
			setTimeout(() => setLoading(false), 2500);
			setTimeout(() => setOpen(false), 2600);
		}
	};
	return (
		<>
			<input type='submit' value='입력' onClick={click} />
			{loading && <Tiptap_loading />}
		</>
	);
}

export default Tiptap_submit;
