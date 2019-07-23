
getData('1-HQI_l2aMsY0pR-xXpj6xgCwuJSI-PSR0Ln-zBoG9rM', function(result) {
	sections = result.data;
	sections = convertRowsToObj(sections);

	getData('1APlBq-n2_6QoenQsCQkeYZCD6ErwbT_a-F7cWCZaTDk', function(result) {
		charts = result.data;
		charts = convertRowsToObj(charts);
		onDataLoaded();
	});
});