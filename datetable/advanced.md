## Set DataTable

```js
$('#showTable tbody').on('click', 'tr', function () {
console.log($(this).find("td"));
var td = $(this).find("td");
$(".odd").css("color", "black");
$(".even").css("color", "black");
$(".odd").css("font-weight", "normal");
$(".even").css("font-weight", "normal ");
```

## Setting

```js
  $(this).css("color", "red");
    // $(this).css("color","red");
    // $(this).css("font-style","italic");
    //   $(this).css("font-weight","bold");
 
    var data = td.eq(1).html();
    $("#hit").val(data);
});
 
function clearSearch() {
    $("#studentName").val("");
    queryAssessGradeList()
}
 
// $(function(){
//     var table = $('#table').DataTable({
var assessGradeTable;
 
function queryAssessGradeList() {
    var params = {};
    params.assessId = $("#assessId").val();
    params.classId = $("#classId").val();
    params.studentName = $("#studentName").val();
 
    var shabi = $("#head_grade").val();
    // var ss=$("#head_grade").val();
    if (shabi < 70) {
        shabi.css("color", "#f00");
    }
 
    var colums = [
        {
            "mData": "order",
            "sClass": "center",
 
        },
        {
            "mData": "stu_name",
            "sClass": "center",
        },
        {
            "mData": "head_grade",
            "sDefaultContent": "",
            "sClass": "center",
            "mRender": function (data, type, full, meta) {
                if (data == '' || data == null) {
                    return "未录入";
                } else {
                    return data;
                }
            }
        },
        {
            "mData": "help_grade",
            "sDefaultContent": "",
            "sClass": "center",
            "mRender": function (data, type, full, meta) {
                if (data == '' || data == null) {
                    return "未录入";
                } else {
                    return data;
                }
            }
        },
        {
            "mData": "lecturer_grade",
            "sDefaultContent": "",
            "sClass": "center",
            "targets": [3],
            "mRender": function (data, type, full, meta) {
                if (data == '' || data == null) {
                    return "未录入";
                } else {
                    return data;
                }
            }
        },
        {
            "mData": "avg",
            "sDefaultContent": "",
            "sClass": "center",
            "mRender": function (data, type, full, meta) {
                var assessGradeId = full.assess_grade_id;
                if (data == '' || data == null) {
                    return "0";
                } else {
                    return data.toFixed(2);
                }
            }
        },
        {
            "mData": "assess_grade_remark",
            "sDefaultContent": "",
            "sClass": "center",
            "mRender": function (data, type, full, meta) {
                if (data == '' || data == null) {
                    return "无";
                } else {
                    return data;
                }
            }
        },
        {
            "mData": "stu_id",
            "sClass": "center",
            "mRender": function (data, type, full, meta) {
                var assessId = $("#assessId").val();
                var assessGradeId = full.assess_grade_id;
                if (assessGradeId == undefined || assessGradeId == null) {
                    return '<button  class="btn btn-xs btn-info" onclick="editAssessGrade(' + data + ',' + assessId + ')">录入成绩</button> ';
                } else {
                    return '<button  class="edit-btn btn-xs btn-info">修改成绩</button> ' +
                            // '<button  class="save-btn btn-xs btn-info" onclick="save(' + data + ',' + assessId + ',' + assessGradeId + ')">保存成绩</button> '+
                            '<button  class="btn btn-xs btn-danger" onclick="removeAssessGrade(' + assessGradeId + ')">撤销</button> ';
                }
            }
        }
    ];
 
    getTableData("showTable", "${link.contextPath}/stch/assess/grade/getListData", colums, JSON.stringify(params));
    $('.icon-double-angle-left').replaceWith('< ');
    $('.icon-double-angle-right').replaceWith('>');
    var table = $("#showTable").DataTable();
    $("table tbody").on("click", ".save-btn", function () {
        alert(1);
        var row=table.row($(this).parents("tr"));
        // table.row1
        var tds = $(this).parents("tr").children();
        $.each(tds, function (i, val) {
            var jqob = $(val);
            //把input变成字符串
            if (!jqob.has('button').length) {
                var txt = jqob.children("input").val();
                jqob.html(txt);
                table.cell(jqob).data(txt);//修改Datatable对象数据
            }
        });
        var data = row.data();
        alert(data);
        $.ajax({
            "url": "${link.contextPath}/stch/assess/grade/editOne",
            "data": data,
            "type": "post",
            "error": function (response) {
                alert("服务器正常响应，请重试")
            },
            "success": function (result) {
                if (result.isSuccess) {
                    queryAssessGradeList();
                }
            }
        });
        $(this).html("编辑");
        $(this).toggleClass("edit-btn");
        $(this).toggleClass("save-btn");
    });
    //
    // if (table) {alert(344);
    //     table.fnClearTable();
    //     table.fnDestroy();
    //     //回调函数 判断是是否有值
    // }
 
}
queryAssessGradeList();
 
 
 
$("table tbody").on("click", ".edit-btn", function () {
    debugger
    var tds = $(this).parents("tr").children();
    $.each(tds, function (i, val) {
        var jqob = $(val);
        if (i < 2 || jqob.has('button').length){
            return true
        }
        ;//跳过第1项 序号,按钮
        var txt = jqob.text();
        var put = $("<input type='text' style='width:39px' value='' >");
        put.val(txt);
        jqob.html(put);
    });
    $(this).html("保存");
    $(this).removeClass("edit-btn");
    $(this).addClass("save-btn");
});
```
