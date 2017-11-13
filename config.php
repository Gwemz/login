<?php
	$dbhost='localhost';
	$username='root';
	$password="";
	$dbname="text1606";
	$port=3306;
	$charset="utf8";
	$con=mysqli_connect($dbhost,$username,$password,$dbname,$port);
	print_r($con);
	
?>