////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Puxa as váriaveis do localStorage ou sessionStorage.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

var TipoArmazenamento;
var Usuário_LembrarMe = localStorage.getItem('Usuário_LembrarMe');

if (Usuário_LembrarMe === 'Sim'){

    TipoArmazenamento = localStorage;

} else {

    TipoArmazenamento = sessionStorage;
}

var Usuário_PrimeiroNome = TipoArmazenamento.getItem('Usuário_PrimeiroNome');


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Declara as demais variáveis necessárias.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Variáveis do Login no Cabeçalho.
var UsuárioLogadoNome = document.getElementById('Usuário-Logado-Nome');
var BotãoSair = document.getElementById('Botão-Sair');

// Variáveis do Formulário.
var Período_Desejado = document.getElementById("Período_Desejado"); 
var Ir_Pagamento = document.getElementById("Ir_Pagamento");
var ValorEscolhido;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Leva à página de aviso se a largura da tela ficar <= 1350.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('resize', LevaàPáginaAviso);

function LevaàPáginaAviso() {

    if (window.innerWidth <= 1024) {
    
        window.location.href = "/plataforma/aviso";
    
    }

}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Configura os itens necessários ao carregar a página.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener('load', function() {

    //////////////////////////////////////////////////////////////////////////////////////////
    // Configura o Nome do Usuário no cabeçalho.

    UsuárioLogadoNome.textContent = Usuário_PrimeiroNome;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Configura o Botão-Sair.

    if (Usuário_PrimeiroNome === null){

        BotãoSair.style.display = "none";

    }

    Período_Desejado.selectedIndex = 0;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Configura o Ir_Pagamento.

    Ir_Pagamento.disabled = true;
    Ir_Pagamento.style.backgroundColor = "#ddd";
    Ir_Pagamento.style.boxShadow = "0px 2px 2px rgba(0, 0, 0, 1)"
    Ir_Pagamento.innerHTML = "SELECIONE O PERÍODO DESEJADO"

});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Processa o botão Voltar.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

var BotãoVoltar = document.getElementById("Botão-Voltar");
        
BotãoVoltar.addEventListener("click", function(){

    window.history.back();

})

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Processa o botão Período_Desejado.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

Período_Desejado.addEventListener("change", function(event) {

    if (Período_Desejado.selectedIndex === 0) {

        Ir_Pagamento.disabled = true;
        Ir_Pagamento.style.backgroundColor = "#ddd";
        Ir_Pagamento.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 1)"
        Ir_Pagamento.innerHTML = "SELECIONE O PERÍODO DESEJADO"

    } else if (Período_Desejado.selectedIndex === 1) {

        ValorEscolhido = 650;
        Ir_Pagamento.disabled = false;
        Ir_Pagamento.style.backgroundColor = "#056839";
        Ir_Pagamento.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 1)"
        Ir_Pagamento.innerHTML = "IR PARA PAGAMENTO"

    } else if(Período_Desejado.selectedIndex === 2){

        ValorEscolhido = 850;
        Ir_Pagamento.disabled = false;
        Ir_Pagamento.style.backgroundColor = "#056839";
        Ir_Pagamento.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 1)"
        Ir_Pagamento.innerHTML = "IR PARA PAGAMENTO"

    } else if(Período_Desejado.selectedIndex === 3){

        ValorEscolhido = 1000;
        Ir_Pagamento.disabled = false;
        Ir_Pagamento.style.backgroundColor = "#056839";
        Ir_Pagamento.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 1)"
        Ir_Pagamento.innerHTML = "IR PARA PAGAMENTO"

    }

})

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Processa o botão Ir_Pagamento.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

Ir_Pagamento.addEventListener("click", function(event) {
    event.preventDefault();
    var data = {
        Variável_Mestra_Valor_Total_do_Serviço_à_Vista: ValorEscolhido,
        Nome_Produto_Título: "<b> Extensão de Acesso (" + Período_Desejado.value + " dias)</b>",
        Nome_Produto_Valor: "Extensão de Acesso " + Período_Desejado.value + " dias"        
    };

    localStorage.setItem('Dados-Enviados-ao-Checkout', JSON.stringify(data));
    window.location.href = "/checkout";
})

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Processa o Botão-Sair.
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

BotãoSair.addEventListener('click', function() {

    localStorage.removeItem('Usuário_Logado');
    localStorage.removeItem('Usuário_LembrarMe');
    localStorage.removeItem('Usuário_Email');
    localStorage.removeItem('Usuário_PrimeiroNome');
    localStorage.removeItem('Usuário_Preparatório1_Status');
    localStorage.removeItem('Usuário_Preparatório1_PrazoAcesso');
    localStorage.removeItem('Usuário_Preparatório1_PercentualCumprimento');

    sessionStorage.clear();
    
    window.location.href = '/plataforma/login';
    
});



