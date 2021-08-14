const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const glob = require( 'glob' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const CopyPlugin = require('copy-webpack-plugin'); // https://webpack.js.org/plugins/copy-webpack-plugin/



const entries = glob.sync( 'src/blocks/**/index.js' );
const blockJSONEntries = glob.sync( 'src/blocks/**/block.json' );
const copyFilePattern = [];

console.log( 'blockJSONEntries', blockJSONEntries );

// Add new entries, fileName: filePath
const entry = {};

// Push block files.
if ( entries.length ) {
	
	entries.forEach( file => {
		console.log( file );
		const fileName = file.replace( '/index.js', '' ).replace( 'src/blocks/', '' );
		
		if ( fileName ) {
			entry[ fileName ] = path.resolve( __dirname, file );
		}
	} );
}

// Push block json files.
if ( blockJSONEntries.length ) {
	
	blockJSONEntries.forEach( file => {
		const fileName = file.replace( '/block.json', '' ).replace( 'src/blocks/', '' );
		if ( fileName ) {
			console.log( 'fileName', fileName );
			// entry[ fileName ] = path.resolve( __dirname, file );
			copyFilePattern.push({
				from: path.resolve( __dirname, `src/blocks/${fileName}/block.json` ),
				to: path.resolve( __dirname, `build/blocks/${fileName}/` ),
			})
		}
	} );
}

const output = {
	path: path.resolve( __dirname, 'build' ),
	filename: 'blocks/[name]/index.js',
};

console.log( 'copyFilePattern', copyFilePattern );

module.exports = {
	...defaultConfig,
	entry,
	output,
	plugins: [
		...defaultConfig.plugins
			.map(
				( plugin ) => {
					if ( plugin.constructor.name === 'MiniCssExtractPlugin' ) {
						plugin.options.filename = 'blocks/[name]/editor.css';
					}
					return plugin;
				},
			),
		// new CopyPlugin( {
		// 	patterns: copyFilePattern
		// } ),
	],
	optimization: {
		...defaultConfig.optimization,
		splitChunks: {
			...defaultConfig.optimization.splitChunks,
			cacheGroups: {
				style: {
					test: /[\\/]style(\.module)?\.(sc|sa|c)ss$/,
					chunks: 'all',
					enforce: true,
					name( module, chunks, cacheGroupKey ) {
						return `blocks/${ chunks[ 0 ].name }/${ cacheGroupKey }-index`;
					},
				},
				default: false,
			},
		},
		minimizer: defaultConfig.optimization.minimizer.concat( [ new OptimizeCSSAssetsPlugin( {} ) ] ),
	},
};
