
	// 借助于json传参,没有顺序关系
	// ajax({})
	// url:''
	// method:'get||post' 默认是get
	// asynch:true||false  默认true
	// data:{u:'admin',p:123456},
	// dataType:'text||xml||json'
	// success:function(data){
	// 	    处理数据
	// }


function ajax(o){
	if(!o.url){         //没有请求地址
		return false;
	}

	var method=o.method==undefined?'get':o.method; //请求方法
	var asynch=o.asynch==undefined?true:o.asynch; //请求类型
	var dataType=o.dataType==undefined?"text":o.dataType; //数据类型

	var str='';   //声明放登录名和密码的字符串
	if(o.data){
		for(var i in o.data){    //遍历登录名和密码
			str+=i+'='+o.data[i]+'&';  //将登录名和密码连接起来
		}
		//u=admin&p=123&
		str=str.slice(0,-1);//去掉最后的那个&
	}

	var xhr=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	//get请求方式
	if(method=='get'){
		if(o.data){   //有登陆名和密码时
			xhr.open('get',o.url+'?'+str,asynch);
		}else{
			xhr.open('get',o.url,asynch);
		}
		xhr.send();
	}

	//post请求方式
	if(method=='post'){
		xhr.open('post',o.url,asynch);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//设置请求头
		xhr.send(str);  //post请求方式时 将登录名和密码放到send()里
	}

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){   //响应完成
    		if(xhr.status==200){   //请求成功 
    			//判断数据类型
    			if(dataType=='text'){
    				o.success&&o.success(xhr.responseText);  //容错处理  如果符合o.success就执行o.success(xhr.responseText);
    			}
    			if(dataType=='xml'){
    				o.success&&o.success(xhr.responseXML);
    			}
    			if(dataType=='json'){
    				console.log(xhr.responseText);
    				// alert(xhr.responseText);
    				var obj=eval(xhr.responseText); //xhr.responseText 类型为字符串  将它转换成一个数组
    				o.success&&o.success(obj);
    			}
    		}
    		if(xhr.status==404){
    			alert('页面未找到')
    		}
		}
	}

}

// <?php
// 	$arr=Array(
// 		0=>Array('u'=>'admin','p'=>'123');
// 		1=>Array('u'=>'admin','p'=>'123');
// 		2=>Array('u'=>'admin','p'=>'123');
// 	);
// 	echo json_encode($arr);
// ?>


// ajax({
// 	url:'user.php',
// 	dataType:'json',
// 	success:function(data){
// 		console.log(data);
// 	}
// })