const calculator = () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");
  const inputD = document.getElementById("inputD");

  const doMath = () => {
    let valueA = inputA.value;
    let valueB = inputB.value;
    let valueC = inputC.value;
    let valueD = inputD.value;

    return { valueA, valueB, valueC, valueD };
  };

  const setOperator = (op) => {
    const inputD = document.getElementById("inputD");
    inputD.value = op;
  };

  const calc = () => {
    const math = doMath();

    if (math.valueD === "") {
      alert("Por favor, selecione um operador.");
      return null;
    }

    if (
      math.valueD !== "-" &&
      math.valueD !== "*" &&
      math.valueD !== "/" &&
      math.valueD !== "+"
    ) {
      alert("Operador inválido!");
      return;
    }
    if (math.valueD === "/" && math.valueB === "0") {
      alert("Operação inválida! Divisão por zero não é possível");
      return null;
    }

    const result = eval(math.valueA + math.valueD + math.valueB);
    return result;
  };

  const addBtn = document.getElementById("btn-add");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setOperator("+");
  });

  const minBtn = document.getElementById("btn-min");
  minBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setOperator("-");
  });

  const timesBtn = document.getElementById("btn-times");
  timesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setOperator("*");
  });

  const divBtn = document.getElementById("btn-div");
  divBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setOperator("/");
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

  const clear = () => {
    const math = doMath();
    math.valueA = "";
    math.valueB = "";
    math.valueC = "";

    inputA.value = math.valueA;
    inputB.value = math.valueB;
    inputC.value = math.valueC;
  };

  // const equals = () => {
  //   const math = doMath();
  //   const operator = math.valueD;
  //   const result = calc(operator);

  //   if (result !== null) {
  //     math.valueC = result;
  //   }
  // };
};

calculator();
