import React, { useRef } from 'react';
import { Wrap, StyledModalImage } from './Modal_style';

type modalProps = {
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	setModal?: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};

function ModalSignUpImage({ setOpen }: modalProps) {
	const image = useRef<HTMLDivElement>(null);
	setTimeout(() => {
		if (image.current) image.current.style.opacity = `0`;
	}, 1000);
	setTimeout(() => {
		if (setOpen) setOpen(false);
	}, 2000);

	return (
		<Wrap>
			<StyledModalImage ref={image}>
				<p>가입을 축하드려요</p>
			</StyledModalImage>
		</Wrap>
	);
}

export default ModalSignUpImage;
