Pomodoro Timer - Coquette Aesthetic Edition

Este é um cronômetro de produtividade desenvolvido para web, focado na técnica de Pomodoro. O projeto une uma lógica funcional de contagem regressiva com uma interface personalizada baseada na estética Coquette, utilizando CSS moderno para garantir um visual minimalista e "clean".
🛠️ Tecnologias e Implementação

O projeto foi construído puramente com Vanilla Stack (HTML, CSS e JS), focando em performance e simplicidade:

    Lógica de Tempo: Implementada via setInterval, com cálculos de conversão de segundos para o formato MM:SS em tempo real.

    Manipulação de Estado: O script gerencia estados de execução (play/pause/reset) para evitar múltiplos intervalos simultâneos e garantir a precisão do cronômetro.

    Interface (UI): * Uso de backdrop-filter: blur para efeito de vidro fosco.

        Layout responsivo estruturado com Flexbox.

        Identidade visual baseada em tons pastéis e tipografia híbrida (Serif/Sans-serif).

📋 Funcionalidades

    Input Dinâmico: Permite definir o tempo de foco diretamente nos campos de entrada.

    Controle de Fluxo: Funções de Iniciar, Pausar e Resetar o progresso.

    Feedback Sonoro: Alerta sonoro disparado via API de áudio do navegador ao final de cada ciclo.

    Prevenção de Erros: Validação simples para impedir o início do timer com valores zerados ou negativos.

🚀 Como executar

    Clone o repositório:
   > Bash
  >git clone 

    Acesse o diretório do projeto e abra o index.html em qualquer navegador moderno.

📂 Estrutura de Arquivos

    index.html: Estrutura semântica e inputs de configuração.

    style.css: Toda a estilização, variáveis de cores e efeitos visuais.

    script.js: Toda a inteligência e controle de eventos do timer.

    assets/: Diretório destinado ao arquivo de áudio do alarme.

📌 Melhorias Futuras

    Implementação de ciclos automáticos (Foco > Descanso).

    Persistência de dados via localStorage para salvar as preferências de tempo do usuário.

    Notificações nativas do navegador (Push API).

Desenvolvido por : Wilson Teofilo
