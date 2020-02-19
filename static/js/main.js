$(".chars").text($("#notecontent").val().length)

$("#notecontent").on("keyup", function () {
    $(".chars").text($(this).val().length)
})

$("#post-tabs button").on("click", function () {
    $(".contentform").css("display", "none")
    var target = $(this).attr("data-target")
    var dim = $(this).attr("data-dim")
    console.log(target)
    $(this).css("opacity", "1.0")
    $(target).css("display", "block")
    $(dim).css("opacity", "0.5")
})