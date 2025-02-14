"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROMANIZATION_SYSTEM = exports.ROMAJI_TABLE = exports.KATAKANA_START = exports.KATAKANA_SHIFTABLE_START = exports.KATAKANA_SHIFTABLE_END = exports.KATAKANA_HIRAGANA_SHIFT = exports.KATAKANA_END = exports.HIRAGANA_START = exports.HIRAGANA_SHIFTABLE_START = exports.HIRAGANA_SHIFTABLE_END = exports.HIRAGANA_KATAKANA_SHIFT = exports.HIRAGANA_END = exports.CJK_START = exports.CJK_EXT_B_START = exports.CJK_EXT_B_END = exports.CJK_EXT_A_START = exports.CJK_EXT_A_END = exports.CJK_END = void 0;
const HIRAGANA_START = 0x3041;
exports.HIRAGANA_START = HIRAGANA_START;
const HIRAGANA_END = 0x3096;
exports.HIRAGANA_END = HIRAGANA_END;
const HIRAGANA_SHIFTABLE_START = 0x3041;
exports.HIRAGANA_SHIFTABLE_START = HIRAGANA_SHIFTABLE_START;
const HIRAGANA_SHIFTABLE_END = 0x3096;
exports.HIRAGANA_SHIFTABLE_END = HIRAGANA_SHIFTABLE_END;
const KATAKANA_START = 0x30a1;
exports.KATAKANA_START = KATAKANA_START;
const KATAKANA_END = 0x30fc;
exports.KATAKANA_END = KATAKANA_END;
const KATAKANA_SHIFTABLE_START = 0x30a1;
exports.KATAKANA_SHIFTABLE_START = KATAKANA_SHIFTABLE_START;
const KATAKANA_SHIFTABLE_END = 0x30f6;
exports.KATAKANA_SHIFTABLE_END = KATAKANA_SHIFTABLE_END;
const CJK_START = 0x4e00;
exports.CJK_START = CJK_START;
const CJK_END = 0x9fff;
exports.CJK_END = CJK_END;
const CJK_EXT_A_START = 0x3400;
exports.CJK_EXT_A_START = CJK_EXT_A_START;
const CJK_EXT_A_END = 0x4DBF;
exports.CJK_EXT_A_END = CJK_EXT_A_END;
const CJK_EXT_B_START = 0x20000;
exports.CJK_EXT_B_START = CJK_EXT_B_START;
const CJK_EXT_B_END = 0x2A6DF;
exports.CJK_EXT_B_END = CJK_EXT_B_END;
const HIRAGANA_KATAKANA_SHIFT = 0x30a1 - 0x3041;
exports.HIRAGANA_KATAKANA_SHIFT = HIRAGANA_KATAKANA_SHIFT;
const KATAKANA_HIRAGANA_SHIFT = 0x3041 - 0x30a1;
exports.KATAKANA_HIRAGANA_SHIFT = KATAKANA_HIRAGANA_SHIFT;
const ROMANIZATION_SYSTEM = {
  NIPPON: "nippon",
  PASSPORT: "passport",
  HEPBURN: "hepburn"
};
exports.ROMANIZATION_SYSTEM = ROMANIZATION_SYSTEM;
const ROMAJI_TABLE = {
  nippon: {
    // 数字と記号
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "０": "0",
    "！": "!",
    "“": "\"",
    "”": "\"",
    "＃": "#",
    "＄": "$",
    "％": "%",
    "＆": "&",
    "’": "'",
    "（": "(",
    "）": ")",
    "＝": "=",
    "～": "~",
    "｜": "|",
    "＠": "@",
    "‘": "`",
    "＋": "+",
    "＊": "*",
    "；": ";",
    "：": ":",
    "＜": "<",
    "＞": ">",
    "、": ",",
    "。": ".",
    "／": "/",
    "？": "?",
    "＿": "_",
    "・": "･",
    "「": "\"",
    "」": "\"",
    "｛": "{",
    "｝": "}",
    "￥": "\\",
    "＾": "^",
    // 直音-清音(ア～ノ)
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    カ: "ka",
    キ: "ki",
    ク: "ku",
    ケ: "ke",
    コ: "ko",
    さ: "sa",
    し: "si",
    す: "su",
    せ: "se",
    そ: "so",
    サ: "sa",
    シ: "si",
    ス: "su",
    セ: "se",
    ソ: "so",
    た: "ta",
    ち: "ti",
    つ: "tu",
    て: "te",
    と: "to",
    タ: "ta",
    チ: "ti",
    ツ: "tu",
    テ: "te",
    ト: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    ナ: "na",
    ニ: "ni",
    ヌ: "nu",
    ネ: "ne",
    ノ: "no",
    // 直音-清音(ハ～ヲ)
    は: "ha",
    ひ: "hi",
    ふ: "hu",
    へ: "he",
    ほ: "ho",
    ハ: "ha",
    ヒ: "hi",
    フ: "hu",
    ヘ: "he",
    ホ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    マ: "ma",
    ミ: "mi",
    ム: "mu",
    メ: "me",
    モ: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ヤ: "ya",
    ユ: "yu",
    ヨ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    ラ: "ra",
    リ: "ri",
    ル: "ru",
    レ: "re",
    ロ: "ro",
    わ: "wa",
    ゐ: "wi",
    ゑ: "we",
    を: "wo",
    ワ: "wa",
    ヰ: "wi",
    ヱ: "we",
    ヲ: "wo",
    // 直音-濁音(ガ～ボ)、半濁音(パ～ポ)
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ガ: "ga",
    ギ: "gi",
    グ: "gu",
    ゲ: "ge",
    ゴ: "go",
    ざ: "za",
    じ: "zi",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    ザ: "za",
    ジ: "zi",
    ズ: "zu",
    ゼ: "ze",
    ゾ: "zo",
    だ: "da",
    ぢ: "di",
    づ: "du",
    で: "de",
    ど: "do",
    ダ: "da",
    ヂ: "di",
    ヅ: "du",
    デ: "de",
    ド: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    バ: "ba",
    ビ: "bi",
    ブ: "bu",
    ベ: "be",
    ボ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    パ: "pa",
    ピ: "pi",
    プ: "pu",
    ペ: "pe",
    ポ: "po",
    // 拗音-清音(キャ～リョ)
    きゃ: "kya",
    きゅ: "kyu",
    きょ: "kyo",
    しゃ: "sya",
    しゅ: "syu",
    しょ: "syo",
    ちゃ: "tya",
    ちゅ: "tyu",
    ちょ: "tyo",
    にゃ: "nya",
    にゅ: "nyu",
    にょ: "nyo",
    ひゃ: "hya",
    ひゅ: "hyu",
    ひょ: "hyo",
    みゃ: "mya",
    みゅ: "myu",
    みょ: "myo",
    りゃ: "rya",
    りゅ: "ryu",
    りょ: "ryo",
    キャ: "kya",
    キュ: "kyu",
    キョ: "kyo",
    シャ: "sya",
    シュ: "syu",
    ショ: "syo",
    チャ: "tya",
    チュ: "tyu",
    チョ: "tyo",
    ニャ: "nya",
    ニュ: "nyu",
    ニョ: "nyo",
    ヒャ: "hya",
    ヒュ: "hyu",
    ヒョ: "hyo",
    ミャ: "mya",
    ミュ: "myu",
    ミョ: "myo",
    リャ: "rya",
    リュ: "ryu",
    リョ: "ryo",
    // 拗音-濁音(ギャ～ビョ)、半濁音(ピャ～ピョ)、合拗音(クヮ、グヮ)
    ぎゃ: "gya",
    ぎゅ: "gyu",
    ぎょ: "gyo",
    じゃ: "zya",
    じゅ: "zyu",
    じょ: "zyo",
    ぢゃ: "dya",
    ぢゅ: "dyu",
    ぢょ: "dyo",
    びゃ: "bya",
    びゅ: "byu",
    びょ: "byo",
    ぴゃ: "pya",
    ぴゅ: "pyu",
    ぴょ: "pyo",
    くゎ: "kwa",
    ぐゎ: "gwa",
    ギャ: "gya",
    ギュ: "gyu",
    ギョ: "gyo",
    ジャ: "zya",
    ジュ: "zyu",
    ジョ: "zyo",
    ヂャ: "dya",
    ヂュ: "dyu",
    ヂョ: "dyo",
    ビャ: "bya",
    ビュ: "byu",
    ビョ: "byo",
    ピャ: "pya",
    ピュ: "pyu",
    ピョ: "pyo",
    クヮ: "kwa",
    グヮ: "gwa",
    // 小書きの仮名、符号
    ぁ: "a",
    ぃ: "i",
    ぅ: "u",
    ぇ: "e",
    ぉ: "o",
    ゃ: "ya",
    ゅ: "yu",
    ょ: "yo",
    ゎ: "wa",
    ァ: "a",
    ィ: "i",
    ゥ: "u",
    ェ: "e",
    ォ: "o",
    ャ: "ya",
    ュ: "yu",
    ョ: "yo",
    ヮ: "wa",
    ヵ: "ka",
    ヶ: "ke",
    ん: "n",
    ン: "n",
    // ー: "",
    "　": " ",
    // 外来音(イェ～グォ)
    いぇ: "ye",
    // うぃ: "",
    // うぇ: "",
    // うぉ: "",
    きぇ: "kye",
    // くぁ: "",
    くぃ: "kwi",
    くぇ: "kwe",
    くぉ: "kwo",
    // ぐぁ: "",
    ぐぃ: "gwi",
    ぐぇ: "gwe",
    ぐぉ: "gwo",
    イェ: "ye",
    // ウィ: "",
    // ウェ: "",
    // ウォ: "",
    // ヴ: "",
    // ヴァ: "",
    // ヴィ: "",
    // ヴェ: "",
    // ヴォ: "",
    // ヴュ: "",
    // ヴョ: "",
    キェ: "kya",
    // クァ: "",
    クィ: "kwi",
    クェ: "kwe",
    クォ: "kwo",
    // グァ: "",
    グィ: "gwi",
    グェ: "gwe",
    グォ: "gwo",
    // 外来音(シェ～フョ)
    しぇ: "sye",
    じぇ: "zye",
    すぃ: "swi",
    ずぃ: "zwi",
    ちぇ: "tye",
    つぁ: "twa",
    つぃ: "twi",
    つぇ: "twe",
    つぉ: "two",
    // てぃ: "ti",
    // てゅ: "tyu",
    // でぃ: "di",
    // でゅ: "dyu",
    // とぅ: "tu",
    // どぅ: "du",
    にぇ: "nye",
    ひぇ: "hye",
    ふぁ: "hwa",
    ふぃ: "hwi",
    ふぇ: "hwe",
    ふぉ: "hwo",
    ふゅ: "hwyu",
    ふょ: "hwyo",
    シェ: "sye",
    ジェ: "zye",
    スィ: "swi",
    ズィ: "zwi",
    チェ: "tye",
    ツァ: "twa",
    ツィ: "twi",
    ツェ: "twe",
    ツォ: "two",
    // ティ: "ti",
    // テュ: "tyu",
    // ディ: "di",
    // デュ: "dyu",
    // トゥ: "tu",
    // ドゥ: "du",
    ニェ: "nye",
    ヒェ: "hye",
    ファ: "hwa",
    フィ: "hwi",
    フェ: "hwe",
    フォ: "hwo",
    フュ: "hwyu",
    フョ: "hwyo"
  },
  passport: {
    // 数字と記号
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "０": "0",
    "！": "!",
    "“": "\"",
    "”": "\"",
    "＃": "#",
    "＄": "$",
    "％": "%",
    "＆": "&",
    "’": "'",
    "（": "(",
    "）": ")",
    "＝": "=",
    "～": "~",
    "｜": "|",
    "＠": "@",
    "‘": "`",
    "＋": "+",
    "＊": "*",
    "；": ";",
    "：": ":",
    "＜": "<",
    "＞": ">",
    "、": ",",
    "。": ".",
    "／": "/",
    "？": "?",
    "＿": "_",
    "・": "･",
    "「": "\"",
    "」": "\"",
    "｛": "{",
    "｝": "}",
    "￥": "\\",
    "＾": "^",
    // 直音-清音(ア～ノ)
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    カ: "ka",
    キ: "ki",
    ク: "ku",
    ケ: "ke",
    コ: "ko",
    さ: "sa",
    し: "shi",
    す: "su",
    せ: "se",
    そ: "so",
    サ: "sa",
    シ: "shi",
    ス: "su",
    セ: "se",
    ソ: "so",
    た: "ta",
    ち: "chi",
    つ: "tsu",
    て: "te",
    と: "to",
    タ: "ta",
    チ: "chi",
    ツ: "tsu",
    テ: "te",
    ト: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    ナ: "na",
    ニ: "ni",
    ヌ: "nu",
    ネ: "ne",
    ノ: "no",
    // 直音-清音(ハ～ヲ)
    は: "ha",
    ひ: "hi",
    ふ: "fu",
    へ: "he",
    ほ: "ho",
    ハ: "ha",
    ヒ: "hi",
    フ: "fu",
    ヘ: "he",
    ホ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    マ: "ma",
    ミ: "mi",
    ム: "mu",
    メ: "me",
    モ: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ヤ: "ya",
    ユ: "yu",
    ヨ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    ラ: "ra",
    リ: "ri",
    ル: "ru",
    レ: "re",
    ロ: "ro",
    わ: "wa",
    ゐ: "i",
    ゑ: "e",
    を: "o",
    ワ: "wa",
    ヰ: "i",
    ヱ: "e",
    ヲ: "o",
    // 直音-濁音(ガ～ボ)、半濁音(パ～ポ)
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ガ: "ga",
    ギ: "gi",
    グ: "gu",
    ゲ: "ge",
    ゴ: "go",
    ざ: "za",
    じ: "ji",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    ザ: "za",
    ジ: "ji",
    ズ: "zu",
    ゼ: "ze",
    ゾ: "zo",
    だ: "da",
    ぢ: "ji",
    づ: "zu",
    で: "de",
    ど: "do",
    ダ: "da",
    ヂ: "ji",
    ヅ: "zu",
    デ: "de",
    ド: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    バ: "ba",
    ビ: "bi",
    ブ: "bu",
    ベ: "be",
    ボ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    パ: "pa",
    ピ: "pi",
    プ: "pu",
    ペ: "pe",
    ポ: "po",
    // 拗音-清音(キャ～リョ)
    きゃ: "kya",
    きゅ: "kyu",
    きょ: "kyo",
    しゃ: "sha",
    しゅ: "shu",
    しょ: "sho",
    ちゃ: "cha",
    ちゅ: "chu",
    ちょ: "cho",
    にゃ: "nya",
    にゅ: "nyu",
    にょ: "nyo",
    ひゃ: "hya",
    ひゅ: "hyu",
    ひょ: "hyo",
    みゃ: "mya",
    みゅ: "myu",
    みょ: "myo",
    りゃ: "rya",
    りゅ: "ryu",
    りょ: "ryo",
    キャ: "kya",
    キュ: "kyu",
    キョ: "kyo",
    シャ: "sha",
    シュ: "shu",
    ショ: "sho",
    チャ: "cha",
    チュ: "chu",
    チョ: "cho",
    ニャ: "nya",
    ニュ: "nyu",
    ニョ: "nyo",
    ヒャ: "hya",
    ヒュ: "hyu",
    ヒョ: "hyo",
    ミャ: "mya",
    ミュ: "myu",
    ミョ: "myo",
    リャ: "rya",
    リュ: "ryu",
    リョ: "ryo",
    // 拗音-濁音(ギャ～ビョ)、半濁音(ピャ～ピョ)、合拗音(クヮ、グヮ)
    ぎゃ: "gya",
    ぎゅ: "gyu",
    ぎょ: "gyo",
    じゃ: "ja",
    じゅ: "ju",
    じょ: "jo",
    ぢゃ: "ja",
    ぢゅ: "ju",
    ぢょ: "jo",
    びゃ: "bya",
    びゅ: "byu",
    びょ: "byo",
    ぴゃ: "pya",
    ぴゅ: "pyu",
    ぴょ: "pyo",
    // くゎ: "",
    // ぐゎ: "",
    ギャ: "gya",
    ギュ: "gyu",
    ギョ: "gyo",
    ジャ: "ja",
    ジュ: "ju",
    ジョ: "jo",
    ヂャ: "ja",
    ヂュ: "ju",
    ヂョ: "jo",
    ビャ: "bya",
    ビュ: "byu",
    ビョ: "byo",
    ピャ: "pya",
    ピュ: "pyu",
    ピョ: "pyo",
    // クヮ: "",
    // グヮ: "",

    // 小書きの仮名、符号
    ぁ: "a",
    ぃ: "i",
    ぅ: "u",
    ぇ: "e",
    ぉ: "o",
    ゃ: "ya",
    ゅ: "yu",
    ょ: "yo",
    ゎ: "wa",
    ァ: "a",
    ィ: "i",
    ゥ: "u",
    ェ: "e",
    ォ: "o",
    ャ: "ya",
    ュ: "yu",
    ョ: "yo",
    ヮ: "wa",
    ヵ: "ka",
    ヶ: "ke",
    ん: "n",
    ン: "n",
    // ー: "",
    "　": " ",
    // 外来音(イェ～グォ)
    // いぇ: "",
    // うぃ: "",
    // うぇ: "",
    // うぉ: "",
    // きぇ: "",
    // くぁ: "",
    // くぃ: "",
    // くぇ: "",
    // くぉ: "",
    // ぐぁ: "",
    // ぐぃ: "",
    // ぐぇ: "",
    // ぐぉ: "",
    // イェ: "",
    // ウィ: "",
    // ウェ: "",
    // ウォ: "",
    ヴ: "b"
    // ヴァ: "",
    // ヴィ: "",
    // ヴェ: "",
    // ヴォ: "",
    // ヴュ: "",
    // ヴョ: "",
    // キェ: "",
    // クァ: "",
    // クィ: "",
    // クェ: "",
    // クォ: "",
    // グァ: "",
    // グィ: "",
    // グェ: "",
    // グォ: "",

    // 外来音(シェ～フョ)
    // しぇ: "",
    // じぇ: "",
    // すぃ: "",
    // ずぃ: "",
    // ちぇ: "",
    // つぁ: "",
    // つぃ: "",
    // つぇ: "",
    // つぉ: "",
    // てぃ: "",
    // てゅ: "",
    // でぃ: "",
    // でゅ: "",
    // とぅ: "",
    // どぅ: "",
    // にぇ: "",
    // ひぇ: "",
    // ふぁ: "",
    // ふぃ: "",
    // ふぇ: "",
    // ふぉ: "",
    // ふゅ: "",
    // ふょ: "",
    // シェ: "",
    // ジェ: "",
    // スィ: "",
    // ズィ: "",
    // チェ: "",
    // ツァ: "",
    // ツィ: "",
    // ツェ: "",
    // ツォ: "",
    // ティ: "",
    // テュ: "",
    // ディ: "",
    // デュ: "",
    // トゥ: "",
    // ドゥ: "",
    // ニェ: "",
    // ヒェ: "",
    // ファ: "",
    // フィ: "",
    // フェ: "",
    // フォ: "",
    // フュ: "",
    // フョ: ""
  },

  hepburn: {
    // 数字と記号
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "０": "0",
    "！": "!",
    "“": "\"",
    "”": "\"",
    "＃": "#",
    "＄": "$",
    "％": "%",
    "＆": "&",
    "’": "'",
    "（": "(",
    "）": ")",
    "＝": "=",
    "～": "~",
    "｜": "|",
    "＠": "@",
    "‘": "`",
    "＋": "+",
    "＊": "*",
    "；": ";",
    "：": ":",
    "＜": "<",
    "＞": ">",
    "、": ",",
    "。": ".",
    "／": "/",
    "？": "?",
    "＿": "_",
    "・": "･",
    "「": "\"",
    "」": "\"",
    "｛": "{",
    "｝": "}",
    "￥": "\\",
    "＾": "^",
    // 直音-清音(ア～ノ)
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    カ: "ka",
    キ: "ki",
    ク: "ku",
    ケ: "ke",
    コ: "ko",
    さ: "sa",
    し: "shi",
    す: "su",
    せ: "se",
    そ: "so",
    サ: "sa",
    シ: "shi",
    ス: "su",
    セ: "se",
    ソ: "so",
    た: "ta",
    ち: "chi",
    つ: "tsu",
    て: "te",
    と: "to",
    タ: "ta",
    チ: "chi",
    ツ: "tsu",
    テ: "te",
    ト: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    ナ: "na",
    ニ: "ni",
    ヌ: "nu",
    ネ: "ne",
    ノ: "no",
    // 直音-清音(ハ～ヲ)
    は: "ha",
    ひ: "hi",
    ふ: "fu",
    へ: "he",
    ほ: "ho",
    ハ: "ha",
    ヒ: "hi",
    フ: "fu",
    ヘ: "he",
    ホ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    マ: "ma",
    ミ: "mi",
    ム: "mu",
    メ: "me",
    モ: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ヤ: "ya",
    ユ: "yu",
    ヨ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    ラ: "ra",
    リ: "ri",
    ル: "ru",
    レ: "re",
    ロ: "ro",
    わ: "wa",
    ゐ: "i",
    ゑ: "e",
    を: "o",
    ワ: "wa",
    ヰ: "i",
    ヱ: "e",
    ヲ: "o",
    // 直音-濁音(ガ～ボ)、半濁音(パ～ポ)
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ガ: "ga",
    ギ: "gi",
    グ: "gu",
    ゲ: "ge",
    ゴ: "go",
    ざ: "za",
    じ: "ji",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    ザ: "za",
    ジ: "ji",
    ズ: "zu",
    ゼ: "ze",
    ゾ: "zo",
    だ: "da",
    ぢ: "ji",
    づ: "zu",
    で: "de",
    ど: "do",
    ダ: "da",
    ヂ: "ji",
    ヅ: "zu",
    デ: "de",
    ド: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    バ: "ba",
    ビ: "bi",
    ブ: "bu",
    ベ: "be",
    ボ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    パ: "pa",
    ピ: "pi",
    プ: "pu",
    ペ: "pe",
    ポ: "po",
    // 拗音-清音(キャ～リョ)
    きゃ: "kya",
    きゅ: "kyu",
    きょ: "kyo",
    しゃ: "sha",
    しゅ: "shu",
    しょ: "sho",
    ちゃ: "cha",
    ちゅ: "chu",
    ちょ: "cho",
    にゃ: "nya",
    にゅ: "nyu",
    にょ: "nyo",
    ひゃ: "hya",
    ひゅ: "hyu",
    ひょ: "hyo",
    みゃ: "mya",
    みゅ: "myu",
    みょ: "myo",
    りゃ: "rya",
    りゅ: "ryu",
    りょ: "ryo",
    キャ: "kya",
    キュ: "kyu",
    キョ: "kyo",
    シャ: "sha",
    シュ: "shu",
    ショ: "sho",
    チャ: "cha",
    チュ: "chu",
    チョ: "cho",
    ニャ: "nya",
    ニュ: "nyu",
    ニョ: "nyo",
    ヒャ: "hya",
    ヒュ: "hyu",
    ヒョ: "hyo",
    ミャ: "mya",
    ミュ: "myu",
    ミョ: "myo",
    リャ: "rya",
    リュ: "ryu",
    リョ: "ryo",
    // 拗音-濁音(ギャ～ビョ)、半濁音(ピャ～ピョ)、合拗音(クヮ、グヮ)
    ぎゃ: "gya",
    ぎゅ: "gyu",
    ぎょ: "gyo",
    じゃ: "ja",
    じゅ: "ju",
    じょ: "jo",
    ぢゃ: "ja",
    ぢゅ: "ju",
    ぢょ: "jo",
    びゃ: "bya",
    びゅ: "byu",
    びょ: "byo",
    ぴゃ: "pya",
    ぴゅ: "pyu",
    ぴょ: "pyo",
    // くゎ: "",
    // ぐゎ: "",
    ギャ: "gya",
    ギュ: "gyu",
    ギョ: "gyo",
    ジャ: "ja",
    ジュ: "ju",
    ジョ: "jo",
    ヂャ: "ja",
    ヂュ: "ju",
    ヂョ: "jo",
    ビャ: "bya",
    ビュ: "byu",
    ビョ: "byo",
    ピャ: "pya",
    ピュ: "pyu",
    ピョ: "pyo",
    // クヮ: "",
    // グヮ: "",

    // 小書きの仮名、符号
    ぁ: "a",
    ぃ: "i",
    ぅ: "u",
    ぇ: "e",
    ぉ: "o",
    ゃ: "ya",
    ゅ: "yu",
    ょ: "yo",
    ゎ: "wa",
    ァ: "a",
    ィ: "i",
    ゥ: "u",
    ェ: "e",
    ォ: "o",
    ャ: "ya",
    ュ: "yu",
    ョ: "yo",
    ヮ: "wa",
    ヵ: "ka",
    ヶ: "ke",
    ん: "n",
    ン: "n",
    // ー: "",
    "　": " ",
    // 外来音(イェ～グォ)
    いぇ: "ye",
    うぃ: "wi",
    うぇ: "we",
    うぉ: "wo",
    きぇ: "kye",
    くぁ: "kwa",
    くぃ: "kwi",
    くぇ: "kwe",
    くぉ: "kwo",
    ぐぁ: "gwa",
    ぐぃ: "gwi",
    ぐぇ: "gwe",
    ぐぉ: "gwo",
    イェ: "ye",
    ウィ: "wi",
    ウェ: "we",
    ウォ: "wo",
    ヴ: "vu",
    ヴァ: "va",
    ヴィ: "vi",
    ヴェ: "ve",
    ヴォ: "vo",
    ヴュ: "vyu",
    ヴョ: "vyo",
    キェ: "kya",
    クァ: "kwa",
    クィ: "kwi",
    クェ: "kwe",
    クォ: "kwo",
    グァ: "gwa",
    グィ: "gwi",
    グェ: "gwe",
    グォ: "gwo",
    // 外来音(シェ～フョ)
    しぇ: "she",
    じぇ: "je",
    // すぃ: "",
    // ずぃ: "",
    ちぇ: "che",
    つぁ: "tsa",
    つぃ: "tsi",
    つぇ: "tse",
    つぉ: "tso",
    てぃ: "ti",
    てゅ: "tyu",
    でぃ: "di",
    でゅ: "dyu",
    とぅ: "tu",
    どぅ: "du",
    にぇ: "nye",
    ひぇ: "hye",
    ふぁ: "fa",
    ふぃ: "fi",
    ふぇ: "fe",
    ふぉ: "fo",
    ふゅ: "fyu",
    ふょ: "fyo",
    シェ: "she",
    ジェ: "je",
    // スィ: "",
    // ズィ: "",
    チェ: "che",
    ツァ: "tsa",
    ツィ: "tsi",
    ツェ: "tse",
    ツォ: "tso",
    ティ: "ti",
    テュ: "tyu",
    ディ: "di",
    デュ: "dyu",
    トゥ: "tu",
    ドゥ: "du",
    ニェ: "nye",
    ヒェ: "hye",
    ファ: "fa",
    フィ: "fi",
    フェ: "fe",
    フォ: "fo",
    フュ: "fyu",
    フョ: "fyo"
  }
};
exports.ROMAJI_TABLE = ROMAJI_TABLE;