import React, { createContext, useReducer, Dispatch } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { userAgent } from 'next/server';

type Action = {
	type: string;
	token?: string;
	job?: object | string;
};

type State = {
	token?: string;
	user: object;
};

export const ContextUser = React.createContext<State>({
	token: '',
	user: { id: '', job: null },
});

export const ContextDispatch = React.createContext<Dispatch<Action> | null>(
	null
);

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'TOKEN':
			return { ...state, token: action.token };
		case 'JOB':
			return { ...state, user: { ...state.user, job: action.job } };
		default:
			return state;
	}
};

export default function MyApp({ Component, pageProps }: AppProps) {
	const [user, dispatch] = useReducer(reducer, {
		token: '',
		user: { id: '', job: null },
	});
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false, // window focus 설정
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ContextUser.Provider value={user}>
					<ContextDispatch.Provider value={dispatch}>
						<Component {...pageProps} />
					</ContextDispatch.Provider>
				</ContextUser.Provider>
			</Hydrate>
		</QueryClientProvider>
	);
}

/*import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
*/
