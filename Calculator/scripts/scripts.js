// Recupera la última expresión de la calculadora almacenada en el almacenamiento local
let calculation=localStorage.getItem('calculation')||'';
      // Inicia la función de cálculo
      calculationFunction();
      // Función para actualizar la expresión de la calculadora
      function updateCalculation(value) {
        calculation += value;
        saveCalculation();
      }
      // Función para guardar la expresión de la calculadora en el almacenamiento local
      function saveCalculation(){
        localStorage.setItem('calculation',calculation);
        calculationFunction();
      }
      // Función para eliminar el último carácter de la expresión de la calculadora
      function deleteLastCharacter(){
        calculation = calculation.slice(0, -1);
        saveCalculation();
      }
      // Función para mostrar la expresión de la calculadora en la pantalla
      function calculationFunction(){
        document.querySelector('.js-calculation').
          innerHTML = `${calculation}`;
      }
      