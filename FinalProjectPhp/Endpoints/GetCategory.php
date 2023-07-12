<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include '../Classes/Database.php';
include '../Classes/Category.php';

$db = new Database();
if(isset($_GET['id'])) {
    http_response_code(200);
    $result = $db->query("Select * from Categories where CategoryID = ?", [$_GET['id']])->get_result();

    $donationArr = [];

    while($row = $result->fetch_assoc()) {
    $category = new Category($row['Name'], $row['Color'],$db);
    $categoryArr[] = $category;
    }

    echo json_encode($categoryArr);
}
else
{
    http_response_code(400);
}




?>