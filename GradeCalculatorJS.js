/**
 * Created by Singh on 6/17/2016.
 */
var count = 0;      //number of cells in a row
var i = 0;          //number of rows
var cc = 0;
function add() {
    //Create a new div representation each cell
    var row = document.getElementById("rowData" + i);

    var cell = document.createElement("td");
    cell.setAttribute("align", "center");
    row.appendChild(cell);

    //Create Category Input Filled
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "Category Name");
    y.setAttribute("Name", "category[]");
    y.setAttribute("Class", "form-control");

    cell.appendChild(y);

    //Create Weight Input Filed
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "Weight");
    y.setAttribute("Name", "weights[]");
    y.setAttribute("Class", "form-control");
    cell.appendChild(y);

    //Create Button to remove fields
    var button = document.createElement("button");
    button.setAttribute("Class", "btn btn-remove btn-danger");
    var icon = document.createElement("i");
    icon.setAttribute("Class", "glyphicon glyphicon-minus gs");
    button.appendChild(icon);
    cell.appendChild(button);
    count++;
}

$(function () {
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();
        //for future enhacements
        // if (count == 5) {
        //     i++;
        //     //set up the new row
        //     var tr = document.createElement("tr");
        //     tr.setAttribute("id", "rowData" + i);
        //     document.getElementById("weightBody").appendChild(tr);
        //     //add new cell
        //     add();
        //     count = 0;
        // }
        if(count < 4) {
            //add new cell
            add();
        } else {
           alert("Only 5 Fields are allowed");
        }
    }).on('click', '.btn-remove', function (e) {
        $(this).parent().remove();
        count--;
        e.preventDefault();
        return false;
    }).on('click', '#test', function (e) {
        //Get Values of Title
        // var titles =  document.getElementsByName("title[]");
        // var result = "";
        // for(var i = 0; i < titles.length; i++) {
        //     result += titles[i].value;
        // }
        // alert(result);

        //Get Values of Weights
        var weights = document.getElementsByName("weights[]");
        var result = "";
        for (var i = 0; i < weights.length; i++) {
            result += weights[i].value;
        }
        alert(result);
    });
});