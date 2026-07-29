(function () {
    'use strict';

    /* ═══════════════════════════════════════════════════════════════════
    CONFIGURAÇÕES
    Edite apenas este bloco para personalizar o painel.
    ═══════════════════════════════════════════════════════════════════ */
    var CFG = {

        /* ── Slideshow — coloque os arquivos em ../assets/pictures/ ── */
        media: [
            { src: '../assets/pictures/slide-00.png', type: 'image', duration: 4 },
            { src: '../assets/pictures/slide-01.png', type: 'image', duration: 12 },
            { src: '../assets/pictures/slide-02.png', type: 'image', duration: 4 },
            { src: '../assets/pictures/slide-03.png', type: 'image', duration: 7 },
            { src: '../assets/pictures/slide-04.png', type: 'image', duration: 7 },
            { src: '../assets/pictures/slide-05.png', type: 'image', duration: 7 },
            { src: '../assets/pictures/slide-06.png', type: 'image', duration: 7 },
            { src: '../assets/pictures/slide-07.png', type: 'image', duration: 7 },
            { src: '../assets/pictures/slide-08.png', type: 'image', duration: 5 },
        ],

        /* ── Playlist de música ambiente ────────────────────────────────
        Adicione ou remova objetos abaixo.
        • src   → caminho relativo do arquivo .mp3 (hospedado no repo)
        • label → nome amigável exibido na sidebar (opcional)
        ─────────────────────────────────────────────────────────────── */
        playlist: [
            { src: '../assets/audio/faixa-01.mp3', label: 'Tom Jobim - Eu Sei Que Vou Te Amar' },
            { src: '../assets/audio/faixa-02.mp3', label: 'Tiago Nacarato - Onde Anda Você' },
            { src: '../assets/audio/faixa-03.mp3', label: 'Frank Sinatra - That`s Life' },
            { src: '../assets/audio/faixa-04.mp3', label: 'Jesuton - I`ll Never Love This Way Again' },
            { src: '../assets/audio/faixa-05.mp3', label: 'Frank Sinatra - Fly Me To The Moon' },
            { src: '../assets/audio/faixa-06.mp3', label: 'Dionne Warwick - That`s What Friends Are For' },
            { src: '../assets/audio/faixa-07.mp3', label: 'Ray Charles - I Can`t Stop Loving You' },
            { src: '../assets/audio/faixa-08.mp3', label: 'The Manhattans - Kiss and Say Goodbye' },
            { src: '../assets/audio/faixa-09.mp3', label: 'Lionel Richie - Endless Love' },
            { src: '../assets/audio/faixa-10.mp3', label: 'Billy Paul - Me and Mrs. Jones' },
            { src: '../assets/audio/faixa-11.mp3', label: 'Barry White - Just The Way You Are' },
            { src: '../assets/audio/faixa-12.mp3', label: 'U.S.A. for Africa - We Are The World' },
            { src: '../assets/audio/faixa-13.mp3', label: 'Nat King Cole - L-O-V-E' },
            { src: '../assets/audio/faixa-14.mp3', label: 'Ella Fitzgerald - Dream A Little Dream Of Me' },
            { src: '../assets/audio/faixa-15.mp3', label: 'Dean Martin - That`s Amore' },
            { src: '../assets/audio/faixa-16.mp3', label: 'Brian McKnight - Back At One' },
            { src: '../assets/audio/faixa-17.mp3', label: 'Céline Dion - Because You Loved Me' },
            { src: '../assets/audio/faixa-18.mp3', label: 'Frank Sinatra - My Way' },
            { src: '../assets/audio/faixa-19.mp3', label: 'Whitney Houston - I Wanna Dance with Somebody' },
            { src: '../assets/audio/faixa-20.mp3', label: 'Bee Gees - Too Much Heaven' },
        ],

        /* ── Clima — API Key gratuita em openweathermap.org ── */
        weatherKey: 'dc39109075d6f19a6121182d64aff4ca',
        weatherLat: -10.9472,
        weatherLon: -37.0731,
        weatherRefresh: 600000,

        fadeDuration: 1500,

        /* ── Velocidade do ticker em px/segundo ── */
        tickerSpeed: 72,

        /* ── Avisos do consultório ── */
        avisos: [
            { emoji: '🛜', text: 'WiFi: Psimeirefranca | Senha: psimf12345' },
            { emoji: '📅', text: 'Atendimento de Segunda a Sexta, das 08h às 20h' },
            { emoji: '🖥️', text: 'Consultas Presenciais e Online — total flexibilidade para você' },
            { emoji: '📲', text: 'Agende sua consulta: (79) 99855-6740 · WhatsApp disponível' },
            { emoji: '📍', text: 'Consultório: Centro Médico Jardins, Sala 409 — Aracaju/SE' },
            { emoji: '⏱️', text: 'Cada sessão tem duração de 50 minutos — chegue com antecedência' },
            { emoji: '🛜', text: 'WiFi: Psimeirefranca | Senha: psimf12345' },
            { emoji: '📸', text: 'Instagram: @psimeirefranca — Acompanhe dicas e novidades' },
            { emoji: '🔒', text: 'Sigilo e ética garantidos em todos os atendimentos' },
            { emoji: '💳', text: 'Aceitamos Particular · Convênio em breve' },
            { emoji: '🌐', text: 'Agende online pelo nosso site — acesse pelo QR Code na recepção' },
            { emoji: '💙', text: 'Bem-vindo ao seu espaço de cuidado e autoconhecimento' },
        ],
    };
    /* FIM DAS CONFIGURAÇÕES */


    /* ═══════════════════════════════════════════════════════════════════
    RELÓGIO
    ═══════════════════════════════════════════════════════════════════ */
    var eH = document.getElementById('clk-h'),
        eM = document.getElementById('clk-m'),
        eS = document.getElementById('clk-s'),
        eDate = document.getElementById('clk-date'),
        eDay = document.getElementById('clk-day');
    var SEMANAS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    function tickClock() {
        var n = new Date(),
            hh = String(n.getHours()).padStart(2, '0'),
            mm = String(n.getMinutes()).padStart(2, '0'),
            ss = String(n.getSeconds()).padStart(2, '0');
        if (eH.textContent !== hh) eH.textContent = hh;
        if (eM.textContent !== mm) eM.textContent = mm;
        if (eS.textContent !== ss) eS.textContent = ss;
        eDate.textContent = n.getDate() + ' de ' + MESES[n.getMonth()] + ' de ' + n.getFullYear();
        eDay.textContent = SEMANAS[n.getDay()];
    }
    tickClock();
    setInterval(tickClock, 1000);

    /* ═══════════════════════════════════════════════════════════════════
STATUS CHIP DINÂMICO
Atualiza "Em Atendimento" conforme dia da semana e horário.
Horário de funcionamento: Seg–Sex, 08h–20h.
═══════════════════════════════════════════════════════════════════ */
    var statusChip = document.getElementById('status-chip');
    var statusDot = document.getElementById('status-dot');

    function atualizarStatus() {
        var agora = new Date();
        var dia = agora.getDay();    /* 0 = Dom, 6 = Sáb */
        var hora = agora.getHours();
        var min = agora.getMinutes();
        var hDecimal = hora + min / 60;

        var isDiaUtil = dia >= 1 && dia <= 5;
        var isHorario = hDecimal >= 8 && hDecimal < 20;
        var isAlmoco = hDecimal >= 12 && hDecimal < 13.5;

        var label, cor;

        if (!isDiaUtil) {
            label = 'Retorna na Segunda';
            cor = 'rgba(255,189,44,.15)';
            statusDot.style.background = 'var(--gold-light)';
            statusDot.style.boxShadow = 'none';
        } else if (isAlmoco) {
            label = 'Intervalo — retorna às 13h30';
            cor = 'rgba(255,189,44,.12)';
            statusDot.style.background = 'var(--gold)';
            statusDot.style.boxShadow = '0 0 6px var(--gold)';
        } else if (isHorario) {
            label = 'Em Atendimento';
            cor = 'rgba(255,189,44,.09)';
            statusDot.style.background = 'var(--gold)';
            statusDot.style.boxShadow = '0 0 6px var(--gold)';
        } else {
            label = 'Atendimento das 08h às 20h';
            cor = 'rgba(255,189,44,.08)';
            statusDot.style.background = 'var(--gold-light)';
            statusDot.style.boxShadow = 'none';
        }

        /* Atualiza somente se mudou, para evitar reflow desnecessário */
        var textoAtual = statusChip.textContent.trim();
        if (textoAtual !== label) {
            statusChip.style.background = cor;
            /* Preserva o dot e substitui só o texto */
            statusChip.innerHTML = '';
            statusChip.appendChild(statusDot);
            statusChip.appendChild(document.createTextNode(label));
        }
    }

    atualizarStatus();
    setInterval(atualizarStatus, 60000); /* Verifica a cada minuto */


    /* ═══════════════════════════════════════════════════════════════════
    CLIMA
    ═══════════════════════════════════════════════════════════════════ */
    var eWxIcon = document.getElementById('wx-icon'),
        eWxTemp = document.getElementById('wx-temp'),
        eWxDesc = document.getElementById('wx-desc');
    var WX = { '01': '☀️', '02': '🌤️', '03': '☁️', '04': '☁️', '09': '🌧️', '10': '🌦️', '11': '⛈️', '13': '❄️', '50': '🌫️' };

    function fetchWeather() {
        if (!CFG.weatherKey || CFG.weatherKey === 'SUA_CHAVE_AQUI') {
            eWxTemp.textContent = '—°C';
            eWxDesc.textContent = 'Configure a API Key';
            return;
        }
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=' + CFG.weatherLat +
            '&lon=' + CFG.weatherLon + '&appid=' + CFG.weatherKey + '&units=metric&lang=pt_br',
            { cache: 'no-store' }
        )
            .then(function (r) { if (!r.ok) throw 0; return r.json(); })
            .then(function (d) {
                if (!d || !d.main) throw 0;
                var ic = (d.weather && d.weather[0]) ? d.weather[0].icon : '';
                var temp = Math.round(d.main.temp) + '°C';
                var raw = (d.weather && d.weather[0]) ? d.weather[0].description : '';
                var desc = raw.charAt(0).toUpperCase() + raw.slice(1) +
                    '  ·  ST ' + Math.round(d.main.feels_like) + '°  ·  ' + d.main.humidity + '%';
                var icon = WX[(ic || '').slice(0, 2)] || '🌡️';

                eWxIcon.textContent = icon;
                eWxTemp.textContent = temp;
                eWxDesc.textContent = desc;

                /* Salva último dado válido para uso offline */
                try {
                    sessionStorage.setItem('wx_cache', JSON.stringify({ icon: icon, temp: temp, desc: desc }));
                } catch (e) { }
            })
            .catch(function () {
                /* Tenta exibir dado cacheado antes de mostrar fallback */
                try {
                    var cached = JSON.parse(sessionStorage.getItem('wx_cache'));
                    if (cached) {
                        eWxIcon.textContent = cached.icon;
                        eWxTemp.textContent = cached.temp;
                        eWxDesc.textContent = cached.desc + '  · cache';
                        return;
                    }
                } catch (e) { }
                eWxTemp.textContent = '—°C';
                eWxDesc.textContent = 'Aracaju, SE';
            });
    }
    fetchWeather();
    setInterval(fetchWeather, CFG.weatherRefresh);


    /* ═══════════════════════════════════════════════════════════════════
    SLIDESHOW
    ═══════════════════════════════════════════════════════════════════ */
    var stageEl = document.getElementById('stage'),
        dotsEl = document.getElementById('dots'),
        counterEl = document.getElementById('counter');
    var slides = (CFG.media || []).filter(function (m) { return m && m.src; }),
        curIdx = 0, curSlide = null, prevSlide = null, slideTimer = null;

    function makeSlide(item) {
        var wrap = document.createElement('div');
        wrap.className = 'slide';

        if (item.type === 'video') {
            var v = document.createElement('video');
            v.muted = true; v.playsInline = true; v.autoplay = false;
            v.loop = false; v.preload = 'metadata'; v.src = item.src;
            wrap.appendChild(v);
        } else {
            /* Imagem principal em contain, sem corte */
            var img = document.createElement('img');
            img.decoding = 'async'; img.loading = 'lazy'; img.alt = ''; img.src = item.src;
            wrap.appendChild(img);
        }

        return wrap;
    }

    function makePH() {
        var w = document.createElement('div');
        w.className = 'slide active';
        w.innerHTML = '<div class="slide-ph"><div class="ph-mono">MF</div><div class="ph-tag">Bem-vindo ao nosso espaço terapêutico</div></div>';
        return w;
    }

    function buildDots(n) {
        dotsEl.innerHTML = '';
        for (var i = 0; i < n; i++) {
            var d = document.createElement('div');
            d.className = 'dot' + (i === 0 ? ' on' : '');
            d.style.width = i === 0 ? '24px' : '6px';
            dotsEl.appendChild(d);
        }
    }

    function updateUI(idx) {
        var dots = dotsEl.querySelectorAll('.dot');
        for (var i = 0; i < dots.length; i++) {
            var on = i === idx;
            dots[i].classList.toggle('on', on);
            dots[i].style.width = on ? '24px' : '6px';
        }
        counterEl.textContent = (idx + 1) + ' / ' + slides.length;
    }

    function showSlide(idx) {
        if (!slides.length) return;
        var item = slides[idx];
        if (!item) return;
        if (prevSlide && prevSlide.parentNode) {
            var ov = prevSlide.querySelector('video');
            if (ov) { ov.pause(); ov.src = ''; }
            prevSlide.parentNode.removeChild(prevSlide);
            prevSlide = null;
        }
        var ns = makeSlide(item);
        prevSlide = curSlide;
        curSlide = ns;
        if (prevSlide) stageEl.insertBefore(ns, prevSlide);
        else stageEl.insertBefore(ns, dotsEl);
        void ns.offsetWidth;
        ns.classList.add('active');
        if (prevSlide) {
            prevSlide.classList.remove('active');
            (function (ps) {
                setTimeout(function () {
                    if (ps && ps.parentNode) {
                        var pv = ps.querySelector('video');
                        if (pv) { pv.pause(); pv.src = ''; }
                        ps.parentNode.removeChild(ps);
                        if (prevSlide === ps) prevSlide = null;
                    }
                }, CFG.fadeDuration + 200);
            })(prevSlide);
        }
        updateUI(idx);
        clearTimeout(slideTimer);
        if (item.type === 'video') {
            var vid = ns.querySelector('video');
            if (vid) {
                vid.load();
                vid.play().catch(function () { schedNext(8000); });
                vid.onended = nextSlide;
                vid.onerror = function () { schedNext(6000); };
            }
        } else {
            schedNext((item.duration || 10) * 1000);
        }
    }

    function schedNext(ms) {
        clearTimeout(slideTimer);
        /* Pré-carrega a imagem do próximo slide enquanto o atual ainda está visível */
        var nextItem = slides[(curIdx + 1) % slides.length];
        if (nextItem && nextItem.type !== 'video') {
            var preImg = new Image();
            preImg.src = nextItem.src;
        }
        slideTimer = setTimeout(nextSlide, ms || 10000);
    }
    function nextSlide() { curIdx = (curIdx + 1) % slides.length; showSlide(curIdx); }

    if (!slides.length) {
        var ph = makePH();
        stageEl.insertBefore(ph, dotsEl);
        curSlide = ph;
    } else {
        buildDots(slides.length);
        showSlide(0);
    }


    /* ═══════════════════════════════════════════════════════════════════
    WAVE BARS
    setWavesActive(true/false) é chamado pelo player de áudio nativo.
    ═══════════════════════════════════════════════════════════════════ */
    var wavesEl = document.getElementById('sb-waves');
    (function () {
        for (var i = 0; i < 18; i++) {
            var b = document.createElement('div');
            b.className = 'wave-bar';
            b.style.height = (8 + Math.random() * 24) + 'px';
            b.style.animationDuration = (0.5 + Math.random() * 0.7).toFixed(2) + 's';
            b.style.animationDelay = (Math.random() * 0.8).toFixed(2) + 's';
            wavesEl.appendChild(b);
        }
    })();

    function setWavesActive(active) {
        var bars = wavesEl.querySelectorAll('.wave-bar');
        var disc = document.getElementById('sb-disc');
        var state = active ? 'running' : 'paused';
        for (var i = 0; i < bars.length; i++) {
            bars[i].style.animationPlayState = state;
            if (active) bars[i].classList.add('playing');
            else bars[i].classList.remove('playing');
        }
        if (active) disc.classList.add('playing');
        else disc.classList.remove('playing');
    }


    /* ═══════════════════════════════════════════════════════════════════
    PLAYER DE ÁUDIO NATIVO (HTML5 + Vanilla JS)
    ─────────────────────────────────────────────────────────────────
    Substitui integralmente o Spotify Embed.
    • Usa new Audio() para não ocupar espaço no DOM.
    • A playlist vem de CFG.playlist (array de objetos {src, label}).
  • Ao terminar uma faixa (evento 'ended'), avança automaticamente.
  • Ao terminar a última faixa, volta para a primeira (loop contínuo).
  • Se o autoplay for bloqueado pelo navegador, exibe o overlay
  #start-overlay. Um clique nele libera a reprodução e solicita
  tela cheia (comportamento ideal para Digital Signage em TV).
  ═══════════════════════════════════════════════════════════════════ */
    var stateLabel = document.getElementById('sb-state-label');
    var trackNameEl = document.getElementById('sb-track-name');
    var overlay = document.getElementById('start-overlay');
    var startBtn = document.getElementById('start-btn');

    /* Instância única do objeto Audio — invisível no DOM */
    var audio = new Audio();
    audio.volume = 1.0;     /* Volume máximo (TV em ambiente controlado) */
    audio.preload = 'metadata'; /* Carrega apenas metadados — evita sobrecarga de memória no Firefox/Android */

    var currentTrackIdx = 0; /* Índice da faixa em reprodução */

    /* ── Fisher-Yates shuffle in-place ── */
    function shufflePlaylist() {
        var arr = CFG.playlist;
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
    }

    /**
     * playTrack(idx)
     * Carrega e toca a faixa de índice `idx` da playlist.
     * Atualiza o nome exibido na sidebar e retorna a Promise de play().
     */
    function playTrack(idx) {
        var playlist = CFG.playlist || [];
        if (!playlist.length) {
            stateLabel.textContent = 'Sem faixas';
            setWavesActive(false);
            return;
        }

        /* Garante que o índice seja circular */
        idx = ((idx % playlist.length) + playlist.length) % playlist.length;
        currentTrackIdx = idx;

        var track = playlist[idx];
        audio.src = track.src;
        audio.load();

        /* Atualiza UI com fade suave no nome da faixa */
        trackNameEl.classList.add('fade-out');
        setTimeout(function () {
            trackNameEl.textContent = track.label || ('Faixa ' + (idx + 1));
            trackNameEl.classList.remove('fade-out');
        }, 400);

        return audio.play();
    }

    /**
     * onAudioPlay — dispara quando o áudio inicia de fato.
     */
    audio.addEventListener('play', function () {
        stateLabel.textContent = 'Reproduzindo';
        setWavesActive(true);
    });

    /**
     * onAudioPause — dispara em pausa (não usado ativamente, mas
     * mantido para robustez em eventuais interações futuras).
     */
    audio.addEventListener('pause', function () {
        if (!audio.ended) {
            stateLabel.textContent = 'Pausado';
            setWavesActive(false);
        }
    });

    /**
     * onAudioEnded — avança para a próxima faixa ao término da atual.
     * Quando a última faixa termina, volta para a primeira (índice 0).
     */
    audio.addEventListener('ended', function () {
        var nextIdx = (currentTrackIdx + 1) % (CFG.playlist || []).length;
        if (nextIdx >= (CFG.playlist || []).length) {
            shufflePlaylist();
            nextIdx = 0;
        }
        playTrack(nextIdx).catch(function () {
            /* Silencia erros de autoplay em cenários raros de troca de aba */
        });
    });

    /**
     * onAudioError — trata falhas de carregamento de faixa.
     * Pula automaticamente para a próxima e registra no console.
     */
    audio.addEventListener('error', function () {
        console.warn('[AudioPlayer] Erro ao carregar faixa:', (CFG.playlist[currentTrackIdx] || {}).src);
        stateLabel.textContent = 'Erro na faixa';
        setWavesActive(false);
        /* Aguarda 2 s antes de tentar a próxima para não entrar em loop infinito */
        setTimeout(function () {
            var nextIdx = (currentTrackIdx + 1) % (CFG.playlist || []).length;
            playTrack(nextIdx).catch(function () { });
        }, 2000);
    });

    /**
     * showOverlay / hideOverlay
     * Exibe/oculta o painel de "Iniciar Painel" com animação suave.
     */
    function showOverlay() {
        overlay.classList.add('visible');
        stateLabel.textContent = 'Aguardando interação…';
        setWavesActive(false);
    }

    function hideOverlay() {
        overlay.classList.remove('visible');
    }

    /**
     * activateByUser()
     * Chamado após a primeira interação do usuário.
     * 1. Fecha o overlay.
     * 2. Solicita tela cheia (Digital Signage em TV).
     * 3. Inicia a reprodução da primeira faixa.
     */
    function activateByUser() {
        hideOverlay();

        /* Tela cheia — Firefox suporta apenas o padrão W3C */
        var root = document.documentElement;
        if (root.requestFullscreen) {
            root.requestFullscreen().catch(function (e) { console.warn(e); });
        }

        /* Inicia a primeira faixa */
        playTrack(currentTrackIdx).catch(function () {
            console.warn('[AudioPlayer] Erro ao iniciar áudio após interação.');
        });
    }

    /* Qualquer clique no overlay (ou no botão) ativa o painel */
    overlay.addEventListener('click', activateByUser);

    /**
     * initAudioPlayer()
     * Tenta iniciar a reprodução automaticamente.
     * • Sucesso → painel começa em modo de reprodução normal.
     * • Bloqueio (NotAllowedError) → exibe o overlay de ativação manual.
     */
    function initAudioPlayer() {
        if (!CFG.playlist || !CFG.playlist.length) {
            stateLabel.textContent = 'Playlist vazia';
            console.info('[AudioPlayer] Configure CFG.playlist para adicionar faixas.');
            return;
        }
        shufflePlaylist();
        playTrack(0)
            .then(function () {
                /* Autoplay liberado — tudo certo, sem necessidade de overlay */
                hideOverlay();
            })
            .catch(function (err) {
                /* Navegador bloqueou o autoplay — pede interação do usuário */
                console.info('[AudioPlayer] Autoplay bloqueado:', err.name, '— aguardando interação.');
                showOverlay();
            });
    }

    /* Inicia o player com um pequeno delay para garantir que o DOM
       e o loading screen estejam prontos */
    setTimeout(initAudioPlayer, 1600);


    /* ═══════════════════════════════════════════════════════════════════
    FRASES INSPIRACIONAIS
    ═══════════════════════════════════════════════════════════════════ */
    var QUOTES = [
        { text: 'O encontro de duas personalidades é como o contato de duas substâncias químicas: se houver alguma reação, ambas se transformam.', author: '— Carl Jung' },
        { text: 'A educação é o que sobrevive depois que tudo o que foi aprendido foi esquecido.', author: '— B. F. Skinner' },
        { text: 'O homem é condenado a ser livre; porque, uma vez lançado no mundo, ele é responsável por tudo o que faz.', author: '— Jean-Paul Sartre' },
        { text: 'Não somos apenas o que pensamos ser. Somos o que fazemos para mudar o que somos.', author: '— Eduardo Galeano' },
        { text: 'Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.', author: '— Carl Jung' },
        { text: 'A curiosa característica da vida é que, quanto mais eu me aceito como sou, mais eu mudo.', author: '— Carl Rogers' },
        { text: 'Tudo o que é sólido desmancha no ar.', author: '— Karl Marx' },
        { text: 'A vida não é um problema a ser resolvido, mas uma realidade a ser experimentada.', author: '— Søren Kierkegaard' },
        { text: 'A liberdade é o que você faz com o que foi feito com você.', author: '— Jean-Paul Sartre' },
        { text: 'Onde está o teu medo, aí está a tua tarefa.', author: '— Carl Jung' },
        { text: 'A inteligência é o único meio que possuímos para dominar nossos instintos.', author: '— Sigmund Freud' },
        { text: 'O ser humano é um animal social.', author: '— Aristóteles' },
    ];
    var qi = 0,
        qT = document.getElementById('sb-quote-text'),
        qA = document.getElementById('sb-quote-author');

    function rotateQuote() {
        qT.classList.add('fade-out');
        qA.classList.add('fade-out');
        setTimeout(function () {
            qi = (qi + 1) % QUOTES.length;
            qT.textContent = QUOTES[qi].text;
            qA.textContent = QUOTES[qi].author;
            qT.classList.remove('fade-out');
            qA.classList.remove('fade-out');
        }, 900);
    }
    setInterval(rotateQuote, 14000);


    /* ═══════════════════════════════════════════════════════════════════
    TICKER DE AVISOS
    ═══════════════════════════════════════════════════════════════════ */
    var tickerTrack = document.getElementById('ticker-track'),
        rafId = null, tPos = 0, tLast = null, half = 0;

    function esc(s) {
        return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function buildTicker() {
        var av = CFG.avisos || [];
        if (!av.length) return;
        var doubled = av.concat(av), html = '';
        for (var i = 0; i < doubled.length; i++) {
            html += '<span class="t-item"><span class="t-icon" aria-hidden="true">' +
                esc(doubled[i].emoji || '•') + '</span>' + esc(doubled[i].text) + '</span>';
            if (i < doubled.length - 1) html += '<span class="t-sep" aria-hidden="true"></span>';
        }
        tickerTrack.innerHTML = html;
        half = 0; tPos = 0; tLast = null;
        startTicker();
    }

    function startTicker() {
        if (rafId) cancelAnimationFrame(rafId);
        function step(ts) {
            if (!tLast) tLast = ts;
            var dt = ts - tLast;
            tLast = ts;
            if (!half) half = tickerTrack.scrollWidth / 2;
            tPos += (CFG.tickerSpeed * dt) / 1000;
            if (half > 0 && tPos >= half) tPos -= half;
            tickerTrack.style.transform = 'translateX(-' + tPos.toFixed(2) + 'px)';
            rafId = requestAnimationFrame(step);
        }
        rafId = requestAnimationFrame(step);
    }
    buildTicker();


    /* ═══════════════════════════════════════════════════════════════════
    PAGE VISIBILITY — pausa animações quando a aba perde foco.
    O áudio continua tocando (comportamento desejado para painéis
    que ficam em modo background em algumas implementações de TV).
    ═══════════════════════════════════════════════════════════════════ */
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            clearTimeout(slideTimer);
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
            if (curSlide) { var v = curSlide.querySelector('video'); if (v) v.pause(); }
            /* Nota: áudio nativo não é pausado — é intencional para Digital Signage */
        } else {
            /* Aguarda o reflow do DOM antes de medir scrollWidth no ticker */
            setTimeout(buildTicker, 50);
            var item = slides[curIdx];
            if (item) {
                if (item.type === 'video') {
                    var v2 = curSlide && curSlide.querySelector('video');
                    if (v2) v2.play().catch(function () { });
                } else {
                    schedNext((item.duration || 10) * 1000);
                }
            }
        }
    });


    /* ═══════════════════════════════════════════════════════════════════
    ANTI-SCREENSAVER — título alternado
    O Firefox Android ignora MouseEvent sintético. A alternância de título
    mantém atividade de documento real sem efeitos colaterais.
    ═══════════════════════════════════════════════════════════════════ */
    var _t = ['Consultório Meire França · Aracaju-SE', 'Psicóloga Meire França · CRP 19/4078'], _ti = 0;
    setInterval(function () {
        _ti = (_ti + 1) % _t.length;
        document.title = _t[_ti];
    }, 30000);


    /* ═══════════════════════════════════════════════════════════════════
    RELOAD DIÁRIO ÀS 05:00
    Garante que o painel sempre carregue a versão mais recente.
    ═══════════════════════════════════════════════════════════════════ */
    (function () {
        var now = new Date(), next = new Date(now);
        next.setHours(5, 0, 0, 0);
        if (next <= now) next.setDate(next.getDate() + 1);
        setTimeout(function () { location.reload(); }, next - now);
    })();

    /* ═══════════════════════════════════════════════════════════════════
    REMOVE LOADING SCREEN
    ═══════════════════════════════════════════════════════════════════ */
    var loadEl = document.getElementById('loading');
    setTimeout(function () {
        loadEl.classList.add('gone');
        setTimeout(function () {
            if (loadEl.parentNode) loadEl.parentNode.removeChild(loadEl);
        }, 1000);
    }, 1400);

})();