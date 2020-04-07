const fileRewrite = require('./file-rewrite.js');

/**
 *Json�ɂ��t�@�C���̒u�����s���܂��B
 *
 */
class jsonRewrite extends fileRewrite {
	/**
	 * �R���X�g���N�^�ł��B
	 */
	constructor() {
		super();
	}

	/**
	 * �R���X�g���N�^�ł��B
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
