function calcular() {
    var valor1 = 3.35;
    var campo1 = Number( document.getElementById( "campo1" ).value );
    var result = document.getElementById( "Resultado" );
    if ( result.textContent === undefined ) {
      result.textContent = ( campo1 * valor1 ).toFixed( 2 );
    } else { // IE
      result.innerText = ( campo1 * valor1 ).toFixed( 2 );
    }    
  };