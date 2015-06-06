<?php

$username = $_POST["username"];
$hash     = $_POST["hash"];

$users = array (
    "brenton"  => array("salt" => "nosaltyet", "hash" => "0148600141959ca22640965b5eda51dc"),
    "james"    => array("salt" => "nosaltyet", "hash" => ""),
    "timothy"  => array("salt" => "nosaltyet", "hash" => ""),
);
echo $username . " : " . $hash;

if($users[$username]["hash"] == $hash){
    echo "true";
} else {
    echo "false";
}
?>