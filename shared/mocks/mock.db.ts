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
        en: '	Coconut Pokémon',
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
        en: '	Coconut Pokémon',
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
      es: 'Sizzlipede',
      en: 'Sizzlipede',
      ja: '' 
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [52],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.',
      ja: '' 
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
      es: 'Centiskorch',
      en: 'Centiskorch',
      ja: '' 
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fire Blast',
          ja: '' 
        },
        damage: 130,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 1 Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies.',
      ja: '' 
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
    artist: 'Mizue',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
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
      EXPANSION.PIKACHU,
    ],
    related: [54, 55, 56, 232, 256, 405, 401]
  },
  {
    id: 54,
    order: 54,
    number: 54,
    pokedex: 8,
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
      es: 'Wartortle',
      en: 'Wartortle',
      ja: '' 
    },
    artist: 'Nelnal',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wave Splash',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [55],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
      ja: '' 
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
    related: [53, 55, 56, 232, 256, 405, 401]
  },
  {
    id: 55,
    order: 55,
    number: 55,
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
    artist: 'Nurikabe',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
      ja: '' 
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
    related: [53, 54, 232, 405, 401]
  },
  {
    id: 56,
    order: 56,
    number: 56,
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
      es: 'Blastoise EX',
      en: 'Blastoise EX',
      ja: '' 
    },
    artist: 'PLANETA Tsuji',
    attacks: [
      {
        name: {
          es: '',
          en: 'Surf',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      },
      {
        name: {
          es: '',
          en: 'Hydro Bazooka',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
    related: [53, 54, 232, 256, 405]
  },
  {
    id: 57,
    order: 57,
    number: 57,
    pokedex: 54,
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
      es: 'Psyduck',
      en: 'Psyduck',
      ja: '' 
    },
    artist: 'Shibuzoh',
    attacks: [
      {
        name: {
          es: '',
          en: 'Headache',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent can’t use any Supporter cards from their hand during their next turn.',
       ja: '' 
     }
      }
    ],
    evolve: [58],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.',
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
      es: 'Golduck',
      en: 'Golduck',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Aqua Edge',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.',
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
      es: 'Poliwag',
      en: 'Poliwag',
      ja: '' 
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Razor Fin',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [60],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.',
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
      EXPANSION.CHARIZARD
    ],
    related: [60, 61]
  },
  {
    id: 60,
    order: 60,
    number: 60,
    pokedex: 61,
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
      es: 'Poliwhirl',
      en: 'Poliwhirl',
      ja: '' 
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Knuckle Punch',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [61],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl’s has been used in place of lullabies to get children to go to sleep.',
      ja: '' 
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
      es: 'Poliwrath',
      en: 'Poliwrath',
      ja: '' 
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Punch',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Counterattack',
          ja: '' 
        },
      description: {
       es: '',
       en: 'If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon, do 20 damage to the Attacking Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.',
      ja: '' 
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
      es: 'Tentacool',
      en: 'Tentacool',
      ja: '' 
    },
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gentle Slap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [63],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.',
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
      EXPANSION.MEWTWO
    ],
    related: [63]
  },
  {
    id: 63,
    order: 63,
    number: 63,
    pokedex: 73,
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
      es: 'Tentacruel',
      en: 'Tentacruel',
      ja: '' 
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Tentacles',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.',
      ja: '' 
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
      es: 'Seel',
      en: 'Seel',
      ja: '' 
    },
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Headbutt',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [65],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Thanks to its thick fat, cold seas don’t bother it at all, but it gets tired pretty easily in warm waters.',
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
      EXPANSION.PIKACHU
    ],
    related: [65]
  },
  {
    id: 65,
    order: 65,
    number: 65,
    pokedex: 87,
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
      es: 'Dewgong',
      en: 'Dewgong',
      ja: '' 
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Surf',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.',
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
      EXPANSION.PIKACHU
    ],
    related: [64]
  },
  {
    id: 66,
    order: 66,
    number: 66,
    pokedex: 90,
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
      es: 'Shellder',
      en: 'Shellder',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tongue Slap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [67],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.',
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
      EXPANSION.MEWTWO
    ],
    related: [67]
  },
  {
    id: 67,
    order: 67,
    number: 67,
    pokedex: 91,
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
      es: 'Cloyster',
      en: 'Cloyster',
      ja: '' 
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: '',
          en: 'Surf',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Shell Armor',
          ja: '' 
        },
      description: {
       es: '',
       en: 'This Pokémon takes −10 damage from attacks.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.',
      ja: '' 
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
      es: 'Krabby',
      en: 'Krabby',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Vise Grip',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [69],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It can be found near the sea. The large pincers grow back if they are torn out of their sockets.',
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
      EXPANSION.MEWTWO
    ],
    related: [69]
  },
  {
    id: 69,
    order: 69,
    number: 69,
    pokedex: 99,
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
      es: 'Kingler',
      en: 'Kingler',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'KO Crab',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip coins. If all of them are heads, this attack does 80 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.',
      ja: '' 
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
      es: 'Horsea',
      en: 'Horsea',
      ja: '' 
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: '',
          en: 'Water Gun',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [71],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.',
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
      EXPANSION.PIKACHU
    ],
    related: [71]
  },
  {
    id: 71,
    order: 71,
    number: 71,
    pokedex: 117,
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
      es: 'Seadra',
      en: 'Seadra',
      ja: '' 
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Water Arrow',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'This attack does 50 damage to 1 of your opponent’s Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It’s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.',
      ja: '' 
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
      es: 'Goldeen',
      en: 'Goldeen',
      ja: '' 
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flop',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [73],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.',
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
      EXPANSION.PIKACHU
    ],
    related: [73]
  },
  {
    id: 73,
    order: 73,
    number: 73,
    pokedex: 119,
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
      es: 'Seaking',
      en: 'Seaking',
      ja: '' 
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Horn Hazard',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.',
      ja: '' 
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
      es: 'Staryu',
      en: 'Staryu',
      ja: '' 
    },
    artist: 'Hiroki Asanuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Smack',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [75],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.',
      ja: '' 
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
      es: 'Starmie',
      en: 'Starmie',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wave Splash',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.',
      ja: '' 
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
      es: 'Starmie EX',
      en: 'Starmie EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hydro Splash',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Magikarp',
      en: 'Magikarp',
      ja: '' 
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: '',
          en: 'Splash',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [78],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.',
      ja: '' 
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
      es: 'Gyarados',
      en: 'Gyarados',
      ja: '' 
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hyper Beam',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'Discard 1 random Energy from your opponent’s Active Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '' 
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
      es: 'Lapras',
      en: 'Lapras',
      ja: '' 
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hydro Pump',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
      ja: '' 
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
      es: 'Vaporeon',
      en: 'Vaporeon',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bubble Drain',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Heal 30 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
      ja: '' 
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
    related: [206, 207, 208, 305, 347, 609, 248, 358, 402]
  },
  {
    id: 81,
    order: 81,
    number: 81,
    pokedex: 138,
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
      es: 'Omanyte',
      en: 'Omanyte',
      ja: '' 
    },
    artist: 'Suwama Chiaki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Water Gun',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER],
      }
    ],
    evolve: [82],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.',
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
      EXPANSION.PIKACHU
    ],
    related: [82, 216]
  },
  {
    id: 82,
    order: 82,
    number: 82,
    pokedex: 139,
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
      es: 'Omastar',
      en: 'Omastar',
      ja: '' 
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ancient Whirlpool',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your opponent’s next turn, the Defending Pokémon can’t attack.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Weighed down by a large and heavy shell, Omastar couldn’t move very fast. Some say it went extinct because it was unable to catch food.',
      ja: '' 
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
      es: 'Articuno',
      en: 'Articuno',
      ja: '' 
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ice Beam',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It’s said that this Pokémon’s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.',
      ja: '' 
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
      es: 'Articuno EX',
      en: 'Articuno EX',
      ja: '' 
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ice Wing',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: {
          es: '',
          en: 'Blizzard',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Ducklett',
      en: 'Ducklett',
      ja: '' 
    },
    artist: 'Yumi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flap',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [86],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When attacked, it uses its feathers to splash water, escaping under cover of the spray.',
      ja: '' 
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
      es: 'Swanna',
      en: 'Swanna',
      ja: '' 
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.',
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
      EXPANSION.CHARIZARD
    ],
    related: [85]
  },
  {
    id: 87,
    order: 87,
    number: 87,
    pokedex: 656,
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
      es: 'Froakie',
      en: 'Froakie',
      ja: '' 
    },
    artist: 'Aya Kusube',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flop',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [88],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.',
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
      EXPANSION.CHARIZARD
    ],
    related: [88, 89, 391]
  },
  {
    id: 88,
    order: 88,
    number: 88,
    pokedex: 657,
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
      es: 'Frogadier',
      en: 'Frogadier',
      ja: '' 
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Water Drip',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [89],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.',
      ja: '' 
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
    related: [87, 89, 391]
  },
  {
    id: 89,
    order: 89,
    number: 89,
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
    artist: '5ban Graphics',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.',
      ja: '' 
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
    related: [87, 88, 391]
  },
  {
    id: 90,
    order: 90,
    number: 90,
    pokedex: 771,
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
      es: 'Pyukumuku',
      en: 'Pyukumuku',
      ja: '' 
    },
    artist: 'OOYAMA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rain Splash',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them.',
      ja: '' 
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
      es: 'Bruxish',
      en: 'Bruxish',
      ja: '' 
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: '',
          en: 'Second Strike',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon has damage on it, this attack does 60 more damage.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.',
      ja: '' 
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
      es: 'Snom',
      en: 'Snom',
      ja: '' 
    },
    artist: 'ryoma uratsuka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [93],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It eats snow that has accumulated on the ground. It prefers soft, freshly fallen snow, so it will eat its way up a mountain, aiming for the peak.',
      ja: '' 
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
      es: 'Frosmoth',
      en: 'Frosmoth',
      ja: '' 
    },
    artist: 'aoki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Powder Snow',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.',
      ja: '' 
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
      es: 'Pikachu',
      en: 'Pikachu',
      ja: '' 
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
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
      EXPANSION.PIKACHU,
    ],
    related: [95, 311, 312, 398, 387, 381]
  },
  {
    id: 95,
    order: 95,
    number: 95,
    pokedex: 26,
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
      es: 'Raichu',
      en: 'Raichu',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunderbolt',
          ja: '' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Discard all Energy from this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
      ja: '' 
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
    related: [94, 311, 312, 398, 387, 381]
  },
  {
    id: 96,
    order: 96,
    number: 96,
    pokedex: 25,
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
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Circle Circuit',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
      EXPANSION.PIKACHU,
    ],
    related: [259, 281, 285]
  },
  {
    id: 97,
    order: 97,
    number: 97,
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
    artist: 'sowsow',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
      EXPANSION.PIKACHU,
    ],
    related: [98, 423, 424, 425, 396]
  },
  {
    id: 98,
    order: 98,
    number: 98,
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
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spinning Attack',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
        es: '',
        en: 'Volt Charge',
        ja: '' 
      },
      description: {
       es: '',
       en: 'Once during your turn, you may take a Lighting Energy from your Energy Zone and attach it to this Pokémon.',
       ja: '' 
     }
    },
    evolve: [425],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.',
      ja: '' 
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
    related: [97, 423, 424, 425, 396]
  },
  {
    id: 99,
    order: 99,
    number: 99,
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
    artist: 'SATOSHI NAKAI',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [100],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
    artist: 'Asako Ito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Electro Ball',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
      ja: '' 
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
      es: 'Electabuzz',
      en: 'Electabuzz',
      ja: '' 
    },
    artist: 'Ryuta Fuse',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Punch',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon also does 20 damage to itself.',
          ja: '' 
        }
      },
    ],
    evolve: [429],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
      ja: '' 
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
      es: 'Jolteon',
      en: 'Jolteon',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pin Missile',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip 4 coins. This attack does 40 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.',
      ja: '' 
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
    related: [206, 207, 208, 347, 248, 402]
  },
  {
    id: 103,
    order: 103,
    number: 103,
    pokedex: 145,
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
      es: 'Zapdos',
      en: 'Zapdos',
      ja: '' 
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: '',
          en: 'Raging Thunder',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack also does 30 damage to 1 of your Benched Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.',
      ja: '' 
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
      es: 'Zapdos EX',
      en: 'Zapdos EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: {
          es: '',
          en: 'Thundering Hurricane',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Flip 4 coins. This attack does 50 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Blitzle',
      en: 'Blitzle',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Zap Kick',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [106],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.',
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
      es: 'Zebstrika',
      en: 'Zebstrika',
      ja: '' 
    },
    artist: 'Misa Tsutsui',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Spear',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'This attack does 30 damage to 1 of your opponent’s Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.',
      ja: '' 
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
      es: 'Tynamo',
      en: 'Tynamo',
      ja: '' 
    },
    artist: 'Asako Ito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tiny Charge',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [108],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'While one alone doesn’t have much power, a chain of many Tynamo can be as powerful as lightning.',
      ja: '' 
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
      es: 'Eelektrik',
      en: 'Eelektrik',
      ja: '' 
    },
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Head Bolt',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [109],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.',
      ja: '' 
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
      es: 'Eelektross',
      en: 'Eelektross',
      ja: '' 
    },
    artist: 'hatachu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Fang',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.',
      ja: '' 
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
      es: 'Helioptile',
      en: 'Helioptile',
      ja: '' 
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tail Whap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [111],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When spread, the frills on its head act like solar panels, generating the power behind this Pokémon’s electric moves.',
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
      es: 'Heliolisk',
      en: 'Heliolisk',
      ja: '' 
    },
    artist: 'otumami',
    attacks: [
      {
        name: {
          es: '',
          en: 'Quick Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 40 more damage.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'One Heliolisk basking in the sun with its frill outspread is all it would take to produce enough electricity to power a city.',
      ja: '' 
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
      es: 'Pincurchin',
      en: 'Pincurchin',
      ja: '' 
    },
    artist: 'Tika Matsuno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Shock',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.',
      ja: '' 
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
    artist: 'kirisAki',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.',
      ja: '' 
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
    related: [114, 388]
  },
  {
    id: 114,
    order: 114,
    number: 114,
    pokedex: 36,
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
      es: 'Clefable',
      en: 'Clefable',
      ja: '' 
    },
    artist: 'Sanosuke Sakuma',
    attacks: [
      {
        name: {
          es: '',
          en: 'Magical Shot',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.',
      ja: '' 
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
    related: [113, 388]
  },
  {
    id: 115,
    order: 115,
    number: 115,
    pokedex: 63,
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
      es: 'Abra',
      en: 'Abra',
      ja: '' 
    },
    artist: 'Aya Kusube',
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
      },
    ],
    evolve: [116],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.',
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
      EXPANSION.CHARIZARD,
    ],
    related: [116, 117, 236]
  },
  {
    id: 116,
    order: 116,
    number: 116,
    pokedex: 64,
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
      es: 'Kadabra',
      en: 'Kadabra',
      ja: '' 
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: '',
          en: 'Super Psy Bolt',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [117],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.',
      ja: '' 
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
      es: 'Alakazam',
      en: 'Alakazam',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
      ja: '' 
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
      es: 'Slowpoke',
      en: 'Slowpoke',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tail Whap',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [119],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.',
      ja: '' 
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
      es: 'Slowbro',
      en: 'Slowbro',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Super Psy Bolt',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.',
      ja: '' 
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
      es: 'Gastly',
      en: 'Gastly',
      ja: '' 
    },
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Suffocating Gas',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [121],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.',
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
      EXPANSION.MEWTWO,
    ],
    related: [121, 122, 123, 261, 277, 392]
  },
  {
    id: 121,
    order: 121,
    number: 121,
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
    artist: 'Nisota Niso',
    attacks: [
      {
        name: {
          es: '',
          en: 'Will-O-Wisp',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC],
      },
    ],
    evolve: [122],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.',
      ja: '' 
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
    related: [120, 122, 123, 261, 277, 392]
  },
  {
    id: 122,
    order: 122,
    number: 122,
    pokedex: 94,
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
      es: 'Gengar',
      en: 'Gengar',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bother',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Your opponent can’t use any Supporter cards from their hand during their next turn.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'To steal the life of its target, it slips into the prey’s shadow and silently waits for an opportunity.',
      ja: '' 
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
    related: [120, 121, 392]
  },
  {
    id: 123,
    order: 123,
    number: 123,
    pokedex: 94,
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
      es: 'Gengar EX',
      en: 'Gengar EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spooky Shot',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Shadowy Spellbind',
          ja: '' 
        },
      description: {
       es: '',
       en: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Drowzee',
      en: 'Drowzee',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mumble',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [125],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It remembers every dream it eats. It rarely eats the dreams of adults because children’s are much tastier.',
      ja: '' 
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
      es: 'Hypno',
      en: 'Hypno',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psypunch',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Sleep Pendulum',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may flip a coin. If heads, your opponent’s Active Pokémon is now Asleep.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it locks eyes with an enemy, it will use a mix of psi moves, such as Hypnosis and Confusion.',
      ja: '' 
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
      es: 'Mr.Mime',
      en: 'Mr.Mime',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Barrier Attack',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'During your opponent’s next turn, this Pokémon takes −20 damage from attacks.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.',
      ja: '' 
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
      es: 'Jynx',
      en: 'Jynx',
      ja: '' 
    },
    artist: 'Oswaldo KATO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing.',
      ja: '' 
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
    artist: 'kawayoo',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.',
      ja: '' 
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
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: '' 
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic Sphere',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Psydrive',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Psychic Energy from this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [131],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Smack',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [132, 467],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It has a psychic power that enables it to distort the space around it and see into the future.',
      ja: '' 
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
      es: 'Gardevoir',
      en: 'Gardevoir',
      ja: '' 
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psyshot',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Psy Shadow',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may take a Psychic Energy from your Energy Zone and attach it to the Psychic Pokémon in the Active Spot.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'To protect its Trainer, it will expend all its psychic power to create a small black hole.',
      ja: '' 
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
      es: 'Woobat',
      en: 'Woobat',
      ja: '' 
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [134],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it’s evidence that Woobat live there.',
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
      es: 'Swoobat',
      en: 'Swoobat',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Heart Stamp',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Emitting powerful sound waves tires it out. Afterward, it won’t be able to fly for a little while.',
      ja: '' 
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
      es: 'Golett',
      en: 'Golett',
      ja: '' 
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Punch',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [136],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'They were sculpted from clay in ancient times. No one knows why, but some of them are driven to continually line up boulders.',
      ja: '' 
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
      es: 'Golurk',
      en: 'Golurk',
      ja: '' 
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: '',
          en: 'Double Lariat',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.',
      ja: '' 
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
      es: 'Sandhrew',
      en: 'Sandhrew',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scratch',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: [138],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.',
      ja: '' 
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
      es: 'Sandslash',
      en: 'Sandslash',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The drier the area Sandslash lives in, the harder and smoother the Pokémon’s spikes will feel when touched.',
      ja: '' 
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
      es: 'Diglett',
      en: 'Diglett',
      ja: '' 
    },
    artist: 'Masako Yamashita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mud-Slap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [140],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.',
      ja: '' 
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
      es: 'Dugtrio',
      en: 'Dugtrio',
      ja: '' 
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dig',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'Flip a coin. If heads, during your opponent’s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.',
      ja: '' 
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
      es: 'Mankey',
      en: 'Mankey',
      ja: '' 
    },
    artist: 'Kanako Eo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Low Kick',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [142],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
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
      EXPANSION.CHARIZARD,
    ],
    related: [142, 327, 328, 389]
  },
  {
    id: 142,
    order: 142,
    number: 142,
    pokedex: 57,
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
      es: 'Primeape',
      en: 'Primeape',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fight Back',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'If this Pokémon has damage on it, this attack does 60 more damage.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
      ja: '' 
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
    related: [141, 327, 328, 389]
  },
  {
    id: 143,
    order: 143,
    number: 143,
    pokedex: 66,
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
      es: 'Machop',
      en: 'Machop',
      ja: '' 
    },
    artist: 'Kyoko Umemoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Knuckle Punch',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [144],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.',
      ja: '' 
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
      es: 'Machoke',
      en: 'Machoke',
      ja: '' 
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: '',
          en: 'Strength',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [145],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.',
      ja: '' 
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
      es: 'Machamp',
      en: 'Machamp',
      ja: '' 
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: '',
          en: 'Seismic Toss',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.',
      ja: '' 
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
      es: 'Machamp EX',
      en: 'Machamp EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Punch',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Geodude',
      en: 'Geodude',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: [148],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.',
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
      EXPANSION.PIKACHU,
    ],
    related: [148, 149, 329, 330, 331]
  },
  {
    id: 148,
    order: 148,
    number: 148,
    pokedex: 75,
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
      es: 'Graveler',
      en: 'Graveler',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rollout',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [149],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.',
      ja: '' 
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
      es: 'Golem',
      en: 'Golem',
      ja: '' 
    },
    artist: 'Sumiyoshi Kizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Double-Edge',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This Pokémon also does 50 damage to itself.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.',
      ja: '' 
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
    artist: 'otumami',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.',
      ja: '' 
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
    related: [393]
  },
  {
    id: 151,
    order: 151,
    number: 151,
    pokedex: 104,
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
      es: 'Cubone',
      en: 'Cubone',
      ja: '' 
    },
    artist: 'sowsow',
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
    evolve: [152],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
      ja: '' 
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
      es: 'Marowak',
      en: 'Marowak',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bone Beatdown',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.',
      ja: '' 
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
      es: 'Marowak EX',
      en: 'Marowak EX',
      ja: '' 
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bonemerang',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'Flip 2 coins. This attack does 80 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Hitmonlee',
      en: 'Hitmonlee',
      ja: '' 
    },
    artist: 'Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Stretch Kick',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'This attack does 30 damage to 1 of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.',
      ja: '' 
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
      es: 'Hitmonchan',
      en: 'Hitmonchan',
      ja: '' 
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: '',
          en: 'Jab',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.',
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
      EXPANSION.CHARIZARD,
    ],
  },
  {
    id: 156,
    order: 156,
    number: 156,
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
    artist: 'Midori Harada',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [157],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
      EXPANSION.MEWTWO,
    ],
    related: [157, 452, 453, 454, 541]
  },
  {
    id: 157,
    order: 157,
    number: 157,
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
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Horn Drill',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [454],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.',
      ja: '' 
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
      es: 'Kabuto',
      en: 'Kabuto',
      ja: '' 
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: '',
          en: 'Shell Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT,],
      },
    ],
    evolve: [159],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.',
      ja: '' 
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
      es: 'Kabutops',
      en: 'Kabutops',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leech Life',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT,],
        description: {
       es: '',
       en: 'Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.',
      ja: '' 
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
      es: 'Mienfoo',
      en: 'Mienfoo',
      ja: '' 
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pound',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [161],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'In one minute, a well-trained Mienfoo can chop with its arms more than 100 times.',
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
      EXPANSION.PIKACHU,
    ],
    related: [161]
  },
  {
    id: 161,
    order: 161,
    number: 161,
    pokedex: 620,
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
      es: 'Mienshao',
      en: 'Mienshao',
      ja: '' 
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spiral Kick',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.',
      ja: '' 
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
      es: 'Clobbopues',
      en: 'Clobbopues',
      ja: '' 
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Knuckle Punch',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [163],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It’s very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.',
      ja: '' 
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
      es: 'Grapploct',
      en: 'Grapploct',
      ja: '' 
    },
    artist: 'kurumitsu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Knock Back',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.',
      ja: '' 
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
      es: 'Ekans',
      en: 'Ekans',
      ja: '' 
    },
    artist: 'MAHOU',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK,],
      },
    ],
    evolve: [165],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests.',
      ja: '' 
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
      es: 'Arbok',
      en: 'Arbok',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Corner',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.',
      ja: '' 
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
      es: 'Nidoran♀',
      en: 'Nidoran♀',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Call for Family',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Put 1 random Nidoran♂ from your deck onto your Bench.',
       ja: '' 
     }
      },
    ],
    evolve: [167],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.',
      ja: '' 
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
      es: 'Nidorina',
      en: 'Nidorina',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: [168],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The horn on its head has atrophied. It’s thought that this happens so Nidorina’s children won’t get poked while their mother is feeding them.',
      ja: '' 
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
      es: 'Nidoqueen',
      en: 'Nidoqueen',
      ja: '' 
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: '',
          en: 'Lovestrike',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does 50 more damage for each of your Benched Nidoking.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.',
      ja: '' 
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
      es: 'Nidoran♂',
      en: 'Nidoran♂',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: [170],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The horn on a male Nidoran’s forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.',
      ja: '' 
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
      es: 'Nidorino',
      en: 'Nidorino',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Horn Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [171],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.',
      ja: '' 
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
      es: 'Nidoking',
      en: 'Nidoking',
      ja: '' 
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Horn',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.',
      ja: '' 
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
      es: 'Zubat',
      en: 'Zubat',
      ja: '' 
    },
    artist: 'match',
    attacks: [
      {
        name: {
          es: '',
          en: 'Glide',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [173],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.',
      ja: '' 
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
      es: 'Golbat',
      en: 'Golbat',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
      ja: '' 
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
      es: 'Grimer',
      en: 'Grimer',
      ja: '' 
    },
    artist: 'Pani Kobayashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Gas',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      },
    ],
    evolve: [175],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.',
      ja: '' 
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
      es: 'Muk',
      en: 'Muk',
      ja: '' 
    },
    artist: 'Hajime Kusajima',
    attacks: [
      {
        name: {
          es: '',
          en: 'Venoshock',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'If your opponent’s Active Pokémon is Poisoned, this attack does 50 more damage.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It’s thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
      ja: '' 
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
      es: 'Koffing',
      en: 'Koffing',
      ja: '' 
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: '',
          en: 'Suffocating Gas',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    evolve: [177],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
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
      EXPANSION.MEWTWO,
    ],
    related: [177, 335, 336, 243]
  },
  {
    id: 177,
    order: 177,
    number: 177,
    pokedex: 110,
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
      es: 'Weezing',
      en: 'Weezing',
      ja: '' 
    },
    artist: 'OOYAMA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Gas Leak',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
      ja: '' 
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
      es: 'Mawile',
      en: 'Mawile',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Crunch',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, discard 1 random Energy from your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It uses its docile-looking face to lull foes into complacency, then bites with its huge, relentless jaws.',
      ja: '' 
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
      es: 'Pawniard',
      en: 'Pawniard',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pierce',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.STEEL]
      },
    ],
    evolve: [180],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Pawniard will fearlessly challenge even powerful foes. In a pinch, it will cling to opponents and pierce them with the blades all over its body.',
      ja: '' 
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
      es: 'Bisharp',
      en: 'Bisharp',
      ja: '' 
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: '',
          en: 'Metal Claw',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL]
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon commands a group of several Pawniard. Groups that are defeated in territorial disputes are absorbed by the winning side.',
      ja: '' 
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
      es: 'Meltan',
      en: 'Meltan',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Amass',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.STEEL],
        description: {
       es: '',
       en: 'Take 1 Metal Energy from your Energy Zone and attach it to this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [182],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.',
      ja: '' 
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
      es: 'Melmetal',
      en: 'Melmetal',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Heavy Impact',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.STEEL, PokemonTypeENUM.NORMAL]
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Hard Coat',
          ja: '' 
        },
      description: {
       es: '',
       en: 'This Pokémon takes −20 damage from attacks.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'At the end of its life-span, Melmetal will rust and fall apart. The small shards left behind will eventually be reborn as Meltan.',
      ja: '' 
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
      es: 'Dratini',
      en: 'Dratini',
      ja: '' 
    },
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC]
      },
    ],
    evolve: [184],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.',
      ja: '' 
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
      es: 'Dragonair',
      en: 'Dragonair',
      ja: '' 
    },
    artist: 'kirisAki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tail Smack',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL]
      },
    ],
    evolve: [185],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
      ja: '' 
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
      es: 'Dragonite',
      en: 'Dragonite',
      ja: '' 
    },
    artist: 'Hiroyuki Yamamoto',
    attacks: [
      {
        name: {
          es: '',
          en: 'Draco Meteor',
          ja: '' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: '1 of your opponent’s Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is said that somewhere in the ocean lies an island where these gather. Only they live there.',
      ja: '' 
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
      es: 'Pidgey',
      en: 'Pidgey',
      ja: '' 
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gust',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [187],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
      ja: '' 
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
      es: 'Pidgeotto',
      en: 'Pidgeotto',
      ja: '' 
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gust',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [188],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.',
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
      EXPANSION.MEWTWO,
    ],
    related: [186, 188, 343, 344, 345, 245, 365]
  },
  {
    id: 188,
    order: 188,
    number: 188,
    pokedex: 18,
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
      es: 'Pidgeot',
      en: 'Pidgeot',
      ja: '' 
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Drive Off',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
      ja: '' 
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
      es: 'Rattata',
      en: 'Rattata',
      ja: '' 
    },
    artist: 'Atsushi Furusawa',
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
    evolve: [190],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its incisors grow continuously throughout its life. If its incisors get too long, this Pokémon becomes unable to eat, and it starves to death.',
      ja: '' 
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
      es: 'Raticate',
      en: 'Raticate',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.',
      ja: '' 
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
      es: 'Spearow',
      en: 'Spearow',
      ja: '' 
    },
    artist: 'Shiburingaru',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [192],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its reckless nature leads it to stand up to others—even large Pokémon—if it has to protect its territory.',
      ja: '' 
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
      es: 'Fearow',
      en: 'Fearow',
      ja: '' 
    },
    artist: 'Satoshi Shirai',
    attacks: [
      {
        name: {
          es: '',
          en: 'Drill Run',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, discard 1 random Energy from your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Carrying food through Fearow’s territory is dangerous. It will snatch the food away from you in a flash!',
      ja: '' 
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
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: '',
          en: 'Pound',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [194],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.',
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
      EXPANSION.PIKACHU
    ],
    related: [194, 195, 265, 279, 394]
  },
  {
    id: 194,
    order: 194,
    number: 194,
    pokedex: 40,
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
      es: 'Wigglytuff',
      en: 'Wigglytuff',
      ja: '' 
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hyper Voice',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.',
      ja: '' 
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
    related: [193, 394]
  },
  {
    id: 195,
    order: 195,
    number: 195,
    pokedex: 40,
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
      es: 'Wigglytuff EX',
      en: 'Wigglytuff EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sleepy Song',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
    related: [193, 265, 279, 394]
  },
  {
    id: 196,
    order: 196,
    number: 196,
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
    artist: 'Mitsuhiro Arita',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
      ja: '' 
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
    related: [197, 246, 384]
  },
  {
    id: 197,
    order: 197,
    number: 197,
    pokedex: 53,
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
      es: 'Persian',
      en: 'Persian',
      ja: '' 
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: '',
          en: 'Shadow Claws',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, discard 1 random cards from your opponent’s hand.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.',
      ja: '' 
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
    related: [196, 246, 384]
  },
  {
    id: 198,
    order: 198,
    number: 198,
    pokedex: 83,
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
      es: '',
      en: 'Farfetch\'s',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leek Slap',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.',
      ja: '' 
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
      es: 'Doduo',
      en: 'Doduo',
      ja: '' 
    },
    artist: 'Yuya Oka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [200],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A two-headed Pokémon that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.',
      ja: '' 
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
      es: 'Dodrio',
      en: 'Dodrio',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Drill Peck',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.',
      ja: '' 
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
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Continuous Lick',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [497],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'If this Pokémon’s sticky saliva gets on you and you don’t clean it off, an intense itch will set in. The itch won’t go away, either.',
      ja: '' 
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
    artist: 'MAHOU',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This kindly Pokémon lays highly nutritious eggs and shares them with injured Pokémon or people.',
      ja: '' 
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
    related: [383]
  },
  {
    id: 203,
    order: 203,
    number: 203,
    pokedex: 115,
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
      es: 'Kangaskhan',
      en: 'Kangaskhan',
      ja: '' 
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dizzy Punch',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Although it’s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.',
      ja: '' 
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
      es: 'Tauros',
      en: 'Tauros',
      ja: '' 
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Horn Attack',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
      ja: '' 
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
      es: 'Ditto',
      en: 'Ditto',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Copy Anything',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.',
      ja: '' 
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
    },
    artist: 'Atsuko Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
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
      EXPANSION.CHARIZARD,
    ],
    related: [45, 80, 102, 207, 208, 305, 347, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 207,
    order: 207,
    number: 207,
    pokedex: 133,
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
    },
    artist: 'Hasuno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
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
      EXPANSION.MEWTWO,
    ],
    related: [45, 80, 102, 206, 208, 305, 347, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 208,
    order: 208,
    number: 208,
    pokedex: 133,
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
    },
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
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
      EXPANSION.PIKACHU,
    ],
    related: [45, 80, 102, 206, 207, 305, 347, 392, 418, 498, 248, 358, 609]
  },
  {
    id: 209,
    order: 209,
    number: 209,
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
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sharpen',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Data Scan',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may look at the top card of your deck.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
      ja: '' 
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
    related: [249]
  },
  {
    id: 210,
    order: 210,
    number: 210,
    pokedex: 142,
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
      es: 'Aerodactyl',
      en: 'Aerodactyl',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Primal Wingbeat',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '' 
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
      es: 'Snorlax',
      en: 'Snorlax',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rollout',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
      ja: '' 
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
      es: 'Minccino',
      en: 'Minccino',
      ja: '' 
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tail Smack',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [213],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle.',
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
      EXPANSION.PIKACHU,
      EXPANSION.MEWTWO,
      EXPANSION.CHARIZARD
    ],
    related: [213, 403]
  },
  {
    id: 213,
    order: 213,
    number: 213,
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
    artist: '0313',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won’t tolerate even a speck of the stuff.',
      ja: '' 
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
    related: [212, 403]
  },
  {
    id: 214,
    order: 214,
    number: 214,
    pokedex: 831,
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
      es: 'Wooloo',
      en: 'Wooloo',
      ja: '' 
    },
    artist: 'Yoriyuki Ikegami',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [215],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.',
      ja: '' 
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
      es: 'Dubwool',
      en: 'Dubwool',
      ja: '' 
    },
    artist: 'saino misaki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rolling Tackle',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You’ll start to bounce the moment you set foot on it.',
      ja: '' 
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
          es: '',
          en: 'Helix Fossil',
          ja: '' 
        },
    artist: 'Toyste Beach',
    evolve: [81],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
      es: '',
      en: 'Dome Fossil',
      ja: '' 
    },
    artist: 'Toyste Beach',
    evolve: [158],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
          es: '',
          en: 'Old Amber',
          ja: '' 
        },
    artist: 'Toyste Beach',
    evolve: [210],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
          es: '',
          en: 'Erika',
          ja: '' 
        },
    artist: 'kirisAki',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Heal 50 damage from 1 of your Grass Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Misty',
          ja: '' 
        },
    artist: 'Sanosuke Sakuma',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Choose 1 of your Water Pokémon, and flip a coin until you get tails. For each heads, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Blaine',
          ja: '' 
        },
    artist: 'GOSSAN',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'During this turn, attacks used by your Ninetales, Rapidash, or Magmar do +30 damage to your opponent’s Active Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Koga',
          ja: '' 
        },
    artist: 'Souichirou Gunjima',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Put your Muk or Weezing in the Active Spot into your hand.',
      ja: '' 
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
          es: '',
          en: 'Giovanni',
          ja: '' 
        },
    artist: 'Hideki Ishikawa',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'During this turn, attacks used by your Pokémon do +10 damage to your opponent’s Active Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Brock',
          ja: '' 
        },
    artist: 'Taira Akitsu',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Take 1 Fighting Energy from your Energy Zone and attach it to Golem or Onix.',
      ja: '' 
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
          es: '',
          en: 'Sabrina',
          ja: '' 
        },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
      ja: '' 
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
      es: '',
      en: 'Lt. Surge',
      ja: '' 
    },
    artist: 'nagimiso',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Move all Lightning Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.',
      ja: '' 
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
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Vine Whip',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [2],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
      ja: '' 
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
    artist: 'OKACHEKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Drool',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [13],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.',
      ja: '' 
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
      es: 'Pinsir',
      en: 'Pinsir',
      ja: '' 
    },
    artist: 'Scav',
    attacks: [
      {
        name: {
          es: '',
          en: 'Double Horn',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: {
          es: '',
          en: 'Flip 2 coins. This attack does 50 damage for each heads.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.',
      ja: '' 
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
    artist: 'GIDORA',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
      ja: '' 
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
      es: 'Rapidash',
      en: 'Rapidash',
      ja: '' 
    },
    artist: 'Taira Akitsu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fire Mane',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIRE],
      }
    ],
    evolve: [43],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
      ja: '' 
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
    artist: 'Taira Akitsu',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
      ja: '' 
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
      es: 'Gyarados',
      en: 'Gyarados',
      ja: '' 
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hyper Beam',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'Discard 1 random Energy from your opponent’s Active Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '' 
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
      es: 'Lapras',
      en: 'Lapras',
      ja: '' 
    },
    artist: 'Haru Akasaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hydro Pump',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'If this Pokémon has at least 3 extra Water Energy attached, this attack does 70 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.',
      ja: '' 
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
    artist: 'DOM',
    attacks: [
      {
        name: {
          es: '',
          en: 'Electro Ball',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'The more energy it charges up, the faster it gets. But this also makes it more likely to explode.',
      ja: '' 
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
      es: 'Alakazam',
      en: 'Alakazam',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does 30 more damage for each Energy attached to your opponent’s Active Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.',
      ja: '' 
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
      es: 'Slowpoke',
      en: 'Slowpoke',
      ja: '' 
    },
    artist: 'Miki Tanaka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tail Whap',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [119],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is incredibly slow and dopey. It takes five seconds for it to feel pain when under attack.',
      ja: '' 
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
      es: 'Diglett',
      en: 'Diglett',
      ja: '' 
    },
    artist: 'Shinya Komatsu',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mud-Slap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [140],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.',
      ja: '' 
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
      es: 'Cubone',
      en: 'Cubone',
      ja: '' 
    },
    artist: 'Teeziro',
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
    evolve: [152],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.',
      ja: '' 
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
      es: 'Nidoqueen',
      en: 'Nidoqueen',
      ja: '' 
    },
    artist: 'aoki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Lovestrike',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This attack does 50 more damage for each of your Benched Nidoking.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.',
      ja: '' 
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
      es: 'Nidoking',
      en: 'Nidoking',
      ja: '' 
    },
    artist: 'nagimiso',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Horn',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Your opponent’s Active Pokémon is now Poisoned.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it goes on a rampage, it’s impossible to control. But in the presence of a Nidoqueen it’s lived with for a long time, Nidoking calms down.',
      ja: '' 
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
      es: 'Golbat',
      en: 'Golbat',
      ja: '' 
    },
    artist: 'Tomokazu Komiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.',
      ja: '' 
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
      es: 'Weezing',
      en: 'Weezing',
      ja: '' 
    },
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.DARK],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Gas Leak',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, if this Pokémon is in the Active Spot, you may make your opponent’s Active Pokémon Poisoned',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
      ja: '' 
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
      es: 'Dragonite',
      en: 'Dragonite',
      ja: '' 
    },
    artist: 'Gemi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Draco Meteor',
          ja: '' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: '1 of your opponent’s Pokémon is chosen at random 4 times. For each time a Pokémon was chosen, do 50 damage to it.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is said that somewhere in the ocean lies an island where these gather. Only they live there.',
      ja: '' 
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
      es: 'Pidgeot',
      en: 'Pidgeot',
      ja: '' 
    },
    artist: 'Anesaki Dynamic',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Drive Off',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.',
      ja: '' 
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
    artist: 'Mina Nakai',
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
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.',
      ja: '' 
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
      es: 'Ditto',
      en: 'Ditto',
      ja: '' 
    },
    artist: 'Jerky',
    attacks: [
      {
        name: {
          es: '',
          en: 'Copy Anything',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. If this Pokémon doesn’t have the necessary Energy to use that attack, this attack does nothing.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its transformation ability is perfect. However, if made to laugh, it can’t maintain its disguise.',
      ja: '' 
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tackle',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '' 
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
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sharpen',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Data Scan',
          ja: '' 
        },
      description: {
       es: '',
       en: 'Once during your turn, you may look at the top card of your deck.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.',
      ja: '' 
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
      es: 'Snorlax',
      en: 'Snorlax',
      ja: '' 
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rollout',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.',
      ja: '' 
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
      es: 'Venusaur EX',
      en: 'Venusaur EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Razor Leaf',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Giant Bloom',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Heal 30 damage from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Exeggutor EX',
      en: 'Exeggutor EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Tropical Swing',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.GRASS],
        description: {
       es: '',
       en: 'Flip a coin. If heads, this attack does 40 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Charizard EX',
      en: 'Charizard EX',
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
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Crimson Storm',
          ja: '' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Arcanine EX',
      en: 'Arcanine EX',
      ja: '' 
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Inferno Onrush',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'This Pokémon also does 20 damage to itself.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: '' 
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Inferno Dance',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
       es: '',
       en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heat Blast',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Blastoise EX',
      en: 'Blastoise EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Surf',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      },
      {
        name: {
          es: '',
          en: 'Hydro Bazooka',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'If this Pokémon has at least 2 extra Water Energy attached, this attack does 60 more damage.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Starmie EX',
      en: 'Starmie EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hydro Splash',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Articuno EX',
      en: 'Articuno EX',
      ja: '' 
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ice Wing',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: {
          es: '',
          en: 'Blizzard',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Circle Circuit',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
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
      EXPANSION.PIKACHU,
    ],
    related: [96, 281, 285]
  },
  {
    id: 260,
    order: 260,
    number: 260,
    pokedex: 145,
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
      es: 'Zapdos EX',
      en: 'Zapdos EX',
      ja: '' 
    },
    artist: 'PLANETA Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: {
          es: '',
          en: 'Thundering Hurricane',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Flip 4 coins. This attack does 50 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Gengar EX',
      en: 'Gengar EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spooky Shot',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Shadowy Spellbind',
          ja: '' 
        },
      description: {
       es: '',
       en: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: '' 
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic Sphere',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Psydrive',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Psychic Energy from this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Machamp EX',
      en: 'Machamp EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Punch',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Marowak EX',
      en: 'Marowak EX',
      ja: '' 
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bonemerang',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
        description: {
       es: '',
       en: 'Flip 2 coins. This attack does 80 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Wigglytuff EX',
      en: 'Wigglytuff EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sleepy Song',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
          es: '',
          en: 'Erika',
          ja: '' 
        },
    artist: 'saino misaki',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Heal 50 damage from 1 of your Grass Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Misty',
          ja: '' 
        },
    artist: 'Sanosuke Sakuma',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Choose 1 of your Water Pokémon, and flip a coin until you get tails. For each heads, take a Water Energy from your Energy Zone and attach it to that Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Blaine',
          ja: '' 
        },
    artist: 'GOSSAN',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'During this turn, attacks used by your Ninetales, Rapidash, or Magmar do +30 damage to your opponent’s Active Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Koga',
          ja: '' 
        },
    artist: 'Souichirou Gunjima',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Put your Muk or Weezing in the Active Spot into your hand.',
      ja: '' 
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
          es: '',
          en: 'Giovanni',
          ja: '' 
        },
    artist: 'Hideki Ishikawa',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'During this turn, attacks used by your Pokémon do +10 damage to your opponent’s Active Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Brock',
          ja: '' 
        },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Take 1 Fighting Energy from your Energy Zone and attach it to Golem or Onix.',
      ja: '' 
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
          es: '',
          en: 'Sabrina',
          ja: '' 
        },
    artist: 'GIDORA',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Switch out your opponent’s Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon)',
      ja: '' 
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
          es: '',
          en: 'Lt. Surge',
          ja: '' 
        },
    artist: 'nagimiso',
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Move all Lightning Energy from your Benched Pokémon to your Raichu, Electrode, or Electabuzz in the Active Spot.',
      ja: '' 
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
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: '' 
    },
    artist: 'hncl',
    attacks: [
      {
        name: {
          es: '',
          en: 'Inferno Dance',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
       es: '',
       en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heat Blast',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Articuno EX',
      en: 'Articuno EX',
      ja: '' 
    },
    artist: 'kodama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ice Wing',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
      },
      {
        name: {
          es: '',
          en: 'Blizzard',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'This attack also does 10 damage to each of your opponent’s Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Zapdos EX',
      en: 'Zapdos EX',
      ja: '' 
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: '',
          en: 'Peck',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
      {
        name: {
          es: '',
          en: 'Thundering Hurricane',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'Flip 4 coins. This attack does 50 damage for each heads.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Gengar EX',
      en: 'Gengar EX',
      ja: '' 
    },
    artist: 'NC Empire',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spooky Shot',
          ja: '' 
        },
        damage: 100,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
      },
    ],
    ability: {
      name: {
          es: '',
          en: 'Shadowy Spellbind',
          ja: '' 
        },
      description: {
       es: '',
       en: 'As long as this Pokémon is in the Active Spot, your opponent can’t use any Supporter cards from their hand.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Machamp EX',
      en: 'Machamp EX',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Punch',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT],
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Wigglytuff EX',
      en: 'Wigglytuff EX',
      ja: '' 
    },
    artist: 'Shibuzoh.',
    attacks: [
      {
        name: {
          es: '',
          en: 'Sleepy Song',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '' 
        }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Charizard EX',
      en: 'Charizard EX',
      ja: '' 
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Crimson Storm',
          ja: '' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: '' 
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Circle Circuit',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: '' 
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic Sphere',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Psydrive',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Psychic Energy from this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Mew',
      en: 'Mew',
      ja: '' 
    },
    artist: 'Amelicart',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psy Report',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Your opponent reveals their hand.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: '' 
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
      es: 'Special Mission',
      en: 'Special Mission',
      ja: '' 
    },
    related: [317]
  },
  {
    id: 284,
    order: 284,
    number: 284,
    pokedex: 6,
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
      es: 'Charizard EX',
      en: 'Charizard EX',
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
        damage: 60,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Crimson Storm',
          ja: '' 
        },
        damage: 200,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Fire Energy from this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Pikachu EX',
      en: 'Pikachu EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Circle Circuit',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
       es: '',
       en: 'This attack does 30 damage for each of your Benched Lightning Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Mewtwo EX',
      en: 'Mewtwo EX',
      ja: '' 
    },
    artist: 'PLANETA Mochizuki',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic Sphere',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL],
      },
      {
        name: {
          es: '',
          en: 'Psydrive',
          ja: '' 
        },
        damage: 150,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Discard 2 Psychic Energy from this Pokémon.',
       ja: '' 
     }
      },
    ],
    evolve: [],
    expansion: CardExpansionENUM.GENETIC_APEX,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Exeggcute',
      en: 'Exeggcute',
      ja: '' 
    },
    artist: 'Yuka Morii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Growth Spurt',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Take a Grass Energy from your Energy Zone and attach it to this Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [288],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Though it may look like it’s just a bunch of eggs, it’s a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.',
      ja: '' 
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
      es: 'Exeggutor',
      en: 'Exeggutor',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'This attack does 20 damage for each Energy attached to your opponent\'s Active Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '' 
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
      es: 'Celebi EX',
      en: 'Celebi EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Powerful Bloom',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
    artist: 'Kagemaru Himeno',
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
    evolve: [291],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Being exposed to sunlight makes its movements swiftier. It uses vines more adeptly than its hands.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [291, 292, 356, 399]
  },
  {
    id: 291,
    order: 291,
    number: 5,
    pokedex: 496,
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
      es: 'Servine',
      en: 'Servine',
      ja: '' 
    },
    artist: 'Shigenori Nagishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Vine Whip',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
      }
    ],
    evolve: [292],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.',
      ja: '' 
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
      es: 'Serperior',
      en: 'Serperior',
      ja: '' 
    },
    artist: 'Yoshioka',
    attacks: [
      {
        name: {
          es: '',
          en: 'Solar Beam',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
        es: '',
        en: 'Jungle Totem',
        ja: '' 
      },
      description: {
        es: '',
        en: 'Each Grass Energy attached to your Grass Pokémon provides 2 Grass Energy. This effect doesn\'t stack.',
        ja: '' 
      }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
      ja: ''
    },
    health: 110,
    rarity: CardRarityENUM.RARE,
    retreat: 1,
    stage: CardStageENUM.TWO,
    element: PokemonTypeENUM.GRASS,
    weak: PokemonTypeENUM.FIRE,
    isEX: false,
    condition: [],
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
      es: 'Morelull',
      en: 'Morelull',
      ja: '' 
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS]
      }
    ],
    evolve: [294],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Pokémon living in the forest eat the delicious caps on Morelull\'s head. The caps regrow overnight.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [294]
  },
  {
    id: 294,
    order: 294,
    number: 8,
    pokedex: 756,
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
      es: 'Shiinotic',
      en: 'Shiinotic',
      ja: '' 
    },
    artist: 'Mizue',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flickering Spores',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.GRASS],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.',
      ja: '' 
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
      es: 'Dhelmise',
      en: 'Dhelmise',
      ja: '' 
    },
    artist: 'Hasuno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Energy Whip',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.GRASS],
        description: {
         es: '',
         en: 'If this Pokémon has at least 3 extra Grass Energy attached, this attack does 70 more damage.',
         ja: '' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.',
      ja: '' 
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
      es: 'Ponyta',
      en: 'Ponyta',
      ja: '' 
    },
    artist: 'Tomokazu Kamiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Stomp',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.FIRE],
        description: {
         es: '',
         en: 'Flip a coin if heads, this attack does 30 more damage.',
         ja: '' 
       }
      }
    ],
    evolve: [43],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It can’t run properly when it’s newly born. As it races around with others of its kind, its legs grow stronger.',
      ja: '' 
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
      es: 'Rapidash',
      en: 'Rapidash',
      ja: '' 
    },
    artist: 'AKIRA EGAWA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rising Lunge',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL],
        description: {
         es: '',
         en: 'Flip a coin. If heads, this attack does 60 more damage.',
         ja: '' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.',
      ja: '' 
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
      es: 'Magmar',
      en: 'Magmar',
      ja: '' 
    },
    artist: 'sui',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fire Blast',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.FIRE],
        description: {
         es: '',
         en: 'Discard 2 Fire Energy from this Pokémon.',
         ja: '' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.',
      ja: '' 
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
      es: 'Larvesta',
      en: 'Larvesta',
      ja: '' 
    },
    artist: 'kawayoo',
    attacks: [
      {
        name: {
          es: '',
          en: 'Combustion',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [300],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This Pokémon was called the Larve That Stole the Sun. The fire Larvesta spouts from its horns can cut right through a sheet of iron.',
      ja: '' 
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
    artist: 'DOM',
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
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its burning body causes it to be unpopular in hot parts of the world, but in cold ones, Volcarona is revered as an embodiment of the sun.',
      ja: '' 
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
      es: 'Salandit',
      en: 'Salandit',
      ja: '' 
    },
    artist: 'Naoki Saito',
    attacks: [
      {
        name: {
          es: '',
          en: 'Venoshock',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'If your opponent\'s Active Pokémon is Poisoned, this attack does 40 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [50],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
      ja: '' 
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
      es: 'Salazzle',
      en: 'Salazzle',
      ja: '' 
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Claws',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIRE],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Poisoned.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Salazzle makes its opponents light-headed with poisonous gas, then captivates them with alluring movements to turn them into loyal servants.',
      ja: '' 
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
      es: 'Magikarp',
      en: 'Magikarp',
      ja: '' 
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leap Out',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.WATER],
        description: {
       es: '',
       en: 'Switch this Pokémon with 1 of your Benched Pokémon.',
       ja: '' 
     }
      }
    ],
    evolve: [78],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'An underpowered, pathetic Pokémon. It may jump high on rare occasions, but usually not more than seven feet.',
      ja: '' 
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
      es: 'Gyarados EX',
      en: 'Gyarados EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rampaging Whirlpool',
          ja: '' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent\'s',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '' 
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
      es: 'Vaporeon',
      en: 'Vaporeon',
      ja: '' 
    },
    artist: 'LINNE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wave Splash',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Wash Out',
          ja: '' 
        },
      description: {
       es: '',
       en: 'As often as you like during your turn, you may move a Water Energy from 1 of your Benched Water Pokémon to your Active Water Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
      ja: '' 
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
    artist: 'Sekio',
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
    evolve: [307],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'The line running down its side can store sunlight. It shines vividly at night.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [307]
  },
  {
    id: 307,
    order: 307,
    number: 21,
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
    artist: 'Sekio',
    attacks: [
      {
        name: {
          es: '',
          en: 'Aqua Liner',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'This attack does 50 damage to 1 of your opponent\'s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'With its shining light, it lures its prey close. However, the light also happens to attract ferocious fish Pokémon—its natural predators.',
      ja: '' 
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
      es: 'Chewtle',
      en: 'Chewtle',
      ja: '' 
    },
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bite',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [309],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its large front tooth is still growing in. When the tooth itches, this Pokémon will bite another Chewtle’s horn, and the two Pokémon will tussle.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [309]
  },
  {
    id: 309,
    order: 309,
    number: 23,
    pokedex: 834,
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
      es: 'Drednaw',
      en: 'Drednaw',
      ja: '' 
    },
    artist: 'nisimono',
    attacks: [
      {
        name: {
          es: '',
          en: 'Crunch',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER],
        description: {
          es: '',
          en: 'Flip a coin. If heads, discard a random Energy from your opponent\'s Active Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its massive, jagged teeth can crush a boulder in a single bite. This Pokémon has an extremely vicious disposition.',
      ja: '' 
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
      es: 'Cramorant',
      en: 'Cramorant',
      ja: '' 
    },
    artist: 'Jerky',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dive',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It’s so strong that it can knock out some opponents in a single hit, but it also may forget what it’s battling midfight.',
      ja: '' 
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
      es: 'Pikachu',
      en: 'Pikachu',
      ja: '' 
    },
    artist: 'Naoya Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Circle Circuit',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
         es: '',
         en: 'This attack does 10 damage for each of your Benched Lightning Pokémon.',
         ja: '' 
       }
      }
    ],
    evolve: [312],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
      ja: '' 
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
      es: 'Raichu',
      en: 'Raichu',
      ja: '' 
    },
    artist: 'hncl',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gigashock',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'This attack does 20 damage to each of your opponent\'s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its tail discharges electricity into the ground, protecting it from getting shocked.',
      ja: '' 
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
      es: 'Electabuzz',
      en: 'Electabuzz',
      ja: '' 
    },
    artist: 'Ken Sugimori',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Spear',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'This attack does 40 damage to 1 of your opponent\'s Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
      ja: '' 
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
      es: 'Joltik',
      en: 'Joltik',
      ja: '' 
    },
    artist: 'MINAMINAMI Take',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bug Bite',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.ELECTRIC]
      }
    ],
    evolve: [315],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Joltik can be found clinging to other Pokémon. It’s soaking up static electricity because it can’t produce a charge on its own.',
      ja: '' 
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
      es: 'Galvantula',
      en: 'Galvantula',
      ja: '' 
    },
    artist: 'Mitsuhiro Arita',
    attacks: [
      {
        name: {
          es: '',
          en: 'Electroweb',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.ELECTRIC, PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'During your opponent\'s next turn, the Defending Pokémon can\'t retreat.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.',
      ja: '' 
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
      es: 'Dedenne',
      en: 'Dedenne',
      ja: '' 
    },
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Shock',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'Flip a coin. If heads, your opponent\'s Active Pokémon is now Paralyzed.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.',
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
      es: 'Mew',
      en: 'Mew',
      ja: '' 
    },
    artist: 'Saya Tsuruta',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psy Report',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
         es: '',
         en: 'Your opponent reveals their hand.',
         ja: '' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: '' 
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
      es: 'Mew EX',
      en: 'Mew EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psyshot',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: '',
          en: 'Genome Hacking',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: '' 
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
      es: 'Sigilyph',
      en: 'Sigilyph',
      ja: '' 
    },
    artist: 'Shigenori Nagishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Spike Draw',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
       es: '',
       en: 'Draw a card.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Psychic power allows these Pokémon to fly. Some say they were the guardians of an ancient city. Others say they were the guardians emissaries.',
      ja: '' 
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
      es: 'Elgyem',
      en: 'Elgyem',
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
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC],
      }
    ],
    evolve: [321],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'If this Pokémon stands near a TV, strange scenery will appear on the screen. That scenery is said to be from its home.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [321]
  },
  {
    id: 321,
    order: 321,
    number: 35,
    pokedex: 606,
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
      es: 'Beheeyem',
      en: 'Beheeyem',
      ja: '' 
    },
    artist: 'sowsow',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mind Jack',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: '',
          en: 'This attack does 20 more damage for each of your opponent\'s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.',
      ja: '' 
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
      es: 'Flabébé',
      en: 'Flabébé',
      ja: '' 
    },
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Hypnotic Gaze',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Asleep.',
          ja: '' 
        }
      }
    ],
    evolve: [323],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This Pokémon can draw forth the power hidden within blooming wild flowers. It is particularly fond of red flowers.',
      ja: '' 
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
      es: 'Floette',
      en: 'Floette',
      ja: '' 
    },
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Leaf Drain',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.PSYCHIC],
        description: {
         es: '',
         en: 'Heal 10 damage from this Pokémon.',
         ja: '' 
       }
      }
    ],
    evolve: [324],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This Pokémon draws forth what power is left in withered flowers to make them healthy again. It holds a red flower.',
      ja: '' 
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
      es: 'Florges',
      en: 'Florges',
      ja: '' 
    },
    artist: 'Cona Nitanda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Bloomshine',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.PSYCHIC],
        description: {
         es: '',
         en: 'Heal 20 damage from each of your Pokémon.',
         ja: '' 
       }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This Pokémon creates an impressive flower garden in its territory. It draws forth the power of the red flowers around its neck.',
      ja: '' 
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
      es: 'Swirlix',
      en: 'Swirlix',
      ja: '' 
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fairy Wind',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      }
    ],
    evolve: [326],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It eats its own weight in sugar every day. If it doesn’t get enough sugar, it becomes incredibly grumpy.',
      ja: '' 
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
      es: 'Slurpuff',
      en: 'Slurpuff',
      ja: '' 
    },
    artist: 'Kagemaru Himeno',
    attacks: [
      {
        name: {
          es: '',
          en: 'Magical Shot',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.PSYCHIC, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'By taking in a person’s scent, it can sniff out their mental and physical condition. It’s hoped that this skill will have many medical applications.',
      ja: '' 
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
      es: 'Mankey',
      en: 'Mankey',
      ja: '' 
    },
    artist: 'Akira Komayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Focus Fist',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT],
        description: {
         es: '',
         en: 'Flip a coin. If tails, this attack does nothing.',
         ja: '' 
       }
      }
    ],
    evolve: [328],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
      ja: '' 
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
      es: 'Primeape',
      en: 'Primeape',
      ja: '' 
    },
    artist: 'Taiga Kamiya',
    attacks: [
      {
        name: {
          es: '',
          en: 'Punch',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
      ja: '' 
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
      es: 'Geodude',
      en: 'Geodude',
      ja: '' 
    },
    artist: 'GOSSAN',
    attacks: [
      {
        name: {
          es: '',
          en: 'Light Punch',
          ja: '' 
        },
        damage: 30,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [330],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [147, 148, 149, 330, 331]
  },
  {
    id: 330,
    order: 330,
    number: 44,
    pokedex: 75,
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
      es: 'Graveler',
      en: 'Graveler',
      ja: '' 
    },
    artist: 'Ayaka Yoshida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Lunge Out',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [331],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It climbs up cliffs as it heads toward the peak of a mountain. As soon as it reaches the summit, it rolls back down the way it came.',
      ja: '' 
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
      es: 'Golem',
      en: 'Golem',
      ja: '' 
    },
    artist: 'Masakazu Fukuda',
    attacks: [
      {
        name: {
          es: '',
          en: 'Guard Press',
          ja: '' 
        },
        damage: 120,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'During your opponent\'s next turn, this Pokémon takes -30 damage from attacks.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.',
      ja: '' 
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
      es: 'Aerodactyl EX',
      en: 'Aerodactyl EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Land Crush',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Primeval Law',
          ja: '' 
        },
      description: {
          es: '',
          en: 'Your opponent can\'t play any Pokémon from their hand to evolve their Active Pokémon.',
          ja: '' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '' 
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
      es: 'Marshadow',
      en: 'Marshadow',
      ja: '' 
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Revenge',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'If any of your Pokémon were Knocked Out by damage from an attack during your opponent\'s last turn, this attack does 60 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.',
      ja: '' 
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
      es: 'Stonjourner',
      en: 'Stonjourner',
      ja: '' 
    },
    artist: 'Teeziro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mega Kick',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT, PokemonTypeENUM.FIGHT]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'The elemental composition of the rocks that form its body were found to match the bedrock of a land far away from this Pokémon’s habitat.',
      ja: '' 
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
      es: 'Koffing',
      en: 'Koffing',
      ja: '' 
    },
    artist: 'Naoyo Kimura',
    attacks: [
      {
        name: {
          es: '',
          en: 'Division',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.DARK],
        description: {
       es: '',
       en: 'Put 1 random Koffing from your deck onto your Bench.',
       ja: '' 
     }
      }
    ],
    evolve: [336],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.',
      ja: '' 
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
      es: 'Weezing',
      en: 'Weezing',
      ja: '' 
    },
    artist: 'Mousho',
    attacks: [
      {
        name: {
          es: '',
          en: 'Smokescreen',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.DARK],
        description: {
          es: '',
          en: 'During your opponent\'s next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn\'t happen.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.',
      ja: '' 
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
      es: 'Purrloin',
      en: 'Purrloin',
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
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [338],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit.',
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
      EXPANSION.MYTHICAL_ISLAND
    ],
    related: [338]
  },
  {
    id: 338,
    order: 338,
    number: 52,
    pokedex: 510,
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
      es: 'Liepard',
      en: 'Liepard',
      ja: '' 
    },
    artist: 'GIDORA',
    attacks: [
      {
        name: {
          es: '',
          en: 'Slash',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Don’t be fooled by its gorgeous fur and elegant figure. This is a moody and vicious Pokémon.',
      ja: '' 
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
      es: 'Venipede',
      en: 'Venipede',
      ja: '' 
    },
    artist: '	Yukiko Baba',
    attacks: [
      {
        name: {
          es: '',
          en: 'Ram',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK]
      }
    ],
    evolve: [340],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.',
      ja: '' 
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
      es: 'Whirlipede',
      en: 'Whirlipede',
      ja: '' 
    },
    artist: 'Shin Nagasawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Poison Sting',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.DARK],
        description: {
          es: '',
          en: 'Your opponent\'s Active Pokémon is now Poisoned.',
          ja: '' 
        }
      }
    ],
    evolve: [341],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.',
      ja: '' 
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
      es: 'Scolipede',
      en: 'Scolipede',
      ja: '' 
    },
    artist: '5ban Graphics',
    attacks: [
      {
        name: {
          es: '',
          en: 'Venoshock',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.DARK, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'If your opponent\'s Active Pokémon is Poisoned, this attack does 50 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: '	Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws’ toxic spikes.',
      ja: '' 
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
      es: 'Druddigon',
      en: 'Druddigon',
      ja: '' 
    },
    artist: 'Ryota Murayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Dragon Claw',
          ja: '' 
        },
        damage: 90,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Rough Skin',
          ja: '' 
        },
      description: {
          es: '',
          en: 'If this Pokémon is in the Active Spot and is damaged by an attack from your opponent\'s Pokémon, do 20 damage to the Attacking Pokémon.',
          ja: '' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Druddigon lives in caves, but it never skips sunbathing—it won’t be able to move if its body gets too cold.',
      ja: '' 
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
      es: 'Pidgey',
      en: 'Pidgey',
      ja: '' 
    },
    artist: 'Shigenori Negishi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Flap',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [344],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.',
      ja: '' 
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
      es: 'Pidgeotto',
      en: 'Pidgeotto',
      ja: '' 
    },
    artist: 'Taiga Kayama',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wing Attack',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [345],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.',
      ja: '' 
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
      es: 'Pidgeot EX',
      en: 'Pidgeot EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scattering Cyclone',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'This attack does 20 more damage for each of your opponent\'s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Tauros',
      en: 'Tauros',
      ja: '' 
    },
    artist: 'KEIICHIRO ITO',
    attacks: [
      {
        name: {
          es: '',
          en: 'Fighting Tackle',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'If your opponent\'s Active Pokémon is a Pokémon ex, this attack does 80 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'When Tauros begins whipping itself with its tails, it’s a warning that the Pokémon is about to charge with astounding speed.',
      ja: '' 
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
    },
    artist: 'Hitoshi Ariga',
    attacks: [
      {
        name: {
          es: '',
          en: 'Continuous Steps',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
         es: '',
         en: 'Flip a coin until you get tails. This attack does 20 more damage for each heads.',
         ja: '' 
       }
      }
    ],
    evolve: [45, 80, 102, 392, 418],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
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
    artist: 'Masako Tomii',
    attacks: [
      {
        name: {
          es: '',
          en: 'Mimic',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Shuffle your hand into your deck. Draw a card for each card in your opponent\'s hand.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It mimics the cries of other Pokémon to trick them into thinking it’s one of them. This way they won’t attack it.',
      ja: '' 
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
          es: '',
          en: 'Old Amber',
          ja: '' 
        },
    artist: 'Toyste Beach',
    evolve: [210],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
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
          es: '',
          en: 'Pokémon Flute',
          ja: '' 
        },
    artist: 'Toyste Beach',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Put a Basic Pokémon from your opponent’s discard pile onto their Bench.',
      ja: '' 
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
          es: '',
          en: 'Mythical Slab',
          ja: '' 
        },
    artist: 'AYUMI ODASHIMA',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Look at the top card of your deck. If that card is a Psychic Pokémon, put it into your hand. If it is not a Psychic Pokémon, put it on the bottom of your deck.',
      ja: '' 
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
          es: '',
          en: 'Budding Expeditioner',
          ja: '' 
        },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Put your Mew EX in the Active Spot into your hand.',
      ja: '' 
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
          es: '',
          en: 'Blue',
          ja: '' 
        },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'During your opponent’s next turn, all of your Pokémon take −10 damage from attacks from your opponent’s Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Leaf',
          ja: '' 
        },
    artist: 'En Morikura',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: '	During this turn, the Retreat Cost of your Active Pokémon is 2 less.',
      ja: '' 
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
      es: 'Exeggutor',
      en: 'Exeggutor',
      ja: '' 
    },
    artist: 'Gapao',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psychic',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'This attack does 20 damage for each Energy attached to your opponent\'s Active Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'Each of Exeggutor’s three heads is thinking different thoughts. The three don’t seem to be very interested in one another.',
      ja: '' 
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
      es: 'Serperior',
      en: 'Serperior',
      ja: '' 
    },
    artist: 'rika',
    attacks: [
      {
        name: {
          es: '',
          en: 'Solar Beam',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
        es: '',
        en: 'Jungle Totem',
        ja: '' 
      },
      description: {
        es: '',
        en: 'Each Grass Energy attached to your Grass Pokémon provides 2 Grass Energy. This effect doesn\'t stack.',
        ja: '' 
      }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: "It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
      ja: ''
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
      es: 'Salandit',
      en: 'Salandit',
      ja: '' 
    },
    artist: 'Nurikabe',
    attacks: [
      {
        name: {
          es: '',
          en: 'Venoshock',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'If your opponent\'s Active Pokémon is Poisoned, this attack does 40 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [50],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.',
      ja: '' 
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
      es: 'Vaporeon',
      en: 'Vaporeon',
      ja: '' 
    },
    artist: 'aspara',
    attacks: [
      {
        name: {
          es: '',
          en: 'Wave Splash',
          ja: '' 
        },
        damage: 60,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Wash Out',
          ja: '' 
        },
      description: {
       es: '',
       en: 'As often as you like during your turn, you may move a Water Energy from 1 of your Benched Water Pokémon to your Active Water Pokémon.',
       ja: '' 
     }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It lives close to water. Its long tail is ridged with a fin, which is often mistaken for a mermaid’s.',
      ja: '' 
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
      es: 'Dedenne',
      en: 'Dedenne',
      ja: '' 
    },
    artist: 'Yuu Nishida',
    attacks: [
      {
        name: {
          es: '',
          en: 'Thunder Shock',
          ja: '' 
        },
        damage: 10,
        energy: [PokemonTypeENUM.ELECTRIC],
        description: {
          es: '',
          en: 'Flip a coin. If heads, your opponent\'s Active Pokémon is now Paralyzed.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It’s small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people’s homes and charge itself.',
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
      es: 'Marshadow',
      en: 'Marshadow',
      ja: '' 
    },
    artist: 'OKACHEKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Revenge',
          ja: '' 
        },
        damage: 40,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'If any of your Pokémon were Knocked Out by damage from an attack during your opponent\'s last turn, this attack does 60 more damage.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'It slips into the shadows of others and mimics their powers and movements. As it improves, it becomes stronger than those it’s imitating.',
      ja: '' 
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
      es: 'Celebi EX',
      en: 'Celebi EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Powerful Bloom',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Gyarados EX',
      en: 'Gyarados EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Rampaging Whirlpool',
          ja: '' 
        },
        damage: 140,
        energy: [PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.WATER, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent\'s',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.',
      ja: '' 
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
      es: 'Mew EX',
      en: 'Mew EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psyshot',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: '',
          en: 'Genome Hacking',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: '' 
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
      es: 'Aerodactyl EX',
      en: 'Aerodactyl EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Land Crush',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Primeval Law',
          ja: '' 
        },
      description: {
        es: '',
        en: 'Your opponent can\'t play any Pokémon from their hand to evolve their Active Pokémon.',
        ja: '' 
      }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '' 
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
      es: 'Pidgeot EX',
      en: 'Pidgeot EX',
      ja: '' 
    },
    artist: 'PLANETA CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Scattering Cyclone',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'This attack does 20 more damage for each of your opponent\'s Benched Pokémon.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
          es: '',
          en: 'Budding Expeditioner',
          ja: '' 
        },
    artist: 'Yuu Nishida',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Put your Mew ex in the Active Spot into your hand.',
      ja: '' 
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
          es: '',
          en: 'Blue',
          ja: '' 
        },
    artist: 'Ryuta Fuse',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'During your opponent’s next turn, all of your Pokémon take −10 damage from attacks from your opponent’s Pokémon.',
      ja: '' 
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
          es: '',
          en: 'Leaf',
          ja: '' 
        },
    artist: 'En Morikura',
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: '	During this turn, the Retreat Cost of your Active Pokémon is 2 less.',
      ja: '' 
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
      es: 'Mew EX',
      en: 'Mew EX',
      ja: '' 
    },
    artist: 'HYOGONOSUKE',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psyshot',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: '',
          en: 'Genome Hacking',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: '' 
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
      es: 'Aerodactyl EX',
      en: 'Aerodactyl EX',
      ja: '' 
    },
    artist: 'danciao',
    attacks: [
      {
        name: {
          es: '',
          en: 'Land Crush',
          ja: '' 
        },
        damage: 80,
        energy: [PokemonTypeENUM.FIGHT, PokemonTypeENUM.NORMAL]
      }
    ],
    ability: {
      name: {
          es: '',
          en: 'Primeval Law',
          ja: '' 
        },
      description: {
          es: '',
          en: 'Your opponent can\'t play any Pokémon from their hand to evolve their Active Pokémon.',
          ja: '' 
        }
    },
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.',
      ja: '' 
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
      es: 'Celebi EX',
      en: 'Celebi EX',
      ja: '' 
    },
    artist: 'kantaro',
    attacks: [
      {
        name: {
          es: '',
          en: 'Powerful Bloom',
          ja: '' 
        },
        damage: 50,
        energy: [PokemonTypeENUM.GRASS, PokemonTypeENUM.NORMAL],
        description: {
       es: '',
       en: 'Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.',
       ja: '' 
     }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Mew EX',
      en: 'Mew EX',
      ja: '' 
    },
    artist: 'Planeta CG Works',
    attacks: [
      {
        name: {
          es: '',
          en: 'Psyshot',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.PSYCHIC]
      },
      {
        name: {
          es: '',
          en: 'Genome Hacking',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL],
        description: {
          es: '',
          en: 'Choose 1 of your opponent\'s Active Pokémon\'s attacks and use it as this attack.',
          ja: '' 
        }
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.MYTHICAL_ISLAND,
    series: CardExpansionTypeENUM.A1A,
    flavor: {
      es: '',
      en: 'Because it can use all kinds of moves, many scientists believe Mew to be the ancestor of Pokémon.',
      ja: '' 
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
      es: 'Magmar',
      en: 'Magmar',
      ja: '' 
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
      es: 'Electabuzz',
      en: 'Electabuzz',
      ja: '' 
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
      es: '',
      en: 'Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.',
      ja: '' 
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
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
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
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
    stage: CardStageENUM.ITEM,
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
      es: 'Pikachu',
      en: 'Pikachu',
      ja: '' 
    },
    artist: 'Atsushi Furusawa',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
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
      EXPANSION.PREMIUM
    ],
    extra: {
      es: 'Premium Pass',
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
      es: 'Pikachu',
      en: 'Pikachu',
      ja: '' 
    },
    artist: 'Kouki Saitou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
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
      EXPANSION.PROMO_A1,
    ],
    extra: {
      es: 'Promo Pack',
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
      es: 'Mankey',
      en: 'Mankey',
      ja: '' 
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
      es: '',
      en: 'It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.',
      ja: '' 
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
      es: 'Wonder Pick',
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
      es: 'Moltres EX',
      en: 'Moltres EX',
      ja: '' 
    },
    artist: 'PLANETA Igarashi',
    attacks: [
      {
        name: {
          es: '',
          en: 'Inferno Dance',
          ja: '' 
        },
        damage: 0,
        energy: [PokemonTypeENUM.FIRE],
        description: {
       es: '',
       en: 'Flip 3 coins. Take an amount of Fire Energy from your Energy Zone equal to the number of heads and attach it to your Benched Fire Pokémon in any way you like.',
       ja: '' 
     }
      },
      {
        name: {
          es: '',
          en: 'Heat Blast',
          ja: '' 
        },
        damage: 70,
        energy: [PokemonTypeENUM.FIRE, PokemonTypeENUM.NORMAL, PokemonTypeENUM.NORMAL]
      }
    ],
    evolve: [],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: '',
      ja: '' 
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
      es: 'Premium Pass',
      en: 'Premium Pass',
      ja: '' 
    },
  },
  {
    id: 605,
    order: 605,
    number: 26,
    pokedex: 25,
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
      es: 'Pikachu',
      en: 'Pikachu',
      ja: '' 
    },
    artist: 'Kouki Saifou',
    attacks: [
      {
        name: {
          es: '',
          en: 'Gnaw',
          ja: '' 
        },
        damage: 20,
        energy: [PokemonTypeENUM.ELECTRIC],
      },
    ],
    evolve: [95],
    expansion: CardExpansionENUM.PROMO_A,
    series: CardExpansionTypeENUM.A1,
    flavor: {
      es: '',
      en: 'When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.',
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
      EXPANSION.SPECIAL_MISSION,
    ],
    extra: {
      es: 'Special Event',
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
      es: 'Eevee',
      en: 'Eevee',
      ja: '' 
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
      es: '',
      en: 'Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.',
      ja: '' 
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