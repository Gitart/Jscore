
/*******************************************************************************
 Проверка додатка
*******************************************************************************/
function changenumberdodatku()
{
  ddo=document.getElementById('<%=T_nomerdod.ClientID %>');
//Проверка ввода информации в поле даты
  if (ddo.value==null||ddo.value=="")
     {
      //document.getElementById('<%=D_description.ClientID %>').value = 'Обязательно введите значение';
        alert('Заповніть будьласка \n обовязково номер додатку \n' );
        ddo.focus();
      //alert('введите пож поля \n обязательно \n \n' + ddo );
      //ddo=5;
    }
}
/*******************************************************************************
 * Проверка правильности заполнения документа перед сохранением                *
 *******************************************************************************/
function Check_summ_dog()
{
// Проверка правильности вода суммы без запятой (запятую меняем на точку)
var doc_sum = document.getElementById('<%=T_sum.ClientID %>').value;
if (doc_sum.indexOf(',')!=-1)
   {
     document.getElementById('<%=T_sum.ClientID %>').value = doc_sum.replace(',','.');
   }
// Проверка дата подписания контракту
var datsgnapx = document.getElementById('<%=T_datadod.ClientID %>').value;
//if (datsgnapx.indexOf('01/01/1900')!=-1 || datsgnapx=="01/01/1900" || datsgnapx=="01.01.1900"))
if (datsgnapx=="01/01/1900" || datsgnapx=="01.01.1900")
   {
     document.getElementById('<%=T_datadod.ClientID %>').value = '';
   }
  
// Проверка выбор компании
      ddk=document.getElementById('<%=D_comp.ClientID %>');
  if (ddk.value==null||ddk.value==""||ddk.value==0)
     {
       alert('Оберіть будьласка \n обовязково компанию \n ');
       ddk.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddk.style.color           = '#FBFBEE';
       ddk.style.fontSize        = '12';               //размер шрифта
       ddk.focus();                                    //переход
       //Nemojlivo_save('N')
       return false;
      }
//   else
//      { 
//       Nemojlivo_save('Y')
//      }
      
      
   // Контрагент
      ddcs_3=document.getElementById('<%=D_contragent.ClientID %>');
  if (ddcs_3.value==null||ddcs_3.value==""||ddcs_3.value==0)
     {
       alert('Оберіть будьласка \n контрагента \n ');
       ddcs_3.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs_3.style.color           = '#FBFBEE';
       ddcs_3.style.fontSize        = '12';               //размер шрифта
       ddcs_3.focus();                                    //переход
       return false;
      }
   // Type Document
      ddcs_1=document.getElementById('<%=D_type.ClientID %>');
  if (ddcs_1.value==null||ddcs_1.value==""||ddcs_1.value==0)
     {
       alert('Оберіть будьласка \n тип документу \n ');
       ddcs_1.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs_1.style.color           = '#FBFBEE';
       ddcs_1.style.fontSize        = '12';               //размер шрифта
       ddcs_1.focus();                                    //переход
       return false;
      }
      
      
   // Vid Document
   /*
      ddcs_2=document.getElementById('<%=D_vid.ClientID %>');
  if (ddcs_2.value==null||ddcs_2.value==""||ddcs_2.value==0)
     {
       alert('Оберіть будьласка \n вид документу \n ');
       ddcs_2.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs_2.style.color           = '#FBFBEE';
       ddcs_2.style.fontSize        = '20';               //размер шрифта
       ddcs_2.focus();                                    //переход
       return false;
      }
   */
  
 // Провочину
      ddcs_3=document.getElementById('<%=D_provod.ClientID %>');
  if (ddcs_3.value==null||ddcs_3.value==""||ddcs_3.value==0)
     {
       alert('Оберіть будьласка \n правочину документу \n ');
       ddcs_3.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs_3.style.color           = '#FBFBEE';
       ddcs_3.style.fontSize        = '12';               //размер шрифта
       ddcs_3.focus();                                    //переход
       return false;
      }
 // Строк дії докумету
      ddcs_3=document.getElementById('<%=T_srok.ClientID %>');
  if (ddcs_3.value==null||ddcs_3.value==""||ddcs_3.value==0)
     {
       alert('Введіть будьласка \n строк дії документу \n ');
       ddcs_3.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs_3.style.color           = '#FBFBEE';
       ddcs_3.style.fontSize        = '12';               //размер шрифта
       ddcs_3.focus();                                    //переход
       return false;
      } 
       else
       {
         if (isDate(ddcs_3.value))
            {
             //ddcs_3.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
             //ddcs_3.style.color           = '#FBFBEE';
             //ddcs_3.style.fontSize        = '20';               //размер шрифта
             //ddcs_3.focus();
             //alert('Невірний формат дати \n (дд/мм/yyyy) \n ');
            }
      }
   // Дата підисання докумету
      ddcs_3=document.getElementById('<%=T_pidpis.ClientID %>');
  if (ddcs_3.value==null||ddcs_3.value==""||ddcs_3.value==0)
     {
       alert('Введіть будьласка \n дату підписання документу \n ');
       ddcs_3.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs_3.style.color           = '#FBFBEE';
       ddcs_3.style.fontSize        = '12';               //размер шрифта
       ddcs_3.focus();                                    //переход
       return false;
      } 
  // Проверка ввода в платежей оплат
      dds=document.getElementById('<%=D_pay.ClientID %>');
  if (dds.value==null||dds.value==""||dds.value==0||dds.value==0.00)
     {
       alert('Заповніть будьласка \n обовязково признак оплати \n' );
       dds.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       dds.style.color           = '#FBFBEE';
       dds.style.fontSize        = '12';               //размер шрифта
       dds.focus();                                    //переход
       return false;
      }
  // Номер договору
      ddcs=document.getElementById('<%=T_nomerdog.ClientID %>');
  if (ddcs.value==null||ddcs.value==""||ddcs.value==0)
     {
       alert('Оберіть будьласка \n номер договору \n ');
       ddcs.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddcs.style.color           = '#FBFBEE';
       ddcs.style.fontSize        = '12';               //размер шрифта
       ddcs.focus();                                    //переход
       return false;
      }
   // Проверка ввода в суммы
      ddo=document.getElementById('<%=T_sum.ClientID %>');
  if (ddo.value==null||ddo.value==""||ddo.value==0)
     {
       alert('Введіть будьласка суму договору  \n' );
       ddo.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddo.style.color           = '#FBFBEE';
       ddo.style.fontSize        = '12';               //размер шрифта
       ddo.focus();                                    //переход
       return false;
      }
  
 
  // Проверка выбора валют
      ddo=document.getElementById('<%=D_curr.ClientID %>');
  if (ddo.value==null||ddo.value==""||ddo.value==0)
     {
       alert('Оберіть будбласка валюту договору' );
       ddo.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
       ddo.style.color           = '#FBFBEE';
       ddo.style.fontSize        = '12';               //размер шрифта
       ddo.focus();                                    //переход
       return false;
      }
   
// All Correct     
   return true;
}
/*******************************************************************************
No Save This Documents
*******************************************************************************/
function Nemojlivo_save(variables)
{
if (variables='N')
   { 
     ddo=document.getElementById('<%=Upd_document.ClientID %>');
     ddo.style.backgroundColor = 'rgb(138, 38, 38)'; //цвет 
     ddo.style.color           = '#FBFBEE';
     ddo.style.fontSize        = '20';               //размер шрифта
   }
else
   {
     ddo=document.getElementById('<%=Upd_document.ClientID %>');
     ddo.style.backgroundColor = '#FFFFFF'; //цвет 
     ddo.style.color           = '#000000';
     ddo.style.fontSize        = '10';               //размер шрифта
   }
}
/*******************************************************************************
Get parameters querystring
*******************************************************************************/
function querySt(ji) 
    {
      hu = window.location.search.substring(1);
      gy = hu.split("&");
     
      for (i=0;i<gy.length;i++) {
           ft = gy[i].split("=");
       if (ft[0] == ji) {
           return ft[1];
         }
       }
    }
