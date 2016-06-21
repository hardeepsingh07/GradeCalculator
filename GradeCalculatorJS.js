/**
 * Created by Singh on 6/17/2016.
 */
var count = 0;      //number of cells in a row
//var i = 0;          //number of rows (for future)
var cc = 0;

//function to add weights cells
function add() {
    //Create a new div representation each cell
    var row = document.getElementById("rowData");

    var cell = document.createElement("td");
    cell.setAttribute("align", "center");
    row.appendChild(cell);

    //Create remove icon
    var button = document.createElement("button");
    button.setAttribute("Class", "btn btn-link btn-remove-weight pull-right");
    var icon = document.createElement("i");
    icon.setAttribute("Class", "glyphicon glyphicon-remove-circle gs");
    button.appendChild(icon);
    cell.appendChild(button);
    

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
    button.setAttribute("Class", "btn btn-info btn-create-table");
    var icon = document.createElement("i");
    icon.setAttribute("Class", "glyphicon glyphicon-list gs");
    var x = document.createTextNode(" Create");
    icon.appendChild(x);
    button.appendChild(icon);
    cell.appendChild(button);
    count++;
}

function createTable() {
    //add table to second section
    var pbody = document.getElementById("score");
    var div = document.createElement("div");
    div.setAttribute("class", "score-div");
    div.setAttribute("id", "WHATEVER");
    pbody.appendChild(div);

    var divH = document.createElement("div");
    var h4 = document.createElement("h4");
    var t = document.createTextNode("WHATEVER");
    h4.appendChild(t);
    divH.appendChild(h4);

    div.appendChild(divH);

    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    table.appendChild(tbody);

    div.appendChild(table);

    //add indial content to table
    addScoreRow(false ,tbody);
}

//function to add score rows
function addScoreRow(trigger, incomingBody) {
    var row = document.createElement("tr");

    var td = document.createElement("td");
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "Earned");
    y.setAttribute("Name", "WHATEVER-earned[]");
    y.setAttribute("Class", "form-control");
    td.appendChild(y)
    row.appendChild(td);


    //Create Weight Input Filed
    var td = document.createElement("td");
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "Total");
    y.setAttribute("Name", "WHATEVER-total[]");
    y.setAttribute("Class", "form-control");
    td.appendChild(y);
    row.appendChild(td);

    //Create Button to remove fields
    var td = document.createElement("td");
    var button = document.createElement("button");
    if(trigger) {
        button.setAttribute("Class", "btn btn-remove-score btn-danger");
        var icon = document.createElement("i");
        icon.setAttribute("Class", "glyphicon glyphicon-minus gs");
    } else {
        button.setAttribute("Class", "btn btn-add-score btn-success");
        var icon = document.createElement("i");
        icon.setAttribute("Class", "glyphicon glyphicon-plus gs");
    }
    button.appendChild(icon);
    td.appendChild(button);
    row.appendChild(td);


    incomingBody.appendChild(row);
}

$(function () {
    $(document).on('click', '.btn-add-weight', function (e) {
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
    }).on('click', '.btn-remove-weight', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        count--;
        return false;
    }).on('click', '.btn-create-table', function (e) {
        e.preventDefault();
        createTable();
        return false;
    }).on('click', '.btn-add-score', function (e) {
        e.preventDefault();
        //move from button to td, td to tr, tr to tbody
        var tbody = this.parentNode.parentNode.parentNode;
        addScoreRow(true, tbody);

    }).on('click', '.btn-remove-score', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
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