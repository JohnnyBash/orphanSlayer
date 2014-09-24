/** ORPHAN SLAYER - The world's most irrelevant jQuery plugin **/
var orphanSlayer = {

	targets		: '#your-selector, .another-selector, p, .etc', // These are your selectors, regions where you want the orphans dealt with.
	timer		: 1000 // Delay before running this script, in milliseconds (gives precedence to other scripts)

}

setTimeout(function(){

	$(orphanSlayer.targets).each(function(){

		orphanSlayer.content = $(this).html().split(' ');
		orphanSlayer.last = orphanSlayer.content[orphanSlayer.content.length - 2] + '&nbsp;' + orphanSlayer.content[orphanSlayer.content.length - 1];
		orphanSlayer.content[orphanSlayer.content.length - 2] = orphanSlayer.last;
		
		if (!(orphanSlayer.last.split('<').length > 1) && (orphanSlayer.content.length > 2)) {
			
			orphanSlayer.content.splice((orphanSlayer.content.length - 1), 1);
			orphanSlayer.content = orphanSlayer.content.join(' ');
			
			$(this).html(orphanSlayer.content);
			
		}

	});

}, orphanSlayer.timer );
