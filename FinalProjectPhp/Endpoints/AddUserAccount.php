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
include '../Classes/UserAccount.php';



$db = new Database();
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);


 if(!is_array($decoded) || empty($decoded['email']) || empty($decoded['password']) || empty($decoded['name']) || empty($decoded['maaserPercent'])) {
  http_response_code(404);
  echo json_encode(['error' => 'Some required information is missing']);
 
} 
 else {
    $user = new UserAccount($decoded['email'],$decoded['password'],$decoded['name'],$decoded['maaserPercent'],$db);
    $newID = $user->Insert();
    echo $newID;
 }



?>