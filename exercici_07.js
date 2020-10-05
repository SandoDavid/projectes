let taula = document.getElementById ('taula');
let valor = 98;
for (let i=0 ; i<5; i++ ) {
    let fila = taula.insertRow(i);
    for ( let j=0 ; j<=9 ; j++ ){
        let cella = fila.insertCell(-1);
        cella.style.width = '30px';
        cella.style.textAlign='right';
        cella.innerHTML = valor;
        valor=valor-2;
    }
}
  //   if ( i%20==18 ) document.write( '<tr>') ;
  //   document.write( '<td align="center" bgcolor="#FFCC99" >' + i + '</td>' ) ;
  //   if ( i%20==0) document.write( '</tr>' ) ;
  // }