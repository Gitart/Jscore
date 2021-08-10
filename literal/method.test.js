
var myModule = {
myProperty: 'someValue',

// Литералы объектов могут содержать свойства и методы.
// ниже в свойстве определен другой объект,
// для описания конфигурации:
myConfig: {
         useCaching: true,
         language: 'en'
},

// Очень простой метод
myMethod: function() {
          console.log('I can haz functionality?');
},

// вывод значения заданного в конфигурации
myMethod2: function() {
           console.log('Caching is: ' + ((this.myConfig.useCaching) ? 'enabled' : 'disabled'));
},

// переопределение конфигурации
myMethod3: function(newConfig) {
           if (typeof newConfig == 'object') {
              this.myConfig = newConfig;
              console.log(this.myConfig.language);
          }
 },

// 
myMet: {
         useCa: function() {
             return 'Пример вложенной функции';
         },

         useCl: function() {
             return 'Новый выстр..............';
         },

         language: 'en'
} 

};



function Mee(){  
    console.log(myModule.myMet.useCl()); 
    console.log(myModule.myMet.useCa()); 
    console.log(myModule.myMet.language); 

}

function Mytest(){

   let myConfig= {
                  useCaching: false, 
                  language:'ru', 
                  system:"windows", 
                  testing:false
                };

   myModule.myMethod3(myConfig);
   console.log(myModule.myProperty);
   console.log(myModule.myConfig);
   console.log(myModule.myConfig.useCaching);
   console.log(myModule.myConfig.language);


}
