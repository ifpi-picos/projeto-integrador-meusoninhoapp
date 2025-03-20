document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-music-btn');
    tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

    const currentActiveTab = document.querySelector('.tab-music-btn.active');
    if (currentActiveTab) {
        tabClicked(currentActiveTab);
    } else {
        const firstTab = document.querySelector('.tab-music-btn');
        if (firstTab) {
            firstTab.classList.add('active');
            tabClicked(firstTab);
        }
    }

    loadMusicCards();

    document.addEventListener('click', (event) => {
        if (event.target.closest('.play-pause-btn')) {
            const button = event.target.closest('.play-pause-btn');
            const source = button.getAttribute('data-source');
            const isPlaying = button.getAttribute('data-playing') === 'true';
            playMusic(source, button, !isPlaying);
        }
    });
});

function tabClicked(tab) {
    document.querySelectorAll('.tab-music-btn').forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');

    document.querySelectorAll('.content-music').forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);
    
    if (content) {
        content.classList.add('show');
    }
}

const classicTracks = [
    {
        name: 'Clair de Lune',
        artist: 'Claude Debussy',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/musicas-classicas/Clair-de-Lune.mp3'
    },
    {
        name: 'Gymnopedi No. 1',
        artist: 'Erik Satie',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/musicas-classicas/Gymnopedi-No1.mp3'
    },
    {
        name: 'Valse Sentimentale No. 2',
        artist: 'Eric Christian',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/musicas-classicas/Valse-Sentimentale-No2.mp3'
    },
    {
        name: 'Moonlight',
        artist: 'Beethoven',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/musicas-classicas/Moonlight.mp3'
    },
    {
        name: 'Mariage D´amour',
        artist: 'Richard Clayderman',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/musicas-classicas/Mariage-D´amour.mp3'
    }
];

const lofiTracks = [
    {
        name: 'Night Ride',
        artist: 'Eddie Rohosy',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/lo-fi/Night-Ride.mp3'
    },
    {
        name: 'Technicolor',
        artist: 'kudasaibeats',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/lo-fi/technicolor.mp3'
    },
    {
        name: 'Snowman',
        artist: 'Lofi Girl',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/lo-fi/Snowman.mp3'
    },
    {
        name: 'Moon',
        artist: 'Nem - Tema',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/lo-fi/Moon.mp3'
    },
    {
        name: 'In Your Arms',
        artist: 'Saib',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/lo-fi/in-your-arms.mp3'
    }
];

const ambientTracks = [
    {
        name: 'Floresta',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/som-ambiente/floresta.mp3'
    },
    {
        name: 'Floresta Noturna',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/som-ambiente/floresta-noturna.mp3'
    },
    {
        name: 'Fogueira',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/som-ambiente/fogueira.mp3'
    },
    {
        name: 'Selvagem',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/som-ambiente/selvagem.mp3'
    },
    {
        name: 'Som do Mar',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/som-ambiente/som-do-mar.mp3'
    }
];

const jazzTracks = [
    {
        name: 'Blue And Sentimental',
        artist: 'Oscar Peterson',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/jazz-suave/Blue-And-Sentimental.mp3'
    },
    {
        name: 'And Suddenly There Was Love',
        artist: 'Jonah Aardekker',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/jazz-suave/And-Suddenly-There-Was-Love.mp3'
    },
    {
        name: 'Someone Who Cares',
        artist: 'Franz Gordon',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/jazz-suave/Someone-Who-Cares.mp3'
    },
    {
        name: 'Under A Smiling Moon',
        artist: 'Peter Sandberg',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/jazz-suave/Under-A-Smiling-Moon.mp3'
    },
    {
        name: 'When Sunny Gets Blue',
        artist: 'McCoy Tyner',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/jazz-suave/When-Sunny-Gets-Blue.mp3'
    }
];

const noiseTracks = [
    {
        name: 'Chuva',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/ruídos/chuva.mp3'
    },
    {
        name: 'Chuveiro',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/ruídos/chuveiro.mp3'
    },
    {
        name: 'Ruído Branco',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/ruídos/ruído-branco.mp3'
    },
    {
        name: 'Ruído Marrom',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/ruídos/ruído-marrom.mp3'
    },
    {
        name: 'Ventilador',
        artist: 'Artista desconhecido',
        cover: '../assets/musics/music-img.jpg',
        source: '../assets/musics/ruídos/ventilador.mp3'
    }
];

// Objeto que agrupa todas as categorias
const musicCategories = {
    "musica-classica": classicTracks,
    "lo-fi": lofiTracks,
    "som-ambiente": ambientTracks,
    "jazz-suave": jazzTracks,
    "ruidos": noiseTracks
};


function loadMusicCards() {
    for (const [categoryId, tracks] of Object.entries(musicCategories)) {
        const categoryDiv = document.getElementById(categoryId);
        if (!categoryDiv) continue;

        categoryDiv.innerHTML = "";

        tracks.forEach(track => {
            const musicCard = document.createElement("article");
            musicCard.classList.add("music-card");

            musicCard.innerHTML = `
                <img src="${track.cover}" alt="Capa da música ${track.name}">
                <div>
                    <h2>${track.name}</h2>
                    <p>${track.artist}</p>
                </div>
                <button class="play-pause-btn" data-source="${track.source}" data-playing="false">
                    <img src="../assets/musics/play.svg" alt="Play" class="play-pause-icon">
                </button>
            `;

            categoryDiv.appendChild(musicCard);
        });
    }
}

function playMusic(source, button, isPlaying) {
    const audioPlayer = document.getElementById('audio-player');
    const nowPlaying = document.getElementById('now-playing');

    document.querySelectorAll('.play-pause-btn').forEach(btn => {
        btn.setAttribute('data-playing', 'false');
        btn.innerHTML = '<img src="../assets/musics/play.svg" alt="Play" class="play-pause-icon">';
    });

    if (audioPlayer) {
        if (isPlaying) {
            audioPlayer.src = source;
            audioPlayer.play();
            button.setAttribute('data-playing', 'true');
            button.innerHTML = '<img src="../assets/musics/pause.svg" alt="Pause" class="play-pause-icon">';
            
            if (nowPlaying) {
                const trackName = button.parentElement.querySelector('h2').innerText;
                const artistName = button.parentElement.querySelector('p').innerText;
                nowPlaying.innerHTML = `Tocando agora: ${trackName} - ${artistName}`;
            }
        } else {
            audioPlayer.pause();
            button.setAttribute('data-playing', 'false');
            button.innerHTML = '<img src="../assets/musics/play.svg" alt="Play" class="play-pause-icon">';
        }
    }
}
