'use strict';

class fileRewrite {
	/**
	 * �R���X�g���N�^�ł��B
	 */
	constructor() {
	}

	/**
	 * �w�肳�ꂽ�t�@�C�����當������擾���܂��B
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
	 * �w�肳�ꂽ�t�@�C���ɕ�������o�͂��܂��B
	 * ���Ƀt�@�C�������݂���ꍇ�͏㏑�����܂��B
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
	 * �t�@�C���̒u�������s���܂��B
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
	 * ������̒u�����s���܂��B
	 */
	_replace(text, params) {
		return text;
	}
}
module.exports = fileRewrite;
