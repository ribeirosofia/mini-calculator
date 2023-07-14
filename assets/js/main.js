const calculator = () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");

  const calc = (operation) => {
    const math = doMath();
    let result;

    if (operation === "sum") {
      result = eval(math.valueA + "+" + math.valueB);
    } else if (operation === "minus") {
      result = eval(math.valueA + "-" + math.valueB);
    }

    inputC.value = result;
  };

  const addBtn = document.getElementById("btn-add");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calc("sum");
  });

  const minBtn = document.getElementById("btn-min");
  minBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calc("minus");
  });

  const doMath = () => {
    let valueA = inputA.value;
    let valueB = inputB.value;

    return { valueA, valueB };
  };
};

calculator();
