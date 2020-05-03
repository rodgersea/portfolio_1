
const basinInfo = $("#basin-info")
var itme = $("#its-me");

$("body").on("click", "#2-0", function() {
    itme.empty()
    itme.text("")
    $(".act-desc").empty()
    $("#activity-split").append(`<div class="act-desc">I started rock climbing early in college and have spent an immense amount of time practicing this sport.</div>`)
})

$("body").on("click", "#2-1", function() {
    itme.empty()
    itme.text("RUNNING")
    $(".act-desc").remove()
    $("#activity-split").append(`<div class="act-desc">I started running seriously around february and really picked up the 
    pace once the corona pandemic hit. With all of the climbing gyms closed, 
    I haven't had much else to do besides run. I ran my first marathon halfway 
    through april and had a great time.</div>`)
})

$("body").on("click", "#2-2", function() {
    itme.empty()
    itme.text("READING")
    $(".act-desc").remove()
    $("#activity-split").append(`<div class="act-desc">I haven't had as much time to read as I'd like since I started learning 
    to code. Before this course started I read a lot in spanish and english, but 
    lately I've only had time for english reading.  I'm working through Dune currently.</div>`)
})

$("body").on("click", "#2-3", function() {
    itme.empty()
    itme.text("SLACKLINING")
    $(".act-desc").remove()
    $("#activity-split").append(`<div class="act-desc">I was introduced to slacklining early in college and I spend an 
    embarassingly long time practicing all kinds of tricks and movement
    with the slackline.</div>`)
})

$("body").on("click", "#2-4", function() {
    itme.empty()
    itme.text("DISC GOLF")
    $(".act-desc").remove()
    $("#activity-split").append(`<div class="act-desc">My dad introduced me to disc golf in high school and it has been an
    activity that we do as a family ever since.</div>`)
})

$("body").on("click", "#2-5", function() {
    itme.empty()
    itme.text("DISC GOLF")
    $(".act-desc").remove()
    $("#activity-split").append(`<div class="act-desc">My dad introduced me to disc golf in high school and it has been an
    activity that we do as a family ever since.</div>`)
})
