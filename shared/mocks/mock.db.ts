import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardStageENUM } from "../definitions/enums/card.enums";
import { EXPANSION } from "../definitions/enums/packs.enums";
import { PokemonTypeENUM } from "../definitions/enums/pokemon.enums";
import { Card } from "../definitions/interfaces/card.interfaces";

export const MOCK_DB_CARDS: Card[] = [
  {
    id: 1,
    number: 1,
    pokedex: 1,
    name: 'Bulbasaur',
    artist: 'Narumi Sato',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Ivysaur',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [2, 3, 4, 227, 251, 395, 390],
  },
  {
    id: 2,
    number: 2,
    pokedex: 2,
    name: 'Ivysaur',
    artist: 'Kurata So',
    attacks: [
      {
        name: 'Razor Leaf',
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Venusaur',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 3, 4, 227, 251, 395, 390]
  },
  {
    id: 3,
    number: 3,
    pokedex: 3,
    name: 'Venusaur',
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: 'Mega Rain',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Heal 30 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 2, 227, 395, 390]
  },
  {
    id: 4,
    number: 4,
    pokedex: 3,
    name: 'Venusaur EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Razor Leaf',
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      },
      {
        name: 'Giant Bloom',
        damage: 100,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Heal 30 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 190,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 2, 227, 251, 395]
  },
  {
    id: 5,
    number: 5,
    pokedex: 10,
    name: 'Caterpie',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Find a Friend',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Put 1 random Grass Pokémon from your deck into your hand.'
      }
    ],
    evolve: 'Metapod',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [6, 7, 385]
  },
  {
    id: 6,
    number: 6,
    pokedex: 11,
    name: 'Metapod',
    artist: 'Yuka Morii',
    attacks: [
      {
        name: 'Bug Bite',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Butterfree',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [5, 7, 385]
  },
  {
    id: 7,
    number: 7,
    pokedex: 12,
    name: 'Butterfree',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Gust',
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Powder Heal',
      description: 'Once during your turn, you may heal 20 damage from each of your Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [5, 6, 385]
  },
  {
    id: 8,
    number: 8,
    pokedex: 13,
    name: 'Weedle',
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: 'Sting',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: 'Kakuna',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [9, 10]
  },
  {
    id: 9,
    number: 9,
    pokedex: 12,
    name: 'Kakuna',
    artist: 'miki kudo',
    attacks: [
      {
        name: 'Bug Bite',
        damage: 30,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: 'Beedrill',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [8, 10]
  },
  {
    id: 10,
    number: 10,
    pokedex: 15,
    name: 'Beedrill',
    artist: 'You Iribi',
    attacks: [
      {
        name: 'Sharp Sting',
        damage: 70,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [8, 9]
  },
  {
    id: 11,
    number: 11,
    pokedex: 43,
    name: 'Oddish',
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: 'Ram',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: 'Gloom',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [12, 13, 228]
  },
  {
    id: 12,
    number: 12,
    pokedex: 44,
    name: 'Gloom',
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: 'Drool',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Vileplume',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [11, 13, 228]
  },
  {
    id: 13,
    number: 13,
    pokedex: 45,
    name: 'Vileplume',
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: 'Soothing Scent',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: "Your opponent's Active Pokémon is now Asleep."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [11, 12, 228]
  },
  {
    id: 14,
    number: 14,
    pokedex: 46,
    name: 'Paras',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Scratch',
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Parasect',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [15]
  },
  {
    id: 15,
    number: 15,
    pokedex: 47,
    name: 'Parasect',
    artist: 'Eri Yamaki',
    attacks: [
      {
        name: 'Slash',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [14]
  },
  {
    id: 16,
    number: 16,
    pokedex: 48,
    name: 'Venonat',
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: 'Venomoth',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [17]
  },
  {
    id: 17,
    number: 17,
    pokedex: 49,
    name: 'Venomoth',
    artist: 'Mina Nakai',
    attacks: [
      {
        name: 'Poison Powder',
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
        description: 'Your opponent\'s Active Pokémon is now Poisoned.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [16]
  },
  {
    id: 18,
    number: 18,
    pokedex: 69,
    name: 'Bellsprout',
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: 'Weepinbell',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Even though its body is extremely skinny, it is blindingly fast when catching its prey.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [19, 20]
  },
  {
    id: 19,
    number: 19,
    pokedex: 70,
    name: 'Weepinbell',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Razor Leaf',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Victreebel',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [18, 20]
  },
  {
    id: 20,
    number: 20,
    pokedex: 71,
    name: 'Victreebel',
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: 'Fragrance Trap',
      description: 'If this Pokémon is in the Active Spot, once during your turn, you may switch in 1 of your opponent’s Benched Basic Pokémon to the Active Spot.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Said to live in huge colonies deep in jungles, although no one has ever returned from there.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [18, 19]
  },
  {
    id: 21,
    number: 21,
    pokedex: 102,
    name: 'Exeggcute',
    artist: 'kawayoo',
    attacks: [
      {
        name: 'Seed Bomb',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: 'Exeggutor',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [22, 23, 287, 288, 252, 355]
  },
  {
    id: 22,
    number: 22,
    pokedex: 103,
    name: 'Exeggutor',
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: 'Stomp',
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
        description: 'Flip a coin. If heads, this attack does 30 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [21, 287, 288, 355]
  },
  {
    id: 23,
    number: 23,
    pokedex: 103,
    name: 'Exeggutor EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Tropical Swing',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS],
        description: 'Flip a coin. If heads, this attack does 40 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 160,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [21, 287, 252]
  },
  {
    id: 24,
    number: 24,
    pokedex: 114,
    name: 'Tangela',
    artist: 'Midori Harada',
    attacks: [
      {
        name: 'Absorb',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: 'Heal 10 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 25,
    number: 25,
    pokedex: 123,
    name: 'Scyther',
    artist: 'Hasuno',
    attacks: [
      {
        name: 'Sharp Scythe',
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It slashes through grass with its sharp scythes, moving too fast for the human eye to track.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
  },
  {
    id: 26,
    number: 26,
    pokedex: 127,
    name: 'Pinsir',
    artist: 'Eri Yamaki',
    attacks: [
      {
        name: 'Double Horn',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [229]
  },
  {
    id: 27,
    number: 27,
    pokedex: 546,
    name: 'Cottonee',
    artist: 'Kanako Eo',
    attacks: [
      {
        name: 'Attach',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Whimsicott',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [28]
  },
  {
    id: 28,
    number: 28,
    pokedex: 547,
    name: 'Whimsicott',
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: 'Rolling Tackle',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It scatters cotton all over the place as a prank. If it gets wet, it’ll become too heavy to move and have no choice but to answer for its mischief.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [27]
  },
  {
    id: 29,
    number: 29,
    pokedex: 548,
    name: 'Petilil',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Blot',
        damage: 10,
        energy: [PokemonTypeENUM.GRASS],
        description: 'Heal 10 damage from this Pokémon.'
      }
    ],
    evolve: 'Lilligant',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [30]
  },
  {
    id: 30,
    number: 30,
    pokedex: 549,
    name: 'Lilligant',
    artist: 'You Iribi',
    attacks: [
      {
        name: 'Leaf Supply',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: 'Take a Grass Energy from your Energy Zone and attach it to 1 of your Benched Grass Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [29]
  },
  {
    id: 31,
    number: 31,
    pokedex: 672,
    name: 'Skiddo',
    artist: 'Naoki Saito',
    attacks: [
      {
        name: 'Surprise Attack',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If tails, this attack does nothing.'
      }
    ],
    evolve: 'Gogoat',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Until recently, people living in the mountains would ride on the backs of these Pokémon to traverse the mountain paths.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [32]
  },
  {
    id: 32,
    number: 32,
    pokedex: 673,
    name: 'Gogoat',
    artist: 'You Iribi',
    attacks: [
      {
        name: 'Razor Leaf',
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.',
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [31]
  },
  {
    id: 33,
    number: 33,
    pokedex: 4,
    name: 'Charmander',
    artist: 'Teeziro',
    attacks: [
      {
        name: 'Ember',
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Discard 1 Fire Energy from this Pokémon.'
      }
    ],
    evolve: 'Charmeleon',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [34, 35, 36, 230, 253, 280, 284, 404]
  },
  {
    id: 34,
    number: 34,
    pokedex: 5,
    name: 'Charmeleon',
    artist: 'kantaro',
    attacks: [
      {
        name: 'Fire Claws',
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Charizard',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 35, 36, 230, 253, 280, 284, 404]
  },
  {
    id: 35,
    number: 35,
    pokedex: 6,
    name: 'Charizard',
    artist: 'takuyoa',
    attacks: [
      {
        name: 'Fire Spin',
        damage: 150,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 230, 404]
  },
  {
    id: 36,
    number: 36,
    pokedex: 6,
    name: 'Charizard EX',
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: 'Slash',
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Crimson Storm',
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 230, 253, 280, 284, 404]
  },
  {
    id: 37,
    number: 37,
    pokedex: 37,
    name: 'Vulpix',
    artist: 'Toshinao Aoki',
    attacks: [
      {
        name: 'Tail Whip',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.'
      }
    ],
    evolve: 'Ninetales',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'While young, it has six gorgeous tails. When it grows, several new tails are sprouted.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [38]
  },
  {
    id: 38,
    number: 38,
    pokedex: 38,
    name: 'Ninetales',
    artist: 'You Iribi',
    attacks: [
      {
        name: 'Flamethrower',
        damage: 90,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: 'Discard 1 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [37]
  },
  {
    id: 39,
    number: 39,
    pokedex: 58,
    name: 'Growlithe',
    artist: 'Mizue',
    attacks: [
      {
        name: 'Bite',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Arcanine',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [40, 41, 254]
  },
  {
    id: 40,
    number: 40,
    pokedex: 59,
    name: 'Arcanine',
    artist: 'kodama',
    attacks: [
      {
        name: 'Heat Tackle',
        damage: 100,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: 'This Pokémon also does 20 damage to itself.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [39]
  },
  {
    id: 41,
    number: 41,
    pokedex: 59,
    name: 'Arcanine EX',
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: 'Inferno Onrush',
        damage: 120,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: 'This Pokémon also does 20 damage to itself.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [39, 254]
  },
  {
    id: 42,
    number: 42,
    pokedex: 77,
    name: 'Ponyta',
    artist: 'Uta',
    attacks: [
      {
        name: 'Flare',
        damage: 20,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: 'Rapidash',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [43, 296, 297, 231]
  },
  {
    id: 43,
    number: 43,
    pokedex: 78,
    name: 'Rapidash',
    artist: 'Misa Tsutsui',
    attacks: [
      {
        name: 'Fire Mane',
        damage: 40,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: 'Rapidash',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [42, 296, 297, 231]
  },
  {
    id: 44,
    number: 44,
    pokedex: 126,
    name: 'Magmar',
    artist: 'Ryuta Fuse',
    attacks: [
      {
        name: 'Magma Punch',
        damage: 50,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [298]
  },
  {
    id: 45,
    number: 45,
    pokedex: 136,
    name: 'Flareon',
    artist: 'sui',
    attacks: [
      {
        name: 'Flamethrower',
        damage: 110,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 1 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [206, 207, 208, 347, 248, 402]
  },
  {
    id: 46,
    number: 46,
    pokedex: 145,
    name: 'Moltres',
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: 'Sky Attack',
        damage: 130,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If tails, this attack does nothing.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 47,
    number: 47,
    pokedex: 145,
    name: 'Moltres EX',
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: 'Inferno Dance',
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.'
      },
      {
        name: 'Heat Blast',
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [255, 274, 397]
  },
  {
    id: 48,
    number: 48,
    pokedex: 531,
    name: 'Heatmor',
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: 'Combustion',
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'There’s a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 49,
    number: 49,
    pokedex: 757,
    name: 'Salandit',
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: 'Scratch',
        damage: 20,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: 'Salazzle',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [50, 301, 302, 357]
  },
  {
    id: 50,
    number: 50,
    pokedex: 758,
    name: 'Salazzle',
    artist: 'hatachu',
    attacks: [
      {
        name: 'Fire Claws',
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [49, 301, 302, 357]
  },
  {
    id: 51,
    number: 51,
    pokedex: 850,
    name: 'Sizzlipede',
    artist: 'Teeziro',
    attacks: [
      {
        name: 'Gnaw',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Centiskorch',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [52]
  },
  {
    id: 52,
    number: 52,
    pokedex: 851,
    name: 'Centiskorch',
    artist: 'GOSSAN',
    attacks: [
      {
        name: 'Fire Blast',
        damage: 130,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 1 Fire Energy from this Pokémon.'
      }
    ],
    evolve: 'Centiskorch',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.',
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [51]
  },
  {
    id: 53,
    number: 53,
    pokedex: 7,
    name: 'Squirtle',
    artist: 'Mizue',
    attacks: [
      {
        name: 'Water Gun',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Wartortle',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [54, 55, 56, 232, 256, 405, 401]
  },
  {
    id: 54,
    number: 54,
    pokedex: 8,
    name: 'Wartortle',
    artist: 'Nelnal',
    attacks: [
      {
        name: 'Wave Splash',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Blastoise',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 55, 56, 232, 256, 405, 401]
  },
  {
    id: 55,
    number: 55,
    pokedex: 9,
    name: 'Blastoise',
    artist: 'Nurikabe',
    attacks: [
      {
        name: 'Hydro Pump',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 232, 405, 401]
  },
  {
    id: 56,
    number: 56,
    pokedex: 9,
    name: 'Blastoise EX',
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: 'Surf',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      },
      {
        name: 'Hydro Bazooka',
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 232, 256, 405]
  },
  {
    id: 57,
    number: 57,
    pokedex: 54,
    name: 'Psyduck',
    artist: 'Shibuzoh',
    attacks: [
      {
        name: 'Headache',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Your opponent can’t use any Supporter cards from their hand during their next turn.'
      }
    ],
    evolve: 'Golduck',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [58]
  },
  {
    id: 58,
    number: 58,
    pokedex: 55,
    name: 'Golduck',
    artist: 'Naoki Saito',
    attacks: [
      {
        name: 'Aqua Edge',
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [57]
  },
  {
    id: 59,
    number: 59,
    pokedex: 60,
    name: 'Poliwag',
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: 'Razor Fin',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: ' Poliwhirl',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [60, 61]
  },
  {
    id: 60,
    number: 60,
    pokedex: 61,
    name: 'Poliwhirl',
    artist: 'Yuka Morii',
    attacks: [
      {
        name: 'Knuckle Punch',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Poliwrath',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [59, 61]
  },
  {
    id: 61,
    number: 61,
    pokedex: 62,
    name: 'Poliwrath',
    artist: 'Akira Komayama',
    attacks: [
      {
        name: 'Mega Punch',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: 'Counterattack',
      description: 'If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon, do 20 damage to the Attacking Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [59, 60]
  },
  {
    id: 62,
    number: 62,
    pokedex: 72,
    name: 'Tentacool',
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: 'Gentle Slap',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Tentacruel',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [63]
  },
  {
    id: 63,
    number: 63,
    pokedex: 73,
    name: 'Tentacruel',
    artist: 'kodama',
    attacks: [
      {
        name: 'Poison Tentacles',
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'Your opponent’s Active Pokémon is now Poisoned.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.',
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [62]
  },
  {
    id: 64,
    number: 64,
    pokedex: 86,
    name: 'Seel',
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: 'Headbutt',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Dewgong',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [65]
  },
  {
    id: 65,
    number: 65,
    pokedex: 87,
    name: 'Dewgong',
    artist: 'Kanako Eo',
    attacks: [
      {
        name: 'Surf',
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [64]
  },
  {
    id: 66,
    number: 66,
    pokedex: 90,
    name: 'Shellder',
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: 'Tongue Slap',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Cloyster',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [67]
  },
  {
    id: 67,
    number: 67,
    pokedex: 91,
    name: 'Cloyster',
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: 'Surf',
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: 'Shell Armor',
      description: 'This Pokémon takes −10 damage from attacks.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [66]
  },
  {
    id: 68,
    number: 68,
    pokedex: 98,
    name: 'Krabby',
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: 'Vise Grip',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Kingler',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It can be found near the sea. The large pincers grow back if they are torn out of their sockets.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [69]
  },
  {
    id: 69,
    number: 69,
    pokedex: 99,
    name: 'Kingler',
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: 'KO Crab',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'Flip coins. If all of them are heads, this attack does 80 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [68]
  },
  {
    id: 70,
    number: 70,
    pokedex: 116,
    name: 'Horsea',
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: 'Water Gun',
        damage: 60,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Seadra',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [71]
  },
  {
    id: 71,
    number: 71,
    pokedex: 117,
    name: 'Seadra',
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: 'Water Arrow',
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: 'This attack does 50 damage to 1 of your opponent’s Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.',
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [70]
  },
  {
    id: 72,
    number: 72,
    pokedex: 118,
    name: 'Goldeen',
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: 'Flop',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Seaking',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [73]
  },
  {
    id: 73,
    number: 73,
    pokedex: 119,
    name: 'Seaking',
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: 'Horn Hazard',
        damage: 80,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.',
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [72]
  },
  {
    id: 74,
    number: 74,
    pokedex: 120,
    name: 'Staryu',
    artist: 'Hiroki Asanuma',
    attacks: [
      {
        name: 'Smack',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Starmie',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [75, 76, 257]
  },
  {
    id: 75,
    number: 75,
    pokedex: 121,
    name: 'Starmie',
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: 'Wave Splash',
        damage: 40,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [74]
  },
  {
    id: 76,
    number: 76,
    pokedex: 121,
    name: 'Starmie EX',
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: 'Hydro Splash',
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [74, 257]
  },
  {
    id: 77,
    number: 77,
    pokedex: 129,
    name: 'Magikarp',
    artist: 'Sekio',
    attacks: [
      {
        name: 'Splash',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Gyarados',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.',
    health: 30,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [78, 303, 304, 233, 362]
  },
  {
    id: 78,
    number: 78,
    pokedex: 130,
    name: 'Gyarados',
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: 'Hyper Beam',
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: 'Discard 1 random Energy from your opponent’s Active Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [77, 303, 233]
  },
  {
    id: 79,
    number: 79,
    pokedex: 131,
    name: 'Lapras',
    artist: 'Sekio',
    attacks: [
      {
        name: 'Hydro Pump',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
        description: 'If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [234]
  },
  {
    id: 80,
    number: 80,
    pokedex: 134,
    name: 'Vaporeon',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Bubble Drain',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Heal 30 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [206, 207, 208, 305, 347, 248, 358, 402]
  },
  {
    id: 81,
    number: 81,
    pokedex: 138,
    name: 'Omanyte',
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: 'Water Gun',
        damage: 40,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Omastar',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [82, 216]
  },
  {
    id: 82,
    number: 82,
    pokedex: 139,
    name: 'Omastar',
    artist: 'kirisAki',
    attacks: [
      {
        name: 'Ancient Whirlpool',
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'During your opponent’s next turn, the Defending Pokémon can’t attack.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [81, 216]
  },
  {
    id: 83,
    number: 83,
    pokedex: 144,
    name: 'Articuno',
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: 'Ice Beam',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO
    ],
  },
  {
    id: 84,
    number: 84,
    pokedex: 144,
    name: 'Articuno EX',
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: 'Ice Wing',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: 'Blizzard',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [258, 275]
  },
  {
    id: 85,
    number: 85,
    pokedex: 580,
    name: 'Ducklett',
    artist: 'Yumi',
    attacks: [
      {
        name: 'Flap',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Swanna',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When attacked, it uses its feathers to splash water, escaping under cover of the spray.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [86]
  },
  {
    id: 86,
    number: 86,
    pokedex: 581,
    name: 'Swanna',
    artist: 'sui',
    attacks: [
      {
        name: 'Wing Attack',
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [85]
  },
  {
    id: 87,
    number: 87,
    pokedex: 656,
    name: 'Froakie',
    artist: 'Aya Kusube',
    attacks: [
      {
        name: 'Flop',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Frogadier',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [88, 89, 391]
  },
  {
    id: 88,
    number: 88,
    pokedex: 657,
    name: 'Frogadier',
    artist: 'Akira Komayama',
    attacks: [
      {
        name: 'Water Drip',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Greninja',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [87, 89, 391]
  },
  {
    id: 89,
    number: 89,
    pokedex: 658,
    name: 'Greninja',
    artist: '5ban Graphics',
    attacks: [
      {
        name: 'Mist Slash',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Water Shuriken',
      description: 'Once during your turn, you may do 20 damage to 1 of your opponent’s Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [87, 88, 391]
  },
  {
    id: 90,
    number: 90,
    pokedex: 771,
    name: 'Pyukumuku',
    artist: 'OOYAMA',
    attacks: [
      {
        name: 'Rain Splash',
        damage: 30,
        energy: [PokemonTypeENUM.WATER],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 91,
    number: 91,
    pokedex: 779,
    name: 'Bruxish',
    artist: 'Mizue',
    attacks: [
      {
        name: 'Second Strike',
        damage: 10,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'If your opponent’s Active Pokémon has damage on it, this attack does 60 more damage.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 92,
    number: 92,
    pokedex: 872,
    name: 'Snom',
    artist: 'ryoma uratsuka',
    attacks: [
      {
        name: 'Ram',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Frosmoth',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It eats snow that has accumulated on the ground. It prefers soft, freshly fallen snow, so it will eat its way up a mountain, aiming for the peak.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [93]
  },
  {
    id: 93,
    number: 93,
    pokedex: 873,
    name: 'Frosmoth',
    artist: 'aoki',
    attacks: [
      {
        name: 'Powder Snow',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Frosmoth',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [92]
  },
  {
    id: 94,
    number: 94,
    pokedex: 25,
    name: 'Pikachu',
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: 'Gnaw',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Raichu',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [95, 311, 312, 398, 387, 381]
  },
  {
    id: 95,
    number: 95,
    pokedex: 26,
    name: 'Raichu',
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: 'Thunderbolt',
        damage: 140,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'Discard all Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [94, 311, 312, 398, 387, 381]
  },
  {
    id: 96,
    number: 96,
    pokedex: 25,
    name: 'Pikachu EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Circle Circuit',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'This attack does 30 damage for each of your Benched Lightning Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 120,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [259, 281, 285]
  },
  {
    id: 97,
    number: 97,
    pokedex: 81,
    name: 'Magnemite',
    artist: 'sowsow',
    attacks: [
      {
        name: 'Lighting Ball',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Magneton',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [98, 396]
  },
  {
    id: 98,
    number: 98,
    pokedex: 82,
    name: 'Magneton',
    artist: 'kirisAki',
    attacks: [
      {
        name: 'Spinning Attack',
        damage: 60,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Volt Charge',
      description: 'Once during your turn, you may take a Lighting Energy from your Energy Zone and attach it to this Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.',
    health: 80,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [97, 396]
  },
  {
    id: 99,
    number: 99,
    pokedex: 100,
    name: 'Voltorb',
    artist: 'SATOSHI NAKAI',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Electrode',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [100, 235]
  },
  {
    id: 100,
    number: 100,
    pokedex: 101,
    name: 'Electrode',
    artist: 'Asako Ito',
    attacks: [
      {
        name: 'Electro Ball',
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [99, 235]
  },
  {
    id: 101,
    number: 101,
    pokedex: 125,
    name: 'Electabuzz',
    artist: 'Ryuta Fuse',
    attacks: [
      {
        name: 'Thunder Punch',
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [313]
  },
  {
    id: 102,
    number: 102,
    pokedex: 135,
    name: 'Jolteon',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Pin Missile',
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: 'Flip 4 coins. This attack does 40 damage for each heads.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.',
    health: 90,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [206, 207, 208, 347, 248, 402]
  },
  {
    id: 103,
    number: 103,
    pokedex: 145,
    name: 'Zapdos',
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: 'Raging Thunder',
        damage: 100,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: 'This attack also does 30 damage to 1 of your Benched Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
  },
  {
    id: 104,
    number: 104,
    pokedex: 145,
    name: 'Zapdos EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Peck',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: 'Thundering Hurricane',
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'Flip 4 coins. This attack does 50 damage for each heads.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [260, 276]
  },
  {
    id: 105,
    number: 105,
    pokedex: 522,
    name: 'Blitzle',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Zap Kick',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Zebstrika',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [106]
  },
  {
    id: 106,
    number: 106,
    pokedex: 523,
    name: 'Zebstrika',
    artist: 'Misa Tsutsui',
    attacks: [
      {
        name: 'Thunder Spear',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: 'This attack does 30 damage to 1 of your opponent’s Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [105]
  },
  {
    id: 107,
    number: 107,
    pokedex: 602,
    name: 'Tynamo',
    artist: 'Asako Ito',
    attacks: [
      {
        name: 'Tiny Charge',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Eelektrik',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'While one alone doesn’t have much power, a chain of many Tynamo can be as powerful as lightning.',
    health: 30,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [108, 109]
  },
  {
    id: 108,
    number: 108,
    pokedex: 603,
    name: 'Eelektrik',
    artist: 'Midori Harada',
    attacks: [
      {
        name: 'Head Bolt',
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Eelektross',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [107, 109]
  },
  {
    id: 109,
    number: 109,
    pokedex: 604,
    name: 'Eelektross',
    artist: 'hatachu',
    attacks: [
      {
        name: 'Thunder Fang',
        damage: 80,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [107, 108]
  },
  {
    id: 110,
    number: 110,
    pokedex: 694,
    name: 'Helioptile',
    artist: '5ban Graphics',
    attacks: [
      {
        name: 'Tail Whap',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Heliolisk',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When spread, the frills on its head act like solar panels, generating the power behind this Pokémon’s electric moves.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [111]
  },
  {
    id: 111,
    number: 111,
    pokedex: 695,
    name: 'Heliolisk',
    artist: 'otumami',
    attacks: [
      {
        name: 'Quick Attack',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, this attack does 40 more damage.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [110]
  },
  {
    id: 112,
    number: 112,
    pokedex: 871,
    name: 'Pincurchin',
    artist: 'Tika Matsuno',
    attacks: [
      {
        name: 'Thunder Shock',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.',
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 113,
    number: 113,
    pokedex: 35,
    name: 'Clefairy',
    artist: 'kirisAki',
    attacks: [
      {
        name: 'Slap',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: 'Clefable',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [114, 388]
  },
  {
    id: 114,
    number: 114,
    pokedex: 36,
    name: 'Clefable',
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: 'Magical Shot',
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [113, 388]
  },
  {
    id: 115,
    number: 115,
    pokedex: 63,
    name: 'Abra',
    artist: 'Aya Kusube',
    attacks: [
      {
        name: 'Teleport',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Switch this Pokémon with 1 of your Benched Pokémon.'
      },
    ],
    evolve: 'Kadabra',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [116, 117, 236]
  },
  {
    id: 116,
    number: 116,
    pokedex: 64,
    name: 'Kadabra',
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: 'Super Psy Bolt',
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Alakazam',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [115, 117, 236]
  },
  {
    id: 117,
    number: 117,
    pokedex: 65,
    name: 'Alakazam',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Psychic',
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [115, 116, 236]
  },
  {
    id: 118,
    number: 118,
    pokedex: 79,
    name: 'Slowpoke',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Tail Whap',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Slowbro',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [119, 237]
  },
  {
    id: 119,
    number: 119,
    pokedex: 80,
    name: 'Slowbro',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Super Psy Bolt',
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.',
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [118, 237]
  },
  {
    id: 120,
    number: 120,
    pokedex: 92,
    name: 'Gastly',
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: 'Suffocating Gas',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: 'Haunter',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [121, 122, 123, 261, 277, 392]
  },
  {
    id: 121,
    number: 121,
    pokedex: 93,
    name: 'Haunter',
    artist: 'Nisota Niso',
    attacks: [
      {
        name: 'Will-O-Wisp',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: 'Gengar',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 122, 123, 261, 277, 392]
  },
  {
    id: 122,
    number: 122,
    pokedex: 94,
    name: 'Gengar',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Bother',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: 'Your opponent can’t use any Supporter cards from their hand during their next turn.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 392]
  },
  {
    id: 123,
    number: 123,
    pokedex: 94,
    name: 'Gengar EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Spooky Shot',
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: 'Shadowy Spellbind',
      description: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 170,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 261, 277, 392]
  },
  {
    id: 124,
    number: 124,
    pokedex: 96,
    name: 'Drowzee',
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: 'Mumble',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Hypno',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It remembers every dream it eats. It rarely eats the dreams of adults because children’s are much tastier.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [125]
  },
  {
    id: 125,
    number: 125,
    pokedex: 97,
    name: 'Hypno',
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: 'Psypunch',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Sleep Pendulum',
      description: 'Once during your turn, you may flip a coin. If heads, your opponent’s Active Pokémon is now Asleep.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [124]
  },
  {
    id: 126,
    number: 126,
    pokedex: 122,
    name: 'Mr.Mime',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Barrier Attack',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
        description: 'During your opponent’s next turn, this Pokémon takes −20 damage from attacks.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 127,
    number: 127,
    pokedex: 124,
    name: 'Jynx',
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: 'Psychic',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
        description: 'This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 128,
    number: 128,
    pokedex: 150,
    name: 'Mewtwo',
    artist: 'kawayoo',
    attacks: [
      {
        name: 'Power Blast',
        damage: 120,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Psychic Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [382]
  },
  {
    id: 129,
    number: 129,
    pokedex: 150,
    name: 'Mewtwo EX',
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: 'Psychic Sphere',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Psydrive',
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Psychic Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [262, 282, 286]
  },
  {
    id: 130,
    number: 130,
    pokedex: 280,
    name: 'Ralts',
    artist: 'Yuka Morii',
    attacks: [
      {
        name: 'Ram',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Kirlia',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The horns on its head provide a strong power that enables it to sense people’s emotions.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [131, 132]
  },
  {
    id: 131,
    number: 131,
    pokedex: 281,
    name: 'Kirlia',
    artist: 'sowsow',
    attacks: [
      {
        name: 'Smack',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Gardevoir',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a psychic power that enables it to distort the space around it and see into the future.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [130, 132]
  },
  {
    id: 132,
    number: 132,
    pokedex: 282,
    name: 'Gardevoir',
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: 'Psyshot',
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Psy Shadow',
      description: 'Once during your turn, you may take a Psychic Energy from your Energy Zone and attach it to the Psychic Pokémon in the Active Spot.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'To protect its Trainer, it will expend all its psychic power to create a small black hole.',
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [130, 131]
  },
  {
    id: 133,
    number: 133,
    pokedex: 527,
    name: 'Woobat',
    artist: 'MAHOU',
    attacks: [
      {
        name: 'Gnaw',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Swoobat',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it’s evidence that Woobat live there.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [134]
  },
  {
    id: 134,
    number: 134,
    pokedex: 528,
    name: 'Swoobat',
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: 'Heart Stamp',
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Emitting powerful sound waves tires it out. Afterward, it won’t be able to fly for a little while.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [133]
  },
  {
    id: 135,
    number: 135,
    pokedex: 622,
    name: 'Golett',
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: 'Mega Punch',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Golurk',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'They were sculpted from clay in ancient times. No one knows why, but some of them are driven to continually line up boulders.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [136]
  },
  {
    id: 136,
    number: 136,
    pokedex: 623,
    name: 'Golurk',
    artist: 'match',
    attacks: [
      {
        name: 'Double Lariat',
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.',
    health: 140,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [135]
  },
  {
    id: 137,
    number: 137,
    pokedex: 27,
    name: 'Sandhrew',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Scratch',
        damage: 10,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: 'Sandslash',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [138]
  },
  {
    id: 138,
    number: 138,
    pokedex: 28,
    name: 'Sandslash',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Slash',
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [137]
  },
  {
    id: 139,
    number: 139,
    pokedex: 50,
    name: 'Diglett',
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: 'Mud-Slap',
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: 'Dugtrio',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [140, 238]
  },
  {
    id: 140,
    number: 140,
    pokedex: 51,
    name: 'Dugtrio',
    artist: 'Akira Komayama',
    attacks: [
      {
        name: 'Dig',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT],
        description: 'Flip a coin. If heads, during your opponent’s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.',
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [139, 238]
  },
  {
    id: 141,
    number: 141,
    pokedex: 56,
    name: 'Mankey',
    artist: 'Kanako Eo',
    attacks: [
      {
        name: 'Low Kick',
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: 'Primeape',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [142, 327, 328, 389]
  },
  {
    id: 142,
    number: 142,
    pokedex: 57,
    name: 'Primeape',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Fight Back',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: 'If this Pokémon has damage on it, this attack does 60 more damage.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [141, 327, 328, 389]
  },
  {
    id: 143,
    number: 143,
    pokedex: 66,
    name: 'Machop',
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: 'Knuckle Punch',
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: 'Machoke',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [144, 145, 146, 263, 278]
  },
  {
    id: 144,
    number: 144,
    pokedex: 67,
    name: 'Machoke',
    artist: 'match',
    attacks: [
      {
        name: 'Strength',
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: 'Machamp',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 145, 146, 263, 278]
  },
  {
    id: 145,
    number: 145,
    pokedex: 68,
    name: 'Machamp',
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: 'Seismic Toss',
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144]
  },
  {
    id: 146,
    number: 146,
    pokedex: 68,
    name: 'Machamp EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Mega Punch',
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144, 263, 278]
  },
  {
    id: 147,
    number: 147,
    pokedex: 74,
    name: 'Geodude',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: 'Graveler',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [148, 149, 329, 330, 331]
  },
  {
    id: 148,
    number: 148,
    pokedex: 75,
    name: 'Graveler',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Rollout',
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Golem',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [147, 149, 329, 330, 331]
  },
  {
    id: 149,
    number: 149,
    pokedex: 76,
    name: 'Golem',
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: 'Double-Edge',
        damage: 150,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This Pokémon also does 50 damage to itself.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.',
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [147, 148, 329, 330, 331]
  },
  {
    id: 150,
    number: 150,
    pokedex: 95,
    name: 'Onix',
    artist: 'otumami',
    attacks: [
      {
        name: 'Land Crush',
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [393]
  },
  {
    id: 151,
    number: 151,
    pokedex: 104,
    name: 'Cubone',
    artist: 'sowsow',
    attacks: [
      {
        name: 'Growl',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'During your opponent’s next turn, attacks used by the Defending Pokémon do −20 damage.'
      },
    ],
    evolve: 'Marowak',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [152, 153, 239, 264]
  },
  {
    id: 152,
    number: 152,
    pokedex: 105,
    name: 'Marowak',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Bone Beatdown',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 239]
  },
  {
    id: 153,
    number: 153,
    pokedex: 105,
    name: 'Marowak EX',
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: 'Bonemerang',
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: 'Flip 2 coins. This attack does 80 damage for each heads.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 239, 264]
  },
  {
    id: 154,
    number: 154,
    pokedex: 106,
    name: 'Hitmonlee',
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: 'Stretch Kick',
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
        description: 'This attack does 30 damage to 1 of your opponent’s Benched Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 155,
    number: 155,
    pokedex: 107,
    name: 'Hitmonchan',
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: 'Jab',
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 156,
    number: 156,
    pokedex: 111,
    name: 'Rhyhorn',
    artist: 'Midori Harada',
    attacks: [
      {
        name: 'Tackle',
        damage: 60,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Rhydon',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [157]
  },
  {
    id: 157,
    number: 157,
    pokedex: 112,
    name: 'Rhydon',
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: 'Horn Drill',
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [156]
  },
  {
    id: 158,
    number: 158,
    pokedex: 140,
    name: 'Kabuto',
    artist: 'sui',
    attacks: [
      {
        name: 'Shell Attack',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: 'Kabutops',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [159, 217]
  },
  {
    id: 159,
    number: 159,
    pokedex: 141,
    name: 'Kabutops',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Leech Life',
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT,],
        description: 'Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [158, 217]
  },
  {
    id: 160,
    number: 160,
    pokedex: 619,
    name: 'Mienfoo',
    artist: 'match',
    attacks: [
      {
        name: 'Pound',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Mienshao',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'In one minute, a well-trained Mienfoo can chop with its arms more than 100 times.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [161]
  },
  {
    id: 161,
    number: 161,
    pokedex: 620,
    name: 'Mienshao',
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: 'Spiral Kick',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [160]
  },
  {
    id: 162,
    number: 162,
    pokedex: 852,
    name: 'Clobbopues',
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: 'Knuckle Punch',
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Grapploct',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It’s very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [163]
  },
  {
    id: 163,
    number: 163,
    pokedex: 853,
    name: 'Grapploct',
    artist: 'kurumitsu',
    attacks: [
      {
        name: 'Knock Back',
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.',
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [162]
  },
  {
    id: 164,
    number: 164,
    pokedex: 23,
    name: 'Ekans',
    artist: 'MAHOU',
    attacks: [
      {
        name: 'Bite',
        damage: 20,
        energy: [PokemonTypeENUM.DARK,],
      },
    ],
    evolve: 'Arbok',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [165]
  },
  {
    id: 165,
    number: 165,
    pokedex: 24,
    name: 'Arbok',
    artist: 'Naoki Saito',
    attacks: [
      {
        name: 'Corner',
        damage: 60,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [164]
  },
  {
    id: 166,
    number: 166,
    pokedex: 29,
    name: 'Nidoran♀',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Call for Family',
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: 'Put 1 random Nidoran♂ from your deck onto your Bench.'
      },
    ],
    evolve: 'Nidorina',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [167, 168, 240]
  },
  {
    id: 167,
    number: 167,
    pokedex: 30,
    name: 'Nidorina',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Bite',
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: 'Nidoqueen',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [166, 168, 240]
  },
  {
    id: 168,
    number: 168,
    pokedex: 31,
    name: 'Nidoqueen',
    artist: 'nagimiso',
    attacks: [
      {
        name: 'Lovestrike',
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: 'This attack does 50 more damage for each of your Benched Nidoking.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [166, 167, 240]
  },
  {
    id: 169,
    number: 169,
    pokedex: 32,
    name: 'Nidoran♂',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Peck',
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: 'Nidorino',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [170, 171, 241]
  },
  {
    id: 170,
    number: 170,
    pokedex: 33,
    name: 'Nidorino',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Horn Attack',
        damage: 40,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Nidoking',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [169, 171, 241]
  },
  {
    id: 171,
    number: 171,
    pokedex: 34,
    name: 'Nidoking',
    artist: 'kawayoo',
    attacks: [
      {
        name: 'Poison Horn',
        damage: 90,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: 'Your opponent’s Active Pokémon is now Poisoned.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [169, 170, 241]
  },
  {
    id: 172,
    number: 172,
    pokedex: 41,
    name: 'Zubat',
    artist: 'match',
    attacks: [
      {
        name: 'Glide',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Golbat',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [173, 242]
  },
  {
    id: 173,
    number: 173,
    pokedex: 42,
    name: 'Golbat',
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: 'Wing Attack',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [172, 242]
  },
  {
    id: 174,
    number: 174,
    pokedex: 88,
    name: 'Grimer',
    artist: 'Pani Kobayashi',
    attacks: [
      {
        name: 'Poison Gas',
        damage: 10,
        energy: [PokemonTypeENUM.DARK],
        description: 'Your opponent’s Active Pokémon is now Poisoned.'
      },
    ],
    evolve: 'Muk',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [175]
  },
  {
    id: 175,
    number: 175,
    pokedex: 89,
    name: 'Muk',
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: 'Venoshock',
        damage: 70,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: 'If your opponent’s Active Pokémon is Poisoned, this attack does 50 more damage.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It’s thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [174]
  },
  {
    id: 176,
    number: 176,
    pokedex: 109,
    name: 'Koffing',
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: 'Suffocating Gas',
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: 'Weezing',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [177, 335, 336, 243]
  },
  {
    id: 177,
    number: 177,
    pokedex: 110,
    name: 'Weezing',
    artist: 'OOYAMA',
    attacks: [
      {
        name: 'Tackle',
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    ability: {
      name: 'Gas Leak',
      description: 'Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [176, 335, 336, 243]
  },
  {
    id: 178,
    number: 178,
    pokedex: 303,
    name: 'Mawile',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Crunch',
        damage: 20,
        energy: [PokemonTypeENUM.STEEL],
        description: 'Flip a coin. If heads, discard 1 random Energy from your opponent’s Active Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 179,
    number: 179,
    pokedex: 624,
    name: 'Pawniard',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Pierce',
        damage: 30,
        energy: [PokemonTypeENUM.STEEL]
      },
    ],
    evolve: 'Bisharp',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [180]
  },
  {
    id: 180,
    number: 180,
    pokedex: 625,
    name: 'Bisharp',
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: 'Metal Claw',
        damage: 70,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL]
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [179]
  },
  {
    id: 181,
    number: 181,
    pokedex: 808,
    name: 'Meltan',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Amass',
        damage: 0,
        energy: [PokemonTypeENUM.STEEL],
        description: 'Take 1 Metal Energy from your Energy Zone and attach it to this Pokémon.'
      },
    ],
    evolve: 'Melmetal',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [182]
  },
  {
    id: 182,
    number: 182,
    pokedex: 809,
    name: 'Melmetal',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Heavy Impact',
        damage: 120,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL]
      },
    ],
    ability: {
      name: 'Hard Coat',
      description: 'This Pokémon takes −20 damage from attacks.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [181]
  },
  {
    id: 183,
    number: 183,
    pokedex: 147,
    name: 'Dratini',
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: 'Ram',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC]
      },
    ],
    evolve: 'Dragonair',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [184, 185, 244]
  },
  {
    id: 184,
    number: 184,
    pokedex: 148,
    name: 'Dragonair',
    artist: 'kirisAki',
    attacks: [
      {
        name: 'Tail Smack',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: 'Dragonite',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [183, 185, 244]
  },
  {
    id: 185,
    number: 185,
    pokedex: 149,
    name: 'Dragonite',
    artist: 'Hiroyuki Yamamoto',
    attacks: [
      {
        name: 'Draco Meteor',
        damage: 200,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: '1 of your opponent’s Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is said that somewhere in the ocean lies an island where these gather. Only they live there.',
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [183, 184, 244]
  },
  {
    id: 186,
    number: 186,
    pokedex: 16,
    name: 'Pidgey',
    artist: 'Scav',
    attacks: [
      {
        name: 'Gust',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Pidgeotto',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [187, 188, 343, 344, 345, 245, 365]
  },
  {
    id: 187,
    number: 187,
    pokedex: 17,
    name: 'Pidgeotto',
    artist: 'Scav',
    attacks: [
      {
        name: 'Gust',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Pidgeot',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [186, 188, 343, 344, 345, 245, 365]
  },
  {
    id: 188,
    number: 188,
    pokedex: 18,
    name: 'Pidgeot',
    artist: 'Scav',
    attacks: [
      {
        name: 'Wing Attack',
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Drive Off',
      description: 'Once during your turn, you may switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [186, 187, 343, 344, 245]
  },
  {
    id: 189,
    number: 189,
    pokedex: 19,
    name: 'Rattata',
    artist: 'Atsushi Furusawa',
    attacks: [
      {
        name: 'Gnaw',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Raticate',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its incisors grow continuously throughout its life. If its incisors get too long, this Pokémon becomes unable to eat, and it starves to death.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [190]
  },
  {
    id: 190,
    number: 190,
    pokedex: 20,
    name: 'Raticate',
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: 'Bite',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [189]
  },
  {
    id: 191,
    number: 191,
    pokedex: 21,
    name: 'Spearow',
    artist: 'Shiburingaru',
    attacks: [
      {
        name: 'Peck',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Fearow',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [192]
  },
  {
    id: 192,
    number: 192,
    pokedex: 22,
    name: 'Fearow',
    artist: 'Satoshi Shirai',
    attacks: [
      {
        name: 'Drill Run',
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, discard 1 random Energy from your opponent’s Active Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!',
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [191]
  },
  {
    id: 193,
    number: 193,
    pokedex: 39,
    name: 'Jigglypuff',
    artist: 'Mizue',
    attacks: [
      {
        name: 'Pound',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Wigglytuff',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [194, 195, 265, 279, 394]
  },
  {
    id: 194,
    number: 194,
    pokedex: 40,
    name: 'Wigglytuff',
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: 'Hyper Voice',
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.',
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 394]
  },
  {
    id: 195,
    number: 195,
    pokedex: 40,
    name: 'Wigglytuff EX',
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: 'Sleepy Song',
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 265, 279, 394]
  },
  {
    id: 196,
    number: 196,
    pokedex: 52,
    name: 'Meowth',
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: 'Pay Day',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Draw a card.'
      },
    ],
    evolve: 'Persian',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [197, 246, 384]
  },
  {
    id: 197,
    number: 197,
    pokedex: 53,
    name: 'Persian',
    artist: 'nagimiso',
    attacks: [
      {
        name: 'Shadow Claws',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, discard 1 random cards from your opponent’s hand.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [196, 246, 384]
  },
  {
    id: 198,
    number: 198,
    pokedex: 83,
    name: 'Farfetch\'d',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Leek Slap',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 199,
    number: 199,
    pokedex: 84,
    name: 'Doduo',
    artist: 'Yuya Oka',
    attacks: [
      {
        name: 'Peck',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Dodrio',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A two-headed Pokémon that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [200]
  },
  {
    id: 200,
    number: 200,
    pokedex: 85,
    name: 'Dodrio',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Drill Peck',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [199]
  },
  {
    id: 201,
    number: 201,
    pokedex: 108,
    name: 'Lickitung',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Continuous Lick',
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 202,
    number: 202,
    pokedex: 113,
    name: 'Chansey',
    artist: 'MAHOU',
    attacks: [
      {
        name: 'Gentle Slap',
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [383]
  },
  {
    id: 203,
    number: 203,
    pokedex: 115,
    name: 'Kangaskhan',
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: 'Dizzy Punch',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 204,
    number: 204,
    pokedex: 128,
    name: 'Tauros',
    artist: 'kodama',
    attacks: [
      {
        name: 'Horn Attack',
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [346]
  },
  {
    id: 205,
    number: 205,
    pokedex: 132,
    name: 'Ditto',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Copy Anything',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.',
    health: 70,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [247]
  },
  {
    id: 206,
    number: 206,
    pokedex: 133,
    name: 'Eevee',
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: "Flareon Vaporeon Jolteon",
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [45, 80, 102, 207, 208, 305, 347, 248, 358, 402]
  },
  {
    id: 207,
    number: 207,
    pokedex: 133,
    name: 'Eevee',
    artist: 'Hasuno',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: "Flareon Vaporeon Jolteon",
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [45, 80, 102, 206, 208, 305, 347, 248, 358, 402]
  },
  {
    id: 208,
    number: 208,
    pokedex: 133,
    name: 'Eevee',
    artist: 'Sekio',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: "Flareon Vaporeon Jolteon",
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [45, 80, 102, 206, 207, 305, 347, 248, 358, 402]
  },
  {
    id: 209,
    number: 209,
    pokedex: 137,
    name: 'Porygon',
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: 'Sharpen',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Data Scan',
      description: 'Once during your turn, you may look at the top card of your deck.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
    health: 50,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [249]
  },
  {
    id: 210,
    number: 210,
    pokedex: 142,
    name: 'Aerodactyl',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Primal Wingbeat',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [218]
  },
  {
    id: 211,
    number: 211,
    pokedex: 143,
    name: 'Snorlax',
    artist: 'Naoki Saito',
    attacks: [
      {
        name: 'Rollout',
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [250]
  },
  {
    id: 212,
    number: 212,
    pokedex: 572,
    name: 'Minccino',
    artist: 'sui',
    attacks: [
      {
        name: 'Tail Smack',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Cinccino',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [213, 403]
  },
  {
    id: 213,
    number: 213,
    pokedex: 573,
    name: 'Cinccino',
    artist: '0313',
    attacks: [
      {
        name: 'Do the Wave',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This attack does 30 damage for each of your Benched Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won’t tolerate even a speck of the stuff.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [212, 403]
  },
  {
    id: 214,
    number: 214,
    pokedex: 831,
    name: 'Wooloo',
    artist: 'Yoriyuki Ikegami',
    attacks: [
      {
        name: 'Tackle',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Dubwool',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [215]
  },
  {
    id: 215,
    number: 215,
    pokedex: 832,
    name: 'Dubwool',
    artist: 'saino misaki',
    attacks: [
      {
        name: 'Rolling Tackle',
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You’ll start to bounce the moment you set foot on it.',
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [214]
  },
  {
    id: 216,
    number: 216,
    name: 'Helix Fossil',
    artist: 'Toyste Beach',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [81, 82]
  },
  {
    id: 217,
    number: 217,
    name: 'Dome Fossil',
    artist: 'Toyste Beach',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [158, 159]
  },
  {
    id: 218,
    number: 218,
    name: 'Old Amber',
    artist: 'Toyste Beach',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [210, 332, 364, 370]
  },
  {
    id: 219,
    number: 219,
    name: 'Erika',
    artist: 'kirisAki',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Heal 50 damage from 1 of your Grass Pokémon.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 220,
    number: 220,
    pokedex: -1,
    name: 'Misty',
    artist: 'Sanosuke Sakuma',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Choose 1 of your Water Pokémon, and flip a coin until you get tails. For each heads, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    related: [219, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 221,
    number: 221,
    name: 'Blaine',
    artist: 'GOSSAN',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'During this turn, attacks used by your Ninetales, Rapidash, or Magmar do +30 damage to your opponent’s Active Pokémon.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 222,
    number: 222,
    name: 'Koga',
    artist: 'Souichirou Gunjima',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Put your Muk or Weezing in the Active Spot into your hand.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 223,
    number: 223,
    name: 'Giovanni',
    artist: 'Hideki Ishikawa',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'During this turn, attacks used by your Pokémon do +10 damage to your opponent’s Active Pokémon.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 224,
    number: 224,
    name: 'Brock',
    artist: 'Taira Akitsu',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Take 1 Fighting Energy from your Energy Zone and attach it to Golem or Onix.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 225,
    number: 225,
    name: 'Sabrina',
    artist: 'Yuu Nishida',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 226,
    number: 226,
    name: 'Lt. Surge',
    artist: 'nagimiso',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Move all Lightning Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 227,
    number: 227,
    pokedex: 1,
    name: 'Bulbasaur',
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Ivysaur',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [1, 2, 3, 4, 251, 395, 390],
  },
  {
    id: 228,
    number: 228,
    pokedex: 44,
    name: 'Gloom',
    artist: 'OKACHEKE',
    attacks: [
      {
        name: 'Drool',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Vileplume',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [11, 12, 13]
  },
  {
    id: 229,
    number: 229,
    pokedex: 127,
    name: 'Pinsir',
    artist: 'Scav',
    attacks: [
      {
        name: 'Double Horn',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
    health: 90,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [26]
  },
  {
    id: 230,
    number: 230,
    pokedex: 4,
    name: 'Charmander',
    artist: 'GIDORA',
    attacks: [
      {
        name: 'Ember',
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Discard 1 Fire Energy from this Pokémon.'
      }
    ],
    evolve: 'Charmeleon',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 35, 36, 253, 280, 284, 404]
  },
  {
    id: 231,
    number: 231,
    pokedex: 78,
    name: 'Rapidash',
    artist: 'Taira Akitsu',
    attacks: [
      {
        name: 'Fire Mane',
        damage: 40,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: 'Rapidash',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
    health: 100,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [42, 43, 296, 297]
  },
  {
    id: 232,
    number: 232,
    pokedex: 7,
    name: 'Squirtle',
    artist: 'Taira Akitsu',
    attacks: [
      {
        name: 'Water Gun',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Wartortle',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 55, 56, 256, 405, 401]
  },
  {
    id: 233,
    number: 233,
    pokedex: 130,
    name: 'Gyarados',
    artist: 'Nurikabe',
    attacks: [
      {
        name: 'Hyper Beam',
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: 'Discard 1 random Energy from your opponent’s Active Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
    health: 150,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [77, 78, 303]
  },
  {
    id: 234,
    number: 234,
    pokedex: 131,
    name: 'Lapras',
    artist: 'Haru Akasaka',
    attacks: [
      {
        name: 'Hydro Pump',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
        description: 'If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
    health: 100,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [79]
  },
  {
    id: 235,
    number: 235,
    pokedex: 101,
    name: 'Electrode',
    artist: 'DOM',
    attacks: [
      {
        name: 'Electro Ball',
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [99, 100]
  },
  {
    id: 236,
    number: 236,
    pokedex: 65,
    name: 'Alakazam',
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: 'Psychic',
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [115, 116, 117]
  },
  {
    id: 237,
    number: 237,
    pokedex: 79,
    name: 'Slowpoke',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Tail Whap',
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: 'Slowbro',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.',
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [118, 119]
  },
  {
    id: 238,
    number: 238,
    pokedex: 50,
    name: 'Diglett',
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: 'Mud-Slap',
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: 'Dugtrio',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.',
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [139, 140]
  },
  {
    id: 239,
    number: 239,
    pokedex: 104,
    name: 'Cubone',
    artist: 'Teeziro',
    attacks: [
      {
        name: 'Growl',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'During your opponent’s next turn, attacks used by the Defending Pokémon do −20 damage.'
      },
    ],
    evolve: 'Marowak',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 152, 153, 264]
  },
  {
    id: 240,
    number: 240,
    pokedex: 31,
    name: 'Nidoqueen',
    artist: 'aoki',
    attacks: [
      {
        name: 'Lovestrike',
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: 'This attack does 50 more damage for each of your Benched Nidoking.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.',
    health: 140,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [166, 167, 168]
  },
  {
    id: 241,
    number: 241,
    pokedex: 34,
    name: 'Nidoking',
    artist: 'nagimiso',
    attacks: [
      {
        name: 'Poison Horn',
        damage: 90,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: 'Your opponent’s Active Pokémon is now Poisoned.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.',
    health: 150,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [169, 170, 171]
  },
  {
    id: 242,
    number: 242,
    pokedex: 42,
    name: 'Golbat',
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: 'Wing Attack',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [172, 173]
  },
  {
    id: 243,
    number: 243,
    pokedex: 110,
    name: 'Weezing',
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: 'Tackle',
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    ability: {
      name: 'Gas Leak',
      description: 'Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
    health: 110,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [176, 177, 335, 336]
  },
  {
    id: 244,
    number: 244,
    pokedex: 149,
    name: 'Dragonite',
    artist: 'Gemi',
    attacks: [
      {
        name: 'Draco Meteor',
        damage: 200,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: '1 of your opponent’s Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is said that somewhere in the ocean lies an island where these gather. Only they live there.',
    health: 160,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [183, 184, 185]
  },
  {
    id: 245,
    number: 245,
    pokedex: 18,
    name: 'Pidgeot',
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: 'Wing Attack',
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Drive Off',
      description: 'Once during your turn, you may switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [186, 187, 188, 343, 344]
  },
  {
    id: 246,
    number: 246,
    pokedex: 52,
    name: 'Meowth',
    artist: 'Mina Nakai',
    attacks: [
      {
        name: 'Pay Day',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Draw a card.'
      },
    ],
    evolve: 'Persian',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [196, 197, 384]
  },
  {
    id: 247,
    number: 247,
    pokedex: 132,
    name: 'Ditto',
    artist: 'Jerky',
    attacks: [
      {
        name: 'Copy Anything',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.',
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [205]
  },
  {
    id: 248,
    number: 248,
    pokedex: 133,
    name: 'Eevee',
    artist: 'sowsow',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: "Flareon Vaporeon Jolteon",
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [45, 80, 102, 206, 207, 208, 305, 347, 358, 402]
  },
  {
    id: 249,
    number: 249,
    pokedex: 137,
    name: 'Porygon',
    artist: 'Akira Komayama',
    attacks: [
      {
        name: 'Sharpen',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Data Scan',
      description: 'Once during your turn, you may look at the top card of your deck.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [209]
  },
  {
    id: 250,
    number: 250,
    pokedex: 143,
    name: 'Snorlax',
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: 'Rollout',
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
    health: 150,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [211]
  },
  {
    id: 251,
    number: 251,
    pokedex: 3,
    name: 'Venusaur EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Razor Leaf',
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Giant Bloom',
        damage: 100,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Heal 30 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 190,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 2, 4, 227, 395]
  },
  {
    id: 252,
    number: 252,
    pokedex: 103,
    name: 'Exeggutor EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Tropical Swing',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS],
        description: 'Flip a coin. If heads, this attack does 40 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 160,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [21, 23, 287]
  },
  {
    id: 253,
    number: 253,
    pokedex: 6,
    name: 'Charizard EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Slash',
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Crimson Storm',
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 36, 230, 280, 284, 404]
  },  
  {
    id: 254,
    number: 254,
    pokedex: 59,
    name: 'Arcanine EX',
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: 'Inferno Onrush',
        damage: 120,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: 'This Pokémon also does 20 damage to itself.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [39, 41]
  },
  {
    id: 255,
    number: 255,
    pokedex: 145,
    name: 'Moltres EX',
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: 'Inferno Dance',
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.'
      },
      {
        name: 'Heat Blast',
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [47, 274, 397]
  },
  {
    id: 256,
    number: 256,
    pokedex: 9,
    name: 'Blastoise EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Surf',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      },
      {
        name: 'Hydro Bazooka',
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 56, 232, 405]
  },
  {
    id: 257,
    number: 257,
    pokedex: 121,
    name: 'Starmie EX',
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: 'Hydro Splash',
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [74, 76]
  },
  {
    id: 258,
    number: 258,
    pokedex: 144,
    name: 'Articuno EX',
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: 'Ice Wing',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: 'Blizzard',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [84, 275]
  },
  {
    id: 259,
    number: 259,
    pokedex: 25,
    name: 'Pikachu EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Circle Circuit',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'This attack does 30 damage for each of your Benched Lightning Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 120,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [96, 281, 285]
  },
  {
    id: 260,
    number: 260,
    pokedex: 145,
    name: 'Zapdos EX',
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: 'Peck',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: 'Thundering Hurricane',
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'Flip 4 coins. This attack does 50 damage for each heads.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [104, 276]
  },
  {
    id: 261,
    number: 261,
    pokedex: 94,
    name: 'Gengar EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Spooky Shot',
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: 'Shadowy Spellbind',
      description: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 123, 277, 392]
  },
  {
    id: 262,
    number: 262,
    pokedex: 150,
    name: 'Mewtwo EX',
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: 'Psychic Sphere',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Psydrive',
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Psychic Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [129, 282, 286]
  },
  {
    id: 263,
    number: 263,
    pokedex: 68,
    name: 'Machamp EX',
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: 'Mega Punch',
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144, 146, 278]
  },
  {
    id: 264,
    number: 264,
    pokedex: 105,
    name: 'Marowak EX',
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: 'Bonemerang',
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: 'Flip 2 coins. This attack does 80 damage for each heads.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 153, 239]
  },
  {
    id: 265,
    number: 265,
    pokedex: 40,
    name: 'Wigglytuff EX',
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: 'Sleepy Song',
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 195, 279, 394]
  },
  {
    id: 266,
    number: 266,
    name: 'Erika',
    artist: 'saino misaki',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Heal 50 damage from 1 of your Grass Pokémon.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 267,
    number: 267,
    name: 'Misty',
    artist: 'Sanosuke Sakuma',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Choose 1 of your Water Pokémon, and flip a coin until you get tails. For each heads, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 268,
    number: 268,
    name: 'Blaine',
    artist: 'GOSSAN',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'During this turn, attacks used by your Ninetales, Rapidash, or Magmar do +30 damage to your opponent’s Active Pokémon.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 269,
    number: 269,
    name: 'Koga',
    artist: 'Souichirou Gunjima',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Put your Muk or Weezing in the Active Spot into your hand.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 270,
    number: 270,

    name: 'Giovanni',
    artist: 'Hideki Ishikawa',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'During this turn, attacks used by your Pokémon do +10 damage to your opponent’s Active Pokémon.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 271,
    number: 271,
    name: 'Brock',
    artist: 'Ryuta Fuse',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Take 1 Fighting Energy from your Energy Zone and attach it to Golem or Onix.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 272,
    number: 272,
    name: 'Sabrina',
    artist: 'GIDORA',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 273, 367, 366, 368, 379]
  },
  {
    id: 273,
    number: 273,
    name: 'Lt. Surge',
    artist: 'nagimiso',
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Move all Lightning Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 367, 366, 368, 379]
  },
  {
    id: 274,
    number: 274,
    pokedex: 145,
    name: 'Moltres EX',
    artist: 'hncl',
    attacks: [
      {
        name: 'Inferno Dance',
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.'
      },
      {
        name: 'Heat Blast',
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [47, 255, 397]
  },
  {
    id: 275,
    number: 275,
    pokedex: 144,
    name: 'Articuno EX',
    artist: 'kodama',
    attacks: [
      {
        name: 'Ice Wing',
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: 'Blizzard',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MEWTWO
    ],
    related: [84, 258]
  },
  {
    id: 276,
    number: 276,
    pokedex: 145,
    name: 'Zapdos EX',
    artist: 'GOSSAN',
    attacks: [
      {
        name: 'Peck',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: 'Thundering Hurricane',
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'Flip 4 coins. This attack does 50 damage for each heads.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [104, 260]
  },
  {
    id: 277,
    number: 277,
    pokedex: 94,
    name: 'Gengar EX',
    artist: 'NC Empire',
    attacks: [
      {
        name: 'Spooky Shot',
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: 'Shadowy Spellbind',
      description: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.'
    },
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 123, 261, 392]
  },
  {
    id: 278,
    number: 278,
    pokedex: 68,
    name: 'Machamp EX',
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: 'Mega Punch',
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144, 146, 263]
  },
  {
    id: 279,
    number: 279,
    pokedex: 40,
    name: 'Wigglytuff EX',
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: 'Sleepy Song',
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 195, 265, 394]
  },
  {
    id: 280,
    number: 280,
    pokedex: 6,
    name: 'Charizard EX',
    artist: 'kantaro',
    attacks: [
      {
        name: 'Slash',
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Crimson Storm',
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 36, 230, 253, 284, 404]
  },
  {
    id: 281,
    number: 281,
    pokedex: 25,
    name: 'Pikachu EX',
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: 'Circle Circuit',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'This attack does 30 damage for each of your Benched Lightning Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 120,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [96, 259, 285]
  },
  {
    id: 282,
    number: 282,
    pokedex: 150,
    name: 'Mewtwo EX',
    artist: 'Nurikabe',
    attacks: [
      {
        name: 'Psychic Sphere',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Psydrive',
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Psychic Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [129, 262, 286]
  },
  {
    id: 283,
    number: 283,
    pokedex: 151,
    name: 'Mew',
    artist: 'Amelicart',
    attacks: [
      {
        name: 'Psy Report',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: 'Your opponent reveals their hand.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
    health: 60,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.SPECIAL_MISSION
    ],
    extra: 'Special Mission',
    related: [317]
  },
  {
    id: 284,
    number: 284,
    pokedex: 6,
    name: 'Charizard EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Slash',
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Crimson Storm',
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Fire Energy from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.CROWN,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [33, 34, 36, 230, 253, 280, 404]
  },
  {
    id: 285,
    number: 285,
    pokedex: 25,
    name: 'Pikachu EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Circle Circuit',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: 'This attack does 30 damage for each of your Benched Lightning Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 120,
    rarity: CardRarityENUM.CROWN,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [96, 259, 281]
  },
  {
    id: 286,
    number: 286,
    pokedex: 150,
    name: 'Mewtwo EX',
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: 'Psychic Sphere',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: 'Psydrive',
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Psychic Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.CROWN,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [129, 262, 282]
  },
  {
    id: 287,
    number: 1,
    pokedex: 102,
    name: 'Exeggcute',
    artist: 'Yuka Morii',
    attacks: [
      {
        name: 'Growth Spurt',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Take a Grass Energy from your Energy Zone and attach it to this Pokémon.'
      }
    ],
    evolve: 'Exeggutor',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [21, 22, 23, 288, 252, 355]
  },
  {
    id: 288,
    number: 2,
    pokedex: 103,
    name: 'Exeggutor',
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: 'Psychic',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This attack does 20 damage for each Energy attached to your opponent\'s Active Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [21, 22, 287, 355]
  },
  {
    id: 289,
    number: 3,
    pokedex: 251,
    name: 'Celebi EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Powerful Bloom',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [361, 371]
  },
  {
    id: 290,
    number: 4,
    pokedex: 495,
    name: 'Snivy',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Servine',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Being exposed to sunlight makes its movements swiftier. It uses vines more adeptly than its hands.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [291, 292, 356, 399]
  },
  {
    id: 291,
    number: 5,
    pokedex: 496,
    name: 'Servine',
    artist: 'Shigenori Nagishi',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: 'Serperior',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [290, 292, 356, 399]
  },  
  {
    id: 292,
    number: 6,
    pokedex: 497,
    name: 'Serperior',
    artist: 'Yoshioka',
    attacks: [
      {
        name: 'Solar Beam',
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Jungle Totem',
      description: "Each Grass Energy attached to your Grass Pokémon provides 2 Grass Energy. This effect doesn't stack."
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [290, 291, 356, 399]
  },
  {
    id: 293,
    number: 7,
    pokedex: 755,
    name: 'Morelull',
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: 'Ram',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: '	Pokémon living in the forest eat the delicious caps on Morelull\'s head. The caps regrow overnight.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [294]
  },
  {
    id: 294,
    number: 8,
    pokedex: 756,
    name: 'Shiinotic',
    artist: 'Mizue',
    attacks: [
      {
        name: 'Flickering Spores',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: "Your opponent's Active Pokémon is now Asleep."
      }
    ],
    evolve: 'Morelull',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.",
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [293]
  },
  {
    id: 295,
    number: 9,
    pokedex: 781,
    name: 'Dhelmise',
    artist: 'Hasuno',
    attacks: [
      {
        name: 'Energy Whip',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
        description: "If this Pokémon has at least 3 extra Grass Energy attached, this attack does 70 more damage."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.",
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 296,
    number: 10,
    pokedex: 77,
    name: 'Ponyta',
    artist: 'Tomokazu Kamiya',
    attacks: [
      {
        name: 'Stomp',
        damage: 10,
        energy: [PokemonTypeENUM.FIRE],
        description: "Flip a coin if heads, this attack does 30 more damage."
      }
    ],
    evolve: 'Rapidash',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.",
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [42, 43, 297, 231]
  },
  {
    id: 297,
    number: 11,
    pokedex: 78,
    name: 'Rapidash',
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: 'Rising Lunge',
        damage: 40,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: "Flip a coin. If heads, this attack does 60 more damage."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [42, 43, 296, 231]
  },
  {
    id: 298,
    number: 12,
    pokedex: 126,
    name: 'Magmar',
    artist: 'sui',
    attacks: [
      {
        name: 'Fire Blast',
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: "Discard 2 Fire Energy from this Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [44]
  },
  {
    id: 299,
    number: 13,
    pokedex: 636,
    name: 'Larvesta',
    artist: 'kawayoo',
    attacks: [
      {
        name: 'Combustion',
        damage: 30,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Volcarona',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "This Pokémon was called the Larve That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.",
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [300, 400] 
  },
  {
    id: 300,
    number: 14,
    pokedex: 637,
    name: 'Volcarona',
    artist: 'DOM',
    attacks: [
      {
        name: 'Volcanic Ash',
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: "Discard 2 Fire Energy from this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon."
      }
    ],
    evolve: 'Larvesta',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.",
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [299, 400]
  },
  {
    id: 301,
    number: 15,
    pokedex: 757,
    name: 'Salandit',
    artist: 'Naoki Saito',
    attacks: [
      {
        name: 'Venoshock',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage."
      }
    ],
    evolve: 'Salazzle',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [49, 50, 302, 357]
  },
  {
    id: 302,
    number: 16,
    pokedex: 758,
    name: 'Salazzle',
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: 'Poison Claws',
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Your opponent\'s Active Pokémon is now Poisoned.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [49, 50, 301, 357]
  },
  {
    id: 303,
    number: 17,
    pokedex: 129,
    name: 'Magikarp',
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: 'Leap Out',
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: 'Switch this Pokémon with 1 of your Benched Pokémon.'
      }
    ],
    evolve: 'Gyarados',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'An underpowered, pathetic Pokémon. It may jump high on rare occasions, but usually not more than seven feet.',
    health: 30,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [77, 78, 304, 233, 362]
  },
  {
    id: 304,
    number: 18,
    pokedex: 130,
    name: 'Gyarados EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Rampaging Whirlpool',
        damage: 140,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent\'s).'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [77, 303, 362]
  },
  {
    id: 305,
    number: 19,
    pokedex: 134,
    name: 'Vaporeon',
    artist: 'LINNE',
    attacks: [
      {
        name: 'Wave Splash',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Wash Out',
      description: 'As often as you like during your turn, you may move a Water Energy from 1 of your Benched Water Pokémon to your Active Water Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [80, 206, 207, 208, 347, 248, 358, 402]
  },
  {
    id: 306,
    number: 20,
    pokedex: 456,
    name: 'Finneon',
    artist: 'Sekio',
    attacks: [
      {
        name: 'Water Gun',
        damage: 20,
        energy: [PokemonTypeENUM.WATER]
      }
    ],
    evolve: 'Lumineon',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'The line running down its side can store sunlight. It shines vividly at night.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [307]
  },
  {
    id: 307,
    number: 21,
    pokedex: 457,
    name: 'Lumineon',
    artist: 'Sekio',
    attacks: [
      {
        name: 'Aqua Liner',
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: "This attack does 50 damage to 1 of your opponent's Benched Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [306]
  },
  {
    id: 308,
    number: 22,
    pokedex: 833,
    name: 'Chewtle',
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: 'Bite',
        damage: 30,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Drednaw',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle’s horn, and the two Pokémon will tussle.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [309]
  },
  {
    id: 309,
    number: 23,
    pokedex: 834,
    name: 'Drednaw',
    artist: 'nisimono',
    attacks: [
      {
        name: 'Crunch',
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Its massive, jagged teeth can crush a boulder in a single bite. This Pokémon has an extremely vicious disposition.',
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [308]
  },
  {
    id: 310,
    number: 24,
    pokedex: 845,
    name: 'Cramorant',
    artist: 'Jerky',
    attacks: [
      {
        name: 'Dive',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It’s so strong that it can knock out some opponents in a single hit, but it also may forget what it’s battling midfight.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 311,
    number: 25,
    pokedex: 25,
    name: 'Pikachu',
    artist: 'Naoya Kimura',
    attacks: [
      {
        name: 'Circle Circuit',
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: "This attack does 10 damage for each of your Benched Lightning Pokémon."
      }
    ],
    evolve: 'Raichu',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [94, 95, 312, 398, 387, 381]
  },
  {
    id: 312,
    number: 26,
    pokedex: 26,
    name: 'Raichu',
    artist: 'hncl',
    attacks: [
      {
        name: 'Gigashock',
        damage: 60,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: "This attack does 20 damage to each of your opponent's Benched Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [94, 95, 311, 398, 387, 381]
  },
  {
    id: 313,
    number: 27,
    pokedex: 125,
    name: 'Electabuzz',
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: 'Thunder Spear',
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: "This attack does 40 damage to 1 of your opponent's Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [101]
  },
  {
    id: 314,
    number: 28,
    pokedex: 595,
    name: 'Joltik',
    artist: 'MINAMINAMI Take',
    attacks: [
      {
        name: 'Bug Bite',
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC]
      }
    ],
    evolve: 'Galvantula',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Joltik can be found clinging to other Pokémon. It’s soaking up static electricity because it can’t produce a charge on its own.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [315]
  },
  {
    id: 315,
    number: 29,
    pokedex: 596,
    name: 'Galvantula',
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: 'Electroweb',
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: "During your opponent's next turn, the Defending Pokémon can't retreat."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [314]
  },
  {
    id: 316,
    number: 30,
    pokedex: 702,
    name: 'Dedenne',
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: 'Thunder Shock',
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [359]
  },
  {
    id: 317,
    number: 31,
    pokedex: 151,
    name: 'Mew',
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: 'Psy Report',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: "Your opponent reveals their hand."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
    health: 60,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 318,
    number: 32,
    pokedex: 151,
    name: 'Mew EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Psyshot',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: 'Genome Hacking',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [363, 369, 372]
  },
  {
    id: 319,
    number: 33,
    pokedex: 561,
    name: 'Sigilyph',
    artist: 'Shigenori Nagishi',
    attacks: [
      {
        name: 'Spike Draw',
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: 'Draw a card.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians emissaries.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 320,
    number: 34,
    pokedex: 605,
    name: 'Elgyem',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Headbutt',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      }
    ],
    evolve: 'Beheeyem',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [321]
  },
  {
    id: 321,
    number: 35,
    pokedex: 606,
    name: 'Beheeyem',
    artist: 'sowsow',
    attacks: [
      {
        name: 'Mind Jack',
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: "This attack does 20 more damage for each of your opponent's Benched Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [320]
  },
  {
    id: 322,
    number: 36,
    pokedex: 669,
    name: 'Flabébé',
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: 'Hypnotic Gaze',
        damage: 0,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: "Your opponent's Active Pokémon is now Asleep."
      }
    ],
    evolve: 'Floette',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This Pokémon can draw forth the power hidden within blooming wild flowers. It is particularly fond of red flowers.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [323, 324]
  },
  {
    id: 323,
    number: 37,
    pokedex: 670,
    name: 'Floette',
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: 'Leaf Drain',
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: "Heal 10 damage from this Pokémon."
      }
    ],
    evolve: 'Florges',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This Pokémon draws forth what power is left in withered flowers to make them healthy again. It holds a red flower.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [322, 324]
  },
  {
    id: 324,
    number: 38,
    pokedex: 671,
    name: 'Florges',
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: 'Bloomshine',
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: "Heal 20 damage from each of your Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This Pokémon creates an impressive flower garden in its territory. It draws forth the power of the red flowers around its neck.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [322, 323]
  },
  {
    id: 325,
    number: 39,
    pokedex: 684,
    name: 'Swirlix',
    artist: '5ban Graphics',
    attacks: [
      {
        name: 'Fairy Wind',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: 'Slurpuff',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It eats its own weight in sugar every day. If it doesn’t get enough sugar, it becomes incredibly grumpy.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [326]
  },
  {
    id: 326,
    number: 40,
    pokedex: 685,
    name: 'Slurpuff',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Magical Shot',
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'By taking in a person’s scent, it can sniff out their mental and physical condition. It’s hoped that this skill will have many medical applications.',
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [325]
  },
  {
    id: 327,
    number: 41,
    pokedex: 56,
    name: 'Mankey',
    artist: 'Akira Komayama',
    attacks: [
      {
        name: 'Focus Fist',
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT],
        description: "Flip a coin. If tails, this attack does nothing."
      }
    ],
    evolve: 'Primeape',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [141, 142, 328, 389]
  },
  {
    id: 328,
    number: 42,
    pokedex: 57,
    name: 'Primeape',
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: 'Punch',
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [141, 142, 327, 389]
  },
  {
    id: 329,
    number: 43,
    pokedex: 74,
    name: 'Geodude',
    artist: 'GOSSAN',
    attacks: [
      {
        name: 'Light Punch',
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Graveler',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 330, 331]
  },
  {
    id: 330,
    number: 44,
    pokedex: 75,
    name: 'Graveler',
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: 'Lunge Out',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Golem',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 329, 331]
  },
  {
    id: 331,
    number: 45,
    pokedex: 76,
    name: 'Golem',
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: 'Guard Press',
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: "During your opponent's next turn, this Pokémon takes -30 damage from attacks."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.',
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 329, 330]
  },
  {
    id: 332,
    number: 46,
    pokedex: 142,
    name: 'Aerodactyl EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Land Crush',
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Primeval Law',
      description: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon."
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [364, 370, 349]
  },
  {
    id: 333,
    number: 47,
    pokedex: 802,
    name: 'Marshadow',
    artist: 'kantaro',
    attacks: [
      {
        name: 'Revenge',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.',
    health: 80,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [360]
  },
  {
    id: 334,
    number: 48,
    pokedex: 874,
    name: 'Stonjourner',
    artist: 'Teeziro',
    attacks: [
      {
        name: 'Mega Kick',
        damage: 90,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon’s habitat.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 335,
    number: 49,
    pokedex: 109,
    name: 'Koffing',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Division',
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: 'Put 1 random Koffing from your deck onto your Bench.'
      }
    ],
    evolve: 'Weezing',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [176, 177, 336, 243]
  },
  {
    id: 336,
    number: 50,
    pokedex: 110,
    name: 'Weezing',
    artist: 'Mousho',
    attacks: [
      {
        name: 'Smokescreen',
        damage: 50,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [176, 177, 335, 243]
  },
  {
    id: 337,
    number: 51,
    pokedex: 509,
    name: 'Purrloin',
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: 'Scratch',
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: 'Liepard',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [338]
  },
  {
    id: 338,
    number: 52,
    pokedex: 510,
    name: 'Liepard',
    artist: 'GIDORA',
    attacks: [
      {
        name: 'Slash',
        damage: 40,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Don’t be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [337]
  },
  {
    id: 339,
    number: 53,
    pokedex: 543,
    name: 'Venipede',
    artist: '	Yukiko Baba',
    attacks: [
      {
        name: 'Ram',
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: 'Whirlipede',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [340, 341]
  },
  {
    id: 340,
    number: 54,
    pokedex: 544,
    name: 'Whirlipede',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Poison Sting',
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
        description: "Your opponent's Active Pokémon is now Poisoned."
      }
    ],
    evolve: 'Scolipede',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [339, 341]
  },
  {
    id: 341,
    number: 55,
    pokedex: 545,
    name: 'Scolipede',
    artist: '5ban Graphics',
    attacks: [
      {
        name: 'Venoshock',
        damage: 70,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: '	Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws’ toxic spikes.',
    health: 140,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [339, 340]
  },
  {
    id: 342,
    number: 56,
    pokedex: 621,
    name: 'Druddigon',
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: 'Dragon Claw',
        damage: 90,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Rough Skin',
      description: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Druddigon lives in caves, but it never skips sunbathing—it won’t be able to move if its body gets too cold.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 343,
    number: 57,
    pokedex: 16,
    name: 'Pidgey',
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: 'Flap',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Pidgeotto',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 188, 344, 345, 245, 365]
  },
  {
    id: 344,
    number: 58,
    pokedex: 17,
    name: 'Pidgeotto',
    artist: 'Taiga Kayama',
    attacks: [
      {
        name: 'Wing Attack',
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Pidgeot',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 188, 343, 345, 245, 365]
  },
  {
    id: 345,
    number: 59,
    pokedex: 18,
    name: 'Pidgeot EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Scattering Cyclone',
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "This attack does 20 more damage for each of your opponent's Benched Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: '',
    health: 170,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 343, 344, 365]
  },
  {
    id: 346,
    number: 60,
    pokedex: 128,
    name: 'Tauros',
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: 'Fighting Tackle',
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 80 more damage."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [204]
  },
  {
    id: 347,
    number: 61,
    pokedex: 133,
    name: 'Eevee',
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: 'Continuous Steps',
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
        description: "Flip a coin until you get tails. This attack does 20 more damage for each heads."
      }
    ],
    evolve: "Flareon Vaporeon Jolteon",
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [45, 80, 102, 206, 207, 208, 305, 248, 358, 402]
  },
  {
    id: 348,
    number: 62,
    pokedex: 441,
    name: 'Chatot',
    artist: 'Masako Tomii',
    attacks: [
      {
        name: 'Mimic',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Shuffle your hand into your deck. Draw a card for each card in your opponent\'s hand.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It mimics the cries of other Pokémon to trick them into thinking it’s one of them. This way they won’t attack it.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 349,
    number: 63,
    name: 'Old Amber',
    artist: 'Toyste Beach',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    element: -1,
    pokedex: -1,
    related: [210, 332, 364, 370]
  },
  {
    id: 350,
    number: 64,
    name: 'Pokémon Flute',
    artist: 'Toyste Beach',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Put a Basic Pokémon from your opponent’s discard pile onto their Bench.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ITEM,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    element: -1,
    pokedex: -1,
    related: [351, 373, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 351,
    number: 65,
    name: 'Mythical Slab',
    artist: 'AYUMI ODASHIMA',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Look at the top card of your deck. If that card is a Psychic Pokémon, put it into your hand. If it is not a Psychic Pokémon, put it on the bottom of your deck.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ITEM,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    element: -1,
    pokedex: -1,
    related: [350, 373, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 352,
    number: 66,
    name: 'Budding Expeditioner',
    artist: 'Yuu Nishida',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Put your Mew EX in the Active Spot into your hand.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 353,
    number: 67,
    name: 'Blue',
    artist: 'Ryuta Fuse',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'During your opponent’s next turn, all of your Pokémon take −10 damage from attacks from your opponent’s Pokémon.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 354,
    number: 68,
    name: 'Leaf',
    artist: 'En Morikura',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: '	During this turn, the Retreat Cost of your Active Pokémon is 2 less.',
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 355,
    number: 69,
    pokedex: 103,
    name: 'Exeggutor',
    artist: 'Gapao',
    attacks: [
      {
        name: 'Psychic',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This attack does 20 damage for each Energy attached to your opponent\'s Active Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [21, 22, 287, 288]
  },
  {
    id: 356,
    number: 70,
    pokedex: 497,
    name: 'Serperior',
    artist: 'rika',
    attacks: [
      {
        name: 'Solar Beam',
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Jungle Totem',
      description: "Each Grass Energy attached to your Grass Pokémon provides 2 Grass Energy. This effect doesn't stack."
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
    health: 110,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [290, 291, 292, 399]
  },
  {
    id: 357,
    number: 71,
    pokedex: 757,
    name: 'Salandit',
    artist: 'Nurikabe',
    attacks: [
      {
        name: 'Venoshock',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage."
      }
    ],
    evolve: 'Salazzle',
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [49, 50, 301, 302]
  },
  {
    id: 358,
    number: 72,
    pokedex: 134,
    name: 'Vaporeon',
    artist: 'aspara',
    attacks: [
      {
        name: 'Wave Splash',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Wash Out',
      description: 'As often as you like during your turn, you may move a Water Energy from 1 of your Benched Water Pokémon to your Active Water Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
    health: 120,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [80, 206, 207, 208, 305, 347, 248, 402]
  },
  {
    id: 359,
    number: 73,
    pokedex: 702,
    name: 'Dedenne',
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: 'Thunder Shock',
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.',
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [316]
  },
  {
    id: 360,
    number: 74,
    pokedex: 802,
    name: 'Marshadow',
    artist: 'OKACHEKE',
    attacks: [
      {
        name: 'Revenge',
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.',
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [333]
  },
  {
    id: 361,
    number: 75,
    pokedex: 251,
    name: 'Celebi EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Powerful Bloom',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [289, 371]
  },
  {
    id: 362,
    number: 76,
    pokedex: 130,
    name: 'Gyarados EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Rampaging Whirlpool',
        damage: 140,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent\'s).'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [77, 303, 304]
  },
  {
    id: 363,
    number: 77,
    pokedex: 151,
    name: 'Mew EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Psyshot',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: 'Genome Hacking',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [318, 369, 372]
  },
  {
    id: 364,
    number: 78,
    pokedex: 142,
    name: 'Aerodactyl EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Land Crush',
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Primeval Law',
      description: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon."
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [332, 370, 349]
  },
  {
    id: 365,
    number: 79,
    pokedex: 18,
    name: 'Pidgeot EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Scattering Cyclone',
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "This attack does 20 more damage for each of your opponent's Benched Pokémon."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: '',
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 343, 344, 345]
  },
  {
    id: 366,
    number: 80,
    name: 'Budding Expeditioner',
    artist: 'Yuu Nishida',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Put your Mew ex in the Active Spot into your hand.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 368, 379]
  },
  {
    id: 367,
    number: 81,
    name: 'Blue',
    artist: 'Ryuta Fuse',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'During your opponent’s next turn, all of your Pokémon take −10 damage from attacks from your opponent’s Pokémon.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 366, 368, 379]
  },
  {
    id: 368,
    number: 82,
    name: 'Leaf',
    artist: 'En Morikura',
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: '	During this turn, the Retreat Cost of your Active Pokémon is 2 less.',
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 379]
  },
  {
    id: 369,
    number: 83,
    pokedex: 151,
    name: 'Mew EX',
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: 'Psyshot',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: 'Genome Hacking',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [318, 363, 372]
  },
  {
    id: 370,
    number: 84,
    pokedex: 142,
    name: 'Aerodactyl EX',
    artist: 'danciao',
    attacks: [
      {
        name: 'Land Crush',
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Primeval Law',
      description: "Your opponent can't play any Pokémon from their hand to evolve their Active Pokémon."
    },
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [332, 364, 349]
  },
  {
    id: 371,
    number: 85,
    pokedex: 251,
    name: 'Celebi EX',
    artist: 'kantaro',
    attacks: [
      {
        name: 'Powerful Bloom',
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 130,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [289, 361]
  },
  {
    id: 372,
    number: 86,
    pokedex: 151,
    name: 'Mew EX',
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: 'Psyshot',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: 'Genome Hacking',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
    health: 130,
    rarity: CardRarityENUM.CROWN,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [318, 363, 369]
  },
  {
    id: 373,
    number: 1,
    name: 'Potion',
    artist: '5ban Graphics',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Heal 20 damage from 1 of your Pokémon.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 374,
    number: 2,
    name: 'X Speed',
    artist: 'Toyste Beach',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'During this turn, the Retreat Cost of your Active Pokémon is 1 less.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 373, 377, 375, 376, 380, 378]
  },
  {
    id: 375,
    number: 3,
    name: 'Hand Scope',
    artist: 'Toyste Beach',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Your opponent reveals their hand.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 373, 374, 377, 376, 380, 378]
  },
  {
    id: 376,
    number: 4,
    name: 'Pokédex',
    artist: 'Ryo Ueda',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Look at the top 3 cards of your deck.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 373, 374, 377, 375, 380, 378]
  },
  {
    id: 377,
    number: 5,
    name: 'Poké Ball',
    artist: 'Ryo Ueda',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Put 1 random Basic Pokémon from your deck into your hand.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 373, 374, 375, 376, 380, 378]
  },
  {
    id: 378,
    number: 6,
    name: 'Red Card',
    artist: '5ban Graphics',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Your opponent shuffles their hand into their deck and draws 3 cards.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 373, 374, 377, 375, 376, 380]
  },
  {
    id: 379,
    number: 7,
    name: 'Professor\'s Research',
    artist: 'Naoki Saito',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Draw 2 cards.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Obtained from the shop',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368]
  },
  {
    id: 380,
    number: 8,
    name: 'Pokédex',
    artist: 'Yuu Nishida',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Look at the top 3 cards of your deck.',
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: 'Special Event',
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    related: [351, 350, 373, 374, 377, 375, 376, 378]
  },
  {
    id: 381,
    number: 9,
    pokedex: 25,
    name: 'Pikachu',
    artist: 'Atsushi Furusawa',
    attacks: [
      {
        name: 'Gnaw',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Raichu',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PREMIUM
    ],
    extra: 'Premium Pass',
    related: [94, 95, 311, 312, 398, 387]
  },
  {
    id: 382,
    number: 10,
    pokedex: 150,
    name: 'Mewtwo',
    artist: 'Krgc',
    attacks: [
      {
        name: 'Power Blast',
        damage: 120,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Discard 2 Psychic Energy from this Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PREMIUM
    ],
    extra: 'Premium Pass',
    related: [128]
  },
  {
    id: 383,
    number: 11,
    pokedex: 113,
    name: 'Chansey',
    artist: 'sowsow',
    attacks: [
      {
        name: 'Gentle Slap',
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.',
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.WONDER_PICK
    ],
    extra: 'Wonder Pick',
    related: [202]
  },
  {
    id: 384,
    number: 12,
    pokedex: 52,
    name: 'Meowth',
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: 'Pay Day',
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Draw a card.'
      },
    ],
    evolve: 'Persian',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.WONDER_PICK
    ],
    extra: 'Wonder Pick',
    related: [196, 197, 246]
  },
  {
    id: 385,
    number: 13,
    pokedex: 12,
    name: 'Butterfree',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Gust',
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: 'Powder Heal',
      description: 'Once during your turn, you may heal 20 damage from each of your Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PROMO_A1
    ],
    extra: 'Promo Pack',
    related: [5, 6, 7]
  },
  {
    id: 386,
    number: 14,
    pokedex: 131,
    name: 'Lapras EX',
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: 'Bubble Drain',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'Heal 20 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
    health: 140,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PROMO_A1
    ],
    extra: 'Promo Pack'
  },
  {
    id: 387,
    number: 15,
    pokedex: 25,
    name: 'Pikachu',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Gnaw',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Raichu',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PROMO_A1,
    ],
    extra: 'Promo Pack',
    related: [94, 95, 311, 312, 398, 381]
  },
  {
    id: 388,
    number: 16,
    pokedex: 35,
    name: 'Clefairy',
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: 'Slap',
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: 'Clefable',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    found: [
      EXPANSION.PROMO_A1,
    ],
    extra: 'Promo Pack',
    related: [113, 114]
  },
  {
    id: 389,
    number: 17,
    pokedex: 56,
    name: 'Mankey',
    artist: 'Souichirou Gunjima',
    attacks: [
      {
        name: 'Reckless Charge',
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
        description: 'This Pokémon also does 10 damage to itself.'
      },
    ],
    evolve: 'Primeape',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    found: [
      EXPANSION.PROMO_A1,
    ],
    extra: 'Promo Pack',
    related: [141, 142, 327, 328]
  },
  {
    id: 390,
    number: 18,
    pokedex: 3,
    name: 'Venusaur',
    artist: 'Kuroimori',
    attacks: [
      {
        name: 'Mega Rain',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'Heal 30 damage from this Pokémon.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 160,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PROMO_A2
    ],
    extra: 'Promo Pack',
    related: [1, 2, 3, 227, 395]
  },
  {
    id: 391,
    number: 19,
    pokedex: 658,
    name: 'Greninja',
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: 'Mist Slash',
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: 'Water Shuriken',
      description: 'Once during your turn, you may do 20 damage to 1 of your opponent’s Pokémon.'
    },
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.',
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PROMO_A2
    ],
    extra: 'Promo Pack',
    related: [87, 88, 89]
  },
  {
    id: 392,
    number: 20,
    pokedex: 93,
    name: 'Haunter',
    artist: 'Mékayu',
    attacks: [
      {
        name: 'Surprise Attack',
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: 'Flip a coin. If tails, this attack does nothing.'
      },
    ],
    evolve: 'Gengar',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.',
    health: 80,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    found: [
      EXPANSION.PROMO_A2,
    ],
    extra: 'Promo Pack',
    related: [120, 121, 122, 123, 261, 277]
  },
  {
    id: 393,
    number: 21,
    pokedex: 95,
    name: 'Onix',
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: 'Land Crush',
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
    health: 110,
    rarity: CardRarityENUM.PROMO,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    found: [
      EXPANSION.PROMO_A2,
    ],
    extra: 'Promo Pack',
    related: [150]
  },
  {
    id: 394,
    number: 22,
    pokedex: 39,
    name: 'Jigglypuff',
    artist: 'Kurata So',
    attacks: [
      {
        name: 'Sing',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Your opponent’s Active Pokémon is now Asleep.'
      },
    ],
    evolve: 'Wigglytuff',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PROMO_A2
    ],
    extra: 'Promo Pack',
    related: [193, 194, 195, 265, 279]
  },
  {
    id: 395,
    number: 23,
    pokedex: 1,
    name: 'Bulbasaur',
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: 'Vine Whip',
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: 'Ivysaur',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    health: 70,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.WONDER_PICK
    ],
    extra: 'Wonder Pick',
    related: [1, 2, 3, 4, 227, 251, 390],
  },
  {
    id: 396,
    number: 24,
    pokedex: 81,
    name: 'Magnemite',
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: 'Lighting Ball',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Magneton',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.WONDER_PICK,
    ],
    extra: 'Wonder Pick',
    related: [97, 98]
  },
  {
    id: 397,
    number: 25,
    pokedex: 145,
    name: 'Moltres EX',
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: 'Inferno Dance',
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.'
      },
      {
        name: 'Heat Blast',
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    found: [
      EXPANSION.PREMIUM
    ],
    related: [47, 255, 274],
    extra: 'Premium Pass'
  },
  {
    id: 398,
    number: 26,
    pokedex: 25,
    name: 'Pikachu',
    artist: 'Kouki Saifou',
    attacks: [
      {
        name: 'Gnaw',
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: 'Raichu',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.SPECIAL_MISSION,
    ],
    extra: 'Special Event',
    related: [94, 95, 311, 312, 387, 381]
  },
  {
    id: 399,
    number: 27,
    pokedex: 495,
    name: 'Snivy',
    artist: 'Yoriyuki ikegami',
    attacks: [
      {
        name: 'Tackle',
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: 'Servine',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Being exposed to sunlight makes its movements swiftier. It uses vines more adeptly than its hands.',
    health: 70,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    found: [
      EXPANSION.PROMO_A3
    ],
    related: [290, 291, 292, 356],
    extra: 'Promo Pack'
  },
  {
    id: 400,
    number: 28,
    pokedex: 637,
    name: 'Volcarona',
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: 'Volcanic Ash',
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: "Discard 2 Fire Energy from this Pokémon. This attack does 80 damage to 1 of your opponent's Pokémon."
      }
    ],
    evolve: 'Larvesta',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: "Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.",
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.PROMO_A3
    ],
    related: [299, 300],
    extra: 'Promo Pack'
  },
  {
    id: 401,
    number: 29,
    pokedex: 9,
    name: 'Blastoise',
    artist: 'danciao',
    attacks: [
      {
        name: 'Hydro Pump',
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.'
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    health: 150,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.PROMO_A3,
    ],
    extra: 'Promo Pack',
    related: [53, 54, 55, 232, 405]
  },
  {
    id: 402,
    number: 30,
    pokedex: 133,
    name: 'Eevee',
    artist: 'En Morikura',
    attacks: [
      {
        name: 'Growl',
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'During your opponent’s next turn, attacks used by the Defending Pokémon do −20 damage.'
      },
    ],
    evolve: "Flareon Vaporeon Jolteon",
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PROMO_A3,
    ],
    extra: 'Promo Pack',
    related: [45, 80, 102, 206, 207, 208, 305, 347, 248, 358]
  },
  {
    id: 403,
    number: 31,
    pokedex: 573,
    name: 'Cinccino',
    artist: 'MAHOU',
    attacks: [
      {
        name: 'Do the Wave',
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: 'This attack does 30 damage for each of your Benched Pokémon.'
      },
    ],
    evolve: null,
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won’t tolerate even a speck of the stuff.',
    health: 90,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    found: [
      EXPANSION.PROMO_A3
    ],
    extra: 'Promo Pack',
    related: [212, 213]
  },
  {
    id: 404,
    number: 32,
    pokedex: 4,
    name: 'Charmander',
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: 'Ember',
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: 'Discard 1 Fire Energy from this Pokémon.'
      }
    ],
    evolve: 'Charmeleon',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    found: [
      EXPANSION.WONDER_PICK
    ],
    related: [33, 34, 35, 36, 230, 253, 280, 284],
    extra: 'Wonder Pick'
  },
  {
    id: 405,
    number: 33,
    pokedex: 7,
    name: 'Squirtle',
    artist: 'Kanako Eo',
    attacks: [
      {
        name: 'Water Gun',
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: 'Wartortle',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    found: [
      EXPANSION.WONDER_PICK,
    ],
    extra: 'Wonder Pick',
    related: [53, 54, 55, 56, 232, 256, 401]
  },
];

export default MOCK_DB_CARDS;