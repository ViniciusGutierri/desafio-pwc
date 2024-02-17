function extrairRuaENumero(endereco) {
    const numeroRegex = /\b(\d+\s*[A-Za-z]?)\b/;
    const numeroMatch = endereco.match(numeroRegex);
    
    if (numeroMatch) {
        const [numero] = numeroMatch;
        const rua = endereco.replace(numeroRegex, '').trim();
        return [rua, numero.trim()];
    } else {
        return [endereco.trim(), ''];
    }
}

const enderecos = [
    "Miritiba 339",
    "Babaçu 500",
    "Cambuí 804B",
    "Rio Branco 23",
    "Quirino dos Santos 23 b",
    "4, Rue de la République",
    "100 Broadway Av",
    "Calle Sagasta, 26",
    "Calle 44 No 1991"
];

enderecos.forEach(endereco => {
    const [rua, numero] = extrairRuaENumero(endereco);
    console.log(`Endereço: ${endereco} -> Rua: ${rua}, Número: ${numero}`);
});
