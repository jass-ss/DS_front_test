import React, { useState } from 'react';
import { StyledSection } from './Main_style';
import Modal from '../common/Modal';

function Main(/*{data}*/) {
	/* const [posts, setPosts] = useState(data);
	 */
	const [open, setOpen] = useState(false);
	return (
		<>
			<StyledSection>
				<button onClick={() => setOpen(true)}>x</button>
				{open && (
					<Modal>
						<button onClick={() => setOpen(false)}>x</button>
						<h1>로그인 부탁</h1>
						<div>
							<button>예</button>
							<button>아니오</button>
						</div>
					</Modal>
				)}
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
