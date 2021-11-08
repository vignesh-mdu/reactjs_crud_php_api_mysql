<?php
header("Access-Control-Allow-Origin: *");
$host = "localhost";
$user = "root";
$password = "";
$dbname = "reactjs_sending_post_request";
$con = mysqli_connect($host, $user, $password,$dbname);
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
$ArrUsers = [];
$sql = "select * from users";
$result = mysqli_query($con,$sql);
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}
for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
    $ArrUsers[] = mysqli_fetch_assoc($result);
}
if(!empty($_POST)) {
    if($_POST['my_data']) {
        $my_data = json_decode($_POST['my_data'],true);
        $username = $my_data['username'];
        $age = $my_data['age'];
        $role = $my_data['role'];
        $sql = "insert into users (username,age,role) values ('$username', '$age', '$role')";
        $ins_result = mysqli_query($con,$sql);
        echo $ins_result;
        /*if($ins_result == 1) {
            $sql = "select * from users";
            $result = mysqli_query($con,$sql);
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }
            for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
                $ArrUsers[] = mysqli_fetch_assoc($result);
            }
            echo json_encode($ArrUsers);
        }*/
    }
}
else {
    echo json_encode($ArrUsers);
}

