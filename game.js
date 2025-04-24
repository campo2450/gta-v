document.addEventListener('DOMContentLoaded', function() {
    // Configurações do jogo
    const game = {
        player: {
            x: 200,
            y: 200,
            speed: 5,
            health: 100,
            money: 5000,
            wantedLevel: 3,
            inVehicle: false,
            currentVehicle: null,
            weapons: ['Desarmado', 'Pistola', 'Rifle', 'Escopeta'],
            currentWeapon: 0
        },
        keys: {
            w: false,
            a: false,
            s: false,
            d: false,
            e: false,
            r: false,
            f: false,
            space: false
        },
        camera: {
            x: 0,
            y: 0
        },
        vehicles: [
            { id: 'car1', x: 250, y: 200, occupied: false, speed: 8 },
            { id: 'car2', x: 450, y: 300, occupied: false, speed: 7 }
        ],
        npcs: [
            { id: 'npc1', x: 150, y: 400, direction: Math.random() * Math.PI * 2 },
            { id: 'npc2', x: 350, y: 150, direction: Math.random() * Math.PI * 2 }
        ],
        worldBounds: {
            width: 2000,
            height: 2000
        }
    };