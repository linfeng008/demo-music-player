
// 获取网络类型
export 	function getNetWorkType() {
		switch (navigator.connection.type) {
			case 'wifi':
				return 'unknown';
			case '4g':
				return 'unknown';
			case '3g':
				return 'unknown';
			case '2g':
				return 'unknown';
			case 'none':
				return 'none';
			case 'ethernet':
				return 'ethernet';
			default:
				return 'unknown';
		}
	}

//格式化时间
export function dateFormat(newDate,mat){
  Date.prototype.format = function(format) {
      var date = {
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds(),
          "q+": Math.floor((this.getMonth() + 3) / 3),
          "S+": this.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
          format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in date) {
          if (new RegExp("(" + k + ")").test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
          }
      }
      return format;
  }
  return newDate.format(mat);
}

export function dateFormat(newDate,mat){
  Date.prototype.format = function(format) {
      var date = {
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds(),
          "q+": Math.floor((this.getMonth() + 3) / 3),
          "S+": this.getMilliseconds()
      };
      if (/(y+)/i.test(format)) {
          format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in date) {
          if (new RegExp("(" + k + ")").test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
          }
      }
      return format;
  }
  return newDate.format(mat);
}

export function checkENV(){
  const hostname = location.hostname;
  if(hostname.indexOf('120.26.203.72')){
    return 'online'; // 线上
  }else if(hostname.indexOf('192.168.1.181')){
    return 'test'; // 预发
  }else{
    return 'local'; // 本地
  }
}

// 获取url参数
export function getQueryString(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
