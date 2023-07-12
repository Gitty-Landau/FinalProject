<?php
include_once("Classes/Database.php");
include_once("Classes/Donation.php");
include_once("Classes/Income.php");
include_once("Classes/UserAccount.php");
include_once("Classes/Category.php");



$db = new Database();
/*
$donation = new Donation("Shaarei Tzedek", 2000, date("Y/m/d"), 1, 1, $db);
echo $donation->GetCompanyName();
echo $donation->Insert();

$income =  new Income("Fidelity", 'false', 3000, date("Y/m/d"), 1, $db);
echo $income->GetCompanyName();
echo $income->Insert();



$category =  new Category("Hachnasas Kallah","#eb7ca6", $db);
echo $category->GetColor();
echo $category->Insert();*/

$user = new UserAccount("GittyLandau04@gmail.com", "Hello123", "Gitty", 10, $db, [2000,3000,4000],[300,4000]);
$user ->GetIncomeArr();
echo $user->GetEmail();
echo $user->Insert();