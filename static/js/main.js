$(".chars").text($("#notecontent").val().length)

$("#notecontent").on("keyup", function () {
    $(".chars").text($(this).val().length)
})
