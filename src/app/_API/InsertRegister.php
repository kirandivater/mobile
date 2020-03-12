<?php
include('cors.php');
include('dbconfiguration.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "call spInsertLoginMaster( '$data->AddressProofId_', '$data->FullName_' , '$data->EmailId_' ,
 '$data->ContactNo_'  , '$data->Address_' , '$data->Pincode_' ,
  '$data->Pwd_' )";
$result = $conn->query($sql);

echo $result;

// echo $result;

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