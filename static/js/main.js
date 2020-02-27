$(".chars").text($("#postcontent").val().length)
$("#title-form, #slug-form, #tag-form").css("display", "none")
var inputs = $("input[name=twitter], input[name=mastodon]").dom
for (const i of inputs) {
    i.checked = true
}

$("#title-switch").on("click", function () {
    if ($("#title-form").css("display") == "none") {
        $("#title-form").css("display", "block")
        $("#title-switch").text("Hide Title")
    } else {
        $("#title-form").css("display", "none")
        $("#title-switch").text("Add Title")
    }
})

$("#postcontent").on("keyup", function () {
    var count = $(this).val().length
    $(".chars").text(count)
    if (count > 280) {
        // enable Post options
        $("#title-form, #slug-form").css("display", "block")
        $("#postcontent").attr("rows", 20)
        for (const i of inputs) {
            i.checked = false
        }
    } else {
        // enabled Note options
        $("#postcontent").attr("rows", 10)
        for (const i of inputs) {
            i.checked = true
        }
    }
})
