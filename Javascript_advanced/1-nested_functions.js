let globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  let course = "Holberton";

  function inner() {
    alert(globalVariable);
    alert(course);
    let exclamation = "!";

    function inception() {
      alert(globalVariable);
      alert(course);
      alert(exclamation);
    }

    inception();
  }

  inner();
}

outer();
