document.addEventListener("DOMContentLoaded", function () {
    var diasDisplay = document.getElementById("dias");
    var horasDisplay = document.getElementById("horas");
    var minutosDisplay = document.getElementById("minutos");
    var segundosDisplay = document.getElementById("segundos");
  
    // Data-alvo: 27 de fevereiro de 2024 às 18:00:00 (UTC)
    var dataAlvo = new Date("2024-02-27T18:00:00Z").getTime();
  
    function atualizarContagemRegressiva() {
      var agora = new Date().getTime();
      var diferenca = dataAlvo - agora;
  
      var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
      diasDisplay.textContent = dias.toString().padStart(2, "0");
      horasDisplay.textContent = horas.toString().padStart(2, "0");
      minutosDisplay.textContent = minutos.toString().padStart(2, "0");
      segundosDisplay.textContent = segundos.toString().padStart(2, "0");
    }
  
    function iniciarContagemRegressiva() {
      atualizarContagemRegressiva();
      setInterval(atualizarContagemRegressiva, 1000);
    }
  
    iniciarContagemRegressiva();
  });
  