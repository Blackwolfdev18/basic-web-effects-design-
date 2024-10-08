function checkValues() {
    let row = document.getElementById("rows");
    let col = document.getElementById("cols");

    if (
      row.value <= 0 ||
      row.value.length == 0 ||
      col.value <= 0 ||
      col.value.length == 0
    ) {
      alert("Row or Column values are inappropriate");
    } else {
      createTable(row.value, col.value);
    }
  }

  function createTable(rows, cols) {
    var table = document.getElementById("table");
    table.innerHTML = "";

    var header = table.createTHead();
    var headRow = header.insertRow();
    for (var j = 0; j < cols; j++) {
      var headCell = document.createElement("th");
      headCell.innerHTML =
        '<input type="text" class="cell-val" placeholder="Column Name" />';

      headRow.appendChild(headCell);
    }

    var body = table.createTBody();
    for (var i = 0; i < rows - 1; i++) {
      var row = body.insertRow();
      for (var j = 0; j < cols; j++) {
        var cell = row.insertCell();
        cell.innerHTML =
          '<input type="text" class="cell-val" placeholder="Value" />';
      }
    }

    document.getElementById("set-vals").style.display = "block";
    document.querySelector(".table-container").style.display = "block";
  }

  function setVals() {
    var table = document.getElementById("table");
    let rows = table.rows.length;
    let cols = table.rows[0].cells.length;
    let vals = document.querySelectorAll(".cell-val");
    let k = 0;
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        table.rows[i].cells[j].innerText = vals[k].value;
        k = k + 1;
      }
    }
    document.getElementById("set-vals").style.display = "none";
  }
