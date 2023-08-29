function exibirDataAtual() {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    const dataAtual = new Date();
    const diaSemana = diasDaSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

    return dataFormatada;
}

const dataAtualFormatada = exibirDataAtual();
console.log(dataAtualFormatada); // Saída: Quarta-feira, 15 de fevereiro de 2023
