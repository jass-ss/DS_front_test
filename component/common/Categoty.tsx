import React from 'react';
import Link from 'next/link';
import { Nav } from './Category_style';

function Categoty() {
	return (
		<Nav>
			<ul>
				<li>
					<Link href='#'>인기 포스팅</Link>
				</li>
				<li>
					<Link href='#'>개발자</Link>
				</li>
				<li>
					<Link href='#'>디자이너</Link>
				</li>
				<li>
					<Link href='#'>기획자</Link>
				</li>
				<li>
					<Link href='#'>마케팅</Link>
				</li>
			</ul>
		</Nav>
	);
}

export default Categoty;
