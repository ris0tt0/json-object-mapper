import typescript from 'rollup-plugin-typescript';

export default {
    input: './src/main/index.ts',
	 plugins: [
		  typescript()
	 ],
	 output:{
	    file: './dist/ObjectMapper.js',
	    format: "cjs",
	    external: [
	        'reflect-metadata'
	    ],
	    globals: {
	        "reflect-metadata": "Reflect"
	    }
 	}
}
