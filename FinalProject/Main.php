<?php
include_once("Classes/Database.php");
include_once("Classes/Donation.php");
$db = new Database();
$donation = new Donation("Shaarei Tzedek", 2000, date("Y/m/d"), 1, 1, $db);
echo $donation->Insert();
