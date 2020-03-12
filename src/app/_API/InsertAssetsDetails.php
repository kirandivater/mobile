<?php
include('cors.php');
include('dbconfiguration.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "call spInsertAssetsDetails('$data->MakeId_','$data->AssetsMasterId_','$data->PhysicalAssetsId_','$data->AssetId_','$data->ModelNo_','$data->MfgSerialNo_' , '$data->MfgSerialNoInWord_' , '$data->BALMisId_' , '$data->BALMisIdChar_', '$data->MonitorSerialNo_' ,'$data->MonitorSerialNoInWord_','$data->FloorNo_', '$data->RoomName_','$data->ShopName_','$data->Landmark_')";

  //echo $sql;
//  $result = $conn->query($sql);

// if($result->num_rows > 0) {
//     $data = array();
//     while ($row = $result->fetch_assoc()) {
//         $data[] = $row;
//     }
    
//     echo json_encode($data);
// } else {
//     echo "0";
// }

//echo $sql;

$conn->close();
?>