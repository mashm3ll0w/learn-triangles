function triangleCalculator() {
  var hypotenuse = document.getElementById("hypotenuse").value;
  var opposite = document.getElementById("opposite").value;
  var adjacent = document.getElementById("adjacent").value;

  if (hypotenuse === opposite && opposite === adjacent && hypotenuse === adjacent) {
    alert("Yours is an Equilateral Triangle");
  }
  else if (hypotenuse === opposite || hypotenuse === adjacent || opposite === adjacent ) {
    alert("Yours is an Isosceles Triangle");
  }
  else {
    alert("Yours is a Scalene Triangle");
  }
}