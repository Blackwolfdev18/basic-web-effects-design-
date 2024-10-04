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
