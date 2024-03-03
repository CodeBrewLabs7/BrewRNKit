
export  const expensiveCalculation = (num:number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log("Done...");
    return num;

  };
