export { chats };

const chats = {
    chat_0_01: {"steps": [
        {
            "type": "eginaLine",
            "line": "Pozdrav agente, ja sam eGina, vodit ću te kroz ovu operaciju. Cilj je Narodni muzej Zadar. Javi se kad stigneš.",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "I žuri! Nemamo puno vremena. 🏃‍♂️🏃‍♂️"
        },
        {
            "type": "playerLine",
            "line": "Tu sam."
        },
        {
            "type": "playerImage",
            "url": "chat/0-01.jpg", "w": 200, "h": 200
        },
        {
            "type": "eginaLine",
            "line": "Neeee!!!!!! 🤬🤬🤬",
            "delay": 5000
        },
        {
            "type": "eginaLine",
            "line": "To je stara zgrada muzeja!"
        },
        {
            "type": "eginaLine",
            "line": "Muzej je sada u Dvije palače. Adresa je Trg Petra Zoranića 1, Zadar."
        },
        {
            "type": "eginaLine",
            "line": "Ovako izgleda:"
        },
        {
            "type": "eginaImage",
            "url": "chat/0-02.jpg", "w": 200, "h": 200
        },
        {
            "type": "eginaLine",
            "line": "I trči!!!!! Vrijeme je kritično! 🕗🕗🕗🚀🚀"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok, mislim da sam stigao na pravo mjesto.",
                    "next": "setChat",
                    "chat": "chat_0_02", 
                    "room": "room_0_01"
                }
            ],
        }
    ]},
    chat_0_01_BALK: {"steps": [
        {
            "type": "playerLine",
            "line": "Neki balkon."
        },
        {
            "type": "eginaLine",
            "line": "S njega je providur Dalmacije nadgledao regiju svoje uprave."
        }
    ]},
    chat_0_02: {"steps": [
        {
            "type": "eginaLine",
            "line": "Napokon! Uđi u muzej.",
            "delay": 1500
        },
        {
            "type": "eginaLine",
            "line": "Obrati pažnju na svaki detalj. Sve može biti korisno.",
            "delay": 1500
        }
    ]},
    chat_0_DP: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neka zastava."
        },
        {
            "type": "eginaLine",
            "line": "Dvije palače. Spojena kneževa i providurova palača pretvoreni su u muzej. Na dobrom smo mjestu."
        }
    ]},
    chat_0_ZB: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Zadar baštini."
        },
        { 
            "type": "eginaLine",
            "line": "sec da provjerim"
        },
        {
            "type": "eginaLine",
            "line": "Zadar baštini, kaže ovako: projekt očuvanja, revitalizacije i integracije kulturne baštine. Da, unutra je što nas zanima. Idemo!",
            "delay": 2500
        }
    ]},
    chat_0_ZV: {"steps": [
        {
            "type": "playerLine",
            "line": "Zatvoreno je."
        },
        {
            "type": "eginaLine",
            "line": "Prvo moraš znati gdje ideš. Desno je mapa muzeja."
        }
    ]},
    chat_0_03: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ok sad budi pažljiv. Svaka pogreška nas košta vremena. Ako ne riješimo problem dok ti ne istekne baterija misija je propala."
        },
        {
            "type": "playerLine",
            "line": "Okeeej."
        }
    ]},
    chat_0_03_EKR: {"steps": [
        {
            "type": "playerLine",
            "line": "Ekrani."
        },
        {
            "type": "eginaLine",
            "line": "To je dio promjenjivog postava. To nas sad ne zanima."
        }
    ]},
    chat_0_NO: {"steps": [
        {
            "type": "eginaLine",
            "line": "Vrati se unutra. Nemamo vremena za šetnje po gradu."
        }
    ]},
    chat_0_06: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, sad pažljivo. Moraš znati u koji dio muzeja idemo. Pazi, zbog svake pogreške će se potrošiti dio baterije."
        },
        {
            "type": "eginaLine",
            "line": "Ako baterija 🔋 padne na nulu gotovi smo, misija je propala."
        },
        {
            "type": "eginaLine",
            "line": "Koliko baterije ti je ostalo?"
        },
        {
            "type": "playerLine",
            "line": "99%"
        },
        {
            "type": "eginaLine",
            "line": "To će biti dovoljno ako ne griješiš previše."
        },
        {
            "type": "playerLine",
            "line": "Potrudit ću se."
        },
        {
            "type": "eginaLine",
            "line": "Prvi zadatak: u koji dio muzeja idemo? Meni piše ovako: 'Šest salonskih priča'. Stalna izložba iz fundusa Odjela Muzeja grada Zadra NMZ. Izložbeni saloni - Kneževa palača."
        },
        {
            "type": "eginaLine",
            "line": "Klikni na dio mape gdje se nalazi Šest salonskih priča."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Kako to točno radi?",
                    "next": "setChat",
                    "chat": "chat_0_06_help",
                    "removeChoices": true
                }
            ],
        }
    ]},
    chat_0_06_help: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Na mobitelu imaš ikonu za Wi-Fi. Klikni je i označit će ti se moguća mjesta za klikanje. To će pomoći."
        },
        {
            "type": "eginaLine",
            "line": "Što se mape tiče, postoji pet zona. Ono što tražimo je u kneževoj palači, ne providurovoj."
        }
    ]},
    chat_0_06_win: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!! 💚💚💚💚💚💚"
        },
        {
            "type": "eginaLine",
            "line": "A sad idi tamo."
        }
    ]},
    chat_0_06_lose: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "O, neee! ☹️☹️☹️ Nije taj dio muzeja. Molim te razmisli malo, trošiš bateriju 🔋 Koliko mi se čini stalna postava je na prvom katu."
        }
    ]},
    chat_0_06_lose2: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Jao!! 👎👎👎 Nije to. Molim te pazi, trošiš bateriju 🔋. Čini mi se da je kat dobar, ali sobe krive."
        }
    ]},
    chat_0_06_lose3: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Ne!! 😟😟😟 To je krivo. Pazi, pogreške troše bateriju 🔋. Stalna postava nije u providurovoj palači."
        }
    ]},    
    chat_0_06_lose4: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "Neeeee!! 👎👎👎 😟 Pazi, pogreške troše bateriju 🔋. Padne li baterija na 0% misija propada! 😟"
        }
    ]},
    chat_0_06_noback: {"steps": [
        {
            "type": "eginaLine",
            "line": "Prvo izaberi dio mape muzeja u koji ideš."
        }
    ]},
    chat_0_08_EKR: {"steps": [
        {
            "type": "playerLine",
            "line": "Kneževa palača."
        },
        {
            "type": "eginaLine",
            "line": "Tamo idemo. Iz nje je zadarski knez upravljao gradom još od 13. stoljeća."
        },
        {
            "type": "playerLine",
            "line": "Preko sto godina. 😵"
        },
        {
            "type": "eginaLine",
            "line": "Zapravo preko sedamsto. 😇"
        },
    ]},
    chat_0_09: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ovo je dobar smjer. Nastavi stepenicama."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Što nam je zadatak?",
                    "next": "setChat",
                    "chat": "chat_0_11B",
                    "removeChoices": true
                }
            ],
        }
    ]},
    chat_0_10: {"steps": [
        {
            "type": "eginaLine",
            "line": "To nije put za šest salona."
        }
    ]},
    chat_0_10_vrata: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Tu je neki prolaz."
        },
        {
            "type": "eginaLine",
            "line": "Ne idemo tamo. Vrati se i idi na kat."
        }
    ]},
    chat_0_11B: {"steps": [
        {
            "type": "eginaLine",
            "line": "Još ne znam. Ali znam da će biti gusto. Držim fige da zadaci ne budu teški 🤞"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Hvala.",
                    "next": "setChat",
                    "chat": "chat_0_11C"
                }
            ],
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Meni teški? Ha-ha! Rasturam muzeje. 😎",
                    "next": "setChat",
                    "chat": "chat_0_11D"
                }
            ],
        }
    ]},
    chat_0_11C: {"steps": [
        {
            "type": "eginaLine",
            "line": "Samo pazi na bateriju 🔋🔋🔋 Svaka greška skupo košta."
        }
    ]},
    chat_0_11D: {"steps": [
        {
            "type": "eginaLine",
            "line": "🐵"
        }
    ]},
    chat_0_14: {"steps": [
        {
            "type": "eginaLine",
            "line": "To je to. Ok, agente, krenimo. Unutra nas čeka rješenje."
        }
    ]},
    chat_1_01: {"steps": [
        {
            "type": "playerLine",
            "line": "Ušao sam. Što tražimo?"
        },
        {
            "type": "eginaLine",
            "line": "Još ne znam. Negdje u stalnom postavu skriven je ključ. Imam samo vrlo mutne tragove. U kojoj si sobi?",
            "delay": 1000 
        },
        {
            "type": "playerLine",
            "line": "Tu je nekakav namještaj.",
            "delay": 500 
        },
        {
            "type": "eginaLine",
            "line": "Ček da provjerim.",
            "delay": 500 
        },
        {
            "type": "eginaLine",
            "line": "Ok, u šest salonskih soba ima više namještaja. Je li taj namještaj bidermajer ili rokoko?",
            "delay": 2500
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Roko-što?",
                    "next": "setChat",
                    "chat": "chat_1_02"
                },{
                    "text": "Bid? Maj?",
                    "next": "setChat",
                    "chat": "chat_1_02"
                },{
                    "text": "Nemam pojma. Može pomoć?",
                    "next": "setChat",
                    "chat": "chat_1_02"
                }
            ],
        }
    ]},
    chat_1_salon2: {"unstopping":true,"steps": [
        {
            "type": "eginaLine",
            "line": "To je drugi salon. Prvo moramo riješiti probleme iz ovog."
        }
    ]},
    chat_1_02: {"steps": [
        {
            "type": "eginaLine",
            "line": "O, ne! 😱😱😱 Nemoj mi reći da ne raspoznaješ umjetnost."
        },
        {
            "type": "eginaLine",
            "line": "Slušaj, situacija je stvarno ozbiljna. Izgubit ćemo puno vremena na tvoje pogreške, a time i baterije tvog mobitela.",
            "delay": 1500 
        },
        {
            "type": "eginaLine",
            "line": "Nemam vremena učiti te povijest umjetnosti, pa ću ti dati kratke upute a ti se probaj snaći.",
            "delay": 1500 
        },
        {
            "type": "eginaLine",
            "line": "Ako baš nisi siguran možeš pitati za pomoć ja ću u tom slučaju prosurfati pa ti dati preciznije upute, ali to će nas koštati baterije. Manje nego za pogreške, ali ipak...",
            "delay": 1500 
        },
        {
            "type": "eginaLine",
            "line": "Idemo ponovo, jesi li spreman?"
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Spreman!",
                    "next": "setChat",
                    "chat": "chat_1_03"
                }
            ],
        }
    ]},
    chat_1_03: {"steps": [
        {
            "type": "eginaLine",
            "line": "Rokoko je kićast, preukrašen i lakomislen no ipak profinjen. Vizualiziraj vrckave francuske careve."
        },
        {
            "type": "eginaLine",
            "line": "Bidermajer je dobroćudna, ograničena malograđanina. Skroman ali decentan. Vizualiziraj suzdržane bečke dame.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Kojeg je stila namještaj u sobi?"
        },
        {
            "type": "eginaLine",
            "line": "Prije nego odgovoriš možeš prošetati po sobi i bolje pogledati."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Rokoko",
                    "next": "setChat",
                    "chat": "chat_1_03win",
                    "func": "animateWin",
                },{
                    "text": "Bidermajer",
                    "next": "setChat",
                    "chat": "chat_1_03lose",
                    "func": "animateLose",
                    "drainBattery": 5
                }
            ],
        }
    ]},
    chat_1_03lose: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne 😪",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Ok, izgubili smo malo baterije, nema veze, idući put ćeš bolje.",
            "delay": 600 
        },
        {
            "type": "rollNext",
            "next": "setChat",
            "chat": "chat_1_04"
        }
    ]},
    chat_1_03win: {"steps": [
        {
            "type": "eginaLine",
            "line": "Bravo!!! 🥳 Nisam sumnjala u tebe!",
            "delay": 2000
        },
        {
            "type": "rollNext",
            "next": "setChat",
            "chat": "chat_1_04"
        }
    ]},
    chat_1_04: {"steps": [
        {
            "type": "eginaLine",
            "line": "To je Luxardova neorokoko soba. Luxardo je veliki zadarski proizvođač maraskina. Dao je izraditi ovaj namještaj početkom 20st u stilu venecijanskog barocchetta.",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Sad mi je vrlo važno znati koliko točno elemenata namještaja spada u Luxardov komplet.",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Molim te dobro se upoznaj sa sobom prije nego odgovoriš. Koji komadi namještaja spadaju u Luxardov komplet?",
            "delay": 500
        },
        {
            "type": "rollNext",
            "next": "setChat",
            "chat": "chat_1_05"
        }
    ]},
    chat_1_s4_detail: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Kao nekakva šiška."
        },
        {
            "type": "eginaLine",
            "line": "Motiv šiške nije uobičajen u baroknom namještaju. Cvjetovi, listovi, školjke, da; šiška ne baš. Zanimljivo."
        }
    ]},
    chat_1_05: {"steps": [
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Krevet i noćni ormarići",
                    "next": "setChat",
                    "chat": "chat_1_06lose",
                    "func": "animateLose",
                    "drainBattery": 5
                },{
                    "text": "Krevet, noćni ormarići i komoda",
                    "next": "setChat",
                    "chat": "chat_1_06win",
                    "func": "animateWin"
                },{
                    "text": "Krevet, noćni ormarići, komoda i ogledalo",
                    "next": "setChat",
                    "chat": "chat_1_06lose",
                    "func": "animateLose",
                    "drainBattery": 5
                },{
                    "text": "Krevet, noćni ormarići, komoda, ogledalo i konzolni stolić",
                    "next": "setChat",
                    "chat": "chat_1_06lose",
                    "func": "animateLose",
                    "drainBattery": 5
                }
            ],
        }
    ]},
    chat_1_06lose: {"steps": [
        {
            "type": "eginaLine",
            "line": "Nope 😐🥵🔋",
            "delay": 2000
        },
        {
            "type": "eginaLine",
            "line": "Probaj ponovo.",
            "delay": 1500 
        },
        {
            "type": "rollNext",
            "next": "setChat",
            "chat": "chat_1_05"
        }
    ]},
    chat_1_06win: {"steps": [
        {
            "type": "eginaLine",
            "line": "O-la-la!! 💚 Yes!!",
            "delay": 2000
        },
        {
            "type": "rollNext",
            "next": "setChat",
            "chat": "chat_1_07"
        }
    ]},
    chat_1_07: {"steps": [
        {
            "type": "eginaLine",
            "line": "Još imam neke zadatke vezane uz ovaj komplet. Nagledat ćeš se venecijanskih ormarića čini mi se.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Samo navali! Ja sam majstor za kićasto i preukrašeno.",
                    "setProgress": "butterfly",
                    "next": "setChat",
                    "chat": "chat_1_08"
                }
            ],
        }
    ]},
    chat_1_08: {"steps": [
        {
            "type": "eginaLine",
            "line": "Nađi komodu. Onu ispod ogledala koje nije dio kompleta, to si dobro pogodio.",
            "delay": 2000
        },{
            "type": "eginaLine",
            "line": "Pogledaj gornju ploču te komode i na njoj pronađi crtež leptira.",
            "delay": 2000
        }
    ]},
    chat_1_08a: {"steps": [
        {
            "type": "playerLine",
            "line": "Vidim ga."
        },{
            "type": "eginaLine",
            "line": "To je divan mali rokoko leptirić. Ima ga svaki komad Luxardovog namještaja i to nekoliko komada."
        },{
            "type": "eginaLine",
            "line": "Međutim, čini se da u Luxardovom kompletu postoji i neka subverzija."
        },{
            "type": "eginaLine",
            "line": "Venecijanski majstor koji je radio ovaj komplet po narudžbi, podvalio je nešto, ne znam što. Pregledaj sve leptire i pronađi onog koji nije kao ostali.",
            "delay": 2500
        },{
            "type": "playerLine",
            "line": "U čemu je stvar?"
        },{
            "type": "eginaLine",
            "line": "Namještaj je izrađen u venecijanskoj radionici negdje početkom 20. stoljeća. To je moderno doba, a Luxardo je htio stil star stotinu i pedeset godina.",
            "delay": 2500
        },{
            "type": "playerLine",
            "line": "Misliš da je majstor nešto sakrio?"
        },{
            "type": "eginaLine",
            "line": "Još ne znam. Pronađi mi leptira koji nije kao drugi pa ću istražiti."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok, pronaći ću ga.",
                    "setProgress": "bug_hunt",
                    "removeChoices": true
                }
            ],
        }
    ]},
    chat_1_k2_leptir1: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Crveni leptir."
        },
        {
            "type": "eginaLine",
            "line": "Rokoko bio je lud za leptirima. Zvali su ih leteći cvjetovi. 🦋🦋🦋"
        }
    ]},
    chat_1_k2_leptir2: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Plavi leptir."
        },
        {
            "type": "eginaLine",
            "line": "Leptir je simbol transformacije. Od ružne gusjenice do prelijepog leptira. Ne znam koliko se Luxardo doživljavao u tome."
        }
    ]},
    chat_1_k2_leptir3: {"steps": [
        {
            "type": "playerLine",
            "line": "Ovdje je neki čudni kukac. Čini mi se da to nije leptir."
        },
        {
            "type": "eginaLine",
            "line": "To tražimo!! 💚💚💚 Bravo! Vrsan si entomolog. 🐞🐜🕷🦗",
            "delay": 2000
        },
        {
            "type": "playerLine",
            "line": "Ja sam superjunak Butterflyman! 🤸‍♂️"
        },
        {
            "type": "rollNext",
            "next": "setChat",
            "chat": "chat_1_10"
        }
    ]},
    chat_1_10: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ok, krećemo na idući zadatak, Butterflyman. U sobi si trebao vidjeti dvije slike.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Jesam",
                    "next": "setChat",
                    "chat": "chat_1_11"
                }
            ],
        }
    ]},
    chat_1_11: {"steps": [
        {
            "type": "eginaLine",
            "line": "To su slike koje prikazuju različita pjevanja spjeva Torquata Tassa 'Oslobođeni Jeruzalem' iz 1575.",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Da bi išli dalje moraš mi prepoznati na kojoj je slici Armida. To je protagonistica iz spjeva.",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Tema spjeva je Prvi križarski rat i osvajanje Jeruzalema. Armida je nećakinja kralja Damaska, čarobnica koja je zavela glavnoga križara Rinalda koji je ostavio vojsku pa pošao za njom na otok sreće.",
            "delay": 2000
        },{
            "type": "playerLine",
            "line": "Opa!"
        },{
            "type": "eginaLine",
            "line": "Ipak, uvijek trijeznog Goffreda, glavnog lika spjeva, nije mogla očarati.",
            "delay": 1000
        },{
            "type": "playerLine",
            "line": "Pih."
        },{
            "type": "eginaLine",
            "line": "Pažljivo pregledaj obje slike i reci mi na kojoj je Armida.",
            "delay": 1000
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Armida je na slici s plemićima i robovima",
                    "next": "setChat",
                    "chat": "chat_1_11a"
                },{
                    "text": "Armida je na slici s djecom i janjetom",
                    "next": "setChat",
                    "chat": "chat_1_11a"
                },{
                    "text": "Nemam blagog pojma 🤔",
                    "next": "setChat",
                    "chat": "chat_1_11b",
                }
            ],
        }
    ]},
    chat_1_11a: {"steps": [
        {
            "type": "eginaLine",
            "line": "Jesi li siguran?",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Da 🤥",
                    "next": "setChat",
                    "chat": "chat_1_11b",
                },{
                    "text": "Ne 😬",
                    "next": "setChat",
                    "chat": "chat_1_11b",
                }
            ],
        }
    ]},
    chat_1_11b: {"steps": [
        {
            "type": "eginaLine",
            "line": "Budi pažljiv, ovo nam može iscrpiti puno baterije.",
            "delay": 600
        },{
            "type": "eginaLine",
            "line": "Armida je kompleksan lik, fatalne žena. Prvo proždire muškarce da bi do kraja spjeva postala pokorna sljedbenica vjere.",
            "delay": 1500
        },{
            "type": "eginaLine",
            "line": "Piše ovako: Armida je bila žena neodoljive tjelesne ljepote.",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Armida je na slici s plemićima i robovima, siguran sam.",
                    "next": "setChat",
                    "chat": "chat_1_11win1",
                    "func": "animateWin"
                },{
                    "text": "Armida je na slici s djecom i janjetom, siguran sam.",
                    "next": "setChat",
                    "chat": "chat_1_11lose1",
                    "func": "animateLose",
                    "drainBattery": 7
                },{
                    "text": "Još uvijek ne znam, na obje slike je lijepa žena.",
                    "next": "setChat",
                    "chat": "chat_1_11c",
                }
            ],
        }
    ]},
    chat_1_11c: {"steps": [
        {
            "type": "eginaLine",
            "line": "Nemam vremena kopati dublje po spjevu. Moraš odlučiti.",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Evo stihovi iz spjeva, pa ti vidi:",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Pjevaše: Gledaj ružu, gdje ozdňla, kroz zčlen pupa, djevičanski skromno, napol je skrita, otvorena pňla, što manje vidna, lijepo i pitomno više se kaže, širi prsa gola, a kada vehne i malakše lomno, od mnoštva više željkovana nije od ljubovnikâ i dekli kô prije.",
            "delay": 2000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Napol je skrita!! Armida je na slici s plemićima i robovima.",
                    "next": "setChat",
                    "chat": "chat_1_11win1",
                    "func": "animateWin"
                },{
                    "text": "Prsa gola!! Armida je na slici s djecom i janjetom.",
                    "next": "setChat",
                    "chat": "chat_1_11lose1",
                    "func": "animateLose",
                    "drainBattery": 7
                }
            ],
        }
    ]},
    chat_1_11win1: {"steps": [
        {
            "type": "eginaLine",
            "line": "Odlično. No trebat ćemo još nešto. Pogledaj sliku s Armidom i pronađi viteza koji stoji pred njom.",
            "delay": 1000
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok",
                    "setProgress": "crusader",
                    "removeChoices": true
                }
            ],
        }
    ]},
    chat_1_11lose1: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne, situacija mi ne odgovara. Kvragu 😰😰😰😰😰.",
            "delay": 1000
        },
        {
            "type": "eginaLine",
            "line": "Armida je ona dama na slici s plemićima."
        },
        {
            "type": "eginaLine",
            "line": "S janjem je Erminia is spjeva VII, koju spase pastiri kad je vojnici greškom napadnu."
        },
        {
            "type": "playerLine",
            "line": "O, nesretne dike ter hvaljenja :("
        },
        {
            "type": "playerLine",
            "line": "Moram više čitati srednjevjekovne spjevove."
        },
        {
            "type": "eginaLine",
            "line": "Ok, nema veze. Ali moraš mi nešto drugo provjeriti. Pogledaj sliku s Armidom i pronađi viteza koji stoji pred njom."
        },
        {
            "type": "choice",
            "choices": [
                {
                    "text": "Ok",
                    "setProgress": "crusader",
                    "removeChoices": true
                }
            ],
        }
    ]},
    chat_1_armida: {"steps": [
        {
            "type": "eginaLine",
            "line": "To je Armida, princeza Damaska, čarobnica i zavodnica."
        }
    ]},
    chat_1_11quest: {"steps": [
        {
            "type": "eginaLine",
            "line": "Sad vrlo pažljivo pogledaj tog križara i reci mi je li on Rinaldo ili Goffredo?"
        },
        {
            "type": "playerLine",
            "line": "Kako to mogu znati?"
        },
        {
            "type": "eginaLine",
            "line": "Sjeti se, jednog je očarala, a drugi je bio skeptičan i trezven pa se nije dao zavesti."
        },{
            "type": "choice",
            "choices": [
                {
                    "text": "Rinaldo, onaj koji ju je pratio na otok sreće 💘",
                    "next": "setChat",
                    "chat": "chat_1_11lose2",
                    "func": "animateLose",
                    "drainBattery": 5
                },{
                    "text": "Goffredo, onaj kojeg nije uspjela očarati 💔",
                    "next": "setChat",
                    "chat": "chat_1_11win2",
                    "func": "animateWin"
                }
            ],
        }
    ]},
    chat_1_11win2: {"steps": [
        {
            "type": "eginaLine",
            "line": "Yes!!! 🏆🏆🏆🏆🏆 Bravo agente! Ušla sam u program za drugu sobu. Idemo dalje!",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Idi u drugi salon, ovdje smo sve riješili."
        },{
            "type": "playerLine",
            "line": "Prvi od šest!"
        },{
            "type": "eginaLine",
            "line": "🏴‍☠️🏴‍☠️🏴‍☠️ *** KRAJ DEMO-a *** 🏴‍☠️🏴‍☠️🏴‍☠️"
        }
    ]},
    chat_1_11lose2: {"steps": [
        {
            "type": "eginaLine",
            "line": "Ne!! Jaoooo 🤕🤕🤕 Ok, izgubili smo malo baterije, ali sam ušla sam u program za drugu sobu. Idemo dalje!",
            "delay": 1000
        },{
            "type": "eginaLine",
            "line": "Idi u drugi salon, ovdje smo sve riješili."
        },{
            "type": "playerLine",
            "line": "Prvi od šest!"
        },{
            "type": "eginaLine",
            "line": "🏴‍☠️🏴‍☠️🏴‍☠️ *** KRAJ DEMO-a *** 🏴‍☠️🏴‍☠️🏴‍☠️"
        }
    ]},
    chat_1_o9_detail: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Cvijeće."
        },
        {
            "type": "eginaLine",
            "line": "Cvijetni motivi su vrlo česti u rokokou. Koristili su ih kako bi stvorili romantičnu i raskošnu atmosferu."
        }
    ]},
    chat_1_10_detail: {"steps": [
        {
            "type": "playerLine",
            "line": "Puno cvijeća."
        },
        {
            "type": "eginaLine",
            "line": "Rokoko je pun cvijeća. Naći ćeš ga na svim mogućim tipovima namještaja, uvijek elegnatno i nježno."
        }
    ]},
    chat_1_o6_detail: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Još jedan leptir."
        },
        {
            "type": "eginaLine",
            "line": "Leptir je hit motiv u rokoko stilu umjetnosti, uključujući namještaj."
        }
    ]},
    chat_1_o3_leptir: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Bijeli leptir."
        },{
            "type": "eginaLine",
            "line": "Čudno, rokoko voli boje i šareno. Pastelno, crveno, zlatno."
        },{
            "type": "eginaLine",
            "line": "Bijeli leptir odudara, ali to nije ono što tražimo."
        }
    ]},
    chat_1_ka2_leptir: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "I ovdje je leptir."
        },{
            "type": "eginaLine",
            "line": "Nijedan stil nije stvorio ljupkije i elegantnije kreacije, smatrali su ljubitelji rokokoa."
        },{
            "type": "eginaLine",
            "line": "A kritičari su riječ rokoko koristili pogrdno u značenju neozbiljan i pomodan."
        },{
            "type": "playerLine",
            "line": "Leptiričast."
        },{
            "type": "eginaLine",
            "line": "Točno to! 😝"
        }
    ]},
    chat_1_k3_leptir: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Leptiri i cvijeće."
        },{
            "type": "eginaLine",
            "line": "Luxardo je proizvodio maraschino, liker od višnji maraski. Očekivala bi vidjeti bar koju višnju na tom namještaju."
        }
    ]},
    chat_1_ka4_detail1: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neka djeca."
        },{
            "type": "eginaLine",
            "line": "Možda anđeli? Klasičan motiv baroka. Veza čovjeka s Bogom Lete li?"
        },{
            "type": "playerLine",
            "line": "Ne."
        },{
            "type": "eginaLine",
            "line": "Onda su možda samo djeca."
        }
    ]},
    chat_1_ka4_detail2: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Gole grudi."
        },{
            "type": "eginaLine",
            "line": "Antička ljepota. Također simbol čednosti i nevinosti."
        },{
            "type": "playerLine",
            "line": "I ženstvenosti?"
        },{
            "type": "eginaLine",
            "line": "Naravno."
        }
    ]},
    chat_1_ka4_detail3: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Janje."
        },{
            "type": "eginaLine",
            "line": "Janje božje, često simbol Isusa Krista i kroz njega simbol pravednosti, dobrote i nesebičnosti."
        }
    ]},
    chat_1_s5_detail1: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Neki ljudi kleče."
        },{
            "type": "eginaLine",
            "line": "Riječ je o kršćanskim ratovima. To su porobljeni muslimani"
        }
    ]},
    chat_1_s5_detail2: {"unstopping":true,"steps": [
        {
            "type": "playerLine",
            "line": "Čudno su obučeni za križarske ratove."
        },{
            "type": "eginaLine",
            "line": "Obučeni su u modi vremena kad je slika nastala. Klasičan problem slikarstva u vrijeme prije televizije."
        },{
            "type": "playerLine",
            "line": "Nisu imali televiziju, ha-ha! 😃"
        },{
            "type": "eginaLine",
            "line": "Ni internet."
        },{
            "type": "playerLine",
            "line": "😱"
        }
    ]},
};


