function attachEvents() {
    $('#submit').click(getWeather);

    function getWeather() {
        $.ajax({
                method: "GET",
                url: "https://judgetests.firebaseio.com/locations.json"
            }).then(getInfo)
            .catch(handleError);

        function getInfo(data) {
            let location = data.filter(l => l.name == $('#location').val())[0];
            let todayForecast = $.ajax({
                method: "GET",
                url: `https://judgetests.firebaseio.com/forecast/today/${location.code}.json`
            });
            let threeDayForecast = $.ajax({
                method: "GET",
                url: `https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`
            });

            Promise.all([todayForecast, threeDayForecast])
                .then(dispayForecast)
                .catch(handleError);

            function dispayForecast([today, upcoming]) {
                let icons = {
                    ['Sunny']: "&#x2600;",
                    ['Partly sunny']: "&#x26C5;",
                    ['Overcast']: "&#x2601;",
                    ['Rain']: "&#x2614;",
                    ['Degrees']: "&#176;"
                };

                $('#current').empty();
                $('#current').append(`<div class="label">Current conditions</div>`);
                $('#current')
                    .append($('<span>').addClass("condition symbol").html(icons[today.forecast.condition]))
                    .append($('<span>').addClass("condition")
                        .append($('<span>').addClass("forecast-data").text(today.name))
                        .append($('<span>').addClass("forecast-data").html(`${today.forecast.low}${icons['Degrees']}/${today.forecast.high}${icons['Degrees']}`))
                        .append($('<span>').addClass("forecast-data").text(today.forecast.condition)));


                $('#upcoming').empty();
                $('#upcoming').append(`<div class="label">Three-day forecast</div>`);

                for (let day of upcoming.forecast) {
                    $('#upcoming')
                        .append($('<span>').addClass("upcoming")
                            .append($('<span>').addClass("symbol").html(icons[day.condition]))
                            .append($('<span>').addClass("forecast-data").html(`${day.low}${icons['Degrees']}/${day.high}${icons['Degrees']}`))
                            .append($('<span>').addClass("forecast-data").text(day.condition)));
                }

                //$('#forecast').css('display', 'block');
                $('#forecast').show();
            }
        }
    }
}

function handleError() {
    $('#forecast').css('display', 'block');
    $('#forecat').html('Error');
}