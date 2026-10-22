const configPadrao =  { 
    velocidade: 100, 
    modoSeguranca: true, 
    idioma: 'PT' 
}

const configPersonalizada = {
    ...configPadrao,
    
}

console.log(configPersonalizada);
