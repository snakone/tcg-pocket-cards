import { CardExpansionENUM, CardExpansionTypeENUM, CardRarityENUM, CardSpecialConditionENUM, CardStageENUM } from "../definitions/enums/card.enums";
import { EXPANSION } from "../definitions/enums/packs.enums";
import { PokemonTypeENUM } from "../definitions/enums/pokemon.enums";
import { Card } from "../definitions/interfaces/card.interfaces";

export const MOCK_DB_CARDS: Card[] = [
  {
    id: 1,
    order: 1,
    number: 1,
    pokedex: 1,
    name: {
      es: 'Bulbasaur',
      en: 'Bulbasaur',
      ja: 'フシギダネ'
    },
    info: {
      type: {
        es: 'Pokémon Semilla',
        en: 'Seed Pokémon',
        ja: 'たねポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'04"',
        ja: '0.7'
      },
      weight: {
        es: '6.9',
        en: '15.2',
        ja: '6.9'
      }
    },
    artist: 'Narumi Sato',
    attacks: [
      {
        name: {
          es: 'Látigo Cepa',
          en: 'Vine Whip',
          ja: 'つるのムチ'
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [2],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      en: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
      ja: '生まれたときから 背中に 植物の タネが あって 少しずつ 大きく 育つ。'
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [2, 3, 4, 227, 251, 602, 597],
  },
  {
    id: 2,
    order: 2,
    number: 2,
    pokedex: 2,
    name: {
      es: 'Ivysaur',
      en: 'Ivysaur',
      ja: 'フシギソウ'
    },
    info: {
      type: {
        es: 'Pokémon Semilla',
        en: 'Seed Pokémon',
        ja: 'たねポケモン'
      },
      height: {
        es: '1.0',
        en: '3\'03"',
        ja: '1.0'
      },
      weight: {
        es: '13.0',
        en: '28,7',
        ja: '13.0'
      }
    },
    artist: 'Kurata So',
    attacks: [
      {
        name: {
          es: 'Hoja Afilada',
          en: 'Razor Leaf',
          ja: 'はっぱカッター'
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [3],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.',
      en: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
      ja: '背中の つぼみが 大きく 育ってくると 2本脚で 立つことが できなくなるらしい。'
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 3, 4, 227, 251, 602, 597]
  },
  {
    id: 3,
    order: 3,
    number: 3,
    pokedex: 3,
    name: {
      es: 'Venusaur',
      en: 'Venusaur',
      ja: 'フシギバナ'
    },
    info: {
      type: {
        es: 'Pokémon Semilla',
        en: 'Seed Pokémon',
        ja: 'たねポケモン'
      },
      height: {
        es: '2.0',
        en: '6\'07"',
        ja: '2.0'
      },
      weight: {
        es: '100.0',
        en: '220,5',
        ja: '100.0'
      }
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: 'Megaagotar',
          en: 'Mega Drain',
          ja: 'メガドレイン'
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Cura 30 puntos de daño a este Pokémon.',
          en: 'Heal 30 damage from this Pokémon.',
          ja: 'このポケモンのHPを30回復。'
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.',
      en: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
      ja: '太陽エネルギーを 栄養にして 大きな花が 開く。 日なたに 引き寄せられるように 移動する。'
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.HEAL
    ],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 2, 227, 602, 597]
  },
  {
    id: 4,
    order: 4,
    number: 4,
    pokedex: 3,
    name: {
      es: 'Venusaur EX',
      en: 'Venusaur EX',
      ja: 'フシギバナEX'
    },
    info: {
      type: {
        es: 'Pokémon Semilla',
        en: 'Seed Pokémon',
        ja: 'たねポケモン'
      },
      height: {
        es: '2.0',
        en: '6\'07"',
        ja: '2.0'
      },
      weight: {
        es: '100.0',
        en: '220,5',
        ja: '100.0'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Hoja Afilada',
          en: 'Razor Leaf',
          ja: 'はっぱカッター'
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      },
      {
        name: {
          es: 'Floración Gigante',
          en: 'Giant Bloom',
          ja: 'ジャイアントブルーム'
        },
        damage: 100,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Cura 30 puntos de daño a este Pokémon.',
          en: 'Heal 30 damage from this Pokémon.',
          ja: 'このポケモンのHPを30回復。'
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.',
      en: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
      ja: '太陽エネルギーを 栄養にして 大きな花が 開く。 日なたに 引き寄せられるように 移動する。'
    },
    health: 190,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.HEAL
    ],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 2, 227, 251, 602]
  },
  {
    id: 5,
    order: 5,
    number: 5,
    pokedex: 10,
    name: {
      es: 'Caterpie',
      en: 'Caterpie',
      ja: 'キャタピー'
    },
    info: {
      type: {
        es: 'Pokémon Gusano',
        en: 'Worm Pokémon',
        ja: 'いもむしポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '2.9',
        en: '6,4',
        ja: '2.9'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Encontrar un Amigo',
          en: 'Find a Friend',
          ja: 'ともだちをさがす'
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Pon 1 Pokémon Planta aleatorio de tu baraja en tu mano.',
          en: 'Put 1 random Grass Pokémon from your deck into your hand.',
          ja: '自分の山札から草ポケモンをランダムに1枚、手札に加える。'
        }
      }
    ],
    evolve: [6],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.',
      en: 'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
      ja: '頭の 触角から 強烈な においを だして 敵を 追いはらい 身を守る。'
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [6, 7, 592]
  },
  {
    id: 6,
    order: 6,
    number: 6,
    pokedex: 11,
    name: {
      es: 'Metapod',
      en: 'Metapod',
      ja: 'トランセル'
    },
    info: {
      type: {
        es: 'Pokémon Capullo',
        en: 'Cocoon Pokémon',
        ja: 'さなぎポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'04"',
        ja: '0.7'
      },
      weight: {
        es: '9.9',
        en: '21,8',
        ja: '9.9'
      }
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: 'Picadura',
          en: 'Bug Bite',
          ja: 'むしくい'
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [7],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar.',
      en: 'It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
      ja: '進化を 待っている 状態｡ 硬くなる ことしか できないので 襲われないよう じっとしている｡'
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [5, 7, 592]
  },
  {
    id: 7,
    order: 7,
    number: 7,
    pokedex: 12,
    name: {
      es: 'Butterfree',
      en: 'Butterfree',
      ja: 'バタフリー'
    },
    info: {
      type: {
        es: 'Pokémon Mariposa',
        en: 'Butterfly Pokémon',
        ja: 'ちょうちょポケモン'
      },
      height: {
        es: '1.1',
        en: '2\'04"',
        ja: '1.1'
      },
      weight: {
        es: '32.0',
        en: '70.5',
        ja: '32.0'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: 'Tornado',
          en: 'Gust',
          ja: 'かぜおこし'
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
        es: 'Polvo Sanador',
        en: 'Powder Heal',
        ja: 'パウダーヒール'
      },
      description: {
        es: 'Una vez durante tu turno, puedes curar 20 puntos de daño a cada uno de tus Pokémon.',
        en: 'Once during your turn, you may heal 20 damage from each of your Pokémon.',
        ja: '自分の番に1回使える。自分のポケモン全員のHPを20回復。'
      }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas.',
      en: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
      ja: 'こまかく 速く 羽ばたいたら 猛毒の りんぷんが 風に のって 飛んでくるぞ｡'
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.HEAL
    ],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [5, 6, 592]
  },
  {
    id: 8,
    order: 8,
    number: 8,
    pokedex: 13,
    name: {
      es: 'Weedle',
      en: 'Weedle',
      ja: 'ビードル'
    },
    info: {
      type: {
        es: 'Pokémon Oruga',
        en: 'Hairy Bug Pokémon',
        ja: 'けむしポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '3.2',
        en: '7.1',
        ja: '3.2'
      }
    },
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: {
          es: 'Aguijonazo',
          en: 'Sting',
          ja: 'チクチクさす'
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [9],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.',
      en: 'Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.',
      ja: '森や 草地に 多く 生息｡ 頭の 先に ５センチぐらいの 小さく 鋭い 毒針を持つ｡'
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [9, 10]
  },
  {
    id: 9,
    order: 9,
    number: 9,
    pokedex: 12,
    name: {
      es: 'Kakuna',
      en: 'Kakuna',
      ja: 'コクーン'
    },
    info: {
      type: {
        es: 'Pokémon Capullo',
        en: 'Cocoon Pokémon',
        ja: 'さなぎポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '10.0',
        en: '22',
        ja: '10.0'
      }
    },
    artist: 'miki kudo',
    attacks: [
      {
        name: {
          es: 'Picadura',
          en: 'Bug Bite',
          ja: 'むしくい'
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [10],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.',
      en: 'Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger.',
      ja: '自分では　ほとんど　動けないが 危ないときは　硬くなって 身を守っているようだ｡'
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [8, 10]
  },
  {
    id: 10,
    order: 10,
    number: 10,
    pokedex: 15,
    name: {
      es: 'Beedrill',
      en: 'Beedrill',
      ja: 'スピアー'
    },
    info: {
      type: {
        es: 'Pokémon Abeja Veneno',
        en: 'Poison Bee Pokémon',
        ja: 'どくばちポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '29.5',
        en: '65',
        ja: '29.5'
      }
    },
    artist: 'You Iribi',
    attacks: [
      {
        name: {
          es: 'Aguijón Afilado',
          en: 'Sharp Sting',
          ja: 'するどいはり'
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.',
      en: 'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
      ja: '両手と　お尻にある　３本の　毒針で 相手を　刺して　刺して 刺しまくって　攻撃する｡'
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [8, 9]
  },
  {
    id: 11,
    order: 11,
    number: 11,
    pokedex: 43,
    name: {
      es: 'Oddish',
      en: 'Oddish',
      ja: 'ナゾノクサ'
    },
    info: {
      type: {
        es: 'Pokémon Hierbajo',
        en: 'Weed Pokémon',
        ja: 'ざっそうポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '5.4',
        en: '11.9',
        ja: '5.4'
      }
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: 'Apisonar',
          en: 'Ram',
          ja: 'ぶつかる'
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [12],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se mueve al exponerse a la luz de la luna. Merodea por la noche para esparcir sus semillas.',
      en: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.',
      ja: '月の光を　浴びて　動きだす｡ 夜のあいだに　タネを　あちこちに ばらまくため　歩きまわる｡'
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [12, 13, 373, 374, 375, 228]
  },
  {
    id: 12,
    order: 12,
    number: 12,
    pokedex: 44,
    name: {
      es: 'Gloom',
      en: 'Gloom',
      ja: 'クサイハナ'
    },
    info: {
      type: {
        es: 'Pokémon Hierbajo',
        en: 'Weed Pokémon',
        ja: 'ざっそうポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '8.6',
        en: '19',
        ja: '8.6'
      }
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: 'Babeo',
          en: 'Drool',
          ja: 'よだれ'
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [13],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Libera un fétido olor por los pistilos. El fuerte hedor hace perder el conocimiento a cualquiera que se encuentre en un radio de 2 km.',
      en: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
      ja: 'めしべが　放つ　とてつもなく 臭い　においは　２キロ先まで とどき　気を　失わせる｡'
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [11, 13, 373, 374, 375, 228]
  },
  {
    id: 13,
    order: 13,
    number: 13,
    pokedex: 45,
    name: {
      es: 'Vileplume',
      en: 'Vileplume',
      ja: 'ラフレシア'
    },
    info: {
      type: {
        es: 'Pokémon Flor',
        en: 'Flower Pokémon',
        ja: 'フラワーポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '18.6',
        en: '41',
        ja: '18.6'
      }
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: 'Aroma Sedante',
          en: 'Soothing Scent',
          ja: 'アロマスリープ'
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Dormido.',
          en: "Your opponent\'s Active Pokémon is now Asleep.",
          ja: '相手のバトルポケモンをねむりにする。'
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene los pétalos más grandes del mundo. Al caminar, de ellos se desprenden densas nubes de polen tóxico.',
      en: 'It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.',
      ja: '世界一　大きな　花びらは 歩くたびに　揺れて　大量の 毒花粉を　ばらまいてしまう｡'
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.SLEEP
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [11, 12, 373, 374, 228]
  },
  {
    id: 14,
    order: 14,
    number: 14,
    pokedex: 46,
    name: {
      es: 'Paras',
      en: 'Paras',
      ja: 'パラス'
    },
    info: {
      type: {
        es: 'Pokémon Hongo',
        en: 'Mushroom Pokémon',
        ja: 'きのこポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '5.4',
        en: '11.9',
        ja: '5.4'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'Arañazo',
          en: 'Scratch',
          ja: 'ひっかく'
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [15],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Las setas que tiene en el dorso, llamadas tochukaso, controlan al insecto contra su voluntad.',
      en: 'The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off.',
      ja: '冬虫夏草と　いう　キノコが 虫を　操っているのだ｡ 虫の　意思は　無視される｡'
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [15]
  },
  {
    id: 15,
    order: 15,
    number: 15,
    pokedex: 47,
    name: {
      es: 'Parasect',
      en: 'Parasect',
      ja: 'パラセクト' 
    },
    info: {
      type: {
        es: 'Pokémon Hongo',
        en: 'Mushroom Pokémon',
        ja: 'きのこポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '29.5',
        en: '65',
        ja: '29.5'
      }
    },
    artist: 'Eri Yamaki',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La mayor parte de su cuerpo está atrofiada, excepto la seta del dorso, que controla al resto. Si se desprende. Parasect ya no podrá moverse.',
      en: 'The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.',
      ja: 'ムシの　方は　ほぼ　死んでいて 本体は　背中の　キノコだ｡ もげると　もう　動かなくなる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [14]
  },
  {
    id: 16,
    order: 16,
    number: 16,
    pokedex: 48,
    name: {
      es: 'Venonat',
      en: 'Venonat',
      ja: 'コンパン' 
    },
    info: {
      type: {
        es: 'Pokémon Insecto',
        en: 'Insect Pokémon',
        ja: 'こんちゅうポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '30',
        en: '66.1',
        ja: '30'
      }
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: [17],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Rezuma veneno por todo su cuerpo. De noche, atrapa y come pequeños Pokémon insecto atraídos por la luz',
      en: 'Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.',
      ja: '全身から　毒が　にじみでる｡ 暗くなると　灯りに　群がった 小さな　虫ポケモンを　捕らえる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [17]
  },
  {
    id: 17,
    order: 17,
    number: 17,
    pokedex: 49,
    name: {
      es: 'Venomoth',
      en: 'Venomoth',
      ja: 'モルフォン' 
    },
    info: {
      type: {
        es: 'Pokémon Polilla Venenosa',
        en: 'Poison Moth Pokémon',
        ja: 'どくがポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '12.5',
        en: '27.6',
        ja: '12.5'
      }
    },
    artist: 'Mina Nakai',
    attacks: [
      {
        name: {
          es: 'Polvo Veneno',
          en: 'Poison Powder',
          ja: 'どくのこな' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent\'s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene las alas cubiertas de escamas. Cada vez que las bate, esparce un polvillo sumamente venenoso.',
      en: 'The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.',
      ja: '翅に　りんぷんが　ついていて ヒラヒラと　羽ばたくたびに 猛毒の粉を　ばらまく｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.POISON
    ],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [16]
  },
  {
    id: 18,
    order: 18,
    number: 18,
    pokedex: 69,
    name: {
      es: 'Bellsprout',
      en: 'Bellsprout',
      ja: 'マダツボミ' 
    },
    info: {
      type: {
        es: 'Pokémon Flor',
        en: 'Flower Pokémon',
        ja: 'フラワーポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: 'Látigo Cepa',
          en: 'Vine Whip',
          ja: 'つるのムチ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: [19],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Aunque su cuerpo es extremadamente delgado, es muy rápido a la hora de capturar sus presas.',
      en: 'Even though its body is extremely skinny, it is blindingly fast when catching its prey.',
      ja: 'ひょろっとした　体つきだが 獲物を　捕らえるときの　動きは 目にも　とまらないほど　素早い｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [19, 20]
  },
  {
    id: 19,
    order: 19,
    number: 19,
    pokedex: 70,
    name: {
      es: 'Weepinbell',
      en: 'Weepinbell',
      ja: 'ウツドン' 
    },
    info: {
      type: {
        es: 'Pokémon Atrapamoscas',
        en: 'Flycatcher Pokémon',
        ja: 'ハエとりポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '6.4',
        en: '14.1',
        ja: '6.4'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Hoja Afilada',
          en: 'Razor Leaf',
          ja: 'はっぱカッター' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [20],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Las hojas que tiene actúan como cuchillas en combate. Otra de sus armas es el corrosivo fluido que expulsa.',
      en: 'The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.',
      ja: '葉っぱの　部分は　カッターになって 相手を　切り裂く｡　口からは なんでも　溶かす　液体を　吐く｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [18, 20]
  },
  {
    id: 20,
    order: 20,
    number: 20,
    pokedex: 71,
    name: {
      es: 'Victreebel',
      en: 'Victreebel',
      ja: 'ウツボット' 
    },
    info: {
      type: {
        es: 'Pokémon Atrapamoscas',
        en: 'Flycatcher Pokémon',
        ja: 'ハエとりポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '15.5',
        en: '34.2',
        ja: '15.5'
      }
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: 'Látigo Cepa',
          en: 'Vine Whip',
          ja: 'つるのムチ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: {
        es: 'Trampa Fragancia',
        en: 'Fragrance Trap',
        ja: 'かおりのわな' 
      },
      description: {
       es: 'Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes cambiar 1 de los Pokémon Básicos en Banca de tu rival por su Pokémon Activo.',
       en: 'If this Pokémon is in the Active Spot, once during your turn, you may switch in 1 of your opponent’s Benched Basic Pokémon to the Active Spot.',
       ja: 'このポケモンがバトル場にいるなら、自分の番に1回使える。相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Dicen que vive en grandes colonias en el interior de las junglas, aunque nadie ha podido verificarlo.',
      en: 'Said to live in huge colonies deep in jungles, although no one has ever returned from there.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [18, 19]
  },
  {
    id: 21,
    order: 21,
    number: 21,
    pokedex: 102,
    name: {
      es: 'Exeggcute',
      en: 'Exeggcute',
      ja: 'タマタマ' 
    },
    info: {
      type: {
        es: 'Pokémon Huevo',
        en: 'Egg Pokémon',
        ja: 'たまごポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '2.5',
        en: '5.5',
        ja: '2.5'
      }
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: 'Bomba Germen',
          en: 'Seed Bomb',
          ja: 'タネばくだん' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: [22],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Pese a su aspecto de mera piña de huevos, se trata de un Pokémon. Al parecer, sus cabezas se comunican entre sí por telepatía.',
      en: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
      ja: 'タマゴのように　見えるが　立派な ポケモン｡　テレパシーで　仲間と 交信している　らしいぞ｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [22, 23, 287, 288, 252, 355]
  },
  {
    id: 22,
    order: 22,
    number: 22,
    pokedex: 103,
    name: {
      es: 'Exeggutor',
      en: 'Exeggutor',
      ja: 'ナッシー' 
    },
    info: {
      type: {
        es: 'Pokémon Coco',
        en: 'Coconut Pokémon',
        ja: 'やしのみポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '120',
        en: '264.6',
        ja: '120'
      }
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: 'Pisotón',
          en: 'Stomp',
          ja: 'ふみつけ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.',
          en: 'Flip a coin. If heads, this attack does 30 more damage.',
          ja: 'コインを1回投げてオモテなら、30ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '３つの　頭は　べつのことを 考えている｡　自分以外は あまり　興味がない　ようだ｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [21, 287, 288, 355]
  },
  {
    id: 23,
    order: 23,
    number: 23,
    pokedex: 103,
    name: {
      es: 'Exeggutor EX',
      en: 'Exeggutor EX',
      ja: 'ナッシー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Coco',
        en: 'Coconut Pokémon',
        ja: 'やしのみポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '120',
        en: '264.6',
        ja: '120'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Golpe Tropical',
          en: 'Tropical Swing',
          ja: 'トロピカルスイング' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.',
          en: 'Flip a coin. If heads, this attack does 40 more damage.',
          ja: 'コインを1回投げてオモテなら、40ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '３つの　頭は　べつのことを 考えている｡　自分以外は あまり　興味がない　ようだ｡' 
    },
    health: 160,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [21, 287, 252]
  },
  {
    id: 24,
    order: 24,
    number: 24,
    pokedex: 114,
    info: {
      type: {
        es: 'Pokémon Enredadera',
        en: 'Vine Pokémon',
        ja: 'ツルじょうポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '35.0',
        en: '77.2',
        ja: '35.0'
      }
    },
    name: {
      es: 'Tangela',
      en: 'Tangela',
      ja: 'モンジャラ' 
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: 'Absorber',
          en: 'Absorb',
          ja: 'すいとる' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Cura 10 puntos de daño a este Pokémon.',
          en: 'Heal 10 damage from this Pokémon.',
          ja: 'このポケモンのHPを10回復。' 
        }
      }
    ],
    evolve: [377],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus lianas no dejan de crecer aunqeu se le desprendan. Aún se desconoce qué aspecto tiene sin ellas.',
      en: 'Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.',
      ja: 'ちぎれても　無限に　伸びる ツルの　奥の　正体は いまだ　解明されていない｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [376, 377, 528]
  },
  {
    id: 25,
    order: 25,
    number: 25,
    pokedex: 123,
    name: {
      es: 'Scyther',
      en: 'Scyther',
      ja: 'ストライク' 
    },
    info: {
      type: {
        es: 'Pokémon Mantis',
        en: 'Mantis Pokémon',
        ja: 'かまきりポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '56.0',
        en: '123.5',
        ja: '56.0'
      }
    },
    artist: 'Hasuno',
    attacks: [
      {
        name: {
          es: 'Guadaña Afilada',
          en: 'Sharp Scythe',
          ja: 'するどいカマ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Avanza por la hierba con sus afiladas guadañas, más rápido de lo que el ojo humano puede percibir.',
      en: 'It slashes through grass with its sharp scythes, moving too fast for the human eye to track.',
      ja: '切れ味　鋭い　カマを　使って 草むらを　切り進む｡　あまりに 速い　動きで　目が　追いつかない｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
  },
  {
    id: 26,
    order: 26,
    number: 26,
    pokedex: 127,
    name: {
      es: 'Pinsir',
      en: 'Pinsir',
      ja: 'カイロス' 
    },
    info: {
      type: {
        es: 'Pokémon Escarabajo',
        en: 'Stag Beetle Pokémon',
        ja: 'くわがたポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '55.0',
        en: '121.3',
        ja: '55.0'
      }
    },
    artist: 'Eri Yamaki',
    attacks: [
      {
        name: {
          es: 'Cornada Doble',
          en: 'Double Horn',
          ja: 'ダブルホーン' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: {
          es: 'Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.',
          en: 'Flip 2 coins. This attack does 50 damage for each heads.',
          ja: 'コインを2回投げて、オモテの数×50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Los Pinsir se juzgan entre ellos por la robustez de la cornamenta. Cuanto más imponente sea, más agradará a sus congéneres del sexo puesto.',
      en: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
      ja: 'ツノで　互いを　格付けする｡ 太く　立派な　ツノを　持つ カイロスほど　異性に　人気｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [229]
  },
  {
    id: 27,
    order: 27,
    number: 27,
    pokedex: 546,
    name: {
      es: 'Cottonee',
      en: 'Cottonee',
      ja: 'モンメン' 
    },
    info: {
      type: {
        es: 'Pokémon Bolalgodón',
        en: 'Cotton Puff Pokémon',
        ja: 'わたたまポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '0.6',
        en: '1.3',
        ja: '0.6'
      }
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: 'Pegarse',
          en: 'Attach',
          ja: 'くっつく' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [28],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Lanza bolas de algodón para defenderse. A veces, la fuerza de un tifón llega a arrastrarlo hasta el otro extremo del mundo.',
      en: 'It shoots cotton from its body to protect itself. If it gets caught up in hurricane-strength winds, it can get sent to the other side of the Earth.',
      ja: '綿を　飛ばして　身を　守る｡ 台風の　風に　流され 地球の　裏側に　いくことも｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [28]
  },
  {
    id: 28,
    order: 28,
    number: 28,
    pokedex: 547,
    name: {
      es: 'Whimsicott',
      en: 'Whimsicott',
      ja: 'エルフーン' 
    },
    info: {
      type: {
        es: 'Pokémon Vuelalviento',
        en: 'Windveiled Pokémon',
        ja: 'かぜかくれポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '6.6',
        en: '14.6',
        ja: '6.6'
      }
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: 'Placaje Giro',
          en: 'Rolling Tackle',
          ja: 'ころがりタックル' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este travieso Pokémon se divierte esparciendo bolas de algodón. Al mojarlo, su peso aumenta tanto que no logra moverse y se da por vencido.',
      en: 'It scatters cotton all over the place as a prank. If it gets wet, it’ll become too heavy to move and have no choice but to answer for its mischief.',
      ja: '綿を　まき散らし　イタズラする｡ 水を　かけると　重くなって 動けなくなり　観念するぞ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [27]
  },
  {
    id: 29,
    order: 29,
    number: 29,
    pokedex: 548,
    name: {
      es: 'Petilil',
      en: 'Petilil',
      ja: 'チュリネ' 
    },
    info: {
      type: {
        es: 'Pokémon Bulbo',
        en: 'Bulb Pokémon',
        ja: 'ねっこポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '6.6',
        en: '14.6',
        ja: '6.6'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'Absorción',
          en: 'Blot',
          ja: 'ちょっとすいとる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.GRASS],
        description: {
       es: 'Cura 10 puntos de daño a este Pokémon.',
       en: 'Heal 10 damage from this Pokémon.',
       ja: 'このポケモンのHPを10回復。' 
     }
      }
    ],
    evolve: [30],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Las hojas de su cabeza vuelven a crecer rápidamente aunque se caigan. A pesar de ser amargas, restablecen la vitalidad.',
      en: 'The leaves on its head grow right back even if they fall out. These bitter leaves refresh those who eat them.',
      ja: '抜け落ちても　すぐに　生えてくる 頭の　葉っぱは　とても　苦いが かじれば　すぐ　元気に　なれる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [30]
  },
  {
    id: 30,
    order: 30,
    number: 30,
    pokedex: 549,
    name: {
      es: 'Lilligant',
      en: 'Lilligant',
      ja: 'ドレディア' 
    },
    info: {
      type: {
        es: 'Pokémon Adornofloral',
        en: 'Flowering Pokémon',
        ja: 'はなかざりポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '16.3',
        en: '35.9',
        ja: '16.3'
      }
    },
    artist: 'You Iribi',
    attacks: [
      {
        name: {
          es: 'Aprovisionamiento Hoja',
          en: 'Leaf Supply',
          ja: 'リーフサプライ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: {
          es: 'Une 1 Energía Planta de tu área de Energía a 1 de tus Pokémon Planta en Banca.',
          en: 'Take a Grass Energy from your Energy Zone and attach it to 1 of your Benched Grass Pokémon.',
          ja: '自分のエネルギーゾーンから草エネルギーを1個出し、ベンチの草ポケモンにつける。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'El aroma que despide la flor de su tocado tiene efectos tranquilizantes, pero este Pokémon requiere muchos cuidados.',
      en: 'The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.',
      ja: '頭の　花飾りから　発する 香りを　かぐと　リラックスできるが 手入れが　とても　難しい｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [29]
  },
  {
    id: 31,
    order: 31,
    number: 31,
    pokedex: 672,
    name: {
      es: 'Skiddo',
      en: 'Skiddo',
      ja: 'メェークル' 
    },
    info: {
      type: {
        es: 'Pokémon Montura',
        en: 'Mount Pokémon',
        ja: 'ライドポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '31',
        en: '68.3',
        ja: '31'
      }
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: 'Ataque Sorpresa',
          en: 'Surprise Attack',
          ja: 'ふいをつく' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cruz, este ataque no hace nada.',
          en: 'Flip a coin. If tails, this attack does nothing.',
          ja: 'コインを1回投げてウラなら、このワザは失敗。' 
        }
      }
    ],
    evolve: [32],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Hasta hace bien poco, los habitantes de las montañas se desplazaban por sus senderos a lomos de este Pokémon.',
      en: 'Until recently, people living in the mountains would ride on the backs of these Pokémon to traverse the mountain paths.',
      ja: '最近まで　山岳で　暮らす 人たちは　メェークルの　背中に 乗って　山道を　移動していた｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [32]
  },
  {
    id: 32,
    order: 32,
    number: 32,
    pokedex: 673,
    name: {
      es: 'Gogoat',
      en: 'Gogoat',
      ja: 'ゴーゴート' 
    },
    info: {
      type: {
        es: 'Pokémon Montura',
        en: 'Mount Pokémon',
        ja: 'ライドポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '91.0',
        en: '200.6',
        ja: '91.0'
      }
    },
    artist: 'You Iribi',
    attacks: [
      {
        name: {
          es: 'Hoja Afilada',
          en: 'Razor Leaf',
          ja: 'はっぱカッター' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Puede percibir cómo se siente alguien tocándolo con los cuernos. Lleva ayudando a los humanos en sus labores desde hace 5000 años.',
      en: 'It can sense the feelings of others by touching them with its horns. This species has assisted people with their work since 5,000 years ago.',
      ja: 'ツノで　触れると　相手の　気持ちを 感じとれる｡　５０００年前から 人の　仕事を　手伝ってきた｡' 
    },
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [31]
  },
  {
    id: 33,
    order: 33,
    number: 33,
    pokedex: 4,
    name: {
      es: 'Charmander',
      en: 'Charmander',
      ja: 'ヒトカゲ' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartija',
        en: 'Lizard Pokémon',
        ja: 'とかげポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '8.5',
        en: '18.7',
        ja: '8.5'
      }
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: 'Ascuas',
          en: 'Ember',
          ja: 'ひのこ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'Descarta 1 Energía Fuego de este Pokémon.',
          en: 'Discard 1 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを1個トラッシュ。' 
        }
      }
    ],
    evolve: [34],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
      en: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
      ja: '熱いものを　好む　性格｡ 雨に濡れると　しっぽの　先から 煙が　出るという｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [34, 35, 36, 230, 253, 280, 284, 611]
  },
  {
    id: 34,
    order: 34,
    number: 34,
    pokedex: 5,
    name: {
      es: 'Charmeleon',
      en: 'Charmeleon',
      ja: 'リザード' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '19.0',
        en: '41.9',
        ja: '19.0'
      }
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: 'Garras de Fuego',
          en: 'Fire Claws',
          ja: 'ほのおのツメ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [35],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.',
      en: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
      ja: '燃える　しっぽを　振りまわし するどい　ツメで　相手を 切り裂く　荒々しい　性格｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 35, 36, 230, 253, 280, 284, 611]
  },
  {
    id: 35,
    order: 35,
    number: 35,
    pokedex: 6,
    name: {
      es: 'Charizard',
      en: 'Charizard',
      ja: 'リザードン' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '90.5',
        en: '199.5',
        ja: '90.5'
      }
    },
    artist: 'takuyoa',
    attacks: [
      {
        name: {
          es: 'Giro Fuego',
          en: 'Fire Spin',
          ja: 'ほのおのうず' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Fuego de este Pokémon.',
          en: 'Discard 2 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを2個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
      en: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      ja: '岩石も　焼けるような 灼熱の　炎を　吐いて 山火事を　起こすことが　ある｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 230, 611]
  },
  {
    id: 36,
    order: 36,
    number: 36,
    pokedex: 6,
    name: {
      es: 'Charizard EX',
      en: 'Charizard EX',
      ja: 'リザードン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '90.5',
        en: '199.5',
        ja: '90.5'
      }
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Tormenta Carmesí',
          en: 'Crimson Storm',
          ja: 'ぐれんのあらし' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Fuego de este Pokémon.',
          en: 'Discard 2 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを2個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
      en: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      ja: '岩石も　焼けるような 灼熱の　炎を　吐いて 山火事を　起こすことが　ある｡' 
    },
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 230, 253, 280, 284, 611]
  },
  {
    id: 37,
    order: 37,
    number: 37,
    pokedex: 37,
    name: {
      es: 'Vulpix',
      en: 'Vulpix',
      ja: 'ロコン' 
    },
    info: {
      type: {
        es: 'Pokémon Zorro',
        en: 'Fox Pokémon',
        ja: 'きつねポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '9.9',
        en: '21.8',
        ja: '9.9'
      }
    },
    artist: 'Toshinao Aoki',
    attacks: [
      {
        name: {
          es: 'Látigo',
          en: 'Tail Whip',
          ja: 'しっぽをふる' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza una moneda. Si sale cara, el Pokémon defensor no puede atacar durante el próximo turno de tu rival.',
          en: 'Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn.',
          ja: 'コインを1回投げオモテなら、次の相手の番、このワザを受けたポケモンはワザが使えない。' 
        }
      }
    ],
    evolve: [38],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'De pequeño, tienes seis colas de gran belleza. A medida que crece, le van saliendo mas.',
      en: 'While young, it has six gorgeous tails. When it grows, several new tails are sprouted.',
      ja: '子どもだが　６本の　しっぽが 美しい｡　成長すると　さらに しっぽが　増える｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.RESIST
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [38]
  },
  {
    id: 38,
    order: 38,
    number: 38,
    pokedex: 38,
    name: {
      es: 'Ninetales',
      en: 'Ninetales',
      ja: 'キュウコン' 
    },
    info: {
      type: {
        es: 'Pokémon Zorro',
        en: 'Fox Pokémon',
        ja: 'きつねポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '19.9',
        en: '43.9',
        ja: '19.9'
      }
    },
    artist: 'You Iribi',
    attacks: [
      {
        name: {
          es: 'Lanzallamas',
          en: 'Flamethrower',
          ja: 'かえんほうしゃ' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
          es: 'Descarta una Energía Fuego de este Pokémon.',
          en: 'Discard 1 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuentan que llega a vivir hasta mil años y que cada una de las colas posee poderes sobrenaturales.',
      en: 'It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.',
      ja: 'しっぽの　１本　１本に 神通力が　込められている｡ １０００年　生きると　言われる｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [37]
  },
  {
    id: 39,
    order: 39,
    number: 39,
    pokedex: 58,
    name: {
      es: 'Growlithe',
      en: 'Growlithe',
      ja: 'ガーディ' 
    },
    info: {
      type: {
        es: 'Pokémon Perrito',
        en: 'Puppy Pokémon',
        ja: 'こいぬポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '19.0',
        en: '41.9',
        ja: '19.0'
      }
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: 'Mordisco',
          en: 'Bite',
          ja: 'かみつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [40],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'De naturaleza valiente y honrada, se enfrenta sin miedo a enemigos más grandes y fuertes.',
      en: 'It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.',
      ja: '自分より　強くて　大きな　相手にも 恐れずに　立ち向かう 勇敢で　頼もしい　性格｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [40, 41, 254]
  },
  {
    id: 40,
    order: 40,
    number: 40,
    pokedex: 59,
    name: {
      es: 'Arcanine',
      en: 'Arcanine',
      ja: 'ウインディ' 
    },
    info: {
      type: {
        es: 'Pokémon Leyenda',
        en: 'Legendary Pokémon',
        ja: 'でんせつポケモン'
      },
      height: {
        es: '1.9',
        en: '6\'3"',
        ja: '1.9'
      },
      weight: {
        es: '155.0',
        en: '341.7',
        ja: '155.0'
      }
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: 'Placaje Ardiente',
          en: 'Heat Tackle',
          ja: 'ヒートタックル' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este Pokémon también se hace 20 puntos de daño a sí mismo.',
          en: 'This Pokémon also does 20 damage to itself.',
          ja: 'このポケモンにも20ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas.',
      en: 'An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.',
      ja: '草原を　駆け抜ける　様子は 人々の　心を　虜にしたと 昔の　絵巻に　記されていた｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [39]
  },
  {
    id: 41,
    order: 41,
    number: 41,
    pokedex: 59,
    name: {
      es: 'Arcanine EX',
      en: 'Arcanine EX',
      ja: 'ウインディ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Leyenda',
        en: 'Legendary Pokémon',
        ja: 'でんせつポケモン'
      },
      height: {
        es: '1.9',
        en: '6\'3"',
        ja: '1.9'
      },
      weight: {
        es: '155.0',
        en: '341.7',
        ja: '155.0'
      }
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: 'Infierno Desatado',
          en: 'Inferno Onrush',
          ja: 'もうかのとっしん' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este Pokémon también se hace 20 puntos de daño a sí mismo.',
          en: 'This Pokémon also does 20 damage to itself.',
          ja: 'このポケモンにも20ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas.',
      en: 'An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.',
      ja: '草原を　駆け抜ける　様子は 人々の　心を　虜にしたと 昔の　絵巻に　記されていた｡' 
    },
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [39, 254]
  },
  {
    id: 42,
    order: 42,
    number: 42,
    pokedex: 77,
    name: {
      es: 'Ponyta',
      en: 'Ponyta',
      ja: 'ポニータ' 
    },
    info: {
      type: {
        es: 'Pokémon Caballo Fuego',
        en: 'Fire Horse Pokémon',
        ja: 'ひのうまポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Uta',
    attacks: [
      {
        name: {
          es: 'Llama',
          en: 'Flare',
          ja: 'ほのお' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [43],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Al nacer es un poco lento, pero va fortaleciendo las patas paulatinamente al disputar carreras con sus congéneres.',
      en: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
      ja: '生まれたばかりは　走るのが　へた｡ 仲間と　かけっこを　するうちに 足腰が　強く　育っていく｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [43, 296, 297, 231]
  },
  {
    id: 43,
    order: 43,
    number: 43,
    pokedex: 78,
    name: {
      es: 'Rapidash',
      en: 'Rapidash',
      ja: 'ギャロップ' 
    },
    info: {
      type: {
        es: 'Pokémon Caballo Fuego',
        en: 'Fire Horse Pokémon',
        ja: 'ひのうまポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '95.0',
        en: '209.4',
        ja: '95.0'
      }
    },
    artist: 'Misa Tsutsui',
    attacks: [
      {
        name: {
          es: 'Crin de Fuego',
          en: 'Fire Mane',
          ja: 'ほのおのたてがみ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su ardiente crin ondea al viento mientras atraviesa extensas praderas a una velocidad de 240 km/h.',
      en: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
      ja: '燃える　たてがみを　はためかせ 時速　２４０キロの　速度で 大草原を　駆けぬけるのだ｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [42, 296, 297, 231]
  },
  {
    id: 44,
    order: 44,
    number: 44,
    pokedex: 126,
    name: {
      es: 'Magmar',
      en: 'Magmar',
      ja: 'ブーバー' 
    },
    info: {
      type: {
        es: 'Pokémon Escupefuego',
        en: 'Spitfire Pokémon',
        ja: 'ひふきポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '44.5',
        en: '98.1',
        ja: '44.5'
      }
    },
    artist: 'Ryuta Fuse',
    attacks: [
      {
        name: {
          es: 'Puño de Magma',
          en: 'Magma Punch',
          ja: 'マグマパンチ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [396],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Abate a sus presas con las llamas que genera y con frecuencia acaba reduciéndolas a carbonilla por accidente.',
      en: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
      ja: '炎で　獲物を　しとめる｡ ついつい　焼きすぎて 黒コゲに　してしまい　後悔する｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [298, 395, 396]
  },
  {
    id: 45,
    order: 45,
    number: 45,
    pokedex: 136,
    name: {
      es: 'Flareon',
      en: 'Flareon',
      ja: 'ブースター' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'ほのおポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '25.0',
        en: '55.1',
        ja: '25.0'
      }
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: 'Lanzallamas',
          en: 'Flamethrower',
          ja: 'かえんほうしゃ' 
        },
        damage: 110,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 1 Energía de este Pokémon.',
          en: 'Discard 1 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Calienta el aire que inhala en su saca de fuego y lo expulsa a 1700 ºC.',
      en: 'Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees Fahrenheit.',
      ja: '吸いこんだ　空気を　体内の 炎袋に　送りこみ １７００度の　炎にして　吹く｡' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [206, 207, 208, 347, 248, 498]
  },
  {
    id: 46,
    order: 46,
    number: 46,
    pokedex: 145,
    name: {
      es: 'Moltres',
      en: 'Moltres',
      ja: 'ファイヤー' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: 'Ataque Aéreo',
          en: 'Sky Attack',
          ja: 'ゴッドバード' 
        },
        damage: 130,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cruz, este ataque no hace nada.',
          en: 'Flip a coin. If tails, this attack does nothing.',
          ja: 'コインを1回投げウラなら、このワザは失敗。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.',
      en: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
      ja: '羽ばたくと　翼の　炎が 赤く　美しく　きらめく 伝説の　鳥ポケモンの　１匹｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 47,
    order: 47,
    number: 47,
    pokedex: 145,
    name: {
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: 'ファイヤー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: 'Danza Infernal',
          en: 'Inferno Dance',
          ja: 'れっかのまい' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'Lanza 3 monedas. Une a tus Pokémon Fuego en Banca, de la manera que desees, tantas Energías Fuego de tu área de Energía como caras hayan salido.',
          en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
          ja: 'コインを3回投げ、オモテの数ぶんの炎エネルギーを自分のエネルギーゾーンから出し、ベンチの炎ポケモンに好きなようにつける。' 
        }
      },
      {
        name: {
          es: 'Explosión de Calor',
          en: 'Heat Blast',
          ja: 'ヒートブラスト' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.',
      en: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
      ja: '羽ばたくと　翼の　炎が 赤く　美しく　きらめく 伝説の　鳥ポケモンの　１匹｡' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.ADD
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [255, 274, 397]
  },
  {
    id: 48,
    order: 48,
    number: 48,
    pokedex: 531,
    name: {
      es: 'Heatmor',
      en: 'Heatmor',
      ja: 'クイタラン' 
    },
    info: {
      type: {
        es: 'Pokémon Hormiguero',
        en: 'Anteater Pokémon',
        ja: 'アリクイポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '58.0',
        en: '127.9',
        ja: '58.0'
      }
    },
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: {
          es: 'Combustión',
          en: 'Combustion',
          ja: 'かえん' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Absorbe aire por el orificio de la cola para prender las llamas que expulsa. Si la abertura se obstruye, enferma.',
      en: 'There’s a hole in its tail that allows it to draw in the air it needs to keep its fire burning. If the hole gets blocked, this Pokémon will fall ill.',
      ja: 'しっぽの　穴から　空気を 取りこみ　炎を　燃やす｡　穴を 塞がれると　具合が　悪くなる｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 49,
    order: 49,
    number: 49,
    pokedex: 757,
    name: {
      es: 'Salandit',
      en: 'Salandit',
      ja: 'ヤトウモリ' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartoxina',
        en: 'Toxic Lizard Pokémon',
        ja: 'どくトカゲポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '4.8',
        en: '10.6',
        ja: '4.8'
      }
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: 'Arañazo',
          en: 'Scratch',
          ja: 'ひっかく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [50],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Provoca a sus presas para conducirlas a zonas rocosas y estrechas, donde las aturde con un gas venenoso antes de acabar con ellas.',
      en: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
      ja: '獲物を　挑発して　狭い 岩場に　誘い込み　フラフラになる 毒ガスを　吹きかけ　仕留めるのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [50, 301, 302, 357]
  },
  {
    id: 50,
    order: 50,
    number: 50,
    pokedex: 758,
    name: {
      es: 'Salazzle',
      en: 'Salazzle',
      ja: 'エンニュート' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartoxina',
        en: 'Toxic Lizard Pokémon',
        ja: 'どくトカゲポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '22.2',
        en: '48.9',
        ja: '22.2'
      }
    },
    artist: 'hatachu',
    attacks: [
      {
        name: {
          es: 'Garras de Fuego',
          en: 'Fire Claws',
          ja: 'ほのおのツメ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Convierte a sus rivales en devotos súbditos tras marearlos con su gas venenoso y seducirlos con los cautivadores movimientos de su cuerpo.',
      en: 'Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.',
      ja: '毒ガスで　クラクラにした　相手を 妖艶な　身のこなしで　誘惑し 忠実な　しもべに　してしまう｡' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [49, 301, 302, 357]
  },
  {
    id: 51,
    order: 51,
    number: 51,
    pokedex: 850,
    name: {
      es: 'Sizzlipede',
      en: 'Sizzlipede',
      ja: 'ヤクデ' 
    },
    info: {
      type: {
        es: 'Pokémon Radiador',
        en: 'Radiator Pokémon',
        ja: 'はつねつポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '1.0',
        en: '2.2',
        ja: '1.0'
      }
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [52],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Genera calor consumiendo el gas inflamable que almacena en su cuerpo. Los círculos amarillos del abdomen están particularmente calientes.',
      en: 'It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.',
      ja: '体に　溜めた　可燃ガスで 発熱｡　とくに　お腹の 黄色い　部分が　熱いのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [52]
  },
  {
    id: 52,
    order: 52,
    number: 52,
    pokedex: 851,
    name: {
      es: 'Centiskorch',
      en: 'Centiskorch',
      ja: 'マルヤクデ' 
    },
    info: {
      type: {
        es: 'Pokémon Radiador',
        en: 'Radiator Pokémon',
        ja: 'はつねつポケモン'
      },
      height: {
        es: '3',
        en: '9\'10"',
        ja: '3'
      },
      weight: {
        es: '120.0',
        en: '264.6',
        ja: '120.0'
      }
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: 'Llamarada',
          en: 'Fire Blast',
          ja: 'だいもんじ' 
        },
        damage: 130,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 1 Energía Fuego de este Pokémon.',
          en: 'Discard 1 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando genera calor, su temperatura corporal alcanza aproximadamente los 800 °C. Usa el cuerpo a modo de látigo para lanzarse al ataque.',
      en: 'When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.',
      ja: '発熱時の　体温は　およそ ８００度｡　体を　鞭のように しならせて　跳びかかってくるぞ｡' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [51]
  },
  {
    id: 53,
    order: 53,
    number: 53,
    pokedex: 7,
    name: {
      es: 'Squirtle',
      en: 'Squirtle',
      ja: 'ゼニガメ' 
    },
    info: {
      type: {
        es: 'Pokémon Tortuguita',
        en: 'Tiny Turtle Pokémon',
        ja: 'かめのこポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '9.0',
        en: '19.8',
        ja: '9.0'
      }
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: 'Pistola Agua',
          en: 'Water Gun',
          ja: 'みずでっぽう' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [54],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
      en: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
      ja: '長い　首を　甲羅のなかに 引っこめるとき　勢いよく 水鉄砲を　発射する｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [54, 55, 56, 232, 256, 612, 608]
  },
  {
    id: 54,
    order: 54,
    number: 54,
    pokedex: 8,
    name: {
      es: 'Wartortle',
      en: 'Wartortle',
      ja: 'カメール' 
    },
    info: {
      type: {
        es: 'Pokémon Tortuga',
        en: 'Turtle Pokémon',
        ja: 'かめポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '22.5',
        en: '49.6',
        ja: '22.5'
      }
    },
    artist: 'Nelnal',
    attacks: [
      {
        name: {
          es: 'Chapoteo Ondulante',
          en: 'Wave Splash',
          ja: 'スプラッシュ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [55],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.',
      en: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
      ja: '長生きの　シンボルと　されている｡ 甲羅に　苔が　ついているのは とくに　長生きの　カメールだ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 55, 56, 232, 256, 612, 608]
  },
  {
    id: 55,
    order: 55,
    number: 55,
    pokedex: 9,
    name: {
      es: 'Blastoise',
      en: 'Blastoise',
      ja: 'カメックス' 
    },
    info: {
      type: {
        es: 'Pokémon Armazón',
        en: 'Shellfish Pokémon',
        ja: 'こうらポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '85.5',
        en: '188.5',
        ja: '85.5'
      }
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: 'Hidrobomba',
          en: 'Hydro Pump',
          ja: 'ハイドロポンプ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si este Pokémon tiene por lo menos 2 Energías Agua adicionales unidas a él, este ataque hace 60 puntos de daño más.',
          en: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.',
          ja: '追加で水エネルギーが2個ついているなら、60ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
      en: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
      ja: '体が　重たく　のしかかって 相手を　気絶させる｡ ピンチの　ときは　殻に　隠れる｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 232, 612, 608]
  },
  {
    id: 56,
    order: 56,
    number: 56,
    pokedex: 9,
    name: {
      es: 'Blastoise EX',
      en: 'Blastoise EX',
      ja: 'カメックス EX' 
    },
    info: {
      type: {
        es: 'Pokémon Armazón',
        en: 'Shellfish Pokémon',
        ja: 'こうらポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '85.5',
        en: '188.5',
        ja: '85.5'
      }
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: 'Surf',
          en: 'Surf',
          ja: 'なみのり' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      },
      {
        name: {
          es: 'Hidrobazuca',
          en: 'Hydro Bazooka',
          ja: 'ハイドロバズーカ' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si este Pokémon tiene por lo menos 2 Energías Agua adicionales unidas a él, este ataque hace 60 puntos de daño más.',
          en: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.',
          ja: '追加で水エネルギーが2個ついているなら、60ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
      en: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
      ja: '体が　重たく　のしかかって 相手を　気絶させる｡ ピンチの　ときは　殻に　隠れる｡' 
    },
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 232, 256, 612]
  },
  {
    id: 57,
    order: 57,
    number: 57,
    pokedex: 54,
    name: {
      es: 'Psyduck',
      en: 'Psyduck',
      ja: 'コダック' 
    },
    info: {
      type: {
        es: 'Pokémon Pato',
        en: 'Duck Pokémon',
        ja: 'あひるポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '19.6',
        en: '43.2',
        ja: '19.6'
      }
    },
    artist: 'Shibuzoh',
    attacks: [
      {
        name: {
          es: 'Dolor de Cabeza',
          en: 'Headache',
          ja: 'ずつう' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.',
          en: 'Your opponent can’t use any Supporter cards from their hand during their next turn.',
          ja: '次の相手の番、相手は手札からサポートを出して使えない。' 
        }
      }
    ],
    evolve: [58],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes.',
      en: 'It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.',
      ja: 'いつも　頭痛に　悩まされている｡ この　頭痛が　激しくなると 不思議な　力を　使いはじめる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [58]
  },
  {
    id: 58,
    order: 58,
    number: 58,
    pokedex: 55,
    name: {
      es: 'Golduck',
      en: 'Golduck',
      ja: 'ゴルダック' 
    },
    info: {
      type: {
        es: 'Pokémon Pato',
        en: 'Duck Pokémon',
        ja: 'あひるポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '76.6',
        en: '168.9',
        ja: '76.6'
      }
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: 'Filo Agua',
          en: 'Aqua Edge',
          ja: 'アクアエッジ' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando nada a toda velocidad usando sus largas extremidades palmeadas, su frente comienza a brillar.',
      en: 'When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.',
      ja: '水かきのついた　長い　手足を 使い　全力で　泳ぎだすと なぜか　額が　光り輝く｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [57]
  },
  {
    id: 59,
    order: 59,
    number: 59,
    pokedex: 60,
    name: {
      es: 'Poliwag',
      en: 'Poliwag',
      ja: 'ニョロモ' 
    },
    info: {
      type: {
        es: 'Pokémon Renacuajo',
        en: 'Tadpole Pokémon',
        ja: 'おたまポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '12.4',
        en: '27.3',
        ja: '12.4'
      }
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: 'Aleta Afilada',
          en: 'Razor Fin',
          ja: 'ひれカッター' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [60],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es más ágil en el agua que en la tierra. La espiral de su vientre no es más que parte de sus vísceras que se ven a través de la piel.',
      en: 'For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.',
      ja: '歩くよりも　泳ぐほうが　得意｡ お腹の　渦巻き模様は 透けて　見える　内臓の　一部だ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [60, 61]
  },
  {
    id: 60,
    order: 60,
    number: 60,
    pokedex: 61,
    name: {
      es: 'Poliwhirl',
      en: 'Poliwhirl',
      ja: 'ニョロゾ' 
    },
    info: {
      type: {
        es: 'Pokémon Renacuajo',
        en: 'Tadpole Pokémon',
        ja: 'おたまポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '20.0',
        en: '44.1',
        ja: '20.0'
      }
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: 'Puño con Nudillos',
          en: 'Knuckle Punch',
          ja: 'げんこつ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [61],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mirar fijamente la espiral de su vientre provoca somnolencia, por lo que puede usarse como alternativa a las nanas para dormir a los niños.',
      en: 'Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.',
      ja: 'お腹の　渦は　ずっと　見ていると 眠くなる｡　子守唄がわりに 子どもを　寝つかせるのにも　使う｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [59, 61]
  },
  {
    id: 61,
    order: 61,
    number: 61,
    pokedex: 62,
    name: {
      es: 'Poliwrath',
      en: 'Poliwrath',
      ja: 'ニョロボン' 
    },
    info: {
      type: {
        es: 'Pokémon Renacuajo',
        en: 'Tadpole Pokémon',
        ja: 'おたまポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '54.0',
        en: '119',
        ja: '54.0'
      }
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: 'Megapuño',
          en: 'Mega Punch',
          ja: 'メガトンパンチ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: {
          es: 'Contragolpe',
          en: 'Counterattack',
          ja: 'はんげき' 
        },
      description: {
       es: 'Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon atacante sufre 20 puntos de daño.',
       en: 'If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon, do 20 damage to the Attacking Pokémon.',
       ja: 'このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンに20ダメージ。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su cuerpo es puro músculo. Logra abrirse paso por aguas gélidas partiendo el hielo con sus fornidos brazos.',
      en: 'Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.',
      ja: '全身が　筋肉の　塊｡ 寒い　海でも　たくましい　腕で 流氷を　砕き　突き進む｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [59, 60]
  },
  {
    id: 62,
    order: 62,
    number: 62,
    pokedex: 72,
    name: {
      es: 'Tentacool',
      en: 'Tentacool',
      ja: 'メノクラゲ' 
    },
    info: {
      type: {
        es: 'Pokémon Medusa',
        en: 'Jellyfish Pokémon',
        ja: 'くらげポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '45.5',
        en: '100.3',
        ja: '45.5'
      }
    },
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: {
          es: 'Bofetada Gentil',
          en: 'Gentle Slap',
          ja: 'ひっぱたく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [63],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus facultades natatorias son más bien escasas, por lo que se limita a flotar a la deriva en aguas poco profundas en busca de alimento.',
      en: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.',
      ja: '泳ぐ　力は　強くは　ない｡ 浅い　海の　水面を 漂いながら　獲物を　探す｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [63]
  },
  {
    id: 63,
    order: 63,
    number: 63,
    pokedex: 73,
    name: {
      es: 'Tentacruel',
      en: 'Tentacruel',
      ja: 'ドククラゲ' 
    },
    info: {
      type: {
        es: 'Pokémon Medusa',
        en: 'Jellyfish Pokémon',
        ja: 'くらげポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '55.0',
        en: '121.3',
        ja: '55.0'
      }
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: 'Tentáculos Venenosos',
          en: 'Poison Tentacles',
          ja: 'どくのしょくしゅ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent’s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Si las esferas rojas que tiene a ambos lados de la cabeza brillan con intensidad, indica que está a punto de lanzar ondas ultrasónicas.',
      en: 'When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.',
      ja: '頭の　赤い　玉の　光が 強くなったら　要注意｡ 超音波を　放つ　前触れだ｡' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [62]
  },
  {
    id: 64,
    order: 64,
    number: 64,
    pokedex: 86,
    name: {
      es: 'Seel',
      en: 'Seel',
      ja: 'パウワウ' 
    },
    info: {
      type: {
        es: 'Pokémon León Marino',
        en: 'Sea Lion Pokémon',
        ja: 'あしかポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '90.0',
        en: '198.4',
        ja: '90.0'
      }
    },
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: {
          es: 'Golpe Cabeza',
          en: 'Headbutt',
          ja: 'ずつき' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [65],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La gruesa capa de grasa que le permite nadar sin problemas en aguas frías le da más de un sofoco en climas más cálidos.',
      en: 'Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.',
      ja: '分厚い　脂肪の　おかげで　寒い 海も　へっちゃらだけど　暖かい 海では　ちょっと　バテやすいのだ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [65]
  },
  {
    id: 65,
    order: 65,
    number: 65,
    pokedex: 87,
    name: {
      es: 'Dewgong',
      en: 'Dewgong',
      ja: 'ジュゴン' 
    },
    info: {
      type: {
        es: 'Pokémon León Marino',
        en: 'Sea Lion Pokémon',
        ja: 'あしかポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '120.0',
        en: '264.6',
        ja: '120.0'
      }
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: 'Surf',
          en: 'Surf',
          ja: 'なみのり' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Le gusta tenderse al sol en la playa después de comer, ya que aumentar su temperatura corporal le facilita la digestión.',
      en: 'It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.',
      ja: '食事の　後は　砂浜で 日光浴を　している｡　体温を あげて　消化を　よく　するのだ｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [64]
  },
  {
    id: 66,
    order: 66,
    number: 66,
    pokedex: 90,
    name: {
      es: 'Shellder',
      en: 'Shellder',
      ja: 'シェルダー' 
    },
    info: {
      type: {
        es: 'Pokémon Bivalvo',
        en: 'Bivalve Pokémon',
        ja: '2まいがいポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: 'Bofetón Lengua',
          en: 'Tongue Slap',
          ja: 'ベロではたく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [67],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Está metido en una concha más dura que el diamante, pero tiene un cuerpo muy blando.',
      en: 'It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.',
      ja: 'ダイヤモンドよりも　硬い殻に 覆われている｡　しかし　中は 意外と　柔らかい｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [67]
  },
  {
    id: 67,
    order: 67,
    number: 67,
    pokedex: 91,
    name: {
      es: 'Cloyster',
      en: 'Cloyster',
      ja: 'パルシェン' 
    },
    info: {
      type: {
        es: 'Pokémon Bivalvo',
        en: 'Bivalve Pokémon',
        ja: '2まいがいポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '132.5',
        en: '292.1',
        ja: '132.5'
      }
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: 'Surf',
          en: 'Surf',
          ja: 'なみのり' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: {
          es: 'Caparazón',
          en: 'Shell Armor',
          ja: 'シェルアーマー' 
        },
      description: {
       es: 'Los ataques hacen -10 puntos de daño a este Pokémon.',
       en: 'This Pokémon takes −10 damage from attacks.',
       ja: 'このポケモンが受けるワザのダメージを-10する。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'A los Cloyster que viven en las fuertes corrientes marinas les crecen largas y afiladas púas en la concha.',
      en: 'Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.',
      ja: '潮の　流れが　激しい　海に 生息している　パルシェンの 殻の　トゲは　大きく　鋭い｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [66]
  },
  {
    id: 68,
    order: 68,
    number: 68,
    pokedex: 98,
    name: {
      es: 'Krabby',
      en: 'Krabby',
      ja: 'クラブ' 
    },
    info: {
      type: {
        es: '',
        en: 'River Crab Pokémon',
        ja: 'さわがにポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: 'Agarre',
          en: 'Vise Grip',
          ja: 'はさむ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [69],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es fácil encontrarlo cerca del mar. Las largas pinzas que tiene vuelven a crecer si se las quitan de su sitio.',
      en: 'It can be found near the sea. The large pincers grow back if they are torn out of their sockets.',
      ja: '海の　近くで　見つかる｡ 大きな　ハサミは　もぎとっても あとから　また　生えてくる｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [69]
  },
  {
    id: 69,
    order: 69,
    number: 69,
    pokedex: 99,
    name: {
      es: 'Kingler',
      en: 'Kingler',
      ja: 'キングラー' 
    },
    info: {
      type: {
        es: 'Pokémon Tenaza',
        en: 'Pincer Pokémon',
        ja: 'はさみポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: 'Pinza Letal',
          en: 'KO Crab',
          ja: 'ひっさつクラブ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 2 monedas. Si en las dos sale cara, este ataque hace 80 puntos de daño más.',
          en: 'Flip coins. If all of them are heads, this attack does 80 more damage.',
          ja: 'コインを2回投げ、すべてオモテなら、80ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La pinza tan grande que tiene posee una fuerza de 10 000 CV, pero le cuesta moverla por su gran tamaño.',
      en: 'Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.',
      ja: '硬い　ハサミは　１万馬力の パワーを　もっているが　大きすぎて 動きが　鈍い｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [68]
  },
  {
    id: 70,
    order: 70,
    number: 70,
    pokedex: 116,
    name: {
      es: 'Horsea',
      en: 'Horsea',
      ja: 'タッツー' 
    },
    info: {
      type: {
        es: 'Pokémon Dragón',
        en: 'Dragon Pokémon',
        ja: 'ドラゴンポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '8.0',
        en: '17.6',
        ja: '8.0'
      }
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: 'Pistola Agua',
          en: 'Water Gun',
          ja: 'みずでっぽう' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [71],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Habita en mares de aguas tranquilas. Si se siente en peligro, expulsará por la boca una densa tinta negra para poder huir.',
      en: 'Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.',
      ja: '潮の　流れが　穏やかな　海に　棲む｡ 襲われると　真っ黒な　墨を吐いて その隙に　逃げだす｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [71]
  },
  {
    id: 71,
    order: 71,
    number: 71,
    pokedex: 117,
    name: {
      es: 'Seadra',
      en: 'Seadra',
      ja: 'シードラ' 
    },
    info: {
      type: {
        es: 'Pokémon Dragón',
        en: 'Dragon Pokémon',
        ja: 'ドラゴンポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '25.0',
        en: '55.1',
        ja: '25.0'
      }
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: 'Flecha de Agua',
          en: 'Water Arrow',
          ja: 'ウォーターアロー' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival.',
          en: 'This attack does 50 damage to 1 of your opponent’s Pokémon.',
          ja: '相手のポケモン1匹に50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'En esta especie, es el macho quien se ocupa de la prole. Durante la época de cría, el veneno de las púas de su espalda se vuelve más potente.',
      en: 'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.',
      ja: 'オスが　子どもを　育てる｡ 子育て中は　背中の　トゲの　毒素が 強く　濃くなるのだ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [70]
  },
  {
    id: 72,
    order: 72,
    number: 72,
    pokedex: 118,
    name: {
      es: 'Goldeen',
      en: 'Goldeen',
      ja: 'トサキント' 
    },
    info: {
      type: {
        es: 'Pokémon Pez Color',
        en: 'Goldfish Pokémon',
        ja: 'きんぎょポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '15.0',
        en: '33.1',
        ja: '15.0'
      }
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: 'Vuelta',
          en: 'Flop',
          ja: 'はねまわる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [73],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus aletas pectorales, caudal y dorsal ondean gráciles en el agua. Por eso se le llama el Bailarín Acuático.',
      en: 'Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.',
      ja: '背びれ　胸びれ　尾びれが 優雅に　たなびくので 水の踊り子　と呼ばれる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [73]
  },
  {
    id: 73,
    order: 73,
    number: 73,
    pokedex: 119,
    name: {
      es: 'Seaking',
      en: 'Seaking',
      ja: 'アズマオウ' 
    },
    info: {
      type: {
        es: 'Pokémon Pez Color',
        en: 'Goldfish Pokémon',
        ja: 'きんぎょポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '39.0',
        en: '86',
        ja: '39.0'
      }
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: 'Azar Cuerno',
          en: 'Horn Hazard',
          ja: 'つのでつつく' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: 'Lanza 1 moneda. Si sale cruz, este ataque no hace nada.',
          en: 'Flip a coin. If tails, this attack does nothing.',
          ja: 'コインを1回投げウラなら、このワザは失敗。'
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'En otoño gana algo de peso para atraer a posibles parejas y se cubre de llamativos colores.',
      en: 'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.',
      ja: '秋になると　プロポーズのため 体に　脂が　のってきて とても　きれいな色に　変化する｡' 
    },
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [72]
  },
  {
    id: 74,
    order: 74,
    number: 74,
    pokedex: 120,
    name: {
      es: 'Staryu',
      en: 'Staryu',
      ja: 'ヒトデマン' 
    },
    info: {
      type: {
        es: 'Pokémon Estrella',
        en: 'Star Shape Pokémon',
        ja: 'ほしがたポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '34.5',
        en: '76.1',
        ja: '34.5'
      }
    },
    artist: 'Hiroki Asanuma',
    attacks: [
      {
        name: {
          es: 'Palmetazo',
          en: 'Smack',
          ja: 'ひらてうち' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [75],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'A finales de verano, se pueden ver grupos de Staryu en la orilla de la playa sincronizando el brillo de sus núcleos a ritmo regular.',
      en: 'If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.',
      ja: '夏の終わりの　浜辺に　行くと 規則的な　リズムで　光る ヒトデマンの　群れが　見られるよ｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [75, 76, 257]
  },
  {
    id: 75,
    order: 75,
    number: 75,
    pokedex: 121,
    name: {
      es: 'Starmie',
      en: 'Starmie',
      ja: 'スターミー' 
    },
    info: {
      type: {
        es: 'Pokémon Misterioso',
        en: 'Mysterious Pokémon',
        ja: 'なぞのポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '80.0',
        en: '176.4',
        ja: '80.0'
      }
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: 'Chapoteo Ondulante',
          en: 'Wave Splash',
          ja: 'スプラッシュ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su órgano central, conocido como núcleo, brilla con los colores del arcoíris cuando se dispone a liberar sus potentes poderes psíquicos.',
      en: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.',
      ja: '強烈な　サイコパワーを　放つとき コアと　呼ばれる　器官が 七色に　きらめく｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [74]
  },
  {
    id: 76,
    order: 76,
    number: 76,
    pokedex: 121,
    name: {
      es: 'Starmie EX',
      en: 'Starmie EX',
      ja: 'スターミー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Misterioso',
        en: 'Mysterious Pokémon',
        ja: 'なぞのポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '80.0',
        en: '176.4',
        ja: '80.0'
      }
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: 'Hidroestallido',
          en: 'Hydro Splash',
          ja: 'ハイドロスプラッシュ' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su órgano central, conocido como núcleo, brilla con los colores del arcoíris cuando se dispone a liberar sus potentes poderes psíquicos.',
      en: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.',
      ja: '強烈な　サイコパワーを　放つとき コアと　呼ばれる　器官が 七色に　きらめく｡' 
    },
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [74, 257]
  },
  {
    id: 77,
    order: 77,
    number: 77,
    pokedex: 129,
    name: {
      es: 'Magikarp',
      en: 'Magikarp',
      ja: 'コイキング' 
    },
    info: {
      type: {
        es: 'Pokémon Pez',
        en: 'Fish Pokémon',
        ja: 'さかなポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '10.0',
        en: '22',
        ja: '10.0'
      }
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: 'Salpicadura',
          en: 'Splash',
          ja: 'はねる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [78],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Un Pokémon desvalido y patético. A veces es capaz de saltar alto, pero rara vez más de 2 m.',
      en: 'An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.',
      ja: '力のない　情けない　ポケモン｡ たまに　高く　飛び跳ねても ２メートルを　超すのが　やっとだ｡' 
    },
    health: 30,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [78, 303, 304, 233, 362]
  },
  {
    id: 78,
    order: 78,
    number: 78,
    pokedex: 130,
    name: {
      es: 'Gyarados',
      en: 'Gyarados',
      ja: 'ギャラドス' 
    },
    info: {
      type: {
        es: 'Pokémon Atrocidad',
        en: 'Atrocious Pokémon',
        ja: 'きょうあくポケモン'
      },
      height: {
        es: '6.5',
        en: '21\'4"',
        ja: '6.5'
      },
      weight: {
        es: '235.0',
        en: '518.1',
        ja: '235.0'
      }
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: 'Hiperrayo',
          en: 'Hyper Beam',
          ja: 'はかいこうせん' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Descarta 1 Energía aleatoria del Pokémon Activo de tu rival.',
          en: 'Discard 1 random Energy from your opponent’s Active Pokémon.',
          ja: '相手のバトルポケモンからエネルギーをランダムに1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando aparece, monta en cólera. No deja de estar furioso hasta que lo destruye todo.',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '一度　姿を　現すと まわりを　すべて　焼き尽くさないと 怒りが　鎮まらない　という｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [77, 303, 233]
  },
  {
    id: 79,
    order: 79,
    number: 79,
    pokedex: 131,
    name: {
      es: 'Lapras',
      en: 'Lapras',
      ja: 'ラプラス' 
    },
    info: {
      type: {
        es: 'Pokémon Transporte',
        en: 'Transport Pokémon',
        ja: 'のりものポケモン'
      },
      height: {
        es: '2.5',
        en: '8\'2"',
        ja: '2.5'
      },
      weight: {
        es: '220.0',
        en: '485',
        ja: '220.0'
      }
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: 'Hidrobomba',
          en: 'Hydro Pump',
          ja: 'ハイドロポンプ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: 'Si este Pokémon tiene por lo menos 3 Energías Agua adicionales unidas a él, este ataque hace 70 puntos de daño más.',
          en: 'If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage.',
          ja: '追加で水エネルギーが3個ついているなら、70ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon posee una notable inteligencia y un corazón de oro. Entona un canto melodioso mientras surca el mar.',
      en: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
      ja: '賢く　心優しい　ポケモン｡ きれいな　歌声を　響かせながら 海の上を　泳いで　いく｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [234]
  },
  {
    id: 80,
    order: 80,
    number: 80,
    pokedex: 134,
    name: {
      es: 'Vaporeon',
      en: 'Vaporeon',
      ja: 'シャワーズ' 
    },
    info: {
      type: {
        es: 'Pokémon Burbuja',
        en: 'Bubble Jet Pokémon',
        ja: 'あわはきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '29.0',
        en: '63.9',
        ja: '29.0'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Drenaje Burbujas',
          en: 'Bubble Drain',
          ja: 'バブルドレイン' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Cura 30 puntos de daño a este Pokémon.',
          en: 'Heal 30 damage from this Pokémon.',
          ja: 'このポケモンのHPを30回復。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vive cerca del agua. Su cola termina en una aleta parecida a la de un pez, por lo que hay gente que lo confunde con una sirena.',
      en: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
      ja: '水辺に　棲むが　尻尾には 魚のような　ひれが　残っていて 人魚と　間違う　人もいる｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [206, 207, 208, 305, 347, 498, 248, 358, 609]
  },
  {
    id: 81,
    order: 81,
    number: 81,
    pokedex: 138,
    name: {
      es: 'Omanyte',
      en: 'Omanyte',
      ja: 'オムナイト' 
    },
    info: {
      type: {
        es: 'Pokémon Espiral',
        en: 'Spiral Pokémon',
        ja: 'うずまきポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '7.5',
        en: '16.5',
        ja: '7.5'
      }
    },
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: {
          es: 'Pistola Agua',
          en: 'Water Gun',
          ja: 'みずでっぽう' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [82],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Varios ejemplares han escapado o bien han sido liberados tras su restauración, lo que comienza a suscitar una serie de problemas.',
      en: 'Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.',
      ja: '復元されたあと　逃げだしたり 逃がしてしまう　ものが　いるため 問題に　なりつつあるのだ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [82, 216]
  },
  {
    id: 82,
    order: 82,
    number: 82,
    pokedex: 139,
    name: {
      es: 'Omastar',
      en: 'Omastar',
      ja: 'オムスター' 
    },
    info: {
      type: {
        es: 'Pokémon Espiral',
        en: 'Spiral Pokémon',
        ja: 'うずまきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '35.0',
        en: '77.2',
        ja: '35.0'
      }
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: 'Torbellino Ancestral',
          en: 'Ancient Whirlpool',
          ja: 'こだいのうずしお' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.',
          en: 'During your opponent’s next turn, the Defending Pokémon can’t attack.',
          ja: '次の相手の番、このワザを受けたポケモンはワザが使えない。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se cree que se extinguió porque el excesivo tamaño y peso de su concha le impedían moverse con rapidez para capturar presas.',
      en: 'Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.',
      ja: '大きく　重い　殻のせいで 動きが　鈍くなり　獲物を　獲れずに 絶滅した　という｡' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [81, 216]
  },
  {
    id: 83,
    order: 83,
    number: 83,
    pokedex: 144,
    name: {
      es: 'Articuno',
      en: 'Articuno',
      ja: 'フリーザー' 
    },
    info: {
      type: {
        es: 'Pokémon Congelar',
        en: 'Freeze Pokémon',
        ja: '	れいとうポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '55.4',
        en: '122.1',
        ja: '55.4'
      }
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: 'Rayo Hielo',
          en: 'Ice Beam',
          ja: 'れいとうビーム' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.',
          en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
          ja: 'コインを1回投げてオモテなら、相手のバトルポケモンをマヒにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.',
      en: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
      ja: '青く　美しい　羽根は　氷で できていると　言われている｡　長い 尾を　たなびかせ　雪山を　飛ぶ｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.PARALYZE
    ],
    found: [
      EXPANSION.MEWTWO
    ],
  },
  {
    id: 84,
    order: 84,
    number: 84,
    pokedex: 144,
    name: {
      es: 'Articuno EX',
      en: 'Articuno EX',
      ja: 'フリーザー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Congelar',
        en: 'Freeze Pokémon',
        ja: '	れいとうポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '55.4',
        en: '122.1',
        ja: '55.4'
      }
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: 'Ala Gélida',
          en: 'Ice Wing',
          ja: 'アイスウイング' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: {
          es: 'Ventisca',
          en: 'Blizzard',
          ja: 'ふぶき' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
          ja: '相手のベンチポケモン全員にも10ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.',
      en: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
      ja: '青く　美しい　羽根は　氷で できていると　言われている｡　長い 尾を　たなびかせ　雪山を　飛ぶ｡' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [258, 275]
  },
  {
    id: 85,
    order: 85,
    number: 85,
    pokedex: 580,
    name: {
      es: 'Ducklett',
      en: 'Ducklett',
      ja: 'コアルヒー' 
    },
    info: {
      type: {
        es: 'Pokémon Ave Agua',
        en: 'Water Bird Pokémon',
        ja: 'みずどりポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '5.5',
        en: '12.1',
        ja: '5.5'
      }
    },
    artist: 'Yumi',
    attacks: [
      {
        name: {
          es: 'Aleteo',
          en: 'Flap',
          ja: 'はばたく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [86],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se ve atacado, las plumas que lo recubren despiden ráfagas de agua que lo ayudan a escapar.',
      en: 'When attacked, it uses its feathers to splash water, escaping under cover of the spray.',
      ja: '敵に　襲われると　全身の　羽毛から 水しぶきを　出す｡ 水煙に　紛れて　逃げるのだ｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [86]
  },
  {
    id: 86,
    order: 86,
    number: 86,
    pokedex: 581,
    name: {
      es: 'Swanna',
      en: 'Swanna',
      ja: 'スワンナ' 
    },
    info: {
      type: {
        es: 'Pokémon Cisne',
        en: 'White Bird Pokémon',
        ja: 'しらとりポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '24.2',
        en: '53.2',
        ja: '24.2'
      }
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: 'Ataque Ala',
          en: 'Wing Attack',
          ja: 'つばさでうつ' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Aunque no lo parezca por su grácil elegancia, puede batir con fuerza las alas y volar durante miles de kilómetros.',
      en: 'Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.',
      ja: '優雅な　みかけに　よらず 翼で　力強く　羽ばたき　 数千キロ　飛び続けられる｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [85]
  },
  {
    id: 87,
    order: 87,
    number: 87,
    pokedex: 656,
    name: {
      es: 'Froakie',
      en: 'Froakie',
      ja: 'ケロマツ' 
    },
    info: {
      type: {
        es: 'Pokémon Burburrana',
        en: 'Bubble Frog Pokémon',
        ja: 'あわがえるポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '7.0',
        en: '15.4',
        ja: '7.0'
      }
    },
    artist: 'Aya Kusube',
    attacks: [
      {
        name: {
          es: 'Vuelta',
          en: 'Flop',
          ja: 'はねまわる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [88],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Secreta burbujas tanto por la espalda como por el pecho. Gracias a la elasticidad de estas, puede parar ataques y reducir el daño recibido.',
      en: 'It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.',
      ja: '胸と　背中から　泡を　出す｡ 弾力のある　泡で　攻撃を　受け止めて ダメージを　減らす｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [88, 89, 598]
  },
  {
    id: 88,
    order: 88,
    number: 88,
    pokedex: 657,
    name: {
      es: 'Frogadier',
      en: 'Frogadier',
      ja: 'ゲコガシラ' 
    },
    info: {
      type: {
        es: 'Pokémon Burburrana',
        en: 'Bubble Frog Pokémon',
        ja: 'あわがえるポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '10.9',
        en: '24',
        ja: '10.9'
      }
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: 'Goteo de Agua',
          en: 'Water Drip',
          ja: 'みずきり' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [89],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Puede lanzar piedras envueltas en burbujas con tal puntería que acierta latas vacías a 30 metros de distancia.',
      en: 'It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.',
      ja: '泡で　包んだ　小石を　投げる 技を　使う｡　３０メートル　先の 空き缶に　当てる　コントロール｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [87, 89, 598]
  },
  {
    id: 89,
    order: 89,
    number: 89,
    pokedex: 658,
    name: {
      es: 'Greninja',
      en: 'Greninja',
      ja: 'ゲッコウガ' 
    },
    info: {
      type: {
        es: 'Pokémon Ninja',
        en: 'Ninja Pokémon',
        ja: 'しのびポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '40.0',
        en: '88.2',
        ja: '40.0'
      }
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: 'Golpe Niebla',
          en: 'Mist Slash',
          ja: 'かすみぎり' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Shuriken de Agua',
          en: 'Water Shuriken',
          ja: 'みずしゅりけん' 
        },
      description: {
          es: 'Una vez durante tu turno, puedes hacer 20 puntos de daño a 1 de los Pokémon de tu rival.',
          en: 'Once during your turn, you may do 20 damage to 1 of your opponent’s Pokémon.',
          ja: '自分の番に1回使える。相手のポケモン1匹に20ダメージ。' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Comprime el agua y crea estrellas ninja con las que ataca al enemigo. Cuando las hace girar a gran velocidad cortan en dos hasta el metal.',
      en: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.',
      ja: '水を　圧縮して　手裏剣を　作り出す｡ 高速回転させて　飛ばすと 金属も　真っ二つ｡' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [87, 88, 598]
  },
  {
    id: 90,
    order: 90,
    number: 90,
    pokedex: 771,
    name: {
      es: 'Pyukumuku',
      en: 'Pyukumuku',
      ja: 'ナマコブシ' 
    },
    info: {
      type: {
        es: 'Pokémon Pepino Mar',
        en: 'Sea Cucumber Pokémon',
        ja: 'なまこポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '1.2',
        en: '2.6',
        ja: '1.2'
      }
    },
    artist: 'OOYAMA',
    attacks: [
      {
        name: {
          es: 'Golpe de Lluvia',
          en: 'Rain Splash',
          ja: 'みずかけ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vive en los cálidos bajíos de las playas. Si se topa con un enemigo, ataca golpeándolo sin cesar con las entrañas que expulsa por la boca.',
      en: 'It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.',
      ja: '温かい　浅瀬で　暮らす｡ 敵に　出会うと　体内器官を 口から　出して　殴りつける｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 91,
    order: 91,
    number: 91,
    pokedex: 779,
    name: {
      es: 'Bruxish',
      en: 'Bruxish',
      ja: 'ハギギシリ' 
    },
    info: {
      type: {
        es: 'Pokémon Rechinante',
        en: 'Gnash Teeth Pokémon',
        ja: 'はぎしりポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '19.0',
        en: '41.9',
        ja: '19.0'
      }
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: 'Segundo Golpe',
          en: 'Second Strike',
          ja: 'きずをえぐる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 60 puntos de daño más.',
          en: 'If your opponent’s Active Pokémon has damage on it, this attack does 60 more damage.',
          ja: '相手のバトルポケモンがダメージを受けているなら、60ダメージ追加。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Estimula su cerebro al rechinar los dientes con fuerza. Libera el poder psíquico que genera por la protuberancia que tiene en la cabeza.',
      en: 'It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.',
      ja: '強く　歯ぎしり　することで　脳を 刺激｡　生みだした　サイコパワーを 頭の　突起から　撃ち出す｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 92,
    order: 92,
    number: 92,
    pokedex: 872,
    name: {
      es: 'Snom',
      en: 'Snom',
      ja: 'ユキハミ' 
    },
    info: {
      type: {
        es: 'Pokémon Gusano',
        en: 'Worm Pokémon',
        ja: 'いもむしポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '3.8',
        en: '8.4',
        ja: '3.8'
      }
    },
    artist: 'ryoma uratsuka',
    attacks: [
      {
        name: {
          es: 'Apisonar',
          en: 'Ram',
          ja: 'ぶつかる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [93],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se alimenta de la nieve acumulada en el terreno. Como adora la suave nieve virgen, irá comiendo montaña arriba hasta llegar a la cima.',
      en: 'It eats snow that has accumulated on the ground. It prefers soft, freshly fallen snow, so it will eat its way up a mountain, aiming for the peak.',
      ja: 'エサは　地面に　積もった　雪｡ 柔らかな　新雪を　好み 山頂　目指して　食べ進む｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [93]
  },
  {
    id: 93,
    order: 93,
    number: 93,
    pokedex: 873,
    name: {
      es: 'Frosmoth',
      en: 'Frosmoth',
      ja: 'モスノウ' 
    },
    info: {
      type: {
        es: 'Pokémon Polillahielo',
        en: 'Frost Moth Pokémon',
        ja: 'こおりがポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '42.0',
        en: '92.6',
        ja: '42.0'
      }
    },
    artist: 'aoki',
    attacks: [
      {
        name: {
          es: 'Nieve Polvo',
          en: 'Powder Snow',
          ja: 'こなゆき' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Dormido.',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '相手のバトルポケモンをねむりにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Puede percibir con sus antenas las corrientes atmosféricas. Impregna sus escamas de frío y las hace caer como si fuera nieve.',
      en: 'Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.',
      ja: '触角で　大気の　流れを　察知する｡ りんぷんに　冷気を　織り交ぜ 雪のように　降らせる｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [92]
  },
  {
    id: 94,
    order: 94,
    number: 94,
    pokedex: 25,
    name: {
      es: 'Pikachu',
      en: 'Pikachu',
      ja: 'ピカチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [95, 311, 312, 605, 594, 588]
  },
  {
    id: 95,
    order: 95,
    number: 95,
    pokedex: 26,
    name: {
      es: 'Raichu',
      en: 'Raichu',
      ja: 'ライチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: 'Rayo',
          en: 'Thunderbolt',
          ja: '10まんボルト' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Descarta todas las Energías de este Pokémon.',
          en: 'Discard all Energy from this Pokémon.',
          ja: 'このポケモンからエネルギーをすべてトラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos.',
      en: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
      ja: '尻尾が　アースの　役目をはたして 電気を　地面に　逃がすので 自分自身は　しびれたりしない｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [94, 311, 312, 605, 594, 588]
  },
  {
    id: 96,
    order: 96,
    number: 96,
    pokedex: 25,
    name: {
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: 'ピカチュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Circuito Circular',
          en: 'Circle Circuit',
          ja: 'エレキサークル' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Eléctricos en Banca.',
          en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
          ja: '自分のベンチの雷ポケモンの数×30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [259, 281, 285]
  },
  {
    id: 97,
    order: 97,
    number: 97,
    pokedex: 81,
    name: {
      es: 'Magnemite',
      en: 'Magnemite',
      ja: 'コイル' 
    },
    info: {
      type: {
        es: 'Pokémon Imán',
        en: 'Magnet Pokémon',
        ja: 'じしゃくポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: 'Bola Relámpago',
          en: 'Lighting Ball',
          ja: 'ピッカリだま' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [98],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Las unidades laterales crean ondas electromagnéticas que contrarrestan la gravedad y le permiten flotar.',
      en: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.',
      ja: '左右にある　ユニットから　だす 電磁波で　重力を さえぎって　空に　浮かぶのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [98, 423, 424, 425, 603]
  },
  {
    id: 98,
    order: 98,
    number: 98,
    pokedex: 82,
    name: {
      es: 'Magneton',
      en: 'Magneton',
      ja: 'レアコイル' 
    },
    info: {
      type: {
        es: 'Pokémon Imán',
        en: 'Magnet Pokémon',
        ja: 'じしゃくポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: 'Ataque Giratorio',
          en: 'Spinning Attack',
          ja: 'かいてんアタック' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
        es: 'Carga Voltio',
        en: 'Volt Charge',
        ja: 'ボルトチャージ' 
      },
      description: {
       es: 'Una vez durante tu turno, puedes unir 1 Energía Eléctrica de tu área de Energía a este Pokémon.',
       en: 'Once during your turn, you may take a Lighting Energy from your Energy Zone and attach it to this Pokémon.',
       ja: '自分の番に1回使える。自分のエネルギーゾーンから雷エネルギーを1個出し、このポケモンにつける。' 
     }
    },
    evolve: [425],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tres Magnemite se enlazan mediante una intensa fuerza magnética. Provoca un fuerte pitido en los oídos a quien se le acerque.',
      en: 'Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.',
      ja: '３つのコイルは　強い　磁力で 結びついている｡　そばに寄ると 強い　耳鳴りに　襲われる｡' 
    },
    health: 80,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [97, 423, 424, 425, 603]
  },
  {
    id: 99,
    order: 99,
    number: 99,
    pokedex: 100,
    name: {
      es: 'Voltorb',
      en: 'Voltorb',
      ja: 'ビリリダマ' 
    },
    info: {
      type: {
        es: 'Pokémon Bola',
        en: 'Ball Pokémon',
        ja: 'ボールポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '10.4',
        en: '22.9',
        ja: '10.4'
      }
    },
    artist: 'SATOSHI NAKAI',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [100],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se mueve rodando. Si el terreno es irregular, una chispa provocada por algún bache lo hará explotar.',
      en: 'It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.',
      ja: '転がって　移動するので 地面が　デコボコだと ショックで　爆発してしまう｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [100, 426, 427, 235]
  },
  {
    id: 100,
    order: 100,
    number: 100,
    pokedex: 101,
    name: {
      es: 'Electrode',
      en: 'Electrode',
      ja: 'マルマイン' 
    },
    info: {
      type: {
        es: 'Pokémon Bola',
        en: 'Sphere Pokémon',
        ja: 'きゅうたいポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '66.6',
        en: '146.8',
        ja: '66.6'
      }
    },
    artist: 'Asako Ito',
    attacks: [
      {
        name: {
          es: 'Bola Voltio',
          en: 'Electro Ball',
          ja: 'エレキボール' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuanta más energía almacena, mayor velocidad alcanza, aunque aumenta también el riesgo de que explote.',
      en: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
      ja: '電気エネルギーを　溜めこむほど 高速で　動けるようになるが そのぶん　爆発　しやすい｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [99, 426, 427, 235]
  },
  {
    id: 101,
    order: 101,
    number: 101,
    pokedex: 125,
    name: {
      es: 'Electabuzz',
      en: 'Electabuzz',
      ja: 'エレブー' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Ryuta Fuse',
    attacks: [
      {
        name: {
          es: 'Puño Trueno',
          en: 'Thunder Punch',
          ja: 'かみなりパンチ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más. Si sale cruz, este Pokémon también se hace 20 puntos de daño a sí mismo.',
          en: 'Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself.',
          ja: 'コインを1回投げオモテなら、40ダメージ追加。ウラなら、このポケモンにも20ダメージ。' 
        }
      },
    ],
    evolve: [429],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es habitual que las centrales eléctricas cuenten con Pokémon de tipo Tierra para hacer frente a los Electabuzz ávidos de electricidad.',
      en: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
      ja: '電気を　狙う　エレブーの　対策に じめんポケモンを　置く 発電所は　多い｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.RECOIL
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [313, 428, 429, 615]
  },
  {
    id: 102,
    order: 102,
    number: 102,
    pokedex: 135,
    name: {
      es: 'Jolteon',
      en: 'Jolteon',
      ja: 'サンダース' 
    },
    info: {
      type: {
        es: 'Pokémon Relámpago',
        en: '	Lightning Pokémon',
        ja: 'かみなりポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '24.5',
        en: '54',
        ja: '24.5'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Pin Misil',
          en: 'Pin Missile',
          ja: 'ミサイルばり' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara.',
          en: 'Flip 4 coins. This attack does 40 damage for each heads.',
          ja: 'コインを4回投げ、オモテの数×40ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Concentra la débil actividad eléctrica de sus células para lanzar dañinas descargas.',
      en: 'It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.',
      ja: '細胞が　出している　弱い 電気を　ひとまとめにして 強力な　電撃を　放つ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [206, 207, 208, 347, 498, 248, 609]
  },
  {
    id: 103,
    order: 103,
    number: 103,
    pokedex: 145,
    name: {
      es: 'Zapdos',
      en: 'Zapdos',
      ja: 'サンダー' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '52.6',
        en: '116',
        ja: '52.6'
      }
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: 'Trueno Rabioso',
          en: 'Raging Thunder',
          ja: 'らくらい' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca.',
          en: 'This attack also does 30 damage to 1 of your Benched Pokémon.',
          ja: '自分のベンチポケモン1匹にも30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta.',
      en: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
      ja: '電気を　自在に　操る｡ 真っ黒な　雷雲の　中に 巣があると　言い伝えられている｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.ATTACK_BENCH,
      CardSpecialConditionENUM.RECOIL
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
  },
  {
    id: 104,
    order: 104,
    number: 104,
    pokedex: 145,
    name: {
      es: 'Zapdos EX',
      en: 'Zapdos EX',
      ja: 'サンダー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '52.6',
        en: '116',
        ja: '52.6'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Picotazo',
          en: 'Peck',
          ja: 'つつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: {
          es: 'Huracán Atronador',
          en: 'Thundering Hurricane',
          ja: 'ハリケーンサンダー' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
        es: 'Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.',
        en: 'Flip 4 coins. This attack does 50 damage for each heads.',
        ja: '	コインを4回投げ、オモテの数×50ダメージ。' 
      }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta.',
      en: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
      ja: '電気を　自在に　操る｡ 真っ黒な　雷雲の　中に 巣があると　言い伝えられている｡' 
    },
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [260, 276]
  },
  {
    id: 105,
    order: 105,
    number: 105,
    pokedex: 522,
    name: {
      es: 'Blitzle',
      en: 'Blitzle',
      ja: 'シママ' 
    },
    info: {
      type: {
        es: 'Pokémon Electrizado',
        en: 'Electrified Pokémon',
        ja: 'たいでんポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '29.8',
        en: '65.7',
        ja: '29.8'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: 'Electropatada',
          en: 'Zap Kick',
          ja: 'エレキック' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [106],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Aparece cuando nubes envueltas en rayos encapotan el cielo. Atrapa rayos con su crin y almacena electricidad.',
      en: 'When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.',
      ja: '雷雲で　空が　覆われると 現れる｡　たてがみで　雷を キャッチして　電気を　ためる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [106]
  },
  {
    id: 106,
    order: 106,
    number: 106,
    pokedex: 523,
    name: {
      es: 'Zebstrika',
      en: 'Zebstrika',
      ja: 'ゼブライカ' 
    },
    info: {
      type: {
        es: '	Pokémon Rayo',
        en: 'Thunderbolt Pokémon',
        ja: 'らいでんポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '79.5',
        en: '175.3',
        ja: '79.5'
      }
    },
    artist: 'Misa Tsutsui',
    attacks: [
      {
        name: {
          es: 'Lanza del Trueno',
          en: 'Thunder Spear',
          ja: 'サンダーアロー' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival.',
          en: 'This attack does 30 damage to 1 of your opponent’s Pokémon.',
          ja: '相手のポケモン1匹に30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es un Pokémon con mucho temperamento. Cuando se enoja, lanza rayos desde su crin en todas direcciones.',
      en: 'When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.',
      ja: '激しい　気性の　持ち主｡ 荒ぶると　たてがみから　雷を 四方八方に　放電する｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [105]
  },
  {
    id: 107,
    order: 107,
    number: 107,
    pokedex: 602,
    name: {
      es: 'Tynamo',
      en: 'Tynamo',
      ja: 'シビシラス' 
    },
    info: {
      type: {
        es: 'Pokémon Electropez',
        en: 'EleFish Pokémon',
        ja: 'でんきうおポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '0.3',
        en: '0.7',
        ja: '0.3'
      }
    },
    artist: 'Asako Ito',
    attacks: [
      {
        name: {
          es: 'Carga Diminuta',
          en: 'Tiny Charge',
          ja: 'プチでんき' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [108],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La electricidad de uno solo es insignificante, pero, si multitud de Tynamo se conectan, consiguen la potencia de un rayo.',
      en: 'While one alone doesn’t have much power, a chain of many Tynamo can be as powerful as lightning.',
      ja: '１匹の　電力は　小さいが たくさんの　シビシラスが　つながると 雷と　同じ　威力になる｡' 
    },
    health: 30,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [108, 109]
  },
  {
    id: 108,
    order: 108,
    number: 108,
    pokedex: 603,
    name: {
      es: 'Eelektrik',
      en: 'Eelektrik',
      ja: 'シビビール' 
    },
    info: {
      type: {
        es: 'Pokémon Electropez',
        en: 'EleFish Pokémon',
        ja: 'でんきうおポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '22.0',
        en: '48.5',
        ja: '22.0'
      }
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: 'Rayo de Cabeza',
          en: 'Head Bolt',
          ja: 'ヘッドボルト' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [109],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Las motas redondas componen su aparato electrificador. Enrolla a su rival y deja que la corriente fluya por ellas.',
      en: 'They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.',
      ja: '丸い　模様が　発電　器官｡ 相手に　巻きついてから　模様を 押しつけて　電気を　流すのだ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [107, 109]
  },
  {
    id: 109,
    order: 109,
    number: 109,
    pokedex: 604,
    name: {
      es: 'Eelektross',
      en: 'Eelektross',
      ja: 'シビルドン' 
    },
    info: {
      type: {
        es: 'Pokémon Electropez',
        en: 'EleFish Pokémon',
        ja: 'でんきうおポケモン'
      },
      height: {
        es: '2.1',
        en: '6\'11"',
        ja: '2.1'
      },
      weight: {
        es: '80.5',
        en: '177.5',
        ja: '80.5'
      }
    },
    artist: 'hatachu',
    attacks: [
      {
        name: {
          es: 'Colmillo Rayo',
          en: 'Thunder Fang',
          ja: 'かみなりのキバ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.',
          en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
          ja: 'コインを1回投げてオモテなら、相手のバトルポケモンをマヒにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sale del mar con la fuerza de sus brazos y ataca a sus presas en la costa. Luego se las lleva de vuelta al mar.',
      en: 'They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.',
      ja: '腕の　力で　海から　はい出し 水辺の　獲物に　襲いかかる｡ 一瞬で　海へ　引きずりこむ｡' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.PARALYZE
    ],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [107, 108]
  },
  {
    id: 110,
    order: 110,
    number: 110,
    pokedex: 694,
    name: {
      es: 'Helioptile',
      en: 'Helioptile',
      ja: 'エリキテル' 
    },
    info: {
      type: {
        es: 'Pokémon Generador',
        en: 'Generator Pokémon',
        ja: 'はつでんポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: 'Coletón',
          en: 'Tail Whap',
          ja: 'しっぽではたく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [111],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Extiende los pliegues de la cabeza para absorber la luz del sol y convertirla en electricidad, con la que realiza potentes ataques de tipo Eléctrico.',
      en: 'When spread, the frills on its head act like solar panels, generating the power behind this Pokémon’s electric moves.',
      ja: '頭の　ひだを　広げ　太陽の 光で　発電すると　パワフルな 電気技を　出せるようになる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [111]
  },
  {
    id: 111,
    order: 111,
    number: 111,
    pokedex: 695,
    name: {
      es: 'Heliolisk',
      en: 'Heliolisk',
      ja: 'エレザード' 
    },
    info: {
      type: {
        es: 'Pokémon Generador',
        en: 'Generator Pokémon',
        ja: 'はつでんポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '21.0',
        en: '46.3',
        ja: '21.0'
      }
    },
    artist: 'otumami',
    attacks: [
      {
        name: {
          es: 'Ataque Rápido',
          en: 'Quick Attack',
          ja: 'でんこうせっか' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.',
          en: 'Flip a coin. If heads, this attack does 40 more damage.',
          ja: 'コインを1回投げオモテなら、40ダメージ追加。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Al extender su gorguera y exponerse a la luz solar, genera la energía eléctrica suficiente para cubrir el consumo de una metrópoli entera.',
      en: 'One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.',
      ja: '襟巻を　広げて　太陽光を 浴びると　大都会で　使われる 電気を　１匹で　発電する｡' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [110]
  },
  {
    id: 112,
    order: 112,
    number: 112,
    pokedex: 871,
    name: {
      es: 'Pincurchin',
      en: 'Pincurchin',
      ja: 'バチンウニ' 
    },
    info: {
      type: {
        es: 'Pokémon Erizo de Mar',
        en: 'Sea Urchin Pokémon',
        ja: 'うにポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '1.0',
        en: '2.2',
        ja: '1.0'
      }
    },
    artist: 'Tika Matsuno',
    attacks: [
      {
        name: {
          es: 'Impactrueno',
          en: 'Thunder Shock',
          ja: 'でんきショック' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.',
          en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
          ja: 'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Produce electricidad al digerir los alimentos. Raspa las algas de las rocas con los cinco duros dientes que tiene para comérselas.',
      en: 'This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.',
      ja: 'エサを　消化するときに　電気を 生みだす｡　５本の　硬い　歯で 海藻を　こそぎ落とし　食べる｡' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.PARALYZE
    ],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 113,
    order: 113,
    number: 113,
    pokedex: 35,
    name: {
      es: 'Clefairy',
      en: 'Clefairy',
      ja: 'ピッピ' 
    },
    info: {
      type: {
        es: 'Pokémon Hada',
        en: 'Fairy Pokémon',
        ja: 'ようせいポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '7.5',
        en: '16.5',
        ja: '7.5'
      }
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: 'Bofetón',
          en: 'Slap',
          ja: 'ビンタ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [114],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se dice que la felicidad llegará a quien vea un grupo de Clefairy bailando a la luz de la luna llena.',
      en: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
      ja: '満月の夜　ピッピが　集まって ダンスを　踊るようすを　見ると しあわせに　なれると　言われている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [114, 595]
  },
  {
    id: 114,
    order: 114,
    number: 114,
    pokedex: 36,
    name: {
      es: 'Clefable',
      en: 'Clefable',
      ja: 'ピクシー' 
    },
    info: {
      type: {
        es: 'Pokémon Hada',
        en: 'Fairy Pokémon',
        ja: 'ようせいポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '40.0',
        en: '88.2',
        ja: '40.0'
      }
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: 'Disparo Mágico',
          en: 'Magical Shot',
          ja: 'マジカルショット' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon de aspecto feérico, raramente visto por los humanos, corre a esconderse en cuanto detecta que hay alguien cerca.',
      en: 'A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.',
      ja: '妖精の　仲間で　めったに 人前に　出てこない｡　気配を 感じて　すぐに　逃げてしまうようだ｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [113, 595]
  },
  {
    id: 115,
    order: 115,
    number: 115,
    pokedex: 63,
    name: {
      es: 'Abra',
      en: 'Abra',
      ja: 'ケーシィ' 
    },
    info: {
      type: {
        es: 'Pokémon Psi',
        en: 'Psi Pokémon',
        ja: 'ねんりきポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '19.5',
        en: '43',
        ja: '19.5'
      }
    },
    artist: 'Aya Kusube',
    attacks: [
      {
        name: {
          es: 'Teletransporte',
          en: 'Teleport',
          ja: 'テレポート' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Cambia este Pokémon por 1 de tus Pokémon en Banca.',
          en: 'Switch this Pokémon with 1 of your Benched Pokémon.',
          ja: 'このポケモンをベンチポケモンを入れ替える。' 
        }
      },
    ],
    evolve: [116],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de usar sus poderes psíquicos aun estando dormido. Al parecer, el contenido del sueño influye en sus facultades.',
      en: 'This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.',
      ja: '寝ながら　超能力を　操る｡ 夢の　内容が　使う　力に　影響する｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [116, 117, 236]
  },
  {
    id: 116,
    order: 116,
    number: 116,
    pokedex: 64,
    name: {
      es: 'Kadabra',
      en: 'Kadabra',
      ja: 'ユンゲラー' 
    },
    info: {
      type: {
        es: 'Pokémon Psi',
        en: 'Psi Pokémon',
        ja: 'ねんりきポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '56.5',
        en: '124.6',
        ja: '56.5'
      }
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: 'Superrayo Psi',
          en: 'Super Psy Bolt',
          ja: 'ちょうねんりき' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [117],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Duerme suspendido en el aire gracias a sus poderes psíquicos. La cola, de una flexibilidad extraordinaria, hace las veces de almohada.',
      en: 'Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.',
      ja: 'サイコパワーで　宙に　浮いたまま 眠る｡　弾力に　優れた　しっぽを 枕がわりに　するぞ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [115, 117, 236]
  },
  {
    id: 117,
    order: 117,
    number: 117,
    pokedex: 65,
    name: {
      es: 'Alakazam',
      en: 'Alakazam',
      ja: 'フーディン' 
    },
    info: {
      type: {
        es: 'Pokémon Psi',
        en: 'Psi Pokémon',
        ja: 'ねんりきポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '48.0',
        en: '105.8',
        ja: '48.0'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Psíquico',
          en: 'Psychic',
          ja: 'サイコキネシス' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.',
          en: 'This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.',
          ja: '相手のバトルポケモンのエネルギーの数×30ダメージ追加。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee una capacidad intelectual fuera de lo común que le permite recordar todo lo sucedido desde el instante de su nacimiento.',
      en: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
      ja: '非常に　高い　知能を　持つ｡ 生まれてから　死ぬまでの　できごとを すべて　覚えている　という｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [115, 116, 236]
  },
  {
    id: 118,
    order: 118,
    number: 118,
    pokedex: 79,
    name: {
      es: 'Slowpoke',
      en: 'Slowpoke',
      ja: 'ヤドン' 
    },
    info: {
      type: {
        es: 'Pokémon Atontado',
        en: 'Dopey Pokémon',
        ja: 'まぬけポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '36.0',
        en: '79.4',
        ja: '36.0'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Coletón',
          en: 'Tail Whap',
          ja: 'しっぽではたく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [119],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Increíblemente lento y torpe. Tarda cinco segundos en sentir dolor si lo atacan.',
      en: 'It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.',
      ja: '動きが　のろく　間抜け｡ 叩かれても　５秒　たってから 痛さを　感じるほどだ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [119, 237]
  },
  {
    id: 119,
    order: 119,
    number: 119,
    pokedex: 80,
    name: {
      es: 'Slowbro',
      en: 'Slowbro',
      ja: 'ヤドラン' 
    },
    info: {
      type: {
        es: 'Pokémon Ermitaño',
        en: 'Hermit Crab Pokémon',
        ja: 'やどかりポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '78.5',
        en: '173.1',
        ja: '78.5'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Superrayo Psi',
          en: 'Super Psy Bolt',
          ja: 'ちょうねんりき' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Según parece, cuando Slowpoke fue a pescar al mar, un Shellder le mordió la cola y así evolucionó a Slowbro.',
      en: 'When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.',
      ja: 'ヤドンが　海へ　エサを 取りにいったとき　シェルダーに 尻尾を　かまれ　ヤドランになった｡' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [118, 237]
  },
  {
    id: 120,
    order: 120,
    number: 120,
    pokedex: 92,
    name: {
      es: 'Gastly',
      en: 'Gastly',
      ja: 'ゴース' 
    },
    info: {
      type: {
        es: 'Pokémon Gas',
        en: 'Gas Pokémon',
        ja: 'ガスじょうポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '0.1',
        en: '0.2',
        ja: '0.1'
      }
    },
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: {
          es: 'Gas Sofocante',
          en: 'Suffocating Gas',
          ja: 'ガスでつつむ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [121],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su estrategia consiste en envolver al rival con su cuerpo gaseoso y envenenarlo a través de la piel.',
      en: 'It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.',
      ja: 'ガス状の　体で　まとわりつき 獲物の　皮膚から　少しずつ 毒を　送り込んで　弱らせる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [121, 122, 123, 261, 277, 599]
  },
  {
    id: 121,
    order: 121,
    number: 121,
    pokedex: 93,
    name: {
      es: 'Haunter',
      en: 'Haunter',
      ja: 'ゴースト' 
    },
    info: {
      type: {
        es: 'Pokémon Gas',
        en: 'Gas Pokémon',
        ja: 'ガスじょうポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '0.1',
        en: '0.2',
        ja: '0.1'
      }
    },
    artist: 'Nisota Niso',
    attacks: [
      {
        name: {
          es: 'Fuego Fatuo',
          en: 'Will-O-Wisp',
          ja: 'おにび' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [122],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Le gusta acechar en la oscuridad y tocarles el hombro a sus víctimas con su mano gaseosa. Estas se quedan temblando para siempre.',
      en: 'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.',
      ja: '暗闇にまぎれ　ガスの手を　伸ばし 人の肩を　叩くのが　好き｡ 触られると　震えが　止まらない｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 122, 123, 261, 277, 599]
  },
  {
    id: 122,
    order: 122,
    number: 122,
    pokedex: 94,
    name: {
      es: 'Gengar',
      en: 'Gengar',
      ja: 'ゲンガー' 
    },
    info: {
      type: {
        es: 'Pokémon Sombra',
        en: 'Shadow Pokémon',
        ja: 'シャドーポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '40.5',
        en: '89.3',
        ja: '40.5'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'Chinchar',
          en: 'Bother',
          ja: 'いやがらせ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: 'Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.',
          en: 'Your opponent can’t use any Supporter cards from their hand during their next turn.',
          ja: '次の相手の番、相手は手札からサポートを出して使えない。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.',
      en: 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.',
      ja: '命を　奪おうと　決めた 獲物の　影に　潜り込み じっと　チャンスを　狙ってる｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 599]
  },
  {
    id: 123,
    order: 123,
    number: 123,
    pokedex: 94,
    name: {
      es: 'Gengar EX',
      en: 'Gengar EX',
      ja: 'ゲンガー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Sombra',
        en: 'Shadow Pokémon',
        ja: 'シャドーポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '40.5',
        en: '89.3',
        ja: '40.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Disparo Embrujado',
          en: 'Spooky Shot',
          ja: 'ホロウショット' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: {
          es: 'Hechizo Sombrío',
          en: 'Shadowy Spellbind',
          ja: 'かげのじゅばく' 
        },
      description: {
       es: 'Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.',
       en: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.',
       ja: 'このポケモンがバトル場にいるかぎり、相手は手札からサポートカードを出して使えない。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.',
      en: 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.',
      ja: '命を　奪おうと　決めた 獲物の　影に　潜り込み じっと　チャンスを　狙ってる｡' 
    },
    health: 170,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 261, 277, 392]
  },
  {
    id: 124,
    order: 124,
    number: 124,
    pokedex: 96,
    name: {
      es: 'Drowzee',
      en: 'Drowzee',
      ja: 'スリープ' 
    },
    info: {
      type: {
        es: 'Pokémon Hipnosis',
        en: 'Hypnosis Pokémon',
        ja: 'さいみんポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '32.4',
        en: '71.4',
        ja: '32.4'
      }
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: 'Farfullar',
          en: 'Mumble',
          ja: 'つぶやく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [125],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Recuerda todos los sueños que engulle. Raramente come sueños de adultos porque los de los niños están más ricos.',
      en: 'It remembers every dream it eats. It rarely eats the dreams of adults because children’s are much tastier.',
      ja: '食べた夢は　全部　覚えている｡ 子どもの　夢のほうが　美味しいので めったに　大人の　夢は食べない｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [125]
  },
  {
    id: 125,
    order: 125,
    number: 125,
    pokedex: 97,
    name: {
      es: 'Hypno',
      en: 'Hypno',
      ja: 'スリーパー' 
    },
    info: {
      type: {
        es: 'Pokémon Hipnosis',
        en: 'Hypnosis Pokémon',
        ja: 'さいみんポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '75.6',
        en: '166.7',
        ja: '75.6'
      }
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psypunch',
          ja: 'サイコパンチ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Péndulo de sueño',
          en: 'Sleep Pendulum',
          ja: 'ねむりのふりこ' 
        },
      description: {
       es: 'Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.',
       en: 'Once during your turn, you may flip a coin. If heads, your opponent’s Active Pokémon is now Asleep.',
       ja: '自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando mira al enemigo, usa diversos poderes psíquicos como la hipnosis.',
      en: 'When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.',
      ja: '相手と　目が　合ったときに 催眠術など　数々の 超能力を　使うという｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.SLEEP
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [124]
  },
  {
    id: 126,
    order: 126,
    number: 126,
    pokedex: 122,
    name: {
      es: 'Mr.Mime',
      en: 'Mr.Mime',
      ja: 'バリヤード' 
    },
    info: {
      type: {
        es: 'Pokémon Barrera',
        en: 'Barrier Pokémon',
        ja: 'バリアーポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '54.5',
        en: '120.2',
        ja: '54.5'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Ataque Barrera',
          en: 'Barrier Attack',
          ja: 'バリアアタック' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Durante el próximo turno de tu rival, los ataques hacen -20 puntos de daño a este Pokémon.',
          en: 'During your opponent’s next turn, this Pokémon takes −20 damage from attacks.',
          ja: '次の相手の番、このポケモンが受けるワザのダメージを-20する。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Muchos estudiosos sostienen que el desarrollo de sus enormes manos se debe a su afán por practicar la pantomima.',
      en: 'The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.',
      ja: '大きな　手のひらは　パントマイムを するために　発達　したと 考える　学者も　多い｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 127,
    order: 127,
    number: 127,
    pokedex: 124,
    name: {
      es: 'Jynx',
      en: 'Jynx',
      ja: 'ルージュラ' 
    },
    info: {
      type: {
        es: 'Pokémon Forma Humana',
        en: 'Human Shape Pokémon',
        ja: 'ひとがたポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '40.6',
        en: '89.5',
        ja: '40.6'
      }
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: 'Psíquico',
          en: 'Psychic',
          ja: 'サイコキネシス' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.',
          en: 'This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.',
          ja: '相手のバトルポケモンのエネルギーの数×20ダメージ' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus particulares gritos recuerdan al lenguaje humano. Algunos artistas han compuesto temas específicamente para estos Pokémon.',
      en: 'Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.',
      ja: '人間の　言葉のような　不思議な 鳴き声｡　ルージュラに　歌わせる 曲を　作る　音楽家もいる｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 128,
    order: 128,
    number: 128,
    pokedex: 150,
    name: {
      es: 'Mewtwo',
      en: 'Mewtwo',
      ja: 'ミュウツー' 
    },
    info: {
      type: {
        es: 'Pokémon Genético',
        en: 'Genetic Pokémon',
        ja: 'いでんしポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '122.0',
        en: '269',
        ja: '122.0'
      }
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: 'Estallido Vigoroso',
          en: 'Power Blast',
          ja: 'パワーブラスト' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Psíquica de este Pokémon.',
          en: 'Discard 2 Psychic Energy from this Pokémon.',
          ja: 'このポケモンから超エネルギーを2個トラッシュ' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '１人の　科学者が　何年も 恐ろしい　遺伝子　研究を 続けた　結果　誕生した｡' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [382]
  },
  {
    id: 129,
    order: 129,
    number: 129,
    pokedex: 150,
    name: {
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: 'ミュウツー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Genético',
        en: 'Genetic Pokémon',
        ja: 'いでんしポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '122.0',
        en: '269',
        ja: '122.0'
      }
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: 'Esfera Psíquica',
          en: 'Psychic Sphere',
          ja: 'ねんどうだん' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Guía Psi',
          en: 'Psydrive',
          ja: 'サイコドライブ' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Psíquica de este Pokémon.',
          en: 'Discard 2 Psychic Energy from this Pokémon.',
          ja: 'このポケモンから超エネルギーを2個トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '１人の　科学者が　何年も 恐ろしい　遺伝子　研究を 続けた　結果　誕生した｡' 
    },
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [262, 282, 286]
  },
  {
    id: 130,
    order: 130,
    number: 130,
    pokedex: 280,
    name: {
      es: 'Ralts',
      en: 'Ralts',
      ja: 'ラルトス' 
    },
    info: {
      type: {
        es: 'Pokémon Sensible',
        en: 'Feeling Pokémon',
        ja: 'きもちポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.6',
        en: '14.6',
        ja: '6.6'
      }
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: 'Apisonar',
          en: 'Ram',
          ja: 'ぶつかる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [131],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Gracias a los cuernos rojos de su cabeza, puede captar lo que sienten las personas.',
      en: 'The horns on its head provide a strong power that enables it to sense people’s emotions.',
      ja: '人の　感情を　頭の 赤い　ツノで　敏感に キャッチする　力を　持つ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [131, 132, 440, 441, 467, 557, 572]
  },
  {
    id: 131,
    order: 131,
    number: 131,
    pokedex: 281,
    name: {
      es: 'Kirlia',
      en: 'Kirlia',
      ja: 'キルリア' 
    },
    info: {
      type: {
        es: 'Pokémon Sensorio',
        en: 'Emotion Pokémon',
        ja: 'かんじょうポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '20.2',
        en: '44.5',
        ja: '20.2'
      }
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: 'Palmetazo',
          en: 'Smack',
          ja: 'ひらてうち' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [132, 467],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Con sus poderes psíquicos puede deformar el espacio a su alrededor y predecir el futuro.',
      en: 'It has a psychic power that enables it to distort the space around it and see into the future.',
      ja: 'サイコパワーを　操り まわりの　空間を　ねじ曲げることで 未来を　見通すことができる｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [130, 132, 440, 441, 467, 557, 572]
  },
  {
    id: 132,
    order: 132,
    number: 132,
    pokedex: 282,
    name: {
      es: 'Gardevoir',
      en: 'Gardevoir',
      ja: 'サーナイト' 
    },
    info: {
      type: {
        es: 'Pokémon Envolvente',
        en: 'Embrace Pokémon',
        ja: 'ほうようポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '48.4',
        en: '106.7',
        ja: '48.4'
      }
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: 'Disparo Psi',
          en: 'Psyshot',
          ja: 'サイコショット' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Psicosombra',
          en: 'Psy Shadow',
          ja: 'トランスシェイド' 
        },
      description: {
       es: 'Una vez durante tu turno, puedes unir 1 Energía Psíquica de tu área de Energía al Pokémon Psíquica en el Puesto Activo.',
       en: 'Once during your turn, you may take a Psychic Energy from your Energy Zone and attach it to the Psychic Pokémon in the Active Spot.',
       ja: '自分の番に1回使える。自分のエネルギーゾーンから超エネルギーを1個出し、バトル場の超ポケモンにつける。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para proteger a su Entrenador, emplea todo su poder psíquico en crear un pequeño agujero negro.',
      en: 'To protect its Trainer, it will expend all its psychic power to create a small black hole.',
      ja: 'トレーナーを　守るためなら サイコパワーを　使いきり 小さな　ブラックホールを　作り出す｡' 
    },
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [130, 131, 440, 441]
  },
  {
    id: 133,
    order: 133,
    number: 133,
    pokedex: 527,
    name: {
      es: 'Woobat',
      en: 'Woobat',
      ja: 'コロモリ' 
    },
    info: {
      type: {
        es: 'Pokémon Murciélago',
        en: 'Bat Pokémon',
        ja: 'こうもりポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '2.1',
        en: '4.6',
        ja: '2.1'
      }
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [134],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Si al alzar la vista en una cueva se ven marcas con forma de corazón en las paredes, es señal de que Woobat la ha convertido en su guarida.',
      en: 'While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it’s evidence that Woobat live there.',
      ja: '洞窟を　見上げて　壁に ハート型の　跡が　あれば コロモリが　棲んでいる　証拠｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [134]
  },
  {
    id: 134,
    order: 134,
    number: 134,
    pokedex: 528,
    name: {
      es: 'Swoobat',
      en: 'Swoobat',
      ja: 'ココロモリ' 
    },
    info: {
      type: {
        es: 'Pokémon Galante',
        en: 'Courting Pokémon',
        ja: 'きゅうあいポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '10.5',
        en: '23.1',
        ja: '10.5'
      }
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: 'Arrumaco',
          en: 'Heart Stamp',
          ja: 'ハートスタンプ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tras emitir sus potentísimas ondas, queda tan exhausto que es incapaz de volar durante un tiempo.',
      en: 'Emitting powerful sound waves tires it out. Afterward, it won’t be able to fly for a little while.',
      ja: '超強力な　音波を 放ったあとは　疲れて しばらく　飛べなくなるよ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [133]
  },
  {
    id: 135,
    order: 135,
    number: 135,
    pokedex: 622,
    name: {
      es: 'Golett',
      en: 'Golett',
      ja: 'ゴビット' 
    },
    info: {
      type: {
        es: 'Pokémon Autómata',
        en: 'Automaton Pokémon',
        ja: 'ゴーレムポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '92.0',
        en: '202.8',
        ja: '92.0'
      }
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: 'Megapuño',
          en: 'Mega Punch',
          ja: 'メガトンパンチ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [136],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Un antiguo Pokémon creado a partir del barro. Se desconoce el motivo por el que algunos ejemplares colocan rocas grandes en hileras.',
      en: 'They were sculpted from clay in ancient times. No one knows why, but some of them are driven to continually line up boulders.',
      ja: '粘土から　生み出された　古代の ポケモン｡　なぜか　大岩を 並べ続ける　ものも　いる｡' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [136]
  },
  {
    id: 136,
    order: 136,
    number: 136,
    pokedex: 623,
    name: {
      es: 'Golurk',
      en: 'Golurk',
      ja: 'ゴルーグ' 
    },
    info: {
      type: {
        es: 'Pokémon Autómata',
        en: 'Automaton Pokémon',
        ja: 'ゴーレムポケモン'
      },
      height: {
        es: '2.8',
        en: '9\'2"',
        ja: '2.8'
      },
      weight: {
        es: '330.0',
        en: '727.5',
        ja: '330.0'
      }
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: 'Doble Lazo',
          en: 'Double Lariat',
          ja: 'ダブルラリアット' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.',
          en: 'Flip 2 coins. This attack does 100 damage for each heads.',
          ja: 'コインを2回投げ、オモテの数×100ダメージ。'
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'En los muros de antiguos castillos se hallan plataformas desde las que los Golurk podían disparar sus rayos como si fueran cañones.',
      en: 'Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.',
      ja: '古代人の　お城の　壁には ゴルーグが　ビームを　撃つための 砲台の　ような　台座が　ある｡' 
    },
    health: 140,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [135]
  },
  {
    id: 137,
    order: 137,
    number: 137,
    pokedex: 27,
    name: {
      es: 'Sandhrew',
      en: 'Sandhrew',
      ja: 'サンド' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '12.0',
        en: '26.5',
        ja: '12.0'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Arañazo',
          en: 'Scratch',
          ja: 'ひっかく' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: [138],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Le gusta revolcarse por la arena seca para eliminar todo rastro de suciedad y humedad en la piel.',
      en: 'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.',
      ja: '乾燥した　砂地で　砂浴びを するのが　好き｡　体に　ついた 汚れと　水気を　落とすのだ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [138]
  },
  {
    id: 138,
    order: 138,
    number: 138,
    pokedex: 28,
    name: {
      es: 'Sandslash',
      en: 'Sandslash',
      ja: 'サンドパン' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '29.5',
        en: '65',
        ja: '29.5'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuanto más seco es el terreno en el que habita, más duras y lisas se vuelven las púas que le recubren la espalda.',
      en: 'The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.',
      ja: '湿度が　低い　土地で　暮らす サンドパンほど　背中の　棘の 手触りは　硬く　滑らかになる｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [137]
  },
  {
    id: 139,
    order: 139,
    number: 139,
    pokedex: 50,
    name: {
      es: 'Diglett',
      en: 'Diglett',
      ja: 'ディグダ' 
    },
    info: {
      type: {
        es: 'Pokémon Topo',
        en: 'Mole Pokémon',
        ja: 'もぐらポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '0.8',
        en: '1.8',
        ja: '0.8'
      }
    },
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: {
          es: 'Bofetón Lodo',
          en: 'Mud-Slap',
          ja: 'どろかけ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [140],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vive 1 m por debajo del suelo, donde se alimenta de raíces. A veces también aparece en la superficie.',
      en: 'It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.',
      ja: '地下１メートルくらいを　掘りすすみ 木の根っこなどを　かじって　生きる｡ たまに　地上に　顔を出す｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [140, 238]
  },
  {
    id: 140,
    order: 140,
    number: 140,
    pokedex: 51,
    name: {
      es: 'Dugtrio',
      en: 'Dugtrio',
      ja: 'ダグトリオ' 
    },
    info: {
      type: {
        es: 'Pokémon Topo',
        en: 'Mole Pokémon',
        ja: 'もぐらポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '33.3',
        en: '73.4',
        ja: '33.3'
      }
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: 'Excavar',
          en: 'Dig',
          ja: 'あなをほる' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.',
          en: 'Flip a coin. If heads, during your opponent’s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.',
          ja: 'コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus tres cabezas suben y bajan para remover la tierra cercana y facilitar así la excavación.',
      en: 'Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.',
      ja: '３つの　頭が　互い違いに 動くのは　まわりの　土を 柔らかくして　掘りやすくするため｡' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [139, 238]
  },
  {
    id: 141,
    order: 141,
    number: 141,
    pokedex: 56,
    name: {
      es: 'Mankey',
      en: 'Mankey',
      ja: 'マンキー' 
    },
    info: {
      type: {
        es: 'Pokémon Mono Cerdo',
        en: 'Pig Monkey Pokémon',
        ja: 'ぶたざるポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '28.8',
        en: '61.7',
        ja: '28.8'
      }
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: 'Patada Baja',
          en: 'Low Kick',
          ja: 'けたぐり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [142],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vive en grupos en las copas de los árboles. Si pierde de vista a su manada, se siente solo y se enfada.',
      en: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
      ja: '木の上で　群れをつくって　暮らす｡ 群れから　はぐれた　マンキーは 寂しくて　すぐに　怒りだす｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [142, 327, 328, 596]
  },
  {
    id: 142,
    order: 142,
    number: 142,
    pokedex: 57,
    name: {
      es: 'Primeape',
      en: 'Primeape',
      ja: 'オコリザル' 
    },
    info: {
      type: {
        es: 'Pokémon Mono Cerdo',
        en: 'Pig Monkey Pokémon',
        ja: 'ぶたざるポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '32.0',
        en: '70.5',
        ja: '32.0'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Devolver Golpe',
          en: 'Fight Back',
          ja: 'やりかえす' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
          es: 'Si este Pokémon ya tiene daño, este ataque hace 60 puntos de daño más.',
          en: 'If this Pokémon has damage on it, this attack does 60 more damage.',
          ja: 'このポケモンがダメージを受けているなら、60ダメージ追加。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se pone furioso si nota que alguien lo está mirando. Persigue a cualquiera que establezca contacto visual con él.',
      en: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
      ja: 'だれかの　視線を　感じただけで 猛烈に　怒りだす｡　そして 目が合った　ものを　追いかけるのだ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [141, 327, 328, 596]
  },
  {
    id: 143,
    order: 143,
    number: 143,
    pokedex: 66,
    name: {
      es: 'Machop',
      en: 'Machop',
      ja: 'ワンリキー' 
    },
    info: {
      type: {
        es: 'Pokémon Superpoder',
        en: 'Superpower Pokémon',
        ja: 'かいりきポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '19.5',
        en: '43',
        ja: '19.5'
      }
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: 'Puño con Nudillos',
          en: 'Knuckle Punch',
          ja: 'げんこつ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [144],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es una masa de músculos y, pese a su pequeño tamaño, tiene fuerza de sobra para levantar en brazos a 100 personas.',
      en: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.',
      ja: '全身が　筋肉になっており 子どもほどの　大きさしかないのに 大人　１００人を　投げ飛ばせる｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [144, 145, 146, 263, 278]
  },
  {
    id: 144,
    order: 144,
    number: 144,
    pokedex: 67,
    name: {
      es: 'Machoke',
      en: 'Machoke',
      ja: 'ゴーリキー' 
    },
    info: {
      type: {
        es: 'Pokémon Superpoder',
        en: 'Superpower Pokémon',
        ja: 'かいりきポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '70.5',
        en: '155.4',
        ja: '70.5'
      }
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: 'Fuerza',
          en: 'Strength',
          ja: 'かいりき' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [145],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su musculoso cuerpo es tan fuerte que usa un cinto antifuerza para controlar sus movimientos.',
      en: 'Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.',
      ja: 'すごく　強靭な　肉体なので パワーセーブ　ベルトを　つけて 強さを　制御している｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 145, 146, 263, 278]
  },
  {
    id: 145,
    order: 145,
    number: 145,
    pokedex: 68,
    name: {
      es: 'Machamp',
      en: 'Machamp',
      ja: 'カイリキー' 
    },
    info: {
      type: {
        es: 'Pokémon Superpoder',
        en: 'Superpower Pokémon',
        ja: 'かいりきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '130.0',
        en: '286.6',
        ja: '130.0'
      }
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: 'Sísmico',
          en: 'Seismic Toss',
          ja: 'ちきゅうなげ' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve rápidamente sus cuatro brazos para asestar incesantes golpes y puñetazos desde todos los ángulos.',
      en: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
      ja: '４本の腕を　すばやく　動かし あらゆる　角度から　休むことなく パンチや　チョップを　叩きこむ｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144]
  },
  {
    id: 146,
    order: 146,
    number: 146,
    pokedex: 68,
    name: {
      es: 'Machamp EX',
      en: 'Machamp EX',
      ja: 'カイリキー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Superpoder',
        en: 'Superpower Pokémon',
        ja: 'かいりきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '130.0',
        en: '286.6',
        ja: '130.0'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Megapuño',
          en: 'Mega Punch',
          ja: 'メガトンパンチ' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve rápidamente sus cuatro brazos para asestar incesantes golpes y puñetazos desde todos los ángulos.',
      en: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
      ja: '４本の腕を　すばやく　動かし あらゆる　角度から　休むことなく パンチや　チョップを　叩きこむ｡' 
    },
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144, 263, 278]
  },
  {
    id: 147,
    order: 147,
    number: 147,
    pokedex: 74,
    name: {
      es: 'Geodude',
      en: 'Geodude',
      ja: 'イシツブテ' 
    },
    info: {
      type: {
        es: 'Pokémon Roca',
        en: 'Rock Pokémon',
        ja: 'がんせきポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '20.0',
        en: '44.1',
        ja: '20.0'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: [148],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Con la edad, su temperamento se amansa y su cuerpo se va alisando hasta adquirir una forma completamente redonda.',
      en: 'Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.',
      ja: '長く　生きた　イシツブテは　角が とれて　まんまる｡　性格も　とても 落ち着いていて　穏やか　なのだ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [148, 149, 329, 330, 331]
  },
  {
    id: 148,
    order: 148,
    number: 148,
    pokedex: 75,
    name: {
      es: 'Graveler',
      en: 'Graveler',
      ja: 'ゴローン' 
    },
    info: {
      type: {
        es: 'Pokémon Roca',
        en: 'Rock Pokémon',
        ja: 'がんせきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '105.0',
        en: '231.5',
        ja: '105.0'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'Rodar',
          en: 'Rollout',
          ja: 'ころがる' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [149],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Escala los riscos de las montañas y, una vez alcanzada la cima, desciende rodando por los senderos.',
      en: 'It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.',
      ja: '崖を　登り　山頂を　目指す｡ てっぺんに　着くなり　すぐに　来た 山道を　転がり　落ちていく｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [147, 149, 329, 330, 331]
  },
  {
    id: 149,
    order: 149,
    number: 149,
    pokedex: 76,
    name: {
      es: 'Golem',
      en: 'Golem',
      ja: 'ゴローニャ' 
    },
    info: {
      type: {
        es: 'Pokémon Megatón',
        en: 'Megaton Pokémon',
        ja: 'メガトンポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '300.0',
        en: '661.4',
        ja: '300.0'
      }
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: 'Doble Filo',
          en: 'Double-Edge',
          ja: 'すてみタックル' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este Pokémon también se hace 50 puntos de daño a sí mismo.',
          en: 'This Pokémon also does 50 damage to itself.',
          ja: 'このポケモンにも50ダメージ' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'A medida que envejece, pierde la facultad de mudar la piel. Se han observado ejemplares de edad avanzada totalmente cubiertos de musgo.',
      en: 'When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.',
      ja: '年老いると　脱皮　しなくなる｡ 長く長く　生きた　ゴローニャの カラは　苔むしていて　緑だ｡' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [147, 148, 329, 330, 331]
  },
  {
    id: 150,
    order: 150,
    number: 150,
    pokedex: 95,
    name: {
      es: 'Onix',
      en: 'Onix',
      ja: 'イワーク' 
    },
    info: {
      type: {
        es: 'Pokémon Serpiente Roca',
        en: 'Rock Snake Pokémon',
        ja: 'いわへびポケモン'
      },
      height: {
        es: '8.8',
        en: '28\'10"',
        ja: '8.8'
      },
      weight: {
        es: '210.0',
        en: '463',
        ja: '210.0'
      }
    },
    artist: 'otumami',
    attacks: [
      {
        name: {
          es: 'Aterrizaje',
          en: 'Land Crush',
          ja: 'ランドクラッシュ' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Al abrirse paso bajo tierra, va absorbiendo todo lo que encuentra. Eso hace que su cuerpo sea así de sólido.',
      en: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
      ja: '地中を　掘り進みながら いろんな　硬いものを　取り込み 頑丈な　体をつくる｡' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [600]
  },
  {
    id: 151,
    order: 151,
    number: 151,
    pokedex: 104,
    name: {
      es: 'Cubone',
      en: 'Cubone',
      ja: 'カラカラ' 
    },
    info: {
      type: {
        es: 'Pokémon Solitario',
        en: 'Lonely Pokémon',
        ja: 'こどくポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: 'Gruñido',
          en: 'Growl',
          ja: 'なきごえ' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.',
          en: 'During your opponent’s next turn, attacks used by the Defending Pokémon do −20 damage.',
          ja: '次の相手の番、このワザを受けたポケモンが使うワザのダメージを-20する。' 
        }
      },
    ],
    evolve: [152],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando llora al acordarse de su madre fallecida, su llanto resuena en el cráneo que lleva en la cabeza.',
      en: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
      ja: '死に別れた　母親を　思い出し 泣くと　頭に　被った　骨の　中で 物悲しく　響くのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [152, 153, 239, 264]
  },
  {
    id: 152,
    order: 152,
    number: 152,
    pokedex: 105,
    name: {
      es: 'Marowak',
      en: 'Marowak',
      ja: 'ガラガラ' 
    },
    info: {
      type: {
        es: 'Pokémon Apilahueso',
        en: 'Bone Keeper Pokémon',
        ja: 'ほねずきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '45.0',
        en: '99.2',
        ja: '45.0'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: 'Derribo Óseo',
          en: 'Bone Beatdown',
          ja: 'ホネなぐり' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Ha evolucionado tras fortalecerse y superar su pena. Ahora lucha con arrojo blandiendo su hueso a modo de arma.',
      en: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.',
      ja: '悲しみを　乗りこえて　たくましく 進化した｡　骨を　武器にして 勇敢に　敵と　渡り合う｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 239]
  },
  {
    id: 153,
    order: 153,
    number: 153,
    pokedex: 105,
    name: {
      es: 'Marowak EX',
      en: 'Marowak EX',
      ja: 'ガラガラ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Apilahueso',
        en: 'Bone Keeper Pokémon',
        ja: 'ほねずきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '45.0',
        en: '99.2',
        ja: '45.0'
      }
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: 'Huesomerang',
          en: 'Bonemerang',
          ja: 'ホネブーメラン' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
          es: 'Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.',
          en: 'Flip 2 coins. This attack does 80 damage for each heads.',
          ja: 'コインを2回投げ、オモテの数×80ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Ha evolucionado tras fortalecerse y superar su pena. Ahora lucha con arrojo blandiendo su hueso a modo de arma.',
      en: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.',
      ja: '悲しみを　乗りこえて　たくましく 進化した｡　骨を　武器にして 勇敢に　敵と　渡り合う｡' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 239, 264]
  },
  {
    id: 154,
    order: 154,
    number: 154,
    pokedex: 106,
    name: {
      es: 'Hitmonlee',
      en: 'Hitmonlee',
      ja: 'サワムラー' 
    },
    info: {
      type: {
        es: 'Pokémon Patada',
        en: 'Kicking Pokémon',
        ja: 'キックポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '49.8',
        en: '109.8',
        ja: '49.8'
      }
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: 'Patada Amplia',
          en: 'Stretch Kick',
          ja: 'のびるキック' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
          es: 'Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival.',
          en: 'This attack does 30 damage to 1 of your opponent’s Benched Pokémon.',
          ja: '相手のベンチポケモン1匹に30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon tiene un sentido del equilibrio increíble. Puede dar patadas desde cualquier posición.',
      en: 'This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.',
      ja: '見事な　バランス感覚｡ どんな　姿勢でも　連続で キックを　放てる　すごい　やつ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MEWTWO,
    ],
  },
  {
    id: 155,
    order: 155,
    number: 155,
    pokedex: 107,
    name: {
      es: 'Hitmonchan',
      en: 'Hitmonchan',
      ja: 'エビワラー' 
    },
    info: {
      type: {
        es: 'Pokémon Puñetazo',
        en: 'Punching Pokémon',
        ja: 'パンチポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '50.2',
        en: '110.7',
        ja: '50.2'
      }
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: 'Puya',
          en: 'Jab',
          ja: 'ジャブ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus puñetazos cortan el aire. Son tan veloces que el mínimo roce podría causar una quemadura.',
      en: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.',
      ja: '空気を　切り裂く　パンチ｡ かすっただけで　火傷に　なるほど パンチの　スピードは　速いのだ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 156,
    order: 156,
    number: 156,
    pokedex: 111,
    name: {
      es: 'Rhyhorn',
      en: 'Rhyhorn',
      ja: 'サイホーン' 
    },
    info: {
      type: {
        es: 'Pokémon Punzante',
        en: 'Spikes Pokémon',
        ja: 'とげとげポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '115.0',
        en: '253.5',
        ja: '115.0'
      }
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [157],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su inteligencia es limitada, aunque posee una fuerza tan considerable que le permite incluso derribar rascacielos con solo embestirlos.',
      en: 'Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.',
      ja: '頭は　悪いが　力が　強く 高層ビルも　体当たりで コナゴナに　粉砕する｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [157, 452, 453, 454, 541]
  },
  {
    id: 157,
    order: 157,
    number: 157,
    pokedex: 112,
    name: {
      es: 'Rhydon',
      en: 'Rhydon',
      ja: 'サイドン' 
    },
    info: {
      type: {
        es: 'Pokémon Taladro',
        en: 'Drill Pokémon',
        ja: 'ドリルポケモン'
      },
      height: {
        es: '1.9',
        en: '6\'3"',
        ja: '1.9'
      },
      weight: {
        es: '120.0',
        en: '265.6',
        ja: '120.0'
      }
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: 'Perforador',
          en: 'Horn Drill',
          ja: 'つのドリル' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [454],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando evoluciona, comienza a andar con las patas traseras. Es capaz de horadar rocas con el cuerno que tiene.',
      en: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.',
      ja: '進化して　後ろ足だけで 立つようになった｡　ツノで　突くと 岩石にも　穴を　開けてしまう｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [156, 452, 453, 454, 541]
  },
  {
    id: 158,
    order: 158,
    number: 158,
    pokedex: 140,
    name: {
      es: 'Kabuto',
      en: 'Kabuto',
      ja: 'カブト' 
    },
    info: {
      type: {
        es: 'Pokémon Armazón',
        en: 'Shellfish Pokémon',
        ja: 'こうらポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '11.5',
        en: '25.4',
        ja: '11.5'
      }
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: 'Ataque Caparazón',
          en: 'Shell Attack',
          ja: 'こうらアタック' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: [159],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Un Pokémon casi extinto. Cada tres días, muda el caparazón, que se va endureciendo de forma progresiva.',
      en: 'This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.',
      ja: 'ほぼ　全滅した　ポケモン｡ ３日に　一度　脱皮して 殻を　どんどん　硬くする｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [159, 217]
  },
  {
    id: 159,
    order: 159,
    number: 159,
    pokedex: 141,
    name: {
      es: 'Kabutops',
      en: 'Kabutops',
      ja: 'カブトプス' 
    },
    info: {
      type: {
        es: 'Pokémon Armazón',
        en: 'Shellfish Pokémon',
        ja: 'こうらポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '40.5',
        en: '89.3',
        ja: '40.5'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: 'Chupavidas',
          en: 'Leech Life',
          ja: 'きゅうけつ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT,],
        description: {
          es: 'Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.',
          en: 'Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.',
          ja: '相手のバトルポケモンに与えたダメージ分、このポケモンのHPを回復。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Despedaza a las presas que atrapa para sorber sus fluidos y deja los restos para que otros Pokémon den buena cuenta de ellos.',
      en: 'Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.',
      ja: '獲物を　切り裂き　体液を　すする｡ 残った　体は ほかのポケモンの　エサになる｡' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [158, 217]
  },
  {
    id: 160,
    order: 160,
    number: 160,
    pokedex: 619,
    name: {
      es: 'Mienfoo',
      en: 'Mienfoo',
      ja: 'コジョフー' 
    },
    info: {
      type: {
        es: 'Pokémon Arte Marcial',
        en: 'Martial Arts Pokémon',
        ja: 'ぶじゅつポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '20.0',
        en: '44.1',
        ja: '20.0'
      }
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: 'Destructor',
          en: 'Pound',
          ja: 'はたく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [161],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Un Mienfoo bien entrenado es capaz de propinar más de cien golpes por minuto.',
      en: 'In one minute, a well-trained Mienfoo can chop with its arms more than 100 times.',
      ja: 'よく鍛えられた　コジョフーは １分で　１００回を　超える チョップを　打つことが　できる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [161]
  },
  {
    id: 161,
    order: 161,
    number: 161,
    pokedex: 620,
    name: {
      es: 'Mienshao',
      en: 'Mienshao',
      ja: 'コジョンド' 
    },
    info: {
      type: {
        es: 'Pokémon Arte Marcial',
        en: 'Martial Arts Pokémon',
        ja: 'ぶじゅつポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '35.5',
        en: '78.3',
        ja: '35.5'
      }
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: 'Patada Espiral',
          en: 'Spiral Kick',
          ja: 'かいてんげり' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se encuentra frente a un oponente de categoría, se arranca parte del pelaje de los brazos a mordiscos para ganar agilidad.',
      en: 'When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.',
      ja: '真の　強敵と　会うと 身軽に　なるため　両手の　毛を 噛み千切り　捨ててしまう｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [160]
  },
  {
    id: 162,
    order: 162,
    number: 162,
    pokedex: 852,
    name: {
      es: 'Clobbopues',
      en: 'Clobbopues',
      ja: 'タタッコ' 
    },
    info: {
      type: {
        es: 'Pokémon Malcriado',
        en: 'Tantrum Pokémon',
        ja: 'だだっこポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: 'Puño con Nudillos',
          en: 'Knuckle Punch',
          ja: 'げんこつ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [163],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Emerge a tierra firme en busca de alimento. Su extrema curiosidad lo induce a golpear con los tentáculos todo lo que entra en su campo visual.',
      en: 'It’s very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.',
      ja: '餌を　求め　地上に　上がる｡ 好奇心旺盛で　目にしたものは とりあえず　触手で　殴る｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [163]
  },
  {
    id: 163,
    order: 163,
    number: 163,
    pokedex: 853,
    name: {
      es: 'Grapploct',
      en: 'Grapploct',
      ja: 'オトスパス' 
    },
    info: {
      type: {
        es: 'Pokémon Jiu-Jitsu',
        en: 'Jujitsu Pokémon',
        ja: 'じゅうじゅつポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '39.0',
        en: '86',
        ja: '39.0'
      }
    },
    artist: 'kurumitsu',
    attacks: [
      {
        name: {
          es: 'Devolver Noqueo',
          en: 'Knock Back',
          ja: 'なぐりとばす' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).',
          en: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
          ja: '相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Todo su cuerpo es una mole de puro músculo. Utiliza los tentáculos para ejecutar técnicas de estrangulamiento con una formidable potencia.',
      en: 'A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.',
      ja: '全身が　筋肉の　塊｡ 触手を　使って　繰りだす 絞め技の　威力は　凄まじい｡' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [162]
  },
  {
    id: 164,
    order: 164,
    number: 164,
    pokedex: 23,
    name: {
      es: 'Ekans',
      en: 'Ekans',
      ja: 'アーボ' 
    },
    info: {
      type: {
        es: 'Pokémon Serpiente',
        en: 'Snake Pokémon',
        ja: 'へびポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '6.9',
        en: '15.2',
        ja: '6.9'
      }
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: 'Mordisco',
          en: 'Bite',
          ja: 'かみつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK,],
      },
    ],
    evolve: [165],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de desencajar la mandíbula para engullir presas enteras mayores que él mismo, tras lo cual se enrosca para descansar.',
      en: 'By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.',
      ja: '顎を　外すことで　自分より 大きな　獲物も　丸呑みに　する｡ 食後は　身体を　丸め　休む｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [165]
  },
  {
    id: 165,
    order: 165,
    number: 165,
    pokedex: 24,
    name: {
      es: 'Arbok',
      en: 'Arbok',
      ja: 'アーボック' 
    },
    info: {
      type: {
        es: 'Pokémon Cobra',
        en: 'Cobra Pokémon',
        ja: 'コブラポケモン'
      },
      height: {
        es: '3.5',
        en: '11\'6"',
        ja: '3.5'
      },
      weight: {
        es: '65.0',
        en: '143.3',
        ja: '65.0'
      }
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: 'Arrinconar',
          en: 'Corner',
          ja: 'おいつめる' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.',
          en: 'During your opponent\'s next turn, the Defending Pokémon can\'t retreat.',
          ja: '次の相手の番、このワザを受けたポケモンはにげるができない。'
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Recientes estudios han llegado a identificar hasta una veintena de patrones distintos que puede presentar el motivo de su cuello.',
      en: 'The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.',
      ja: '最新の　研究で　お腹の 模様は　２０種類　以上の パターンが　あることが　判明｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.CORNER],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [164]
  },
  {
    id: 166,
    order: 166,
    number: 166,
    pokedex: 29,
    name: {
      es: 'Nidoran♀',
      en: 'Nidoran♀',
      ja: 'ニドラン♀' 
    },
    info: {
      type: {
        es: 'Pokémon Pin Veneno',
        en: 'Poison Pin Pokémon',
        ja: 'どくばりポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '7.0',
        en: '15.4',
        ja: '7.0'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Llamar a la Familia',
          en: 'Call for Family',
          ja: 'なかまをよぶ' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: {
          es: 'Pon 1 Nidoran♂ aleatorio de tu baraja en tu Banca.',
          en: 'Put 1 random Nidoran♂ from your deck onto your Bench.',
          ja: '自分の山札から「ニドラン♂」をランダムに1枚、ベンチに出す。' 
        }
      },
    ],
    evolve: [167],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee un olfato más fino que los Nidoran♂. Usa los bigotes para percibir la dirección del viento y buscar comida a sotavento de sus depredadores.',
      en: 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.',
      ja: 'オスよりも　匂いに　敏感｡ ヒゲで　風向きを　確認しながら 風下で　エサを　探すのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [167, 168, 240]
  },
  {
    id: 167,
    order: 167,
    number: 167,
    pokedex: 30,
    name: {
      es: 'Nidorina',
      en: 'Nidorina',
      ja: 'ニドリーナ' 
    },
    info: {
      type: {
        es: 'Pokémon Pin Veneno',
        en: 'Poison Pin Pokémon',
        ja: 'どくばりポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '20.0',
        en: '44.1',
        ja: '20.0'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Mordisco',
          en: 'Bite',
          ja: 'かみつく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: [168],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías al alimentarlas.',
      en: 'The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.',
      ja: '額の　ツノは　子どもに　エサを 与えるときに　刺さらないよう 退化したと　考えられている｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [166, 168, 240]
  },
  {
    id: 168,
    order: 168,
    number: 168,
    pokedex: 31,
    name: {
      es: 'Nidoqueen',
      en: 'Nidoqueen',
      ja: 'ニドクイン' 
    },
    info: {
      type: {
        es: 'Pokémon Taladro',
        en: 'Drill Pokémon',
        ja: 'ドリルポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: 'Flechazo',
          en: 'Lovestrike',
          ja: 'ラブラブアタック' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 50 puntos de daño más por cada uno de tus Nidoking en Banca.',
          en: 'This attack does 50 more damage for each of your Benched Nidoking.',
          ja: '自分のベンチの「ニドキング」の数×50ダメージ追加' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su defensa destaca sobre la capacidad ofensiva. Usa las escamas del cuerpo como una coraza para proteger a su prole de cualquier ataque.',
      en: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.',
      ja: '攻めるよりも　守るほうが　得意｡ 鎧のような　ウロコで　いかなる 攻撃からも　子どもを　守る｡' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [166, 167, 240]
  },
  {
    id: 169,
    order: 169,
    number: 169,
    pokedex: 32,
    name: {
      es: 'Nidoran♂',
      en: 'Nidoran♂',
      ja: 'ニドラン♂' 
    },
    info: {
      type: {
        es: 'Pokémon Pin Veneno',
        en: 'Poison Pin Pokémon',
        ja: 'どくばりポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '9.0',
        en: '19.8',
        ja: '9.0'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'Picotazo',
          en: 'Peck',
          ja: 'つつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: [170],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mantiene sus grandes orejas levantadas, siempre alerta. Si advierte peligro, ataca inoculando una potente toxina con su cuerno frontal.',
      en: 'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.',
      ja: '額の　ツノには　猛毒がある｡ 警戒心が　強く　大きな　耳を つねに　そばだてている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [170, 171, 241]
  },
  {
    id: 170,
    order: 170,
    number: 170,
    pokedex: 33,
    name: {
      es: 'Nidorino',
      en: 'Nidorino',
      ja: 'ニドリーノ' 
    },
    info: {
      type: {
        es: 'Pokémon Pin Veneno',
        en: 'Poison Pin Pokémon',
        ja: 'どくばりポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '19.5',
        en: '43',
        ja: '19.5'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Cornada',
          en: 'Horn Attack',
          ja: 'つのでつく' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [171],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Dondequiera que va, parte rocas con su cuerno, más duro que un diamante, en busca de una Piedra Lunar.',
      en: 'With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.',
      ja: 'ダイヤモンドより　硬い　ツノで 岩石を　砕いて　まわる｡ つきのいしを　探しているのだ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [169, 171, 241]
  },
  {
    id: 171,
    order: 171,
    number: 171,
    pokedex: 34,
    name: {
      es: 'Nidoking',
      en: 'Nidoking',
      ja: 'ニドキング' 
    },
    info: {
      type: {
        es: 'Pokémon Taladro',
        en: 'Drill Pokémon',
        ja: 'ドリルポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '62.0',
        en: '136.7',
        ja: '62.0'
      }
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: 'Cuerno Veneno',
          en: 'Poison Horn',
          ja: 'どくのつの' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent’s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una vez que se desboca, no hay quien lo pare. Solo se calma ante Nidoqueen, su compañera de toda la vida.',
      en: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.',
      ja: '暴れると　手が　つけられなくなるが 長年　連れ添った　ニドクインの 前では　穏やかな　顔に　なる｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [169, 170, 241]
  },
  {
    id: 172,
    order: 172,
    number: 172,
    pokedex: 41,
    name: {
      es: 'Zubat',
      en: 'Zubat',
      ja: 'ズバット' 
    },
    info: {
      type: {
        es: 'Pokémon Murciélago',
        en: 'Bat Pokémon',
        ja: 'こうもりポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '7.5',
        en: '16.5',
        ja: '7.5'
      }
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: 'Planeo',
          en: 'Glide',
          ja: 'かっくう' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [173],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Emite ondas ultrasónicas por la boca para escrutar el entorno, lo que le permite volar con pericia por cuevas angostas.',
      en: 'It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.',
      ja: '口から　出す　超音波で まわりの　様子を　探る｡ 狭い　洞窟も　器用に　飛びまわる｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [173, 242]
  },
  {
    id: 173,
    order: 173,
    number: 173,
    pokedex: 42,
    name: {
      es: 'Golbat',
      en: 'Golbat',
      ja: 'ゴルバット' 
    },
    info: {
      type: {
        es: 'Pokémon Murciélago',
        en: 'Bat Pokémon',
        ja: 'こうもりポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '55.0',
        en: '121.3',
        ja: '55.0'
      }
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: 'Ataque Ala',
          en: 'Wing Attack',
          ja: 'つばさでうつ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Le encanta chuparles la sangre a los seres vivos. En ocasiones comparte la preciada colecta con otros congéneres hambrientos.',
      en: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
      ja: '生き物の　血液が　好物｡ 腹ペコの　仲間に　吸った　血を 分け与えることも　あるという｡' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [172, 242]
  },
  {
    id: 174,
    order: 174,
    number: 174,
    pokedex: 88,
    name: {
      es: 'Grimer',
      en: 'Grimer',
      ja: 'ベトベター' 
    },
    info: {
      type: {
        es: 'Pokémon Lodo',
        en: 'Sludge Pokémon',
        ja: 'ヘドロポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Pani Kobayashi',
    attacks: [
      {
        name: {
          es: 'Gas Venenoso',
          en: 'Poison Gas',
          ja: 'どくガス' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.DARK],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent’s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      },
    ],
    evolve: [175],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Formados a partir de lodo, los Grimer se juntan en lugares sucios para aumentar el número de gérmenes de su cuerpo.',
      en: 'Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.',
      ja: 'ヘドロが　ポケモンになった｡ 汚い　場所に　集まって 体の　ばい菌を　増やしていく｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [175]
  },
  {
    id: 175,
    order: 175,
    number: 175,
    pokedex: 89,
    name: {
      es: 'Muk',
      en: 'Muk',
      ja: 'ベトベトン' 
    },
    info: {
      type: {
        es: 'Pokémon Lodo',
        en: 'Sludge Pokémon',
        ja: 'ヘドロポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: {
          es: 'Carga Tóxica',
          en: 'Venoshock',
          ja: 'ベノムショック' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.',
          en: 'If your opponent’s Active Pokémon is Poisoned, this attack does 50 more damage.',
          ja: '相手のバトルポケモンがどくなら、50ダメージ追加。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Está cubierto por un repugnante lodo. Es tan tóxico que hasta su rastro es venenoso.',
      en: 'It’s thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
      ja: '汚い　ヘドロが　全身に まとわりつく｡　足跡に 触っただけで　毒に　侵される｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [174]
  },
  {
    id: 176,
    order: 176,
    number: 176,
    pokedex: 109,
    name: {
      es: 'Koffing',
      en: 'Koffing',
      ja: 'ドガース' 
    },
    info: {
      type: {
        es: 'Pokémon Gas Venenoso',
        en: 'Poison Gas Pokémon',
        ja: 'どくガスポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '1.0',
        en: '2.2',
        ja: '1.0'
      }
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: 'Gas Sofocante',
          en: 'Suffocating Gas',
          ja: 'ガスでつつむ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: [177],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su cuerpo está lleno a rebosar de gas venenoso. Acude a los vertederos atraídos por el putrefacto olor que emana de los desperdicios.',
      en: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
      ja: '毒ガスで　パンパンの　体｡ 生ゴミの　腐った　においを 求め　ゴミ捨て場に　やってくる｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [177, 335, 336, 243]
  },
  {
    id: 177,
    order: 177,
    number: 177,
    pokedex: 110,
    name: {
      es: 'Weezing',
      en: 'Weezing',
      ja: 'マタドガス' 
    },
    info: {
      type: {
        es: 'Pokémon Gas Venenoso',
        en: 'Poison Gas Pokémon',
        ja: 'どくガスポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '9.5',
        en: '20.9',
        ja: '9.5'
      }
    },
    artist: 'OOYAMA',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    ability: {
      name: {
          es: 'Escape de Gas',
          en: 'Gas Leak',
          ja: 'もれだすガス' 
        },
      description: {
       es: 'Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Envenenado.',
       en: 'Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned',
       ja: 'このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをどくにする。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Si uno de los gemelos Koffing se infla, el otro se desinfla. Mezclan constantemente sus venenosos gases.',
      en: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
      ja: 'どちらかが　ふくらむと　片方は しぼむ　双子の　ドガース｡　いつも 体内の　毒ガスを　混ぜている｡' 
    },
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [176, 335, 336, 243]
  },
  {
    id: 178,
    order: 178,
    number: 178,
    pokedex: 303,
    name: {
      es: 'Mawile',
      en: 'Mawile',
      ja: 'クチート' 
    },
    info: {
      type: {
        es: 'Pokémon Tramposo',
        en: 'Deceiver Pokémon',
        ja: 'あざむきポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '11.5',
        en: '25.4',
        ja: '11.5'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Triturar',
          en: 'Crunch',
          ja: 'かみくだく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.STEEL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.',
          en: 'Flip a coin. If heads, discard 1 random Energy from your opponent’s Active Pokémon.',
          ja: 'コインを1回投げてオモテなら、相手のバトルポケモンからエネルギーをランダムに1個トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Con su cara inocente hace que el rival se confíe y, al bajar la guardia, le da un mordisco con sus enormes fauces del que no se puede liberar.',
      en: 'It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.',
      ja: 'おとなしい　顔で　相手を　油断 させてから　おおあごで　がぶり｡ 噛みつくと　絶対に　放さない｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.DISCARD
    ],
    found: [
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 179,
    order: 179,
    number: 179,
    pokedex: 624,
    name: {
      es: 'Pawniard',
      en: 'Pawniard',
      ja: 'コマタナ' 
    },
    info: {
      type: {
        es: 'Pokémon Tajo',
        en: 'Sharp Blade Pokémon',
        ja: 'はものポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '10.2',
        en: '22.5',
        ja: '10.2'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Perforar',
          en: 'Pierce',
          ja: 'つきさす' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL]
      },
    ],
    evolve: [180],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Desafía sin temor a enemigos poderosos. Si es necesario, se aferra al rival y le clava las cuchillas que le recubren el cuerpo.',
      en: 'Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.',
      ja: '強敵にも　恐れず　挑む｡ いざとなると　相手に　しがみつき 体中の　刃で　貫く｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [180]
  },
  {
    id: 180,
    order: 180,
    number: 180,
    pokedex: 625,
    name: {
      es: 'Bisharp',
      en: 'Bisharp',
      ja: 'キリキザン' 
    },
    info: {
      type: {
        es: 'Pokémon Filo',
        en: 'Sword Blade Pokémon',
        ja: 'とうじんポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '70.0',
        en: '154.3',
        ja: '70.0'
      }
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: 'Garra Metal',
          en: 'Metal Claw',
          ja: 'メタルクロー' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL]
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Dirige a varios Pawniard para conformar grupos. Tras una disputa territorial, el grupo victorioso incorpora a los vencidos.',
      en: 'This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.',
      ja: 'コマタナを　率いて　群れを　成す｡ 縄張りを　賭けて　争い　負けた 群れは　吸収されていくのだ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [179]
  },
  {
    id: 181,
    order: 181,
    number: 181,
    pokedex: 808,
    name: {
      es: 'Meltan',
      en: 'Meltan',
      ja: 'メルタン' 
    },
    info: {
      type: {
        es: 'Pokémon Tuerca',
        en: 'Hex Nut Pokémon',
        ja: 'ナットポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '8.0',
        en: '17.6',
        ja: '8.0'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: 'Amasar',
          en: 'Amass',
          ja: 'ためる' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.STEEL],
        description: {
          es: 'Une 1 Energía Metálica de tu área de Energía a este Pokémon.',
          en: 'Take 1 Metal Energy from your Energy Zone and attach it to this Pokémon.',
          ja: '自分のエネルギーゾーンから鋼エネルギーを1個出し、このポケモンにつける。' 
        }
      },
    ],
    evolve: [182],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Funde metales para ingerirlos. Una vez licuados, los hace circular por el interior de su cuerpo para generar energía.',
      en: 'It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.',
      ja: '金属を　溶かして　食べてしまう｡ 液体金属を　循環させて 体内で　エネルギーを　つくる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [182]
  },
  {
    id: 182,
    order: 182,
    number: 182,
    pokedex: 809,
    name: {
      es: 'Melmetal',
      en: 'Melmetal',
      ja: 'メルメタル' 
    },
    info: {
      type: {
        es: 'Pokémon Tuerca',
        en: 'Hex Nut Pokémon',
        ja: 'ナットポケモン'
      },
      height: {
        es: '2.5',
        en: '8\'2"',
        ja: '2.5'
      },
      weight: {
        es: '800.0',
        en: '1763.7',
        ja: '800.0'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Impacto Pesado',
          en: 'Heavy Impact',
          ja: 'ヘビーインパクト' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL]
      },
    ],
    ability: {
      name: {
          es: 'Capa Resistente',
          en: 'Hard Coat',
          ja: 'ハードコート' 
        },
      description: {
       es: 'Los ataques hacen -20 puntos de daño a este Pokémon.',
       en: 'This Pokémon takes −20 damage from attacks.',
       ja: 'このポケモンが受けるワザのダメージを-20する。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Al final de su vida, su cuerpo se oxida y se hace pedazos. Poco tiempo después, estos fragmentos que quedan dan vida a varios Meltan.',
      en: 'At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.',
      ja: '寿命が　尽きると　体が 錆びて　崩れる｡　やがて　小さな 破片が　メルタンに　復活する｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [181]
  },
  {
    id: 183,
    order: 183,
    number: 183,
    pokedex: 147,
    name: {
      es: 'Dratini',
      en: 'Dratini',
      ja: 'ミニリュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Dragón',
        en: 'Dragon Pokémon',
        ja: 'ドラゴンポケモン'
      },
      height: {
        es: '1.8',
        en: '5\'11"',
        ja: '1.8'
      },
      weight: {
        es: '3.3',
        en: '7.3',
        ja: '3.3'
      }
    },
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: {
          es: 'Apisonar',
          en: 'Ram',
          ja: 'ぶつかる' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC]
      },
    ],
    evolve: [184],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante la etapa de crecimiento, muda muchas veces de piel y se protege mediante una cascada.',
      en: 'It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.',
      ja: '激しく　流れ落ちる　滝に 守られながら　脱皮を　繰り返し どんどん　大きくなる｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [184, 185, 244]
  },
  {
    id: 184,
    order: 184,
    number: 184,
    pokedex: 148,
    name: {
      es: 'Dragonair',
      en: 'Dragonair',
      ja: 'ハクリュー' 
    },
    info: {
      type: {
        es: 'Pokémon Dragón',
        en: 'Dragon Pokémon',
        ja: 'ドラゴンポケモン'
      },
      height: {
        es: '4',
        en: '13\'1"',
        ja: '4'
      },
      weight: {
        es: '16.5',
        en: '36.4',
        ja: '16.5'
      }
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: 'Bofetón Cola',
          en: 'Tail Smack',
          ja: 'しっぽでたたく' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [185],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Dicen que, cuando su cuerpo desprende un aura, el tiempo empieza a cambiar inmediatamente.',
      en: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
      ja: '全身から　オーラが　出されると あたりの　天候が　みるみるうちに 変わっていく　という｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [183, 185, 244]
  },
  {
    id: 185,
    order: 185,
    number: 185,
    pokedex: 149,
    name: {
      es: 'Dragonite',
      en: 'Dragonite',
      ja: 'カイリュー' 
    },
    info: {
      type: {
        es: 'Pokémon Dragón',
        en: 'Dragon Pokémon',
        ja: 'ドラゴンポケモン'
      },
      height: {
        es: '2.2',
        en: '7\'3"',
        ja: '2.2'
      },
      weight: {
        es: '210.0',
        en: '463',
        ja: '210.0'
      }
    },
    artist: 'Hiroyuki Yamamoto',
    attacks: [
      {
        name: {
          es: 'Cometa Draco',
          en: 'Draco Meteor',
          ja: 'りゅうせいぐん' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Se elige 4 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 50 puntos de daño por cada vez que haya resultado elegido.',
          en: '1 of your opponent’s Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.',
          ja: '相手のポケモンがランダムに選ばれ、選ばれたポケモン全員に、選ばれた回数×50ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Dicen que viven en una isla en algún lugar del océano que solo ellos habitan.',
      en: 'It is said that somewhere in the ocean lies an island where these gather. Only they live there.',
      ja: '広い　海の　どこかには カイリューだけが　集まって　暮らす 島が　あるらしい｡' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [183, 184, 244]
  },
  {
    id: 186,
    order: 186,
    number: 186,
    pokedex: 16,
    name: {
      es: 'Pidgey',
      en: 'Pidgey',
      ja: 'ポッポ' 
    },
    info: {
      type: {
        es: 'Pokémon Pajarito',
        en: 'Tiny Bird Pokémon',
        ja: 'ことりポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '1.8',
        en: '4',
        ja: '1.8'
      }
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: 'Tornado',
          en: 'Gust',
          ja: 'かぜおこし' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [187],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.',
      en: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
      ja: '森や　林に　多く　分布｡ 地上でも　激しく　はばたいて 砂を　かけたりする｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [187, 188, 343, 344, 345, 245, 365]
  },
  {
    id: 187,
    order: 187,
    number: 187,
    pokedex: 17,
    name: {
      es: 'Pidgeotto',
      en: 'Pidgeotto',
      ja: 'ピジョン' 
    },
    info: {
      type: {
        es: 'Pokémon Pájaro',
        en: 'Bird Pokémon',
        ja: 'とりポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: 'Tornado',
          en: 'Gust',
          ja: 'かぜおこし' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [188],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.',
      en: 'The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.',
      ja: '足の　ツメが　発達している｡ エサの　タマタマを　つかんで １００キロ先の　巣まで　運ぶ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [186, 188, 343, 344, 345, 245, 365]
  },
  {
    id: 188,
    order: 188,
    number: 188,
    pokedex: 18,
    name: {
      es: 'Pidgeot',
      en: 'Pidgeot',
      ja: 'ピジョット' 
    },
    info: {
      type: {
        es: 'Pokémon Pájaro',
        en: 'Bird Pokémon',
        ja: 'とりポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '39.5',
        en: '87.1',
        ja: '39.5'
      }
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: 'Ataque Ala',
          en: 'Wing Attack',
          ja: 'つばさでうつ' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Ahuyentar',
          en: 'Drive Off',
          ja: 'おいはらう' 
        },
      description: {
       es: 'Una vez durante tu turno, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).',
       en: 'Once during your turn, you may switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
       ja: '自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。（バトル場に出すポケモンは相手が選ぶ。）' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.',
      en: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
      ja: 'エサを　探すとき　水面　すれすれを 滑るように　飛んで コイキングなどを　わしづかみにする｡' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [186, 187, 343, 344, 245]
  },
  {
    id: 189,
    order: 189,
    number: 189,
    pokedex: 19,
    name: {
      es: 'Rattata',
      en: 'Rattata',
      ja: 'コラッタ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '3.5',
        en: '7.7',
        ja: '3.5'
      }
    },
    artist: 'Atsushi Furusawa',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [190],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Sus incisivos crecen durante toda su vida. Si aumentan demasiado de tamaño, no puede alimentarse y muere de inanición.',
      en: 'Its incisors grow continuously throughout its life. If its incisors get too long, this Pokémon becomes unable to eat, and it starves to death.',
      ja: '一生　前歯が　伸び続ける｡ あまりに　伸びすぎると　エサが 食べられなくなって　餓死　する｡' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [190]
  },
  {
    id: 190,
    order: 190,
    number: 190,
    pokedex: 20,
    name: {
      es: 'Raticate',
      en: 'Raticate',
      ja: 'ラッタ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '18.5',
        en: '40.8',
        ja: '18.5'
      }
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: 'Mordisco',
          en: 'Bite',
          ja: 'かみつく' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Las pequeñas membranas que tiene en las patas traseras le permiten nadar entre las islas de Alola y escapar así de sus depredadores.',
      en: 'People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.',
      ja: '後ろ足の　小さい　水かきで 海を　泳いで　島を　渡り 敵から　逃げていた　という｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [189]
  },
  {
    id: 191,
    order: 191,
    number: 191,
    pokedex: 21,
    name: {
      es: 'Spearow',
      en: 'Spearow',
      ja: 'オニスズメ' 
    },
    info: {
      type: {
        es: 'Pokémon Pajarito',
        en: 'Tiny Bird Pokémon',
        ja: 'ことりポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '2.0',
        en: '4.4',
        ja: '2.0'
      }
    },
    artist: 'Shiburingaru',
    attacks: [
      {
        name: {
          es: 'Picotazo',
          en: 'Peck',
          ja: 'つつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [192],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su temperamento temerario hace que no dude en enfrentarse a rivales mucho más grandes a la hora de defender su territorio.',
      en: 'Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.',
      ja: '自分のテリトリーを　守るためなら 大きな　ポケモンが　相手でも 向かっていく　向こう見ずな　性質｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [192]
  },
  {
    id: 192,
    order: 192,
    number: 192,
    pokedex: 22,
    name: {
      es: 'Fearow',
      en: 'Fearow',
      ja: 'オニドリル' 
    },
    info: {
      type: {
        es: 'Pokémon Pico',
        en: 'Beak Pokémon',
        ja: 'くちばしポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '38.0',
        en: '83.8',
        ja: '38.0'
      }
    },
    artist: 'Satoshi Shirai',
    attacks: [
      {
        name: {
          es: 'Taladradora',
          en: 'Drill Run',
          ja: 'ドリルライナー' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon activo de tu rival.',
          en: 'Flip a coin. If heads, discard 1 random Energy from your opponent’s Active Pokémon.',
          ja: 'コインを1回投げオモテなら、相手のバトルポケモンからエネルギーをランダムに1個トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es peligroso pasear con comida por su territorio, ya que supone exponerse a que en cualquier momento se abalance para robarla.',
      en: 'Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!',
      ja: 'オニドリルの　縄張りで　食べ物を 持って　歩くのは　危険だ｡ あっという　間に　かっさらわれるぞ｡' 
    },
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.DISCARD
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [191]
  },
  {
    id: 193,
    order: 193,
    number: 193,
    pokedex: 39,
    name: {
      es: 'Jigglypuff',
      en: 'Jigglypuff',
      ja: 'プリン' 
    },
    info: {
      type: {
        es: 'Pokémon Globo',
        en: 'Balloon Pokémon',
        ja: 'ふうせんポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8',
        ja: '0.5'
      },
      weight: {
        es: '5.5',
        en: '12.1',
        ja: '5.5'
      }
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: 'Destructor',
          en: 'Pound',
          ja: 'はたく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [194],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos.',
      en: 'When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
      ja: 'つぶらな　瞳が　揺れるとき 眠たくなるような　不思議で 気持ちのいい　歌を　歌う｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [194, 195, 265, 279, 601]
  },
  {
    id: 194,
    order: 194,
    number: 194,
    pokedex: 40,
    name: {
      es: 'Wigglytuff',
      en: 'Wigglytuff',
      ja: 'プクリン' 
    },
    info: {
      type: {
        es: 'Pokémon Globo',
        en: 'Balloon Pokémon',
        ja: 'ふうせんポケモン'
      },
      height: {
        es: '1',
        en: '3\'3',
        ja: '1'
      },
      weight: {
        es: '12.0',
        en: '26.5',
        ja: '12.0'
      }
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: 'Vozarrón',
          en: 'Hyper Voice',
          ja: 'ハイパーボイス' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo.',
      en: 'It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.',
      ja: 'キメ細やかな　毛皮の　持ち主｡ 怒らせると　どんどん　ふくらみ のしかかってくるので　注意｡' 
    },
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 601]
  },
  {
    id: 195,
    order: 195,
    number: 195,
    pokedex: 40,
    name: {
      es: 'Wigglytuff EX',
      en: 'Wigglytuff EX',
      ja: 'プクリン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Globo',
        en: 'Balloon Pokémon',
        ja: 'ふうせんポケモン'
      },
      height: {
        es: '1',
        en: '3\'3',
        ja: '1'
      },
      weight: {
        es: '12.0',
        en: '26.5',
        ja: '12.0'
      }
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: 'Canción Adormecedora',
          en: 'Sleepy Song',
          ja: 'スリーピーソング' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Dormido.',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '相手のバトルポケモンをねむりにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo.',
      en: 'It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.',
      ja: 'キメ細やかな　毛皮の　持ち主｡ 怒らせると　どんどん　ふくらみ のしかかってくるので　注意｡' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 265, 279, 601]
  },
  {
    id: 196,
    order: 196,
    number: 196,
    pokedex: 52,
    name: {
      es: 'Meowth',
      en: 'Meowth',
      ja: 'ニャース' 
    },
    info: {
      type: {
        es: 'Pokémon Gato Araña',
        en: '	Scratch Cat Pokémon',
        ja: 'ばけねこポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.2',
        en: '9.3',
        ja: '4.2'
      }
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: 'Día de Pago',
          en: 'Pay Day',
          ja: 'ネコにこばん' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Roba 1 carta.',
          en: 'Draw a card.',
          ja: '自分の山札を1枚引く。' 
        }
      },
    ],
    evolve: [197],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante el día, se dedica a dormir. De noche, vigila su territorio con un brillo en los ojos.',
      en: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
      ja: '昼間は　寝てばかりいる｡ 夜になると　目が　輝き 縄張りを　歩きまわる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [197, 246, 591]
  },
  {
    id: 197,
    order: 197,
    number: 197,
    pokedex: 53,
    name: {
      es: 'Persian',
      en: 'Persian',
      ja: 'ペルシアン' 
    },
    info: {
      type: {
        es: 'Pokémon Gato Fino',
        en: 'Classy Cat Pokémon',
        ja: 'シャムネコポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '32.0',
        en: '70.5',
        ja: '32.0'
      }
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: 'Garra Umbría',
          en: 'Shadow Claws',
          ja: 'シャドークロー' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, descarta 1 carta aleatoria de la mano de tu rival.',
          en: 'Flip a coin. If heads, discard 1 random cards from your opponent’s hand.',
          ja: 'コインを1回投げオモテなら、相手の手札からランダムに1枚トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Aunque es muy admirado por el pelaje, es difícil de entrenar como mascota porque enseguida suelta arañazos.',
      en: 'Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.',
      ja: '毛並みが　美しく ペットにしたがる　人も　多いが　すぐ ひっかいたり　するので　手強いぞ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [196, 246, 591]
  },
  {
    id: 198,
    order: 198,
    number: 198,
    pokedex: 83,
    name: {
      es: 'Farfetch\'s',
      en: 'Farfetch\'s',
      ja: 'カモネギ' 
    },
    info: {
      type: {
        es: 'Pokémon Pato Salvaje',
        en: 'Wild Duck Pokémon',
        ja: 'かるがもポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '15.0',
        en: '33.1',
        ja: '15.0'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Bofetada de Puerro',
          en: 'Leek Slap',
          ja: 'ネギでたたく' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Blande el puerro que sujeta con un ala como si se tratase de una espada para rebanar a su rival. En caso de necesidad, se lo come para nutrirse.',
      en: 'The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.',
      ja: '羽で　もつ　茎を　刀のように 操り　敵を　切り捨てる｡ いざと　いうときは　エサに　する｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
  },
  {
    id: 199,
    order: 199,
    number: 199,
    pokedex: 84,
    name: {
      es: 'Doduo',
      en: 'Doduo',
      ja: 'ドードー' 
    },
    info: {
      type: {
        es: 'Pokémon Ave Gemela',
        en: 'Twin Bird Pokémon',
        ja: 'ふたごどりポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '39.2',
        en: '86.4',
        ja: '39.2'
      }
    },

    artist: 'Yuya Oka',
    attacks: [
      {
        name: {
          es: 'Picotazo',
          en: 'Peck',
          ja: 'つつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [200],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon de dos cabezas es el resultado de una mutación. Cuando corre, puede alcanzar casi 100 km por hora.',
      en: 'A two-headed Pokémon that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.',
      ja: '突然変異で　見つかった ２つの　頭を　持つ　ポケモン｡ 時速１００キロで　走る｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [200]
  },
  {
    id: 200,
    order: 200,
    number: 200,
    pokedex: 85,
    name: {
      es: 'Dodrio',
      en: 'Dodrio',
      ja: 'ドードリオ' 
    },
    info: {
      type: {
        es: 'Pokémon Ave Triple',
        en: 'Triple Bird Pokémon',
        ja: 'みつごどりポケモン'
      },
      height: {
        es: '1.8',
        en: '5\'11"',
        ja: '1.8'
      },
      weight: {
        es: '85.2',
        en: '187.8',
        ja: '85.2'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Pico Taladro',
          en: 'Drill Peck',
          ja: 'ドリルくちばし' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Más vale no perder de vista ninguna de las tres cabezas. De lo contrario, el número de picotazos será enorme.',
      en: 'An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.',
      ja: '３つの　頭が　見ている前で わずかでも　すきを　見せると クチバシで　激しく　つつかれる｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [199]
  },
  {
    id: 201,
    order: 201,
    number: 201,
    pokedex: 108,
    name: {
      es: 'Lickitung',
      en: 'Lickitung',
      ja: 'ベロリンガ' 
    },
    info: {
      type: {
        es: 'Pokémon Lametazo',
        en: 'Licking Pokémon',
        ja: 'なめまわしポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '65.5',
        en: '144.4',
        ja: '65.5'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Lengüetazo Incesante',
          en: 'Continuous Lick',
          ja: 'れんぞくベロベロ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda hasta que salga cruz. Este ataque hace 60 puntos de daño por cada cara.',
          en: 'Flip a coin until you get tails. This attack does 60 damage for each heads.',
          ja: 'ウラが出るまでコインを投げ、オモテの数×60ダメージ。'
        }
      },
    ],
    evolve: [497],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Si sus lametones no se tratan a tiempo, su saliva pegajosa y urticante puede provocar picores persistentes.',
      en: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.',
      ja: 'ネバネバした　唾液に　触れたまま 放っておくと　ものすごい　痒みが はじまり　とまらなくなるぞ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [496, 497, 561, 575]
  },
  {
    id: 202,
    order: 202,
    number: 202,
    pokedex: 113,
    name: {
      es: 'Chansey',
      en: 'Chansey',
      ja: 'ラッキー' 
    },
    info: {
      type: {
        es: 'Pokémon Huevo',
        en: 'Egg Pokémon',
        ja: 'たまごポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '34.6',
        en: '76.3',
        ja: '34.6'
      }
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: 'Bofetada Gentil',
          en: 'Gentle Slap',
          ja: 'ひっぱたく' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Un generoso Pokémon que pone huevos muy nutritivos y se los da a personas o Pokémon heridos.',
      en: 'This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.',
      ja: '傷ついた　ポケモンや　人がいると 栄養満点の　タマゴを産み 分け与える　優しい　ポケモン｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [590]
  },
  {
    id: 203,
    order: 203,
    number: 203,
    pokedex: 115,
    name: {
      es: 'Kangaskhan',
      en: 'Kangaskhan',
      ja: 'ガルーラ' 
    },
    info: {
      type: {
        es: 'Pokémon Maternal',
        en: 'Parent Pokémon',
        ja: 'おやこポケモン'
      },
      height: {
        es: '2.2',
        en: '7\'3"',
        ja: '2.2'
      },
      weight: {
        es: '80.0',
        en: '176.4',
        ja: '80.0'
      }
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: 'Puño Mareo',
          en: 'Dizzy Punch',
          ja: 'ピヨピヨパンチ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.',
          en: 'Flip 2 coins. This attack does 30 damage for each heads.',
          ja: 'コインを2回投げ、オモテの数×30ダメージ。'
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Aunque lleve una cría en el marsupio, su juego de pies no pierde ligereza. Abruma al rival con ráfagas de ágiles puñetazos.',
      en: 'Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.',
      ja: '腹の　袋に　子どもが　いるが フットワークは　とても　軽い｡ 素早いジャブで　相手を　威嚇｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 204,
    order: 204,
    number: 204,
    pokedex: 128,
    name: {
      es: 'Tauros',
      en: 'Tauros',
      ja: 'ケンタロス' 
    },
    info: {
      type: {
        es: 'Pokémon Toro Bravo',
        en: 'Wild Bull Pokémon',
        ja: 'あばれうしポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '88.4',
        en: '194.9',
        ja: '88.4'
      }
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: 'Cornada',
          en: 'Horn Attack',
          ja: 'つのでつく' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Conviene tener cuidado si empieza a fustigarse con las colas, pues es señal de que va a cargar a máxima velocidad.',
      en: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
      ja: 'しっぽで　自分の　体を 叩きだしたら　危険だぞ｡ 猛スピードで　突っ込んでくる｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [346]
  },
  {
    id: 205,
    order: 205,
    number: 205,
    pokedex: 132,
    name: {
      es: 'Ditto',
      en: 'Ditto',
      ja: 'メタモン' 
    },
    info: {
      type: {
        es: 'Pokémon Transformación',
        en: 'Transform Pokémon',
        ja: 'へんしんポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Copietear',
          en: 'Copy Anything',
          ja: 'どこでもコピー' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.',
          en: 'Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.',
          ja: '相手の場のポケモンが持ってるワザを1つ選び、このワザとして使う。選んだワザに必要なエネルギーがこのポケモンについていなければ、このワザは失敗。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su habilidad para transformarse es perfecta, pero, si se le hace reír, perderá la fuerza y no podrá mantenerse transformado.',
      en: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.',
      ja: '変身は　完璧なのだが 笑わされて　力が　抜けると 変身は　解けてしまう｡' 
    },
    health: 70,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [247]
  },
  {
    id: 206,
    order: 206,
    number: 206,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [45, 80, 102, 207, 208, 305, 347, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 207,
    order: 207,
    number: 207,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Hasuno',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [45, 80, 102, 206, 208, 305, 347, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 208,
    order: 208,
    number: 208,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [45, 80, 102, 206, 207, 305, 347, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 209,
    order: 209,
    number: 209,
    pokedex: 137,
    name: {
      es: 'Porygon',
      en: 'Porygon',
      ja: 'ポリゴン' 
    },
    info: {
      type: {
        es: 'Pokémon Virtual',
        en: 'Virtual Pokémon',
        ja: 'バーチャルポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '36.5',
        en: '80.5',
        ja: '36.5'
      }
    },
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: {
          es: 'Afilar',
          en: 'Sharpen',
          ja: 'かくばる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Escaneo de Datos',
          en: 'Data Scan',
          ja: 'データスキャン' 
        },
      description: {
       es: 'Una vez durante tu turno, puedes mirar la primera carta de tu baraja.',
       en: 'Once during your turn, you may look at the top card of your deck.',
       ja: '自分の番に1回使える。自分の山札を上から1枚見て、元に戻す。' 
     }
    },
    evolve: [500],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se trata del primer Pokémon del mundo creado a partir de códigos de programación gracias al uso de tecnología de vanguardia.',
      en: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
      ja: '最高の　科学力を　使い 世界で　はじめて　プログラムにより 作られた　人工の　ポケモン｡' 
    },
    health: 50,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [499, 500, 501, 249]
  },
  {
    id: 210,
    order: 210,
    number: 210,
    pokedex: 142,
    name: {
      es: 'Aerodactyl',
      en: 'Aerodactyl',
      ja: 'プテラ' 
    },
    info: {
      type: {
        es: 'Pokémon Fósil',
        en: 'Fossil Pokémon',
        ja: 'かせきポケモン'
      },
      height: {
        es: '1.8',
        en: '5\'11"',
        ja: '1.8'
      },
      weight: {
        es: '59.0',
        en: '130.1',
        ja: '59.0'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'Aleteo Primigenio',
          en: 'Primal Wingbeat',
          ja: 'げんしのはばたき' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, tu rival pone su Pokémon Activo de nuevo en su baraja y baraja todas las cartas.',
          en: 'Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.',
          ja: 'コインを1回投げオモテなら、相手のバトルポケモンを山札にもどす。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '古代の　獰猛な　ポケモン｡ 完璧な　復元は いまの　科学でも　不可能らしい｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.FLIP],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [218]
  },
  {
    id: 211,
    order: 211,
    number: 211,
    pokedex: 143,
    name: {
      es: 'Snorlax',
      en: 'Snorlax',
      ja: 'カビゴン' 
    },
    info: {
      type: {
        es: 'Pokémon Dormir',
        en: 'Sleeping Pokémon',
        ja: 'いねむりポケモン'
      },
      height: {
        es: '2.1',
        en: '6\'11"',
        ja: '2.1'
      },
      weight: {
        es: '460.0',
        en: '1014.1',
        ja: '460.0'
      }
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: 'Rodar',
          en: 'Rollout',
          ja: 'ころがる' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.',
      en: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
      ja: '１日に　食べ物を　４００キロ 食べないと　気がすまない｡ 食べ終わると　眠ってしまう｡' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [250]
  },
  {
    id: 212,
    order: 212,
    number: 212,
    pokedex: 572,
    name: {
      es: 'Minccino',
      en: 'Minccino',
      ja: 'チラーミィ' 
    },
    info: {
      type: {
        es: 'Pokémon Chinchilla',
        en: 'Chinchilla Pokémon',
        ja: 'チンチラポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '5.8',
        en: '12.8',
        ja: '5.8'
      }
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: 'Bofetón Cola',
          en: 'Tail Smack',
          ja: 'しっぽでたたく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [213],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Usa la cola para barrer la basurilla. Su extrema pulcritud es tanto una ayuda en la limpieza del hogar como un incordio.',
      en: 'The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.',
      ja: 'しっぽで　汚れを　払い落す｡ 掃除を　するときに　助かるが 潔癖症　なので　大変｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [213, 610]
  },
  {
    id: 213,
    order: 213,
    number: 213,
    pokedex: 573,
    name: {
      es: 'Cinccino',
      en: 'Cinccino',
      ja: 'チラチーノ' 
    },
    info: {
      type: {
        es: 'Pokémon Estola',
        en: 'Scarf Pokémon',
        ja: 'スカーフポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '7.5',
        en: '16.5',
        ja: '7.5'
      }
    },
    artist: '0313',
    attacks: [
      {
        name: {
          es: 'Hacer la Ola',
          en: 'Do the Wave',
          ja: 'ともだちのわ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 30 puntos de daño por cada uno de tus Pokémon en Banca.',
          en: 'This attack does 30 damage for each of your Benched Pokémon.',
          ja: '自分のベンチポケモンの数×30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es tan sumamente pulcro que no puede ver ni una mota de polvo. La grasa que exuda por el cuerpo le sirve de película protectora.',
      en: 'Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won’t tolerate even a speck of the stuff.',
      ja: '塵ひとつ　許せない　潔癖｡ 体から　染み出る　油を 巣に　塗りつけ　コーティングする｡' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [212, 610]
  },
  {
    id: 214,
    order: 214,
    number: 214,
    pokedex: 831,
    name: {
      es: 'Wooloo',
      en: 'Wooloo',
      ja: 'ウールー' 
    },
    info: {
      type: {
        es: 'Pokémon Oveja',
        en: 'Sheep Pokémon',
        ja: 'ひつじポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Yoriyuki Ikegami',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [215],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su lana rizada es tan alcolchada que no se hace daño ni aunque se caiga por un precipicio.',
      en: 'Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.',
      ja: 'パーマの　かかった　体毛は 高い　クッション性が　ある｡ 崖から　落ちても　へっちゃら｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [215]
  },
  {
    id: 215,
    order: 215,
    number: 215,
    pokedex: 832,
    name: {
      es: 'Dubwool',
      en: 'Dubwool',
      ja: 'バイウールー' 
    },
    info: {
      type: {
        es: 'Pokémon Oveja',
        en: 'Sheep Pokémon',
        ja: 'ひつじポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '43.0',
        en: '94.8',
        ja: '43.0'
      }
    },
    artist: 'saino misaki',
    attacks: [
      {
        name: {
          es: 'Placaje Giro',
          en: 'Rolling Tackle',
          ja: 'ころがりタックル' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su lana es muy flexible. Las alfombras tejidas con ella adoptan una textura similar a la de las camas elásticas.',
      en: 'Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You’ll start to bounce the moment you set foot on it.',
      ja: '弾力の　ある　毛で　織った カーペットは　トランポリンみたいで 乗れば　ピョンピョン　跳ねるのだ｡' 
    },
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [214]
  },
  {
    id: 216,
    order: 216,
    number: 216,
    name: {
      es: 'Fósil Hélix',
      en: 'Helix Fossil',
      ja: 'かいの化石' 
    },
    artist: 'Toyste Beach',
    evolve: [81],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Juega esta carta como si fuera un Pokémon  Básico de 40 PS. En cualquier momento durante tu turno, puedes descartar esta carta del juego. Esta carta no puede retirarse.',
      en: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
      ja: 'このカードは、HP40の無色タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードはにげるができない。' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [81, 82]
  },
  {
    id: 217,
    order: 217,
    number: 217,
    name: {
      es: 'Fósil Domo',
      en: 'Dome Fossil',
      ja: 'こうらの化石' 
    },
    artist: 'Toyste Beach',
    evolve: [158],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Juega esta carta como si fuera un Pokémon  Básico de 40 PS. En cualquier momento durante tu turno, puedes descartar esta carta del juego. Esta carta no puede retirarse.',
      en: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
      ja: 'このカードは、HP40の無色タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードはにげるができない。' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [158, 159]
  },
  {
    id: 218,
    order: 218,
    number: 218,
    name: {
      es: 'Ámbar Viejo',
      en: 'Old Amber',
      ja: 'ひみつのコハク' 
    },
    artist: 'Toyste Beach',
    evolve: [210],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Juega esta carta como si fuera un Pokémon  Básico de 40 PS. En cualquier momento durante tu turno, puedes descartar esta carta del juego. Esta carta no puede retirarse.',
      en: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
      ja: 'このカードは、HP40の無色タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードはにげるができない。' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [210, 332, 364, 370]
  },
  {
    id: 219,
    order: 219,
    number: 219,
    name: {
      es: 'Erika',
      en: 'Erika',
      ja: 'エリカ' 
    },
    artist: 'kirisAki',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cura 50 puntos de daño a 1 de tus Pokémon Planta.',
      en: 'Heal 50 damage from 1 of your Grass Pokémon.',
      ja: '自分の草ポケモン1匹のHPを50回復。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 220,
    order: 220,
    number: 220,
    pokedex: -1,
    name: {
      es: 'Misty',
      en: 'Misty',
      ja: 'カスミ' 
    },
    artist: 'Sanosuke Sakuma',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Elige 1 de tus Pokémon Agua, y luego lanza 1 moneda hasta que salga cruz. Por cada cara, une 1 Energía Agua de tu área de Energía a ese Pokémon.',
      en: 'Choose 1 of your Water Pokémon, and flip a coin until you get tails. For each heads, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
      ja: '自分の水ポケモンを1匹選ぶ。ウラが出るまでコインを投げ、オモテの数ぶんの水エネルギーを自分のエネルギーゾーンから出し、そのポケモンにつける。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    related: [219, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 221,
    order: 221,
    number: 221,
    name: {
      es: 'Blaine',
      en: 'Blaine',
      ja: 'カツラ' 
    },
    artist: 'GOSSAN',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante este turno, los ataques de tu Ninetales, tu Rapidash o tu Magmar hacen +30 puntos de daño al Pokémon Activo de tu rival.',
      en: 'During this turn, attacks used by your Ninetales, Rapidash, or Magmar do +30 damage to your opponent’s Active Pokémon.',
      ja: 'この番、自分の「キュウコン」「ギャロップ」「ブーバー」が使うワザの、相手のバトルポケモンへのダメージを+30する' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 222,
    order: 222,
    number: 222,
    name: {
      es: 'Koga',
      en: 'Koga',
      ja: 'キョウ' 
    },
    artist: 'Souichirou Gunjima',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Pon a tu Muk o a tu Weezing que esté en el Puesto Activo en tu mano.',
      en: 'Put your Muk or Weezing in the Active Spot into your hand.',
      ja: '自分のバトル場の「ベトベトン」「マタドガス」を手札にもどす。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 223,
    order: 223,
    number: 223,
    name: {
      es: 'Giovanni',
      en: 'Giovanni',
      ja: 'サカキ' 
    },
    artist: 'Hideki Ishikawa',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante este turno, los ataques de tus Pokémon hacen +10 puntos de daño al Pokémon Activo de tu rival.',
      en: 'During this turn, attacks used by your Pokémon do +10 damage to your opponent’s Active Pokémon.',
      ja: 'この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージを+10する。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 224,
    order: 224,
    number: 224,
    name: {
      es: 'Brock',
      en: 'Brock',
      ja: 'タケシ' 
    },
    artist: 'Taira Akitsu',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Une 1 Energía de tu área de Energía a tu Golem o a tu Onix.',
      en: 'Take 1 Fighting Energy from your Energy Zone and attach it to Golem or Onix.',
      ja: '自分のエネルギーゾーンから闘エネルギーを1個出し、「ゴローニャ」または「イワーク」につける。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 225,
    order: 225,
    number: 225,
    name: {
      es: 'Sabrina',
      en: 'Sabrina',
      ja: 'ナツメ' 
    },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).',
      en: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
      ja: '相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］'
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 226,
    order: 226,
    number: 226,
    name: {
      es: 'Teniente Surge',
      en: 'Lt. Surge',
      ja: 'マチス' 
    },
    artist: 'nagimiso',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve todas las Energías Eléctricas de tus Pokémon en Banca a tu Raichu, tu Electrode o tu Electabuzz en el Puesto Activo.',
      en: 'Move all Lightning Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.',
      ja: '自分のバトル場の「ライチュウ」「マルマイン」「エレブー」に、ベンチポケモン全員から雷エネルギーをすべてつけ替える。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 227,
    order: 227,
    number: 227,
    pokedex: 1,
    name: {
      es: 'Bulbasaur',
      en: 'Bulbasaur',
      ja: 'フシギダネ'
    },
    info: {
      type: {
        es: 'Pokémon Semilla',
        en: 'Seed Pokémon',
        ja: 'たねポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'04"',
        ja: '0.7'
      },
      weight: {
        es: '6.9',
        en: '15.2',
        ja: '6.9'
      }
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: 'Látigo Cepa',
          en: 'Vine Whip',
          ja: 'つるのムチ'
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [2],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      en: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
      ja: '生まれたときから 背中に 植物の タネが あって 少しずつ 大きく 育つ。'
    },
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [1, 2, 3, 4, 251, 395, 390],
  },
  {
    id: 228,
    order: 228,
    number: 228,
    pokedex: 44,
    name: {
      es: 'Gloom',
      en: 'Gloom',
      ja: 'クサイハナ'
    },
    info: {
      type: {
        es: 'Pokémon Hierbajo',
        en: 'Weed Pokémon',
        ja: 'ざっそうポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '8.6',
        en: '19',
        ja: '8.6'
      }
    },
    artist: 'OKACHEKE',
    attacks: [
      {
        name: {
          es: 'Babeo',
          en: 'Drool',
          ja: 'よだれ'
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [13],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Libera un fétido olor por los pistilos. El fuerte hedor hace perder el conocimiento a cualquiera que se encuentre en un radio de 2 km.',
      en: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
      ja: 'めしべが　放つ　とてつもなく 臭い　においは　２キロ先まで とどき　気を　失わせる｡'
    },
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [11, 12, 13]
  },
  {
    id: 229,
    order: 229,
    number: 229,
    pokedex: 127,
    name: {
      es: 'Pinsir',
      en: 'Pinsir',
      ja: 'カイロス' 
    },
    info: {
      type: {
        es: 'Pokémon Escarabajo',
        en: 'Stag Beetle Pokémon',
        ja: 'くわがたポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '55.0',
        en: '121.3',
        ja: '55.0'
      }
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: 'Cornada Doble',
          en: 'Double Horn',
          ja: 'ダブルホーン' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: {
          es: 'Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.',
          en: 'Flip 2 coins. This attack does 50 damage for each heads.',
          ja: 'コインを2回投げて、オモテの数×50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Los Pinsir se juzgan entre ellos por la robustez de la cornamenta. Cuanto más imponente sea, más agradará a sus congéneres del sexo puesto.',
      en: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
      ja: 'ツノで　互いを　格付けする｡ 太く　立派な　ツノを　持つ カイロスほど　異性に　人気｡' 
    },
    health: 90,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [26]
  },
  {
    id: 230,
    order: 230,
    number: 230,
    pokedex: 4,
    name: {
      es: 'Charmander',
      en: 'Charmander',
      ja: 'ヒトカゲ' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartija',
        en: 'Lizard Pokémon',
        ja: 'とかげポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '8.5',
        en: '18.7',
        ja: '8.5'
      }
    },
    artist: 'GIDORA',
    attacks: [
      {
        name: {
          es: 'Ascuas',
          en: 'Ember',
          ja: 'ひのこ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'Descarta 1 Energía Fuego de este Pokémon.',
          en: 'Discard 1 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを1個トラッシュ。' 
        }
      }
    ],
    evolve: [34],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
      en: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
      ja: '熱いものを　好む　性格｡ 雨に濡れると　しっぽの　先から 煙が　出るという｡' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 35, 36, 253, 280, 284, 404]
  },
  {
    id: 231,
    order: 231,
    number: 231,
    pokedex: 78,
    name: {
      es: 'Rapidash',
      en: 'Rapidash',
      ja: 'ギャロップ' 
    },
    info: {
      type: {
        es: 'Pokémon Caballo Fuego',
        en: 'Fire Horse Pokémon',
        ja: 'ひのうまポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '95.0',
        en: '209.4',
        ja: '95.0'
      }
    },
    artist: 'Taira Akitsu',
    attacks: [
      {
        name: {
          es: 'Crin de Fuego',
          en: 'Fire Mane',
          ja: 'ほのおのたてがみ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su ardiente crin ondea al viento mientras atraviesa extensas praderas a una velocidad de 240 km/h.',
      en: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
      ja: '燃える　たてがみを　はためかせ 時速　２４０キロの　速度で 大草原を　駆けぬけるのだ｡' 
    },
    health: 100,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [42, 43, 296, 297]
  },
  {
    id: 232,
    order: 232,
    number: 232,
    pokedex: 7,
    name: {
      es: 'Squirtle',
      en: 'Squirtle',
      ja: 'ゼニガメ' 
    },
    info: {
      type: {
        es: 'Pokémon Tortuguita',
        en: 'Tiny Turtle Pokémon',
        ja: 'かめのこポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '9.0',
        en: '19.8',
        ja: '9.0'
      }
    },
    artist: 'Taira Akitsu',
    attacks: [
      {
        name: {
          es: 'Pistola Agua',
          en: 'Water Gun',
          ja: 'みずでっぽう' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [54],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
      en: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
      ja: '長い　首を　甲羅のなかに 引っこめるとき　勢いよく 水鉄砲を　発射する｡' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 55, 56, 256, 405, 401]
  },
  {
    id: 233,
    order: 233,
    number: 233,
    pokedex: 130,
    name: {
      es: 'Gyarados',
      en: 'Gyarados',
      ja: 'ギャラドス' 
    },
    info: {
      type: {
        es: 'Pokémon Atrocidad',
        en: 'Atrocious Pokémon',
        ja: 'きょうあくポケモン'
      },
      height: {
        es: '6.5',
        en: '21\'4"',
        ja: '6.5'
      },
      weight: {
        es: '235.0',
        en: '518.1',
        ja: '235.0'
      }
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: 'Hiperrayo',
          en: 'Hyper Beam',
          ja: 'はかいこうせん' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Descarta 1 Energía aleatoria del Pokémon Activo de tu rival.',
          en: 'Discard 1 random Energy from your opponent’s Active Pokémon.',
          ja: '相手のバトルポケモンからエネルギーをランダムに1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando aparece, monta en cólera. No deja de estar furioso hasta que lo destruye todo.',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '一度　姿を　現すと まわりを　すべて　焼き尽くさないと 怒りが　鎮まらない　という｡' 
    },
    health: 150,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [77, 78, 303]
  },
  {
    id: 234,
    order: 234,
    number: 234,
    pokedex: 131,
    name: {
      es: 'Lapras',
      en: 'Lapras',
      ja: 'ラプラス' 
    },
    info: {
      type: {
        es: 'Pokémon Transporte',
        en: 'Transport Pokémon',
        ja: 'のりものポケモン'
      },
      height: {
        es: '2.5',
        en: '8\'2"',
        ja: '2.5'
      },
      weight: {
        es: '220.0',
        en: '485',
        ja: '220.0'
      }
    },
    artist: 'Haru Akasaka',
    attacks: [
      {
        name: {
          es: 'Hidrobomba',
          en: 'Hydro Pump',
          ja: 'ハイドロポンプ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: 'Si este Pokémon tiene por lo menos 3 Energías Agua adicionales unidas a él, este ataque hace 70 puntos de daño más.',
          en: 'If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage.',
          ja: '追加で水エネルギーが3個ついているなら、70ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Este Pokémon posee una notable inteligencia y un corazón de oro. Entona un canto melodioso mientras surca el mar.',
      en: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
      ja: '賢く　心優しい　ポケモン｡ きれいな　歌声を　響かせながら 海の上を　泳いで　いく｡' 
    },
    health: 100,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [79]
  },
  {
    id: 235,
    order: 235,
    number: 235,
    pokedex: 101,
    name: {
      es: 'Electrode',
      en: 'Electrode',
      ja: 'マルマイン' 
    },
    info: {
      type: {
        es: 'Pokémon Bola',
        en: 'Sphere Pokémon',
        ja: 'きゅうたいポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '66.6',
        en: '146.8',
        ja: '66.6'
      }
    },
    artist: 'DOM',
    attacks: [
      {
        name: {
          es: 'Bola Voltio',
          en: 'Electro Ball',
          ja: 'エレキボール' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuanta más energía almacena, mayor velocidad alcanza, aunque aumenta también el riesgo de que explote.',
      en: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
      ja: '電気エネルギーを　溜めこむほど 高速で　動けるようになるが そのぶん　爆発　しやすい｡' 
    },
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [99, 100]
  },
  {
    id: 236,
    order: 236,
    number: 236,
    pokedex: 65,
    name: {
      es: 'Alakazam',
      en: 'Alakazam',
      ja: 'フーディン' 
    },
    info: {
      type: {
        es: 'Pokémon Psi',
        en: 'Psi Pokémon',
        ja: 'ねんりきポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '48.0',
        en: '105.8',
        ja: '48.0'
      }
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: 'Psíquico',
          en: 'Psychic',
          ja: 'サイコキネシス' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.',
          en: 'This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.',
          ja: '相手のバトルポケモンのエネルギーの数×30ダメージ追加。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee una capacidad intelectual fuera de lo común que le permite recordar todo lo sucedido desde el instante de su nacimiento.',
      en: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
      ja: '非常に　高い　知能を　持つ｡ 生まれてから　死ぬまでの　できごとを すべて　覚えている　という｡' 
    },
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [115, 116, 117]
  },
  {
    id: 237,
    order: 237,
    number: 237,
    pokedex: 79,
    name: {
      es: 'Slowpoke',
      en: 'Slowpoke',
      ja: 'ヤドン' 
    },
    info: {
      type: {
        es: 'Pokémon Atontado',
        en: 'Dopey Pokémon',
        ja: 'まぬけポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '36.0',
        en: '79.4',
        ja: '36.0'
      }
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: 'Coletón',
          en: 'Tail Whap',
          ja: 'しっぽではたく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [119],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Increíblemente lento y torpe. Tarda cinco segundos en sentir dolor si lo atacan.',
      en: 'It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.',
      ja: '動きが　のろく　間抜け｡ 叩かれても　５秒　たってから 痛さを　感じるほどだ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [118, 119]
  },
  {
    id: 238,
    order: 238,
    number: 238,
    pokedex: 50,
    name: {
      es: 'Diglett',
      en: 'Diglett',
      ja: 'ディグダ' 
    },
    info: {
      type: {
        es: 'Pokémon Topo',
        en: 'Mole Pokémon',
        ja: 'もぐらポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '0.8',
        en: '1.8',
        ja: '0.8'
      }
    },
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: {
          es: 'Bofetón Lodo',
          en: 'Mud-Slap',
          ja: 'どろかけ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [140],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vive 1 m por debajo del suelo, donde se alimenta de raíces. A veces también aparece en la superficie.',
      en: 'It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.',
      ja: '地下１メートルくらいを　掘りすすみ 木の根っこなどを　かじって　生きる｡ たまに　地上に　顔を出す｡' 
    },
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [139, 140]
  },
  {
    id: 239,
    order: 239,
    number: 239,
    pokedex: 104,
    name: {
      es: 'Cubone',
      en: 'Cubone',
      ja: 'カラカラ' 
    },
    info: {
      type: {
        es: 'Pokémon Solitario',
        en: 'Lonely Pokémon',
        ja: 'こどくポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: 'Gruñido',
          en: 'Growl',
          ja: 'なきごえ' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen -20 puntos de daño.',
          en: 'During your opponent’s next turn, attacks used by the Defending Pokémon do −20 damage.',
          ja: '次の相手の番、このワザを受けたポケモンが使うワザのダメージを-20する。' 
        }
      },
    ],
    evolve: [152],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando llora al acordarse de su madre fallecida, su llanto resuena en el cráneo que lleva en la cabeza.',
      en: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
      ja: '死に別れた　母親を　思い出し 泣くと　頭に　被った　骨の　中で 物悲しく　響くのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 152, 153, 264]
  },
  {
    id: 240,
    order: 240,
    number: 240,
    pokedex: 31,
    name: {
      es: 'Nidoqueen',
      en: 'Nidoqueen',
      ja: 'ニドクイン' 
    },
    info: {
      type: {
        es: 'Pokémon Taladro',
        en: 'Drill Pokémon',
        ja: 'ドリルポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'aoki',
    attacks: [
      {
        name: {
          es: 'Flechazo',
          en: 'Lovestrike',
          ja: 'ラブラブアタック' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 50 puntos de daño más por cada uno de tus Nidoking en Banca.',
          en: 'This attack does 50 more damage for each of your Benched Nidoking.',
          ja: '自分のベンチの「ニドキング」の数×50ダメージ追加' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su defensa destaca sobre la capacidad ofensiva. Usa las escamas del cuerpo como una coraza para proteger a su prole de cualquier ataque.',
      en: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.',
      ja: '攻めるよりも　守るほうが　得意｡ 鎧のような　ウロコで　いかなる 攻撃からも　子どもを　守る｡' 
    },
    health: 140,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [166, 167, 168]
  },
  {
    id: 241,
    order: 241,
    number: 241,
    pokedex: 34,
    name: {
      es: 'Nidoking',
      en: 'Nidoking',
      ja: 'ニドキング' 
    },
    info: {
      type: {
        es: 'Pokémon Taladro',
        en: 'Drill Pokémon',
        ja: 'ドリルポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '62.0',
        en: '136.7',
        ja: '62.0'
      }
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: 'Cuerno Veneno',
          en: 'Poison Horn',
          ja: 'どくのつの' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent’s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una vez que se desboca, no hay quien lo pare. Solo se calma ante Nidoqueen, su compañera de toda la vida.',
      en: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.',
      ja: '暴れると　手が　つけられなくなるが 長年　連れ添った　ニドクインの 前では　穏やかな　顔に　なる｡' 
    },
    health: 150,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [169, 170, 171]
  },
  {
    id: 242,
    order: 242,
    number: 242,
    pokedex: 42,
    name: {
      es: 'Golbat',
      en: 'Golbat',
      ja: 'ゴルバット' 
    },
    info: {
      type: {
        es: 'Pokémon Murciélago',
        en: 'Bat Pokémon',
        ja: 'こうもりポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '55.0',
        en: '121.3',
        ja: '55.0'
      }
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: 'Ataque Ala',
          en: 'Wing Attack',
          ja: 'つばさでうつ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Le encanta chuparles la sangre a los seres vivos. En ocasiones comparte la preciada colecta con otros congéneres hambrientos.',
      en: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
      ja: '生き物の　血液が　好物｡ 腹ペコの　仲間に　吸った　血を 分け与えることも　あるという｡' 
    },
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [172, 173]
  },
  {
    id: 243,
    order: 243,
    number: 243,
    pokedex: 110,
    name: {
      es: 'Weezing',
      en: 'Weezing',
      ja: 'マタドガス' 
    },
    info: {
      type: {
        es: 'Pokémon Gas Venenoso',
        en: 'Poison Gas Pokémon',
        ja: 'どくガスポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '9.5',
        en: '20.9',
        ja: '9.5'
      }
    },
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    ability: {
      name: {
          es: 'Escape de Gas',
          en: 'Gas Leak',
          ja: 'もれだすガス' 
        },
      description: {
       es: 'Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes dejar al Pokémon Activo de tu rival Envenenado.',
       en: 'Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned',
       ja: 'このポケモンがバトル場にいるなら、自分の番に1回使える。相手のバトルポケモンをどくにする。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Si uno de los gemelos Koffing se infla, el otro se desinfla. Mezclan constantemente sus venenosos gases.',
      en: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
      ja: 'どちらかが　ふくらむと　片方は しぼむ　双子の　ドガース｡　いつも 体内の　毒ガスを　混ぜている｡' 
    },
    health: 110,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [176, 177, 335, 336]
  },
  {
    id: 244,
    order: 244,
    number: 244,
    pokedex: 149,
    name: {
      es: 'Dragonite',
      en: 'Dragonite',
      ja: 'カイリュー' 
    },
    info: {
      type: {
        es: 'Pokémon Dragón',
        en: 'Dragon Pokémon',
        ja: 'ドラゴンポケモン'
      },
      height: {
        es: '2.2',
        en: '7\'3"',
        ja: '2.2'
      },
      weight: {
        es: '210.0',
        en: '463',
        ja: '210.0'
      }
    },
    artist: 'Gemi',
    attacks: [
      {
        name: {
          es: 'Cometa Draco',
          en: 'Draco Meteor',
          ja: 'りゅうせいぐん' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Se elige 4 veces a un Pokémon aleatorio de tu rival. Haz a cada uno 50 puntos de daño por cada vez que haya resultado elegido.',
          en: '1 of your opponent’s Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.',
          ja: '相手のポケモンがランダムに選ばれ、選ばれたポケモン全員に、選ばれた回数×50ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Dicen que viven en una isla en algún lugar del océano que solo ellos habitan.',
      en: 'It is said that somewhere in the ocean lies an island where these gather. Only they live there.',
      ja: '広い　海の　どこかには カイリューだけが　集まって　暮らす 島が　あるらしい｡' 
    },
    health: 160,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [183, 184, 185]
  },
  {
    id: 245,
    order: 245,
    number: 245,
    pokedex: 18,
    name: {
      es: 'Pidgeot',
      en: 'Pidgeot',
      ja: 'ピジョット' 
    },
    info: {
      type: {
        es: 'Pokémon Pájaro',
        en: 'Bird Pokémon',
        ja: 'とりポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '39.5',
        en: '87.1',
        ja: '39.5'
      }
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: 'Ataque Ala',
          en: 'Wing Attack',
          ja: 'つばさでうつ' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Ahuyentar',
          en: 'Drive Off',
          ja: 'おいはらう' 
        },
      description: {
       es: 'Una vez durante tu turno, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).',
       en: 'Once during your turn, you may switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
       ja: '自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。（バトル場に出すポケモンは相手が選ぶ。）' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.',
      en: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
      ja: 'エサを　探すとき　水面　すれすれを 滑るように　飛んで コイキングなどを　わしづかみにする｡' 
    },
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [186, 187, 188, 343, 344]
  },
  {
    id: 246,
    order: 246,
    number: 246,
    pokedex: 52,
    name: {
      es: 'Meowth',
      en: 'Meowth',
      ja: 'ニャース' 
    },
    info: {
      type: {
        es: 'Pokémon Gato Araña',
        en: '	Scratch Cat Pokémon',
        ja: 'ばけねこポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.2',
        en: '9.3',
        ja: '4.2'
      }
    },
    artist: 'Mina Nakai',
    attacks: [
      {
        name: {
          es: 'Día de Pago',
          en: 'Pay Day',
          ja: 'ネコにこばん' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Roba 1 carta.',
          en: 'Draw a card.',
          ja: '自分の山札を1枚引く。' 
        }
      },
    ],
    evolve: [197],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante el día, se dedica a dormir. De noche, vigila su territorio con un brillo en los ojos.',
      en: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
      ja: '昼間は　寝てばかりいる｡ 夜になると　目が　輝き 縄張りを　歩きまわる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [196, 197, 384]
  },
  {
    id: 247,
    order: 247,
    number: 247,
    pokedex: 132,
    name: {
      es: 'Ditto',
      en: 'Ditto',
      ja: 'メタモン' 
    },
    info: {
      type: {
        es: 'Pokémon Transformación',
        en: 'Transform Pokémon',
        ja: 'へんしんポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Jerky',
    attacks: [
      {
        name: {
          es: 'Copietear',
          en: 'Copy Anything',
          ja: 'どこでもコピー' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. Si este Pokémon no tiene la Energía necesaria para usar ese ataque, este ataque no hace nada.',
          en: 'Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.',
          ja: '相手の場のポケモンが持ってるワザを1つ選び、このワザとして使う。選んだワザに必要なエネルギーがこのポケモンについていなければ、このワザは失敗。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su habilidad para transformarse es perfecta, pero, si se le hace reír, perderá la fuerza y no podrá mantenerse transformado.',
      en: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.',
      ja: '変身は　完璧なのだが 笑わされて　力が　抜けると 変身は　解けてしまう｡' 
    },
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [205]
  },
  {
    id: 248,
    order: 248,
    number: 248,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: 'Placaje',
          en: 'Tackle',
          ja: 'たいあたり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [45, 80, 102, 206, 207, 208, 305, 347, 392, 418, 498, 358, 609]
  },
  {
    id: 249,
    order: 249,
    number: 249,
    pokedex: 137,
    name: {
      es: 'Porygon',
      en: 'Porygon',
      ja: 'ポリゴン' 
    },
    info: {
      type: {
        es: 'Pokémon Virtual',
        en: 'Virtual Pokémon',
        ja: 'バーチャルポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '36.5',
        en: '80.5',
        ja: '36.5'
      }
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: 'Afilar',
          en: 'Sharpen',
          ja: 'かくばる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: 'Escaneo de Datos',
          en: 'Data Scan',
          ja: 'データスキャン' 
        },
      description: {
       es: 'Una vez durante tu turno, puedes mirar la primera carta de tu baraja.',
       en: 'Once during your turn, you may look at the top card of your deck.',
       ja: '自分の番に1回使える。自分の山札を上から1枚見て、元に戻す。' 
     }
    },
    evolve: [500],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se trata del primer Pokémon del mundo creado a partir de códigos de programación gracias al uso de tecnología de vanguardia.',
      en: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
      ja: '最高の　科学力を　使い 世界で　はじめて　プログラムにより 作られた　人工の　ポケモン｡' 
    },
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [209]
  },
  {
    id: 250,
    order: 250,
    number: 250,
    pokedex: 143,
    name: {
      es: 'Snorlax',
      en: 'Snorlax',
      ja: 'カビゴン' 
    },
    info: {
      type: {
        es: 'Pokémon Dormir',
        en: 'Sleeping Pokémon',
        ja: 'いねむりポケモン'
      },
      height: {
        es: '2.1',
        en: '6\'11"',
        ja: '2.1'
      },
      weight: {
        es: '460.0',
        en: '1014.1',
        ja: '460.0'
      }
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: 'Rodar',
          en: 'Rollout',
          ja: 'ころがる' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.',
      en: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
      ja: '１日に　食べ物を　４００キロ 食べないと　気がすまない｡ 食べ終わると　眠ってしまう｡' 
    },
    health: 150,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [211]
  },
  {
    id: 251,
    order: 251,
    number: 251,
    pokedex: 3,
    name: {
      es: 'Venusaur EX',
      en: 'Venusaur EX',
      ja: 'フシギバナEX'
    },
    info: {
      type: {
        es: 'Pokémon Semilla',
        en: 'Seed Pokémon',
        ja: 'たねポケモン'
      },
      height: {
        es: '2.0',
        en: '6\'07"',
        ja: '2.0'
      },
      weight: {
        es: '100.0',
        en: '220,5',
        ja: '100.0'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Hoja Afilada',
          en: 'Razor Leaf',
          ja: 'はっぱカッター'
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      },
      {
        name: {
          es: 'Floración Gigante',
          en: 'Giant Bloom',
          ja: 'ジャイアントブルーム'
        },
        damage: 100,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Cura 30 puntos de daño a este Pokémon.',
          en: 'Heal 30 damage from this Pokémon.',
          ja: 'このポケモンのHPを30回復。'
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.',
      en: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
      ja: '太陽エネルギーを 栄養にして 大きな花が 開く。 日なたに 引き寄せられるように 移動する。'
    },
    health: 190,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [1, 2, 4, 227, 395]
  },
  {
    id: 252,
    order: 252,
    number: 252,
    pokedex: 103,
    name: {
      es: 'Exeggutor EX',
      en: 'Exeggutor EX',
      ja: 'ナッシー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Coco',
        en: 'Coconut Pokémon',
        ja: 'やしのみポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '120',
        en: '264.6',
        ja: '120'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Golpe Tropical',
          en: 'Tropical Swing',
          ja: 'トロピカルスイング' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.',
          en: 'Flip a coin. If heads, this attack does 40 more damage.',
          ja: 'コインを1回投げてオモテなら、40ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '３つの　頭は　べつのことを 考えている｡　自分以外は あまり　興味がない　ようだ｡' 
    },
    health: 160,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [21, 23, 287]
  },
  {
    id: 253,
    order: 253,
    number: 253,
    pokedex: 6,
    name: {
      es: 'Charizard EX',
      en: 'Charizard EX',
      ja: 'リザードン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '90.5',
        en: '199.5',
        ja: '90.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Tormenta Carmesí',
          en: 'Crimson Storm',
          ja: 'ぐれんのあらし' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Fuego de este Pokémon.',
          en: 'Discard 2 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを2個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
      en: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      ja: '岩石も　焼けるような 灼熱の　炎を　吐いて 山火事を　起こすことが　ある｡' 
    },
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 36, 230, 280, 284, 404]
  },  
  {
    id: 254,
    order: 254,
    number: 254,
    pokedex: 59,
    name: {
      es: 'Arcanine EX',
      en: 'Arcanine EX',
      ja: 'ウインディ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Leyenda',
        en: 'Legendary Pokémon',
        ja: 'でんせつポケモン'
      },
      height: {
        es: '1.9',
        en: '6\'3"',
        ja: '1.9'
      },
      weight: {
        es: '155.0',
        en: '341.7',
        ja: '155.0'
      }
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: 'Infierno Desatado',
          en: 'Inferno Onrush',
          ja: 'もうかのとっしん' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este Pokémon también se hace 20 puntos de daño a sí mismo.',
          en: 'This Pokémon also does 20 damage to itself.',
          ja: 'このポケモンにも20ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuenta un antiguo pergamino que la gente se quedaba fascinada al verlo correr por las praderas.',
      en: 'An ancient picture scroll shows that people were captivated by its movement as it ran through prairies.',
      ja: '草原を　駆け抜ける　様子は 人々の　心を　虜にしたと 昔の　絵巻に　記されていた｡' 
    },
    health: 150,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [39, 41]
  },
  {
    id: 255,
    order: 255,
    number: 255,
    pokedex: 145,
    name: {
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: 'ファイヤー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: 'Danza Infernal',
          en: 'Inferno Dance',
          ja: 'れっかのまい' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'Lanza 3 monedas. Une a tus Pokémon Fuego en Banca, de la manera que desees, tantas Energías Fuego de tu área de Energía como caras hayan salido.',
          en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
          ja: 'コインを3回投げ、オモテの数ぶんの炎エネルギーを自分のエネルギーゾーンから出し、ベンチの炎ポケモンに好きなようにつける。' 
        }
      },
      {
        name: {
          es: 'Explosión de Calor',
          en: 'Heat Blast',
          ja: 'ヒートブラスト' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.',
      en: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
      ja: '羽ばたくと　翼の　炎が 赤く　美しく　きらめく 伝説の　鳥ポケモンの　１匹｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.ADD
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [47, 274, 397]
  },
  {
    id: 256,
    order: 256,
    number: 256,
    pokedex: 9,
    name: {
      es: 'Blastoise EX',
      en: 'Blastoise EX',
      ja: 'カメックス EX' 
    },
    info: {
      type: {
        es: 'Pokémon Armazón',
        en: 'Shellfish Pokémon',
        ja: 'こうらポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '85.5',
        en: '188.5',
        ja: '85.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Surf',
          en: 'Surf',
          ja: 'なみのり' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      },
      {
        name: {
          es: 'Hidrobazuca',
          en: 'Hydro Bazooka',
          ja: 'ハイドロバズーカ' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si este Pokémon tiene por lo menos 2 Energías Agua adicionales unidas a él, este ataque hace 60 puntos de daño más.',
          en: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.',
          ja: '追加で水エネルギーが2個ついているなら、60ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
      en: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
      ja: '体が　重たく　のしかかって 相手を　気絶させる｡ ピンチの　ときは　殻に　隠れる｡' 
    },
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [53, 54, 56, 232, 405]
  },
  {
    id: 257,
    order: 257,
    number: 257,
    pokedex: 121,
    name: {
      es: 'Starmie EX',
      en: 'Starmie EX',
      ja: 'スターミー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Misterioso',
        en: 'Mysterious Pokémon',
        ja: 'なぞのポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '80.0',
        en: '176.4',
        ja: '80.0'
      }
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: 'Hidroestallido',
          en: 'Hydro Splash',
          ja: 'ハイドロスプラッシュ' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Su órgano central, conocido como núcleo, brilla con los colores del arcoíris cuando se dispone a liberar sus potentes poderes psíquicos.',
      en: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.',
      ja: '強烈な　サイコパワーを　放つとき コアと　呼ばれる　器官が 七色に　きらめく｡' 
    },
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [74, 76]
  },
  {
    id: 258,
    order: 258,
    number: 258,
    pokedex: 144,
    name: {
      es: 'Articuno EX',
      en: 'Articuno EX',
      ja: 'フリーザー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Congelar',
        en: 'Freeze Pokémon',
        ja: '	れいとうポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '55.4',
        en: '122.1',
        ja: '55.4'
      }
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: 'Ala Gélida',
          en: 'Ice Wing',
          ja: 'アイスウイング' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: {
          es: 'Ventisca',
          en: 'Blizzard',
          ja: 'ふぶき' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
          ja: '相手のベンチポケモン全員にも10ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.',
      en: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
      ja: '青く　美しい　羽根は　氷で できていると　言われている｡　長い 尾を　たなびかせ　雪山を　飛ぶ｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [84, 275]
  },
  {
    id: 259,
    order: 259,
    number: 259,
    pokedex: 25,
    name: {
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: 'ピカチュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Circuito Circular',
          en: 'Circle Circuit',
          ja: 'エレキサークル' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Eléctricos en Banca.',
          en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
          ja: '自分のベンチの雷ポケモンの数×30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [96, 281, 285]
  },
  {
    id: 260,
    order: 260,
    number: 260,
    pokedex: 145,
    name: {
      es: 'Zapdos EX',
      en: 'Zapdos EX',
      ja: 'サンダー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '52.6',
        en: '116',
        ja: '52.6'
      }
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: 'Picotazo',
          en: 'Peck',
          ja: 'つつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: {
          es: 'Huracán Atronador',
          en: 'Thundering Hurricane',
          ja: 'ハリケーンサンダー' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
        es: 'Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.',
        en: 'Flip 4 coins. This attack does 50 damage for each heads.',
        ja: '	コインを4回投げ、オモテの数×50ダメージ。' 
      }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta.',
      en: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
      ja: '電気を　自在に　操る｡ 真っ黒な　雷雲の　中に 巣があると　言い伝えられている｡' 
    },
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [104, 276]
  },
  {
    id: 261,
    order: 261,
    number: 261,
    pokedex: 94,
    name: {
      es: 'Gengar EX',
      en: 'Gengar EX',
      ja: 'ゲンガー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Sombra',
        en: 'Shadow Pokémon',
        ja: 'シャドーポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '40.5',
        en: '89.3',
        ja: '40.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Disparo Embrujado',
          en: 'Spooky Shot',
          ja: 'ホロウショット' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: {
          es: 'Hechizo Sombrío',
          en: 'Shadowy Spellbind',
          ja: 'かげのじゅばく' 
        },
      description: {
       es: 'Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.',
       en: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.',
       ja: 'このポケモンがバトル場にいるかぎり、相手は手札からサポートカードを出して使えない。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.',
      en: 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.',
      ja: '命を　奪おうと　決めた 獲物の　影に　潜り込み じっと　チャンスを　狙ってる｡' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 123, 277, 392]
  },
  {
    id: 262,
    order: 262,
    number: 262,
    pokedex: 150,
    name: {
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: 'ミュウツー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Genético',
        en: 'Genetic Pokémon',
        ja: 'いでんしポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '122.0',
        en: '269',
        ja: '122.0'
      }
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: 'Esfera Psíquica',
          en: 'Psychic Sphere',
          ja: 'ねんどうだん' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Guía Psi',
          en: 'Psydrive',
          ja: 'サイコドライブ' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Psíquica de este Pokémon.',
          en: 'Discard 2 Psychic Energy from this Pokémon.',
          ja: 'このポケモンから超エネルギーを2個トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '１人の　科学者が　何年も 恐ろしい　遺伝子　研究を 続けた　結果　誕生した｡' 
    },
    health: 150,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [129, 282, 286]
  },
  {
    id: 263,
    order: 263,
    number: 263,
    pokedex: 68,
    name: {
      es: 'Machamp EX',
      en: 'Machamp EX',
      ja: 'カイリキー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Superpoder',
        en: 'Superpower Pokémon',
        ja: 'かいりきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '130.0',
        en: '286.6',
        ja: '130.0'
      }
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: 'Megapuño',
          en: 'Mega Punch',
          ja: 'メガトンパンチ' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve rápidamente sus cuatro brazos para asestar incesantes golpes y puñetazos desde todos los ángulos.',
      en: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
      ja: '４本の腕を　すばやく　動かし あらゆる　角度から　休むことなく パンチや　チョップを　叩きこむ｡' 
    },
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144, 146, 278]
  },
  {
    id: 264,
    order: 264,
    number: 264,
    pokedex: 105,
    name: {
      es: 'Marowak EX',
      en: 'Marowak EX',
      ja: 'ガラガラ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Apilahueso',
        en: 'Bone Keeper Pokémon',
        ja: 'ほねずきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '45.0',
        en: '99.2',
        ja: '45.0'
      }
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: 'Huesomerang',
          en: 'Bonemerang',
          ja: 'ホネブーメラン' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
          es: 'Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.',
          en: 'Flip 2 coins. This attack does 80 damage for each heads.',
          ja: 'コインを2回投げ、オモテの数×80ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Ha evolucionado tras fortalecerse y superar su pena. Ahora lucha con arrojo blandiendo su hueso a modo de arma.',
      en: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.',
      ja: '悲しみを　乗りこえて　たくましく 進化した｡　骨を　武器にして 勇敢に　敵と　渡り合う｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [151, 153, 239]
  },
  {
    id: 265,
    order: 265,
    number: 265,
    pokedex: 40,
    name: {
      es: 'Wigglytuff EX',
      en: 'Wigglytuff EX',
      ja: 'プクリン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Globo',
        en: 'Balloon Pokémon',
        ja: 'ふうせんポケモン'
      },
      height: {
        es: '1',
        en: '3\'3',
        ja: '1'
      },
      weight: {
        es: '12.0',
        en: '26.5',
        ja: '12.0'
      }
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: 'Canción Adormecedora',
          en: 'Sleepy Song',
          ja: 'スリーピーソング' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Dormido.',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '相手のバトルポケモンをねむりにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo.',
      en: 'It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.',
      ja: 'キメ細やかな　毛皮の　持ち主｡ 怒らせると　どんどん　ふくらみ のしかかってくるので　注意｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 195, 279, 394]
  },
  {
    id: 266,
    order: 266,
    number: 266,
    name: {
      es: 'Erika',
      en: 'Erika',
      ja: 'エリカ' 
    },
    artist: 'saino misaki',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cura 50 puntos de daño a 1 de tus Pokémon Planta.',
      en: 'Heal 50 damage from 1 of your Grass Pokémon.',
      ja: '自分の草ポケモン1匹のHPを50回復。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 267,
    order: 267,
    number: 267,
    name: {
      es: 'Misty',
      en: 'Misty',
      ja: 'カスミ' 
    },
    artist: 'Sanosuke Sakuma',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Elige 1 de tus Pokémon Agua, y luego lanza 1 moneda hasta que salga cruz. Por cada cara, une 1 Energía Agua de tu área de Energía a ese Pokémon.',
      en: 'Choose 1 of your Water Pokémon, and flip a coin until you get tails. For each heads, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
      ja: '自分の水ポケモンを1匹選ぶ。ウラが出るまでコインを投げ、オモテの数ぶんの水エネルギーを自分のエネルギーゾーンから出し、そのポケモンにつける。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 268,
    order: 268,
    number: 268,
    name: {
      es: 'Blaine',
      en: 'Blaine',
      ja: 'カツラ' 
    },
    artist: 'GOSSAN',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante este turno, los ataques de tu Ninetales, tu Rapidash o tu Magmar hacen +30 puntos de daño al Pokémon Activo de tu rival.',
      en: 'During this turn, attacks used by your Ninetales, Rapidash, or Magmar do +30 damage to your opponent’s Active Pokémon.',
      ja: 'この番、自分の「キュウコン」「ギャロップ」「ブーバー」が使うワザの、相手のバトルポケモンへのダメージを+30する' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 269,
    order: 269,
    number: 269,
    name: {
      es: 'Koga',
      en: 'Koga',
      ja: 'キョウ' 
    },
    artist: 'Souichirou Gunjima',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Pon a tu Muk o a tu Weezing que esté en el Puesto Activo en tu mano.',
      en: 'Put your Muk or Weezing in the Active Spot into your hand.',
      ja: '自分のバトル場の「ベトベトン」「マタドガス」を手札にもどす。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 270,
    order: 270,
    number: 270,
    name: {
      es: 'Giovanni',
      en: 'Giovanni',
      ja: 'サカキ' 
    },
    artist: 'Hideki Ishikawa',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Durante este turno, los ataques de tus Pokémon hacen +10 puntos de daño al Pokémon Activo de tu rival.',
      en: 'During this turn, attacks used by your Pokémon do +10 damage to your opponent’s Active Pokémon.',
      ja: 'この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージを+10する。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MEWTWO,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 271,
    order: 271,
    number: 271,
    name: {
      es: 'Brock',
      en: 'Brock',
      ja: 'タケシ' 
    },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Une 1 Energía de tu área de Energía a tu Golem o a tu Onix.',
      en: 'Take 1 Fighting Energy from your Energy Zone and attach it to Golem or Onix.',
      ja: '自分のエネルギーゾーンから闘エネルギーを1個出し、「ゴローニャ」または「イワーク」につける。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 272,
    order: 272,
    number: 272,
    name: {
      es: 'Sabrina',
      en: 'Sabrina',
      ja: 'ナツメ' 
    },
    artist: 'GIDORA',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).',
      en: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
      ja: '相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］'
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 273, 367, 366, 368, 379]
  },
  {
    id: 273,
    order: 273,
    number: 273,
    name: {
      es: 'Teniente Surge',
      en: 'Lt. Surge',
      ja: 'マチス' 
    },
    artist: 'nagimiso',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve todas las Energías Eléctricas de tus Pokémon en Banca a tu Raichu, tu Electrode o tu Electabuzz en el Puesto Activo.',
      en: 'Move all Lightning Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.',
      ja: '自分のバトル場の「ライチュウ」「マルマイン」「エレブー」に、ベンチポケモン全員から雷エネルギーをすべてつけ替える。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PIKACHU,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 367, 366, 368, 379]
  },
  {
    id: 274,
    order: 274,
    number: 274,
    pokedex: 145,
    name: {
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: 'ファイヤー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'hncl',
    attacks: [
      {
        name: {
          es: 'Danza Infernal',
          en: 'Inferno Dance',
          ja: 'れっかのまい' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'Lanza 3 monedas. Une a tus Pokémon Fuego en Banca, de la manera que desees, tantas Energías Fuego de tu área de Energía como caras hayan salido.',
          en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
          ja: 'コインを3回投げ、オモテの数ぶんの炎エネルギーを自分のエネルギーゾーンから出し、ベンチの炎ポケモンに好きなようにつける。' 
        }
      },
      {
        name: {
          es: 'Explosión de Calor',
          en: 'Heat Blast',
          ja: 'ヒートブラスト' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.',
      en: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
      ja: '羽ばたくと　翼の　炎が 赤く　美しく　きらめく 伝説の　鳥ポケモンの　１匹｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.ADD
    ],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [47, 255, 397]
  },
  {
    id: 275,
    order: 275,
    number: 275,
    pokedex: 144,
    name: {
      es: 'Articuno EX',
      en: 'Articuno EX',
      ja: 'フリーザー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Congelar',
        en: 'Freeze Pokémon',
        ja: '	れいとうポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '55.4',
        en: '122.1',
        ja: '55.4'
      }
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: 'Ala Gélida',
          en: 'Ice Wing',
          ja: 'アイスウイング' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: {
          es: 'Ventisca',
          en: 'Blizzard',
          ja: 'ふぶき' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
          ja: '相手のベンチポケモン全員にも10ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Se dice que sus bellas alas azules se componen de hielo. Vuela en torno a las montañas nevadas con su larga cola al viento.',
      en: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
      ja: '青く　美しい　羽根は　氷で できていると　言われている｡　長い 尾を　たなびかせ　雪山を　飛ぶ｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MEWTWO
    ],
    related: [84, 258]
  },
  {
    id: 276,
    order: 276,
    number: 276,
    pokedex: 145,
    name: {
      es: 'Zapdos EX',
      en: 'Zapdos EX',
      ja: 'サンダー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '52.6',
        en: '116',
        ja: '52.6'
      }
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: 'Picotazo',
          en: 'Peck',
          ja: 'つつく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: {
          es: 'Huracán Atronador',
          en: 'Thundering Hurricane',
          ja: 'ハリケーンサンダー' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
        es: 'Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.',
        en: 'Flip 4 coins. This attack does 50 damage for each heads.',
        ja: '	コインを4回投げ、オモテの数×50ダメージ。' 
      }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Posee el poder de controlar la electricidad a su antojo. Según la creencia popular, anida oculto en oscuros nubarrones de tormenta.',
      en: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
      ja: '電気を　自在に　操る｡ 真っ黒な　雷雲の　中に 巣があると　言い伝えられている｡' 
    },
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [104, 260]
  },
  {
    id: 277,
    order: 277,
    number: 277,
    pokedex: 94,
    name: {
      es: 'Gengar EX',
      en: 'Gengar EX',
      ja: 'ゲンガー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Sombra',
        en: 'Shadow Pokémon',
        ja: 'シャドーポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '40.5',
        en: '89.3',
        ja: '40.5'
      }
    },
    artist: 'NC Empire',
    attacks: [
      {
        name: {
          es: 'Disparo Embrujado',
          en: 'Spooky Shot',
          ja: 'ホロウショット' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: {
          es: 'Hechizo Sombrío',
          en: 'Shadowy Spellbind',
          ja: 'かげのじゅばく' 
        },
      description: {
       es: 'Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.',
       en: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.',
       ja: 'このポケモンがバトル場にいるかぎり、相手は手札からサポートカードを出して使えない。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.',
      en: 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.',
      ja: '命を　奪おうと　決めた 獲物の　影に　潜り込み じっと　チャンスを　狙ってる｡' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [120, 121, 123, 261, 392]
  },
  {
    id: 278,
    order: 278,
    number: 278,
    pokedex: 68,
    name: {
      es: 'Machamp EX',
      en: 'Machamp EX',
      ja: 'カイリキー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Superpoder',
        en: 'Superpower Pokémon',
        ja: 'かいりきポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '130.0',
        en: '286.6',
        ja: '130.0'
      }
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: 'Megapuño',
          en: 'Mega Punch',
          ja: 'メガトンパンチ' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Mueve rápidamente sus cuatro brazos para asestar incesantes golpes y puñetazos desde todos los ángulos.',
      en: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
      ja: '４本の腕を　すばやく　動かし あらゆる　角度から　休むことなく パンチや　チョップを　叩きこむ｡' 
    },
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.CHARIZARD,
    ],
    related: [143, 144, 146, 263]
  },
  {
    id: 279,
    order: 279,
    number: 279,
    pokedex: 40,
    name: {
      es: 'Wigglytuff EX',
      en: 'Wigglytuff EX',
      ja: 'プクリン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Globo',
        en: 'Balloon Pokémon',
        ja: 'ふうせんポケモン'
      },
      height: {
        es: '1',
        en: '3\'3',
        ja: '1'
      },
      weight: {
        es: '12.0',
        en: '26.5',
        ja: '12.0'
      }
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: 'Canción Adormecedora',
          en: 'Sleepy Song',
          ja: 'スリーピーソング' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Dormido.',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '相手のバトルポケモンをねむりにする。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Tiene un pelaje muy fino. Se recomienda no enfadarlo, o se inflará y golpeará con todo su cuerpo.',
      en: 'It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.',
      ja: 'キメ細やかな　毛皮の　持ち主｡ 怒らせると　どんどん　ふくらみ のしかかってくるので　注意｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.PIKACHU
    ],
    related: [193, 195, 265, 394]
  },
  {
    id: 280,
    order: 280,
    number: 280,
    pokedex: 6,
    name: {
      es: 'Charizard EX',
      en: 'Charizard EX',
      ja: 'リザードン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '90.5',
        en: '199.5',
        ja: '90.5'
      }
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Tormenta Carmesí',
          en: 'Crimson Storm',
          ja: 'ぐれんのあらし' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Fuego de este Pokémon.',
          en: 'Discard 2 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを2個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
      en: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      ja: '岩石も　焼けるような 灼熱の　炎を　吐いて 山火事を　起こすことが　ある｡' 
    },
    health: 180,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.CHARIZARD
    ],
    related: [33, 34, 36, 230, 253, 284, 404]
  },
  {
    id: 281,
    order: 281,
    number: 281,
    pokedex: 25,
    name: {
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: 'ピカチュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: 'Circuito Circular',
          en: 'Circle Circuit',
          ja: 'エレキサークル' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Eléctricos en Banca.',
          en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
          ja: '自分のベンチの雷ポケモンの数×30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
    ],
    related: [96, 259, 285]
  },
  {
    id: 282,
    order: 282,
    number: 282,
    pokedex: 150,
    name: {
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: 'ミュウツー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Genético',
        en: 'Genetic Pokémon',
        ja: 'いでんしポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '122.0',
        en: '269',
        ja: '122.0'
      }
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: 'Esfera Psíquica',
          en: 'Psychic Sphere',
          ja: 'ねんどうだん' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Guía Psi',
          en: 'Psydrive',
          ja: 'サイコドライブ' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Psíquica de este Pokémon.',
          en: 'Discard 2 Psychic Energy from this Pokémon.',
          ja: 'このポケモンから超エネルギーを2個トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '１人の　科学者が　何年も 恐ろしい　遺伝子　研究を 続けた　結果　誕生した｡' 
    },
    health: 150,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MEWTWO,
    ],
    related: [129, 262, 286]
  },
  {
    id: 283,
    order: 283,
    number: 283,
    pokedex: 151,
    name: {
      es: 'Mew',
      en: 'Mew',
      ja: 'ミュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Nueva Especie',
        en: 'New Species Pokémon',
        ja: 'しんしゅポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Amelicart',
    attacks: [
      {
        name: {
          es: 'Psicoinforme',
          en: 'Psy Report',
          ja: 'サイコリポート' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: 'Tu rival enseña las cartas de su mano.',
          en: 'Your opponent reveals their hand.',
          ja: '相手の手札のオモテをすべて見る。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: 'あらゆる　技を　使うため ポケモンの　先祖と　考える 学者が　たくさん　いる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.SPECIAL_MISSION
    ],
    extra: {
      es: 'Misión Especial',
      en: 'Special Mission',
      ja: '特別任務' 
    },
    related: [317]
  },
  {
    id: 284,
    order: 284,
    number: 284,
    pokedex: 6,
    name: {
      es: 'Charizard EX',
      en: 'Charizard EX',
      ja: 'リザードン EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '90.5',
        en: '199.5',
        ja: '90.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Tormenta Carmesí',
          en: 'Crimson Storm',
          ja: 'ぐれんのあらし' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Fuego de este Pokémon.',
          en: 'Discard 2 Fire Energy from this Pokémon.',
          ja: 'このポケモンから炎エネルギーを2個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
      en: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
      ja: '岩石も　焼けるような 灼熱の　炎を　吐いて 山火事を　起こすことが　ある｡' 
    },
    health: 180,
    rarity: CardRarityENUM.CROWN,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD,
    ],
    related: [33, 34, 36, 230, 253, 280, 404]
  },
  {
    id: 285,
    order: 285,
    number: 285,
    pokedex: 25,
    name: {
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: 'ピカチュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Circuito Circular',
          en: 'Circle Circuit',
          ja: 'エレキサークル' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque hace 30 puntos de daño por cada uno de tus Pokémon Eléctricos en Banca.',
          en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
          ja: '自分のベンチの雷ポケモンの数×30ダメージ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.CROWN,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [96, 259, 281]
  },
  {
    id: 286,
    order: 286,
    number: 286,
    pokedex: 150,
    name: {
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: 'ミュウツー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Genético',
        en: 'Genetic Pokémon',
        ja: 'いでんしポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '122.0',
        en: '269',
        ja: '122.0'
      }
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: 'Esfera Psíquica',
          en: 'Psychic Sphere',
          ja: 'ねんどうだん' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: 'Guía Psi',
          en: 'Psydrive',
          ja: 'サイコドライブ' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Psíquica de este Pokémon.',
          en: 'Discard 2 Psychic Energy from this Pokémon.',
          ja: 'このポケモンから超エネルギーを2個トラッシュ。' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '１人の　科学者が　何年も 恐ろしい　遺伝子　研究を 続けた　結果　誕生した｡' 
    },
    health: 150,
    rarity: CardRarityENUM.CROWN,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [129, 262, 282]
  },
  {
    id: 287,
    order: 287,
    number: 1,
    pokedex: 102,
    name: {
      es: 'Exeggcute',
      en: 'Exeggcute',
      ja: 'タマタマ' 
    },
    info: {
      type: {
        es: 'Pokémon Huevo',
        en: 'Egg Pokémon',
        ja: 'たまごポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '2.5',
        en: '5.5',
        ja: '2.5'
      }
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: 'Crecimiento Repentino',
          en: 'Growth Spurt',
          ja: 'ちょっとせいちょう' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Une 1 Energía Planta de tu área de Energía a este Pokémon.',
          en: 'Take a Grass Energy from your Energy Zone and attach it to this Pokémon.',
          ja: '自分のエネルギーゾーンから草エネルギーを1個出し、このポケモンにつける。' 
        }
      }
    ],
    evolve: [288],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Pese a su aspecto de mera piña de huevos, se trata de un Pokémon. Al parecer, sus cabezas se comunican entre sí por telepatía.',
      en: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
      ja: 'タマゴのように　見えるが　立派な ポケモン｡　テレパシーで　仲間と 交信している　らしいぞ｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [21, 22, 23, 288, 252, 355]
  },
  {
    id: 288,
    order: 288,
    number: 2,
    pokedex: 103,
    name: {
      es: 'Exeggutor',
      en: 'Exeggutor',
      ja: 'ナッシー' 
    },
    info: {
      type: {
        es: 'Pokémon Coco',
        en: 'Coconut Pokémon',
        ja: 'やしのみポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '120',
        en: '264.6',
        ja: '120'
      }
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: 'Psíquico',
          en: 'Psychic',
          ja: 'サイコキネシス' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.',
          en: 'This attack does 20 damage for each Energy attached to your opponent\'s Active Pokémon.',
          ja: '相手のバトルポケモンのエネルギーの数×20ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '３つの　頭は　べつのことを 考えている｡　自分以外は あまり　興味がない　ようだ｡' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [21, 22, 287, 355]
  },
  {
    id: 289,
    order: 289,
    number: 3,
    pokedex: 251,
    name: {
      es: 'Celebi EX',
      en: 'Celebi EX',
      ja: 'セレビィ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Viajetiempo',
        en: 'Time Travel Pokémon',
        ja: 'ときわたりポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '5.0',
        en: '11',
        ja: '5.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Floración Potente',
          en: 'Powerful Bloom',
          ja: 'パワフルブルーム' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.',
          en: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.',
          ja: 'このポケモンのエネルギーの数ぶんコインを投げ、表の数×50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vino del futuro haciendo un viaje en el tiempo. Hay quien piensa que, mientras Celebi siga apareciendo, el futuro será brillante y esperanzador.',
      en: 'This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.',
      ja: 'もりのかみさま として まつられる。きれいな もりが あるところ そこに セレビィは あらわれる。' 
    },
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [361, 371]
  },
  {
    id: 290,
    order: 290,
    number: 4,
    pokedex: 495,
    name: {
      es: 'Snivy',
      en: 'Snivy',
      ja: 'ツタージャ' 
    },
    info: {
      type: {
        es: 'Pokémon Serpiente',
        en: 'Grass Snake Pokémon',
        ja: 'くさへびポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '8.1',
        en: '17.9',
        ja: '8.1'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Látigo Cepa',
          en: 'Vine Whip',
          ja: 'つるのムチ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [291],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando recibe los rayos de sol, se mueve mucho más rápido que de costumbre. Usa mejor sus lianas que sus manos.',
      en: 'Being exposed to sunlight makes its movements swiftier. It uses vines more adeptly than its hands.',
      ja: '太陽の 光を 浴びると いつもよりも 素早く 動ける。 手よりも ツルを うまく使う。' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [291, 292, 356, 399]
  },
  {
    id: 291,
    order: 291,
    number: 5,
    pokedex: 496,
    name: {
      es: 'Servine',
      en: 'Servine',
      ja: 'ジャノビー' 
    },
    info: {
      type: {
        es: 'Pokémon Serpiente',
        en: 'Grass Snake Pokémon',
        ja: 'くさへびポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '16.0',
        en: '35.3',
        ja: '16.0'
      }
    },
    artist: 'Shigenori Nagishi',
    attacks: [
      {
        name: {
          es: 'Látigo Cepa',
          en: 'Vine Whip',
          ja: 'つるのムチ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [292],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Parece que se desliza al correr. Engaña a sus rivales con su velocidad y los fustiga con su látigo.',
      en: 'It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.',
      ja: '地面を　滑るように　走る｡ 素早い　動きで　敵を　まどわせ つるのムチで　しとめるのだ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [290, 292, 356, 399]
  },  
  {
    id: 292,
    order: 292,
    number: 6,
    pokedex: 497,
    name: {
      es: 'Serperior',
      en: 'Serperior',
      ja: 'ジャローダ' 
    },
    info: {
      type: {
        es: 'Pokémon Realeza',
        en: 'Regal Pokémon',
        ja: 'ロイヤルポケモン'
      },
      height: {
        es: '3.3',
        en: '10\'10"',
        ja: '3.3'
      },
      weight: {
        es: '63.0',
        en: '138.9',
        ja: '63.0'
      }
    },
    artist: 'Yoshioka',
    attacks: [
      {
        name: {
          es: 'Rayo Solar',
          en: 'Solar Beam',
          ja: 'ソーラービーム' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
        es: 'Dominio de la Selva',
        en: 'Jungle Totem',
        ja: 'みつりんのぬし' 
      },
      description: {
        es: 'Cada Energía Planta unida a tus Pokémon Planta proporciona 2 Energías Planta. Este efecto no se acumula.',
        en: 'Each Grass Energy attached to your Grass Pokémon provides 2 Grass Energy. This effect doesn\'t stack.',
        ja: 'このポケモンがいるかぎり、自分の場の草ポケモンについているすべての草エネルギーは、それぞれ草エネルギー2個ぶんとしてはたらく。この特性は重ならない。' 
      }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Tan solo muestra su verdadero poder a quienes no se amedrentan ante su noble pero inquisitoria mirada.',
      en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
      ja: 'ジャローダの　けだかい　ひとみで　いすくめられても　へいきな　つよい　あいてにだけ　ほんきを　だす。'
    },
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [290, 291, 356, 399]
  },
  {
    id: 293,
    order: 293,
    number: 7,
    pokedex: 755,
    name: {
      es: 'Morelull',
      en: 'Morelull',
      ja: 'ネマシュ' 
    },
    info: {
      type: {
        es: 'Pokémon Luminiscente',
        en: 'Illuminating Pokémon',
        ja: 'はっこうポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '1.5',
        en: '3.3',
        ja: '1.5'
      }
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: 'Apisonar',
          en: 'Ram',
          ja: 'ぶつかる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [294],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Sus sombrerillos tienen un sabor delicioso. Aunque los Pokémon del bosque se los coman, les vuelven a crecer al día siguiente.',
      en: 'Pokémon living in the forest eat the delicious caps on Morelull\'s head. The caps regrow overnight.',
      ja: '頭の 傘は とても 美味しい。 森の ポケモンたちに 食べられるが 一晩で 再生する。'
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [294]
  },
  {
    id: 294,
    order: 294,
    number: 8,
    pokedex: 756,
    name: {
      es: 'Shiinotic',
      en: 'Shiinotic',
      ja: 'マシェード' 
    },
    info: {
      type: {
        es: 'Pokémon Luminiscente',
        en: 'Illuminating Pokémon',
        ja: 'はっこうポケモン'
      },
      height: {
        es: '1.0',
        en: '3\'3"',
        ja: '1.0'
      },
      weight: {
        es: '11.5',
        en: '25.4',
        ja: '11.5'
      }
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: 'Esporas Parpadeantes',
          en: 'Flickering Spores',
          ja: 'ゆれるほうし' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Dormido.',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '相手のバトルポケモンをねむりにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Atrae y duerme a su presa con la luz parpadeante de sus esporas y luego le absorbe la energía vital con la punta de los dedos.',
      en: 'Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.',
      ja: '点滅する 胞子の 光りで 獲物を おびき寄せて 眠らせる。 指先から 生気を 吸い取る。' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [293]
  },
  {
    id: 295,
    order: 295,
    number: 9,
    pokedex: 781,
    name: {
      es: 'Dhelmise',
      en: 'Dhelmise',
      ja: 'ダダリン' 
    },
    info: {
      type: {
        es: 'Pokémon Alga Ancla',
        en: 'Sea Creeper Pokémon',
        ja: 'もくずポケモン'
      },
      height: {
        es: '3.9',
        en: '102\'10"',
        ja: '3.9'
      },
      weight: {
        es: '210',
        en: '463',
        ja: '210'
      }
    },
    artist: 'Hasuno',
    attacks: [
      {
        name: {
          es: 'Látigo Energético',
          en: 'Energy Whip',
          ja: 'エナジーウィップ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
        description: {
         es: 'Si este Pokémon tiene por lo menos 3 Energías Planta adicionales unidas a él, este ataque hace 70 puntos de daño más.',
         en: 'If this Pokémon has at least 3 extra Grass Energy attached, this attack does 70 more damage.',
         ja: '追加で草エネルギーが3個ついているなら、70ダメージ追加。' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Este Pokémon de tipo Fantasma no es sino la reencarnación de las algas que flotan a la deriva y arrastran consigo vestigios de barcos hundidos.',
      en: 'After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.',
      ja: '海底を 漂う 藻屑が 沈没船の 部品を 取りこんで ゴーストポケモンに 生まれ変わった。' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 296,
    order: 296,
    number: 10,
    pokedex: 77,
    name: {
      es: 'Ponyta',
      en: 'Ponyta',
      ja: 'ポニータ' 
    },
    info: {
      type: {
        es: 'Pokémon Caballo Fuego',
        en: 'Fire Horse Pokémon',
        ja: 'ひのうまポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Tomokazu Kamiya',
    attacks: [
      {
        name: {
          es: 'Pisotón',
          en: 'Stomp',
          ja: 'ふみつけ' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.FIRE],
        description: {
         es: 'Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.',
         en: 'Flip a coin if heads, this attack does 30 more damage.',
         ja: 'コインを1回投げオモテなら、30ダメージ追加。' 
       }
      }
    ],
    evolve: [43],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Al nacer es un poco lento, pero va fortaleciendo las patas paulatinamente al disputar carreras con sus congéneres.',
      en: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
      ja: '生まれたばかりは　走るのが　へた｡ 仲間と　かけっこを　するうちに 足腰が　強く　育っていく｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [42, 43, 297, 231]
  },
  {
    id: 297,
    order: 297,
    number: 11,
    pokedex: 78,
    name: {
      es: 'Rapidash',
      en: 'Rapidash',
      ja: 'ギャロップ' 
    },
    info: {
      type: {
        es: 'Pokémon Caballo Fuego',
        en: 'Fire Horse Pokémon',
        ja: 'ひのうまポケモン'
      },
      height: {
        es: '1.7',
        en: '5\'7"',
        ja: '1.7'
      },
      weight: {
        es: '95.0',
        en: '209.4',
        ja: '95.0'
      }
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: 'Embestida Ascendente',
          en: 'Rising Lunge',
          ja: 'つきあげる' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
         es: 'Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.',
         en: 'Flip a coin. If heads, this attack does 60 more damage.',
         ja: 'コインを1回投げオモテなら、60ダメージ追加。' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Su ardiente crin ondea al viento mientras atraviesa extensas praderas a una velocidad de 240 km/h.',
      en: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
      ja: '燃える　たてがみを　はためかせ 時速　２４０キロの　速度で 大草原を　駆けぬけるのだ｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [42, 43, 296, 231]
  },
  {
    id: 298,
    order: 298,
    number: 12,
    pokedex: 126,
    name: {
      es: 'Magmar',
      en: 'Magmar',
      ja: 'ブーバー' 
    },
    info: {
      type: {
        es: 'Pokémon Escupefuego',
        en: 'Spitfire Pokémon',
        ja: 'ひふきポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '44.5',
        en: '98.1',
        ja: '44.5'
      }
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: 'Llamarada',
          en: 'Fire Blast',
          ja: 'だいもんじ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
         es: 'Descarta 2 Energías Fuego de este Pokémon.',
         en: 'Discard 2 Fire Energy from this Pokémon.',
         ja: 'このポケモンから炎エネルギーを2個トラッシュ。' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Abate a sus presas con las llamas que genera y con frecuencia acaba reduciéndolas a carbonilla por accidente.',
      en: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
      ja: '炎で　獲物を　しとめる｡ ついつい　焼きすぎて 黒コゲに　してしまい　後悔する｡' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [44]
  },
  {
    id: 299,
    order: 299,
    number: 13,
    pokedex: 636,
    name: {
      es: 'Larvesta',
      en: 'Larvesta',
      ja: 'メラルバ' 
    },
    info: {
      type: {
        es: 'Pokémon Antorcha',
        en: 'Torch Pokémon',
        ja: 'たいまつポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '28.8',
        en: '63.5',
        ja: '28.8'
      }
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: 'Combustión',
          en: 'Combustion',
          ja: 'かえん' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [300],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Antaño lo llamaron la Larva que Hurtó el Sol. Las llamas que brotan de sus cuernos pueden fundir sin problema una plancha de acero.',
      en: 'This Pokémon was called the Larve That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.',
      ja: '太陽を 盗んだ 幼虫と 呼ばれていた。 ツノから 噴き出す 炎は 鉄板も 焼き切る。' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [300, 400] 
  },
  {
    id: 300,
    order: 300,
    number: 14,
    pokedex: 637,
    info: {
      type: {
        es: 'Pokémon Sol',
        en: 'Sun Pokémon',
        ja: 'たいようポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '46.0',
        en: '101.4',
        ja: '46.0'
      }
    },
    name: {
      es: 'Volcarona',
      en: 'Volcarona',
      ja: 'ウルガモス' 
    },
    artist: 'DOM',
    attacks: [
      {
        name: {
          es: 'Ceniza Volcánica',
          en: 'Volcanic Ash',
          ja: 'かさいりゅう' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 2 Energías Fuego de este Pokémon. Este ataque hace 80 puntos de daño a 1 de los Pokémon de tu rival.',
          en: 'Discard 2 Fire Energy from this Pokémon. This attack does 80 damage to 1 of your opponent\'s Pokémon.',
          ja: 'このポケモンから炎エネルギーを2個トラッシュし、相手のポケモン1匹に80ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'El calor que irradia le granjea pocas simpatías en tierras cálidas. Por el contrario, en las regiones más frías lo veneran como encarnación del sol.',
      en: 'Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.',
      ja: '暑い 土地では 燃える 体は 嫌がられるが 寒い 土地では 太陽の化身 と 崇められる。' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [299, 400]
  },
  {
    id: 301,
    order: 301,
    number: 15,
    pokedex: 757,
    name: {
      es: 'Salandit',
      en: 'Salandit',
      ja: 'ヤトウモリ' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartoxina',
        en: 'Toxic Lizard Pokémon',
        ja: 'どくトカゲポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '4.8',
        en: '10.6',
        ja: '4.8'
      }
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: 'Carga Tóxica',
          en: 'Venoshock',
          ja: 'ベノムショック' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.',
          en: 'If your opponent\'s Active Pokémon is Poisoned, this attack does 40 more damage.',
          ja: '相手のバトルポケモンがどくなら、40ダメージ追加。' 
        }
      }
    ],
    evolve: [50],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Provoca a sus presas para conducirlas a zonas rocosas y estrechas, donde las aturde con un gas venenoso antes de acabar con ellas.',
      en: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
      ja: '獲物を　挑発して　狭い 岩場に　誘い込み　フラフラになる 毒ガスを　吹きかけ　仕留めるのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [49, 50, 302, 357]
  },
  {
    id: 302,
    order: 302,
    number: 16,
    pokedex: 758,
    name: {
      es: 'Salazzle',
      en: 'Salazzle',
      ja: 'エンニュート' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartoxina',
        en: 'Toxic Lizard Pokémon',
        ja: 'どくトカゲポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '22.2',
        en: '48.9',
        ja: '22.2'
      }
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: 'Garras Venenosas',
          en: 'Poison Claws',
          ja: 'どくのツメ' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent\'s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Convierte a sus rivales en devotos súbditos tras marearlos con su gas venenoso y seducirlos con los cautivadores movimientos de su cuerpo.',
      en: 'Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.',
      ja: '毒ガスで　クラクラにした　相手を 妖艶な　身のこなしで　誘惑し 忠実な　しもべに　してしまう｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [49, 50, 301, 357]
  },
  {
    id: 303,
    order: 303,
    number: 17,
    pokedex: 129,
    name: {
      es: 'Magikarp',
      en: 'Magikarp',
      ja: 'コイキング' 
    },
    info: {
      type: {
        es: 'Pokémon Pez',
        en: 'Fish Pokémon',
        ja: 'さかなポケモン'
      },
      height: {
        es: '0.9',
        en: '2\'11"',
        ja: '0.9'
      },
      weight: {
        es: '10.0',
        en: '22',
        ja: '10.0'
      }
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: 'Saltar del Agua',
          en: 'Leap Out',
          ja: 'はねにげ' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: 'Cambia este Pokémon por 1 de tus Pokémon en Banca.',
          en: 'Switch this Pokémon with 1 of your Benched Pokémon.',
          ja: 'このポケモンをベンチポケモンと入れ替える。' 
        }
      }
    ],
    evolve: [78],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Un Pokémon desvalido y patético. A veces es capaz de saltar alto, pero rara vez más de 2 m.',
      en: 'An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.',
      ja: '力のない　情けない　ポケモン｡ たまに　高く　飛び跳ねても ２メートルを　超すのが　やっとだ｡' 
    },
    health: 30,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [77, 78, 304, 233, 362]
  },
  {
    id: 304,
    order: 304,
    number: 18,
    pokedex: 130,
    name: {
      es: 'Gyarados EX',
      en: 'Gyarados EX',
      ja: 'ギャラドス EX' 
    },
    info: {
      type: {
        es: 'Pokémon Atrocidad',
        en: 'Atrocious Pokémon',
        ja: 'きょうあくポケモン'
      },
      height: {
        es: '6.5',
        en: '21\'4"',
        ja: '6.5'
      },
      weight: {
        es: '235.0',
        en: '518.1',
        ja: '235.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Torbellino Furioso',
          en: 'Rampaging Whirlpool',
          ja: 'あばれうずしお' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 1 Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).',
          en: 'Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent\'s',
          ja: 'おたがいのポケモン全員についているエネルギーからランダムに1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando aparece, monta en cólera. No deja de estar furioso hasta que lo destruye todo.',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '一度　姿を　現すと まわりを　すべて　焼き尽くさないと 怒りが　鎮まらない　という｡' 
    },
    health: 180,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [77, 303, 362]
  },
  {
    id: 305,
    order: 305,
    number: 19,
    pokedex: 134,
    name: {
      es: 'Vaporeon',
      en: 'Vaporeon',
      ja: 'シャワーズ' 
    },
    info: {
      type: {
        es: 'Pokémon Burbuja',
        en: 'Bubble Jet Pokémon',
        ja: 'あわはきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '29.0',
        en: '63.9',
        ja: '29.0'
      }
    },
    artist: 'LINNE',
    attacks: [
      {
        name: {
          es: 'Chapoteo Ondulante',
          en: 'Wave Splash',
          ja: 'スプラッシュ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: 'Hacer Limpieza',
          en: 'Wash Out',
          ja: 'おしながす' 
        },
      description: {
       es: 'Todas las veces que quieras durante tu turno, puedes mover 1 Energía Agua de 1 de tus Pokémon Agua en Banca a tu Pokémon Agua Activo.',
       en: 'As often as you like during your turn, you may move a Water Energy from 1 of your Benched Water Pokémon to your Active Water Pokémon.',
       ja: '自分の番に何回でも使える。自分のベンチの水ポケモンから水エネルギーを1個、バトル場の水ポケモンにつけ替える。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Vive cerca del agua. Su cola termina en una aleta parecida a la de un pez, por lo que hay gente que lo confunde con una sirena.',
      en: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
      ja: '水辺に　棲むが　尻尾には 魚のような　ひれが　残っていて 人魚と　間違う　人もいる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [80, 206, 207, 208, 347, 248, 358, 402]
  },
  {
    id: 306,
    order: 306,
    number: 20,
    pokedex: 456,
    name: {
      es: 'Finneon',
      en: 'Finneon',
      ja: 'ケイコウオ' 
    },
    info: {
      type: {
        es: 'Pokémon Pez Ala',
        en: 'Wing Fish Pokémon',
        ja: 'はねうおポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '7.0',
        en: '15.4',
        ja: '7.0'
      }
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: 'Pistola Agua',
          en: 'Water Gun',
          ja: 'みずでっぽう' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER]
      }
    ],
    evolve: [307],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'La línea que le recorre el costado puede almacenar luz solar. Brilla con mucha fuerza por la noche.',
      en: 'The line running down its side can store sunlight. It shines vividly at night.',
      ja: '体の 横側にある ラインは 太陽の光を 溜めておける。 夜になると 鮮やかに 輝く。' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [307]
  },
  {
    id: 307,
    order: 307,
    number: 21,
    pokedex: 457,
    name: {
      es: 'Lumineon',
      en: 'Lumineon',
      ja: 'ネオラント' 
    },
    info: {
      type: {
        es: 'Pokémon Neón',
        en: 'Neon Pokémon',
        ja: 'ネオンポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '24.0',
        en: '52.9',
        ja: '24.0'
      }
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: 'Agua en Tromba',
          en: 'Aqua Liner',
          ja: 'アクアライナー' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Este ataque hace 50 puntos de daño a 1 de los Pokémon en Banca de tu rival.',
          en: 'This attack does 50 damage to 1 of your opponent\'s Benched Pokémon.',
          ja: '相手のベンチポケモン1匹に50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Atrae a sus presas con el destello que emite, aunque eso también llama la atención de sus feroces depredadores marinos.',
      en: 'With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.',
      ja: '光で 獲物を おびき寄せるが 天敵である 獰猛な 魚ポケモンまで 寄ってくるのだ。' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [306]
  },
  {
    id: 308,
    order: 308,
    number: 22,
    pokedex: 833,
    name: {
      es: 'Chewtle',
      en: 'Chewtle',
      ja: 'カムカメ' 
    },
    info: {
      type: {
        es: 'Pokémon Mordedura',
        en: 'Snapping Pokémon',
        ja: 'くいつきポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '8.5',
        en: '18.7',
        ja: '8.5'
      }
    },
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: {
          es: 'Mordisco',
          en: 'Bite',
          ja: 'かみつく' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [309],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Su gran incisivo no le ha terminado de salir. Cuando le molesta, juguetea con uno de sus compañeros mordisqueándole el cuerno.',
      en: 'Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle’s horn, and the two Pokémon will tussle.',
      ja: '大きな 前歯は まだ 生えかけ。 歯が かゆいときは 仲間の ツノに パクリと 噛みつき じゃれあう。' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [309]
  },
  {
    id: 309,
    order: 309,
    number: 23,
    pokedex: 834,
    name: {
      es: 'Drednaw',
      en: 'Drednaw',
      ja: 'カジリガメ' 
    },
    info: {
      type: {
        es: 'Pokémon Mordisco',
        en: 'Bite Pokémon',
        ja: 'かみつきポケモン'
      },
      height: {
        es: '1.0',
        en: '3\'3"',
        ja: '1.0'
      },
      weight: {
        es: '115.5',
        en: '254.6',
        ja: '115.5'
      }
    },
    artist: 'nisimono',
    attacks: [
      {
        name: {
          es: 'Triturar',
          en: 'Crunch',
          ja: 'かみくだく' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, descarta 1 Energía aleatoria del Pokémon Activo de tu rival.',
          en: 'Flip a coin. If heads, discard a random Energy from your opponent\'s Active Pokémon.',
          ja: 'コインを1回投げオモテなら、相手のバトルポケモンからエネルギーをランダムに1個トラッシュ' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Con sus fuertes mandíbulas serradas es capaz de destrozar rocas de un mordisco. Tiene un temperamento extremadamente violento.',
      en: 'Its massive, jagged teeth can crush a boulder in a single bite. This Pokémon has an extremely vicious disposition.',
      ja: 'とても 大きな ギザギザの 口は ひと噛みで 岩石を 砕く。 非常に 凶暴な 性質。' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.DISCARD
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [308]
  },
  {
    id: 310,
    order: 310,
    number: 24,
    pokedex: 845,
    name: {
      es: 'Cramorant',
      en: 'Cramorant',
      ja: 'ウッウ' 
    },
    info: {
      type: {
        es: 'Pokémon Tragón',
        en: 'Gulp Pokémon',
        ja: 'うのみポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '18.0',
        en: '39.7',
        ja: '18.0'
      }
    },
    artist: 'Jerky',
    attacks: [
      {
        name: {
          es: 'Buceo',
          en: 'Dive',
          ja: 'ダイビング' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.',
          en: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.',
          ja: 'コインを1回投げオモテなら、次の相手の番、このポケモンは技のダメージや効果を受けない。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Su colosal potencia le permite machacar al rival de un solo golpe, aunque su carácter despistado lo lleva a olvidarse de su presencia.',
      en: 'It’s so strong that it can knock out some opponents in a single hit, but it also may forget what it’s battling midfight.',
      ja: '相手を 一撃で 打ち負かすほど パワフルだが 忘れっぽいので 戦っている 相手を 忘れる。' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.RESIST
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 311,
    order: 311,
    number: 25,
    pokedex: 25,
    name: {
      es: 'Pikachu',
      en: 'Pikachu',
      ja: 'ピカチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Naoya Kimura',
    attacks: [
      {
        name: {
          es: 'Circuito Circular',
          en: 'Circle Circuit',
          ja: 'エレキサークル' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
         es: 'Este ataque hace 10 puntos de daño por cada uno de tus Pokémon Eléctricos en Banca.',
         en: 'This attack does 10 damage for each of your Benched Lightning Pokémon.',
         ja: '自分のベンチの雷ポケモンの数×10ダメージ。' 
       }
      }
    ],
    evolve: [312],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [94, 95, 312, 398, 387, 381]
  },
  {
    id: 312,
    order: 312,
    number: 26,
    pokedex: 26,
    name: {
      es: 'Raichu',
      en: 'Raichu',
      ja: 'ライチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'hncl',
    attacks: [
      {
        name: {
          es: 'Gigasacudida',
          en: 'Gigashock',
          ja: 'ギガスパーク' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque también hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack does 20 damage to each of your opponent\'s Benched Pokémon.',
          ja: '相手のベンチポケモン全員にも20ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos.',
      en: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
      ja: '尻尾が　アースの　役目をはたして 電気を　地面に　逃がすので 自分自身は　しびれたりしない｡' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [94, 95, 311, 398, 387, 381]
  },
  {
    id: 313,
    order: 313,
    number: 27,
    pokedex: 125,
    name: {
      es: 'Electabuzz',
      en: 'Electabuzz',
      ja: 'エレブー' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: 'Lanza del Trueno',
          en: 'Thunder Spear',
          ja: 'サンダーアロー' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival.',
          en: 'This attack does 40 damage to 1 of your opponent\'s Pokémon.',
          ja: '相手のポケモン1匹に40ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Es habitual que las centrales eléctricas cuenten con Pokémon de tipo Tierra para hacer frente a los Electabuzz ávidos de electricidad.',
      en: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
      ja: '電気を　狙う　エレブーの　対策に じめんポケモンを　置く 発電所は　多い｡' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [101]
  },
  {
    id: 314,
    order: 314,
    number: 28,
    pokedex: 595,
    name: {
      es: 'Joltik',
      en: 'Joltik',
      ja: 'バチュル' 
    },
    info: {
      type: {
        es: 'Pokémon Lapa',
        en: 'Attaching Pokémon',
        ja: 'くっつきポケモン'
      },
      height: {
        es: '0.1',
        en: '4\'',
        ja: '0.1'
      },
      weight: {
        es: '0.6',
        en: '1.3',
        ja: '0.6'
      }
    },
    artist: 'MINAMINAMI Take',
    attacks: [
      {
        name: {
          es: 'Picadura',
          en: 'Bug Bite',
          ja: 'むしくい' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC]
      }
    ],
    evolve: [315],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'No puede generar electricidad por si misma, así que se encarama a otros Pokémon y absorbe su energía estática.',
      en: 'Joltik can be found clinging to other Pokémon. It’s soaking up static electricity because it can’t produce a charge on its own.',
      ja: 'ポケモンの 体に くっついて 静電気を 吸い取る。 自分では 電気を つくることが できない。' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [315]
  },
  {
    id: 315,
    order: 315,
    number: 29,
    pokedex: 596,
    info: {
      type: {
        es: 'Pokémon Electroaraña',
        en: 'EleSpider Pokémon',
        ja: 'でんきグモポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '14.3',
        en: '31.5',
        ja: '14.3'
      }
    },
    name: {
      es: 'Galvantula',
      en: 'Galvantula',
      ja: 'デンチュラ' 
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: 'Electrotela',
          en: 'Electroweb',
          ja: 'エレキネット' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.',
          en: 'During your opponent\'s next turn, the Defending Pokémon can\'t retreat.',
          ja: '次の相手の番、このワザを受けたポケモンはにげるができない。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Ataca lanzando hilos electrificados por el abdomen, que inmovilizan por completo al enemigo durante tres días y tres noches.',
      en: 'It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.',
      ja: '電気を 帯びた お腹の 毛を 飛ばして 攻撃。 毛が 刺さると 三日三晩 全身が 痺れる。' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.CORNER],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [314]
  },
  {
    id: 316,
    order: 316,
    number: 30,
    pokedex: 702,
    name: {
      es: 'Dedenne',
      en: 'Dedenne',
      ja: 'デデンネ' 
    },
    info: {
      type: {
        es: 'Pokémon Antenas',
        en: 'Antenna Pokémon',
        ja: 'アンテナポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '2.2',
        en: '4.9',
        ja: '2.2'
      }
    },
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: {
          es: 'Impactrueno',
          en: 'Thunder Shock',
          ja: 'でんきショック' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.',
          en: 'Flip a coin. If heads, your opponent\'s Active Pokémon is now Paralyzed.',
          ja: 'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Como es menudo y su órgano electrógeno está poco desarrollado, absorbe electricidad de las casas con la cola para recargar sus reservas.',
      en: 'It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.',
      ja: '体が 小さく 発電器官が 未熟なので 人家の 電気を 尻尾で 吸い取り 充電する。' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.PARALYZE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [359]
  },
  {
    id: 317,
    order: 317,
    number: 31,
    pokedex: 151,
    name: {
      es: 'Mew',
      en: 'Mew',
      ja: 'ミュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Nueva Especie',
        en: 'New Species Pokémon',
        ja: 'しんしゅポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: 'Psicoinforme',
          en: 'Psy Report',
          ja: 'サイコリポート' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: 'Tu rival enseña las cartas de su mano.',
          en: 'Your opponent reveals their hand.',
          ja: '相手の手札のオモテをすべて見る。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: 'あらゆる　技を　使うため ポケモンの　先祖と　考える 学者が　たくさん　いる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 318,
    order: 318,
    number: 32,
    pokedex: 151,
    name: {
      es: 'Mew EX',
      en: 'Mew EX',
      ja: 'ミュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Nueva Especie',
        en: 'New Species Pokémon',
        ja: 'しんしゅポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Disparo Psi',
          en: 'Psyshot',
          ja: 'サイコショット' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: 'Hackeo Genoma',
          en: 'Genome Hacking',
          ja: 'ゲノムハック' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: 'あらゆる　技を　使うため ポケモンの　先祖と　考える 学者が　たくさん　いる｡' 
    },
    health: 130,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [363, 369, 372]
  },
  {
    id: 319,
    order: 319,
    number: 33,
    pokedex: 561,
    info: {
      type: {
        es: 'Pokémon Pseudopájaro',
        en: 'Avianoid Pokémon',
        ja: 'とりもどきポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '14.0',
        en: '30.9',
        ja: '14.0'
      }
    },
    name: {
      es: 'Sigilyph',
      en: 'Sigilyph',
      ja: 'シンボラー' 
    },
    artist: 'Shigenori Nagishi',
    attacks: [
      {
        name: {
          es: 'Robo Pico',
          en: 'Spike Draw',
          ja: 'スパイクドロー' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: 'Roba 1 carta.',
          en: 'Draw a card.',
          ja: '自分の山札を1枚引く。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Vuela gracias a su poderes psíquicos. Dicen que había sido la deidad protectora de una antigua ciudad, si bien otros creen que era su mensajero.',
      en: 'Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians emissaries.',
      ja: 'サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 320,
    order: 320,
    number: 34,
    pokedex: 605,
    name: {
      es: 'Elgyem',
      en: 'Elgyem',
      ja: 'リグレー' 
    },
    info: {
      type: {
        es: 'Pokémon Cerebro',
        en: 'Cerebral Pokémon',
        ja: 'ブレインポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '9.0',
        en: '19.8',
        ja: '9.0'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Golpe Cabeza',
          en: 'Headbutt',
          ja: 'ずつき' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      }
    ],
    evolve: [321],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando se halla junto a un televisor, la pantalla muestra imágenes de extraños paisajes. Se cree que corresponden a su lugar de origen.',
      en: 'If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.',
      ja: 'テレビのそばに いると モニターに 奇妙な 景色が 映る。 リグレーの 故郷だと いわれる。' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [321]
  },
  {
    id: 321,
    order: 321,
    number: 35,
    pokedex: 606,
    name: {
      es: 'Beheeyem',
      en: 'Beheeyem',
      ja: 'オーベム' 
    },
    info: {
      type: {
        es: 'Pokémon Cerebro',
        en: 'Cerebral Pokémon',
        ja: 'ブレインポケモン'
      },
      height: {
        es: '1.0',
        en: '3\'3"',
        ja: '1.0'
      },
      weight: {
        es: '34.5',
        en: '76.1',
        ja: '34.5'
      }
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: 'Levantamente',
          en: 'Mind Jack',
          ja: 'マインドジャック' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: 'Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack does 20 more damage for each of your opponent\'s Benched Pokémon.',
          ja: '相手のベンチポケモンの数×20ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Por algún extraño motivo, siempre que se avista un Beheeyem en una granja desaparece un Dubwool.',
      en: 'Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.',
      ja: 'オーベムが 現れた 牧場 からは いつの間にか バイウールーが 1匹 姿を 消してしまう。' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [320]
  },
  {
    id: 322,
    order: 322,
    number: 36,
    pokedex: 669,
    name: {
      es: 'Flabébé',
      en: 'Flabébé',
      ja: 'フラベベ' 
    },
    info: {
      type: {
        es: 'Pokémon Monoflor',
        en: 'Single Bloom Pokémon',
        ja: 'いちりんポケモン'
      },
      height: {
        es: '0.1',
        en: '0\'4"',
        ja: '0.1'
      },
      weight: {
        es: '0.1',
        en: '0.2',
        ja: '0.1'
      }
    },
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: {
          es: 'Mirada Hipnótica',
          en: 'Hypnotic Gaze',
          ja: 'みつめる' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar dormido.',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '相手のバトルポケモンをねむりにする。' 
        }
      }
    ],
    evolve: [323],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Posee el don de extraer el poder oculto de las flores silvestres. Siente una predilección especial por las flores rojas.',
      en: 'This Pokémon can draw forth the power hidden within blooming wild flowers. It is particularly fond of red flowers.',
      ja: '野に咲く　花の　秘めた　力を 引き出す　能力を　持っている｡ とくに　赤い花が　好き｡' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [323, 324]
  },
  {
    id: 323,
    order: 323,
    number: 37,
    pokedex: 670,
    name: {
      es: 'Floette',
      en: 'Floette',
      ja: 'フラエッテ' 
    },
    info: {
      type: {
        es: 'Pokémon Monoflor',
        en: 'Single Bloom Pokémon',
        ja: 'いちりんポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '0.9',
        en: '2',
        ja: '0.9'
      }
    },
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: {
          es: 'Hoja Drenante',
          en: 'Leaf Drain',
          ja: 'リーフドレイン' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
         es: 'Cura 10 puntos de daño a este Pokémon.',
         en: 'Heal 10 damage from this Pokémon.',
         ja: 'このポケモンのHPを10回復。' 
       }
      }
    ],
    evolve: [324],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Puede extraer la fuerza que les resta a las flores marchitas para reanimarlas. Lleva consigo una flor de color rojo.',
      en: 'This Pokémon draws forth what power is left in withered flowers to make them healthy again. It holds a red flower.',
      ja: '枯れた　花に　残った　力を 引き出して　元気にしてあげる｡ 赤い花を　抱えた　フラエッテ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [322, 324]
  },
  {
    id: 324,
    order: 324,
    number: 38,
    pokedex: 671,
    name: {
      es: 'Florges',
      en: 'Florges',
      ja: 'フラージェス' 
    },
    info: {
      type: {
        es: 'Pokémon Jardín',
        en: 'Garden Pokémon',
        ja: 'ガーデンポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '10.0',
        en: '22',
        ja: '10.0'
      }
    },
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: {
          es: 'Resplandeflor',
          en: 'Bloomshine',
          ja: 'ブルームシャイン' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
         es: 'Cura 20 puntos de daño a cada uno de tus Pokémon.',
         en: 'Heal 20 damage from each of your Pokémon.',
         ja: '自分のポケモン全員のHPを20回復。' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Hace de su territorio un jardín esplendoroso. Extrae su poder de las flores rojas que lleva en torno al cuello.',
      en: 'This Pokémon creates an impressive flower garden in its territory. It draws forth the power of the red flowers around its neck.',
      ja: '自分の　テリトリーに　見事な 花園を　作る｡　首まわりの 赤い花の　パワーを　引き出す｡' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [322, 323]
  },
  {
    id: 325,
    order: 325,
    number: 39,
    pokedex: 684,
    name: {
      es: 'Swirlix',
      en: 'Swirlix',
      ja: 'ペロッパフ' 
    },
    info: {
      type: {
        es: 'Pokémon Chuchería',
        en: 'Cotton Candy Pokémon',
        ja: 'わたあめポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '3.5',
        en: '7.7',
        ja: '3.5'
      }
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: 'Viento Feérico',
          en: 'Fairy Wind',
          ja: 'ようせいのかぜ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [326],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Ingiere diariamente una cantidad de azúcar equivalente a tu peso corporal. De lo contrario, se pone de muy mal humor.',
      en: 'It eats its own weight in sugar every day. If it doesn’t get enough sugar, it becomes incredibly grumpy.',
      ja: '１日に 食べる 砂糖は 自分の 体重と 同じ。 糖分が 足りないと ひどく 不機嫌になる。' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [326]
  },
  {
    id: 326,
    order: 326,
    number: 40,
    pokedex: 685,
    name: {
      es: 'Slurpuff',
      en: 'Slurpuff',
      ja: 'ペロリーム' 
    },
    info: {
      type: {
        es: 'Pokémon Nata',
        en: 'Meringue Pokémon',
        ja: 'ホイップポケモン'
      },
      height: {
        es: '0.8',
        en: '2\'7"',
        ja: '0.8'
      },
      weight: {
        es: '5.0',
        en: '11',
        ja: '5.0'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Disparo Mágico',
          en: 'Magical Shot',
          ja: 'マジカルショット' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Puede percibir el estado físico y mental de alguien solo con olerlo, lo que podría tener aplicaciones útiles en el campo de la medicina.',
      en: 'By taking in a person’s scent, it can sniff out their mental and physical condition. It’s hoped that this skill will have many medical applications.',
      ja: '体臭から 心と 体の 調子を 嗅ぎとる。 医療への 応用が 期待されている。' 
    },
    health: 100,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [325]
  },
  {
    id: 327,
    order: 327,
    number: 41,
    pokedex: 56,
    name: {
      es: 'Mankey',
      en: 'Mankey',
      ja: 'マンキー' 
    },
    info: {
      type: {
        es: 'Pokémon Mono Cerdo',
        en: 'Pig Monkey Pokémon',
        ja: 'ぶたざるポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '28.8',
        en: '61.7',
        ja: '28.8'
      }
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: 'Puño Infalible',
          en: 'Focus Fist',
          ja: 'きあいづき' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
         es: 'Lanza 1 moneda. Si sale cruz, este ataque no hace nada.',
         en: 'Flip a coin. If tails, this attack does nothing.',
         ja: 'コインを1回投げウラなら、このワザは失敗。' 
       }
      }
    ],
    evolve: [328],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Vive en grupos en las copas de los árboles. Si pierde de vista a su manada, se siente solo y se enfada.',
      en: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
      ja: '木の上で　群れをつくって　暮らす｡ 群れから　はぐれた　マンキーは 寂しくて　すぐに　怒りだす｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [141, 142, 328, 389]
  },
  {
    id: 328,
    order: 328,
    number: 42,
    pokedex: 57,
    name: {
      es: 'Primeape',
      en: 'Primeape',
      ja: 'オコリザル' 
    },
    info: {
      type: {
        es: 'Pokémon Mono Cerdo',
        en: 'Pig Monkey Pokémon',
        ja: 'ぶたざるポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '32.0',
        en: '70.5',
        ja: '32.0'
      }
    },
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: {
          es: 'Puño',
          en: 'Punch',
          ja: 'パンチ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Se pone furioso si nota que alguien lo está mirando. Persigue a cualquiera que establezca contacto visual con él.',
      en: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
      ja: 'だれかの　視線を　感じただけで 猛烈に　怒りだす｡　そして 目が合った　ものを　追いかけるのだ｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [141, 142, 327, 389]
  },
  {
    id: 329,
    order: 329,
    number: 43,
    pokedex: 74,
    name: {
      es: 'Geodude',
      en: 'Geodude',
      ja: 'イシツブテ' 
    },
    info: {
      type: {
        es: 'Pokémon Roca',
        en: 'Rock Pokémon',
        ja: 'がんせきポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '20.0',
        en: '44.1',
        ja: '20.0'
      }
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: 'Puño Ligero',
          en: 'Light Punch',
          ja: 'なぐる' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [330],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Con la edad, su temperamento se amansa y su cuerpo se va alisando hasta adquirir una forma completamente redonda.',
      en: 'Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.',
      ja: '長く　生きた　イシツブテは　角が とれて　まんまる｡　性格も　とても 落ち着いていて　穏やか　なのだ｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 330, 331]
  },
  {
    id: 330,
    order: 330,
    number: 44,
    pokedex: 75,
    name: {
      es: 'Graveler',
      en: 'Graveler',
      ja: 'ゴローン' 
    },
    info: {
      type: {
        es: 'Pokémon Roca',
        en: 'Rock Pokémon',
        ja: 'がんせきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '105.0',
        en: '231.5',
        ja: '105.0'
      }
    },
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: {
          es: 'Arremeter',
          en: 'Lunge Out',
          ja: 'つきたおし' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [331],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Escala los riscos de las montañas y, una vez alcanzada la cima, desciende rodando por los senderos.',
      en: 'It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.',
      ja: '崖を　登り　山頂を　目指す｡ てっぺんに　着くなり　すぐに　来た 山道を　転がり　落ちていく｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 329, 331]
  },
  {
    id: 331,
    order: 331,
    number: 45,
    pokedex: 76,
    name: {
      es: 'Golem',
      en: 'Golem',
      ja: 'ゴローニャ' 
    },
    info: {
      type: {
        es: 'Pokémon Megatón',
        en: 'Megaton Pokémon',
        ja: 'メガトンポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '300.0',
        en: '661.4',
        ja: '300.0'
      }
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: 'Presión de Guardia',
          en: 'Guard Press',
          ja: 'ガードプレス' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Durante el próximo turo de tu rival, los ataques hacen -30 puntos de daño a este Pokémon.',
          en: 'During your opponent\'s next turn, this Pokémon takes -30 damage from attacks.',
          ja: '次の相手の番、このポケモンが受けるワザのダメージを-30する。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'A medida que envejece, pierde la facultad de mudar la piel. Se han observado ejemplares de edad avanzada totalmente cubiertos de musgo.',
      en: 'When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.',
      ja: '年老いると　脱皮　しなくなる｡ 長く長く　生きた　ゴローニャの カラは　苔むしていて　緑だ｡' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 329, 330]
  },
  {
    id: 332,
    order: 332,
    number: 46,
    pokedex: 142,
    name: {
      es: 'Aerodactyl EX',
      en: 'Aerodactyl EX',
      ja: 'プテラ' 
    },
    info: {
      type: {
        es: 'Pokémon Fósil',
        en: 'Fossil Pokémon',
        ja: 'かせきポケモン'
      },
      height: {
        es: '1.8',
        en: '5\'11"',
        ja: '1.8'
      },
      weight: {
        es: '59.0',
        en: '130.1',
        ja: '59.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Aterrizaje',
          en: 'Land Crush',
          ja: 'ランドクラッシュ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: 'Ley Primitiva',
          en: 'Primeval Law',
          ja: 'げんしのさだめ' 
        },
      description: {
          es: 'Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Activo.',
          en: 'Your opponent can\'t play any Pokémon from their hand to evolve their Active Pokémon.',
          ja: 'このポケモンがいるかぎり、相手は手札からポケモンを出して、バトルポケモンを進化させられない。' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '古代の　獰猛な　ポケモン｡ 完璧な　復元は いまの　科学でも　不可能らしい｡' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [364, 370, 349]
  },
  {
    id: 333,
    order: 333,
    number: 47,
    pokedex: 802,
    name: {
      es: 'Marshadow',
      en: 'Marshadow',
      ja: 'マーシャドー' 
    },
    info: {
      type: {
        es: 'Pokémon Morasombra',
        en: 'Gloomdweller Pokémon',
        ja: 'かげすみポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '22.2',
        en: '48.9',
        ja: '22.2'
      }
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: 'Desquite',
          en: 'Revenge',
          ja: 'リベンジ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.',
          en: 'If any of your Pokémon were Knocked Out by damage from an attack during your opponent\'s last turn, this attack does 60 more damage.',
          ja: '前の相手の番、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Se oculta en la sombra de su oponente y copia sus movimientos y su fuerza. Su imitación resulta más poderosa que el original.',
      en: 'It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.',
      ja: '相手の 影に 潜って 動きや 力を 真似る。 真似ているうちに 本物 よりも 強くなるぞ。' 
    },
    health: 80,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [360]
  },
  {
    id: 334,
    order: 334,
    number: 48,
    pokedex: 874,
    name: {
      es: 'Stonjourner',
      en: 'Stonjourner',
      ja: 'イシヘンジン' 
    },
    info: {
      type: {
        es: 'Pokémon Megalito',
        en: 'Big Rock Pokémon',
        ja: 'きょせきポケモン'
      },
      height: {
        es: '2.5',
        en: '8\'2"',
        ja: '2.5'
      },
      weight: {
        es: '520.0',
        en: '1146.4',
        ja: '520.0'
      }
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: 'Megapatada',
          en: 'Mega Kick',
          ja: 'メガトンキック' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Los elementos que componen las rocas de su cuerpo se han encontrado en lechos de roca muy alejados de su hábitat.',
      en: 'The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon’s habitat.',
      ja: '体の 岩石の 成分は 生息地から 遠く 離れた 土地の 岩盤と 一致した。' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 335,
    order: 335,
    number: 49,
    pokedex: 109,
    name: {
      es: 'Koffing',
      en: 'Koffing',
      ja: 'ドガース' 
    },
    info: {
      type: {
        es: 'Pokémon Gas Venenoso',
        en: 'Poison Gas Pokémon',
        ja: 'どくガスポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '1.0',
        en: '2.2',
        ja: '1.0'
      }
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: 'División',
          en: 'Division',
          ja: 'ぶんれつ' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: {
          es: 'Pon 1 Koffing aleatorio de tu baraja en tu Banca.',
          en: 'Put 1 random Koffing from your deck onto your Bench.',
          ja: '自分の山札から「ドガース」をランダムに1枚、ベンチに出す。' 
        }
      }
    ],
    evolve: [336],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Su cuerpo está lleno a rebosar de gas venenoso. Acude a los vertederos atraídos por el putrefacto olor que emana de los desperdicios.',
      en: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
      ja: '毒ガスで　パンパンの　体｡ 生ゴミの　腐った　においを 求め　ゴミ捨て場に　やってくる｡' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [176, 177, 336, 243]
  },
  {
    id: 336,
    order: 336,
    number: 50,
    pokedex: 110,
    name: {
      es: 'Weezing',
      en: 'Weezing',
      ja: 'マタドガス' 
    },
    info: {
      type: {
        es: 'Pokémon Gas Venenoso',
        en: 'Poison Gas Pokémon',
        ja: 'どくガスポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '9.5',
        en: '20.9',
        ja: '9.5'
      }
    },
    artist: 'Mousho',
    attacks: [
      {
        name: {
          es: 'Pantalla de Humo',
          en: 'Smokescreen',
          ja: 'えんまく' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
          es: 'Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.',
          en: 'During your opponent\'s next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn\'t happen.',
          ja: '次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Si uno de los gemelos Koffing se infla, el otro se desinfla. Mezclan constantemente sus venenosos gases.',
      en: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
      ja: 'どちらかが　ふくらむと　片方は しぼむ　双子の　ドガース｡　いつも 体内の　毒ガスを　混ぜている｡' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [176, 177, 335, 243]
  },
  {
    id: 337,
    order: 337,
    number: 51,
    pokedex: 509,
    name: {
      es: 'Purrloin',
      en: 'Purrloin',
      ja: 'チョロネコ' 
    },
    info: {
      type: {
        es: 'Pokémon Malicioso',
        en: 'Devious Pokémon',
        ja: 'しょうわるポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '10.1',
        en: '22.3',
        ja: '10.1'
      }
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: 'Arañazo',
          en: 'Scratch',
          ja: 'ひっかく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [338],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Sustrae las pertenencias de las personas solo para verlas pasar apuros. Es un rival encarnizado de Nickit.',
      en: 'It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.',
      ja: '困った 姿を 見るために ひとの ものを 盗み出す。 クスネとは ライバルなのだ。' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [338]
  },
  {
    id: 338,
    order: 338,
    number: 52,
    pokedex: 510,
    name: {
      es: 'Liepard',
      en: 'Liepard',
      ja: 'レパルダス' 
    },
    info: {
      type: {
        es: 'Pokémon Calculador',
        en: 'Cruel Pokémon',
        ja: 'れいこくポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1.'
      },
      weight: {
        es: '37.5',
        en: '82.7',
        ja: '37.5'
      }
    },
    artist: 'GIDORA',
    attacks: [
      {
        name: {
          es: 'Cuchillada',
          en: 'Slash',
          ja: 'きりさく' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Bajo su hermoso pelaje y cautivador estilo, que puede llevar fácilmente a engaño, se oculta un carácter imprevisible y agresivo.',
      en: 'Don’t be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.',
      ja: '美しい 毛並みと スタイルに 惑わされがちだが 気まぐれで 狂暴な ポケモンなのだ。' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [337]
  },
  {
    id: 339,
    order: 339,
    number: 53,
    pokedex: 543,
    name: {
      es: 'Venipede',
      en: 'Venipede',
      ja: 'フシデ' 
    },
    info: {
      type: {
        es: 'Pokémon Ciempiés',
        en: 'Centipede Pokémon',
        ja: 'ムカデポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '5.3',
        en: '11.7',
        ja: '5.3'
      }
    },
    artist: '	Yukiko Baba',
    attacks: [
      {
        name: {
          es: 'Apisonar',
          en: 'Ram',
          ja: 'ぶつかる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [340],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Aunque se trata de una especie emparentada con los Sizzlipede, si se encuentran ejemplares de ambas, entablarán una lucha encarnizada.',
      en: 'Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.',
      ja: 'ヤクデは 種類の 近い 仲間だが おたがいが 出会うと 大げんかに なるぞ。' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [340, 341]
  },
  {
    id: 340,
    order: 340,
    number: 54,
    pokedex: 544,
    name: {
      es: 'Whirlipede',
      en: 'Whirlipede',
      ja: 'ホイーガ' 
    },
    info: {
      type: {
        es: 'Pokémon Pupaciempiés',
        en: 'Curlipede Pokémon',
        ja: 'まゆムカデポケモン'
      },
      height: {
        es: '1.2',
        en: '3\'11"',
        ja: '1.2'
      },
      weight: {
        es: '58.5',
        en: '129',
        ja: '58.5'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: 'Picotazo Veneno',
          en: 'Poison Sting',
          ja: 'どくばり' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
        description: {
          es: 'El Pokémon Activo de tu rival pasa a estar Envenenado.',
          en: 'Your opponent\'s Active Pokémon is now Poisoned.',
          ja: '相手のバトルポケモンをどくにする。' 
        }
      }
    ],
    evolve: [341],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Gira a gran velocidad y carga contra sus rivales. Puede alcanzar los 100 km/h.',
      en: 'This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.',
      ja: '高速で 回転し 相手に 突撃。 最高時速は およそ 100キロに 達する。' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [339, 341]
  },
  {
    id: 341,
    order: 341,
    number: 55,
    pokedex: 545,
    name: {
      es: 'Scolipede',
      en: 'Scolipede',
      ja: 'ペンドラー' 
    },
    info: {
      type: {
        es: 'Pokémon Megaciempiés',
        en: 'Megapede Pokémon',
        ja: 'メガムカデポケモン'
      },
      height: {
        es: '2.5',
        en: '8\'2"',
        ja: '2.5'
      },
      weight: {
        es: '200.5',
        en: '442',
        ja: '200.5'
      }
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: 'Carga Tóxica',
          en: 'Venoshock',
          ja: 'ベノムショック' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.',
          en: 'If your opponent\'s Active Pokémon is Poisoned, this attack does 50 more damage.',
          ja: '相手のバトルポケモンがどくなら、50ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Usa las garras que le sobresalen del cuello para atrapar a su presa, golpearla contra el suelo y rematarla inoculando un potente veneno.',
      en: 'Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws’ toxic spikes.',
      ja: '首のツメで 獲物を つかむと そのまま 地面に 叩きつけ 毒のトゲを 突きたてるぞ。' 
    },
    health: 140,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [339, 340]
  },
  {
    id: 342,
    order: 342,
    number: 56,
    pokedex: 621,
    name: {
      es: 'Druddigon',
      en: 'Druddigon',
      ja: 'クリムガン' 
    },
    info: {
      type: {
        es: 'Pokémon Cueva',
        en: 'Cave Pokémon',
        ja: 'ほらあなポケモン'
      },
      height: {
        es: '1.6',
        en: '5\'3"',
        ja: '1.6'
      },
      weight: {
        es: '139.0',
        en: '306.4',
        ja: '139.0'
      }
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: 'Garra Dragón',
          en: 'Dragon Claw',
          ja: 'ドラゴンクロー' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: 'Piel Tosca',
          en: 'Rough Skin',
          ja: 'さめはだ' 
        },
      description: {
          es: 'Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de los Pokémon de tu rival, el Pokémon Atacante sufre 20 puntos de daño.',
          en: 'If this Pokémon is in the Active Spot and is damaged by an attack from your opponent\'s Pokémon, do 20 damage to the Attacking Pokémon.',
          ja: 'このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンに20ダメージ。' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Habita en túneles. Pierde la movilidad si baja su temperatura corporal, por lo que aprovecha la menor oportunidad para tomar el sol.',
      en: 'Druddigon lives in caves, but it never skips sunbathing—it won’t be able to move if its body gets too cold.',
      ja: 'あなぐらに　棲む｡　体が　冷えると　動けなくなるので　日光浴は　欠かさない｡' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 343,
    order: 343,
    number: 57,
    pokedex: 16,
    name: {
      es: 'Pidgey',
      en: 'Pidgey',
      ja: 'ポッポ' 
    },
    info: {
      type: {
        es: 'Pokémon Pajarito',
        en: 'Tiny Bird Pokémon',
        ja: 'ことりポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '1.8',
        en: '4',
        ja: '1.8'
      }
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: 'Aleteo',
          en: 'Flap',
          ja: 'はばたく' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [344],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.',
      en: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
      ja: '森や　林に　多く　分布｡ 地上でも　激しく　はばたいて 砂を　かけたりする｡' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 188, 344, 345, 245, 365]
  },
  {
    id: 344,
    order: 344,
    number: 58,
    pokedex: 17,
    name: {
      es: 'Pidgeotto',
      en: 'Pidgeotto',
      ja: 'ピジョン' 
    },
    info: {
      type: {
        es: 'Pokémon Pájaro',
        en: 'Bird Pokémon',
        ja: 'とりポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Taiga Kayama',
    attacks: [
      {
        name: {
          es: 'Ataque Ala',
          en: 'Wing Attack',
          ja: 'つばさでうつ' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [345],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.',
      en: 'The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.',
      ja: '足の　ツメが　発達している｡ エサの　タマタマを　つかんで １００キロ先の　巣まで　運ぶ｡' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 188, 343, 345, 245, 365]
  },
  {
    id: 345,
    order: 345,
    number: 59,
    pokedex: 18,
    name: {
      es: 'Pidgeot EX',
      en: 'Pidgeot EX',
      ja: 'ピジョット' 
    },
    info: {
      type: {
        es: 'Pokémon Pájaro',
        en: 'Bird Pokémon',
        ja: 'とりポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '39.5',
        en: '87.1',
        ja: '39.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Ciclón Fragmentado',
          en: 'Scattering Cyclone',
          ja: 'けちらしサイクロン' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack does 20 more damage for each of your opponent\'s Benched Pokémon.',
          ja: '相手のベンチポケモンの数×20ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.',
      en: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
      ja: 'エサを　探すとき　水面　すれすれを 滑るように　飛んで コイキングなどを　わしづかみにする｡' 
    },
    health: 170,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 343, 344, 365]
  },
  {
    id: 346,
    order: 346,
    number: 60,
    pokedex: 128,
    name: {
      es: 'Tauros',
      en: 'Tauros',
      ja: 'ケンタロス' 
    },
    info: {
      type: {
        es: 'Pokémon Toro Bravo',
        en: 'Wild Bull Pokémon',
        ja: 'あばれうしポケモン'
      },
      height: {
        es: '1.4',
        en: '4\'7"',
        ja: '1.4'
      },
      weight: {
        es: '88.4',
        en: '194.9',
        ja: '88.4'
      }
    },
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: {
          es: 'Placaje Lucha',
          en: 'Fighting Tackle',
          ja: 'とうしのタックル' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si el Pokémon activo de tu rival es un Pokémon ex, este ataque hace 80 puntos de daño más.',
          en: 'If your opponent\'s Active Pokémon is a Pokémon ex, this attack does 80 more damage.',
          ja: '相手のバトルポケモンが「ポケモンex」なら、80ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Conviene tener cuidado si empieza a fustigarse con las colas, pues es señal de que va a cargar a máxima velocidad.',
      en: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
      ja: 'しっぽで　自分の　体を 叩きだしたら　危険だぞ｡ 猛スピードで　突っ込んでくる｡' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [204]
  },
  {
    id: 347,
    order: 347,
    number: 61,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: 'Pasos Incesantes',
          en: 'Continuous Steps',
          ja: 'れんぞくステップ' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
         es: 'Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.',
         en: 'Flip a coin until you get tails. This attack does 20 more damage for each heads.',
         ja: 'ウラが出るまでコインを投げ、オモテの数×20ダメージ。' 
       }
      }
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [45, 80, 102, 206, 207, 208, 305, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 348,
    order: 348,
    number: 62,
    pokedex: 441,
    name: {
      es: 'Chatot',
      en: 'Chatot',
      ja: 'ペラップ' 
    },
    info: {
      type: {
        es: 'Pokémon Corchea',
        en: 'Music Note Pokémon',
        ja: 'おんぷポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '1.9',
        en: '4.2',
        ja: '1.9'
      }
    },
    artist: 'Masako Tomii',
    attacks: [
      {
        name: {
          es: 'Mimético',
          en: 'Mimic',
          ja: 'ものまね' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Pon las cartas de tu mano en tu baraja y barájalas todas. Roba 1 carta por cada carta en la mano de tu rival.',
          en: 'Shuffle your hand into your deck. Draw a card for each card in your opponent\'s hand.',
          ja: '自分の手札をすべて山札にもどす。相手の手札の枚数ぶん、自分の山札を引く。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Imita los sonidos de sus rivales, haciéndoles creer que son amigos e impidiendo que le ataquen.',
      en: 'It mimics the cries of other Pokémon to trick them into thinking it’s one of them. This way they won’t attack it.',
      ja: '相手と　同じ　鳴き声を　出す　ことで　仲間と　思いこませて　襲われないように　しているのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: []
  },
  {
    id: 349,
    order: 349,
    number: 63,
    name: {
      es: 'Ámbar Viejo',
      en: 'Old Amber',
      ja: 'ひみつのコハク' 
    },
    artist: 'Toyste Beach',
    evolve: [210],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Juega esta carta como si fuera un Pokémon  Básico de 40 PS. En cualquier momento durante tu turno, puedes descartar esta carta del juego. Esta carta no puede retirarse.',
      en: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
      ja: 'このカードは、HP40の無色タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードはにげるができない。' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    element: -1,
    pokedex: -1,
    related: [210, 332, 364, 370]
  },
  {
    id: 350,
    order: 350,
    number: 64,
    name: {
      es: 'Pokéflauta',
      en: 'Pokémon Flute',
      ja: 'ポケモンの笛' 
    },
    artist: 'Toyste Beach',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.',
      en: 'Put a Basic Pokémon from your opponent’s discard pile onto their Bench.',
      ja: '相手のトラッシュからたねポケモンを1枚選び、相手のベンチに出す。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ITEM,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    element: -1,
    pokedex: -1,
    related: [351, 373, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 351,
    order: 351,
    number: 65,
    name: {
      es: 'Losa Singular',
      en: 'Mythical Slab',
      ja: '幻の石板' 
    },
    artist: 'AYUMI ODASHIMA',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Mira la primera carta de tu baraja. Si es un Pokémon Psíquico, ponla en tu mano. Si no es un Pokémon Psíquico, ponla en la parte inferior de tu baraja.',
      en: 'Look at the top card of your deck. If that card is a Psychic Pokémon, put it into your hand. If it is not a Psychic Pokémon, put it on the bottom of your deck.',
      ja: '自分の山札を上から1枚見て、そのカードが超ポケモンなら、手札に加える。超ポケモンでないなら、山札の下にもどす。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.ITEM,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    element: -1,
    pokedex: -1,
    related: [350, 373, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 352,
    order: 352,
    number: 66,
    name: {
      es: 'Explorador Novel',
      en: 'Budding Expeditioner',
      ja: 'かけだし調査員' 
    },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Pon a tu Mew ex que esté en el Puesto Activo en tu mano.',
      en: 'Put your Mew EX in the Active Spot into your hand.',
      ja: '自分のバトル場の「ミュウex」を手札にもどす。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 353,
    order: 353,
    number: 67,
    name: {
      es: 'Azul',
      en: 'Blue',
      ja: 'グリーン' 
    },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Durante el próximo turno de tu rival, los ataques de los Pokémon de tu rival hacen -10 puntos de daño a todos tus Pokémon.',
      en: 'During your opponent’s next turn, all of your Pokémon take −10 damage from attacks from your opponent’s Pokémon.',
      ja: '次の相手の番、自分のポケモン全員が、相手のポケモンから受けるダメージを-10する。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 354,
    order: 354,
    number: 68,
    name: {
      es: 'Hoja',
      en: 'Leaf',
      ja: 'リーフ' 
    },
    artist: 'En Morikura',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Durante este turno, el Coste de Retirada de tu Pokémon Activo es de 2 menos.',
      en: 'During this turn, the Retreat Cost of your Active Pokémon is 2 less.',
      ja: 'この番、自分のバトルポケモンのにげるためのエネルギーを、2個少なくする。' 
    },
    health: 0,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 355,
    order: 355,
    number: 69,
    pokedex: 103,
    name: {
      es: 'Exeggutor',
      en: 'Exeggutor',
      ja: 'ナッシー' 
    },
    info: {
      type: {
        es: 'Pokémon Coco',
        en: 'Coconut Pokémon',
        ja: 'やしのみポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '120',
        en: '264.6',
        ja: '120'
      }
    },
    artist: 'Gapao',
    attacks: [
      {
        name: {
          es: 'Psíquico',
          en: 'Psychic',
          ja: 'サイコキネシス' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.',
          en: 'This attack does 20 damage for each Energy attached to your opponent\'s Active Pokémon.',
          ja: '相手のバトルポケモンのエネルギーの数×20ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cada una de las tres cabezas piensa de forma independiente y apenas muestra interés por el resto.',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '３つの　頭は　べつのことを 考えている｡　自分以外は あまり　興味がない　ようだ｡' 
    },
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [21, 22, 287, 288]
  },
  {
    id: 356,
    order: 356,
    number: 70,
    pokedex: 497,
    name: {
      es: 'Serperior',
      en: 'Serperior',
      ja: 'ジャローダ' 
    },
    info: {
      type: {
        es: 'Pokémon Realeza',
        en: 'Regal Pokémon',
        ja: 'ロイヤルポケモン'
      },
      height: {
        es: '3.3',
        en: '10\'10"',
        ja: '3.3'
      },
      weight: {
        es: '63.0',
        en: '138.9',
        ja: '63.0'
      }
    },
    artist: 'rika',
    attacks: [
      {
        name: {
          es: 'Rayo Solar',
          en: 'Solar Beam',
          ja: 'ソーラービーム' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
        es: 'Dominio de la Selva',
        en: 'Jungle Totem',
        ja: 'みつりんのぬし' 
      },
      description: {
        es: 'Cada Energía Planta unida a tus Pokémon Planta proporciona 2 Energías Planta. Este efecto no se acumula.',
        en: 'Each Grass Energy attached to your Grass Pokémon provides 2 Grass Energy. This effect doesn\'t stack.',
        ja: 'このポケモンがいるかぎり、自分の場の草ポケモンについているすべての草エネルギーは、それぞれ草エネルギー2個ぶんとしてはたらく。この特性は重ならない。' 
      }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Tan solo muestra su verdadero poder a quienes no se amedrentan ante su noble pero inquisitoria mirada.',
      en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
      ja: 'ジャローダの　けだかい　ひとみで　いすくめられても　へいきな　つよい　あいてにだけ　ほんきを　だす。'
    },
    health: 110,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [290, 291, 292, 399]
  },
  {
    id: 357,
    order: 357,
    number: 71,
    pokedex: 757,
    name: {
      es: 'Salandit',
      en: 'Salandit',
      ja: 'ヤトウモリ' 
    },
    info: {
      type: {
        es: 'Pokémon Lagartoxina',
        en: 'Toxic Lizard Pokémon',
        ja: 'どくトカゲポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '4.8',
        en: '10.6',
        ja: '4.8'
      }
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: 'Carga Tóxica',
          en: 'Venoshock',
          ja: 'ベノムショック' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.',
          en: 'If your opponent\'s Active Pokémon is Poisoned, this attack does 40 more damage.',
          ja: '相手のバトルポケモンがどくなら、40ダメージ追加。' 
        }
      }
    ],
    evolve: [50],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Provoca a sus presas para conducirlas a zonas rocosas y estrechas, donde las aturde con un gas venenoso antes de acabar con ellas.',
      en: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
      ja: '獲物を　挑発して　狭い 岩場に　誘い込み　フラフラになる 毒ガスを　吹きかけ　仕留めるのだ｡' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [49, 50, 301, 302]
  },
  {
    id: 358,
    order: 358,
    number: 72,
    pokedex: 134,
    name: {
      es: 'Vaporeon',
      en: 'Vaporeon',
      ja: 'シャワーズ' 
    },
    info: {
      type: {
        es: 'Pokémon Burbuja',
        en: 'Bubble Jet Pokémon',
        ja: 'あわはきポケモン'
      },
      height: {
        es: '1',
        en: '3\'3"',
        ja: '1'
      },
      weight: {
        es: '29.0',
        en: '63.9',
        ja: '29.0'
      }
    },
    artist: 'aspara',
    attacks: [
      {
        name: {
          es: 'Chapoteo Ondulante',
          en: 'Wave Splash',
          ja: 'スプラッシュ' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: 'Hacer Limpieza',
          en: 'Wash Out',
          ja: 'おしながす' 
        },
      description: {
       es: 'Todas las veces que quieras durante tu turno, puedes mover 1 Energía Agua de 1 de tus Pokémon Agua en Banca a tu Pokémon Agua Activo.',
       en: 'As often as you like during your turn, you may move a Water Energy from 1 of your Benched Water Pokémon to your Active Water Pokémon.',
       ja: '自分の番に何回でも使える。自分のベンチの水ポケモンから水エネルギーを1個、バトル場の水ポケモンにつけ替える。' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Vive cerca del agua. Su cola termina en una aleta parecida a la de un pez, por lo que hay gente que lo confunde con una sirena.',
      en: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
      ja: '水辺に　棲むが　尻尾には 魚のような　ひれが　残っていて 人魚と　間違う　人もいる｡' 
    },
    health: 120,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [80, 206, 207, 208, 305, 347, 248, 402]
  },
  {
    id: 359,
    order: 359,
    number: 73,
    pokedex: 702,
    name: {
      es: 'Dedenne',
      en: 'Dedenne',
      ja: 'デデンネ' 
    },
    info: {
      type: {
        es: 'Pokémon Antenas',
        en: 'Antenna Pokémon',
        ja: 'アンテナポケモン'
      },
      height: {
        es: '0.2',
        en: '0\'8"',
        ja: '0.2'
      },
      weight: {
        es: '2.2',
        en: '4.9',
        ja: '2.2'
      }
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: 'Impactrueno',
          en: 'Thunder Shock',
          ja: 'でんきショック' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
          es: 'Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.',
          en: 'Flip a coin. If heads, your opponent\'s Active Pokémon is now Paralyzed.',
          ja: 'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Como es menudo y su órgano electrógeno está poco desarrollado, absorbe electricidad de las casas con la cola para recargar sus reservas.',
      en: 'It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.',
      ja: '体が 小さく 発電器官が 未熟なので 人家の 電気を 尻尾で 吸い取り 充電する。' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.PARALYZE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [316]
  },
  {
    id: 360,
    order: 360,
    number: 74,
    pokedex: 802,
    name: {
      es: 'Marshadow',
      en: 'Marshadow',
      ja: 'マーシャドー' 
    },
    info: {
      type: {
        es: 'Pokémon Morasombra',
        en: 'Gloomdweller Pokémon',
        ja: 'かげすみポケモン'
      },
      height: {
        es: '0.7',
        en: '2\'4"',
        ja: '0.7'
      },
      weight: {
        es: '22.2',
        en: '48.9',
        ja: '22.2'
      }
    },
    artist: 'OKACHEKE',
    attacks: [
      {
        name: {
          es: 'Desquite',
          en: 'Revenge',
          ja: 'リベンジ' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 60 puntos de daño más.',
          en: 'If any of your Pokémon were Knocked Out by damage from an attack during your opponent\'s last turn, this attack does 60 more damage.',
          ja: '前の相手の番、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Se oculta en la sombra de su oponente y copia sus movimientos y su fuerza. Su imitación resulta más poderosa que el original.',
      en: 'It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.',
      ja: '相手の 影に 潜って 動きや 力を 真似る。 真似ているうちに 本物 よりも 強くなるぞ。' 
    },
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [333]
  },
  {
    id: 361,
    order: 361,
    number: 75,
    pokedex: 251,
    name: {
      es: 'Celebi EX',
      en: 'Celebi EX',
      ja: 'セレビィ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Viajetiempo',
        en: 'Time Travel Pokémon',
        ja: 'ときわたりポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '5.0',
        en: '11',
        ja: '5.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Floración Potente',
          en: 'Powerful Bloom',
          ja: 'パワフルブルーム' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.',
          en: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.',
          ja: 'このポケモンのエネルギーの数ぶんコインを投げ、表の数×50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vino del futuro haciendo un viaje en el tiempo. Hay quien piensa que, mientras Celebi siga apareciendo, el futuro será brillante y esperanzador.',
      en: 'This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.',
      ja: 'もりのかみさま として まつられる。きれいな もりが あるところ そこに セレビィは あらわれる。' 
    },
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [289, 371]
  },
  {
    id: 362,
    order: 362,
    number: 76,
    pokedex: 130,
    name: {
      es: 'Gyarados EX',
      en: 'Gyarados EX',
      ja: 'ギャラドス EX' 
    },
    info: {
      type: {
        es: 'Pokémon Atrocidad',
        en: 'Atrocious Pokémon',
        ja: 'きょうあくポケモン'
      },
      height: {
        es: '6.5',
        en: '21\'4"',
        ja: '6.5'
      },
      weight: {
        es: '235.0',
        en: '518.1',
        ja: '235.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Torbellino Furioso',
          en: 'Rampaging Whirlpool',
          ja: 'あばれうずしお' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Descarta 1 Energía aleatoria de entre las Energías unidas a todos los Pokémon (tanto tuyos como de tu rival).',
          en: 'Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent\'s',
          ja: 'おたがいのポケモン全員についているエネルギーからランダムに1個トラッシュ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando aparece, monta en cólera. No deja de estar furioso hasta que lo destruye todo.',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '一度　姿を　現すと まわりを　すべて　焼き尽くさないと 怒りが　鎮まらない　という｡' 
    },
    health: 180,
    rarity: CardRarityENUM.SUPER,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [77, 303, 304]
  },
  {
    id: 363,
    order: 363,
    number: 77,
    pokedex: 151,
    name: {
      es: 'Mew EX',
      en: 'Mew EX',
      ja: 'ミュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Nueva Especie',
        en: 'New Species Pokémon',
        ja: 'しんしゅポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Disparo Psi',
          en: 'Psyshot',
          ja: 'サイコショット' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: 'Hackeo Genoma',
          en: 'Genome Hacking',
          ja: 'ゲノムハック' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: 'あらゆる　技を　使うため ポケモンの　先祖と　考える 学者が　たくさん　いる｡' 
    },
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [318, 369, 372]
  },
  {
    id: 364,
    order: 364,
    number: 78,
    pokedex: 142,
    name: {
      es: 'Aerodactyl EX',
      en: 'Aerodactyl EX',
      ja: 'プテラ' 
    },
    info: {
      type: {
        es: 'Pokémon Fósil',
        en: 'Fossil Pokémon',
        ja: 'かせきポケモン'
      },
      height: {
        es: '1.8',
        en: '5\'11"',
        ja: '1.8'
      },
      weight: {
        es: '59.0',
        en: '130.1',
        ja: '59.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Aterrizaje',
          en: 'Land Crush',
          ja: 'ランドクラッシュ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: 'Ley Primitiva',
          en: 'Primeval Law',
          ja: 'げんしのさだめ' 
        },
      description: {
          es: 'Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Activo.',
          en: 'Your opponent can\'t play any Pokémon from their hand to evolve their Active Pokémon.',
          ja: 'このポケモンがいるかぎり、相手は手札からポケモンを出して、バトルポケモンを進化させられない。' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '古代の　獰猛な　ポケモン｡ 完璧な　復元は いまの　科学でも　不可能らしい｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [332, 370, 349]
  },
  {
    id: 365,
    order: 365,
    number: 79,
    pokedex: 18,
    name: {
      es: 'Pidgeot EX',
      en: 'Pidgeot EX',
      ja: 'ピジョット' 
    },
    info: {
      type: {
        es: 'Pokémon Pájaro',
        en: 'Bird Pokémon',
        ja: 'とりポケモン'
      },
      height: {
        es: '1.5',
        en: '4\'11"',
        ja: '1.5'
      },
      weight: {
        es: '39.5',
        en: '87.1',
        ja: '39.5'
      }
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: 'Ciclón Fragmentado',
          en: 'Scattering Cyclone',
          ja: 'けちらしサイクロン' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.',
          en: 'This attack does 20 more damage for each of your opponent\'s Benched Pokémon.',
          ja: '相手のベンチポケモンの数×20ダメージ追加。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.',
      en: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
      ja: 'エサを　探すとき　水面　すれすれを 滑るように　飛んで コイキングなどを　わしづかみにする｡' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [186, 187, 343, 344, 345]
  },
  {
    id: 366,
    order: 366,
    number: 80,
    name: {
      es: 'Explorador Novel',
      en: 'Budding Expeditioner',
      ja: 'かけだし調査員' 
    },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Pon a tu Mew ex que esté en el Puesto Activo en tu mano.',
      en: 'Put your Mew EX in the Active Spot into your hand.',
      ja: '自分のバトル場の「ミュウex」を手札にもどす。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 368, 379]
  },
  {
    id: 367,
    order: 367,
    number: 81,
    name: {
      es: 'Azul',
      en: 'Blue',
      ja: 'グリーン' 
    },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Durante el próximo turno de tu rival, los ataques de los Pokémon de tu rival hacen -10 puntos de daño a todos tus Pokémon.',
      en: 'During your opponent’s next turn, all of your Pokémon take −10 damage from attacks from your opponent’s Pokémon.',
      ja: '次の相手の番、自分のポケモン全員が、相手のポケモンから受けるダメージを-10する。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 366, 368, 379]
  },
  {
    id: 368,
    order: 368,
    number: 82,
    name: {
      es: 'Hoja',
      en: 'Leaf',
      ja: 'リーフ' 
    },
    artist: 'En Morikura',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Durante este turno, el Coste de Retirada de tu Pokémon Activo es de 2 menos.',
      en: 'During this turn, the Retreat Cost of your Active Pokémon is 2 less.',
      ja: 'この番、自分のバトルポケモンのにげるためのエネルギーを、2個少なくする。' 
    },
    health: 0,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.MYTHICAL_ISLAND,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 379]
  },
  {
    id: 369,
    order: 369,
    number: 83,
    pokedex: 151,
    name: {
      es: 'Mew EX',
      en: 'Mew EX',
      ja: 'ミュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Nueva Especie',
        en: 'New Species Pokémon',
        ja: 'しんしゅポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: 'Disparo Psi',
          en: 'Psyshot',
          ja: 'サイコショット' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: 'Hackeo Genoma',
          en: 'Genome Hacking',
          ja: 'ゲノムハック' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: 'あらゆる　技を　使うため ポケモンの　先祖と　考える 学者が　たくさん　いる｡' 
    },
    health: 130,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [318, 363, 372]
  },
  {
    id: 370,
    order: 370,
    number: 84,
    pokedex: 142,
    name: {
      es: 'Aerodactyl EX',
      en: 'Aerodactyl EX',
      ja: 'プテラ' 
    },
    info: {
      type: {
        es: 'Pokémon Fósil',
        en: 'Fossil Pokémon',
        ja: 'かせきポケモン'
      },
      height: {
        es: '1.8',
        en: '5\'11"',
        ja: '1.8'
      },
      weight: {
        es: '59.0',
        en: '130.1',
        ja: '59.0'
      }
    },
    artist: 'danciao',
    attacks: [
      {
        name: {
          es: 'Aterrizaje',
          en: 'Land Crush',
          ja: 'ランドクラッシュ' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: 'Ley Primitiva',
          en: 'Primeval Law',
          ja: 'げんしのさだめ' 
        },
      description: {
          es: 'Tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar al Pokémon Activo.',
          en: 'Your opponent can\'t play any Pokémon from their hand to evolve their Active Pokémon.',
          ja: 'このポケモンがいるかぎり、相手は手札からポケモンを出して、バトルポケモンを進化させられない。' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Un feroz Pokémon de la época prehistórica al que no bastan todos los avances tecnológicos actuales para regenerar a la perfección.',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '古代の　獰猛な　ポケモン｡ 完璧な　復元は いまの　科学でも　不可能らしい｡' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [332, 364, 349]
  },
  {
    id: 371,
    order: 371,
    number: 85,
    pokedex: 251,
    name: {
      es: 'Celebi EX',
      en: 'Celebi EX',
      ja: 'セレビィ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Viajetiempo',
        en: 'Time Travel Pokémon',
        ja: 'ときわたりポケモン'
      },
      height: {
        es: '0.6',
        en: '2\'',
        ja: '0.6'
      },
      weight: {
        es: '5.0',
        en: '11',
        ja: '5.0'
      }
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: 'Floración Potente',
          en: 'Powerful Bloom',
          ja: 'パワフルブルーム' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.',
          en: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.',
          ja: 'このポケモンのエネルギーの数ぶんコインを投げ、表の数×50ダメージ。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vino del futuro haciendo un viaje en el tiempo. Hay quien piensa que, mientras Celebi siga apareciendo, el futuro será brillante y esperanzador.',
      en: 'This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.',
      ja: 'もりのかみさま として まつられる。きれいな もりが あるところ そこに セレビィは あらわれる。' 
    },
    health: 130,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [289, 361]
  },
  {
    id: 372,
    order: 372,
    number: 86,
    pokedex: 151,
    name: {
      es: 'Mew EX',
      en: 'Mew EX',
      ja: 'ミュウ EX' 
    },
    info: {
      type: {
        es: 'Pokémon Nueva Especie',
        en: 'New Species Pokémon',
        ja: 'しんしゅポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '4.0',
        en: '8.8',
        ja: '4.0'
      }
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: 'Disparo Psi',
          en: 'Psyshot',
          ja: 'サイコショット' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: 'Hackeo Genoma',
          en: 'Genome Hacking',
          ja: 'ゲノムハック' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: 'Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: 'あらゆる　技を　使うため ポケモンの　先祖と　考える 学者が　たくさん　いる｡' 
    },
    health: 130,
    rarity: CardRarityENUM.CROWN,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [318, 363, 369]
  },
  {
    id: 373,
    order: 373,
    number: 1,
    pokedex: 43,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Oddish',
      en: 'Oddish',
      ja: '' 
    },
    artist: 'Asako Ito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Blot',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.GRASS],
        description: {
       es: '',
       en: 'Heal 10 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [374],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 374,
    order: 374,
    number: 2,
    pokedex: 44,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gloom',
      en: 'Gloom',
      ja: '' 
    },
    artist: 'Shibuzah',
    attacks: [
      {
        name: {
          es: '',
          en: 'Razor Leaf',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS],
      }
    ],
    evolve: [13, 315],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [406]
  },
  {
    id: 375,
    order: 375,
    number: 3,
    pokedex: 182,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bellossom',
      en: 'Bellossom',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leaf Step',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [407]
  },
  {
    id: 376,
    order: 376,
    number: 4,
    pokedex: 114,
    name: {
      es: 'Tangela',
      en: 'Tangela',
      ja: '' 
    },
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    artist: 'Narumi Sato',
    attacks: [
      {
        name: {
          es: '',
          en: 'Vine Whip',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [377],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon’s true appearance remains a mystery.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 377,
    order: 377,
    number: 5,
    pokedex: 465,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Tangrowth',
      en: 'Tangrowth',
      ja: '' 
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Drain',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Heal 30 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [409]
  },
  {
    id: 378,
    order: 378,
    number: 6,
    pokedex: 193,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Yanma',
      en: 'Yanma',
      ja: '' 
    },
    artist: 'Eri Yamaki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [379],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its eyes can see 360 degrees without moving its head. It won’t miss prey—even those behind it.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 379,
    order: 379,
    number: 7,
    pokedex: 469,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Yanmega EX',
      en: 'Yanmega EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Air Slash',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard a random Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [411]
  },
  {
    id: 380,
    order: 380,
    number: 8,
    pokedex: 315,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Roselia',
      en: 'Roselia',
      ja: '' 
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sting',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [381],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its flowers give off a relaxing fragrance. The stronger its aroma, the healthier the Roselia is.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 381,
    order: 381,
    number: 9,
    pokedex: 407,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Roserade',
      en: 'Roserade',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poisonous Whip',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'After captivating opponents with its sweet scent, it lashes them with its thorny whips.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [380]
  },
  {
    id: 382,
    order: 382,
    number: 10,
    pokedex: 387,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Turtwig',
      en: 'Turtwig',
      ja: '' 
    },
    artist: 'OOYAMA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [383],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It uses its whole body to photosynthesize when exposed to sunlight. Its shell is made from hardened soil.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 383,
    order: 383,
    number: 11,
    pokedex: 388,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Grotle',
      en: 'Grotle',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Razor Leaf',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [384],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It lives along water in forests. In the daytime, it leaves the forest to sunbathe its treed shell.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [382]
  },
  {
    id: 384,
    order: 384,
    number: 12,
    pokedex: 389,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Torterra',
      en: 'Torterra',
      ja: '' 
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Frenzy Plant',
          ja: '' 
        },
        damage: 160,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your next turn, this Pokémon can’t use Frenzy Plant.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Ancient people imagined that beneath the ground dwelt a gigantic Torterra.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.INACTIVE],
    found: [
      EXPANSION.PALKIA
    ],
    related: [383]
  },
  {
    id: 385,
    order: 385,
    number: 13,
    pokedex: 401,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Kricketot',
      en: 'Kricketot',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bug Bite',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [386],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [386]
  },
  {
    id: 386,
    order: 386,
    number: 14,
    pokedex: 402,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Kricketune',
      en: 'Kricketune',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Entrancing Melody',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Confused.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'By allowing its cry to resonate in the hollow of its belly, it produces a captivating sound.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.CONFUSION],
    found: [
      EXPANSION.PALKIA
    ],
    related: [385]
  },
  {
    id: 387,
    order: 387,
    number: 15,
    pokedex: 412,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Burmy',
      en: 'Burmy',
      ja: '' 
    },
    artist: 'Mugi Hamada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [388, 462, 487],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 388,
    order: 388,
    number: 16,
    pokedex: 413,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Wormadam',
      en: 'Wormadam',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leaf Cutter',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 30 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its appearance changes depending on where it evolved. The materials on hand become a part of its body.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [387]
  },
  {
    id: 389,
    order: 389,
    number: 17,
    pokedex: 415,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Combee',
      en: 'Combee',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Call for Family',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Put 1 random Combee from your deck onto your Bench.',
       ja: '' 
     }
      }
    ],
    evolve: [390],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'At night, Combee sleep in a group of about a hundred, packed closely together in a lump.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 390,
    order: 390,
    number: 18,
    pokedex: 416,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Vespiquen',
      en: 'Vespiquen',
      ja: '' 
    },
    artist: 'chibi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pierce',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA
    ],
    related: [389]
  },
  {
    id: 391,
    order: 391,
    number: 19,
    pokedex: 455,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Carnivine',
      en: 'Carnivine',
      ja: '' 
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flog',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 50 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 392,
    order: 392,
    number: 20,
    pokedex: 470,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Leafeon',
      en: 'Leafeon',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leafy Cyclone',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'During your next turn, this Pokémon can’t attack.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'When you see Leafeon asleep in a patch of sunshine, you’ll know it is using photosynthesis to produce clean air.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.INACTIVE],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 393,
    order: 393,
    number: 21,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mow Rotom',
      en: 'Mow Rotom',
      ja: '' 
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Energy Cutoff',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Flip a coin. If heads, discard a random Energy from your opponent’s Active Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The lawn mower is one of the household appliances that led to the development of the Rotom Dex.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.DISCARD
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 394,
    order: 394,
    number: 22,
    pokedex: 492,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Shaymin',
      en: 'Shaymin',
      ja: '' 
    },
    artist: 'Narumi Sato',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flop',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Fragrant Flower Garden',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may heal 10 damage from each of your Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 395,
    order: 395,
    number: 23,
    pokedex: 126,
    name: {
      es: 'Magmar',
      en: 'Magmar',
      ja: 'ブーバー' 
    },
    info: {
      type: {
        es: 'Pokémon Escupefuego',
        en: 'Spitfire Pokémon',
        ja: 'ひふきポケモン'
      },
      height: {
        es: '1.3',
        en: '4\'3"',
        ja: '1.3'
      },
      weight: {
        es: '44.5',
        en: '98.1',
        ja: '44.5'
      }
    },
    artist: 'Hiroki Asanuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Stoke',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: '',
          en: 'Take a Fire Energy from your Energy Zone and attach it to this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [396],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 396,
    order: 396,
    number: 24,
    pokedex: 467,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Magmortar',
      en: 'Magmortar',
      ja: '' 
    },
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bursting Inferno',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
          es: '',
          en: 'Your opponent’s Active Pokémon is now Burned.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'When Magmortar inhales deeply, the fire burning in its belly intensifies, rising in temperature to over 3,600 degrees Fahrenheit.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.BURNED],
    found: [
      EXPANSION.PALKIA
    ],
    related: [395]
  },
  {
    id: 397,
    order: 397,
    number: 25,
    pokedex: 218,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Slugma',
      en: 'Slugma',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flare',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIRE]
      }
    ],
    evolve: [398],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'A common sight in volcanic areas, it slowly slithers around in a constant search for warm places.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 398,
    order: 398,
    number: 26,
    pokedex: 219,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Magcargo',
      en: 'Magcargo',
      ja: '' 
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Searing Flame',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Your opponent’s Active Pokémon is now Burned.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its brittle shell occasionally spouts intense flames that circulate throughout its body.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.BURNED],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [397]
  },
  {
    id: 399,
    order: 399,
    number: 27,
    pokedex: 390,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Chimchar',
      en: 'Chimchar',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratch',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIRE]
      }
    ],
    evolve: [400],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its fiery rear end is fueled by gas made in its belly. Even rain can’t extinguish the fire.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 400,
    order: 400,
    number: 28,
    pokedex: 391,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Monferno',
      en: 'Monferno',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fiery Punch',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE]
      }
    ],
    evolve: [401],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [399]
  },
  {
    id: 401,
    order: 401,
    number: 29,
    pokedex: 392,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Infernape EX',
      en: 'Infernape EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flare Blitz',
          ja: '' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
          es: '',
          en: 'Discard all Fire Energy from this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 170,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 0,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA
    ],
    related: [400]
  },
  {
    id: 402,
    order: 402,
    number: 30,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Heat Rotom',
      en: 'Heat Rotom',
      ja: '' 
    },
    artist: 'Kedamahadaitai Yawarakai',
    attacks: [
      {
        name: {
          es: '',
          en: 'Heat Breath',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Flip a coin. If heads, this attack does 30 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If the convection microwave oven is not working properly, then the Rotom inhabiting it will become lethargic.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 403,
    order: 403,
    number: 31,
    pokedex: 220,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Swinub',
      en: 'Swinub',
      ja: '' 
    },
    artist: 'Eri Yamaki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Headbutt',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [404],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It rubs its snout on the ground to find and dig up food. It sometimes discovers hot springs.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 404,
    order: 404,
    number: 32,
    pokedex: 221,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Piloswine',
      en: 'Piloswine',
      ja: '' 
    },
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hammer In',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Thick Fat',
          ja: '' 
        },
      description: {
       es: '',
       en: 'This Pokémon takes −20 damage from attacks from Fire or Water Pokémon.',
       ja: '' 
     }
    },
    evolve: [405],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [403]
  },
  {
    id: 405,
    order: 405,
    number: 33,
    pokedex: 473,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mamoswine',
      en: 'Mamoswine',
      ja: '' 
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: '',
          en: 'Frosty Flattening',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Thick Fat',
          ja: '' 
        },
      description: {
       es: '',
       en: 'This Pokémon takes −20 damage from attacks from Fire or Water Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Pokémon can be spotted in wall paintings from as far back as 10,000 years ago. For a while, it was thought to have gone extinct.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [404]
  },
  {
    id: 406,
    order: 406,
    number: 34,
    pokedex: 378,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Regice',
      en: 'Regice',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Frost Smash',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Crystal Body',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Prevent all effects of attacks used by your opponent’s Pokémon done to this Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'With cold air that can reach temperatures as low as −328 degrees Fahrenheit, Regice instantly freezes any creature that approaches it.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 407,
    order: 407,
    number: 35,
    pokedex: 393,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Piplup',
      en: 'Piplup',
      ja: '' 
    },
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: {
          es: '',
          en: 'Nap',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'Heal 20 damage from this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [408],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It doesn’t like to be taken care of. It’s difficult to bond with since it won’t listen to its Trainer.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 408,
    order: 408,
    number: 36,
    pokedex: 394,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Prinplup',
      en: 'Prinplup',
      ja: '' 
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: '',
          en: 'Surf',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [409],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It lives alone, away from others. Apparently, every one of them believes it is the most important.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [407]
  },
  {
    id: 409,
    order: 409,
    number: 37,
    pokedex: 395,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Empoleon',
      en: 'Empoleon',
      ja: '' 
    },
    artist: 'Satoshi Shirai',
    attacks: [
      {
        name: {
          es: '',
          en: 'Aqua Jet',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'This attack also does 30 damage to 1 of your opponent’s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.PALKIA
    ],
    related: [408]
  },
  {
    id: 410,
    order: 410,
    number: 38,
    pokedex: 418,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Buizel',
      en: 'Buizel',
      ja: '' 
    },
    artist: 'OKUBO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Water Gun',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER]
      }
    ],
    evolve: [411],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It spins its two tails like a screw to propel itself through water. The tails also slice clinging seaweed.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 411,
    order: 411,
    number: 39,
    pokedex: 419,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Floatzel',
      en: 'Floatzel',
      ja: '' 
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Jet Screw',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 30 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [410]
  },
  {
    id: 412,
    order: 412,
    number: 40,
    pokedex: 422,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Shellos',
      en: 'Shellos',
      ja: '' 
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mud-Slap',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [413],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It used to have a shell on its back long ago. This species is closely related to Pokémon like Shellder.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 413,
    order: 413,
    number: 41,
    pokedex: 423,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gastrodon',
      en: 'Gastrodon',
      ja: '' 
    },
    artist: 'Aya Kusube',
    attacks: [
      {
        name: {
          es: '',
          en: 'Muddy Water',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'They normally inhabit rocky seashores, but in times of continuous rain, they can sometimes be found in the mountains, far from the sea.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [412]
  },
  {
    id: 414,
    order: 414,
    number: 42,
    pokedex: 456,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Finneon',
      en: 'Finneon',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Elegant Swim',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'Flip a coin. If heads, during your opponent’s next turn, prevent all damage from-and effects of-attacks done to this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [415],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The line running down its side can store sunlight. It shines vividly at night.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.RESIST
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 415,
    order: 415,
    number: 43,
    pokedex: 457,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lumineon',
      en: 'Lumineon',
      ja: '' 
    },
    artist: 'rika',
    attacks: [
      {
        name: {
          es: '',
          en: 'Waterfall',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [414]
  },
  {
    id: 416,
    order: 416,
    number: 44,
    pokedex: 459,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Snover',
      en: 'Snover',
      ja: '' 
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ice Shard',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.WATER],
        description: {
        es: '',
        en: 'If your opponent’s Active Pokémon is a Fire Pokémon, this attack does 30 more damage.',
        ja: '' 
      }
      }
    ],
    evolve: [417],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'During cold seasons, it migrates to the mountain’s lower reaches. It returns to the snow-covered summit in the spring.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 417,
    order: 417,
    number: 45,
    pokedex: 460,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Abomasnow',
      en: 'Abomasnow',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Frost Breath',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [416]
  },
  {
    id: 418,
    order: 418,
    number: 46,
    pokedex: 471,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Glaceon',
      en: 'Glaceon',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ice Beam',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It can control its body temperature at will. This enables it to freeze the moisture in the atmosphere, creating flurries of diamond dust.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.PARALYZE
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 419,
    order: 419,
    number: 47,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Wash Rotom',
      en: 'Wash Rotom',
      ja: '' 
    },
    artist: 'Saboteri',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wave Splash',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Rotom has entered a washing machine. It nods with satisfaction after it floods the surrounding area.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 420,
    order: 420,
    number: 48,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Frost Rotom',
      en: 'Frost Rotom',
      ja: '' 
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: '',
          en: 'Blizzard',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Rotom has entered a refrigerator. It leaps around gleefully after it uses cold air to freeze the area around it.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 421,
    order: 421,
    number: 49,
    pokedex: 484,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Palkia EX',
      en: 'Palkia EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER]
      },
      {
        name: {
          es: '',
          en: 'Dimensional Storm',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Discard 3 Water Energy from this Pokémon. This attack also does 20 damage to each of your opponent’s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 422,
    order: 422,
    number: 50,
    pokedex: 490,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Manaphy',
      en: 'Manaphy',
      ja: '' 
    },
    artist: 'MINAMINAMI Take',
    attacks: [
      {
        name: {
          es: '',
          en: 'Oceanic Gift',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'Choose 2 of your Benched Pokémon. For each of those Pokémon, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is born with a wondrous power that lets it bond with any kind of Pokémon.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 423,
    order: 423,
    number: 51,
    pokedex: 81,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Magnemite',
      en: 'Magnemite',
      ja: '' 
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [424],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 424,
    order: 424,
    number: 52,
    pokedex: 82,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Magneton',
      en: 'Magneton',
      ja: '' 
    },
    artist: 'Yumi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Lighting Ball',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [423]
  },
  {
    id: 425,
    order: 425,
    number: 53,
    pokedex: 462,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Magnezone',
      en: 'Magnezone',
      ja: '' 
    },
    artist: 'Yoshinobu Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Blast',
          ja: '' 
        },
        damage: 110,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Discard a Electric Energy from this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [424]
  },
  {
    id: 426,
    order: 426,
    number: 54,
    pokedex: 100,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Voltorb',
      en: 'Voltorb',
      ja: '' 
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Big Explosion',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'This Pokémon also does 10 damage to itself.',
       ja: '' 
     }
      }
    ],
    evolve: [427],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 427,
    order: 427,
    number: 55,
    pokedex: 101,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Electrode',
      en: 'Electrode',
      ja: '' 
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rolling Attack',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [426]
  },
  {
    id: 428,
    order: 428,
    number: 56,
    pokedex: 125,
    name: {
      es: 'Electabuzz',
      en: 'Electabuzz',
      ja: 'エレブー' 
    },
    info: {
      type: {
        es: 'Pokémon Eléctrico',
        en: 'Electric Pokémon',
        ja: 'でんげきポケモン'
      },
      height: {
        es: '1.1',
        en: '3\'7"',
        ja: '1.1'
      },
      weight: {
        es: '30.0',
        en: '66.1',
        ja: '30.0'
      }
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Charge',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'Take a Electric Energy from your Energy Zone and attach it to this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [429],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: 'Es habitual que las centrales eléctricas cuenten con Pokémon de tipo Tierra para hacer frente a los Electabuzz ávidos de electricidad.',
      en: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
      ja: '電気を　狙う　エレブーの　対策に じめんポケモンを　置く 発電所は　多い｡' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 429,
    order: 429,
    number: 57,
    pokedex: 466,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Electivire',
      en: 'Electivire',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Exciting Voltage',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If this Pokémon has at least 2 extra Electric Energy attached, this attack does 80 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The amount of electrical energy this Pokémon produces is proportional to the rate of its pulse. The voltage jumps while Electivire is battling.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [428]
  },
  {
    id: 430,
    order: 430,
    number: 58,
    pokedex: 403,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Shinx',
      en: 'Shinx',
      ja: '' 
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hide',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Flip a coin. If heads, during your opponent’s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [431],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The extension and contraction of its muscles generates electricity. It glows when in trouble.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.RESIST
    ],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 431,
    order: 431,
    number: 59,
    pokedex: 404,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Luxio',
      en: 'Luxio',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Electric Claws',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [432],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [430]
  },
  {
    id: 432,
    order: 432,
    number: 60,
    pokedex: 405,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Luxray',
      en: 'Luxray',
      ja: '' 
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: '',
          en: 'Volt Bolt',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Discard all Electric Energy from this Pokémon. This attack does 120 damage to 1 of your opponent’s Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It can see clearly through walls to track down its prey and seek its lost young.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 0,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [431]
  },
  {
    id: 433,
    order: 433,
    number: 61,
    pokedex: 417,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Pachirisu EX',
      en: 'Pachirisu EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sparking Gadget',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 434,
    order: 434,
    number: 62,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rotom',
      en: 'Rotom',
      ja: '' 
    },
    artist: 'Krgc',
    attacks: [
      {
        name: {
          es: '',
          en: 'Assault Laser',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon has a Pokémon Tool attached, this attack does 30 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its electricity-like body can enter some kinds of machines and take control in order to make mischief.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 435,
    order: 435,
    number: 63,
    pokedex: 175,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Togepi',
      en: 'Togepi',
      ja: '' 
    },
    artist: 'Narumi Sato',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pound',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [436],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 436,
    order: 436,
    number: 64,
    pokedex: 176,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Togetic',
      en: 'Togetic',
      ja: '' 
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fairy Wind',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [437],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'They say that it will appear before kindhearted, caring people and shower them with happiness.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [435]
  },
  {
    id: 437,
    order: 437,
    number: 65,
    pokedex: 468,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Togekiss',
      en: 'Togekiss',
      ja: '' 
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Overdrive Smash',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'During your next turn, this Pokémon’s attack does +60 damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'These Pokémon are never seen anywhere near conflict or turmoil. In recent times, they’ve hardly been seen at all.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [436]
  },
  {
    id: 438,
    order: 438,
    number: 66,
    pokedex: 200,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Misdreavus',
      en: 'Misdreavus',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mumble',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [439],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Pokémon startles people in the middle of the night. It gathers fear as its energy.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 439,
    order: 439,
    number: 67,
    pokedex: 429,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mismagius EX',
      en: 'Mismagius EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Magical Delusion',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Confused.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.CONFUSION],
    found: [
      EXPANSION.PALKIA
    ],
    related: [438]
  },
  {
    id: 440,
    order: 440,
    number: 68,
    pokedex: 280,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Ralts',
      en: 'Ralts',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Teleport',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Switch this Pokémon with 1 of your Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [441],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The horns on its head provide a strong power that enables it to sense people’s emotions.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 441,
    order: 441,
    number: 69,
    pokedex: 281,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Kirlia',
      en: 'Kirlia',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [467],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It has a psychic power that enables it to distort the space around it and see into the future.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [440]
  },
  {
    id: 442,
    order: 442,
    number: 70,
    pokedex: 355,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Duskull',
      en: 'Duskull',
      ja: '' 
    },
    artist: 'ryoma uratsuka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Will-O-Wisp',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [443],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If it finds bad children who won’t listen to their parents, it will spirit them away—or so it’s said.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 443,
    order: 443,
    number: 71,
    pokedex: 356,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Dusclops',
      en: 'Dusclops',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psypunch',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [444],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It seeks drifting will-o’-the-wisps and sucks them into its empty body. What happens inside is a mystery.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [442]
  },
  {
    id: 444,
    order: 444,
    number: 72,
    pokedex: 477,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Dusknoir',
      en: 'Dusknoir',
      ja: '' 
    },
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Devour Soul',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Shadow Void',
          ja: '' 
        },
      description: {
       es: '',
       en: 'As often as you like during your turn, you may choose 1 of your Pokémon that has damage on it, and move all of its damage to this Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'At the bidding of transmissions from the spirit world, it steals people and Pokémon away. No one knows whether it has a will of its own.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [443]
  },
  {
    id: 445,
    order: 445,
    number: 73,
    pokedex: 425,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Drifloon',
      en: 'Drifloon',
      ja: '' 
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Expand',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'During your opponent’s next turn, this Pokémon takes −20 damage from attacks.',
       ja: '' 
     }
      }
    ],
    evolve: [446],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 446,
    order: 446,
    number: 74,
    pokedex: 426,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Drifblim',
      en: 'Drifblim',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Balloon Strike',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Some say this Pokémon is a collection of souls burdened with regrets, silently drifting through the dusk.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [445]
  },
  {
    id: 447,
    order: 447,
    number: 75,
    pokedex: 480,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Uxie',
      en: 'Uxie',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mind Boost',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Take a Psychic Energy from your Energy Zone and attach it to Mesprit or Azelf.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Known as “The Being of Knowledge.” It is said that it can wipe out the memory of those who see its eyes.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 448,
    order: 448,
    number: 76,
    pokedex: 481,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mesprit',
      en: 'Mesprit',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Supreme Blast',
          ja: '' 
        },
        damage: 160,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'You can use this attack only if you have Uxie and Azelf on your Bench. Discard all Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Known as “The Being of Emotion.” It taught humans the nobility of sorrow, pain, and joy.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 449,
    order: 449,
    number: 77,
    pokedex: 482,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Azelf',
      en: 'Azelf',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic Arrow',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'This attack does 20 damage to 1 of your opponent’s Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Known as “The Being of Willpower.” It sleeps at the bottom of a lake to keep the world in balance.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 450,
    order: 450,
    number: 78,
    pokedex: 487,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Giratina',
      en: 'Giratina',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spooky Shot',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Levitate',
          ja: '' 
        },
      description: {
       es: '',
       en: 'If this Pokémon has any Energy attached, it has no Retreat Cost.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 451,
    order: 451,
    number: 79,
    pokedex: 488,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Cresselia',
      en: 'Cresselia',
      ja: '' 
    },
    artist: 'Masako Tomii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Moonlight Gain',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Heal 20 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 452,
    order: 452,
    number: 80,
    pokedex: 111,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rhyhorn',
      en: 'Rhyhorn',
      ja: '' 
    },
    artist: 'otumami',
    attacks: [
      {
        name: {
          es: '',
          en: 'Horn Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [453],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 453,
    order: 453,
    number: 81,
    pokedex: 112,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rhydon',
      en: 'Rhydon',
      ja: '' 
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wrack Down',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [454],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [452]
  },
  {
    id: 454,
    order: 454,
    number: 82,
    pokedex: 464,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rhyperior',
      en: 'Rhyperior',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mountain Swing',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard the top 3 cards of your deck.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It can load up to three projectiles per arm into the holes in its hands. What launches out of those holes could be either rocks or Roggenrola.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA
    ],
    related: [453]
  },
  {
    id: 455,
    order: 455,
    number: 83,
    pokedex: 207,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gligar',
      en: 'Gligar',
      ja: '' 
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pierce',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [456],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It usually clings to cliffs. When it spots its prey, it spreads its wings and glides down to attack.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 456,
    order: 456,
    number: 84,
    pokedex: 472,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gliscor',
      en: 'Gliscor',
      ja: '' 
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: '',
          en: 'Acrobatics',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'Flip 2 coins. This attack does 20 more damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [455]
  },
  {
    id: 457,
    order: 457,
    number: 85,
    pokedex: 237,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Hitmontop',
      en: 'Hitmontop',
      ja: '' 
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spinning Attack',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 458,
    order: 458,
    number: 86,
    pokedex: 299,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Nosepass',
      en: 'Nosepass',
      ja: '' 
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [490],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It moves less than an inch a year, but when it’s in a jam, it will spin and drill down into the ground in a split second.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 459,
    order: 459,
    number: 87,
    pokedex: 377,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Regirock',
      en: 'Regirock',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Boulder Crush',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Exoskeleton',
          ja: '' 
        },
      description: {
       es: '',
       en: 'This Pokémon takes −20 damage from attacks.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Every bit of Regirock’s body is made of stone. As parts of its body erode, this Pokémon sticks rocks to itself to repair what’s been lost.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 460,
    order: 460,
    number: 88,
    pokedex: 408,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Cranidos',
      en: 'Cranidos',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Headbutt',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [461],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'A primeval Pokémon, it possesses a hard and sturdy skull, lacking any intelligence within.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 461,
    order: 461,
    number: 89,
    pokedex: 409,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rampardos',
      en: 'Rampardos',
      ja: '' 
    },
    artist: 'Yoshinobu Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Head Smash',
          ja: '' 
        },
        damage: 130,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'If your opponent’s Pokémon is Knocked Out by damage from this attack, this Pokémon also does 50 damage to itself.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'In ancient times, people would dig up fossils of this Pokémon and use its skull, which is harder than steel, to make helmets.',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [460]
  },
  {
    id: 462,
    order: 462,
    number: 90,
    pokedex: 413,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Wormadam',
      en: 'Wormadam',
      ja: '' 
    },
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: {
          es: '',
          en: 'Land Crush',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its appearance changes depending on where it evolved. The materials on hand become a part of its body.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 463,
    order: 463,
    number: 91,
    pokedex: 447,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Riolu',
      en: 'Riolu',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Jab',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [464],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'They communicate with one another using their auras. They are able to run all through the night.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 464,
    order: 464,
    number: 92,
    pokedex: 448,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lucario',
      en: 'Lucario',
      ja: '' 
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: '',
          en: 'Submarine Blow',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Fighting Coach',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Attacks used by your Fighting Pokémon do +20 damage to your opponent’s Active Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It’s said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [463]
  },
  {
    id: 465,
    order: 465,
    number: 93,
    pokedex: 449,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Hippopotas',
      en: 'Hippopotas',
      ja: '' 
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rolling Tackle',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [466],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It shuts its nostrils tight, then travels through sand as if walking. They form colonies of around 10.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 466,
    order: 466,
    number: 94,
    pokedex: 450,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Hippowdon',
      en: 'Hippowdon',
      ja: '' 
    },
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Earthen Press',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is surprisingly quick to anger. It holds its mouth agape as a display of its strength.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [465]
  },
  {
    id: 467,
    order: 467,
    number: 95,
    pokedex: 475,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gallade EX',
      en: 'Gallade EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Energized Blade',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 170,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 468,
    order: 468,
    number: 96,
    pokedex: 198,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Murkrow',
      en: 'Murkrow',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [469],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 469,
    order: 469,
    number: 97,
    pokedex: 430,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Honchkrow',
      en: 'Honchkrow',
      ja: '' 
    },
    artist: 'Hideki Ishikawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Skill Dive',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'This attack does 50 damage to 1 of your opponent’s Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [468]
  },
  {
    id: 470,
    order: 470,
    number: 98,
    pokedex: 215,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Sneasel',
      en: 'Sneasel',
      ja: '' 
    },
    artist: 'Hasuno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Double Scratch',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Flip 2 coins. This attack does 20 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [471],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This cunning Pokémon hides under the cover of darkness, waiting to attack its prey.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 471,
    order: 471,
    number: 99,
    pokedex: 461,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Weavile EX',
      en: 'Weavile EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratching Nails',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon has damage on it, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA
    ],
    related: [470]
  },
  {
    id: 472,
    order: 472,
    number: 100,
    pokedex: 261,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Poochyena',
      en: 'Poochyena',
      ja: '' 
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [473],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'A Pokémon with a persistent nature, it chases its chosen prey until the prey becomes exhausted.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 473,
    order: 473,
    number: 101,
    pokedex: 262,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mightyena',
      en: 'Mightyena',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Darkness Fang',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It will always obey the commands of a skilled Trainer. Its behavior arises from its living in packs in ancient times.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [472]
  },
  {
    id: 474,
    order: 474,
    number: 102,
    pokedex: 434,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Stunky',
      en: 'Stunky',
      ja: '' 
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratch',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [475],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 475,
    order: 475,
    number: 103,
    pokedex: 435,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Skuntank',
      en: 'Skuntank',
      ja: '' 
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Gas',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.POISON],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [474]
  },
  {
    id: 476,
    order: 476,
    number: 104,
    pokedex: 442,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Spiritomb',
      en: 'Spiritomb',
      ja: '' 
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Swirling Disaster',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'This attack does 10 damage to each of your opponent’s Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 477,
    order: 477,
    number: 105,
    pokedex: 451,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Skorupi',
      en: 'Skorupi',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pierce',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [478],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'After burrowing into the sand, it waits patiently for prey to come near. This Pokémon and Sizzlipede share common descent.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 478,
    order: 478,
    number: 106,
    pokedex: 452,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Drapion',
      en: 'Drapion',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Cross Poison',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Flip 4 coins. This attack does 40 damage for each heads. If at least 2 of them are heads, your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its poison is potent, but it rarely sees use. This Pokémon prefers to use physical force instead, going on rampages with its car-crushing strength.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE,
      CardSpecialConditionENUM.POISON
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: [477]
  },
  {
    id: 479,
    order: 479,
    number: 107,
    pokedex: 453,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Croagunk',
      en: 'Croagunk',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Group Beatdown',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Flip a coin for each Pokémon you have in play. This attack does 20 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [480],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 480,
    order: 480,
    number: 108,
    pokedex: 454,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Toxicroak',
      en: 'Toxicroak',
      ja: '' 
    },
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: {
          es: '',
          en: 'Group Beatdown',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Flip a coin for each Pokémon you have in play. This attack does 40 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Swaying and dodging the attacks of its foes, it weaves its flexible body in close, then lunges out with its poisonous claws.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA
    ],
    related: [479]
  },
  {
    id: 481,
    order: 481,
    number: 109,
    pokedex: 491,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Darkrai',
      en: 'Darkrai',
      ja: '' 
    },
    artist: 'Masako Tomii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dark Void',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Asleep.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 482,
    order: 482,
    number: 110,
    pokedex: 491,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Darkrai EX',
      en: 'Darkrai EX',
      ja: '' 
    },
    artist: 'PLANETA Yamashita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dark Prism',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Nightmare Aura',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Whenever you attach a Dark Energy from your Energy Zone to this Pokémon, do 20 damage to your opponent’s Active Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 483,
    order: 483,
    number: 111,
    pokedex: 227,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Skarmory',
      en: 'Skarmory',
      ja: '' 
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metal Arms',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'People fashion swords from Skarmory’s shed feathers, so this Pokémon is a popular element in heraldic designs.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 484,
    order: 484,
    number: 112,
    pokedex: 379,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Registeel',
      en: 'Registeel',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metal Claw',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Registeel’s body is made of a strange material that is flexible enough to stretch and shrink but also more durable than any metal.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,

    ],
    related: []
  },
  {
    id: 485,
    order: 485,
    number: 113,
    pokedex: 410,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Shieldon',
      en: 'Shieldon',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Headbutt',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [486],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'A mild-mannered, herbivorous Pokémon, it used its face to dig up tree roots to eat. The skin on its face was plenty tough.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 486,
    order: 486,
    number: 114,
    pokedex: 411,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bastiodon',
      en: 'Bastiodon',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Headbang',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Guarded Grill',
          ja: '' 
        },
      description: {
       es: '',
       en: 'If any damage is done to this Pokémon by attacks, flip a coin. If heads, this Pokémon takes −100 damage from that attack.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The bones of its face are huge and hard, so they were mistaken for its spine until after this Pokémon was successfully restored.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 487,
    order: 487,
    number: 115,
    pokedex: 413,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Wormadam',
      en: 'Wormadam',
      ja: '' 
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Iron Head',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Flip a coin until you get tails. This attack does 30 more damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its appearance changes depending on where it evolved. The materials on hand become a part of its body.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: [387]
  },
  {
    id: 488,
    order: 488,
    number: 116,
    pokedex: 436,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bronzor',
      en: 'Bronzor',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [489],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Ancient people believed that the pattern on Bronzor’s back contained a mysterious power.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 489,
    order: 489,
    number: 117,
    pokedex: 437,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bronzong',
      en: 'Bronzong',
      ja: '' 
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Guard Press',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your opponent’s next turn, this Pokémon takes −20 damage from attacks.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.DIALGA
    ],
    related: [488]
  },
  {
    id: 490,
    order: 490,
    number: 118,
    pokedex: 476,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Probopass',
      en: 'Probopass',
      ja: '' 
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: '',
          en: 'Triple Nose',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip 3 coins. This attack does 50 more damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Although it can control its units known as Mini-Noses, they sometimes get lost and don’t come back.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 491,
    order: 491,
    number: 119,
    pokedex: 483,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Dialga EX',
      en: 'Dialga EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metallic Turbo',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Take 2 Metalic Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heavy Impact',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 492,
    order: 492,
    number: 120,
    pokedex: 485,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Heatran',
      en: 'Heatran',
      ja: '' 
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Steel Tackle',
          ja: '' 
        },
        damage: 110,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'This Pokémon also does 20 damage to itself.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.RARE,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 493,
    order: 493,
    number: 121,
    pokedex: 443,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gible',
      en: 'Gible',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [494],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It skulks in caves, and when prey or an enemy passes by, it leaps out and chomps them. The force of its attack sometimes chips its teeth.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 494,
    order: 494,
    number: 122,
    pokedex: 444,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gabite',
      en: 'Gabite',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [495],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'In rare cases, it molts and sheds its scales. Medicine containing its scales as an ingredient will make a weary body feel invigorated.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 495,
    order: 495,
    number: 123,
    pokedex: 445,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Garchomp',
      en: 'Garchomp',
      ja: '' 
    },
    artist: 'Atsushi Furusawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dragon Claw',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.FIGHT],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Reckless Shearing',
          ja: '' 
        },
      description: {
       es: '',
       en: 'You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw a card.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 496,
    order: 496,
    number: 124,
    pokedex: 108,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lickitung',
      en: 'Lickitung',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tongue Slap',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [497],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 497,
    order: 497,
    number: 125,
    pokedex: 463,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lickilicky EX',
      en: 'Lickilicky EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Licking Fury',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin until you get tails. This attack does 40 more damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.DOUBLE,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 498,
    order: 498,
    number: 126,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Quick Attack',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 20 more damage.',
       ja: '' 
     }
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA,
    ],
    related: [45, 80, 102, 206, 207, 208, 305, 347, 392, 418, 248, 358, 609]
  },
  {
    id: 499,
    order: 499,
    number: 127,
    pokedex: 137,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Porygon',
      en: 'Porygon',
      ja: '' 
    },
    artist: 'Shin Nagasawa.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Beam',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [500],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 500,
    order: 500,
    number: 128,
    pokedex: 233,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Porygon2',
      en: 'Porygon2',
      ja: '' 
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sharpen',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [501],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This is a Porygon that was updated with special data. Porygon2 develops itself by learning about many different subjects all on its own.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 501,
    order: 501,
    number: 129,
    pokedex: 474,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Porygon-Z',
      en: 'Porygon-Z',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Buggy Beam',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Change the type of the next Energy that will be generated for your opponent to 1 of the following at random: Grass, Fire, Water, Electric, Psychic, Fighting, Dark, or Metalic.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Porygon-Z had a program installed to allow it to move between dimensions, but the program also caused instability in Porygon-Z’s behavior.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 2,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 502,
    order: 502,
    number: 130,
    pokedex: 190,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Aipom',
      en: 'Aipom',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tail Jab',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [503],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 503,
    order: 503,
    number: 131,
    pokedex: 191,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Ambipom',
      en: 'Ambipom',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Double Hit',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip 2 coins. This attack does 40 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that’s proof it really likes you.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 504,
    order: 504,
    number: 132,
    pokedex: 396,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Starly',
      en: 'Starly',
      ja: '' 
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pluck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Before doing damage, discard all Pokémon Tools from your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [505],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 505,
    order: 505,
    number: 133,
    pokedex: 397,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Staravia',
      en: 'Staravia',
      ja: '' 
    },
    artist: 'REND',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [506],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 506,
    order: 506,
    number: 134,
    pokedex: 398,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Staraptor',
      en: 'Staraptor',
      ja: '' 
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: '',
          en: 'Clutch',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your opponent’s next turn, the Defending Pokémon can’t retreat.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.CORNER],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 507,
    order: 507,
    number: 135,
    pokedex: 399,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bidoof',
      en: 'Bidoof',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Super Fang',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Halve your opponent’s Active Pokémon’s remaining HP, rounded down.',
       ja: '' 
     }
      },
    ],
    evolve: [508],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'With nerves of steel, nothing can perturb it. It is more agile and active than it appears.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 508,
    order: 508,
    number: 136,
    pokedex: 400,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bibarel',
      en: 'Bibarel',
      ja: '' 
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rolling Tackle',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.COMMON,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 509,
    order: 509,
    number: 137,
    pokedex: 427,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Buneary',
      en: 'Buneary',
      ja: '' 
    },
    artist: 'Narumi Sato',
    attacks: [
      {
        name: {
          es: '',
          en: 'Splash',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [510],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If both of Buneary’s ears are rolled up, something is wrong with its body or mind. It’s a sure sign the Pokémon is in need of care.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 510,
    order: 510,
    number: 138,
    pokedex: 428,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lopunny',
      en: 'Lopunny',
      ja: '' 
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Jump Kick',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack also does 20 damage to 1 of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 511,
    order: 511,
    number: 139,
    pokedex: 431,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Glameow',
      en: 'Glameow',
      ja: '' 
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pose',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If tails, this attack does nothing.',
       ja: '' 
     }
      },
    ],
    evolve: [512],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 512,
    order: 512,
    number: 140,
    pokedex: 432,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Purugly',
      en: 'Purugly',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Interrupt',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent reveals their hand. Choose a card you find there and shuffle it into your opponent’s deck.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It would claim another Pokémon’s nest as its own if it finds a nest sufficiently comfortable.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.UNCOMMON,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 513,
    order: 513,
    number: 141,
    pokedex: 441,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Chatot',
      en: 'Chatot',
      ja: '' 
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fury Attack',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip 3 coins. This attack does 20 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It mimics the cries of other Pokémon to trick them into thinking it’s one of them. This way they won’t attack it.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 514,
    order: 514,
    number: 142,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rotom',
      en: 'Rotom',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spin Storm',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, put your opponent’s Active Pokémon into their hand.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Rotom has entered an electric fan. It smirks with satisfaction over a prank well pulled after it blows away everything around it.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.FLIP],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 515,
    order: 515,
    number: 143,
    pokedex: 486,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Regigigas',
      en: 'Regigigas',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Raging Hammer',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does more damage equal to the damage this Pokémon has on it.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.RARE,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 516,
    order: 516,
    number: 144,
    name: {
          es: '',
          en: 'Skull Fossil',
          ja: '' 
        },
    artist: 'Toyste Beach',
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    evolve: [460],
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
      ja: '' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: []
  },
  {
    id: 517,
    order: 517,
    number: 145,
    name: {
      es: '',
      en: 'Armor Fossil',
      ja: '' 
    },
    artist: 'Toyste Beach',
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    evolve: [485],
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Play this card as if it were a 40-HP Basic Colorless Pokémon. At any time during your turn, you may discard this card from play. This card can’t retreat.',
      ja: '' 
    },
    health: 40,
    rarity: CardRarityENUM.COMMON,
    retreat: 0,
    stage: CardStageENUM.FOSSIL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: []
  },
  {
    id: 518,
    order: 518,
    number: 146,
    name: {
          es: '',
          en: 'Pokémon Communication',
          ja: '' 
        },
    artist: 'Ayaka Yoshida',
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Choose a Pokémon in your hand and switch it with a random Pokémon in your deck.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    stage: CardStageENUM.ITEM,
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.DIALGA
    ],
    related: [351, 350, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 519,
    order: 519,
    number: 147,
    name: {
          es: '',
          en: 'Giant Cape',
          ja: '' 
        },
    artist: 'Ryo Ueda',
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The Pokémon this card is attached to gets +20 HP.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    stage: CardStageENUM.TOOL,
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [],
    related: [351, 350, 374, 377, 375, 376, 380, 378],
    found: [
      EXPANSION.DIALGA
    ]
  },
  {
    id: 520,
    order: 520,
    number: 148,
    name: {
          es: '',
          en: 'Rocky Helmet',
          ja: '' 
        },
    artist: 'Ayaka Yoshida',
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent’s Pokémon, do 20 damage to the Attacking Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    stage: CardStageENUM.TOOL,
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    related: [351, 350, 374, 377, 375, 376, 380, 378],
    found: [
      EXPANSION.PALKIA
    ]
  },
  {
    id: 521,
    order: 521,
    number: 149,
    name: {
          es: '',
          en: 'Lum Berry',
          ja: '' 
        },
    artist: 'Yoshinobu Saito',
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'At the end of each turn, if the Pokémon this card is attached to is affected by any Special Conditions, it recovers from all of them, and discard this card.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    stage: CardStageENUM.TOOL,
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [],
    related: [351, 350, 374, 377, 375, 376, 380, 378],
    found: [
      EXPANSION.PALKIA
    ]
  },
  {
    id: 522,
    order: 522,
    number: 150,
    name: {
          es: '',
          en: 'Cyrus',
          ja: '' 
        },
    artist: 'akagi',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Switch in 1 of your opponent’s Benched Pokémon that has damage on it to the Active Spot.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 523,
    order: 523,
    number: 151,
    name: {
          es: '',
          en: 'Team Galactic Grunt',
          ja: '' 
        },
    artist: 'GOSSAN',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Put 1 random Glameow, Stunky, or Croagunk from your deck into your hand.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 524,
    order: 524,
    number: 152,
    name: {
          es: '',
          en: 'Cynthia',
          ja: '' 
        },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'During this turn, attacks used by your Garchomp or Togekiss do +50 damage to your opponent’s Active Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 525,
    order: 525,
    number: 153,
    name: {
          es: '',
          en: 'Volkner',
          ja: '' 
        },
    artist: 'GIDORA',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Choose 1 of your Electivire or Luxray. Attach 2 Electric Energy from your discard pile to that Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 526,
    order: 526,
    number: 154,
    name: {
          es: '',
          en: 'Dawn',
          ja: '' 
        },
    artist: 'saino misaki',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Move an Energy from 1 of your Benched Pokémon to your Active Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 527,
    order: 527,
    number: 155,
    name: {
          es: '',
          en: 'Mars',
          ja: '' 
        },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Your opponent shuffles their hand into their deck and draws a card for each of their remaining points needed to win.',
      ja: '' 
    },
    rarity: CardRarityENUM.UNCOMMON,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 528,
    order: 528,
    number: 156,
    pokedex: 465,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Tangrowth',
      en: 'Tangrowth',
      ja: '' 
    },
    artist: 'Saboteri',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Drain',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Heal 30 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.',
      ja: '' 
    },
    health: 130,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 529,
    order: 529,
    number: 157,
    pokedex: 415,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Combee',
      en: 'Combee',
      ja: '' 
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Call for Family',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Put 1 random Combee from your deck onto your Bench.',
       ja: '' 
     }
      }
    ],
    evolve: [390],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'At night, Combee sleep in a group of about a hundred, packed closely together in a lump.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 530,
    order: 530,
    number: 158,
    pokedex: 455,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Carnivine',
      en: 'Carnivine',
      ja: '' 
    },
    artist: 'Yoriyuki Ikegami',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flog',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 50 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 531,
    order: 531,
    number: 159,
    pokedex: 492,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Shaymin',
      en: 'Shaymin',
      ja: '' 
    },
    artist: 'REND',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flop',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Fragrant Flower Garden',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may heal 10 damage from each of your Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.DIALGA
    ],
    related: []
  },
  {
    id: 532,
    order: 532,
    number: 160,
    pokedex: 473,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mamoswine',
      en: 'Mamoswine',
      ja: '' 
    },
    artist: 'OKACHEKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Frosty Flattening',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Thick Fat',
          ja: '' 
        },
      description: {
       es: '',
       en: 'This Pokémon takes −20 damage from attacks from Fire or Water Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Pokémon can be spotted in wall paintings from as far back as 10,000 years ago. For a while, it was thought to have gone extinct.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [404]
  },
  {
    id: 533,
    order: 533,
    number: 161,
    pokedex: 423,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gastrodon',
      en: 'Gastrodon',
      ja: '' 
    },
    artist: 'takashi shiraishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Muddy Water',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'They normally inhabit rocky seashores, but in times of continuous rain, they can sometimes be found in the mountains, far from the sea.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: [412]
  },
  {
    id: 534,
    order: 534,
    number: 162,
    pokedex: 490,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Manaphy',
      en: 'Manaphy',
      ja: '' 
    },
    artist: 'miki kudo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Oceanic Gift',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'Choose 2 of your Benched Pokémon. For each of those Pokémon, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is born with a wondrous power that lets it bond with any kind of Pokémon.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 535,
    order: 535,
    number: 163,
    pokedex: 403,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Shinx',
      en: 'Shinx',
      ja: '' 
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hide',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Flip a coin. If heads, during your opponent’s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [431],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The extension and contraction of its muscles generates electricity. It glows when in trouble.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.RESIST
    ],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 536,
    order: 536,
    number: 164,
    pokedex: 479,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rotom',
      en: 'Rotom',
      ja: '' 
    },
    artist: 'Shimaris Yukichi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Assault Laser',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon has a Pokémon Tool attached, this attack does 30 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its electricity-like body can enter some kinds of machines and take control in order to make mischief.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 537,
    order: 537,
    number: 165,
    pokedex: 425,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Drifloon',
      en: 'Drifloon',
      ja: '' 
    },
    artist: 'Orca',
    attacks: [
      {
        name: {
          es: '',
          en: 'Expand',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'During your opponent’s next turn, this Pokémon takes −20 damage from attacks.',
       ja: '' 
     }
      }
    ],
    evolve: [446],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is whispered that any child who mistakes Drifloon for a balloon and holds on to it could wind up missing.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 538,
    order: 538,
    number: 166,
    pokedex: 481,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mesprit',
      en: 'Mesprit',
      ja: '' 
    },
    artist: 'Orca',
    attacks: [
      {
        name: {
          es: '',
          en: 'Supreme Blast',
          ja: '' 
        },
        damage: 160,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'You can use this attack only if you have Uxie and Azelf on your Bench. Discard all Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Known as “The Being of Emotion.” It taught humans the nobility of sorrow, pain, and joy.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 539,
    order: 539,
    number: 167,
    pokedex: 487,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Giratina',
      en: 'Giratina',
      ja: '' 
    },
    artist: 'Rond',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spooky Shot',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Levitate',
          ja: '' 
        },
      description: {
       es: '',
       en: 'If this Pokémon has any Energy attached, it has no Retreat Cost.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 540,
    order: 540,
    number: 168,
    pokedex: 488,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Cresselia',
      en: 'Cresselia',
      ja: '' 
    },
    artist: 'rika',
    attacks: [
      {
        name: {
          es: '',
          en: 'Moonlight Gain',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Heal 20 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 541,
    order: 541,
    number: 169,
    pokedex: 464,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Rhyperior',
      en: 'Rhyperior',
      ja: '' 
    },
    artist: 'Taiga Kayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mountain Swing',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard the top 3 cards of your deck.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It can load up to three projectiles per arm into the holes in its hands. What launches out of those holes could be either rocks or Roggenrola.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA
    ],
    related: [453]
  },
  {
    id: 542,
    order: 542,
    number: 170,
    pokedex: 448,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lucario',
      en: 'Lucario',
      ja: '' 
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Submarine Blow',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Fighting Coach',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Attacks used by your Fighting Pokémon do +20 damage to your opponent’s Active Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It’s said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see.',
      ja: '' 
    },
    health: 100,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [463]
  },
  {
    id: 543,
    order: 543,
    number: 171,
    pokedex: 449,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Hippopotas',
      en: 'Hippopotas',
      ja: '' 
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rolling Tackle',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [466],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It shuts its nostrils tight, then travels through sand as if walking. They form colonies of around 10.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 544,
    order: 544,
    number: 172,
    pokedex: 442,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Spiritomb',
      en: 'Spiritomb',
      ja: '' 
    },
    artist: 'Shinji Kanda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Swirling Disaster',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'This attack does 10 damage to each of your opponent’s Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 545,
    order: 545,
    number: 173,
    pokedex: 453,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Croagunk',
      en: 'Croagunk',
      ja: '' 
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: '',
          en: 'Group Beatdown',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Flip a coin for each Pokémon you have in play. This attack does 20 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [480],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 546,
    order: 546,
    number: 174,
    pokedex: 485,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Heatran',
      en: 'Heatran',
      ja: '' 
    },
    artist: 'OKUBO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Steel Tackle',
          ja: '' 
        },
        damage: 110,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'This Pokémon also does 20 damage to itself.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.ART,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 547,
    order: 547,
    number: 175,
    pokedex: 445,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Garchomp',
      en: 'Garchomp',
      ja: '' 
    },
    artist: 'MINAMINAMI Take',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dragon Claw',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.FIGHT],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Reckless Shearing',
          ja: '' 
        },
      description: {
       es: '',
       en: 'You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw a card.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.DRAGON,
    weak: null,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 548,
    order: 548,
    number: 176,
    pokedex: 398,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Staraptor',
      en: 'Staraptor',
      ja: '' 
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Clutch',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your opponent’s next turn, the Defending Pokémon can’t retreat.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.CORNER],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 549,
    order: 549,
    number: 177,
    pokedex: 399,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bidoof',
      en: 'Bidoof',
      ja: '' 
    },
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Super Fang',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Halve your opponent’s Active Pokémon’s remaining HP, rounded down.',
       ja: '' 
     }
      },
    ],
    evolve: [508],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'With nerves of steel, nothing can perturb it. It is more agile and active than it appears.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 550,
    order: 550,
    number: 178,
    pokedex: 431,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Glameow',
      en: 'Glameow',
      ja: '' 
    },
    artist: 'matazo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pose',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If tails, this attack does nothing.',
       ja: '' 
     }
      },
    ],
    evolve: [512],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.ART,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 551,
    order: 551,
    number: 179,
    pokedex: 486,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Regigigas',
      en: 'Regigigas',
      ja: '' 
    },
    artist: 'Tetsu Kayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Raging Hammer',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does more damage equal to the damage this Pokémon has on it.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.ART,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 552,
    order: 552,
    number: 180,
    pokedex: 469,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Yanmega EX',
      en: 'Yanmega EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Air Slash',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard a random Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [411]
  },
  {
    id: 553,
    order: 553,
    number: 181,
    pokedex: 392,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Infernape EX',
      en: 'Infernape EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flare Blitz',
          ja: '' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
       es: '',
       en: 'Discard all Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA
    ],
    related: [400]
  },
  {
    id: 554,
    order: 554,
    number: 182,
    pokedex: 484,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Palkia EX',
      en: 'Palkia EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER]
      },
      {
        name: {
          es: '',
          en: 'Dimensional Storm',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 3 Water Energy from this Pokémon. This attack also does 20 damage to each of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 555,
    order: 555,
    number: 183,
    pokedex: 417,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Pachirisu EX',
      en: 'Pachirisu EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sparking Gadget',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 556,
    order: 556,
    number: 184,
    pokedex: 429,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mismagius EX',
      en: 'Mismagius EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Magical Delusion',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Confused.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.CONFUSION],
    found: [
      EXPANSION.PALKIA
    ],
    related: [438]
  },
  {
    id: 557,
    order: 557,
    number: 185,
    pokedex: 475,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gallade EX',
      en: 'Gallade EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Energized Blade',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 558,
    order: 558,
    number: 186,
    pokedex: 461,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Weavile EX',
      en: 'Weavile EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratching Nails',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon has damage on it, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA
    ],
    related: [470]
  },
  {
    id: 559,
    order: 559,
    number: 187,
    pokedex: 491,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Darkrai EX',
      en: 'Darkrai EX',
      ja: '' 
    },
    artist: 'PLANETA Yamashita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dark Prism',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Nightmare Aura',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Whenever you attach a Dark Energy from your Energy Zone to this Pokémon, do 20 damage to your opponent’s Active Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 560,
    order: 560,
    number: 188,
    pokedex: 483,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Dialga EX',
      en: 'Dialga EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metallic Turbo',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Take 2  Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heavy Impact',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 561,
    order: 561,
    number: 189,
    pokedex: 463,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lickilicky EX',
      en: 'Lickilicky EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Licking Fury',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin until you get tails. This attack does 40 more damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.SUPER,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 562,
    order: 562,
    number: 190,
    name: {
          es: '',
          en: 'Cyrus',
          ja: '' 
        },
    artist: 'akagi',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Switch in 1 of your opponent’s Benched Pokémon that has damage on it to the Active Spot.',
      ja: '' 
    },
    rarity: CardRarityENUM.SUPER,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 563,
    order: 563,
    number: 191,
    name: {
          es: '',
          en: 'Team Galactic Grunt',
          ja: '' 
        },
    artist: 'GOSSAN',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Put 1 random Glameow, Stunky, or Croagunk from your deck into your hand.',
      ja: '' 
    },
    rarity: CardRarityENUM.SUPER,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 564,
    order: 564,
    number: 192,
    name: {
          es: '',
          en: 'Cynthia',
          ja: '' 
        },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'During this turn, attacks used by your Garchomp or Togekiss do +50 damage to your opponent’s Active Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.SUPER,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 565,
    order: 565,
    number: 193,
    name: {
          es: '',
          en: 'Volkner',
          ja: '' 
        },
    artist: 'GIDORA',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Choose 1 of your Electivire or Luxray. Attach 2 Electric Energy from your discard pile to that Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.SUPER,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 566,
    order: 566,
    number: 194,
    name: {
          es: '',
          en: 'Dawn',
          ja: '' 
        },
    artist: 'saino misaki',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Move an Energy from 1 of your Benched Pokémon to your Active Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.SUPER,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 567,
    order: 567,
    number: 195,
    name: {
          es: '',
          en: 'Mars',
          ja: '' 
        },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Your opponent shuffles their hand into their deck and draws a card for each of their remaining points needed to win.',
      ja: '' 
    },
    rarity: CardRarityENUM.SUPER,
    health: 0,
    retreat: 0,
    stage: CardStageENUM.SUPPORTER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PALKIA,
    ],
    element: -1,
    pokedex: -1,
    related: [219, 220, 221, 222, 223, 224, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368, 379]
  },
  {
    id: 568,
    order: 568,
    number: 196,
    pokedex: 469,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Yanmega EX',
      en: 'Yanmega EX',
      ja: '' 
    },
    artist: 'Mina Nakai',
    attacks: [
      {
        name: {
          es: '',
          en: 'Air Slash',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard a random Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: [411]
  },
  {
    id: 569,
    order: 569,
    number: 197,
    pokedex: 392,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Infernape EX',
      en: 'Infernape EX',
      ja: '' 
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flare Blitz',
          ja: '' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
       es: '',
       en: 'Discard all Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 0,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: true,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PALKIA
    ],
    related: [400]
  },
  {
    id: 570,
    order: 570,
    number: 198,
    pokedex: 417,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Pachirisu EX',
      en: 'Pachirisu EX',
      ja: '' 
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sparking Gadget',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 571,
    order: 571,
    number: 199,
    pokedex: 429,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mismagius EX',
      en: 'Mismagius EX',
      ja: '' 
    },
    artist: 'Kuroimori',
    attacks: [
      {
        name: {
          es: '',
          en: 'Magical Delusion',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Confused.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.CONFUSION],
    found: [
      EXPANSION.PALKIA
    ],
    related: [438]
  },
  {
    id: 572,
    order: 572,
    number: 200,
    pokedex: 475,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Gallade EX',
      en: 'Gallade EX',
      ja: '' 
    },
    artist: 'Takumi Wada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Energized Blade',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 170,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 573,
    order: 573,
    number: 201,
    pokedex: 461,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Weavile EX',
      en: 'Weavile EX',
      ja: '' 
    },
    artist: 'hncl',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratching Nails',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon has damage on it, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PALKIA
    ],
    related: [470]
  },
  {
    id: 574,
    order: 574,
    number: 202,
    pokedex: 491,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Darkrai EX',
      en: 'Darkrai EX',
      ja: '' 
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dark Prism',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Nightmare Aura',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Whenever you attach a Dark Energy from your Energy Zone to this Pokémon, do 20 damage to your opponent’s Active Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.SUPER,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.DARK,
    weak: PokemonTypeENUM.GRASS,
    isEX: true,
    condition: [],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 575,
    order: 575,
    number: 203,
    pokedex: 463,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lickilicky EX',
      en: 'Lickilicky EX',
      ja: '' 
    },
    artist: 'Jerky',
    attacks: [
      {
        name: {
          es: '',
          en: 'Licking Fury',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin until you get tails. This attack does 40 more damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.SUPER,
    retreat: 4,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.EXTRA_DAMAGE
    ],
    found: [
      EXPANSION.PALKIA,
    ],
    related: []
  },
  {
    id: 576,
    order: 576,
    number: 204,
    pokedex: 484,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Palkia EX',
      en: 'Palkia EX',
      ja: '' 
    },
    artist: 'N-DESIGN Inc.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER]
      },
      {
        name: {
          es: '',
          en: 'Dimensional Storm',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 3 Water Energy from this Pokémon. This attack also does 20 damage to each of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 577,
    order: 577,
    number: 205,
    pokedex: 483,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Dialga EX',
      en: 'Dialga EX',
      ja: '' 
    },
    artist: 'N-DESIGN Inc.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metallic Turbo',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Take 2  Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heavy Impact',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.INMERSIVE,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
    ],
    related: []
  },
  {
    id: 578,
    order: 578,
    number: 206,
    pokedex: 484,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Palkia EX',
      en: 'Palkia EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER]
      },
      {
        name: {
          es: '',
          en: 'Dimensional Storm',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 3 Water Energy from this Pokémon. This attack also does 20 damage to each of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.CROWN,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 579,
    order: 579,
    number: 207,
    pokedex: 483,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Dialga EX',
      en: 'Dialga EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metallic Turbo',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Take 2  Energy from your Energy Zone and attach it to 1 of your Benched Pokémon.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heavy Impact',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.SPACE_TIME_SMACKDOWN,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.CROWN,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.FIRE,
    isEX: true,
    condition: [CardSpecialConditionENUM.ADD],
    found: [
      EXPANSION.DIALGA,
      EXPANSION.PALKIA
    ],
    related: []
  },
  {
    id: 580,
    order: 580,
    number: 1,
    name: {
          es: '',
          en: 'Potion',
          ja: '' 
        },
    artist: '5ban Graphics',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Heal 20 damage from 1 of your Pokémon.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    related: [351, 350, 374, 377, 375, 376, 380, 378]
  },
  {
    id: 581,
    order: 581,
    number: 2,
    name: {
          es: '',
          en: 'X Speed',
          ja: '' 
        },
    artist: 'Toyste Beach',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'During this turn, the Retreat Cost of your Active Pokémon is 1 less.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [CardSpecialConditionENUM.RETIRE],
    related: [351, 350, 373, 377, 375, 376, 380, 378]
  },
  {
    id: 582,
    order: 582,
    number: 3,
    name: {
          es: '',
          en: 'Hand Scope',
          ja: '' 
        },
    artist: 'Toyste Beach',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Your opponent reveals their hand.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [],
    related: [351, 350, 373, 374, 377, 376, 380, 378]
  },
  {
    id: 583,
    order: 583,
    number: 4,
    name: {
          es: '',
          en: 'Pokédex',
          ja: '' 
        },
    artist: 'Ryo Ueda',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Look at the top 3 cards of your deck.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [],
    related: [351, 350, 373, 374, 377, 375, 380, 378]
  },
  {
    id: 584,
    order: 584,
    number: 5,
    name: {
          es: '',
          en: 'Poké Ball',
          ja: '' 
        },
    artist: 'Ryo Ueda',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Put 1 random Basic Pokémon from your deck into your hand.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    related: [351, 350, 373, 374, 375, 376, 380, 378]
  },
  {
    id: 585,
    order: 585,
    number: 6,
    name: {
          es: '',
          en: 'Red Card',
          ja: '' 
        },
    artist: '5ban Graphics',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Your opponent shuffles their hand into their deck and draws 3 cards.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [],
    related: [351, 350, 373, 374, 377, 375, 376, 380]
  },
  {
    id: 586,
    order: 586,
    number: 7,
    name: {
      es: '',
      en: 'Professor\'s Research',
      ja: '' 
    },
    artist: 'Naoki Saito',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Draw 2 cards.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.ITEM,
    extra: {
      es: 'Obtained from the shop',
      en: 'Obtained from the shop',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [CardSpecialConditionENUM.CALL],
    related: [219, 220, 221, 222, 223, 224, 225, 226, 353, 352, 354, 266, 267, 268, 269, 270, 271, 272, 273, 367, 366, 368]
  },
  {
    id: 587,
    order: 587,
    number: 8,
    name: {
          es: '',
          en: 'Pokédex',
          ja: '' 
        },
    artist: 'Yuu Nishida',
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Look at the top 3 cards of your deck.',
      ja: '' 
    },
    rarity: CardRarityENUM.PROMO,
    stage: CardStageENUM.SUPPORTER,
    extra: {
      es: 'Special Event',
      en: 'Special Event',
      ja: '' 
    },
    element: -1,
    pokedex: -1,
    health: -1,
    retreat: -1,
    isEX: false,
    condition: [],
    related: [351, 350, 373, 374, 377, 375, 376, 378]
  },
  {
    id: 588,
    order: 588,
    number: 9,
    pokedex: 25,
    name: {
      es: 'Pikachu',
      en: 'Pikachu',
      ja: 'ピカチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Atsushi Furusawa',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PREMIUM
    ],
    extra: {
      es: 'Pase Premium',
      en: 'Premium Pass',
      ja: '' 
    },
    related: [94, 95, 311, 312, 398, 387]
  },
  {
    id: 589,
    order: 589,
    number: 10,
    pokedex: 150,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Mewtwo',
      en: 'Mewtwo',
      ja: '' 
    },
    artist: 'Krgc',
    attacks: [
      {
        name: {
          es: '',
          en: 'Power Blast',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Psychic Energy from this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.PREMIUM
    ],
    extra: {
      es: 'Premium Pass',
      en: 'Premium Pass',
      ja: '' 
    },
    related: [128]
  },
  {
    id: 590,
    order: 590,
    number: 11,
    pokedex: 113,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Chansey',
      en: 'Chansey',
      ja: '' 
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gentle Slap',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.WONDER_PICK
    ],
    extra: {
      es: 'Wonder Pick',
      en: 'Wonder Pick',
      ja: '' 
    },
    related: [202]
  },
  {
    id: 591,
    order: 591,
    number: 12,
    pokedex: 52,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Meowth',
      en: 'Meowth',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pay Day',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Draw a card.',
       ja: '' 
     }
      },
    ],
    evolve: [197],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.WITHDRAW_CARD],
    found: [
      EXPANSION.WONDER_PICK
    ],
    extra: {
      es: 'Wonder Pick',
      en: 'Wonder Pick',
      ja: '' 
    },
    related: [196, 197, 246]
  },
  {
    id: 592,
    order: 592,
    number: 13,
    pokedex: 12,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Butterfree',
      en: 'Butterfree',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gust',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Powder Heal',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may heal 20 damage from each of your Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PROMO_A1
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [5, 6, 7]
  },
  {
    id: 593,
    order: 593,
    number: 14,
    pokedex: 131,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Lapras EX',
      en: 'Lapras EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bubble Drain',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Heal 20 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PROMO_A1
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
  },
  {
    id: 594,
    order: 594,
    number: 15,
    pokedex: 25,
    name: {
      es: 'Pikachu',
      en: 'Pikachu',
      ja: 'ピカチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PROMO_A1,
    ],
    extra: {
      es: 'Promoción',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [94, 95, 311, 312, 398, 381]
  },
  {
    id: 595,
    order: 595,
    number: 16,
    pokedex: 35,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Clefairy',
      en: 'Clefairy',
      ja: '' 
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [114],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PROMO_A1,
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [113, 114]
  },
  {
    id: 596,
    order: 596,
    number: 17,
    pokedex: 56,
    name: {
      es: 'Mankey',
      en: 'Mankey',
      ja: 'マンキー' 
    },
    info: {
      type: {
        es: 'Pokémon Mono Cerdo',
        en: 'Pig Monkey Pokémon',
        ja: 'ぶたざるポケモン'
      },
      height: {
        es: '0.5',
        en: '1\'8"',
        ja: '0.5'
      },
      weight: {
        es: '28.8',
        en: '61.7',
        ja: '28.8'
      }
    },
    artist: 'Souichirou Gunjima',
    attacks: [
      {
        name: {
          es: '',
          en: 'Reckless Charge',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
          es: '',
          en: 'This Pokémon also does 10 damage to itself.',
          ja: '' 
        }
      },
    ],
    evolve: [142],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Vive en grupos en las copas de los árboles. Si pierde de vista a su manada, se siente solo y se enfada.',
      en: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
      ja: '木の上で　群れをつくって　暮らす｡ 群れから　はぐれた　マンキーは 寂しくて　すぐに　怒りだす｡' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.PSYCHIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.RECOIL],
    found: [
      EXPANSION.PROMO_A1,
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [141, 142, 327, 328]
  },
  {
    id: 597,
    order: 597,
    number: 18,
    pokedex: 3,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Venusaur',
      en: 'Venusaur',
      ja: '' 
    },
    artist: 'Kuroimori',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Rain',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Heal 30 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
      ja: '' 
    },
    health: 160,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PROMO_A2
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [1, 2, 3, 227, 395]
  },
  {
    id: 598,
    order: 598,
    number: 19,
    pokedex: 658,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Greninja',
      en: 'Greninja',
      ja: '' 
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mist Slash',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Water Shuriken',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may do 20 damage to 1 of your opponent’s Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.ATTACK_BENCH],
    found: [
      EXPANSION.PROMO_A2
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [87, 88, 89]
  },
  {
    id: 599,
    order: 599,
    number: 20,
    pokedex: 93,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Haunter',
      en: 'Haunter',
      ja: '' 
    },
    artist: 'Mékayu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Surprise Attack',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Flip a coin. If tails, this attack does nothing.',
       ja: '' 
     }
      },
    ],
    evolve: [122],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.NOTHING
    ],
    found: [
      EXPANSION.PROMO_A2,
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [120, 121, 122, 123, 261, 277]
  },
  {
    id: 600,
    order: 600,
    number: 21,
    pokedex: 95,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Onix',
      en: 'Onix',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Land Crush',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
      ja: '' 
    },
    health: 110,
    rarity: CardRarityENUM.PROMO,
    retreat: 4,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIGHT,
    weak: PokemonTypeENUM.GRASS,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PROMO_A2,
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [150]
  },
  {
    id: 601,
    order: 601,
    number: 22,
    pokedex: 39,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Jigglypuff',
      en: 'Jigglypuff',
      ja: '' 
    },
    artist: 'Kurata So',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sing',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Asleep.',
       ja: '' 
     }
      },
    ],
    evolve: [194],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.SLEEP],
    found: [
      EXPANSION.PROMO_A2
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [193, 194, 195, 265, 279]
  },
  {
    id: 602,
    order: 602,
    number: 23,
    pokedex: 1,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Bulbasaur',
      en: 'Bulbasaur',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Vine Whip',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [2],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.WONDER_PICK
    ],
    extra: {
      es: 'Elección Mágica',
      en: 'Wonder Pick',
      ja: '' 
    },
    related: [1, 2, 3, 4, 227, 251, 390],
  },
  {
    id: 603,
    order: 603,
    number: 24,
    pokedex: 81,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Magnemite',
      en: 'Magnemite',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Lighting Ball',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [98],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The electromagnetic waves emitted by the units at the sides of its head expel antigravity, which allows it to float.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.WONDER_PICK,
    ],
    extra: {
      es: 'Wonder Pick',
      en: 'Wonder Pick',
      ja: '' 
    },
    related: [97, 98]
  },
  {
    id: 604,
    order: 604,
    number: 25,
    pokedex: 145,
    name: {
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: 'ファイヤー EX' 
    },
    info: {
      type: {
        es: 'Pokémon Llama',
        en: 'Flame Pokémon',
        ja: 'かえんポケモン'
      },
      height: {
        es: '2',
        en: '6\'7"',
        ja: '2'
      },
      weight: {
        es: '60.0',
        en: '132.3',
        ja: '60.0'
      }
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: 'Danza Infernal',
          en: 'Inferno Dance',
          ja: 'れっかのまい' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: 'Lanza 3 monedas. Une a tus Pokémon Fuego en Banca, de la manera que desees, tantas Energías Fuego de tu área de Energía como caras hayan salido.',
          en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
          ja: 'コインを3回投げ、オモテの数ぶんの炎エネルギーを自分のエネルギーゾーンから出し、ベンチの炎ポケモンに好きなようにつける。' 
        }
      },
      {
        name: {
          es: 'Explosión de Calor',
          en: 'Heat Blast',
          ja: 'ヒートブラスト' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.',
      en: 'It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.',
      ja: '羽ばたくと　翼の　炎が 赤く　美しく　きらめく 伝説の　鳥ポケモンの　１匹｡' 
    },
    health: 140,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: true,
    condition: [
      CardSpecialConditionENUM.FLIP,
      CardSpecialConditionENUM.ADD
    ],
    found: [
      EXPANSION.PREMIUM
    ],
    related: [47, 255, 274],
    extra: {
      es: 'Pase Premium',
      en: 'Premium Pass',
      ja: 'プレミアムパス' 
    },
  },
  {
    id: 605,
    order: 605,
    number: 26,
    pokedex: 25,
    name: {
      es: 'Pikachu',
      en: 'Pikachu',
      ja: 'ピカチュウ' 
    },
    info: {
      type: {
        es: 'Pokémon Ratón',
        en: 'Mouse Pokémon',
        ja: 'ねずみポケモン'
      },
      height: {
        es: '0.4',
        en: '1\'4"',
        ja: '0.4'
      },
      weight: {
        es: '6.0',
        en: '13.2',
        ja: '6.0'
      }
    },
    artist: 'Kouki Saifou',
    attacks: [
      {
        name: {
          es: 'Roer',
          en: 'Gnaw',
          ja: 'かじる' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '両頬には　電気を　溜めこむ 袋がある｡　怒ると　溜めこんだ 電気を　一気に　放ってくる｡' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.SPECIAL_MISSION,
    ],
    extra: {
      es: 'Evento Especial',
      en: 'Special Event',
      ja: '' 
    },
    related: [94, 95, 311, 312, 387, 381]
  },
  {
    id: 606,
    order: 606,
    number: 27,
    pokedex: 495,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Snivy',
      en: 'Snivy',
      ja: '' 
    },
    artist: 'Yoriyuki ikegami',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [291],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Being exposed to sunlight makes its movements swiftier. It uses vines more adeptly than its hands.',
      ja: '' 
    },
    health: 70,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PROMO_A3
    ],
    related: [290, 291, 292, 356],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
  },
  {
    id: 607,
    order: 607,
    number: 28,
    pokedex: 637,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Volcarona',
      en: 'Volcarona',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Volcanic Ash',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Discard 2 Fire Energy from this Pokémon. This attack does 80 damage to 1 of your opponent\'s Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [299],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [
      CardSpecialConditionENUM.DISCARD,
      CardSpecialConditionENUM.ATTACK_BENCH
    ],
    found: [
      EXPANSION.PROMO_A3
    ],
    related: [299, 300],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
  },
  {
    id: 608,
    order: 608,
    number: 29,
    pokedex: 9,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Blastoise',
      en: 'Blastoise',
      ja: '' 
    },
    artist: 'danciao',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hydro Pump',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
      ja: '' 
    },
    health: 150,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PROMO_A3,
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [53, 54, 55, 232, 405]
  },
  {
    id: 609,
    order: 609,
    number: 30,
    pokedex: 133,
    name: {
      es: 'Eevee',
      en: 'Eevee',
      ja: 'イーブイ' 
    },
    info: {
      type: {
        es: 'Pokémon Evolución',
        en: 'Evolution Pokémon',
        ja: 'しんかポケモン'
      },
      height: {
        es: '0.3',
        en: '1\'',
        ja: '0.3'
      },
      weight: {
        es: '6.5',
        en: '14.3',
        ja: '6.5'
      }
    },
    artist: 'En Morikura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Growl',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your opponent’s next turn, attacks used by the Defending Pokémon do −20 damage.',
       ja: '' 
     }
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: 'Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '環境の　変化に　すぐさま 合わせられるよう　いくつもの 進化の　可能性を　秘めている｡' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.RESIST],
    found: [
      EXPANSION.PROMO_A3,
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [45, 80, 102, 206, 207, 208, 305, 347, 392, 418, 498, 248, 358]
  },
  {
    id: 610,
    order: 610,
    number: 31,
    pokedex: 573,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Cinccino',
      en: 'Cinccino',
      ja: '' 
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: '',
          en: 'Do the Wave',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does 30 damage for each of your Benched Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won’t tolerate even a speck of the stuff.',
      ja: '' 
    },
    health: 90,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.NORMAL,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PROMO_A3
    ],
    extra: {
      es: 'Promo Pack',
      en: 'Promo Pack',
      ja: '' 
    },
    related: [212, 213]
  },
  {
    id: 611,
    order: 611,
    number: 32,
    pokedex: 4,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Charmander',
      en: 'Charmander',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ember',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: {
       es: '',
       en: 'Discard 1 Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [34],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [CardSpecialConditionENUM.DISCARD],
    found: [
      EXPANSION.WONDER_PICK
    ],
    related: [33, 34, 35, 36, 230, 253, 280, 284],
    extra: {
      es: 'Wonder Pick',
      en: 'Wonder Pick',
      ja: '' 
    },
  },
  {
    id: 612,
    order: 612,
    number: 33,
    pokedex: 7,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Squirtle',
      en: 'Squirtle',
      ja: '' 
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Water Gun',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [54],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.WONDER_PICK,
    ],
    extra: {
      es: 'Wonder Pick',
      en: 'Wonder Pick',
      ja: '' 
    },
    related: [53, 54, 55, 56, 232, 256, 401]
  },
  {
    id: 613,
    order: 613,
    number: 34,
    pokedex: 393,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Piplup',
      en: 'Piplup',
      ja: '' 
    },
    artist: 'Kariya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Nap',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'Heal 20 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [408],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It doesn’t like to be taken care of. It’s difficult to bond with since it won’t listen to its Trainer.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.WATER,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PREMIUM
    ],
    related: []
  },
  {
    id: 614,
    order: 614,
    number: 35,
    pokedex: 387,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Turtwig',
      en: 'Turtwig',
      ja: '' 
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [383],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'It uses its whole body to photosynthesize when exposed to sunlight. Its shell is made from hardened soil.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.PROMO_A4
    ],
    related: []
  },
  {
    id: 615,
    order: 615,
    number: 36,
    pokedex: 466,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Electivire',
      en: 'Electivire',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Exciting Voltage',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'If this Pokémon has at least 2 extra Electric Energy attached, this attack does 80 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The amount of electrical energy this Pokémon produces is proportional to the rate of its pulse. The voltage jumps while Electivire is battling.',
      ja: '' 
    },
    health: 120,
    rarity: CardRarityENUM.PROMO,
    retreat: 3,
    stage: CardStageENUM.ONE,
    element: PokemonTypeENUM.ELECTRIC,
    weak: PokemonTypeENUM.FIGHT,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PROMO_A4
    ],
    related: []
  },
  {
    id: 616,
    order: 616,
    number: 37,
    pokedex: 488,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Cresselia EX',
      en: 'Cresselia EX',
      ja: '' 
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic Flash',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Lunar Plumage',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Whenever you attach a Psychic Energy from your Energy Zone to this Pokémon, heal 20 damage from this Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: '',
      ja: '' 
    },
    health: 140,
    rarity: CardRarityENUM.PROMO,
    retreat: 2,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: true,
    condition: [CardSpecialConditionENUM.HEAL],
    found: [
      EXPANSION.PROMO_A4
    ],
    related: []
  },
  {
    id: 617,
    order: 617,
    number: 38,
    pokedex: 200,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Misdreavus',
      en: 'Misdreavus',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Confuse Ray',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Confused.',
       ja: '' 
     }
      }
    ],
    evolve: [439],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'This Pokémon startles people in the middle of the night. It gathers fear as its energy.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.DARK,
    isEX: false,
    condition: [CardSpecialConditionENUM.CONFUSION],
    found: [
      EXPANSION.PROMO_A4
    ],
    related: []
  },
  {
    id: 618,
    order: 618,
    number: 39,
    pokedex: 227,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Skarmory',
      en: 'Skarmory',
      ja: '' 
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metal Arms',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'People fashion swords from Skarmory’s shed feathers, so this Pokémon is a popular element in heraldic designs.',
      ja: '' 
    },
    health: 80,
    rarity: CardRarityENUM.PROMO,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.STEEL,
    weak: PokemonTypeENUM.ELECTRIC,
    isEX: false,
    condition: [CardSpecialConditionENUM.EXTRA_DAMAGE],
    found: [
      EXPANSION.PROMO_A4
    ],
    related: []
  },
  {
    id: 619,
    order: 619,
    number: 40,
    pokedex: 390,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Chimchar',
      en: 'Chimchar',
      ja: '' 
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratch',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIRE]
      }
    ],
    evolve: [400],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'Its fiery rear end is fueled by gas made in its belly. Even rain can’t extinguish the fire.',
      ja: '' 
    },
    health: 60,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.FIRE,
    weak: PokemonTypeENUM.WATER,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.WONDER_PICK
    ],
    related: []
  },
  {
    id: 620,
    order: 620,
    number: 41,
    pokedex: 175,
    info: {
      type: {
        es: '',
        en: '',
        ja: ''
      },
      height: {
        es: '',
        en: '2\'04"',
        ja: ''
      },
      weight: {
        es: '',
        en: '',
        ja: ''
      }
    },
    name: {
      es: 'Togepi',
      en: 'Togepi',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pound',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [436],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A2,
    flavor: {
      es: '',
      en: 'The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.',
      ja: '' 
    },
    health: 50,
    rarity: CardRarityENUM.COMMON,
    retreat: 1,
    stage: CardStageENUM.BASIC,
    element: PokemonTypeENUM.PSYCHIC,
    weak: PokemonTypeENUM.STEEL,
    isEX: false,
    condition: [],
    found: [
      EXPANSION.WONDER_PICK
    ],
    related: []
  }
];

export default MOCK_DB_CARDS;