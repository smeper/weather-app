$(document).ready(function () {

    $('#buscar').click(function (e) {
        e.preventDefault();
        let ciudad = $('#ciudad').val();
        let pais = $('#pais').val();
        peticion_api(ciudad, pais);
        $('#ciudad').val('');
        $('#pais').val('');
    })

    function peticion_api(ciudad, pais) {
        $.get("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + ", " + pais + "&appid=d9a4e181d509207643a39880fb6b3125", function (request) {
            console.log(request.weather);
            console.log(request.main);
            $("#datos").html(`
            <h2>${ciudad}</h2>
            <img src=" http://openweathermap.org/img/wn/${request.weather[0].icon}@2x.png" alt="icono">
            <p>Temperatura:${Math.round((request.main.temp_max) - 273.15)} ºC</p>
            <p>Humedad: ${request.main.humidity} %</p>
            `);
        });
    }
});

