
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.newComment.newEntity();
		sources.newComment.author = $('#newCommentAuthor').val();
		sources.newComment.content = $('#newCommentContent').val();
		sources.newComment.article.set(sources.article);
		sources.newComment.save(function() {
			$('#newCommentAuthor').val('');
			$('#newCommentContent').val('');
			sources.article.serverRefresh();
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		sources.article.selectByKey(parseInt(window.location.hash.substring(1)));
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
