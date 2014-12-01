
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var toCreate = {};	// @button
	var container1 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	toCreate.click = function toCreate_click (event)// @startlock
	{// @endlock
		window.location = '/addArticle';
	};// @lock

	container1.click = function container1_click (event)// @startlock
	{// @endlock
		window.location = '/article#' + sources.article.ID;
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("toCreate", "click", toCreate.click, "WAF");
	WAF.addListener("container1", "click", container1.click, "WAF");
// @endregion
};// @endlock
