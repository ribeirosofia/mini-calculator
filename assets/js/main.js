const calculator = () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");

  const addBtn = document.getElementById("btn-add");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doSum();
  });

  const minBtn = document.getElementById("btn-min");
  minBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doMin();
  });

  doMath = () => {
    let valueA = Number(inputA.value);
    let valueB = Number(inputB.value);

    if (isNaN(valueA)) valueA = 0;
    if (isNaN(valueB)) valueB = 0;

    return { valueA, valueB };
  };

  doSum = () => {
    const math = doMath();

    const sum = math.valueA + math.valueB;
    inputC.value = sum;
  };

  doMin = () => {
    const math = doMath();

    const minus = math.valueA - math.valueB;
    inputC.value = minus;
  };
};

calculator();
