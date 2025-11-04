import { ResolveOptions } from 'webpack';
import { BuildPaths } from './types/config';

export function buildResolvers(path: BuildPaths['src']): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [path, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}
