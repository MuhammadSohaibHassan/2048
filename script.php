<?php
header("Content-Type: application/json");
// Database connection parameters
$servername = "sql301.infinityfree.com"; // Replace with your server's hostname (e.g., localhost)
$username = "if0_35317338"; // Replace with your MySQL username
$password = "PhFdKxVlXbzghG"; // Replace with your MySQL password
$database = "if0_35317338_blooddonars"; // Replace with your database name
$table = "users"; // Replace with your table name

// Create a connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $database);

// Check the database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to retrieve data from the users table
$sql = "SELECT id, name, phone, address, bg FROM $table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Array to hold the fetched data
    $rows = [];

    // Fetch each row from the database result and store in the array
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    // Set the response content type to JSON
    header("Content-Type: application/json");

    // Output the data as a JSON string
    echo json_encode($rows);
} else {
    // If no records are found, output a message
    echo "No records found";
}

// Close the database connection
$conn->close();
exit();
?>