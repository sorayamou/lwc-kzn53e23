import { LightningElement } from "lwc";

export default class App extends LightningElement {
  codigo = "001";
  nome = " Soraya Moussallem";
  telefone = "24 988090424";
  
  email = " soraya.moussallem@hotmail.com";
  rating = "9.5";

visible = true;


trocarDiv(){

  this.visible = !this.visible;

}

alterarValores (){
 this.codigo = "002";
 this.nome = " Maria Clara ";
 this.telefone = " 24 33436973";
 
 this.email = " soraya.moussallem@gmail.com";
 this.rating = "10.0";
 
 
}
}
