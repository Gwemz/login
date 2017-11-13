<?php 

	// include("config.php");
	// check.php?u='+this.v
	// 连接数据库需要的信息
	$dbhost='localhost';
	// 用户名称
	$username='root';
	// 数据库密码
	$password="";
	// 数据库名称
	$dbname="text1606";
	// 端口号为3306
	$port=3306;
	// 编码格式
	$charset="utf8";
	$con=mysqli_connect($dbhost,$username,$password,$dbname,$port);
	// var_dump($con);
	// 查询'user'表中的用户名username
	$sql="SELECT `username` FROM `user`";
	// 对数据库进行查询
	$res=mysqli_query($con,$sql);
	// 返回索引数组形式数据
	$arr=mysqli_fetch_all($res);
	// 计算数组的长度
	$len=count($arr);
	$user = $_GET['u'];
	$flag=1;
	for($i=0;$i<$len;$i++){
		if($user==$arr[$i][0]){
			$flag=0;
			break;
		};
	};
	echo $flag;
	/*var_dump($res);
	print_r($arr);*/

	/*$user = $_GET['u'];
	$arr = Array('admin','zhangsan','allcky');
	$len = count($arr);
	$flag = 1;
	for ($i=0; $i <$len; $i++) { 
		if ($user==$arr[$i]) {
			$flag = 0;
			break;
		};
	};
	echo $flag;*/

	// http://localhost/8.19/denglu/login.php?u=admin

 ?>