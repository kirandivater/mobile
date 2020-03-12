<?php
include('cors.php');
include('dbconfiguration.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "call spInsertEngineerDetails('$data->EngName_','$data->EngSignature_','$data->EngDate_','$data->EngRemark_', '$data->LoginId_')";

//echo $sql;

$result = $conn->query($sql);

//echo $result;

$conn->close();
?>