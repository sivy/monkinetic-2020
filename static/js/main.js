$(".chars").text($("#postcontent").val().length)
$("#title-form, #slug-form, #tag-form").css("display", "none")
var inputs = $("input[name=twitter], input[name=mastodon]").dom
for (const i of inputs) {
    i.checked = true
}


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
        $("#title-form, #slug-form").css("display", "none")
        $("#postcontent").attr("rows", 10)
        for (const i of inputs) {
            i.checked = true
        }
    }
})
