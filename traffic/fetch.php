<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

exit(0);
}

include('dbconnect.php');

$sql = "SELECT `LID`, `TID`, `Lane1`, `Lane2`, `TT_Lane1`, `TT_Lane2`, `Date_` FROM `trafficLanes` ORDER BY `LID` DESC LIMIT 1";
// $sql ="SELECT Lane1, Lane2, TT_Lane1, TT_Lane2 FROM trafficLanes,";
// WHERE TID = 1";
//$sql2 = select LID, (SUM(TT_lane1)+SUM(TT_lane2)) from trafficLanes group by LID DESC LIMIT 1;


$result = mysqli_query($con, $sql);

$response = array();

while($row = mysqli_fetch_array($result))
{
array_push($response, array(        "Lane1"=>$row[2],
                                    "Lane2"=>$row[3],
                                    "TT_Lane1"=>$row[4],
                                    "TT_lane2"=> $row[5]));

}

echo json_encode($response);
mysqli_close($con)

?>

