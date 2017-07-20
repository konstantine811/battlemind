/*
* @Author: Admin
* @Date:   2017-07-19 19:43:56
* @Last Modified by:   Admin
* @Last Modified time: 2017-07-20 14:14:46
*/

'use strict';

$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
		anchors: ['firstPage', 'secondPage', 'thirdPage'],
		menu: '#menu',
		scrollOverflow: true,
	});
});