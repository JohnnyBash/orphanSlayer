/** ORPHAN SLAYER - The world's most irrelevant jQuery plugin **/
var orphanSlayer = {

	targets		: '#intro-banner h1, #intro-banner h3, #philosophy .cols p, #slides .text p, .part .box p, .box li, .slide h3, .slide p', // These are your selectors, regions where you want the orphans removed.
	timer		: 1000, // Delay before running this script, in milliseconds (gives precedence to other scripts, given that this functionality is pretty irrelevant)
	content		: '',
	last		: ''

}

setTimeout(function(){

	$(orphanSlayer.targets).each(function(){

		orphanSlayer.content = $(this).html().split(' ');
		orphanSlayer.last = orphanSlayer.content[orphanSlayer.content.length - 2] + '&nbsp;' + orphanSlayer.content[orphanSlayer.content.length - 1];
		orphanSlayer.content[orphanSlayer.content.length - 2] = orphanSlayer.last;
		
		if (!(orphanSlayer.last.split('<').length > 1)) {
		
			orphanSlayer.content.splice((orphanSlayer.content.length - 1), 1);
			orphanSlayer.content = orphanSlayer.content.join(' ');
		
			$(this).html(orphanSlayer.content);	
			
		}

	});

}, orphanSlayer.timer );
