<?php
$username = $_POST['username'];
$hash     = $_POST['hash'];
$request  = $_POST['request'];
$users = [
    "brenton"  => ["salt" => "ugheyvgwi", "hash" => "2a9ff6d25c482c6c8fd14d6031c76176"],
    "brentonold"  => ["salt" => "nosalt", "hash" => "0148600141959ca22640965b5eda51dc"],
    "james"    => ["salt" => "soheowu3h", "hash" => ""],
    "timothy"  => ["salt" => "oeih4o4u4", "hash" => ""],
];

if($request == "authenticate") {
    if($users[$username] && $users[$username]["hash"] && $users[$username]["hash"] == $hash){
        echo "You are authenticated!";
    } else {
        echo "Wrong username or password.";
    }
} else if ($request == "usersalt") {
    echo $users[$username]["salt"];
}
?>