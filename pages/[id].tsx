import Layout from '../component/common/Layout';
import Develop from '../component/develop/Develop';
import { useRouter } from 'next/router';
import React from 'react';
import Main from '../component/main/Main';

const Pages = () => {
	const router = useRouter();
	const query = router.query.id;

	console.log(router.query.id);
	let component;

	switch (query) {
		case 'develop':
			component = <Develop />;

			break;

		case 'designer':
			return <Layout>TEST~~~</Layout>;
		default:
			break;
	}

	return (
		<>
			<Layout>{component}</Layout>;
		</>
	);
};

export default Pages;
