import React, { useContext } from 'react';
import { StyledHeader, Box } from './Head_style';
import { ContextDispatch, ContextUser } from '../../pages/_app';

function Header() {
	const { token } = useContext(ContextUser);
	const dispatch = useContext(ContextDispatch);

	console.log('header', token);

	const login = async () => {
		location.assign(
			'http://localhost:8080/oauth2/authorization/google?.redirect_uri=http://localhost:3000/oauth/redirect'
		);
	};

	const logout = () => {
		if (dispatch) {
			dispatch({ type: 'TOKEN', token: '' });
			document.cookie =
				'refresh_token' + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
		}
	};

	return (
		<StyledHeader>
			<Box>
				{/*로고 */}
				{/*서치바*/}
			</Box>
			<Box>
				{/*아이콘1 */}
				{/*아이콘2*/}
				<button onClick={token ? logout : login}>
					{token ? `로그아웃` : `시작하기`}
				</button>
				{/*설정*/}
			</Box>
		</StyledHeader>
	);
}

export default Header;
