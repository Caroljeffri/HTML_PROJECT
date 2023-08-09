function printNumbersWithConditions() {
    const numberInput = document.getElementById('numberInput');
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    const n = parseInt(numberInput.value, 10);
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        outputDiv.innerHTML += 'pimpom<br>';
      } else if (i % 3 === 0) {
        outputDiv.innerHTML += 'pim<br>';
      } else if (i % 5 === 0) {
        outputDiv.innerHTML += 'pom<br>';
      } else {
        outputDiv.innerHTML += i + '<br>';
      }
    }
  }
  