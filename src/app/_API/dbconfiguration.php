<?php
include('cors.php');

/*$servername = "208.91.198.197";
$username = "paintingecom";
$password = "Balaji88@@";
$dbname = "dbpaintingecommerce";*/

// $servername = "localhost";
// $username = "prakhhya_Software2020";
// $password = "Software@2020";
// $dbname = "prakhhya_dbprakhhyatinfo";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbcom";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>