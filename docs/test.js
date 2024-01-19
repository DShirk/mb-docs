// Create a plugin for a spreadsheet system.

// function getCell(cellID)

// cellID: A1, B2, F6, etc

// spreadsheet can only store integers.

// function setCell(cellID, expression)

// expression (string): 16, 22, etc
// only operator allowed inside expression is "+" operator.

// setCell(A1, 10);
// setCell(B2, A1+5)

// getCell(A1) -> 10
// getCell(B2) -> 15

// setCell(A1, 15)

// getCell(A1) -> 15
// getCell(B2) -> 20

// setCellCallback(cellID, callbackfn) -> returns null;
// callbackfn() invoked every time the cell with cellID changes.

// setCellCallback(A1, () => console.log(getCell(A1)))
// setCellCallback(B2, () => console.log(getCell(B2)))
// setCellCallback(C3, () => console.log(getCell(C3)))
// setCell(A1, 10)

// setCell(C3, A1+B2+5);
// setCell(A1, 20);

// callbacks should log:

// const spreadsheetData = { A1: 5, B2: 10, C3: 20 };
const spreadsheetData = {};
const callbacks = {};
const dependencies = {};

// store key value pair, cellID(str) as key and expression(str) to return the value of the cell(int) as the value.
// data: { cellID(string): expression(string) }

// dependencies
// { A1: [B2, C3, D4 ], B2: [C3, D4], C3: [], D4: [] }

function parseExpression(expression) {
  // evaluates the integer value of an expression.

  let sum = 0;
  let values = expression.split("+");

  for (let val of values) {
    if (!isNaN(val)) {
      sum = sum + parseInt(val);
      continue;
    }

    sum = sum + getCell(val);
  }

  return sum;
}

function getCell(cellID) {
  let cellValue = spreadsheetData[cellID];
  if (typeof cellValue === "number") return cellValue;

  return parseExpression(cellValue);
}

function setCell(cellID, expression) {
  spreadsheetData[cellID] = expression;

  // map the current cells dependencies????

  // run callbacks for this cell, if any.
  let callbackCells = Object.keys(callbacks);

  if (callbackCells.includes(cellID)) {
    callbacks[cellID]();
  }
}

function setCellCallback(cellID, callbackFunction) {
  callbacks[cellID] = callbackFunction;
}

setCell("A1", 10);
setCell("B2", "A1+5");
setCell("C3", "A1+B2+5");

setCellCallback("A1", () => console.log("A1", getCell("A1")));
setCellCallback("B2", () => console.log("B2", getCell("B2")));
setCellCallback("C3", () => console.log("C3", getCell("C3")));
setCellCallback("D4", () => console.log("D4", getCell("D4")));

setCell("D4", "C3+1");

console.log("-----------");

setCell("A1", 15);
