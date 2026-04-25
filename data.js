// ============================================
// CONFIGURAÇÃO DO SISTEMA DE INVENTÁRIO
// Estrutura organizada por períodos mensais
// ============================================

// Senhas das lojas
const STORE_CREDENTIALS = {
  kassouf: 'kassouf123',
  premium: 'premium123',
  dompedro: 'dompedro123',
  realme: 'realme123',
  xv: 'xv123'
};

// Nomes de exibição das lojas
const STORE_NAMES = {
  kassouf: 'Loja Kassouf',
  premium: 'Loja Premium',
  dompedro: 'Loja Dompedro',
  realme: 'Loja Realme',
  xv: 'Loja XV'
};

// ============================================
// DADOS DO INVENTÁRIO POR MÊS
// ============================================

// ----- MARÇO 2026 (mês atual) -----
const KASSOUF_PRODUCTS_MAR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 49 },
  { name: 'BOTICARIO(BRINDE)', qty: 3 },
  { name: 'CABO 120W 1.8 MTS VIRADO RESPECT', qty: 1 },
  { name: 'CABO DE CARGA TY', qty: 5 },
  { name: 'CABO DE CARGA V8', qty: 3 },
  { name: 'CABO HS 123 HREBOS', qty: 2 },
  { name: 'CABO LIGHTNING 2MTS ESSAGER 29W (IPHONE)', qty: 1 },
  { name: 'CAPA HONOR X5B PLUS', qty: 3 },
  { name: 'CAPA MOTOROLA G24', qty: 1 },
  { name: 'CAPA REALME C51/C53', qty: 15 },
  { name: 'CAPA REALME C55', qty: 1 },
  { name: 'CAPA REALME C67', qty: 5 },
  { name: 'CAPA REDMI 12', qty: 4 },
  { name: 'CAPA REDMI 13', qty: 4 },
  { name: 'CAPA REDMI 13C', qty: 9 },
  { name: 'CAPA REDMI 14C 4G', qty: 14 },
  { name: 'CAPA REDMI A5/ POCO C71', qty: 5 },
  { name: 'CAPA REDMI NOTE 12 4G', qty: 1 },
  { name: 'CAPA REDMI NOTE 12 PRO 4G', qty: 1 },
  { name: 'CAPA REDMI NOTE 12S 4G', qty: 3 },
  { name: 'CAPA REDMI NOTE 13 4G', qty: 14 },
  { name: 'CAPA REDMI NOTE 13 PRO 4G', qty: 15 },
  { name: 'CAPA REDMI NOTE 13 PRO 5G', qty: 26 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO BRANCO', qty: 1 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 1 },
  { name: 'CARREGADOR 20W KD 108C KAIDI', qty: 3 },
  { name: 'CARREGADOR 50W LEHMOX', qty: 1 },
  { name: 'CARREGADOR HONOR 66W C/CABO 1MT (BRINDE 400 LITE)', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 50W', qty: 7 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 15 },
  { name: 'CARREGADOR XIAOMI 120W', qty: 1 },
  { name: 'CARREGADOR Y27-3 H\'MASTON', qty: 3 },
  { name: 'CHIP CLARO PREZÃO', qty: 29 },
  { name: 'CHIP VIVO PRE C REGARGA', qty: 10 },
  { name: 'CHIP VIVO PRE S/ RECARGA', qty: 1 },
  { name: 'COPO STANLEY (BRINDE)', qty: 17 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 BRANCO', qty: 1 },
  { name: 'FONE BLUETOOTH KNC 5603 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 52 },
  { name: 'FONE COM FIO LE-0217 LELONG', qty: 1 },
  { name: 'FONE COM FIO S10+ GALAXY ESTÉRIO', qty: 1 },
  { name: 'HONOR X5C PLUS 4/256 MIDNIGHT BLACK', qty: 8 },
  { name: 'HONOR X7D 8/256 DESERT GOLD', qty: 7 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 1 },
  { name: 'HONOR X7D 8/256 VELVET BLACK', qty: 2 },
  { name: 'IPHONE 13 128G PRETO (LACRADO)', qty: 1 },
  { name: 'MOTO G05 4/128 VERDE', qty: 2 },
  { name: 'MOTO G05 4/128 VERMELHO', qty: 8 },
  { name: 'MOTO G15 4/128 CINZA', qty: -1 },
  { name: 'MOTO G15 4/128 VERDE', qty: 1 },
  { name: 'MOTO G15 4/256 CINZA', qty: 1 },
  { name: 'MOTO G15 4/256 VERDE', qty: 2 },
  { name: 'MOTO G15 8/256 GRAVITY GRAY', qty: 2 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 3 },
  { name: 'MOTO G56 5G 8/256 BLUE OYSTER', qty: 2 },
  { name: 'MOTO G56 5G 8/256 GRAY MIST', qty: 5 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 HOT PINK', qty: 1 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 80 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 130 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 74 },
  { name: 'PELICULA HD HYDROGEL SUPER PREMIUM', qty: 20 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 63 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 4 },
  { name: 'REALME C67 8/256 ** S/NFC **BLACK ROCK', qty: 7 },
  { name: 'REALME C71 8/256 FOREST OWL', qty: 6 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 18 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 3 }
];

const PREMIUM_PRODUCTS_MAR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 46 },
  { name: 'BOTICARIO(BRINDE)', qty: 4 },
  { name: 'CABO 120W 7A 2MT (VIRADO) ESSAGER', qty: 1 },
  { name: 'CABO HB 11-2 H\'MASTON', qty: 1 },
  { name: 'CABO LIGHTNING 2MTS ESSAGER 29W (IPHONE)', qty: 1 },
  { name: 'CAPA REALME C61/C63', qty: 4 },
  { name: 'CAPA REDMI A5 / POCO C71', qty: 5 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO BRANCO', qty: 1 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 1 },
  { name: 'CARREGADOR 20W KD 108C KAIDI', qty: 3 },
  { name: 'CARREGADOR 20W KD 669CC KAIDI', qty: 5 },
  { name: 'CARREGADOR 50W LEHMOX', qty: 2 },
  { name: 'CARREGADOR HONOR 66W C/CABO 1MT (BRINDE 400 LITE)', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 50W', qty: 11 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 14 },
  { name: 'CARREGADOR ONE PLUS(REALME) 100W COMPLETO', qty: 1 },
  { name: 'CARREGADOR XIAOMI 120W', qty: 1 },
  { name: 'CHIP CLARO PREZÃO', qty: 31 },
  { name: 'CHIP VIVO PRE C REGARGA', qty: 10 },
  { name: 'CHIP VIVO PRE S/ RECARGA', qty: 1 },
  { name: 'COPO STANLEY (BRINDE)', qty: 6 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 PRETO', qty: 1 },
  { name: 'FONE BLUETOOTH KD 7101 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH KNC5602 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH LENOVO THINKPLUS XT83II', qty: 1 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 55 },
  { name: 'FONE COM FIO LE-0201 LELONG', qty: 1 },
  { name: 'FONE COM FIO LE-0204 LELONG', qty: 4 },
  { name: 'FONE COM FIO LE-0216 LELONG', qty: 1 },
  { name: 'FONE COM FIO LE-0217 LELONG', qty: 1 },
  { name: 'HONOR X5C PLUS 4/256 MIDNIGHT BLACK', qty: 5 },
  { name: 'HONOR X7D 8/256 DESERT GOLD', qty: 9 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 11 },
  { name: 'HONOR X7D 8/256 VELVET BLACK', qty: 3 },
  { name: 'IPHONE 14 128G BRANCO ((LACRADO))', qty: 1 },
  { name: 'MICROFONE SEM FIO KMF4-A KAIDI', qty: 1 },
  { name: 'MOTO G05 4/128 VERDE', qty: 4 },
  { name: 'MOTO G05 4/128 VERMELHO', qty: 8 },
  { name: 'MOTO G15 4/128 VERDE', qty: 4 },
  { name: 'MOTO G15 4/256 CINZA', qty: 17 },
  { name: 'MOTO G15 4/256 VERDE', qty: 8 },
  { name: 'MOTO G15 8/256 GRAVITY GRAY', qty: 5 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 2 },
  { name: 'MOTO G56 5G 8/256 GRAY MIST', qty: 4 },
  { name: 'MOTO G86 5G 8/256 LILAC BLUE', qty: 1 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 HOT PINK', qty: 1 },
  { name: 'MOTOROLA EDGE 60 5G FUSION 8/256 GREEN', qty: 1 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 76 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 128 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 92 },
  { name: 'PELICULA HD HYDROGEL SUPER PREMIUM', qty: 21 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 70 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 12 },
  { name: 'REALME C67 8/256 ** S/NFC ** BLACK ROCK', qty: 6 },
  { name: 'REALME C71 8/256 FOREST OWL', qty: 4 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 16 },
  { name: 'REALME C85 8/256 KINGFISHER BLUE', qty: 2 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 1 }
];

const DOMPEDRO_PRODUCTS_MAR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 22 },
  { name: 'CABO 2 IN 1 KD177 KAIDI', qty: 5 },
  { name: 'CABO ADAPTADOR HDMI - ZHQ 07 H\'MASTON', qty: 1 },
  { name: 'CABO ADAPTAR P2 FÊMEA - 2 P2 MACHO', qty: 1 },
  { name: 'CABO DE DADOS HB16-CC H\'MASTON', qty: 2 },
  { name: 'CABO KD 100CC 6A KAIDI', qty: 2 },
  { name: 'CABO KD 336A 2MTS KAIDI', qty: 1 },
  { name: 'CABO KD-19CC 1MT KAIDI', qty: 5 },
  { name: 'CABO KD-19CL 1MT KAIDI', qty: 3 },
  { name: 'CABO USB V3 VERDE', qty: 1 },
  { name: 'CAPA HONOR X8B', qty: 1 },
  { name: 'CAPA REDMI NOTE 14 4G', qty: 1 },
  { name: 'CAPA REDMI NOTE 14 PRO/ POCO X7', qty: 9 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO IPHONE', qty: 1 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 1 },
  { name: 'CARREGADOR 20W KD 669CC KAIDI', qty: 1 },
  { name: 'CARREGADOR 20W KD KN-108C KDPAN', qty: 5 },
  { name: 'CARREGADOR 35W KD-671CC KAIDI COMPLETO', qty: 5 },
  { name: 'CARREGADOR 35W KD-671CL KAIDI COMPLETO', qty: 3 },
  { name: 'CARREGADOR MOTOROLA 125W', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 12 },
  { name: 'CARREGADOR ONE PLUS(REALME) 100W COMPLETO', qty: 1 },
  { name: 'CARREGADOR XIAOMI 90W 2MTS COMPLETO', qty: 1 },
  { name: 'CARREGADOR Y24-1 H\'MASTON', qty: 1 },
  { name: 'CARTÃO SDXC 128G V30 SANDISK', qty: 1 },
  { name: 'CHIP CLARO FLEX', qty: 3 },
  { name: 'CHIP CLARO PREZÃO', qty: 11 },
  { name: 'CHIP TIM PRE C REGARGA', qty: 9 },
  { name: 'CHIP VIVO PRE S/ RECARGA', qty: 1 },
  { name: 'COPO STANLEY (BRINDE)', qty: 2 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 BRANCO', qty: 2 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 PRETO', qty: 2 },
  { name: 'FONE BLUETOOTH KNC5602 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH REALFIT F2', qty: 1 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 4 },
  { name: 'FONTE CARREGADOR 30W CA31-8 α\'GOLD', qty: 1 },
  { name: 'FONTE CARREGADOR 50W EL 4005 ELETRO', qty: 1 },
  { name: 'GARRAFA HONOR (BRINDE)', qty: 10 },
  { name: 'HONOR X5C 4/128 MIDNIGHT BLACK', qty: 4 },
  { name: 'HONOR X7D 8/256 DESERT GOLD', qty: 2 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 3 },
  { name: 'HONOR X7D 8/256 VELVET BLACK', qty: 5 },
  { name: 'IPHONE 16e 128 BRANCO', qty: 1 },
  { name: 'MICROFONE SEM FIO 2K9 ALTOMEX', qty: 2 },
  { name: 'MICROFONE SEM FIO MCF 19 α\'GOLD', qty: 1 },
  { name: 'MOTO G05 4/128 VERDE', qty: 4 },
  { name: 'MOTO G05 4/128 VERMELHO', qty: 4 },
  { name: 'MOTO G15 4/128 CINZA', qty: 1 },
  { name: 'MOTO G15 4/512 SEA BLUE', qty: 1 },
  { name: 'MOTO G15 8/256 GRAVITY GREY', qty: 2 },
  { name: 'MOTO G15 8/256 IGUANA GREEN', qty: 2 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 1 },
  { name: 'MOTO G56 5G 12/256 DAZZLING BLUE', qty: 1 },
  { name: 'MOTO G56 5G 12/256 DILL GREEN', qty: 1 },
  { name: 'MOTO G86 5G 8/256 LILAC BLUE', qty: 1 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 MARSHMALLOW BLUE', qty: 1 },
  { name: 'PELICULA 9D CERAMICA NOTE 13 PRO / 13', qty: 1 },
  { name: 'PELICULA 9D CERAMICA POCO X7', qty: 1 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 14 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 19 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 69 },
  { name: 'PELICULA HD POLÍMERO UV PRO', qty: 4 },
  { name: 'PELICULA HD TABLET SIZE 11\' PREMIUM', qty: 9 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 15 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 9 },
  { name: 'PELICULA TRASEIRA PERSONALIZADA', qty: 20 },
  { name: 'PILHA RECARREGÁVEL 4 PÇS AAA KNUP', qty: 1 },
  { name: 'POCO X7 5G 12/512 GREEN', qty: 1 },
  { name: 'POCO X8 PRO 5G 8/512 PRETO', qty: 1 },
  { name: 'POCO X8 PRO 5G 8/512 WHITE', qty: 1 },
  { name: 'REALME C61 8/256 DARK GREEN', qty: 3 },
  { name: 'REALME C63 8/256 JADE GREEN', qty: 4 },
  { name: 'REALME C63 8/256 LEATHER BLUE', qty: 1 },
  { name: 'REALME C65 8/256 STARLIGHT PURPLE', qty: 1 },
  { name: 'REALME C67 8/256 BLACK ROCK', qty: 3 },
  { name: 'REALME C67 8/256 SUNNY OASIS', qty: 2 },
  { name: 'REALME C71 4/256 FOREST OWL', qty: 1 },
  { name: 'REALME C71 4/256 WHITE SWAN', qty: 2 },
  { name: 'REALME C71 8/256 FOREST OWL', qty: 4 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 5 },
  { name: 'REALME C85 8/256 KINGFISHER BLUE', qty: 3 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 3 },
  { name: 'REALME NOTE 70 4/128 BEACH GOLD', qty: 5 },
  { name: 'REALME NOTE 70 4/128 OBSIDIAN BLACK', qty: 5 },
  { name: 'REALME NOTE 70 4/256 OBSIDIAN BLACK', qty: 2 },
  { name: 'REDMI A5 4/128 AZUL (SEMINOVO)', qty: 1 },
  { name: 'REDMI A5 4/128 PRETO', qty: 2 },
  { name: 'REDMI A5 4/128 VERDE', qty: 1 },
  { name: 'REDMI NOTE 14 PRO 5G 8/256 GOLD', qty: 1 },
  { name: 'REDMI NOTE 15 5G 8/256 AZUL GLACIER', qty: 1 },
  { name: 'REDMI NOTE 15 PRO 4G 8/256 TITANIUM', qty: 1 }
];

const REALME_PRODUCTS_MAR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 40 },
  { name: 'BODY SPLASH. WEPINK (BRINDE)', qty: 1 },
  { name: 'BOTICARIO(BRINDE)', qty: 4 },
  { name: 'CABO BACB09996 BASIKE', qty: 1 },
  { name: 'CABO DE AUDIO KD-15C KAIDI', qty: 2 },
  { name: 'CABO DE DADOS SJX17 2 H\'MASTON PRETO', qty: 3 },
  { name: 'CABO KD 100CC 6A KAIDI', qty: 1 },
  { name: 'CABO KD-19CL 1MT KAIDI', qty: 4 },
  { name: 'CABO KD32S KAIDI', qty: 1 },
  { name: 'CABO LIGHTNING 2MTS ESSAGER 29W (IPHONE)', qty: 1 },
  { name: 'CAPA HONOR X8B', qty: 2 },
  { name: 'CAPA REDMI 13C', qty: 1 },
  { name: 'CAPA REDMI NOTE 13 4G', qty: 3 },
  { name: 'CAPA REDMI NOTE 13 PRO 4G', qty: 7 },
  { name: 'CAPA REDMI NOTE 14 4G', qty: 3 },
  { name: 'CAPA REDMI NOTE 14 PRO/ POCO X7', qty: 4 },
  { name: 'CAPA SAMSUNG A06', qty: 2 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO BRANCO', qty: 2 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO IPHONE', qty: 7 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 2 },
  { name: 'CARREGADOR 20W KD 108C KAIDI', qty: 1 },
  { name: 'CARREGADOR 20W KD KN-108C KDPAN COMPLETO', qty: 1 },
  { name: 'CARREGADOR 35W KD-671CC KAIDI COMPLETO', qty: 2 },
  { name: 'CARREGADOR 35W KD-671CL KAIDI COMPLETO', qty: 3 },
  { name: 'CARREGADOR CARRO HS 518 H\'REBOS 20W', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 125W', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 50W', qty: 2 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 5 },
  { name: 'CARREGADOR ONE PLUS(REALME) 100W COMPLETO', qty: 1 },
  { name: 'CARREGADOR PORTÁTIL 5000MAH KD952 KAIDI', qty: 1 },
  { name: 'CARREGADOR XIAOMI 120W', qty: 1 },
  { name: 'CARREGADOR XIAOMI 90W 2MTS COMPLETO', qty: 1 },
  { name: 'CARREGADOR Y27-3 H\'MASTON', qty: 2 },
  { name: 'CHIP CLARO PREZÃO', qty: 12 },
  { name: 'CHIP TIM PRE C REGARGA', qty: 1 },
  { name: 'COPO STANLEY (BRINDE)', qty: 16 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 BRANCO', qty: 1 },
  { name: 'FONE BLUETOOTH FN-BA10 α\'GOLD', qty: 1 },
  { name: 'FONE BLUETOOTH KNC5602 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH KNC5603 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH LENOVO THINKPLUS XT83II', qty: 1 },
  { name: 'FONE BLUETOOTH REALFIT F2', qty: 2 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 8 },
  { name: 'FONE COM FIO LE-0201 LELONG', qty: 5 },
  { name: 'FONE KD730 KAIDI', qty: 1 },
  { name: 'GARRAFA HONOR (BRINDE)', qty: 11 },
  { name: 'HONOR X5C 4/128 MIDNIGHT BLACK', qty: 3 },
  { name: 'HONOR X5C 4/128 OCEAN CYAN', qty: 2 },
  { name: 'HONOR X7C 8/256 **S/NFC** MOONLIGHT WHITE', qty: 1 },
  { name: 'HONOR X7D 8/256 DESERT GOLD', qty: 3 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 2 },
  { name: 'HONOR X7D 8/256 VELVET BLACK', qty: 4 },
  { name: 'MOTO G05 4/128 VERDE', qty: 2 },
  { name: 'MOTO G05 4/128 VERMELHO', qty: 5 },
  { name: 'MOTO G15 4/128 CINZA', qty: 5 },
  { name: 'MOTO G15 4/128 VERDE', qty: 4 },
  { name: 'MOTO G15 8/256 GRAVITY GRAY', qty: 1 },
  { name: 'MOTO G15 8/256 IGUANA GREEN', qty: 3 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 2 },
  { name: 'MOTO G56 5G 12/256 DILL GREEN', qty: 1 },
  { name: 'MOTO G56 5G 12/256 GREY MIST', qty: 1 },
  { name: 'MOTO G56 5G 12/256 OYESTER BLACK', qty: 2 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 HOT PINK', qty: 1 },
  { name: 'PELICULA 3D NOTE 13 4G PRO', qty: 13 },
  { name: 'PELICULA 3D NOTE 13 4G/5G', qty: 19 },
  { name: 'PELICULA 3D REDMI 13C', qty: 11 },
  { name: 'PELICULA 3D SAMSUNG A03 / A03S', qty: 2 },
  { name: 'PELICULA 3D SAMSUNG A05', qty: 16 },
  { name: 'PELICULA 3D SAMUNG A04', qty: 3 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 17 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 63 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 32 },
  { name: 'PELICULA HD HYDROGEL SUPER PREMIUM', qty: 6 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 23 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 4 },
  { name: 'POCO X8 PRO 5G 8/512 MINT GREEN', qty: 1 },
  { name: 'POCO X8 PRO 5G 8/512 WHITE', qty: 1 },
  { name: 'POWER BANK MAGNÉTICO KD 998 BRANCO 10000MAH KAIDI', qty: 1 },
  { name: 'REALME C63 8/256 JADE GREEN', qty: 1 },
  { name: 'REALME C67 8/256 ** S/NFC ** BLACK ROCK', qty: 1 },
  { name: 'REALME C67 8/256 ** S/NFC** SUNNY OASIS', qty: 1 },
  { name: 'REALME C71 8/256 FOREST OWL', qty: 3 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 9 },
  { name: 'REALME C85 8/256 KINGFISHER BLUE', qty: 5 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 4 },
  { name: 'REALME NOTE 70 4/128 BEACH GOLD', qty: 2 },
  { name: 'REALME NOTE 70 4/128 OBSIDIAN BLACK', qty: 3 },
  { name: 'REALME NOTE 70 4/256 OBSIDIAN BLACK', qty: 1 },
  { name: 'REALME NOTE 70 8/256 BEACH GOLD', qty: 2 },
  { name: 'RECEPTOR AL A230', qty: 1 },
  { name: 'REDMI A5 4/128 PRETO', qty: 2 },
  { name: 'REDMI A5 4/128 VERDE', qty: 1 }
];

const XV_PRODUCTS_MAR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 44 },
  { name: 'BOTICARIO(BRINDE)', qty: 2 },
  { name: 'CABO 100W 7A 2MT ESSAGER (HONOR) AZUL', qty: 1 },
  { name: 'CABO DE DADOS HB16-CC H\'MASTON', qty: 2 },
  { name: 'CABO KD 100CC 6A KAIDI', qty: 1 },
  { name: 'CABO KD 305 KAIDI', qty: 1 },
  { name: 'CABO KD 327C 2 MTS KAIDI', qty: 1 },
  { name: 'CABO KD 39M KAIDI', qty: 5 },
  { name: 'CABO KD TC30 KAIDI', qty: 1 },
  { name: 'CABO KD-19CL 1MT KAIDI', qty: 2 },
  { name: 'CABO LIGHTNING 2MTS ESSAGER 29W (IPHONE)', qty: 1 },
  { name: 'CAPA HONOR X7C', qty: 1 },
  { name: 'CAPA HONOR X8B', qty: 3 },
  { name: 'CAPA IPHONE 11', qty: 1 },
  { name: 'CAPA IPHONE 11 PRO', qty: 5 },
  { name: 'CAPA IPHONE 11 PRO MAX', qty: 4 },
  { name: 'CAPA IPHONE 12 PRO', qty: 2 },
  { name: 'CAPA IPHONE 12 PRO MAX', qty: 2 },
  { name: 'CAPA IPHONE 13 PRO', qty: 6 },
  { name: 'CAPA IPHONE 14 PRO', qty: 1 },
  { name: 'CAPA IPHONE 14 PRO MAX', qty: 4 },
  { name: 'CAPA IPHONE 15 PRO', qty: 7 },
  { name: 'CAPA IPHONE 15 PRO MAX', qty: 4 },
  { name: 'CAPA IPHONE XR', qty: 2 },
  { name: 'CAPA MOTOROLA G53', qty: 6 },
  { name: 'CAPA POCO F3', qty: 2 },
  { name: 'CAPA POCO F5', qty: 3 },
  { name: 'CAPA POCO X3', qty: 5 },
  { name: 'CAPA POCO X4 PRO', qty: 3 },
  { name: 'CAPA POCO X5 PRO', qty: 5 },
  { name: 'CAPA POCO X6', qty: 11 },
  { name: 'CAPA POCO X6 PRO', qty: 5 },
  { name: 'CAPA REALME C33', qty: 9 },
  { name: 'CAPA REALME C51/C53', qty: 15 },
  { name: 'CAPA REALME C55', qty: 6 },
  { name: 'CAPA REALME C67', qty: 9 },
  { name: 'CAPA REDMI 12 4G', qty: 2 },
  { name: 'CAPA REDMI 12C', qty: 3 },
  { name: 'CAPA REDMI NOTE 12 PRO 5G', qty: 11 },
  { name: 'CAPA REDMI NOTE 12S 4G', qty: 8 },
  { name: 'CAPA REDMI NOTE 13 4G', qty: 12 },
  { name: 'CAPA REDMI NOTE 13 PRO 4G', qty: 1 },
  { name: 'CAPA REDMI NOTE 13 PRO 5G', qty: 4 },
  { name: 'CAPA REDMI NOTE 14 PRO/ POCO X7', qty: 5 },
  { name: 'CAPA SAMSUNG A15', qty: 3 },
  { name: 'CAPA SAMSUNG S22', qty: 3 },
  { name: 'CAPA SAMSUNG S22 PLUS', qty: 4 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO IPHONE', qty: 4 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 1 },
  { name: 'CARREGADOR 20W KD 669CC KAIDI', qty: 1 },
  { name: 'CARREGADOR 20W KD KN-108C KDPAN', qty: 2 },
  { name: 'CARREGADOR 35W KD-671CC KAIDI COMPLETO', qty: 3 },
  { name: 'CARREGADOR 35W KD-671CL KAIDI COMPLETO', qty: 5 },
  { name: 'CARREGADOR CARRO S15-4 H\'MASTON', qty: 2 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 4 },
  { name: 'CARREGADOR ONE PLUS(REALME) 100W COMPLETO', qty: 1 },
  { name: 'CARREGADOR XIAOMI 90W 2MTS COMPLETO', qty: 1 },
  { name: 'CARTÃO SDXC 128G V30 SANDISK', qty: 1 },
  { name: 'CHIP CLARO FLEX', qty: 4 },
  { name: 'CHIP CLARO PREZÃO', qty: 4 },
  { name: 'CHIP TIM PRE C REGARGA', qty: 5 },
  { name: 'CHIP TIM PRE S/ RECARGA', qty: 1 },
  { name: 'COPO STANLEY (BRINDE)', qty: 2 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 BRANCO', qty: 1 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 PRETO', qty: 1 },
  { name: 'FONE BLUETOOTH KNC5602 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH LENOVO THINKPLUS XT83II', qty: 1 },
  { name: 'FONE BLUETOOTH REALFIT F2', qty: 3 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 12 },
  { name: 'FONE COM FIO FO-11 PMCELL', qty: 2 },
  { name: 'FONE COM FIO LE-0201 LELONG', qty: 6 },
  { name: 'FONE COM FIO LE-0204 LELONG', qty: 2 },
  { name: 'FONTE CARREGADOR 50W EL 4005 ELETRO', qty: 1 },
  { name: 'FONTE CARREGADOR FOXCOM IPHONE', qty: 3 },
  { name: 'GARRAFA HONOR (BRINDE)', qty: 9 },
  { name: 'HONOR X5C 4/128 MIDNIGHT BLACK', qty: 4 },
  { name: 'HONOR X5C 4/128 OCEAN CYAN', qty: 4 },
  { name: 'HONOR X7C 8/256 **S/NFC** MOONLIGHT WHITE', qty: 3 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 2 },
  { name: 'HONOR X7D 8/256 VELVET BLACK', qty: 2 },
  { name: 'MOTO G05 4/128 VERMELHO', qty: 1 },
  { name: 'MOTO G05 4/256 PLUM RED', qty: 3 },
  { name: 'MOTO G15 4/128 CINZA', qty: 4 },
  { name: 'MOTO G15 4/128 LARANJA', qty: 1 },
  { name: 'MOTO G15 4/128 VERDE', qty: 4 },
  { name: 'MOTO G15 8/256 GRAVITY GRAY', qty: 3 },
  { name: 'MOTO G15 8/256 IGUANA GREEN', qty: 3 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 3 },
  { name: 'MOTO G56 5G 12/256 GREY MIST', qty: 1 },
  { name: 'MOTO G56 5G 12/256 OYESTER BLACK', qty: 1 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 FOREST BLUE', qty: 1 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 HOT PINK', qty: 1 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 MARSHMALLOW BLUE', qty: 3 },
  { name: 'MOTOROLA EDGE 60 5G FUSION 8/256 GREEN', qty: 1 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 33 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 58 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 30 },
  { name: 'PELICULA HD HYDROGEL SUPER PREMIUM', qty: 17 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 21 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 5 },
  { name: 'POCO X8 PRO 5G 8/512 MINT GREEN', qty: 1 },
  { name: 'POCO X8 PRO 5G 8/512 WHITE', qty: 1 },
  { name: 'REALME C67 8/256 ** S/NFC ** BLACK ROCK', qty: 2 },
  { name: 'REALME C67 8/256 ** S/NFC ** SUNNY OASIS', qty: 2 },
  { name: 'REALME C71 8/256 FOREST OWL', qty: 2 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 1 },
  { name: 'REALME C85 8/256 KINGFISHER BLUE', qty: 6 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 2 },
  { name: 'REALME NOTE 70 4/128 OBSIDIAN BLACK', qty: 3 },
  { name: 'REALME NOTE 70 4/256 BEACH GOLD', qty: 1 },
  { name: 'REDMI A5 4/128 AZUL', qty: 1 },
  { name: 'REDMI A5 4/128 PRETO', qty: 1 },
  { name: 'REDMI A5 4/128 VERDE', qty: 1 }
];

// ----- ABRIL 2026 (novo mês - estrutura preparada) -----
// INSTRUÇÕES: Copie os arrays acima, renomeie com _APR_2026
// e atualize as quantidades conforme o inventário de Abril

const KASSOUF_PRODUCTS_APR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 49 },
  { name: 'BOTICARIO(BRINDE)', qty: 2 },
  { name: 'CABO 120W 1.8 MTS VIRADO RESPECT', qty: 1 },
  { name: 'CABO DE CARGA TY', qty: 5 },
  { name: 'CABO DE CARGA V8', qty: 3 },
  { name: 'CABO HS 123 HREBOS', qty: 2 },
  { name: 'CABO LIGHTNING 2MTS ESSAGER 29W (IPHONE)', qty: 1 },
  { name: 'CAPA HONOR X5B PLUS', qty: 3 },
  { name: 'CAPA MOTOROLA G24', qty: 1 },
  { name: 'CAPA REALME C51/C53', qty: 13 },
  { name: 'CAPA REALME C55', qty: 1 },
  { name: 'CAPA REALME C67', qty: 5 },
  { name: 'CAPA REDMI 12', qty: 4 },
  { name: 'CAPA REDMI 13', qty: 4 },
  { name: 'CAPA REDMI 13C', qty: 9 },
  { name: 'CAPA REDMI 14C 4G', qty: 14 },
  { name: 'CAPA REDMI A5/ POCO C71', qty: 5 },
  { name: 'CAPA REDMI NOTE 12 4G', qty: 1 },
  { name: 'CAPA REDMI NOTE 12 PRO 4G', qty: 1 },
  { name: 'CAPA REDMI NOTE 12S 4G', qty: 3 },
  { name: 'CAPA REDMI NOTE 13 4G', qty: 14 },
  { name: 'CAPA REDMI NOTE 13 PRO 4G', qty: 15 },
  { name: 'CAPA REDMI NOTE 13 PRO 5G', qty: 26 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO BRANCO', qty: 1 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 1 },
  { name: 'CARREGADOR 20W KD 108C KAIDI', qty: 3 },
  { name: 'CARREGADOR 50W LEHMOX', qty: 1 },
  { name: 'CARREGADOR HONOR 66W C/CABO 1MT (BRINDE 400 LITE)', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 50W', qty: 6 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 15 },
  { name: 'CARREGADOR XIAOMI 120W', qty: 1 },
  { name: 'CARREGADOR Y27-3 H\'MASTON', qty: 3 },
  { name: 'CHIP CLARO PREZÃO', qty: 27 },
  { name: 'CHIP VIVO PRE C REGARGA', qty: 2 },
  { name: 'CHIP VIVO PRE S/ RECARGA', qty: 1 },
  { name: 'COPO STANLEY (BRINDE)', qty: 41 },
  { name: 'FONE BLUETOOTH BASEUS BOWIE E16 BRANCO', qty: 1 },
  { name: 'FONE BLUETOOTH KNC 5603 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 37 },
  { name: 'FONE COM FIO LE-0217 LELONG', qty: 1 },
  { name: 'FONE COM FIO S10+ GALAXY ESTÉRIO', qty: 1 },
  { name: 'HONOR MAGIC 8 LITE 5G 8/512 BLACK', qty: 1 },
  { name: 'HONOR X7D 8/256 DESERT GOLD', qty: 5 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 2 },
  { name: 'IPHONE 14 128G BRANCO ((LACRADO))', qty: 1 },
  { name: 'MOTO G15 4/256 CINZA', qty: 7 },
  { name: 'MOTO G15 4/256 VERDE', qty: 5 },
  { name: 'MOTO G15 8/256 GRAVITY GRAY', qty: 2 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 2 },
  { name: 'MOTO G56 5G 8/256 BLUE OYSTER', qty: 1 },
  { name: 'MOTO G56 5G 8/256 GRAY MIST', qty: 4 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 80 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 130 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 70 },
  { name: 'PELICULA HD HYDROGEL SUPER PREMIUM', qty: 20 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 63 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 4 },
  { name: 'POCO X8 PRO 5G 8/512 WHITE', qty: 1 },
  { name: 'POWER BANK MAGNÉTICO KD 998 PRETO 10000MAH KAIDI', qty: 2 },
  { name: 'REALME C67 8/256 ** S/NFC **BLACK ROCK', qty: 5 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 17 },
  { name: 'REALME C85 8/256 KINGFISHER BLUE', qty: 3 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 3 }
];

const PREMIUM_PRODUCTS_APR_2026 = [
  { name: 'ADAPTADOR TOMADA (BRINDE)', qty: 46 },
  { name: 'BOTICARIO(BRINDE)', qty: 2 },
  { name: 'CABO 120W 7A 2MT (VIRADO) ESSAGER', qty: 1 },
  { name: 'CABO HB 11-2 H\'MASTON', qty: 1 },
  { name: 'CABO LIGHTNING 2MTS ESSAGER 29W (IPHONE)', qty: 1 },
  { name: 'CAPA REALME C61/C63', qty: 3 },
  { name: 'CAPA REDMI A5 / POCO C71', qty: 4 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO BRANCO', qty: 1 },
  { name: 'CARREGADOR 20W ESSAGER COMPLETO PRETO', qty: 1 },
  { name: 'CARREGADOR 20W KD 108C KAIDI', qty: 2 },
  { name: 'CARREGADOR 20W KD 669CC KAIDI', qty: 5 },
  { name: 'CARREGADOR 50W LEHMOX', qty: 2 },
  { name: 'CARREGADOR HONOR 66W C/CABO 1MT (BRINDE 400 LITE)', qty: 1 },
  { name: 'CARREGADOR MOTOROLA 50W', qty: 9 },
  { name: 'CARREGADOR MOTOROLA 68W', qty: 13 },
  { name: 'CARREGADOR ONE PLUS(REALME) 100W COMPLETO', qty: 1 },
  { name: 'CARREGADOR XIAOMI 120W', qty: 1 },
  { name: 'CHIP CLARO PREZÃO', qty: 26 },
  { name: 'COPO STANLEY (BRINDE)', qty: 38 },
  { name: 'FONE BLUETOOTH KD 7101 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH KNC5602 KAIDI', qty: 1 },
  { name: 'FONE BLUETOOTH LENOVO THINKPLUS XT83II', qty: 1 },
  { name: 'FONE BLUETOOTH REDMI AIRDOTS (BRINDE)', qty: 24 },
  { name: 'FONE COM FIO LE-0201 LELONG', qty: 1 },
  { name: 'FONE COM FIO LE-0204 LELONG', qty: 4 },
  { name: 'FONE COM FIO LE-0216 LELONG', qty: 1 },
  { name: 'FONE COM FIO LE-0217 LELONG', qty: 1 },
  { name: 'HONOR MAGIC 8 LITE 5G 8/512 GREEN', qty: 1 },
  { name: 'HONOR X5C PLUS 4/256 MIDNIGHT BLACK', qty: 1 },
  { name: 'HONOR X7D 8/256 DESERT GOLD', qty: 6 },
  { name: 'HONOR X7D 8/256 OCEAN CYAN', qty: 4 },
  { name: 'HONOR X7D 8/256 VELVET BLACK', qty: 1 },
  { name: 'IPHONE 16 128 VERDE', qty: 1 },
  { name: 'MICROFONE SEM FIO KMF4-A KAIDI', qty: 1 },
  { name: 'MOTO G15 4/256 CINZA', qty: 5 },
  { name: 'MOTO G15 4/256 VERDE', qty: 3 },
  { name: 'MOTO G15 8/256 GRAVITY GRAY', qty: 5 },
  { name: 'MOTO G15 8/256 SEA BLUE', qty: 2 },
  { name: 'MOTO G56 5G 8/256 BLUE OYSTER', qty: 1 },
  { name: 'MOTO G56 5G 8/256 GRAY MIST', qty: 2 },
  { name: 'MOTOROLA EDGE 50 5G FUSION 8/256 HOT PINK', qty: 1 },
  { name: 'PELICULA FOSCA HYDROGEL SUPER PREMIUM', qty: 76 },
  { name: 'PELICULA HD HYDROGEL PREMIUM +', qty: 128 },
  { name: 'PELICULA HD HYDROGEL STANDARD', qty: 87 },
  { name: 'PELICULA HD HYDROGEL SUPER PREMIUM', qty: 21 },
  { name: 'PELICULA PRIVACIDADE HYDROGEL SUPER PREMIUM', qty: 70 },
  { name: 'PELICULA TRASEIRA DESENHOS', qty: 12 },
  { name: 'POWER BANK MAGNÉTICO KD 998 BRANCO 10000MAH KAIDI', qty: 1 },
  { name: 'POWER BANK MAGNÉTICO KD 998 PRETO 10000MAH KAIDI', qty: 1 },
  { name: 'REALME C67 8/256 ** S/NFC ** BLACK ROCK', qty: 5 },
  { name: 'REALME C71 8/256 WHITE SWAN', qty: 9 },
  { name: 'REALME C85 8/256 KINGFISHER BLUE', qty: 2 },
  { name: 'REALME C85 8/256 SWAN BLACK', qty: 1 },
  { name: 'REDMI NOTE 15 4G 8/256 PURPLE', qty: 1 }
];

const DOMPEDRO_PRODUCTS_APR_2026 = [
  // COPIAR DADOS DE MARÇO E ATUALIZAR QUANTIDADES
];

const REALME_PRODUCTS_APR_2026 = [
  // COPIAR DADOS DE MARÇO E ATUALIZAR QUANTIDADES
];

const XV_PRODUCTS_APR_2026 = [
  // COPIAR DADOS DE MARÇO E ATUALIZAR QUANTIDADES
];

// ============================================
// REGISTRO DE PERÍODOS DISPONÍVEIS
// ============================================

// Objeto que registra todos os períodos disponíveis
// Para adicionar um novo mês, crie uma entrada aqui
const INVENTORY_PERIODS = {
  '2026-03': {
    label: 'Março 2026',
    stores: {
      kassouf: KASSOUF_PRODUCTS_MAR_2026,
      premium: PREMIUM_PRODUCTS_MAR_2026,
      dompedro: DOMPEDRO_PRODUCTS_MAR_2026,
      realme: REALME_PRODUCTS_MAR_2026,
      xv: XV_PRODUCTS_MAR_2026
    }
  },
  '2026-04': {
    label: 'Abril 2026',
    stores: {
      kassouf: KASSOUF_PRODUCTS_APR_2026,
      premium: PREMIUM_PRODUCTS_APR_2026,
      dompedro: DOMPEDRO_PRODUCTS_APR_2026,
      realme: REALME_PRODUCTS_APR_2026,
      xv: XV_PRODUCTS_APR_2026
    }
  }
  // Adicionar novos meses aqui seguindo o padrão:
  // '2026-05': { label: 'Maio 2026', stores: { ... } }
};

// ============================================
// COMPATIBILIDADE COM CÓDIGO EXISTENTE
// ============================================

// Mantém variáveis antigas para compatibilidade (apontam para Março 2026)
const KASSOUF_PRODUCTS = KASSOUF_PRODUCTS_MAR_2026;
const PREMIUM_PRODUCTS = PREMIUM_PRODUCTS_MAR_2026;
const DOMPEDRO_PRODUCTS = DOMPEDRO_PRODUCTS_MAR_2026;
const REALME_PRODUCTS = REALME_PRODUCTS_MAR_2026;
const XV_PRODUCTS = XV_PRODUCTS_MAR_2026;

// Mapa de produtos por loja (mantido para compatibilidade)
const STORE_PRODUCTS = {
  kassouf: KASSOUF_PRODUCTS,
  premium: PREMIUM_PRODUCTS,
  dompedro: DOMPEDRO_PRODUCTS,
  realme: REALME_PRODUCTS,
  xv: XV_PRODUCTS
};

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

/**
 * Obtém produtos de uma loja para um período específico
 * @param {string} store - Nome da loja (kassouf, premium, etc.)
 * @param {string} period - Período no formato 'YYYY-MM' (ex: '2026-04')
 * @returns {Array} Lista de produtos do período
 */
function getProductsForPeriod(store, period) {
  if (INVENTORY_PERIODS[period] && INVENTORY_PERIODS[period].stores[store]) {
    return INVENTORY_PERIODS[period].stores[store];
  }
  // Fallback para dados antigos
  return STORE_PRODUCTS[store] || [];
}

/**
 * Obtém lista de períodos disponíveis
 * @returns {Array} Lista de objetos {value, label}
 */
function getAvailablePeriods() {
  return Object.keys(INVENTORY_PERIODS).map(function(key) {
    return {
      value: key,
      label: INVENTORY_PERIODS[key].label
    };
  });
}

/**
 * Verifica se um período possui dados
 * @param {string} period - Período no formato 'YYYY-MM'
 * @returns {boolean}
 */
function hasPeriodData(period) {
  if (!INVENTORY_PERIODS[period]) return false;
  const stores = INVENTORY_PERIODS[period].stores;
  return Object.keys(stores).some(function(store) {
    return stores[store] && stores[store].length > 0;
  });
}

/**
 * Carrega produtos de Excel (futuro)
 * @param {string} store - Nome da loja
 * @param {string} period - Período no formato 'YYYY-MM'
 * @param {Array} data - Dados do Excel parseados
 */
function loadProductsFromExcel(store, period, data) {
  var formatted = data.map(function(row) {
    return {
      name: row.nome || row.produto || row.item || row.name || '',
      qty: parseInt(row.qty || row.quantidade || row.qtd || row.estoque || row.quantity || 0)
    };
  });
  
  // Se o período existe, atualiza os produtos da loja
  if (INVENTORY_PERIODS[period]) {
    INVENTORY_PERIODS[period].stores[store] = formatted;
  }
  
  // Atualiza também o mapa de compatibilidade
  if (period === '2026-03') {
    STORE_PRODUCTS[store] = formatted;
  }
}

// ============================================
// CHECKLIST PARA ADICIONAR NOVO MÊS
// ============================================
/*

1. COPIAR PRODUTOS DO MÊS ANTERIOR:
   - Copie os arrays _MAR_2026 e renomeie para o novo mês (ex: _APR_2026)

2. ATUALIZAR QUANTIDADES:
   - Substitua os valores de 'qty' pelos novos estoques
   - Adicione/remova produtos conforme necessário

3. ATUALIZAR INVENTORY_PERIODS:
   - Adicione nova entrada no objeto INVENTORY_PERIODS
   - Exemplo:
     '2026-05': {
       label: 'Maio 2026',
       stores: {
         kassouf: KASSOUF_PRODUCTS_MAY_2026,
         premium: PREMIUM_PRODUCTS_MAY_2026,
         ...
       }
     }

4. ATUALIZAR app.js:
   - Adicione a nova opção no <select> de meses
   - Exemplo: <option value="2026-05">Maio 2026</option>

5. TESTAR:
   - Abra o sistema e verifique se o novo mês aparece
   - Verifique se os produtos estão corretos
   - Teste a troca entre meses

*/

// ============================================
// EXPORTS (para módulos se necessário)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    STORE_CREDENTIALS: STORE_CREDENTIALS,
    STORE_NAMES: STORE_NAMES,
    INVENTORY_PERIODS: INVENTORY_PERIODS,
    getProductsForPeriod: getProductsForPeriod,
    getAvailablePeriods: getAvailablePeriods,
    hasPeriodData: hasPeriodData,
    loadProductsFromExcel: loadProductsFromExcel
  };
}
