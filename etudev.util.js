/**
 * need jQuery
 */
(function (window, $) {
	'use strict';

	var EtuDev = window.EtuDev || {};

	/**
	 * return all the classes in the DOM, with the number of elements that have them
	 * @return {Object} class => #elements_with_class
	 */
	EtuDev.getAllClasses = function () {
		var classes = {};
		$('*').each(function () {
			$($(this).attr('class').split(/\s+/)).each(function () {
				if (this !== '') {
					classes[this] = classes[this] || 0;
					classes[this] += 1;
				}
			});
		});
		return classes;
	};

	window.EtuDev = EtuDev;

})(window, jQuery);
