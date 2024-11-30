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
    related: [2, 3, 4],
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
    related: [1, 3, 4]
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
    related: [1, 2, 3]
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
    ]
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
    ]
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
    ]
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
    ability: {
      name: 'Powder Heal',
      description: 'Once during your turn, you may heal 20 damage from each of your Pokémon.'
    }
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
    weak: PokemonTypeENUM.WATER,
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
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    found: [
      EXPANSION.CHARIZARD
    ],
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
];

export default MOCK_DB_CARDS;