import { CardExpansionENUM, CardRarityENUM, CardTypeENUM } from "../definitions/enums/card.enums";
import { GENETIC_APEX } from "../definitions/enums/packs.enums";
import { PokemonTypeENUM } from "../definitions/enums/pokemon.enums";
import { Card } from "../definitions/interfaces/card.interfaces";

const MOCK_DB_CARDS: Card[] = [
  {
    number: 1,
    name: 'Bulbasaur',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000010_00_FUSHIGIDANE_C.png"),
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
    flavor: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    type: CardTypeENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
    ]
  },
  {
    number: 2,
    name: 'Ivysaur',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000020_00_FUSHIGISOU_U.png"),
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
    flavor: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    type: CardTypeENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
    ]
  },
  {
    number: 3,
    name: 'Venusaur',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000030_00_FUSHIGIBANA_R.png"),
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: 'Mega Rain',
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: null,
    expansion: CardExpansionENUM.GENETIC_APEX,
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    type: CardTypeENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
    ]
  },
  {
    number: 4,
    name: 'Venusaur EX',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000040_00_FUSHIGIBANAex_RR.png"),
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
    flavor: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    health: 190,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    type: CardTypeENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.MEWTWO
    ]
  },
  {
    number: 5,
    name: 'Caterpie',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000050_00_CATERPIE_C.png"),
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
    flavor: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    type: CardTypeENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
    ]
  },
  {
    number: 6,
    name: 'Metapod',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000060_00_TRANSEL_C.png"),
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
    flavor: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    type: CardTypeENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
    ]
  },
  {
    number: 7,
    name: 'Butterfree',
    image: require("@/assets/cards/en/Genetic Apex/cPK_10_000070_00_BUTTERFREE_R.png"),
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
    flavor: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    type: CardTypeENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    found: [
      GENETIC_APEX.PIKACHU
    ],
    ability: {
      name: 'Powder Heal',
      description: 'Once during your turn, you may heal 20 damage from each of your Pokémon.'
    }
  }
];

export default MOCK_DB_CARDS;