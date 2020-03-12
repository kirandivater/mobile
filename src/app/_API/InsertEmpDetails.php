<?php
include('cors.php');
include('dbconfiguration.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "call spInsertEmpDetails('$data->LoginId_',
'$data->EmpSignature_','$data->EmpDate_','$data->EmpRemark_', '$data->EmpName_')";
$result = $conn->query($sql);

echo $result;

$conn->close();
?>