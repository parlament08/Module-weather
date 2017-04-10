


<div class="container-period">
    <div class="title">Statistics weather period:</div>
    <div class="last-week"> <?php print $startDate  ?> - <?php print $endDate  ?></div>
</div>

<div class="picker">
    <div class="datePicker-wrapper">
        <label for="from">From</label>
        <input type="text" id="from" name="from">
        <label for="to">to</label>
        <input type="text" id="to" name="to">
        <input class="btn" type="button" value="show">
    </div>
</div>

<div id="statistic-table">
    <div class="period">
        <?php
        foreach ($statisticsArr as $oneDay){
            ?>
            <div class="section-day">
                <div class="table-statistic">
                    <div class="table-col">
                        <div class="date"><?php print $oneDay['dateDay']  ?></div>
                        <div class="weather-icon">
                            <img src="<?php print $oneDay['iconUrlDay'] ?>" alt=""/>
                            <div class="temp">
                                <div class="min-temp">min: <?php print $oneDay['minTemp'] ?></div>
                                <div class="max-temp">max: <?php print $oneDay['maxTemp'] ?></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        }
        ?>
    </div>
    <div class="stats"></div>
</div>
<div class="ct-chart ct-perfect-fourth"></div>
