<?php
include('cors.php');
include('dbconfiguration.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "call spInsertAssetsUsageType('$data->MakeId_','$data->VendorPersonName_','$data->VendorCompanyName_',
'$data->AssetsUsageTypeMasterId_','$data->VendorTeamPurpose_')";

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

echo $result;

$conn->close();
?>