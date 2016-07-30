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