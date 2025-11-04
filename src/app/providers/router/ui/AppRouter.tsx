import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
	console.log('routeConfig', routeConfig);
	console.log('array', Object.values(routeConfig));

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => {
					return <Route element={element} path={path} key={path} />;
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
