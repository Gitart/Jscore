## Load 


```js
//  Загрузка данных в элементы
function Dataloads(){
             //List items
            var d1 = [
                         {"name":"Go lang daemon",       "icon":"fa-apple",    "link": "https://habrahabr.ru/post/187668/"},
                         {"name":"Twelve Go Best Practices - Francesc Campoy",  "icon":"fa-facebook", "link": "https://www.youtube.com/watch?v=8D3Vmm1BGoY"},
                         {"name":"101 hacks for GO",   "icon":"fa-twitter",     "link": "https://github.com/NanXiao/golang-101-hacks/blob/master/posts/goroutine.md"},
                         {"name":"Статический сервер",    "icon":"fa-reddit",   "link": "https://github.com/golang/go/wiki/HttpStaticFiles"},
                         {"name":"Эффективный ГО",    "icon":"fa-google",        "link": "https://golang.org/doc/effective_go.html"}
                       ];
 
            var d2 = [
                         {"name":"Grunt", "link":"https://gruntjs.com/getting-started"},
                         {"name":"Паттерны проектирования",  "link":"https://tproger.ru/translations/design-patterns-for-beginners/"},
                         {"name":"Шпаргалка по шаблонам проектирования",  "link":"https://habrahabr.ru/post/210288/"},
                         {"name":"Микросервисы на ГО",  "link":"https://www.slideshare.net/appleboy/write-microservice-in-golang?utm_source=slideshow&utm_medium=ssemail&utm_campaign=download_notification"},
                         {"name":"Gorilla web tool kit", "link":"http://www.gorillatoolkit.org/"}
                       ];

            var d3 = [
                         {"name":"Security tips for GO", "link":"https://www.slideshare.net/karthequian/13-practical-tips-for-writing-secure-golang-applications?utm_source=slideshow&utm_medium=ssemail&utm_campaign=download_notification"},
                         {"name":"Writing web applications", "link":"https://golang.org/doc/articles/wiki/#tmp_1"},
                         {"name":"Redis", "link":"http://eax.me/redis/"},
                         {"name":"GO Database library", "link":"https://golanglibs.com/category/databases"},
                         {"name":"Курс лекций на ГО на Ютубе", "link":"https://www.youtube.com/watch?v=W9CZvnfaJUI"},

                         {"name":"CSV", "link":"https://golanglibs.com/category/csv?sort=top"}
                       ];
              

            var d4 = [
                         {"name":"ГО библиотека", "link":"https://github.com/lib/pq/blob/a6140c91df5fb9306106d6de5f533783eacc1392/doc.go"},
                         {"name":"Фреймворк для бота", "link":"https://github.com/strongo/bots-framework"},
                         {"name":"Методы на ГО", "link":"http://grokbase.com/t/gg/golang-ru/14bsz9585m/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%D1%8B-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BC%D0%BE%D0%B3%D0%B8%D1%82%D0%B5-%D0%B8%D1%85-%D0%BE%D1%81%D0%BE%D0%B7%D0%BD%D0%B0%D1%82%D1%8C-%D0%BD%D0%B0-%D0%BD%D0%BE%D1%80%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%BC"},
                         {"name":"Интерфейсы", "link":"https://habrahabr.ru/post/276981/"},
                         {"name":"ООП", "link":"https://habrahabr.ru/post/243593/"},
                         {"name":"Книга по ГО", "link":"http://golang-book.ru/chapter-09-structs-and-interfaces.html"}
                     ];

            var d5 = [
                         {"name":"Параллельный английский", "link":"http://audiorazgovornik.ru/about-science-and-technology-in-american-english/458--where-did-the-english-language-come-from"},
                         {"name":"Корректный английский", "link":"http://www.correctenglish.ru/speaking/dialogues/fill-the-gaps/"},
                         {"name":"Он лайн английский", "link":"http://online-teacher.ru/study/dialogues-in-english"},
                         {"name":"Книга ГО", "link":"https://books.google.com.ua/books?id=CIItDwAAQBAJ&pg=PT198&dq=golang&hl=ru&sa=X&ved=0ahUKEwj2jL7qtKLWAhUJIpoKHVCEDpwQ6AEINjAC#v=onepage&q=golang&f=false"},
                         {"name":"ООП", "link":"https://habrahabr.ru/post/243593/"},
                         {"name":"ООП Яваскрипт", "link":"https://developers.google.com/web/updates/2017/06/object-rest-spread"},
                         {"name":"Админка", "link":"http://admindesigns.com/demos/admin/README/index.html"},
                         {"name":"Много примеров по будстрапу", "link":"https://mdbootstrap.com/sections/contact-sections/"},
                         {"name":"Примеры по материал дизайну", "link":"https://getmdl.io/templates/index.html"},
                         {"name":"Мой пример на ГО", "link":"https://play.golang.org/p/y1SGi3g3Ot"}
                     ];

              var tabdat = { "idname":"idtab1",
                             "head":  "Отчет о поездке",
                             "fields": ["Код","Наименование","Цена"],
                             "data":   [
                                         {"id":"1",  "title":"Резиновая утка",     "price":123.05},
                                         {"id":"2",  "title":"Медведь коричневый", "price":124.04},
                                         {"id":"3",  "title":"Лодка надувная",     "price":124.03},
                                         {"id":"4",  "title":"Резиновая утка",     "price":123.05},
                                         {"id":"5",  "title":"Медведь коричневый", "price":124.04},
                                         {"id":"6",  "title":"Лодка надувная",     "price":124.03},
                                         {"id":"7",  "title":"Резиновая утка",     "price":123.05},
                                         {"id":"8",  "title":"Медведь коричневый", "price":124.04},
                                         {"id":"9",  "title":"Лодка надувная",     "price":124.03},
                                         {"id":"10", "title":"Резиновая утка",     "price":123.05},
                                         {"id":"11", "title":"Медведь коричневый", "price":124.04},
                                         {"id":"12", "title":"Лодка надувная",     "price":124.03},
                                         {"id":"13", "title":"Фонарик зарядный",   "price":125.02}
                                       ]
                             };

    jsontable(tabdat,"trow");

    // alert(data[1].name);
    // alert(data.length);  
    // alert(data.length);  

    jsons(d1, "l1", "Определения",  4, "apple",  "li");
    jsons(d2, "l2", "Ит индустрия", 4, "car",    "li");
    jsons(d3, "l3", "Новости",      4, "bell-o", "li");
    jsons(d4, "l4", "Паттерны",     4, "google", "li");
    jsons(d4, "l5", "Ссылки",       4, "google", "li");
    jsons(d5, "l6", "Английский",   4, "google", "li");
} 
```

