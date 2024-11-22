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
    name: 'Viluplume',
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
    id: 14,
    number: 14,
    pokedex: 46,
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
  }
];

export default MOCK_DB_CARDS;