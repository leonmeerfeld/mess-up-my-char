$("document").ready(function() {
    $("#diacriticalMarkBtn").click(
    function() {
        var diacriticalMarkValue = $("#diacriticalMarkBtn").val();
        addDiacriticalMark(diacriticalMarkValue);
        }
    );

    function addDiacriticalMark(buttonValue) {
        var previousOutput = $("#charOutput").html();
        previousOutput = previousOutput + "&#" + buttonValue + ";";
        $("#charOutput").html(previousOutput);
    }
});