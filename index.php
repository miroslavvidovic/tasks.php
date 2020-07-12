<?php
/*
*/

include("header.php");


echo "<ul class=\"tabs left\">";
echo "<li><a href=\"#maintab\">".$LANG["newtask"]."</a></li>";
echo "<li><a href=\"#activetab\">".$LANG["tasks"]."</a></li>";
echo "<li><a href=\"#finishedtab\">".$LANG["finishedtasks"]."</a></li>";
echo "<li><a href=\"#thrashtab\">".$LANG["thrash"]."</a></li>";
echo "<li><a href=\"#statstab\">".$LANG["stats"]."</a></li>";
echo "</ul>";


echo "<div id=\"maintab\" class=\"tab-content\">";
echo "<h2>".$LANG["addtask"]."</h2>";

echo "<p>";

showinputform("action.php");

echo "</p>";

echo "</div> <!-- tab div -->";

echo "<div class=\"tab-content\" id=\"activetab\">";
echo "<h2>".$LANG["tasks"]."</h2>";
	listtasks($json_a,"open","table");
echo "</div> <!-- tab div -->";

echo "<div class=\"tab-content\" id=\"finishedtab\">";
echo "<h2>".$LANG["finishedtasks"]."</h2>";
	listtasks($json_a,"closed","table");
echo "</div> <!-- tab div -->";

echo "<div class=\"tab-content\" id=\"thrashtab\">";
echo "<h2>".$LANG["thrash"]."</h2>";
listtasks($json_a,"deleted","table");
echo "</div> <!-- tab div -->";

echo "<div class=\"tab-content\" id=\"statstab\">";
echo "<h2>".$LANG["stats"]."</h2>";
statistics();
echo "</div> <!-- tab div -->";
echo "</div><!--col_12 -->";

echo "<div class=\"col_6\">";

echo "<p>".$LANG["infotext"]."</p>";

echo "</div> <!-- col_ -->";


include("footer.php");