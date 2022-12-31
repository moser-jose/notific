
	function doTruncarStr(str, size){
		if (str==undefined || str=='undefined' || str =='' || size==undefined || size=='undefined' || size ==''){
			return str;
		}
		
		var shortText = str;
		if(str.length >= size+3){
			shortText = str.substring(0, size).concat('...');
		}
		return shortText;
	}

	function primeiroNome(str) {
		var arr = str.split(' ');
		return arr[0];
	}

	function primeiroUltimo(str) {
		var arr = str.split(' ');
		return arr[0] +" "+ arr[arr.length - 1];
	}
    
    export {doTruncarStr, primeiroUltimo, primeiroNome}