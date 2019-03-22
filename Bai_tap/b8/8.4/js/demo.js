
var n;
 var m;
 var k;
 n=prompt("nhap N");
n=parseFloat(n);

 m=prompt("nhap M");
 m=parseFloat(m);

 k=prompt("nhap K");
 k=parseFloat(k);
 var tong = 0;
 if (n<m){
 	for (var i = n; i < m ; i++){
 		if (i % k == 0) {
			tong=tong+i;
		}


 	}
 }
 else{
    alert("ban can nhap dung gia tri cua N va M")
}


 alert(tong);