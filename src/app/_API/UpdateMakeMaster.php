<?php
include('cors.php');
include('dbconfiguration.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "call spUpdateMakeMaster('$data->MakeId_','$data->ModelName_','$data->ModelNumber_')";
$result = $conn->query($sql);

// if($result->num_rows > 0) {
//     $data = array();

//     while ($row = $result->fetch_assoc()) {
//         $data[] = $row;
//     }
    
//     echo json_encode($data);
// } else {
//     echo "0";
// }

$conn->close();
?>