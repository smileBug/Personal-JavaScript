// smileBug的脚本库

// 添加函数绑定到onload事件上
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.load != 'function') {
		window.load = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
// 在已有元素后插入一个新元素
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

//事件
var EventUtil = {

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
};
