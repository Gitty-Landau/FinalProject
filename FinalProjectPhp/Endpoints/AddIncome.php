<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, origin, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  header('HTTP/1.1 200 OK');
  exit();
}
include '../Classes/Database.php';
include '../Classes/Income.php';



$db = new Database();
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);


 if(!is_array($decoded) || empty($decoded['companyName']) || empty($decoded['exempt']) || empty($decoded['amount']) || empty($decoded['date']) || empty($decoded['userID'])) {
  http_response_code(404);
  echo json_encode(['error' => 'Some required information is missing']);
 
} 
 else {
    $phpdate = strtotime( $decoded['date'] );
    $mysqldate = date( 'Y-m-d', $phpdate);
    $income = new Income($decoded['companyName'],$decoded['exempt'],$decoded['amount'],$mysqldate,$decoded['userID'],$db);
    $newID = $income->Insert();
    echo $newID;
 }



?>