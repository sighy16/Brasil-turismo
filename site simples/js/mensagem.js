
function Enviar() {
 
    var nome = document.getElementById("nome");
 
    if (nome.value !="") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

	else(nome.value.lenght < 3){
   		alert('Prencha os campos por favor!!');
   	}

}
function validaForm(frm) {
 	if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3);{
        //É mostrado um alerta, caso o campo esteja vazio.
      
        //Foi definido um focus no campo.
        frm.nome.focus();
        //o form não é enviado.
        return false;
   	
    }
    //o campo e-mail precisa de conter: "@", "." e não pode estar vazio
    if(frm.email.value.indexOf("@") == -1 ||
      frm.email.valueOf.indexOf(".") == -1 ||
      frm.email.value == "" ||
      frm.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        frm.email.focus();
        return false;
    }
    
}



