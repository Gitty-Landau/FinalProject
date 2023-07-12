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
include '../Classes/Category.php';



$db = new Database();
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);


 if(!is_array($decoded) || empty($decoded['name']) || empty($decoded['color'])) {
  http_response_code(404);
  echo json_encode(['error' => 'Some required information is missing']);
 
} 
 else {
    $category = new Category($decoded['name'],$decoded['color'],$db);
    $newID = $category->Insert();
    echo $newID;
 }



?>