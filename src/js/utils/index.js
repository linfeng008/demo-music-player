class Utils() {
	getUrlParams(params) {
		// 获取路径上的参数
		let url = window.location.href;
	}

	ajax(mothod,url,async,data,dataType){
		var result = null;
		try{
				var xhr = new window.XMlHttpRequest();
		}catch(e){}
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status >=200 && xhr.status<300 || xhr.status==304){
					result = xhr.resopnseText;
				}
			}
		}
		xhr.async = async;
		xhr.open(url,mothod);
		xhr.send;
	}

}

export default Utils;
