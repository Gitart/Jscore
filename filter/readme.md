## filtered in div
Filter by name inside in div

```js

    // Filtering
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(this).show();

        $("#tab_div_products div b").each(function() {
            var text = $(this).text().toLowerCase();
            var parentDiv = $(this).closest('div');

            if (text.indexOf(value) > -1) {
                parentDiv.show();
            } else {
                parentDiv.hide();
            }
        });
    });
```

```html
  <div class="modal-body">

                      <div id="woodform">
                           <div class="header_wind">
	                           <h5 style="font-weight: bold; color: #ff7f4a">Товари, сировина </h5>
	                           <input id="myInput"  class= "form-control" type="text" placeholder="🔎 ...">
                           </div>
	                       <br>
	                      
                           <div id="tab_div_products" class="overflow-auto" style="height: 300px; border: 0px solid #919ba5; padding: 5px;">
                                
	                           
	                           
	                           {{range .Products}}
                                        <div id="prods_{{.Id}}" class="row body_wind">
                                            
	                                        
	                                        
	                                        
                                                <label class="col-sm-10" for="pqty_{{.ProductId}}">
	                                                   <b id="brb_{{.Id}}" style="font-size: 17px">{{.Product}}</b>
                                                </label>

                                            <div class="col-sm-6">
                                                Цiна за дог    <span class="badge bg-primary"><b> {{.Price}}</b></span>
                                                Залишок        <span class="badge bg-success"><b> {{.Qty}}</b></span>
                                            </div>

                                            <div class="col-sm-2">
                                                <input id          = "pqty_{{.ProductId}}"
                                                       style       = "padding-bottom: 3px; background-color: #27293d;color: #fd7e14;"
                                                       type        = "text"
                                                       class       = "form-control"
                                                       onchange    = "TotalSumm({{$card_id}},{{.ProductId}})"
                                                       placeholder = "Кiл.">
                                            </div>
	                                        
<!--	                                        <div class="col-sm-2">-->
<!--		                                        <button id      = "bun_save_{{.Id}}"-->
<!--		                                                onclick = "TotalSumm({{$card_id}},{{.Id}})"-->
<!--		                                                type    = "button"-->
<!--		                                                class   = "btn btn-secondary">➕-->
<!--			                                        -->
<!--		                                        </button>-->
<!--	                                        </div>-->
                                        </div>
                                {{end}}
                                <br>
                        </div>

                          <div style="text-align: right"><br>
                              <button id    = "bun_close"
                                      type  = "button"
                                      class = "btn btn-secondary btn-lg"
                                      data-bs-dismiss = "modal">
                                      Закрити
                              </button>
                          </div>
                      </div>
```
