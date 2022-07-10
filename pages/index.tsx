import type { NextPage } from 'next';
import Layout from '../component/common/Layout';
import Main from '../component/main/Main';

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Main />
			</Layout>
		</>
	);
};

export default Home;
