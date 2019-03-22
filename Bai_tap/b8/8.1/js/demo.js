
// function enterNumberic(thongbao){
// 	var m;
// 	do{
// 		m=prompt("nhap"+thongbao+":");
// 		m=parseInt(m);

// 	}
// 	while (isNaN(m) || m<=0) 
// 		return m;
// }
// var n;
// n=enterNumberic("n");
// var mang=new Array(n);
// for (var i = 0; i < n; i++) {
// 	mang[i]=enterNumberic("phan tu thu "+(i+1));
// }
//  var tong=0.0;
//  for (var i=0;i<mang.length;i++){
//  	tong=tong+mang[i]/mang[i]*i;
//  }
//  alert(tong);




// var n;
// var m;
// var k;
// n=prompt("nhap N");
// n=parseFloat(n);

// m=prompt("nhap M");
// m=parseFloat(m);

// k=prompt("nhap K");
// k=parseFloat(k);
// var tong = 0;
// if (n<m){
// 	for (var i = n; i < m ; i++){
// 		if (i % k == 0) {
// 			tong=tong+i;
// 		}


// 	}
// }
// else{
//    alert("ban can nhap dung gia tri cua N va M")
// }


// alert(tong);



 var dem=0;
  for (var i = 1; i < 100; i++){
     if (i % 3 == 0){
    	dem=dem+1;
       
    }
} 
 alert("Số các chữ số chia hết cho 3 là:"+ dem);

