const diceFaces = [
    // Flat faces (1-6)
    `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="10" /></svg>`,                          // 1
    `<svg viewBox="0 0 100 100"><circle cx="25" cy="25" r="10" /><circle cx="75" cy="75" r="10" /></svg>`, // 2    
    `<svg viewBox="0 0 100 100"><circle cx="25" cy="25" r="10" /><circle cx="50" cy="50" r="10" /><circle cx="75" cy="75" r="10" /></svg>`, // 3
    `<svg viewBox="0 0 100 100"><circle cx="25" cy="25" r="10" /><circle cx="75" cy="25" r="10" /><circle cx="25" cy="75" r="10" /><circle cx="75" cy="75" r="10" /></svg>`, // 4
    `<svg viewBox="0 0 100 100"><circle cx="25" cy="25" r="10" /><circle cx="75" cy="25" r="10" /><circle cx="50" cy="50" r="10" /><circle cx="25" cy="75" r="10" /><circle cx="75" cy="75" r="10" /></svg>`, // 5
    `<svg viewBox="0 0 100 100"><circle cx="25" cy="25" r="10" /><circle cx="75" cy="25" r="10" /><circle cx="25" cy="50" r="10" /><circle cx="75" cy="50" r="10" /><circle cx="25" cy="75" r="10" /><circle cx="75" cy="75" r="10" /></svg>`, // 6
  ];
  
  const diceContainer = document.getElementById("dice-container");
  const rollBtn = document.getElementById("roll-btn");
  
  rollBtn.addEventListener("click", () => {
    let index = 0;
  
    const interval = setInterval(() => {
      diceContainer.innerHTML = diceFaces[index];
      index = (index + 1) % diceFaces.length;
    }, 80);
  
    setTimeout(() => {
      clearInterval(interval);
      const final = Math.floor(Math.random() * 6);
      diceContainer.innerHTML = diceFaces[final];
    //   console.log("Rolled:", final + 1);
    }, 500);
  });
  