
var spreadSheetKey = '1-HQI_l2aMsY0pR-xXpj6xgCwuJSI-PSR0Ln-zBoG9rM';

getSheetData(spreadSheetKey, 1, function(result) {
	sections = result.data;
	sections = convertRowsToObj(sections);

	getSheetData(spreadSheetKey, 2, function(result) {
		charts = result.data;
		charts = convertRowsToObj(charts);
		onDataLoaded();
	});
});