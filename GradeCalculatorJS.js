/**
 * Created by Singh on 6/17/2016.
 */
var count = 0;      //number of cells in a row
var h4Heading = ""  //keep track of text

//function to add weights cells
function add() {
    //Create a new div representation each cell
    var row = document.getElementById("rowData");

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
    button.setAttribute("Class", "btn btn-info btn-create-table pull-left");
    var icon = document.createElement("i");
    icon.setAttribute("Class", "glyphicon glyphicon-list gs");
    var x = document.createTextNode(" Create");
    icon.appendChild(x);
    button.appendChild(icon);
    cell.appendChild(button);

    //Create remove icon
    var button = document.createElement("button");
    button.setAttribute("Class", "btn btn-link btn-remove-weight pull-right");
    var icon = document.createElement("i");
    icon.setAttribute("Class", "glyphicon glyphicon-remove-circle gs");
    button.appendChild(icon);
    cell.appendChild(button);
    count++;
}

function createTable(text) {
    var category = document.getElementsByName("category[]");
    var weigtht = document.getElementsByName("weights[]");


    //add table to second section
    var pbody = document.getElementById("score");
    var div = document.createElement("div");
    div.setAttribute("class", "score-div");
    div.setAttribute("id", text + "-table");
    pbody.appendChild(div);

    var divH = document.createElement("div");
    divH.setAttribute("align", "center");
    var h4 = document.createElement("h4");
    var t = document.createTextNode(text);
    h4.appendChild(t);
    divH.appendChild(h4);

    div.appendChild(divH);

    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    table.appendChild(tbody);

    div.appendChild(table);

    //add indial content to table
    addScoreRow(false, tbody, text);
}

