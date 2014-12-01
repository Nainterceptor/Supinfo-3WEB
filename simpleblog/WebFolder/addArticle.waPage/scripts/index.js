
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var createButton = {};	// @button
	var documentEvent = {};	// @document// @endlock

// eventHandlers// @lock

	createButton.click = function createButton_click (event)// @startlock
	{// @endlock
		sources.article.publicationDate = new Date();
		var content = $$('contentWysiwyg').getWysiwygInstance().getContent();
		sources.article.content = content;
 

		sources.article.save(function() {
			window.location = '/';
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		sources.article.newEntity();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("createButton", "click", createButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
