function triangleCalculator() {
  var hypotenuse = parseInt(document.getElementById("hypotenuse").value);
  var opposite = parseInt(document.getElementById("opposite").value);
  var adjacent = parseInt(document.getElementById("adjacent").value);

  if (hypotenuse === opposite && opposite === adjacent && hypotenuse === adjacent) {
    alert("Yours is an Equilateral Triangle");
  }
  else if (hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent ) {
    alert("Yours is an Isosceles Triangle");
  }
  else if ((hypotenuse + opposite) <= adjacent || (hypotenuse + adjacent) <= opposite || (adjacent + opposite) <= hypotenuse) {
    alert("Yours is not a Definite Triangle");
  }
  else if (
    (Math.pow(adjacent, 2) + Math.pow(opposite, 2) === Math.pow(hypotenuse, 2)) || 
    (Math.pow(adjacent, 2) + Math.pow(hypotenuse, 2) === Math.pow(opposite, 2)) || 
    (Math.pow(hypotenuse, 2) + Math.pow(opposite, 2) === Math.pow(adjacent, 2))
  ) {
    alert("Yours a special one: Pythagoras' Theorem Baby!");
  }
  else {
    alert("Yours is a Scalene Triangle");
  }
}