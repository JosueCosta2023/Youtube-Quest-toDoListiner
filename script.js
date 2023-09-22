//Selecionando os elementos que terão algum tipo de ação
const inputElement = document.querySelector('.new-task-input')
const addTaskButton = document.querySelector('.new-task-button')

//Selecionando a div container das listas
const tasksContainer = document.querySelector('.tasks-container')



//arrowFunction para Validar se o input esta vazio:
const validateInput = () =>  inputElement.value.trim().length > 0;

//arrowFunção HandleaddTaks
const handleAddTask = () => {
    const inputIsValid = validateInput();

    console.log(inputIsValid)

    if (!inputIsValid) {
        //Mudar a cor do border caso nao tenha valor no input
        //adicionando uma classe no input
        return inputElement.classList.add("error");
    }

    //Criando os elementos html das tarefas
    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p')

    //Adicionando monitoramento no paragrafo, ele ira chamar a função handleClick quando clicado
    // taskContent.addEventListener('click', () => handleClick(taskContent));

    taskContent.addEventListener("click", () => handleClick(taskContent));



    
    //Estilizando e incluido o icone 
    const deleteItem = document.createElement('i');
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    //Adicionando evento no botao delete, ele ira chamar a função excluir quando clicado
    deleteItem.addEventListener('click', () => handleDeleteClick());
    
    //Adicionando o valor do input no item da lista de tarefas
    taskContent.innerText = inputElement.value;


    //montando a div dos itens 
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    //colocando a div itemList dentro do container principal das listas
    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

};

 //Função que risca o paragrafo clicado, deixado ele com status de concluido.
 const handleClick = (taskContent) => {
     //O childNodes pega todos o filhos da classe tasksContainer
     const tasks = tasksContainer.childNodes;

     //Criação da variavel task
     //O FOR ira percorre a lista de tarefa tasks e inserir o valor na task
     //a fim de validar se o valor corresponde a tarefa clicada
     for (const task of tasks) {
         //firstChild = é a classe p
         //isSomeNode  = é a mesma coisa que outra
         if (task.firstChild.isSameNode(taskContent)) {
             //Se cair nesse if então atualizamos o text decoration
             task.firstChild.classList.toggle("completed");
         }
     }
 }



const handleInputChange = () => {
    const inputIsValid = validateInput();
    
    //Removendo a cor vermelha, caso haja letras no input
    if (inputIsValid) {
        return inputElement.classList.remove('error');
    }
    
};


//Evento do botao, adicionar tarefa
addTaskButton.addEventListener('click', () => handleAddTask());

//Adicionando monitoramento no input afim de alterar a cor da borda
inputElement.addEventListener('click', () => handleInputChange());