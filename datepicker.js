
            $(function() {

                      
                        

                        var now = new Date();
                        //var ds = now.format("yyyy-mm-dd");
                        var today = new Date();
                        var ds=today.toLocaleDateString();
                        ds=Getdate();

                        $('#datereg').val(ds);


                      $( "#expires" ).datepicker({minDate: -100, 
                      	                          maxDate: "+0D", 
                      	                          dateFormat: 'yy.mm.dd ',  
                      	                          changeMonth: true,
                                                  changeYear: true,
                                                  showButtonPanel: true,
                      	                          onSelect: function(datetext){ 
                      	                          	          $(this).val(datetext);
                      	                          	      },
                      	                          	  });

                      $( "#datereg" ).datepicker({minDate: -100, maxDate: "+0D", dateFormat: 'yy.dd.mm hh:mm',  onSelect: function(datetext){ $(this).val(datetext);}});
             });