//function to add score rows
function addScoreRow(trigger, incomingBody, title) {
    var row = document.createElement("tr");

    var td = document.createElement("td");
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "E");
    y.setAttribute("Name", title + "-earned[]");
    y.setAttribute("Class", "form-control");
    td.appendChild(y)
    row.appendChild(td);


    //Create Weight Input Filed
    var td = document.createElement("td");
    var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("Placeholder", "T");
    y.setAttribute("Name", title + "-total[]");
    y.setAttribute("Class", "form-control");
    td.appendChild(y);
    row.appendChild(td);

    //Create Button to remove fields
    var td = document.createElement("td");
    var button = document.createElement("button");
    if (trigger) {
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
        if (count < 4) {
            //add new cell
            add();
        } else {
            alert("Only 5 Fields are allowed");
        }
    }).on('click', '.btn-remove-weight', function (e) {
        e.preventDefault();
        //remove the weights input from weight menu
        //get the weight criteria name
        var text = $(this).siblings("input").val();
        $(this).parent().remove();

        //remove the table associated with weight
        var divElement = document.getElementById(text + "-table");
        divElement.remove();
        count--;
        return false;
    }).on('click', '.btn-create-table', function (e) {
        e.preventDefault();
        var text = $(this).siblings("input").val();
        if (text == "" || text == null) {
            alert("Name and Weight is required");
        } else {
            createTable(text);
            $(this).prop('disabled', true);
        }
        return false;
    }).on('click', '.btn-add-score', function (e) {
        e.preventDefault();
        //move from button to td, td to tr, tr to tbody
        var tbody = this.parentNode.parentNode.parentNode;
        var h4Body = this.parentNode.parentNode.parentNode.parentNode.previousSibling.firstChild;
        var title = h4Body.innerHTML;
        addScoreRow(true, tbody, title);
    }).on('click', '.btn-remove-score', function (e) {
        e.preventDefault();
        $(this).parent().parent().remove();
    }).on('click', '#test', function (e) {
        // //Get Values of Title
        // var totalWeighted;
        // var weighted;
        // var titles = document.getElementsByName("category[]");
        // var weights = document.getElementsByName("weights[]");
        // for (var i = 0; i < titles.length; i++) {
        //     var earnedArray = document.getElementsByName(titles[i].value + "-earned[]");
        //     var totalArray = document.getElementsByName(titles[i].value + "-total[]");
        //     var earned = 0, total = 0;
        //     for (var j = 0; j < earnedArray.length; j++) {
        //         earned += parseInt(earnedArray[j].value);
        //         total += parseInt(totalArray[j].value);
        //     }
        //     alert("Earned" + earned);
        //     alert("Total" + total);
        //     weighted = (earned / total) * weights[i].value;
        // }
        // alert(weighted);
        // totalWeighted += weighted;
        // alert(totalWeighted);
        document.getElementById('totalPanel').style.display = "block";

        var titles = document.getElementsByName("category[]");
        var weights = document.getElementsByName("weights[]");
        var overallTotal = 0;
        var overallEarned = 0;
        var weighted;
        var nonWeighted;
        for (var i = 0; i < titles.length; i++) {
            var currentTitle = titles[i].value;
            var earnedArray = document.getElementsByName(currentTitle + "-earned[]");
            var totalArray = document.getElementsByName(currentTitle + "-total[]");
            var earned = 0;
            var total = 0;

            for (var j = 0; j < earnedArray.length; j++) {
                earned += parseInt(earnedArray[j].value);
                total += parseInt(totalArray[j].value);
            }

            var row = document.getElementById("totalRowData");

            var td = document.createElement("td");
            td.setAttribute("align", "center");

            var div = document.createElement("div");
            div.setAttribute("class", "input-group");

            var span1 = document.createElement("span");
            span1.setAttribute("class", "input-group-addon");
            var t1 = document.createTextNode(currentTitle.charAt(0).toUpperCase());
            span1.appendChild(t1);

            var input1 = document.createElement("input");
            input1.style.backgroundColor = "#FFFFFF";
            input1.style.textAlign = "center";
            input1.setAttribute("type", "text");
            input1.setAttribute("class", "form-control");
            input1.setAttribute("value", String(earned));
            input1.readOnly;

            var span2 = document.createElement("span");
            span2.setAttribute("class", "input-group-addon");
            span2.style.borderLeft = "0";
            span2.style.borderRight = "0";
            var t2 = document.createTextNode("--");
            span2.appendChild(t2);

            var input2 = document.createElement("input");
            input2.style.backgroundColor = "#FFFFFF";
            input2.style.textAlign = "center";
            input2.setAttribute("type", "text");
            input2.setAttribute("class", "form-control");
            input2.setAttribute("value", String(total));
            input2.readOnly;


            //assign parent and child's appropriately
            div.appendChild(span1);
            div.appendChild(input1);
            div.appendChild(span2);
            div.appendChild(input2);
            td.appendChild(div);
            row.appendChild(td);


            //calculations
            overallEarned += earned;
            overallTotal += total;
            weighted += (earned/total) * weights[i].value;
        }

        //Create Rest of the Layout
        // var divParentTotal = document.getElementById("overallTotalDiv");
        // var divTotal = document.createElement("div");
        // div.setAttribute("class", "input-group totalCombinedInput");
        //
        // var spanTotal = document.createElement("span");
        // spanTotal.setAttribute("class", "input-group-addon");
        // var totalText1 = document.createTextNode("Overall Total");
        // spanTotal.appendChild(totalText1);
        //
        // var inputEarnedTotal = document.createElement("input");
        // inputEarnedTotal.style.backgroundColor = "#FFFFFF";
        // inputEarnedTotal.style.textAlign = "center";
        // inputEarnedTotal.setAttribute("type", "text");
        // inputEarnedTotal.setAttribute("class", "form-control");
        // inputEarnedTotal.setAttribute("value", String(overallEarned));
        // inputEarnedTotal.readOnly;
        //
        // var spanTotal2 = document.createElement("span");
        // spanTotal2.setAttribute("class", "input-group-addon");
        // spanTotal2.style.borderLeft = "0";
        // spanTotal2.style.borderRight = "0";
        // var totalText2 = document.createTextNode("--");
        // span2.appendChild(totalText2);
        //
        // var inputTotalTotal = document.createElement("input");
        // inputTotalTotal.style.backgroundColor = "#FFFFFF";
        // inputTotalTotal.style.textAlign = "center";
        // inputTotalTotal.setAttribute("type", "text");
        // inputTotalTotal.setAttribute("class", "form-control");
        // inputTotalTotal.setAttribute("value", String(overallTotal));
        // inputTotalTotal.readOnly;
        //
        // divTotal.appendChild(spanTotal);
        // divTotal.appendChild(inputEarnedTotal);
        // divTotal.appendChild(spanTotal2);
        // divTotal.appendChild(inputTotalTotal);
        // divParentTotal.appendChild(divTotal);

    });
});

