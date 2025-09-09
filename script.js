function mostrarTurma(turma) {
    // Esconder todas as turmas
    var turmas = document.getElementsByClassName("turma-section");
    for (var i = 0; i < turmas.length; i++) {
        turmas[i].style.display = "none";
    }

    // Mostrar a turma selecionada
    document.getElementById(turma).style.display = "block";