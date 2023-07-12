<?php 
declare(strict_types=1);
include_once("Database.php");

class Category
{
    //Attributes
    private $name;
    private $color;
    private $db;
    //Constructor
    public function __construct(string $name, string $color,object $db)
    {
        $this->name=$name;
        $this->color=$color;
        $this->db=$db;
    }
    //Getters
    public function GetName():string{
        return $this->name;
    }
    public function GetColor():string{
        return $this->color;
    }
 
    //Insert
    public function Insert(): int
    {
        $result = $this->db->query("INSERT INTO Categories (Name, Color) VALUES(?,?)", [$this->name, $this->color]);
        return $result->insert_id;
    }
}
?>