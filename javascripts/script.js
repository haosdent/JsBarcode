var defaultValues = {
    CODE128 : "JsBarcode",
    EAN : "1234567890128",
    UPC : "123456789999",
    CODE39 : "JSBARCODE",
    ITF14 : "10012345000017",
    ITF : "123456",
    pharmacode : "1234"
};

$(document).ready(function(){
    $("#userInput").on('input',newBarcode);
    $("input:radio[name=display-value]").click(newBarcode);
    newBarcode();

    $('input[type="range"]').rangeslider({
        polyfill: false,
        rangeClass: 'rangeslider',
        fillClass: 'rangeslider__fill',
        handleClass: 'rangeslider__handle',
        onSlide: newBarcode,
        onSlideEnd: newBarcode
    });
});

var newBarcode = function() {
    //Convert to boolean
    var displayValue = ($("input:radio[name=display-value]:checked").val() === "true");
    var barcodes = $("#userInput").val().split("\n");
    var options = {
        "format": "CODE128",
        "backgroundColor": "#fff",
        "fontSize": parseInt($("#bar-fontSize").val()),
        "height": parseInt($("#bar-height").val()),
        "width": $("#bar-width").val(),
        "displayValue": displayValue
    };
    var html = [];
    for (var i = 0, l = barcodes.length; i < l; ++i) {
        var imgData = $("#barcode").JsBarcode(barcodes[i], options).attr("src");
        if (imgData) {
            html.push("<p><img id='barcode' src='" + imgData + "'></p>");
        };
    };
    $("#barcode-list").html(html);

    $("#bar-width-display").text($("#bar-width").val());
    $("#bar-height-display").text($("#bar-height").val());
    $("#bar-fontSize-display").text($("#bar-fontSize").val());
};