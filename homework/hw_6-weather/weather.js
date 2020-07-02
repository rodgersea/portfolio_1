
// create date string
var date = new Date();
var week_Day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date_String = `${week_Day[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
$("#city-date").text(date_String);

var coord = {};
var history_Button = "";
var hist_Loc_Stor = [];
var city_Name = "";
var input_ID = "";

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?";
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?";
var query_Object = {"appid": "f5cd70688610c663b7ddd2459c1f62bd"};

init();

function init() { 
    hist_Loc_Stor = JSON.parse(localStorage.getItem("hist_Loc_Stor"));
    render_Hist();
}

function render_Hist() {
    if (!hist_Loc_Stor) {
        hist_Loc_Stor = [];
    }
    for (i=0; i < hist_Loc_Stor.length; i++) {
        input_ID = hist_Loc_Stor[i].replace(/ /g, "-");
        var pHold = $(`<button>${hist_Loc_Stor[i]}</button>`)
        .attr("id", `${input_ID}`)
        .addClass("history-button");
        $("#search-history").append(pHold);
    }    
}

function getUV() {
    var query_UV = "https://api.openweathermap.org/data/2.5/uvi?"; 
    var UV_Object = {"appid": "f5cd70688610c663b7ddd2459c1f62bd"};
    UV_Object.lat = coord.lat;
    UV_Object.lon = coord.lon;     

    $.ajax({
        url: query_UV + $.param(UV_Object),
        method: "GET"
    }).then(function(uv) {
        $("#uv_Num").remove();
        $("#current-day").append($(`<div>${uv.value}</div>`).attr("id", "uv_Num"));
        $("#uv-index").text("UV_Index: ")
        $("#uv_Num").className = ""
        if (uv.value >= 8) {
            $("#uv_Num").addClass("uv-high");
        } else if (uv.value >= 6 && uv.value < 8) {
            $("#uv_Num").addClass("uv-med");
        } else {
            $("#uv_Num").addClass("uv-low");
        }
    });
    
}

function update_Cities(data) {
    input_ID = data.name.replace(/ /g, "-");
    if (!document.getElementById(input_ID) && data.length !== 0) {
        var pHold = $(`<button>${data.name}</button>`)
            .attr("id", `${input_ID}`)
            .addClass("history-button");
        $("#search-history").append(pHold);
        hist_Loc_Stor.push(data.name);
        localStorage["hist_Loc_Stor"] = JSON.stringify(hist_Loc_Stor);
    }
}

function updatePage(data) {

    city_Name = data.name;

    var day_Icon = data.weather[0].icon;
    var day_Cond = $(`<img>`)
        .attr("src", `http://openweathermap.org/img/wn/${day_Icon}@2x.png`)
        .attr("id", "day-cond");
    $("#day-cond").remove();
    $("#current-day").prepend(day_Cond);
    
    $(".current-day").remove();
    $("#current-day").prepend($(`<div>${city_Name}</div>`).addClass("current-day"));

    temp_F = ((data.main.temp - 273.15) * (9/5) + 32).toFixed(1);
    $("#temp").text(`Temperature: ${temp_F}°`);
    $("#wind-speed").text(`Wind Speed: ${data.wind.speed} mph`);
    coord.lon = data.coord.lon;
    coord.lat = data.coord.lat;
    
    getUV();
}

function updateForecast(forecast) {
    // current date in format xxxx-xx-xx year-month-day
    var date_Num_String = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, "0")}-${(date.getDate()+1).toString().padStart(2, "0")}`;
    // current date in full format ex: mon apr 13 2020 20:00:00 GMT-0400 (eastern daylight time)
    var d = new Date(date_Num_String);

    forecast_Date_Array = [];
    for (i=0; i < 5; i++) {
        var new_Date = new Date(d.setDate(d.getDate() + (i+1)));
        var d = new Date(date_Num_String);
        // date in format xxxx-xx-xx year-month-day, for the forecast array
        var new_Date_String = `${new_Date.getMonth()}/${new_Date.getDate()}/${new_Date.getFullYear()}`
        forecast_Date_Array[i] = new_Date_String;
    }
    $(".fore-div").remove();
    for (i=0; i < 5; i++) {
        var new_Fore_Div = $("<div>");
        new_Fore_Div.attr("id", `fore_Div${i}`);
        new_Fore_Div.addClass("fore-div");
        $("#forecast-cont").append(new_Fore_Div);

            var time_Slot = $(`<div>${forecast_Date_Array[i]}</div>`)
                .addClass("time-slot");
            var img_src = forecast.list[i+1].weather[0].icon;
            var conditions = $(`<img>`)
                .attr("src", `http://openweathermap.org/img/wn/${img_src}@2x.png`)
                .addClass("conditions");
            var fore_Temp = ((forecast.list[i+1].main.temp - 273.15) * (9/5) + 32).toFixed(1);
            var fore_Temp_Div = $(`<div>Temp: ${fore_Temp}°</div>`)
                .addClass("temp");
            var humidity = $(`<div>Humidity: ${forecast.list[i+1].main.humidity}%</div>`)
                .addClass("humidity");
            new_Fore_Div.append(time_Slot, conditions, fore_Temp_Div, humidity);
    }
}

function clear() {
    $(".fore-div").empty();
    $("#city").val("");
}

$("#search").on("click", function() {
    event.preventDefault();    

    query_Object.q = $("#city").val().trim();
    var query_URL =  weatherURL + $.param(query_Object);
    $.ajax({        
        url: query_URL,
        method: "GET"
    }).then(function(data) {
        updatePage(data)
        update_Cities(data);
        var forecast_URL = forecastURL +  $.param(query_Object);
        $.ajax({
            url: forecast_URL,
            method: "GET"
        }).then(updateForecast);
    
        clear();
    })
})

$("body").on("click", ".history-button", function() {
    if ($(this).find(".history-button")) {
        history_Button = $(this).text();
    }

    event.preventDefault();    
    query_Object.q = history_Button;
    var queryURL =  weatherURL + $.param(query_Object);

    $.ajax({        
        url: queryURL,
        method: "GET"
    }).then(updatePage);
    
    query_Object.q = history_Button;
    var forecast_URL= forecastURL + $.param(query_Object);

    $.ajax({
        url: forecast_URL,
        method: "GET"
    }).then(updateForecast);

    clear();
})

$("#clear-search").on("click", function() {
    localStorage.removeItem("hist_Loc_Stor");
    location.reload();
})
