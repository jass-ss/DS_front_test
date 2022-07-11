import React from 'react';
import Link from 'next/link';
import { StyledSection, StyledNav } from './Main_style';

function Main(/*{data}*/) {
	/* const [posts, setPosts] = useState(data);
	 */
	return (
		<>
			<StyledNav>
				<Link href='#test'>
					<a>본문 바로가기</a>
				</Link>
			</StyledNav>
			<StyledSection>
				{/*posts.map((m,idx)=>{
    return (<><>)
  }) */}
				{/* side components*/}
			</StyledSection>
		</>
	);
}

export default Main;

/*export async function getServerSideProps(){
  ...

  return {props:{data}}
}*/
