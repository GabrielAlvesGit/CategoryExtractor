// Percorrer Item a Item com Aler
// Version 1.0.0 - Primeira versão que tinha desenvolvimendo, porém aprimorei na versão 2.0.0(categoryInfoDisplay.js)
// Descrição
// Função que extrai informações sobre as categorias, a URL da página e a URL do logotipo, exibindo-as em um container estilizado.

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

                // Verifica se a variável categories foi definida
                if (Array.isArray(categories)) {
                    // Dados das categorias
                    let output = "";
                    const currentUrl = window.location.href;
                    const logoElement =
                        document.querySelector(".header__logo img");
                    const logoUrl = logoElement ? logoElement.src : "N/A";

                    // Strinsg com os dados de cada categoria
                    categories.forEach((category) => {
                        output += `Title: ${category.title}\nInternal Name: ${category.internal_name}\n\n`;
                    });

                    output += `URL da Página: ${currentUrl}\n`;
                    output += `Logo URL: ${logoUrl}\n`;
                    output += `fmId: ${fmId}\n\n`;

                    // Styles
                    const container = document.createElement("div");
                    container.style.position = "fixed";
                    container.style.overflowX = "scroll";
                    container.style.top = "50%";
                    container.style.left = "50%";
                    container.style.color = "#fff";
                    container.style.borderRadius = "5px";
                    container.style.transform = "translate(-50%, -50%)";
                    container.style.backgroundColor = "#595959";
                    container.style.border = "1px solid rgb(204, 204, 204)";
                    container.style.padding = "20px";
                    container.style.zIndex = "1000";
                    container.style.height = "99%";
                    container.style.width = "51%";
                    container.style.fontSize = "1rem";
                    container.style.fontWeight = "800";

                    // Adiciona o conteúdo ao container
                    const pre = document.createElement("pre");
                    pre.textContent = output;
                    container.appendChild(pre);

                    // Botão copiar o conteúdo
                    const copyButton = document.createElement("button");
                    copyButton.innerText =
                        "Copiar para a área de transferência";
                    copyButton.style.marginTop = "10px";
                    container.appendChild(copyButton);

                    // Adiciona o container ao corpo do documento
                    document.body.appendChild(container);

                    // Adiciona o evento de clique para copiar o texto
                    copyButton.onclick = function () {
                        const textarea = document.createElement("textarea");
                        textarea.value = output;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                        alert(
                            "Os dados foram copiados para a área de transferência."
                        );
                    };
                }
            } catch (error) {
                console.error("Erro ao executar o conteúdo do script:", error);
            }
        }
    });

    // Tratamento de erro
    if (categories.length === 0) {
        console.log("Nenhuma categoria encontrada.");
    }
}

getCategories();
