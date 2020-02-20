$(".chars").text($("#postcontent").val().length)
$("#title-form, #slug-form, #tag-form").css("display", "none")

$("#postcontent").on("keyup", function () {
    var count = $(this).val().length
    $(".chars").text(count)
    if (count > 280) {
        $("#title-form, #slug-form").css("display", "block")
        $("#postcontent").attr("rows", 20)
    } else {
        $("#title-form, #slug-form").css("display", "none")
        $("#postcontent").attr("rows", 10)
    }
})


// $("#post-tabs button").on("click", function () {
//     var target = $(this).attr("data-target")
//     var dim = $(this).attr("data-dim")
//     console.log(target)
//     $(this).css("opacity", "1.0")
//     $(target).css("display", "block")
//     $(dim).css("opacity", "0.5")
// })