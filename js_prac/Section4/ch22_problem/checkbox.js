function checkResult() {
  let python = document.getElementById("python")
  let c = document.getElementById("c");
  let javascript = document.getElementById("javascript");

  let languages = [python, c, javascript];

  languages.map((l) => {
    if (l.checked == true) {
      alert("I know " + l.value )
    }
  });
}
