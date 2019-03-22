function enterNumberic(thongbao){
	var m;
	do{
		m=prompt("nhap"+thongbao+":");
		m=parseInt(m);

	}
	while (isNaN(m) || m<=0) 
		return m;
}
var n;
n=enterNumberic("n");
var mang=new Array(n);
for (var i = 0; i < n; i++) {
	mang[i]=enterNumberic("phan tu thu "+(i+1));
}


var tong=0.0;
for (var i=0;i<mang.length;i++){
	tong=tong+1.0/mang[i];
}
 alert(tong);


