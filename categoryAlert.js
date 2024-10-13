//Percorrer Item a Item com Aler
// Version 1.0.0 - Primeira versão que tinha desenvolvimendo, porém aprimorei na versão 2.0.0(categoryInfoDisplay.js)
// Descrição
// Este script percorre todos os scripts na página e verifica se o conteúdo do script contém a variável 'categories'. Se a variável 'categories' for encontrada, o script executa o código do script para definir as variáveis no escopo global e exibe um alerta com o título e o nome interno de cada categoria.

function getCategories() {
    let categories = [];

    // Obtém todos os scripts na página
    const scripts = document.querySelectorAll("script");

    scripts.forEach((script) => {
        // Verifica se o conteúdo do script contém 'var categories'
        if (script.innerHTML.includes("var categories")) {
            try {
                // Executa o código do script para definir as variáveis no escopo global
                eval(script.innerHTML);

                // Verifica se a variável categories foi definida (Titel e Internal_name)
                if (Array.isArray(categories)) {
                    categories.forEach((category) => {
                        confirm(
                            `Title: ${category.title}\nInternal Name: ${category.internal_name}\n\nfmId: ${fmId}`
                        );
                    });
                }
            } catch (error) {
                console.error("Erro ao executar o conteúdo do script:", error);
            }
        }
    });
}

getCategories();
