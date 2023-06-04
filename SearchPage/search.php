<!-- search.php -->

<?php
// Connection to the MySQL database
$host = 'localhost';
$db = 'bookstore';
$user = 'root';
$password = '';

$connection = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $password);

// Retrieve search query and category from the form submission
$query = $_GET['query'] ?? '';
$category = $_GET['category'] ?? '';

// Prepare the SQL query based on search criteria
$sql = "SELECT * FROM books WHERE title LIKE :query";
$params = [':query' => "%$query%"];

if (!empty($category)) {
    $sql .= " AND category = :category";
    $params[':category'] = $category;
}

// Execute the query
$statement = $connection->prepare($sql);
$statement->execute($params);
$books = $statement->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Search Results</title>
    <style>
        /* Add your CSS styling here */
    </style>
</head>
<body>
    <h1>Search Results</h1>

    <form action="search.php" method="GET">
        <input type="text" name="query" placeholder="Search books..." value="<?= $query ?>">
        <select name="category">
            <option value="">All Categories</option>
            <option value="Educational" <?= ($category === 'Educational') ? 'selected' : '' ?>>Educational</option>
            <option value="Biography" <?= ($category === 'Biography') ? 'selected' : '' ?>>Biography</option>
            <option value="Fiction" <?= ($category === 'Fiction') ? 'selected' : '' ?>>Fiction</option>
            <option value="Thriller" <?= ($category === 'Thriller') ? 'selected' : '' ?>>Thriller</option>
            <option value="Historical" <?= ($category === 'Historical') ? 'selected' : '' ?>>Historical</option>
            <option value="Travel" <?= ($category === 'Travel') ? 'selected' : '' ?>>Travel</option>
            <option value="Health" <?= ($category === 'Health') ? 'selected' : '' ?>>Health</option>
            <option value="Romance" <?= ($category === 'Rom
