import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardStageENUM } from "../definitions/enums/card.enums";
import { GENETIC_APEX } from "../definitions/enums/packs.enums";
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
    series: CardExpansionTypeENUM.A,
    flavor: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 190,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
        damage: null,
        energy: [PokemonTypeENUM.NORMAL],
        description: 'Put 1 random Grass Pokémon from your deck into your hand.'
      }
    ],
    evolve: 'Metapod',
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A,
    flavor: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.',
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Even though its body is extremely skinny, it is blindingly fast when catching its prey.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Said to live in huge colonies deep in jungles, although no one has ever returned from there.',
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: '',
    health: 160,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It slashes through grass with its sharp scythes, moving too fast for the human eye to track.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
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
    series: CardExpansionTypeENUM.A,
    flavor: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It scatters cotton all over the place as a prank. If it gets wet, it’ll become too heavy to move and have no choice but to answer for its mischief.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Until recently, people living in the mountains would ride on the backs of these Pokémon to traverse the mountain paths.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.',
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'While young, it has six gorgeous tails. When it grows, several new tails are sprouted.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.',
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: '',
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
    ],
  },
  {
    id: 45,
    number: 45,
    pokedex: 136,
    name: 'Flaeron',
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: '',
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'There’s a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.MEWTWO,
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
    series: CardExpansionTypeENUM.A,
    flavor: 'Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.',
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.MEWTWO,
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.',
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    found: [
      GENETIC_APEX.PIKACHU,
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    found: [
      GENETIC_APEX.PIKACHU,
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    found: [
      GENETIC_APEX.PIKACHU,
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
    series: CardExpansionTypeENUM.A,
    flavor: '',
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    found: [
      GENETIC_APEX.PIKACHU,
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
    series: CardExpansionTypeENUM.A,
    flavor: 'It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.',
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
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
    series: CardExpansionTypeENUM.A,
    flavor: 'When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    found: [
      GENETIC_APEX.PIKACHU,
      GENETIC_APEX.MEWTWO,
      GENETIC_APEX.CHARIZARD
    ],
  },
];

export default MOCK_DB_CARDS;