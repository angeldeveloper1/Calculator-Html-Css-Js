let calculation=localStorage.getItem('calculation')||'';

      calculationFunction();
      
      function updateCalculation(value) {
        calculation += value;
        saveCalculation();
      }

      function saveCalculation(){
        localStorage.setItem('calculation',calculation);
        calculationFunction();
      }

      function deleteLastCharacter(){
        calculation = calculation.slice(0, -1);
        saveCalculation();
      }

      function calculationFunction(){
        document.querySelector('.js-calculation').
          innerHTML = `${calculation}`;
      }
      