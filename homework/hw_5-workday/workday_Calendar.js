
// create date string
var date = new Date();
var week_Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date_String = week_Day[date.getDay()] + ", " + month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
var getDate_Pad = "";

var input_Array = {};
var input_Array_Redo = {};

// prints current date to title div
$("#date").text(date_String);

// RENDER LOCALLY STORED INPUT TEXT TO SCREEN IF BROWSER JUST OPENED
// ________________________________________________________________________________________________________________

init();

function render_Events() {
    console.log(input_Array_Redo);
    for (i=0; i < 24; i++) {
        $("#input" + i).val(input_Array_Redo["input" + i]);
    }
}
function store_Events() {
    console.log(input_Array_Redo);
    localStorage["input_Array_Redo"] = JSON.stringify(input_Array_Redo);
    if (localStorage.getItem("input_Array_Redo") === null) {
        console.log("null");
    } else {
        console.log("exists");
    }
}
function init() {
    // appends hour labels
    for (i=0; i < 24; i++) {
        var hour_Block = $("<div>");
        hour_Block.attr("id", "div" + i);
        hour_Block.addClass("hour-block-class")
        $("#hour-block").append(hour_Block);
        if (i < 12) {
            var hour_Div = "<div>" + (i+1) + "AM" + "</div>";
            $("#div" + i).append(hour_Div);
        }
        else {
            var hour_Div = "<div>" + (i-11) + "PM" + "</div>";
            $("#div" + i).append(hour_Div);        
        }
    }

    // appends forms/ labels for each hour with id's and classes
    for (i=0; i < 24; i++) {

        var form_Block = $("<form>");
        form_Block.attr("id", "form" + i);
        $("#form-block").append(form_Block);

        var input_El = $("<input>");
        input_El.attr("id", "input" + i);
        $("#form" + i).append(input_El);
    }

    // append #save-block
    for (i=0; i < 24; i++) {
        var save_Button = $("<button>");
        save_Button.addClass("save-button-class")
        save_Button.attr("id", "save" + i);
        save_Button.text("save");
        $("#save-block").append(save_Button);

    }
    input_Array_Redo = JSON.parse(localStorage.getItem("input_Array_Redo"));
    console.log(input_Array_Redo);
    // i don't know why this works
    if (input_Array !== null) {
        input_Array_Redo = input_Array_Redo;
    } else {
        input_Array_Redo = {};
    }
    
    for (var i=0; i < 24; i++){
        $("#input" + i).keyup(function() {
            input_Array[this.id] = $(this).val();
            console.log(input_Array);
        })
    }
    render_Events();
}
// add onclick functionality to each save button

var save_String = "";

$(".save-button-class").on("click", function() { 
    var save_Num = "";
    var save_Id = this.id;
    for (i=0; i < save_Id.length; i++) {
        var save_Char = (this.id).charAt(i);
        if ($.isNumeric(save_Char)) {
            save_Num += save_Char;
        }        
    }
    console.log(save_Num);
    input_Array_Redo["input" + save_Num] = input_Array["input" + save_Num];
    console.log(input_Array);   
    console.log(input_Array_Redo);
    render_Events();
    store_Events();        
    event.preventDefault();
})
var save_Char = "";
// $(".save-button-class").on("click", function() {
//     save_Num = "";
//     var save_Id = this.id;
//     for (i=0; i < save_Id.length; i++) {
//         var save_Char = (this.id).charAt(i);
//         if ($.isNumeric(save_Char)) {
//             save_Num += save_Char;
//         }        
//     }
//     console.log(save_Num);
// })

save_String = input_Array["input" + save_Char];























