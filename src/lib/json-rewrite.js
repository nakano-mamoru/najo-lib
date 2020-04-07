const fileRewrite = require('./file-rewrite.js');

/**
 *Jsonによるファイルの置換を行います。
 *
 */
class jsonRewrite extends fileRewrite {
	/**
	 * コンストラクタです。
	 */
	constructor() {
		super();
	}

	/**
	 * コンストラクタです。
	 */
	_replace(text, params) {
		const indent = params.indent || '\t';
console.log('convert', params);
		let obj = JSON.parse(text);
		params.convert(obj);
		return JSON.stringify(obj, null, indent);
	}

};
module.exports = jsonRewrite;
