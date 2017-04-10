"use strict";

(function ($) {
    Drupal.behaviors.meteo_today = {

//================ Date Picker jQuery UI===================//
        attach: function (context, settings) {
            var formatDateStart = null;
            var formatDateEnd = null;
            var dateFormat = "mm/dd/yy";
            var from = $(context).find('#from').datepicker({
                numberOfMonths: 1,
                dateFormat: 'dd-mm-yy'
            }).on("change", function () {
                to.datepicker("option", "minDate", getDate(this, dateFormat));
                var currentDateStart = $("#from").datepicker("getDate");
                formatDateStart = moment(currentDateStart).format('YYYY/MM/DD');
            });
            var to = $(context).find("#to").datepicker({
                numberOfMonths: 1,
                dateFormat: 'dd-mm-yy'
            }).on("change", function () {
                from.datepicker("option", "maxDate", getDate(this, dateFormat));
                var currentDateEnd = $("#to").datepicker("getDate");
                formatDateEnd = moment(currentDateEnd).format('YYYY/MM/DD');
            });

            function getDate(element, dateFormat) {
                var date;
                try {
                    date = $.datepicker.parseDate(dateFormat, element.value);
                } catch (error) {
                    date = null;
                }
                return date;
            }

//=================== Отрисовка графика статистики =================//
            var response = settings.meteo_today;
            var dayWeek = [];
            var minTemperature = [];
            var maxTemperature = [];
            $.each(response['dataStats'], function (index, value) {
                var day = moment(value['dateDay']).format('dd DD MMM');
                var min = value['minTemp'];
                var max = value['maxTemp'];
                dayWeek.push(day);
                minTemperature.push(min);
                maxTemperature.push(max);
            });

            var data = {
                labels: dayWeek,
                series: [
                    minTemperature,
                    maxTemperature
                ]
            };
            var options = {
                width: 800,
                height: 200
            };
            new Chartist.Line('.ct-chart', data, options);


            //============================

            getStatsData(null, null);

            $('.btn').click(function () {
                getStatsData(formatDateStart, formatDateEnd)
            });
            function getStatsData(formatDateStart, formatDateEnd) {
                $.get('/statistics/ajax' + formatDateEnd, null, function (response) {
                    console.log(response.data);
                });

                //$.ajax({
                //    type: 'GET',
                //    url: '/statistics/ajax',
                //    dataType: 'json',
                //    data: {
                //        dateStart: formatDateStart,
                //        dateEnd: formatDateEnd
                //    },
                //    success: function (response) {
                //        console.log(response);
                //    }
                //});


            }
        }

    }
}(jQuery));



























