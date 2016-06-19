/**
 * Created by Singh on 6/17/2016.
 */
var count = 0;      //number of cells in a row
var i = 0;          //number of rows
var cc = 1;         //keep track of cell

function add() {
    //Create a new div representation each cell
    var cell = document.createElement("div");
    cell.setAttribute("id", "cell" + cc);
    console.log(i);
    console.log(cc + " :Cc")
    document.getElementById("rowData" + i).appendChild(cell);

    //Create Category Input Filled
    var td = document.createElement("td");
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "Category Name");
    y.setAttribute("Name", "category[]");
    y.setAttribute("Class", "form-control");
    td.appendChild(y);
    document.getElementById("cell" + cc).appendChild(td);

    //Create Weight Input Filed
    var td = document.createElement("td");
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "Weight");
    y.setAttribute("Name", "weights[]");
    y.setAttribute("Class", "form-control");
    td.appendChild(y);
    document.getElementById("cell" + cc).appendChild(td);

    //Create Button to remove field
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute("Class", "btn btn-remove btn-danger");
    var icon = document.createElement("i");
    icon.setAttribute("Class", "glyphicon glyphicon-minus gs");
    button.appendChild(icon);
    td.appendChild(button);
    document.getElementById("cell" + cc).appendChild(td);

    count++;
    cc++;
}

$(function () {
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();
        if (count == 2) {
            trigger = 0;
            cc = 0;
            i++;
            //set up the new row
            var tr = document.createElement("tr");
            tr.setAttribute("id", "rowData" + i);
            document.getElementById("weightBody").appendChild(tr);
            //add new cell
            add();
            count = 0;
        } else {
            //add new cell
            add();
        }
    }).on('click', '.btn-remove', function (e) {
        $(this).parents('tr:first').remove();
        e.preventDefault();
        i--;
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