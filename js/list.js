const button = document.querySelector('.button-list')
const input = document.querySelector('.input-list')
const listaCompleta = document.querySelector('.ul-list')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
    // Verifica se o valor do input está vazio
    if (input.value.trim() === '') {
        alert('A tarefa não pode estar vazia!');
        return;
    }

    // Adiciona a nova tarefa
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostarTarefas()
}


function mostarTarefas() {

    let outraLi = ''

    //  ['comprar cafe', 'estudar']
    minhaListaDeItens.forEach((item, posição) => {

        outraLi = outraLi + `

        <li class="li-list ${item.concluida && "done"}">
            <img class="img-list" src="assets/checked.png" alt=""  onclick="concluirTarefa(${posição})">
            <p>${item.tarefa}</p>
            <img class="img-list"  src="assets/trash.png" alt="" onclick="deletarItem(${posição})">
        </li>

        `
    })

    listaCompleta.innerHTML = outraLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posição){
   minhaListaDeItens[posição].concluida = !minhaListaDeItens[posição].concluida

   mostarTarefas()
}

function deletarItem(posição){
    minhaListaDeItens.splice(posição, 1)

    mostarTarefas()
}

function RecarregarTarefas(){
    const TarefasDoLocalStorage = localStorage.getItem('lista')

    if(TarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(TarefasDoLocalStorage)
    }

    mostarTarefas()
}

RecarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)
