'use strict';

class fileRewrite {
	/**
	 * コンストラクタです。
	 */
	constructor() {
	}

	/**
	 * 指定されたファイルから文字列を取得します。
	 */
	_readFile(fileName, encoding) {
		var fs    = require('fs');
		if (encoding) {
			var iconv = require('iconv-lite');
			var data = fs.readFileSync(fileName);
			var buf = new Buffer(data, 'binary');
			return iconv.decode(buf, encoding);
		} else {
			return fs.readFileSync(fileName, {encoding : 'utf-8'});
		}
	}

	/**
	 * 指定されたファイルに文字列を出力します。
	 * 既にファイルが存在する場合は上書きします。
	 */
	_writeFile(fileName, text, encoding) {
		var fs    = require('fs');
		if (encoding) {
			var iconv = require('iconv-lite');
			var data = fs.readFileSync(fileName);
			var buf = new Buffer(data, 'binary');
			return iconv.decode(buf, encoding);
		} else {
			return fs.writeFileSync(fileName, text, {encoding : 'utf-8'});
		}
	}

	/**
	 * ファイルの置換を実行します。
	 * args {
	 *   fileName: path to source file
	 *   encoding: encoding of source file (default: 'UTF-8')
	 *		@see: https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings
	 *   output: path to source file (default: fileName)
	 *	 params[{}
	 *       pattern: Regex
	 *       replacement: replacement text
	 *   ]
	 */
	replace(args) {
		args.output = args.output || args.fileName;
		let text = this._readFile(args.fileName, args.encoding);
		text = this._replace(text, args.params);
		this._writeFile(args.output, text, args.encoding);
	}

	/**
	 * 文字列の置換を行います。
	 */
	_replace(text, params) {
		return text;
	}
}
module.exports = fileRewrite;
