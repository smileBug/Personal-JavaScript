// smileBug的脚本库
var sb = {
	//事件
	EventUtil : {

		//添加事件处理程序
		addHandler : function(element,type,handler){
			if (element.addEventListener) {
				element.addEventListener(type,handler,false);
			}else if (element.attachEvent) {
				element.attachEvent('on' + type,handler);
			}else {
				element['on' + type] = handler;
			}
		},

		//返回对event对象的引用
		getEvent : function(event){
			return event ? event : window.event;
		},

		//返回事件的目标
		getTarget : function(event){
			return event.target || event.srcElement;
		},

		//取消事件的默认行为
		preventDefault : function(event){
			if (event.preventDefault) {
				event.preventDefault();
			}else {
				event.returnValue = false;
			}
		},

		//删除事件处理程序
		removeHandler : function(element,type,handler){
			if (element.removeEventListener) {
				element.removeEventListener(type,handler,false);
			}else if (element.detachEvent) {
				element.detachEvent('on' + type,handler);
			}else {
				element['on' + type] = null;
			}
		},

		//阻止事件流
		stopPropagation : function(event){
			if (event.stopPropagation) {
				event.stopPropagation();
			}else {
				event.cancebubble = true;
			}
		}
	},


	// 添加函数绑定到onload事件上
	addLoadEvent : function(func){
		var oldonload = window.onload;
		if (typeof window.load != 'function') {
			window.load = func;
		}else{
			window.onload = function(){
				oldonload();
				func();
			}
		}
	},

	// 在已有元素后插入一个新元素
	insertAfter : function(newElement,targetElement){
		var parent = targetElement.parentNode;
		if (parent.lastChild == targetElement) {
			parent.appendChild(newElement);
		}else{
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
	},

	//类型判断
	isArray : function(value){ //判断数组，注意 instanceof 的局限性
		return Object.prototype.toString.call(value) == "[object Array]";
	},
	// 同样，也可以基于这一思路来测试 某个值是不是原生函数或正则表达式：
	isFunction : function(value){
		return Object.prototype.toString.call(value) == "[object Function]";
	},

	isRegExp : function(value){
		return Object.prototype.toString.call(value) =="[object RegExp]";
	},

  typeOf : function(value){
    var arr = Object.prototype.toString.call(val);
	  return arr.slice(8,-1);
  },

	//判断属性是否来自于其原型对象-->判断name属性是否来自object对象的原型对象
	getPrototypeProperty : function(object,name){
		return !object.hasOwnProperty(name) && (name in object);
	},

	//数组

	//数组升序排列，并返回该数组
	promote : function(arr){
		arr.sort(function(value1,value2){			//sort(),两个值的比较，传入sort的参数为正，则互换两数值位置，为负，则不变。
			return value1 > value2 ? 1 :-1;
		});
		return arr;
	},

	//数组降序排列，并返回该数组
	decline : function(arr){
		arr.sort(function(value1,value2){
			return value2 > value1 ? 1 :-1;
		})
		return arr;
	},


  //各个类型的深复制
  clone : function(val){
	  var arr = Object.prototype.toString.call(val);
	  var test = arr.slice(8,-1);
	  switch(test){

	  	//如果是array数组类型，则创建一个空数组，按顺序挨个把原数组的值复制过去。
	  	case "Array":
	  		var oarr = [];
	  		for (var i = 0; i < val.length; i++) {
	  			oarr.push(val[i]);
	  		}
	  		return oarr;
	  		break;
	  	//如果是object对象，则创建一个空对象，将原对象的属性挨个复制过去
	  	case "Object":
	  	  var obj = {};
	  	  for(key in val){
	  	  	obj.key = val.key;
	  	  }
	  	  return obj;
	  	  break;
	  	 //如果是string、number或boolean类型，则直接复制其值；
	  	default:
	  	  return val;
	  	  break;
  	}
	},


}










