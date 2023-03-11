## Bind data

```js
  <script>
        $(document).on('click', '[deleted]', function() {
            alert("delete : " + this.id)
        });
    </script>
```

### HTML
```html
 <!-- Table paymnets -->
    <table id="tablecash" class="table table-sm table-striped table-bordered">
        <thead>
        <tr>
            <th title="ID у базi даних">ID</th>
            <th title="Номер ">Номер</th>
            <th title="ID документа">Документ</th>
            <th title="ID у пiдгрупа">Дата</th>
            <th title="ID у постачальник">Тип</th>
            <th>Операция</th>
            <th>Клiент</th>
            <th title="Сума">Сумма</th>
            <th>Тип </th>
            <th>Act </th>
        </tr>
        </thead>

        <tbody>
        {{range .Cash}}
        <tr id="ID{{.Id}}" deleted>
            <td  style="width: 30px;"  >{{.Id}}</td>
            <td style="width: 30px;">{{.Num}}</td>
            <td style="width: 30px;">{{.OrderId}}</td>
            <td style="width: 130px;">{{.CreateAt.Format "02.01.2006 15:04"}}</td>
            <td style="width: 30px;">
                {{if eq 1 .Type}}
                    <span class="badge bg-success">Приход</span>
                {{else}}
                     <span class="badge bg-warning text-dark">Расх</span>
                {{end}}
            </td>
            <td >{{.Operation}}</td>
            <td style="width: 350px;">{{.ClientName}}</td>
            <td style="width: 150px;" ondblclick="Info({{.Id}})" ><b> {{printf "%## ###.2f" .Amount}}</b>  </td>
            <td style="width: 50px;">  {{.Operation}}</td>
            <td style="width: 50px;">
                <div class="btn-group" role="group">

                    <button type="button" class="btn btn-sm" data-bs-toggle="dropdown"
                            aria-expanded="false" style="padding: 0px; margin: 0px">
                        <i class="bi bi-gear-fill" style="color:#555555 ; font-weight: 700;"></i>
                    </button>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="card/{{.Id}}">📑 Карточка</a></li>
                        <li><a class="dropdown-item" href="del/{{.Id}}">❌ Удаление</a></li>
                        <li><a class="dropdown-item" href="block/{{.Id}}">🔐 Блокировать</a></li>
                        <li><a class="dropdown-item" href="print/{{.Id}}">🖨 Печать</a></li>
                    </ul>
                </div>
            </td>
        </tr>
        {{end}}
        </tbody>
    </table>
```


