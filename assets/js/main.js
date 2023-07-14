const calcSum = () => {
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");

  const addBtn = document.getElementById("btn-add");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doSum();
  });

  doSum = () => {
    const valueA = Number(inputA.value);
    const valueB = Number(inputB.value);

    if (valueA !== isNaN && valueB !== isNaN) {
      const sum = valueA + valueB;
      inputC.value = sum;
    }
  };

  captureEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        doMath();
      }
    });
  };

  captureEnter();
};

calcSum();
