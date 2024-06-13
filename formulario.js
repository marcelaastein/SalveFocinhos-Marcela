let botao = document.getElementById('botao');
let formulario = document.getElementById('formulario')

botao.addEventListener('click',function(e){
    formulario.style.display = 'flex';
});

// // postar doação
// let postarDoacao = document.getElementById('enviar');

// postarDoacao.onclick = async function() {

//     let ong = document.getElementById('ong').value;
//     let nome_completo = document.getElementById('nome_completo').value;
//     let email = document.getElementById('email').value;
//     let produto = document.getElementById('produto').value;

//     if (!ong || !nome_completo || !email || !produto) {
//         alert('Preencha todos os campos para publicar sua vaga!')
//     } else {
//         let dados = {ong,nome_completo,email,produto}

//         const response = await fetch('http://localhost:3001/api/store/doacao', {
//             method: 'POST',
//             headers: {'Content-type': 'application/json;charset=UTF-8'},
//             body: JSON.stringify(dados)
//         });
    
//         let content = await response.json();
    
//         if(content.success) {
//             alert('Sucesso!');

//             // Criando o novo card
//             let cardVaga = document.createElement('div');
//             cardVaga.className = 'card_vaga';

//             let colunasCard = document.createElement('div');
//             colunasCard.className = 'colunasCard_vaga'

//             let infosVaga = document.createElement('div');
//             infosVaga.className = 'infos_vaga';

//             // Adicionando conteúdo ao card
//             infosVaga.innerHTML = `
//                 <p><b>Ong:</b> ${ong}
//                 <p><b>Nome completo:</b> ${nome_completo}</p>
//                 <p><b>Email:</b> ${email}</p>
//                 <p><b>Produto:</b> ${produto}</p>
//             `;

//             // criando coluna para os botoes
//             let botoesVaga = document.createElement('div');
//             botoesVaga.className = 'botoes_vaga';

//             // Criando botão pra config do card da vaga
//             let botaoCardVaga = document.createElement('div');
//             botaoCardVaga.className = 'info_vaga'
//             botaoCardVaga.innerHTML = 'Mais informações'
//             botoesVaga.appendChild(botaoCardVaga);

//             // aidicionando as colunas ao card
//             colunasCard.appendChild(infosVaga);
//             colunasCard.appendChild(botoesVaga);
//             cardVaga.appendChild(colunasCard);

//             // adicionando o card na section de vagas
//             document.querySelector('.centro').appendChild(cardVaga);

//             // Ocultando o formulário e resetando os campos
//             formulario.style.display = 'none';
//             formulario.reset();
//         } else {
//             alert('Algo deu errado, tente novamente!');
//         }
//     }
// };

document.getElementById('botao').addEventListener('click', function() {
    document.getElementById('formulario').style.display = 'flex';
});

document.getElementById('formulario').addEventListener('submit', async function(e) {
    e.preventDefault();

    let ong = document.getElementById('ong').value;
    let nome_completo = document.getElementById('nome').value; // Alterado de 'nome_completo' para 'nome'
    let email = document.getElementById('email').value;
    let produto = document.getElementById('produto').value;

    if (!ong || !nome_completo || !email || !produto) {
        alert('Preencha todos os campos para publicar sua vaga!');
    } else {
        let dados = { ong, nome_completo, email, produto };

        const response = await fetch('http://localhost:3001/api/store/doacao', {
            method: 'POST',
            headers: { 'Content-type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.success) {
            alert('Sucesso!');

            let cardVaga = document.createElement('div');
            cardVaga.className = 'card_vaga';

            let colunasCard = document.createElement('div');
            colunasCard.className = 'colunasCard_vaga';

            let infosVaga = document.createElement('div');
            infosVaga.className = 'infos_vaga';

            infosVaga.innerHTML = `
                <p><b>Ong:</b> ${ong}</p>
                <p><b>Nome completo:</b> ${nome_completo}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Produto:</b> ${produto}</p>
            `;

            let botoesVaga = document.createElement('div');
            botoesVaga.className = 'botoes_vaga';

            let botaoCardVaga = document.createElement('div');
            botaoCardVaga.className = 'info_vaga';
            botaoCardVaga.innerHTML = 'Mais informações';
            botoesVaga.appendChild(botaoCardVaga);

            colunasCard.appendChild(infosVaga);
            colunasCard.appendChild(botoesVaga);
            cardVaga.appendChild(colunasCard);

            document.querySelector('.lateralcentro').appendChild(cardVaga);

            document.getElementById('formulario').style.display = 'none';
            document.getElementById('formulario').reset();
        } else {
            alert('Algo deu errado, tente novamente!');
        }
    }
});

