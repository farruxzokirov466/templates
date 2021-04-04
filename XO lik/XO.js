let value1;
let value2;
let bir;
let ikki;
let uch;
let turt;
let bew;
let olti;
let yetti;
let sakkiz;
let tuqqiz;
//X tugmasi uchun
$(document).ready(function(){
	$("#X").click(function(){        
         value1=$("#X").val();
         value2=$("#O").val();
         $("#p-1").text("X");
         $("#p-1").show();
         $("#p-2").text("O");
         $("#tanlov").hide();
         $("#tanlov1").show(); 
         $("#tablo").css("color","blue");
         $("#p-1").css("color","blue");
         $("#p-2").css("color","red"); 
         $("#play1").css("color","blue"); 
         $("#play2").css("color","red");
                
	});
});


//O tugmasi uchun
$(document).ready(function(){
	$("#O").click(function(){        
         value1=$("#O").val();
         value2=$("#X").val();
         $("#p-1").text("O");
         $("#p-1").show();
         $("#p-2").text("X");
         $("#tanlov").hide();
         $("#tanlov1").show();
         $("#tablo").css("color","red");
         $("#p-1").css("color","red");
         $("#p-2").css("color","blue");
         $("#play1").css("color","red"); 
         $("#play2").css("color","blue"); 
                
	});
});

