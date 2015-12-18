function window_contragent(){}
 /*************************************************************************************************************************************************** 
   Плавное открытие - закрытие дива  
   Три параметра :
   1 - ID объекта дива
   2 - высота на которую он окрывается
   3 - скросоть чем больше тем быстрее скрость
   onclick="show('hidden_2',400,10)
 ****************************************************************************************************************************************************/
 /*<![CDATA[*/
 var s=[], s_timer=[];
 function show(id, h, spd)
 { 
    s[id]=s[id]==spd?-spd:spd;
    s_timer[id] = setTimeout(function() {
       var obj  = document.getElementById(id);
       if(obj.offsetHeight+s[id]>=h)
         {obj.style.height=h+"px"; obj.style.overflow="auto";}
       else if (obj.offsetHeight + s[id]<=0)
         {obj.style.height = 0 + "px"; obj.style.display="none";}
       else 
         {
           obj.style.height   =(obj.offsetHeight+s[id])+"px"; 
           obj.style.overflow = "hidden"; 
           obj.style.display  = "block"; 
           setTimeout(arguments.callee, 10);
         }}, 10); }
 /*]]>*/
