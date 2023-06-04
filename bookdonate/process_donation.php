<?php
require "../connect.php";
//$con = mysqli_connect("localhost","admin","123","bss");
// Retrieve the form inputs
$user_id = '1';
$book_name = $_POST['book_name'];
$author = $_POST['author'];
$genre = $_POST['genre'];
$donatorEmail = $_POST['donatorEmail'];

$save__book = "INSERT INTO `book` (`User_id`, `Book_name`, `Author`, `Genre`, `Availability`) VALUES ('$user_id', '$book_name', '$author', '$genre', '1');";


$rs = mysqli_query($con, $save__book);

if($rs)
{
    echo "<h1>Thank you for your book donation!</h1>";
    echo "<p>Book Name: $book_name</p>";
    echo "<p>Author: $author</p>";
    echo "<p>Genre: $genre</p>";
    echo "<p>Donator Email: $donatorEmail</p>";
}


?>