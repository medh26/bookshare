<?php
require "../connect.php"; 

// Retrieve form data
$name = $_POST['name'];
$faculty = $_POST['faculty'];
$year = $_POST['year'];
$email = $_POST['email'];
$phone = $_POST['phone'];

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Insert user details into the database
$sql = "INSERT INTO `user` (`user_name`, `faculty`, `year`, `email`, `phone_number`) VALUES ('$name', '$faculty', '$year', '$email', '$phone')";
if ($con->query($sql) === TRUE) {
   $last_insert_id = $con->insert_id;
    echo "Registration successful! User ID: " . $last_insert_id ;
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();
?>
