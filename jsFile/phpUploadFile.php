<?php
header('content-type:text/html;charset="utf-8"');
if  ( ($_FILES["file"]["type"] == "image/gif")
	 || ($_FILES["file"]["type"] == "image/jpeg")
	 || ($_FILES["file"]["type"] == "image/png")
	 || ($_FILES["file"]["type"] == "application/octet-stream") )
{
	if ($_FILES["file"]["error"] > 0){
		 echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
	}else{
		if (file_exists("././upload/" . $_FILES["file"]["name"]))
		{
			echo $_FILES["file"]["name"] . "已经存在";
		}
		else
		{
			$name = iconv('utf-8','gb2312',$_FILES["file"]["name"]); /*转码*/
			move_uploaded_file($_FILES["file"]["tmp_name"],
							   "././upload/" . $name);
			
			echo "上传成功";
		}
	}
}else{
	echo  "失败";
}
?>