//birinchi yacheyka uchun
$(document).ready(function(){
	$("#one").click(function(){
		let vl=$("#one").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	bir=value1;
         	 $("#one").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#one").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#one").css("color","red");
              }
             $("#tablo").text("Player 2")
             if((bir===bew && bir===tuqqiz) || (bir===turt && bir===yetti) || (bir===ikki && bir===uch)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	bir=value2
         	 $("#one").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#one").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#one").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((bir===bew && bir===tuqqiz) || (bir===turt && bir===yetti) || (bir===ikki && bir===uch)){
           $("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//ikki uchun
$(document).ready(function(){
	$("#two").click(function(){
		let vl=$("#two").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	ikki=value1;
         	 $("#two").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#two").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#two").css("color","red");
              }
             $("#tablo").text("Player 2")
              if((ikki===bir && ikki===uch) || (ikki===bew && ikki===sakkiz)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	ikki=value2;
         	 $("#two").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#two").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#two").css("color","red");
              }
             $("#tablo").text("Player 1")
              if((ikki===bir && ikki===uch) || (ikki===bew && ikki===sakkiz)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//uch uchun
$(document).ready(function(){
	$("#tre").click(function(){
		let vl=$("#tre").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	uch=value1;
         	 $("#tre").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#tre").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#tre").css("color","red");
              }
             $("#tablo").text("Player 2")
             if((uch===bew && uch===yetti) || (uch===bir && uch===ikki) || (uch===olti && uch===tuqqiz)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	uch=value2;
         	 $("#tre").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#tre").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#tre").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((uch===bew && uch===yetti) || (uch===bir && uch===ikki) || (uch===olti && uch===tuqqiz)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//turt uchun
$(document).ready(function(){
	$("#four").click(function(){
		let vl=$("#four").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	turt=value1;
         	 $("#four").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#four").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#four").css("color","red");
              }
             $("#tablo").text("Player 2")
             if((turt===bew && turt===olti) || (turt===bir && turt===yetti)){
           $("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	turt=value2;
         	 $("#four").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#four").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#four").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((turt===bew && turt===olti) || (turt===bir && turt===yetti)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//bew uchun
$(document).ready(function(){
	$("#five").click(function(){
		let vl=$("#five").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	bew=value1;
         	 $("#five").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#five").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#five").css("color","red");
              }
             $("#tablo").text("Player 2")
             if((bew===bir && bew===tuqqiz) || (bew===yetti && bew===uch) || (bew===ikki && bew===sakkiz) || (bew===turt && bew===olti)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	bew=value2;
         	 $("#five").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#five").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#five").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((bew===bir && bew===tuqqiz) || (bew===yetti && bew===uch) || (bew===ikki && bew===sakkiz) || (bew===turt && bew===olti)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//olti uchun
$(document).ready(function(){
	$("#six").click(function(){
		let vl=$("#six").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	olti=value1;
         	 $("#six").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#six").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#six").css("color","red");
              }
             $("#tablo").text("Player 2")
             if((olti===uch && olti===tuqqiz) || (olti===turt && olti===bew)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	olti=value2;
         	 $("#six").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#six").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#six").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((olti===uch && olti===tuqqiz) || (olti===turt && olti===bew)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//yetti uchun
$(document).ready(function(){
	$("#svn").click(function(){
		let vl=$("#svn").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	yetti=value1;
         	 $("#svn").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#svn").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#svn").css("color","red");
              }
             $("#tablo").text("Player 2")

             if((yetti===sakkiz && yetti===tuqqiz) || (yetti===turt && yetti===bir) || (yetti===bew &&yetti===uch)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	yetti=value2;
         	 $("#svn").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#svn").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#svn").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((yetti===sakkiz && yetti===tuqqiz) || (yetti===turt && yetti===bir) || (yetti===bew &&yetti===uch)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//sakkizinchi yacheyka uchun
$(document).ready(function(){
	$("#eight").click(function(){
		let vl=$("#eight").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	sakkiz=value1;
         	 $("#eight").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#eight").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#eight").css("color","red");
              }
             $("#tablo").text("Player 2")
             
             if((sakkiz===ikki && sakkiz===bew) || (sakkiz===yetti && sakkiz===tuqqiz)){
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         } else if(a==="Player 2"){
         	sakkiz=value2;
         	 $("#eight").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#eight").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#eight").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((sakkiz===bew && sakkiz===ikki ) || (sakkiz===yetti && sakkiz===tuqqiz)){
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//tuqqizinchi yacheyka uchun
$(document).ready(function(){
	$("#nine").click(function(){
		let vl=$("#nine").val();
		if (value1 || value2) {
        if (!vl) {
         let a=$("#tablo").text();
         if(a==="Player 1"){
         	tuqqiz=value1;
         	 $("#nine").val(value1);
         	 $("#p-1").hide();
             $("#p-2").show();
             if(value1==="X"){
             $("#tablo").css("color","red");
             $("#nine").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#nine").css("color","red");
              }
             $("#tablo").text("Player 2")

           if((tuqqiz===bew && tuqqiz===bir) || (tuqqiz===uch && tuqqiz===olti) || (tuqqiz===yetti && tuqqiz===sakkiz)){
           	
           	$("#tablo").text("Player 1 WIN!!!");
           	if(value1==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }

           }

         } else if(a==="Player 2"){
         	tuqqiz=value2;
         	 $("#nine").val(value2);
         	 $("#p-1").show();
             $("#p-2").hide();
             if(value2==="X"){
             $("#tablo").css("color","red");
             $("#nine").css("color","blue");
              } else {
              	$("#tablo").css("color","blue");
              	$("#nine").css("color","red");
              }
             $("#tablo").text("Player 1")
             if((tuqqiz===bew && tuqqiz===bir) || (tuqqiz===uch && tuqqiz===olti) || (tuqqiz===yetti && tuqqiz===sakkiz)){
           	
           	$("#tablo").text("Player 2 WIN!!!");
           	if(value2==="X"){
             $("#tablo").css("color","blue");
           
              } else {
              	$("#tablo").css("color","red");
              	
              }
           }
         }       
         } } else {
         	alert("Oldin X yoki O ni tanlang!");
         }
	});
});

//continue tugmasi
$(document).ready(function(){
	$("#Con").click(function(){        
         $("#one").val("");
         $("#two").val("");
         $("#tre").val("");
         $("#four").val("");
         $("#five").val("");
         $("#six").val("");
         $("#svn").val("");
         $("#eight").val("");
         $("#nine").val(""); 
         if(value1==="X"){
             $("#tablo").css("color","blue");
             $("#play1").css("color","blue"); 
             $("#play2").css("color","red");
              } else {
              	$("#tablo").css("color","red");
              	$("#play1").css("color","red"); 
                $("#play2").css("color","blue");
              }
          bir="";
          ikki="";
          uch="";
          turt="";
          bew="";
          olti="";
          yetti="";
          sakkiz="";
          tuqqiz="";
          $("#tablo").text("Player 1"); 
         if(value1==="X"){
         $("#p-1").text("X"); 
         $("#p-2").hide();
         $("#p-1").show();
         } else {
         	$("#p-1").text("O");
         	$("#p-2").hide();
         	$("#p-1").show(); 
         }         
	});
});

//new game tugmasi
$(document).ready(function(){
	$("#New").click(function(){        
         value1="";
         value2="";
         $("#p-1").text("");
         $("#p-2").text("");
         $("#p-1").hide();
         $("#p-2").hide();
         $("#tanlov").show();
         $("#tanlov1").hide(); 
         $("#tablo").text("Player 1");
         $("#tablo").css("color","black");
          $("#one").val("");
         $("#two").val("");
         $("#tre").val("");
         $("#four").val("");
         $("#five").val("");
         $("#six").val("");
         $("#svn").val("");
         $("#eight").val("");
         $("#nine").val("");
         bir="";
          ikki="";
          uch="";
          turt="";
          bew="";
          olti="";
          yetti="";
          sakkiz="";
          tuqqiz="";
          $("#play1").css("color","black"); 
          $("#play2").css("color","black");
                
	});
});