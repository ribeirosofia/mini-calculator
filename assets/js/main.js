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

  const handleOperationClick = (operation) => (e) => {
    e.preventDefault();
    setOperator(operation);
  };

  const addBtn = document.getElementById("btn-add");
  addBtn.addEventListener("click", handleOperationClick("+"));

  const minBtn = document.getElementById("btn-min");
  minBtn.addEventListener("click", handleOperationClick("-"));

  const timesBtn = document.getElementById("btn-times");
  timesBtn.addEventListener("click", handleOperationClick("*"));

  const divBtn = document.getElementById("btn-div");
  divBtn.addEventListener("click", handleOperationClick("/"));

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
    math.valueD = "";

    inputA.value = math.valueA;
    inputB.value = math.valueB;
    inputC.value = math.valueC;
    inputD.value = math.valueD;
  };

  const equals = () => {
    const math = doMath();
    const operator = math.valueD;
    const result = calc();

    if (result !== null) {
      inputC.value = result;
    }
  };
};

calculator();
