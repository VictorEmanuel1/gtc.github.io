function enviarForm1(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    var form1 = document.getElementById("form1");
    var nome = form1.elements["nome"].value;
    var email = form1.elements["email"].value;
    var senha = form1.elements["senha"].value;
    
    if (nome.trim() !== "" && email.trim() !== "" && senha.trim() !== "") {
      // Formulário 1 preenchido, mostrar o formulário 2
      form1.style.display = "none";
      document.getElementById("form2").classList.remove("hidden");
    } else {
      // Formulário 1 não preenchido, exibir mensagem de erro ou realizar outra ação
      alert("Preencha todos os campos do Formulário 1");
    }
  }
  
  function mostrarForm2() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").classList.remove("hidden");
  }

    // Habilitar o campo de entrada de texto quando a opção "Outros" for selecionada
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("outros").addEventListener("change", function() {
          if (this.checked) {
            document.getElementById("outros-input").disabled = false;
          } else {
            document.getElementById("outros-input").disabled = true;
          }
        });
      });