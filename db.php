<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "studentdb";

$conn = mysqli_connect($host, $user, $password, $database, 3306);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>