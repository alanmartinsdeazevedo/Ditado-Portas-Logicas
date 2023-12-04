# Jogo de Ditado de Portas Lógicas

Olá! Bem-vindo ao Jogo de Ditado de Portas Lógicas, uma ferramenta educacional desenvolvida para o componente curricular de Autoria Web. O jogo foi criado com HTML5, Canvas e JavaScript.

## Objetivo

O objetivo é tornar o aprendizado sobre portas lógicas mais envolvente, explorando conceitos essenciais na área de Tecnologias Digitais da Informação e Comunicação, alinhados à Base Nacional Comum Curricular (BNCC).

## Como Jogar

1. Suba o projeto para um servidor web ou execute no live server do Visual Code.
2. O jogo inicia automaticamente, exibindo imagens de portas lógicas.
3. Digite o nome da porta lógica no campo de resposta e pressione "Enter".
4. Acertando, ganhe pontos e avance. Errando, perca 5 segundos do tempo restante.
5. O jogo continua até atingir 100 pontos ou o tempo se esgotar.

## Controles

- Para responder, use o teclado e aperte "Enter".
- Se precisar apagar, use a tecla "Backspace".

## Requisitos

Qualquer navegador web moderno que suporte HTML5 e JavaScript.

## Estrutura do Projeto

- **index.html**: Estrutura principal da página.
- **assets/**: Guarda tudo que o jogo precisa, como imagens e sons.
- **assets/js/game.js**: Onde a mágica acontece, a lógica do jogo.

## Personalização

- Adicione suas próprias imagens de portas lógicas em **assets/img/** e no objeto `portasLogicas` dentro do arquivo **assets/js/game.js** para ter mais perguntas.
- Personalize os sons (ex. errouAudio.mp3 e failAudio.mp3) para combinar com o seu estilo.
- **Ideia Adicional**: Dê um toque único ao jogo substituindo as imagens de portas lógicas por circuitos completos. Desafie os jogadores a responderem não apenas identificando a porta, mas também fornecendo a combinação de 0 e 1 necessária para fechar o circuito. Isso adicionará uma camada extra de desafio, estimulando uma compreensão mais profunda dos princípios fundamentais dos sistemas lógicos.

## Alinhamento à BNCC

Este jogo está alinhado à BNCC, abordando:

- **Tecnologias Digitais da Informação e Comunicação (TICS)**:
  - **Habilidades Gerais**: Desenvolver o raciocínio lógico para resolver problemas.
  - **Conhecimentos Específicos**: Compreender como funcionam as portas lógicas.
