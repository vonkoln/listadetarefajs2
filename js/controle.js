document.addEventListener("DOMContentLoaded", () => {
let contador = 0
let input = document.getElementById('InputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //Pegar o valor digitado no input
    let valorInput = input.value;

    //Se não for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
       ++contador
       
        let novoItem = `<div id="${contador}" class="item">
        <div class="item-icone">
        <ion-icon name="ellipse-outline"></ion-icon>
         </div>
           <div class="item-nome">
          ${valorInput}
          </div>
          <div class="item-botao">
          <button onclick="deletar()" class="delete" ><ion-icon name="trash-outline"></ion-icon> Deletar</button>
           </div>
            </div>`;

        main.innerHTML += novoItem;



        input.value = "";
        input.focus();


    }
      
}
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})
}) 
