function openSidePanel()
{
// Side Dialog
var pageInput = {
    pageType: "custom",
    name: "mr_dentxlandingpage_1e4a8",
};
var navigationOptions = {
    target: 2, 
    position: 2,
    width: {value: 500, unit: "px"},
    title: "Ribbon button"
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when the dialog closes
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );
}