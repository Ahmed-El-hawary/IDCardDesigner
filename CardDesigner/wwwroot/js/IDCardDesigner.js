$(function () {
    LiveView();
    $("#Width").change(function () {
        let pixelWidth = parseFloat($("#Width").val() || 5.4) * 37.7952755906;
        $("#sortable2").css("width", pixelWidth);
        LiveView();
    });
    $("#Heigth").change(function () {
        let pixelHeigth = parseFloat($("#Heigth").val() || 8.6) * 37.7952755906;
        $("#sortable2").css("height", pixelHeigth);
        LiveView();
    });
    $("#FontSize").change(function () {
        let fontSize = parseFloat($("#FontSize").val() || 10);
        $("#sortable2").css("font-size", fontSize);
    });
    $("#FontColor").change(function () {
        let fontColor = $("#FontColor").val() || "#000";
        $("#sortable2").css("color", fontColor);
        LiveView();
    });
    $("#BgColor").change(function () {
        let bgColor = $("#BgColor").val() || "#fff";
        $("#sortable2").css("background-color", bgColor);
        LiveView();
    });
    $("#BgImage").change(function () {
        var file = $('#BgImage')[0].files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            $('#sortable2').css('background-image', 'url(' + reader.result + ')');
            LiveView();
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    });
    $("#Width , #Heigth , #FontSize , #FontColor ,#BgColor").trigger("change");
    $("body").click(function () {
        LiveView();
    });
    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable",
        placeholder: "ui-state-highlight",
        update: function (event, ui) {
            $(".resizable").resizable().resizable("destroy")
            $("#sortable2 .resizable").resizable({
                animate: true,
                ghost: true,
                helper: "ui-resizable-helper"
            }).draggable({ axis: "x", containment: "parent", cursor: "move" });
            LiveView();
        }
    }).disableSelection();
});

function LiveView() {
    $(".resizable").resizable().resizable("destroy");
    $(".liveview").html($(".card-desinger").html());
    $(".liveview .resizable").removeClass("resizable");
    $("#sortable2 .resizable").resizable({
        animate: true,
        ghost: true,
        helper: "ui-resizable-helper"
    }).draggable({ axis: "x", containment: "parent", cursor: "move" });
}
function printDiv() {
    $(".notprintable").hide();
    //Print the window.
    window.print();
    //Restore the styles.
    $(".notprintable").show();
}