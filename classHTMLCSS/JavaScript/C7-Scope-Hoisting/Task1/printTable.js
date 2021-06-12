let table = [
  {
    Date: "Jan. 1, 20x3",
    Description: "Balance Forward",
    Debit: 0,
    Credit: 0,
  },
  {
    Date: "Jan. 10, 20x3",
    Description: "Paid tax",
    Debit: 0,
    Credit: 1000,
  },
  {
    Date: "Jan. 2, 20x3",
    Description: "Collected receivable",
    Debit: 10000,
    Credit: 0,
  },
  {
    Date: "Jan. 3, 20x3",
    Description: "Cash sale",
    Debit: 5000,
    Credit: 0,
  },
  {
    Date: "Jan. 5, 20x3",
    Description: "Paid rent",
    Debit: 0,
    Credit: 7000,
  },
  {
    Date: "Jan. 8, 20x3",
    Description: "Paid bills",
    Debit: 0,
    Credit: 2000,
  },
  {
    Date: "Jan. 7, 20x3",
    Description: "Paid Salary",
    Debit: 0,
    Credit: 3000,
  },
  {
    Date: "Jan. 8, 20x3",
    Description: "Cash sale",
    Debit: 4000,
    Credit: 0,
  },

  {
    Date: "Jan. 12, 20x3",
    Description: "Collected receivable",
    Debit: 7000,
    Credit: 0,
  },
];
console.table(table);

console.log("---------Display Table-----------");

function displayTable(table) {
  let text = "index  Date  Description  Debit  Credit \n";

  for (let x = 0; x < table.length; x++) {
    text +=
      x +
      "  " +
      table[x].Date +
      "  " +
      table[x].Description +
      "  " +
      table[x].Debit +
      "  " +
      table[x].Credit +
      "\n";
  }
  return text;
}
console.log(displayTable(table));

// table.sort(function(a, b){return a.Date - b.Date});

console.log("----------Display Sorted Table---------");

function tableSort(table) {
  table.sort(function (a, b) {
    let x = a.Date.toLowerCase();
    let y = b.Date.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
}

tableSort(table);
console.log(displayTable(table));

console.log("-------Sumation of Debit and Credit");

function sumDebCred(table) {
  let sum = 0;
  for (let y = 0; y < table.length; y++) {
    sum += table[y].Debit + table[y].Credit;
  }
  return sum;
}
console.log(sumDebCred(table));

console.log("--------Show all Debit which was greater than 5000------------");

function debit(table) {
  let text = "index  Date  Description  Debit  Credit \n";
  for (let x = 0; x < table.length; x++) {
    if (table[x].Debit > 5000) {
      text +=
        x +
        "  " +
        table[x].Date +
        "  " +
        table[x].Description +
        "  " +
        table[x].Debit +
        "  " +
        table[x].Credit +
        "\n";
    }
  }
  return text;
}
console.log(debit(table));

console.log("--------Show all Credit which was less than 3000---------");

function credit(table) {
  let text = "index  Date  Description  Debit  Credit \n";
  for (let x = 0; x < table.length; x++) {
    if (table[x].Credit < 3000) {
      text +=
        x +
        "  " +
        table[x].Date +
        "  " +
        table[x].Description +
        "  " +
        table[x].Debit +
        "  " +
        table[x].Credit +
        "\n";
    }
  }
  return text;
}
console.log(credit(table));
