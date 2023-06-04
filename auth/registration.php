<?php
require "../connect.php"; // Assuming the file that establishes the database connection is named "connect.php"

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $name = $_POST["name"];
    $studentNumber = $_POST["studentnumber"];
    $faculty = $_POST["faculty"];
    $year = $_POST["year"];
    $email = $_POST["email"];
    $phone = $_POST['phone'];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirm_password"];

    // Validate the form data (e.g., check for empty fields, password match, etc.)
    // ...

    // Insert the user details into the database
    $sql = "INSERT INTO `user` (`studentnumber`, `user_name`, `faculty`, `year`, `email`, `phone_number`) 
    VALUES ('$studentNumber', '$name', '$faculty', '$year', '$email', '$phone')";

    if ($con->query($sql) === true) {
        // Registration successful
        echo "Registration successful. Redirecting to login page...";
        header("Location: loginn.html");
        exit;
    } else {
        // Registration failed
        echo "Error: " . $sql . "<br>" . $con->error;
    }
}


$con->close();
?>
