const fileRewrite = require('./file-rewrite.js');

/**
 *���K�\���ɂ��t�@�C���̒u�����s���܂��B*/
class regexRewrite extends fileRewrite {
	/**
	 * �R���X�g���N�^�ł��B
	 */
	constructor() {
		super();
	}

	/**
	 * replacement�̕����񒆂�${hoge}�𓯖��̊��ϐ��̒l�ƒu�����܂��B
	 */
	_resolvePlaceholder(params) {
		for (let param of params) {
			let replacement = param.replacement;
			if (replacement) {
				replacement = replacement.replace(/\${([^}]*)}/g, (match, p1) => {
					const val = process.env[p1]
					return val;
				});
				param.replacement = replacement;
			}
		}
	}

	/**
	 * ������̒u���������s���܂��B
	 */
	_replace(text, params) {
		this._resolvePlaceholder(params);
		for (let param of params) {
			text = text.replace(param.pattern, param.replacement);
		}
		return text;
	}

};
module.exports = regexRewrite;