```js
// **************************************************
// Генерация Таблицы по JSON
// по данным из JSON файла
// **************************************************
function jsontable(Dat, nametag){
     
     // alert(Dat.idname,Dat.head);
     // alert(Dat.data[1].id);
     // alert(Dat.fields);

     var f=al=als=nld=nlds=thds=tfood=fld="";
     var fkey=0;

     thds  = "<h3>" + Dat.head + "</h3> <table class='table table-bordered'>"
     tfood = "</table>"

     // for (i=0; i<Dat.fields.length;i++){
     //    f=Dat.fields[i];
     //    fld += "<td>" +i+ f + "</td>";
     // }  

     // Fields for table
     for(fkey in Dat.fields) {     
         f = Dat.fields[fkey];
         fld += "<th style='background-color: #F2F2F2;'>" + f + "</th>";
     }

     nlds="<thead><tr>" + fld + "</tr></thead>";

     // Body table
     for(key in Dat.data) {
          d   = Dat.data[key];
          al += "<tr><td>" + d.id +"</td><td>" + d.title + "</td><td>" + d.price + "</td></tr>\n";
      }
      
      als=thds+fld+al+tfood;

      $(function(){
            $('#'+nametag).html(als);
      });
}
```

## Load data
```js
/*
    Использование функции :
    Заполние элемента <ul> данными из JSON 
    Name     -  обязательное поле в стурктуре JSON
    
    Параметры :
    data     - данные которые необходимо отобразить
    nametag  - наименование тега которому присваиваиться 
    hd       - Заголовок 
    hdint    - размер заголовка
    icon     - имя иконки для заголовка из библиотеки awesome font
    tag      - имя тега в html кодировке (li, tr ...) 
*/
function jsons(data, nametag, hd, hdint, icon, tag){

      var key=count=0;
      var al = "";
      var hd = "<h" + hdint + "> <i class='fa fa-"+ icon + "'></i> " + hd + "</h" + hdint + "><hr><ul>";


      for(key in data) {
          d=data[key]
          al += "<" + tag + "><a target='_blank' href='"+ d.link +"'>" + d.name +  "</a></"+tag+">";
      }
     
      al=hd+al+"</ul>";

      $(function(){
        $('#'+nametag).html(al);
      });
}
```

