import React, { useState } from 'react';
import { StyledSection, TextBar } from './Main_style';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../common/Modal/Modal';
import ModalPost from '../common/Modal/ModalPost';
//import firebase from 'firebase/compat/app';

function Main(/*{data}*/) {
	/* const [posts, setPosts] = useState(data);
	 */
	console.log('start');
	//console.log(firebase);
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState<boolean | React.ReactNode>(false);
	console.log();
	return (
		<>
			<StyledSection>
				<TextBar>
					<EditIcon
						onClick={() => {
							setOpen(true), setModal(<ModalPost setOpen={setOpen} />);
						}}
					/>
					<button onClick={() => setOpen(true)}>x</button>
				</TextBar>
				{open && modal}
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

/*<Modal>
						<button onClick={() => setOpen(false)}>x</button>
						<h1>로그인 부탁</h1>
						<div>
							<button>예</button>
							<button>아니오</button>
						</div>
					</Modal>*/
