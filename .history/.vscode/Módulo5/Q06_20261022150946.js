const configPadrao =  { 
    velocidade: 100, 
    modoSeguranca: true, 
    idioma: 'PT' 
}

const configPersonalizada = {
    ...configPadrao,
    configPadrao.velocidade: 22
}

console.log(configPersonalizada);
