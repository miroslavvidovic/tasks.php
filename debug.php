<?php


# First open the JSON file
$file = file_get_contents("task.json") or die("Cant open JSON file. Does it exist? Error code x51.");
#now check if it is a valid file
$json_debug = json_decode($file, true) or die("Cant decode JSON file. Is it a valid JSON file? Error code x61.");


include("header.php");

echo "<h1>".$projectname."</h1>";
echo "<h2>JSON FILE</h2>";
echo "<h2>Debug</h2>";
echo "<pre>";
print_r($json_debug);
echo "</pre>";

echo "<hr /><h2>LANGUAGE FILE</h2>";
echo "<pre>";
print_r($LANG);
echo "</pre>";


echo "</div>";

include 'footer.php';
?>