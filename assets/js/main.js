const calculator = () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");

  const calc = (operation) => {
    const math = doMath();

    if (
      operation !== "-" &&
      operation !== "*" &&
      operation !== "/" &&
      operation !== "+"
    ) {
      alert("Operador inválido!");
      return;
    }

    if (operation === "/" && math.valueB === "0") {
      alert("Operação inválida! Divisão por zero não é possível");
      return;
    }

    inputC.value = eval(math.valueA + operation + math.valueB);
  };

  const addBtn = document.getElementById("btn-add");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calc("+");
  });

  const minBtn = document.getElementById("btn-min");
  minBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calc("-");
  });

  const timesBtn = document.getElementById("btn-times");
  timesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calc("*");
  });

  const divBtn = document.getElementById("btn-div");
  divBtn.addEventListener("click", (e) => {
    e.preventDefault();
    calc("/");
  });

  const clearBtn = document.getElementById("btn-clear");
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clear();
  });

  const equalsBtn = document.getElementById("btn-equals");
  equalsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    equals();
  });

  const doMath = () => {
    let valueA = inputA.value;
    let valueB = inputB.value;

    return { valueA, valueB };
  };

  const clear = () => {
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
  };

  const equals = () => {};
};
calculator();
