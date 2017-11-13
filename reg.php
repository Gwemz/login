<?php
	// 引入config.php文件
	include("config.php");
	// 屏蔽警告信息
	error_reporting(0);
	// var_dump($con);
	$user=$_POST['user'];
	$psw=$_POST['psw'];
	$email=$_POST['email'];
	// 往数据库中插入用户的注册信息
	$sql="INSERT INTO `user`(`username`,`password`,`email`)VALUES('{$user}','{$psw}','{$email}')";
	
	mysqli_query($con,$sql);
	// 如果插入失败 返回0  插入成功 返回1
	// 返回错误代码值,如果没有发生错误则返回0
	if(mysqli_errno()){
		echo 0;
	}else{
		echo 1;
	};
	


	/*$user=$_POST('user');
	$psw=$_POST('psw');
	$email=$_POST('email');
	$arr=Array();
	$arr['user']=$user;
	$arr['psw']=$psw;
	$arr['email']=$email;
	echo json_encode($arr);*/


?>