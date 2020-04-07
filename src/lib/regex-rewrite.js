const fileRewrite = require('./file-rewrite.js');

/**
 *正規表現によるファイルの置換を行います。*/
class regexRewrite extends fileRewrite {
	/**
	 * コンストラクタです。
	 */
	constructor() {
		super();
	}

	/**
	 * replacementの文字列中の${hoge}を同名の環境変数の値と置換します。
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
	 * 文字列の置き換えを行います。
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
