var listaDatos = [  { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
                    { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
                    { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
                    { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
                    { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ]

function mostrarDatos(){
  var divMuestra = document.getElementById("mostrando");
  for(i=0; i <= listaDatos.length; i++){
    divMuestra.innerHTML += "<ul>"
                          +"<li>Nombre: "+listaDatos[i].nombre+"</li>"
                          +"<li>Apellido: "+listaDatos[i].apellido+"</li>"
                          +"<li>Rol: "+listaDatos[i].rol+"</li>"
                          +"<li>Cumpleaños: "+listaDatos[i].cumpleanios+"</li>"
                          +"<ul>";
  }

}
