document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores de los inputs
    const period1 = document.getElementById('period1').value.split(',').map(Number);
    const period2 = document.getElementById('period2').value.split(',').map(Number);
    const period3 = document.getElementById('period3').value.split(',').map(Number);

    // Validar que las entradas sean correctas
    if (period1.length !== 5 || period2.length !== 7 || period3.length !== 4) {
        alert('Por favor ingrese la cantidad correcta de notas para cada período.');
        return;
    }

    // Calcular los promedios de cada periodo
    const avg1 = period1.reduce((a, b) => a + b, 0) / period1.length;
    const avg2 = period2.reduce((a, b) => a + b, 0) / period2.length;
    const avg3 = period3.reduce((a, b) => a + b, 0) / period3.length;

    // Calcular la nota definitiva ponderada
    const finalGrade = (avg1 * 0.30) + (avg2 * 0.30) + (avg3 * 0.40);

    // Mostrar el resultado con el mensaje de desempeño
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Nota Definitiva: ${finalGrade.toFixed(2)}`;

    if (finalGrade >= 3.0 && finalGrade < 4.0) {
        resultDiv.className = 'result success';
        resultDiv.innerHTML += '<br>¡Aprobaste con desempeño básico!';
    } else if (finalGrade >= 4.0 && finalGrade < 5.0) {
        resultDiv.className = 'result success';
        resultDiv.innerHTML += '<br>¡Aprobaste con desempeño superior!';
    } else if (finalGrade === 5.0) {
        resultDiv.className = 'result success';
        resultDiv.innerHTML += '<br>¡Aprobaste con desempeño excelente! Eres un genio.';
    } else {
        resultDiv.className = 'result fail';
        resultDiv.innerHTML += '<br>Reprobaste, tu desempeño es bajo.';
    }
});