## Заполнение
```js
function jsons_2(data, lst, hd, hdint, icon, tag){

      var key, count = 0;
      var al = "";
      var hd = "<br><br><br><h"+hdint+"><i class='fa fa-"+ icon+"'></i>  " + hd + "</h>"+hdint+"><hr>";

      for(key in data) {
         al += "<" + tag + ">" + key + ".  " + data[key].name + "</"+tag+">";
      }
     
      al=hd+al;

      $(function(){
          $('#'+lst).html(al);
      });
}
```


### Html
```html

<body onload="Dataloads()">
   <div class="container">
        <h3 style="color: #17cb27;"><i class="fa fa-calendar" ></i> Барсетка</h3>

          <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top2">
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#"><h3 style="color: #00BFFF;"><i class="fa fa-calendar" aria-hidden="true"></i> </h3></a>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">  <a class="nav-link" href="#">Домой<span class="sr-only">(current)</span></a>         </li>
                <li class="nav-item">         <a class="nav-link" href="#">Книги</a>          </li>
                <li class="nav-item">         <a class="nav-link " href="#">Линки</a>          </li>
                <li class="nav-item">         <a class="nav-link " href="#">Деньги</a>          </li>
                <li class="nav-item">         <a class="nav-link " href="#">Машина</a>          </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Материалы</a>
                  <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="https://cssgrid.cc">СSS пример</a>
                    <a class="dropdown-item" href="https://codepen.io/pankajparashar/pen/qDKGo">Пример</a>
                    <a class="dropdown-item" href="#">Доклады</a>
                  </div>
                </li>



              </ul>

            <!--   <form class="form-inline my-2 my-md-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                   </form> 
            -->

            </div>
          </nav>

          <nav class="breadcrumb" style="background-color: #FFF;">
              <a class="breadcrumb-item" href="#">Home</a>
              <a class="breadcrumb-item" href="#">Library</a>
              <a class="breadcrumb-item" href="#">Data</a>
              <span class="breadcrumb-item active">Bootstrap</span>
          </nav>
          <br>

	        <h2><i class="fa fa-question-circle" aria-hidden="true"></i> Новости  индустрии</h2>
	        <hr>

          <div class="row">
                <div id="l1" class="col-6 col-lg-6"></ul></div>
                <div id="l2" class="col-6 col-lg-6"></ul></div>
                <div id="l3" class="col-6 col-lg-6"></ul></div>
                <div id="l4" class="col-6 col-lg-6"></ul></div>
                <div id="l5" class="col-6 col-lg-6"></ul></div>
                <div id="l6" class="col-6 col-lg-6"></ul></div>
           </div>

          <br><br>

          <div id="trow"></div>

    			<div class="alert alert-success" role="alert">
    			  <h4 class="alert-heading">Well done!</h4>
    			  <p id="btn1">
                Aww yeah, you successfully read this important alert message. 
                This example text is going to run a bit longer so that you can see how 
                spacing within an alert works with this kind of content.
            </p>
    			  
            <p class="mb-0">
                 Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
    			</div>
   </div>
</body>
```
