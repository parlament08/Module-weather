<div class="container-widget-chisinau">
    <div class="layout-widget">
        <div class="container-top">
            <div class="section-left">
                <div class="city-name"><?php print $city ?></div>
            </div>
            <div class="section-center">
                <div class="icon-weather">
                    <img src=<?php print $iconUrl ?>
                    alt=""/>
                </div>
            </div>
            <div class="section-right">
                <div class="temperature"><?php print $temp ?>&#176;С</div>
            </div>
        </div>
        <div class="container-bottom">
            <div class="data-source">
                <a href="/statistics">weather last 7 days</a>
            </div>
        </div>
    </div>
</div>