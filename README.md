# 🌱 Agrinho 2026 - Agro Forte, Futuro Sustentável

![Status do Projeto](https://shields.io)
![Tecnologias](https://shields.io)

Uma aplicação web interativa, moderna e totalmente responsiva desenvolvida para o **Programa Agrinho 2026**. O projeto promove a conscientização sobre a importância da união entre as inovações tecnológicas no campo e as práticas agrícolas sustentáveis.

---

## ✨ Funcionalidades e Recursos Visuais

O projeto se destaca pela integração de estilos modernos e interatividade dinâmica:

- **Efeito Glassmorphism:** O menu superior fixo e os cartões de conteúdo utilizam fundos semitransparentes com desfoque (`backdrop-filter: blur`), conferindo sofisticação à interface.
- **Chuva de Emojis (`@keyframes cair`):** Sistema de partículas que faz com que margaridas (`🌼`) caiam continuamente pelo topo da tela, girando em 360 graus com tempos de atraso variados.
- **Mascote Dinâmico (Flora):** A assistente virtual interativa possui dupla animação: uma flutuação suave via CSS e um salto periódico adicional via JavaScript a cada 4 segundos.
- **Dica Pulsante:** Um indicador visual acima do mascote pulsa sua opacidade e é ocultado automaticamente assim que o usuário interage pela primeira vez.
- **Sistema de Diálogo Rotativo:** Ao clicar no mascote, um balão de fala exibe de forma sequencial fatos educativos sobre sustentabilidade, tecnologia e preservação ambiental.
- **Design Responsivo (`@media`):** Interface adaptada para dispositivos móveis, ocultando menus extensos e redimensionando os balões e o mascote para telas menores de 768px.

---

## 💬 Diálogos da Flora

A assistente virtual Flora compartilha as seguintes pílulas de conhecimento durante a navegação:
1. *Olá! Eu sou a Flora 🌼*
2. *Os drones ajudam a economizar água no campo! 💧*
3. *A tecnologia torna a agricultura mais eficiente. 🚜*
4. *Árvores protegem o solo e os rios. 🌳*
5. *O agro sustentável cuida do presente e do futuro. 🌱*
6. *Juntos podemos construir um mundo melhor! 💚*

---

## 🛠️ Tecnologias Utilizadas

O desenvolvimento foi feito de forma puramente nativa, sem o uso de dependências externas:

* **HTML5:** Estruturação semântica das seções (Início, Tecnologia, Sustentabilidade, Curiosidades e Rodapé).
* **CSS3:** Estilização com degradê linear ambiental, gerenciamento de camadas (`z-index`), flexbox para alinhamento e animações complexas baseadas em *keyframes*.
* **JavaScript (ES6):** Manipulação do DOM para controle do fluxo de mensagens, gerenciadores de eventos (`addEventListener`) e controle de animação por tempo (`setInterval`/`setTimeout`).

---

## 📂 Estrutura do Projeto

```text
├── index.html          # Estrutura de conteúdo e seções da página
├── estilo.css          # Estilos globais, responsividade e animações
├── script.js          # Comportamento interativo e falas da assistente Flora
└── img/
    └── flora.png       # Imagem da mascote do projeto
```

---

## 💻 Como Executar o Projeto

1. **Clone este repositório na sua máquina:**
   ```bash
   git clone https://github.com
   ```
2. **Navegue até a pasta criada:**
   ```bash
   cd NOME_DO_REPOSITORIO
   ```
3. **Execute a aplicação:**
   - Basta abrir o arquivo `index.html` em qualquer navegador moderno.
   - Recomenda-se o uso da extensão **Live Server** no VS Code para atualizar a tela automaticamente durante alterações.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
Desenvolvido com carinho e foco em sustentabilidade para o **Agrinho 2026** 🌾
