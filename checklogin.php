<?php
$params = json_decode(file_get_contents('php://input'),true);
$username = $params["username"];
$hash     = $params["hash"];
$users = array (
    "brenton"  => array("salt" => "nosaltyet", "hash" => "0148600141959ca22640965b5eda51dc"),
    "james"    => array("salt" => "nosaltyet", "hash" => ""),
    "timothy"  => array("salt" => "nosaltyet", "hash" => ""),
);

// for debugging. echo $username . " : " . $hash;
if($users[$username]["hash"] == $hash){
    echo "true";
} else {
    echo "false";
}
?>