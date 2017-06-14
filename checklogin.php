<?php
$username = $_POST['username'];
$hash     = $_POST['hash'];
$users = array (
    "brenton"  => array("salt" => "nosaltyet", "hash" => "0148600141959ca22640965b5eda51dc"),
    "james"    => array("salt" => "nosaltyet", "hash" => ""),
    "timothy"  => array("salt" => "nosaltyet", "hash" => ""),
);

// for debugging. echo $username . " : " . $hash;
if($users[$username] && $users[$username]["hash"] && $users[$username]["hash"] == $hash){
    echo "You are authenticated";
} else {
    echo "Wrong username or password.";
}
?>