const calculator = () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");

  const calc = (operation) => {
    const math = doMath();
    let result =
      operation === "sum"
        ? eval(math.valueA + "+" + math.valueB)
        : operation === "minus"
        ? eval(math.valueA + "-" + math.valueB)
        : undefined;

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
