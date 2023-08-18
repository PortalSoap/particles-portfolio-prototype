particlesJS("background", {
    // Configurações de Aparência
    particles: {
        number: {
            value: 15, // Número de particulas a ser adicionadas.
            density: {
                enable: true,
                value_area: 300, // Área onde as particulas serão distribuídas.
            },
        },
        color: {
            value: "#ffffff", // Cor das partículas.
        },
        shape: {
            type: "triangle", // Tipo de forma.
        },
        opacity: {
            value: 0.8, // Opacidade base das particulas.
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, // Tamanho base das partículas.
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Conexão das linhas as partículas.

        line_linked : {
            enable: true,
            distance: 150, // Distância máxima entre a linha e a partícula
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        // Movimento das partículas.
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Comportamento das partículas ao sair do canvas.
            bounce: false,
        },
    },

    // Configuções de Interatividade
    /* interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Permite interação com o mouse.
                mode: "repulse", // Modo de repulsão
            },
            onclick: {
                enable: true, // Permite resposta ao clique do mouse.
                mode: "push", // "Lança" partículas ao clicar.
            },
            resize: true, // Redimensiona as partículas ao reduzir/ampliar a janela.
        },
    }, */

    // Detecção de Tela de Retina.
    retina_detect: true,

})