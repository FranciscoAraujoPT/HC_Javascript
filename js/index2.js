let alunos = [
    { nome: "Alice", nota: 89 },
    { nome: "Bob", nota: 92 },
    { nome: "Charlie", nota: 78 },
    { nome: "Chris", nota: 50 }
];

function calculaMediaNotas(alunosNotas) {
    let totalNotas = 0
    for (let position = 0; position < alunosNotas.length; position++) {

        totalNotas = alunosNotas[position].nota + totalNotas
    }
    return totalNotas / alunosNotas.length
}

function updateTable(estudantes) {
    const tbody = document.querySelector(".tableBody");
    const average = document.querySelector(".averageScore")
    let tr;
    let tdName;
    let tdScore;
    for (let position = 0; position < estudantes.length; position++) {
        tr = document.createElement("tr");
        tdName = document.createElement("td");
        tdScore = document.createElement("td");
        tdName.appendChild(document.createTextNode(estudantes[position].nome));
        tdScore.appendChild(document.createTextNode(estudantes[position].nota));
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdScore);
    }
    average.appendChild(document.createTextNode(calculaMediaNotas(alunos)));
}


function adicionaAluno(estudantes, aluno, nota) {
    estudantes.push({ nome: aluno, nota: nota })
}

function removerAluno(estudantes, nomeAluno) {
    let index = estudantes.findIndex((estudante) => estudante.nome === nomeAluno)
    if (index !== -1) {
        estudantes.splice(index, 1)
    }
}

removerAluno(alunos, "Charlie");
adicionaAluno(alunos, "Kyle", 57);
updateTable(alunos);

let counter = 0
while (counter < alunos.length) {
    document.write(alunos[counter].nome + ' ' + alunos[counter].nota + "<br>");
    counter = counter + 1
}


document.write(calculaMediaNotas(alunos).toString())