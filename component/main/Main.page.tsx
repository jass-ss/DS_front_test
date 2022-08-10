import React, { useState } from 'react';
import { StyledSection, TextBar } from './Main_style';
import EditIcon from '@mui/icons-material/Edit';
import { ModalPost } from '../common/none/Modal/ModalPost';
import axios from 'axios';
//import firebase from 'firebase/compat/app';

function Main(/*{data}*/) {
	/* const [posts, setPosts] = useState(data);
	 */
	console.log('start');
	//console.log(firebase);
	const [open, setOpen] = useState(false);
	const [modal, setModal] = useState<boolean | React.ReactNode>(false);
	console.log();

	const login = async () => {
		location.assign(
			'http://localhost:8080/oauth2/authorization/google?.redirect_uri=http://localhost:3000/oauth/redirect'
		);
		//http://localhost/?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImlhdCI6MTY1ODY4NjAzNywiZXhwIjoxNjU4Njg3ODM3fQ.Yslp4M1NGbSjGzG1UUd97HymCVPjDUVcCLaxiHUYw1-5x6J_SiCWk1ImJH-iZiLPbLR4UNVd43R-WMwBmvutbg&id=1&job=

		/*const res = await axios.get('/redis');
		console.log(res.request.responseURL);
		const test = await axios.get(res.request.responseURL);
		console.log(test); */
		/*
			location.href는 객체의 속성이며, location.assign(), loaction.replace()는 메서드(함수)로 작동된다.
			location.href= '~~~~' / location.assign('~~~'), location.repalace('~~~~')
			assign(),href는 페이지를 이동하는 것이기 때문에 뒤로가기 버튼을 누른경우 이전 페이지로 이동이 가능하지만,
			replace는 현재 페이지를 새로운 페이지로 덮어 씌우기 때문에 이전 페이지로 이동이 불가능하다. */
	};
	return (
		<>
			<StyledSection>
				<TextBar>
					<EditIcon
						onClick={() => {
							setOpen(true), setModal(<ModalPost setOpen={setOpen} />);
						}}
					/>
				</TextBar>
				<button onClick={login}>로그인</button>
				{open && modal}
				{/*posts.map((m,idx)=>{
    return (<><>)
  }) */}
			</StyledSection>
		</>
	);
}

export default Main;

/*export async function getServerSideProps(){
  ...

  return {props:{data}}
}*/
