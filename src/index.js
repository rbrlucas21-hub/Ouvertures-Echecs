function buildOpeningPosition(moves) {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const board = new Map();

  files.forEach((file, index) => {
    const whiteBackRank = ["R", "N", "B", "Q", "K", "B", "N", "R"];
    const blackBackRank = ["r", "n", "b", "q", "k", "b", "n", "r"];

    board.set(`${file}1`, { square: `${file}1`, type: whiteBackRank[index], color: "w" });
    board.set(`${file}8`, { square: `${file}8`, type: blackBackRank[index], color: "b" });
    board.set(`${file}2`, { square: `${file}2`, type: "P", color: "w" });
    board.set(`${file}7`, { square: `${file}7`, type: "p", color: "b" });
  });

  moves.forEach(([from, to]) => {
    const piece = board.get(from);
    if (!piece) {
      return;
    }

    board.delete(from);
    board.set(to, { ...piece, square: to });
  });

  return Array.from(board.values());
}

function buildOpeningSetup({ whiteMoved = [], blackMoved = [] } = {}) {
  const startingBoard = new Map();
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

  files.forEach((file, index) => {
    const whiteBackRank = ["R", "N", "B", "Q", "K", "B", "N", "R"];
    const blackBackRank = ["r", "n", "b", "q", "k", "b", "n", "r"];

    startingBoard.set(`${file}1`, { square: `${file}1`, type: whiteBackRank[index], color: "w" });
    startingBoard.set(`${file}8`, { square: `${file}8`, type: blackBackRank[index], color: "b" });
    startingBoard.set(`${file}2`, { square: `${file}2`, type: "P", color: "w" });
    startingBoard.set(`${file}7`, { square: `${file}7`, type: "p", color: "b" });
  });

  [...whiteMoved, ...blackMoved].forEach(([from, to]) => {
    const piece = startingBoard.get(from);
    if (!piece) {
      return;
    }

    startingBoard.delete(from);
    startingBoard.set(to, { ...piece, square: to });
  });

  return Array.from(startingBoard.values());
}

const openings = [
  {
    id: "ruy-lopez",
    name: "Partie espagnole",
    eco: "C60",
    family: "Ouverture classique",
    players: ["Fischer", "Capablanca", "Kasparov"],
    summary:
      "La Partie espagnole est la référence classique du jeu de pièces. Elle offre un développement harmonieux, du contrôle central et une pression durable sur la structure noire.",
    basePieces: buildOpeningPosition([
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "b5"]
    ]),
    idea: [
      "Le blanc cherche à construire une position solide avec une activité supérieure des pièces.",
      "Le point d’appui sur e5 et la pression sur f7 font partie du cœur stratégique de l’ouverture.",
      "L’objectif est de garder l’avantage de l’espace et de provoquer des complications précises sans précipiter le jeu."
    ],
    theory: [
      {
        moves: "1.e4 e5 2.Cf3 Cc6 3.Fb5",
        evaluation: "Le blanc obtient un petit avantage stratégique. La position reste solide, mais le camp blanc a une meilleure activité et un meilleur contrôle du centre.",
        plan: "Le but est de garder la pression sur la case e5 et d’intégrer la menace sur f7 sans précipiter le jeu."
      },
      {
        moves: "3...a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6",
        evaluation: "La qualité de la position est légèrement meilleure pour les blancs. Le développement est plus propre et la mobilité de leurs pièces est supérieure.",
        plan: "Le blanc continue à développer proprement et à pousser le noir vers un jeu de pièces délicat."
      },
      {
        moves: "8.c3 0-0 9.h3 h6 10.d4",
        evaluation: "Le centre est plus contesté et le blanc bénéficie d’une structure plus solide et d’un meilleur espace.",
        plan: "Le noir doit gérer la pression sur d5 et la structure de pion centrale."
      },
      {
        moves: "10...Cd7 11.Cbd2 Cf8 12.b4",
        evaluation: "Le plan blanc vise l’espace et la domination, plus que la tactique immédiate. La position reste favorable sur le plan stratégique.",
        plan: "Le noir doit répondre au contrôle de la diagonale et aux menaces sur c5."
      }
    ],
    variants: [
      {
        title: "Variante ouverte",
        text: "Le centre s’ouvre tôt et la position devient très dynamique avec des pièces actives et des ambitions tactiques.",
        lines: [
          {
            moves: "1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6 8.c3 0-0 9.h3 h6 10.d4",
            evaluation: "Le blanc garde un petit avantage structurel grâce à son meilleur développement et à la pression sur le centre.",
            plan: "Le noir cherche à gérer le centre et la structure sans perdre le rythme du développement."
          },
          {
            moves: "10...Cd7 11.Cbd2 Cf8 12.b4",
            evaluation: "Le camp blanc a l’initiative stratégique, surtout sur les diagonales et la case d5.",
            plan: "Le noir doit se défendre calmement et chercher à contraindre l’espace blanc."
          }
        ]
      },
      {
        title: "Défense berlinoise",
        text: "Le noir défend sa structure et cherche un jeu solide, souvent plus ferme et plus technique.",
        lines: [
          {
            moves: "1.e4 e5 2.Cf3 Cc6 3.Fb5 Cf6 4.0-0 Cxe4 5.d4",
            evaluation: "Les blancs obtiennent une meilleure coordination et la position est plus agréable au plan stratégique.",
            plan: "Le noir doit rester méthodique et ne pas se laisser entraîner trop vite dans la tactique."
          },
          {
            moves: "5...Cd6 6.Fxc6 bxc6 7.dxe5 Cb7",
            evaluation: "La position est équilibrée, mais la pression sur le roi noir reste très importante.",
            plan: "Le noir cherche à créer de l’activité et à maîtriser les cases faibles."
          }
        ]
      },
      {
        title: "Variation Morphy",
        text: "Une ligne plus tactique dans laquelle les sacrifices et les échanges peuvent donner beaucoup d’initiative.",
        lines: [
          {
            moves: "1.e4 e5 2.Cf3 Cc6 3.Fb5 a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6 8.c3 0-0 9.h3 h6 10.d4",
            evaluation: "Le blanc a un meilleur jeu de pièces et un centre plus fort, même si le noir a des idées tactiques.",
            plan: "Le noir essaie de créer des complications sur les pièces du roi et les diagonales."
          },
          {
            moves: "10...Cd7 11.Cbd2 Cf8 12.b4",
            evaluation: "Le blanc commence à imposer un jeu de pression plus profond et plus technique.",
            plan: "Le noir doit être précis dans ses échanges et dans ses réactions sur l’aile dame."
          }
        ]
      }
    ]
  },
  {
    id: "sicilienne",
    name: "Défense sicilienne",
    eco: "B20",
    family: "Défense semi-ouverte",
    players: ["Kasparov", "Nakamura", "Fischer"],
    summary:
      "La Sicilienne est l’une des ouvertures les plus vivantes de l’échiquier. Elle défie directement le centre du roi et cherche à créer un contre-jeu profond.",
    basePieces: buildOpeningSetup({
      whiteMoved: [["e2", "e4"]],
      blackMoved: [["c7", "c5"]]
    }),
    idea: [
      "Le noir conteste le centre en utilisant ...c5 et s’appuie sur un asymétrisme permanent.",
      "Le but est de créer des tensions sur d5 et e4 et de profiter des faiblesses structurelles.",
      "Dans la plupart des lignes, le noir joue un jeu de contre-attaque pour compenser l’espace du camp blanc."
    ],
    theory: [
      {
        moves: "1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4",
        evaluation: "La position est nette et très complexe. Le noir a souvent une bonne compensation pour le pion, mais la structure devient plus fragile.",
        plan: "Le noir cherche à sécuriser ses pièces et à utiliser le contre-jeu sur l’aile dame ou en centre."
      },
      {
        moves: "4...e6 5.Cc3 a6 6.Fe3 Cf6 7.Bd3 d6",
        evaluation: "Le blanc garde un meilleur développement, mais le noir dispose d’un contre-jeu utile sur les cases sombres.",
        plan: "Le noir doit rester calme et chercher l’activité à partir des cases d5 et e5."
      },
      {
        moves: "8.0-0 Fe7 9.h3 b5 10.a3 0-0",
        evaluation: "Le centre est très disputé. Le noir se prépare à une réaction sur les ailes, tandis que le blanc cherche la meilleure coordination.",
        plan: "La suite logique sera d’ajuster les pièces sur les diagonales et de faire grandir la pression sur le roi adverse."
      },
      {
        moves: "11.Cb3 Fb7 12.f4 b4 13.axb4",
        evaluation: "Le jeu devient tactique. La position est assez équilibrée, mais très exigeante pour les deux camps.",
        plan: "Les deux joueurs doivent calculer avec précision, car la moindre erreur peut changer le sens de la partie."
      }
    ],
    variants: [
      {
        title: "Sicilienne ouverte",
        text: "Un combat de pièces très rapide dans lequel le développement et l’initiative prennent toute leur valeur.",
        lines: [
          {
            moves: "1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 e6 5.Cc3 a6 6.Fe3 Cf6 7.Bd3 d6",
            evaluation: "Le blanc a l’avantage du développement, mais la Sicilienne offre un excellent contre-jeu au noir.",
            plan: "Le noir essaie de trouver le bon moment pour l’activité sur le flanc dame et sur le centre."
          },
          {
            moves: "8.0-0 Fe7 9.h3 0-0 10.a3 b5",
            evaluation: "La position est vive et dynamique. L’équilibre est ténu et chaque détail compte.",
            plan: "Le jeu dépend de la qualité des échanges et des pièces actives."
          }
        ]
      },
      {
        title: "Dragon",
        text: "Le noir cherche la structure autour du point f7 et une attaque sur le roi.",
        lines: [
          {
            moves: "1.e4 c5 2.Cf3 Cc6 3.d4 cxd4 4.Cxd4 g6",
            evaluation: "Le noir a une structure de dragon très active et des chances de pression sur l’aile roi.",
            plan: "Le noir cherche à instaurer une attaque sur le point f7 et conserver sa structure."
          },
          {
            moves: "5.Cc3 Fg7 6.Fe3 Cf6 7.Dd2 0-0 8.0-0-0 d6",
            evaluation: "Le noir est bien préparé pour un contre-jeu sérieux, avec de très bonnes chances de dynamisme.",
            plan: "Le blanc doit rester équilibré et n’accepter qu’un mini-compromis acceptable."
          }
        ]
      },
      {
        title: "Najdorf",
        text: "Une ligne ultra profonde qui demande beaucoup de précision et de préparation stratégique.",
        lines: [
          {
            moves: "1.e4 c5 2.Cf3 d6 3.d4 cxd4 4.Cxd4 Cf6 5.Cc3 a6",
            evaluation: "Le noir a un bon cadre de jeu avec des idées sur l’aile dame et sur le centre.",
            plan: "Le blanc cherche à contrôler l’initiative tactique, tandis que le noir gagne du temps."
          },
          {
            moves: "6.Fe3 e6 7.Dd2 Fd7 8.0-0-0",
            evaluation: "Le jeu est très équilibré et très profond. Le noir garde de la vie et de la pression.",
            plan: "La partie dépendra de la qualité des pièces et des plans sur le flanc."
          }
        ]
      }
    ]
  },
  {
    id: "francaise",
    name: "Défense française",
    eco: "C00",
    family: "Défense semi-ouverte",
    players: ["Alekhine", "Botvinnik", "Capablanca"],
    summary:
      "La Française est une ouverture très solide et instructive. Elle laisse au noir une structure de pions durable, mais avec un pion avancé en d5 qui doit être défendu avec rigueur.",
    basePieces: buildOpeningSetup({
      whiteMoved: [["e2", "e4"], ["d2", "d4"]],
      blackMoved: [["e7", "e6"], ["d7", "d5"]]
    }),
    idea: [
      "Le noir cherche à transformer le centre en chaîne et à utiliser l’avance du pion d5 comme un outil d’attaque.",
      "Les pièces du blanc sont souvent poussées à l’aile roi, tandis que le noir joue sur l’aile dame ou sur le centre.",
      "Le plan noir est à la fois technique, calme et durable, avec des contre-jeux très précis."
    ],
    theory: [
      {
        moves: "1.e4 e6 2.d4 d5 3.Cc3 dxe4 4.Cxe4",
        evaluation: "Le blanc a un centre solide, mais sa structure est moins harmonieuse. Le noir vise un jeu actif et bien préparé.",
        plan: "Le noir essaye de développer ses pièces, d’engager des échanges et de chercher un contre-jeu."
      },
      {
        moves: "4...Cf6 5.Cxf6+ gxf6 6.c3",
        evaluation: "Le camp blanc a un avantage structurel légèrement plus net, mais la chaîne centrale reste très forte pour le noir.",
        plan: "Le noir cherche à remettre les pièces sur le centre et à organiser un jeu sur le flanc."
      },
      {
        moves: "6...Fd7 7.Fd3 c5 8.De2",
        evaluation: "Le centre reste très riche et l’activité des pièces devient centrale. L’avantage est mince, mais bien réel.",
        plan: "Le noir veut établir un contre-jeu avec ...c5 et surveiller les faiblesses du roque blanc."
      },
      {
        moves: "8...cxd4 9.cxd4 Fc5 10.Cc3 0-0",
        evaluation: "La position est équilibrée, mais la tension sur la colonne c et les faiblesses sur le roi noir restent très importantes.",
        plan: "L’ouverture donne un jeu plus stratégique où le développement correct prime sur la tactique immédiate."
      }
    ],
    variants: [
      {
        title: "Variante Winawer",
        text: "Une ligne très tactique avec des échanges de pièces et des complications majeures.",
        lines: [
          {
            moves: "1.e4 e6 2.d4 d5 3.Cc3 Cb8 4.Fg5 dxe4 5.Cxe4",
            evaluation: "Le blanc construit un centre solide, mais la structure et les pièces du noir restent très actives.",
            plan: "Le noir veut jouer sur les échanges et sur la qualité de ses pièces avant la contre-attaque."
          },
          {
            moves: "5...Fd7 6.Cf3 Fd6 7.Ce5",
            evaluation: "Le jeu devient très tactique et on entre dans des positions où la précision est fondamentale.",
            plan: "Les deux camps calculent les combinaisons et les plans de pièces avec précision."
          }
        ]
      },
      {
        title: "Variante d’échange",
        text: "Une ligne plus calme et plus technique, souvent choisie pour simplifier le jeu et viser la finale.",
        lines: [
          {
            moves: "1.e4 e6 2.d4 d5 3.Cc3 dxe4 4.Cxe4 Cc6 5.Cf3",
            evaluation: "La position est plus calme, avec moins de tactique immédiate et davantage de jeu de pièces.",
            plan: "Le noir cherche à consolider sa structure et à préparer le jeu de pièces."
          },
          {
            moves: "5...Fd7 6.Fd3 Fd6 7.0-0 Cge7",
            evaluation: "Le blanc a un centre fort, mais le noir garde de bonnes chances de contre-jeu sur l’aile dame.",
            plan: "L’avantage est minime, donc la position dépendra de l’exactitude du développement."
          }
        ]
      },
      {
        title: "Ligne d’Abrahams",
        text: "Une approche moderne qui part sur des plans dynamiques, de contre-jeu et d’attaque.",
        lines: [
          {
            moves: "1.e4 e6 2.d4 d5 3.Cc3 c5 4.Cf3 Cc6 5.e5",
            evaluation: "Le blanc cherche à solliciter le centre et à créer des menaces sur les cases du noir.",
            plan: "Le noir doit trouver la meilleure manière de compenser l’espace et la pression sur le roi."
          },
          {
            moves: "5...Fd7 6.Ce2 cxd4 7.Cxd4",
            evaluation: "Le centre reste très chaud et le noir doit choisir entre tactique et solidité.",
            plan: "La suite implique des échanges et des plans sur les faiblesses du roque adverse."
          }
        ]
      }
    ]
  },
  {
    id: "caro-kann",
    name: "Défense Caro-Kann",
    eco: "B10",
    family: "Défense semi-ouverte",
    players: ["Karpov", "Botvinnik", "Sämisch"],
    summary:
      "Le Caro-Kann est très solide et très propre. Le noir cherche à construire une structure robuste et à exploiter les faiblesses du camp adverse.",
    basePieces: buildOpeningSetup({
      whiteMoved: [["e2", "e4"], ["d2", "d4"]],
      blackMoved: [["c7", "c6"], ["d7", "d5"]]
    }),
    idea: [
      "Le noir construit une structure centrale ferme et applique une logique de développement propre.",
      "L’idée est d’échanger le pion d5 et de jouer sur les faiblesses de la structure blanche après l’ouverture.",
      "Le noir cherche des contre-jeux sur les ailes lorsque le blanc s’étale."
    ],
    theory: [
      {
        moves: "1.e4 c6 2.d4 d5 3.Cc3 dxe4 4.Cxe4",
        evaluation: "Le noir est bien dans son plan, mais le blanc a un centre clair et des pièces actives. La position reste équilibrée.",
        plan: "Le noir veut reprendre l’initiative dans la structure et contrer les efforts du blanc sur le centre."
      },
      {
        moves: "4...Cf6 5.Cxf6+ gxf6 6.c3",
        evaluation: "Le jeu est moins tactique, mais il est très instructif. Le noir choisit la logique structurelle avant le risque tactique.",
        plan: "Le noir doit éviter de donner trop d’espace au blanc et rester calme dans la construction."
      },
      {
        moves: "6...Fd7 7.Fd3 Fg7 8.Ce2 0-0",
        evaluation: "La qualité du jeu est très bien répartie. Le noir reste solide, mais le blanc a des chances de pression sur l’aile roi.",
        plan: "Le noir prépare un jeu de pièces calme, avec le but de contre-attaquer sur la colonne c ou sur les diagonales."
      },
      {
        moves: "9.0-0 e6 10.b3",
        evaluation: "Le noir est bien sauvegardé dans la structure. Le centre est statique, mais la lutte se déplace sur le flanc.",
        plan: "Le blanc cherche la qualité du jeu de pièces et le noir doit trouver la meilleure manière de profiter des faiblesses du joueur blanc."
      }
    ],
    variants: [
      {
        title: "Variante principale",
        text: "Une structure solide et très saine, souvent choisie pour une logique très convaincante et nette.",
        lines: [
          {
            moves: "1.e4 c6 2.d4 d5 3.Cc3 dxe4 4.Cxe4 Cf6 5.Cxf6+ gxf6 6.c3",
            evaluation: "La position est correcte et bien équilibrée, mais le noir garde un jeu utile et durable.",
            plan: "Le noir cherche à faire durer la position jusqu’à ce que le blanc commette un petit défaut."
          },
          {
            moves: "6...Fd7 7.Fd3 Fg7 8.Ce2 0-0 9.0-0 e6",
            evaluation: "Le blanc a une meilleure coordination, mais la structure noire est solide et les compromis sont nombreux.",
            plan: "Le noir choisit la route la plus pratique pour le contre-jeu sur le flanc."
          }
        ]
      },
      {
        title: "Ligne d’échange",
        text: "La simplification offre souvent une finale bien gérée, avec un bon équilibre technique.",
        lines: [
          {
            moves: "1.e4 c6 2.d4 d5 3.Cc3 dxe4 4.Cxe4 Cd7 5.Cf3",
            evaluation: "La position se simplifie, mais le noir garde une bonne structure et un jeu durable.",
            plan: "Le noir exploite surtout le jeu de pièces et la qualité de sa structure."
          },
          {
            moves: "5...e6 6.Cf3 0-0 7.Bd3",
            evaluation: "Le blanc a un bon centre, mais le noir garde un jeu solide et bien organisé.",
            plan: "Le noir peut continuer à jouer résolument sans se laisser pousser trop loin."
          }
        ]
      },
      {
        title: "Structure d’attaque",
        text: "Le noir cherche à utiliser les cases faibles et le profit d’une structure moins favorable au blanc.",
        lines: [
          {
            moves: "1.e4 c6 2.d4 d5 3.Cc3 dxe4 4.Cxe4 Bf5",
            evaluation: "Le noir gagne du temps sur le développement et prend des options sur le centre.",
            plan: "Le noir veut créer des tensions sur le centre pour lancer un contre-jeu judicieux."
          },
          {
            moves: "5.Cg3 Bg6 6.h4 h5 7.Fd3",
            evaluation: "Le jeu est plus actif et la lutte sur les cases faibles devient très importante.",
            plan: "Le noir cherche à exploiter les faiblesses et la qualité globale de son jeu."
          }
        ]
      }
    ]
  },
  {
    id: "italienne",
    name: "Partie italienne",
    eco: "C50",
    family: "Ouverture ouverte",
    players: ["Morphy", "Kasparov", "Nimzowitsch"],
    summary:
      "La Partie italienne est l’ouverture des grands principes du jeu de pièces : développement harmonieux, centre fort et initiative sur le point f7.",
    basePieces: buildOpeningPosition([
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "c4"]
    ]),
    idea: [
      "Le blanc construit son centre puis cherche l’attaque sur le côté du roi.",
      "Le fou de c4 vise le point f7, ce qui est souvent très puissant dans l’ouverture.",
      "Le jeu est presque toujours basé sur le développement et la gestion du centre."
    ],
    theory: [
      {
        moves: "1.e4 e5 2.Cf3 Cc6 3.Fc4",
        evaluation: "Le blanc a un petit avantage parce qu’il contrôle mieux les cases et il menace directement le point f7.",
        plan: "Le blanc choisit ensuite entre développement, contrôle central et pression sur le roi."
      },
      {
        moves: "3...Cf6 4.d3 d6 5.0-0",
        evaluation: "Le blanc a un développement harmonieux et le noir est mis sous pression de façon très naturelle.",
        plan: "Le blanc va chercher à créer des complications sur le côté roi et à renforcer son centre."
      },
      {
        moves: "5...Fe7 6.c3 0-0 7.h3",
        evaluation: "La structure reste solide, mais le plan blanc est clair : contrôle central et préparation d’attaque.",
        plan: "Le blanc garde la possibilité de lancer un grand plan stratégique sur le roque adverse."
      },
      {
        moves: "8.Fe3 b6 9.Cbd2 Bb7",
        evaluation: "Le jeu devient plus profond. Le noir veut continuer le développement propre et améliorer ses pièces sans se précipiter.",
        plan: "L’idée est de faire pression sur le centre et sur les diagonales, pendant que le noir cherche à libérer sa structure."
      }
    ],
    variants: [
      {
        title: "Giuoco Piano",
        text: "Une ligne calme et solide, souvent très appréciée pour le développement harmonieux et la bonne coordination.",
        lines: [
          {
            moves: "1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.c3 Cf6 5.d3 d6",
            evaluation: "Le blanc garde la meilleure coordination et les pièces sont bien préparées.",
            plan: "Le blanc cherche à contrôler le centre et à lancer une attaque sur le point f7."
          },
          {
            moves: "6.0-0 0-0 7.h3 h6 8.Fe3",
            evaluation: "Le blanc a une légère supériorité de développement et de coordination.",
            plan: "Le noir doit augmenter le dynamisme pour garder l’équilibre."
          }
        ]
      },
      {
        title: "Partie italienne classique",
        text: "Le blanc cherche à construire un plan de pièces plus agressif avec une pression continue sur le roi.",
        lines: [
          {
            moves: "1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.b4",
            evaluation: "Le blanc prend une initiative assez claire et cherche à ouvrir le centre rapidement.",
            plan: "Le roi noir est bien plus exposé si le blanc continue à développer correctement."
          },
          {
            moves: "4...Fxb4 5.c3 Fa5 6.d4",
            evaluation: "Le blanc met de la pression sur le centre et le noir doit faire des choix très précis.",
            plan: "Le noir cherche à défendre son centre sans se donner une position trop faible."
          }
        ]
      },
      {
        title: "Gambit Evans",
        text: "Le blanc sacrifie du matériel pour une initiative plus rapide et un meilleur contrôle du centre.",
        lines: [
          {
            moves: "1.e4 e5 2.Cf3 Cc6 3.Fc4 Fc5 4.b4 Fxb4 5.c3 Fa5",
            evaluation: "Le blanc a déjà une initiative immédiate et une meilleure activité des pièces.",
            plan: "La suite consiste à exploiter le développement rapide et l’initiative du blanc."
          },
          {
            moves: "6.d4 exd4 7.0-0",
            evaluation: "Le blanc a un petit avantage, mais ce sont des complications tactiques qui demandent beaucoup de calcul.",
            plan: "Le noir doit rester précis et ne pas laisser le centre blanc se consolider."
          }
        ]
      }
    ]
  },
  {
    id: "catalan",
    name: "Catalan",
    eco: "E00",
    family: "Ouverture semi-ouverte",
    players: ["Karpov", "Kasparov", "Nakamura"],
    summary:
      "Le Catalan est une ouverture très moderne et très instructive. Il repose sur un jeu de pièces harmonieux, du contrôle du centre et des plans subtils sur les ailes.",
    basePieces: buildOpeningPosition([
      ["d2", "d4"],
      ["d7", "d5"],
      ["c2", "c4"],
      ["e7", "e6"],
      ["g1", "f3"],
      ["g8", "f6"],
      ["g2", "g3"]
    ]),
    idea: [
      "Le blanc évite la symétrie du centre et cherche un jeu de pièces plus souple.",
      "Les idées du Catalan passent par le fianchetto du fou de g2 et la pression sur le point d5.",
      "Le blanc cherche un meilleur espace, un bon centre et parfois un jeu de contre-attaque."
    ],
    theory: [
      {
        moves: "1.d4 d5 2.c4 e6 3.Cf3 Cf6 4.g3",
        evaluation: "Le blanc a déjà une grande part de l’initiative en construisant une structure plus stable et plus harmonieuse.",
        plan: "Le camp blanc va développer le fou de g2, garder le centre propre et préparer le long terme."
      },
      {
        moves: "4...Fe7 5.Fg2 0-0 6.0-0 c6",
        evaluation: "La structure est très équilibrée, mais le blanc dispose d’une meilleure mobilité et d’un meilleur développement.",
        plan: "Le blanc cherche à contrôler le centre et préparer une poussée d4-d5 ou un plan de pièces sur le roi."
      },
      {
        moves: "7.Cc3 b6 8.cxd5 cxd5 9.Ce5",
        evaluation: "Le centre est renforcé et le blanc garde la meilleure base stratégique de la position.",
        plan: "Le noir devra résoudre rapidement les problèmes structurels et trouver un plan de compensation."
      },
      {
        moves: "9...a6 10.Dc2 Fb7 11.Td1",
        evaluation: "La position est assez équilibrée, mais la pression sur les cases du centre reste bien plus forte pour le blanc.",
        plan: "Le blanc garde une meilleure coordination et une marge de manœuvre plus large."
      }
    ],
    variants: [
      {
        title: "Ligne classique",
        text: "Le blanc cherche à contrôler la case d5 et à travailler sur la structure centrale avant de lancer des plans de pièces.",
        lines: [
          {
            moves: "1.d4 d5 2.c4 e6 3.Cf3 Cf6 4.g3 Fe7 5.Fg2 0-0 6.0-0 c6",
            evaluation: "Le blanc a un beau développement et une structure solide, avec une petite supériorité stratégique.",
            plan: "Le noir doit parvenir à réorganiser la structure sans laisser l’espace blanc prendre le dessus."
          },
          {
            moves: "7.Cc3 b6 8.cxd5 cxd5 9.Ce5",
            evaluation: "Le blanc donne une forte pression sur le centre et cherche à garder le contrôle de la case d5.",
            plan: "Le noir cherche à trouver le bon plan de pièces pour réduire la tension."
          }
        ]
      },
      {
        title: "Catalan moderne",
        text: "Le blanc garde le contrôle du centre tout en laissant la possibilité d’autres structures plus actives.",
        lines: [
          {
            moves: "1.d4 d5 2.c4 e6 3.Cf3 Cf6 4.g3 c5",
            evaluation: "Le jeu est dynamique et le noir cherche à créer des équilibres et des contre-jeux.",
            plan: "Le blanc doit rester vigilant et ne pas se retrouver sans pièce à l’aile dame."
          },
          {
            moves: "5.cxd5 exd5 6.Fg2 Cc6 7.0-0",
            evaluation: "Le jeu devient plus subtil, avec une tension sur l’espace et sur le centre.",
            plan: "Le noir cherche à améliorer le développement sans laisser le blanc menacer le centre."
          }
        ]
      },
      {
        title: "Structure de pièces",
        text: "Le grand intérêt du Catalan réside dans la richesse des plans de pièces, des échanges et des transitions.",
        lines: [
          {
            moves: "1.d4 d5 2.c4 e6 3.Cf3 Cf6 4.g3 Fe7 5.Fg2 0-0 6.0-0 c6",
            evaluation: "La structure reste très subtile et équilibrée, malgré la pression blanche sur le centre.",
            plan: "Le blanc cherche à utiliser le fianchetto et la mobilité de ses pièces."
          },
          {
            moves: "7.Cc3 b6 8.cxd5 cxd5 9.Ce5",
            evaluation: "Le blanc prend de l’espace, mais le noir garde de bonnes chances de coordination.",
            plan: "Le noir cherche à jouer sur la qualité de l’activité de ses pièces et sur la structure."
          }
        ]
      }
    ]
  },
  {
    id: "anglaise",
    name: "Ouverture anglaise",
    eco: "A10",
    family: "Ouverture flanquée",
    players: ["Karpov", "Nakamura", "Botvinnik"],
    summary:
      "L’Anglaise est une ouverture de flanc très moderne, très souple et très utile dans les parties de haut niveau. Elle façonne le centre par des idées indirectes.",
    basePieces: buildOpeningPosition([
      ["c2", "c4"],
      ["e7", "e5"],
      ["b1", "c3"],
      ["g8", "f6"],
      ["g2", "g3"]
    ]),
    idea: [
      "Le blanc ne cherche pas une confrontation immédiate, mais une structure plus flexible.",
      "L’objectif est d’établir un contrôle plus subtil du centre et de préparer la poussée d4 ou c5.",
      "La position est souvent plus calme et plus stratégique, mais elle ouvre beaucoup de possibilités."
    ],
    theory: [
      {
        moves: "1.c4 e5 2.Cc3 Cf6 3.g3",
        evaluation: "Le blanc a une position sans pression excessive, avec un large espace et un bon potentiel central.",
        plan: "Le blanc cherche à organiser son jeu harmonieux et à choisir ensuite une ligne de jeu selon le plan noir."
      },
      {
        moves: "3...d5 4.cxd5 Cxd5 5.Bg2 Cxc3 6.bxc3",
        evaluation: "La structure est ouverte, le centre est plus équilibré et l’avantage du blanc reste subtil mais présent.",
        plan: "Le blanc cherchera à créer un jeu de pièces plus souple et à utiliser la structure ouverte pour sa coordination."
      },
      {
        moves: "6...c5 7.d4",
        evaluation: "Le centre se stabilise. Le jeu est très équilibré, mais le blanc a de meilleures chances d’initiative sur les plans de pièces.",
        plan: "Le noir doit gérer la concurrence sur le centre et ne pas trop transiger dans ses préparatifs de développement."
      },
      {
        moves: "7...e4 8.Cf3 Cc6 9.0-0",
        evaluation: "La position est très propre et le blanc garde un jeu à la fois solide et bien préparé.",
        plan: "Le blanc continue à chercher le meilleur schéma de développement et la flexibilité sur les ailes."
      }
    ],
    variants: [
      {
        title: "Système du four-pion",
        text: "Une approche centrée sur l’espace, le contrôle indirect et la flexibilité structurelle.",
        lines: [
          {
            moves: "1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5 5.Bg2",
            evaluation: "Le blanc a un jeu très calme et très bien préparé, avec beaucoup d’opportunités de structure.",
            plan: "Le noir doit évoluer avec soin afin d’éviter un plan trop passif."
          },
          {
            moves: "5...Cxc3 6.bxc3 c5 7.d4",
            evaluation: "Le centre est sous contrôle et les blancs gardent l’avantage du type de position.",
            plan: "Le noir cherche à dévier le jeu à l’aile dame mais doit rester solide."
          }
        ]
      },
      {
        title: "Variantes du flanc",
        text: "La position est très ouverte et les plans peuvent varier selon l’initiative de chacun.",
        lines: [
          {
            moves: "1.c4 c5 2.Cc3 Cc6 3.g3 g6 4.Fg2 Fg7",
            evaluation: "Le blanc garde une position très naturelle, bien harmonisée et pleine de potentiel stratégique.",
            plan: "Le noir doit s’organiser pour ne pas se laisser jouer sur le flanc."
          },
          {
            moves: "5.d3 d6 6.Cf3 e5 7.0-0",
            evaluation: "La structure est très sûre, et le blanc garde la possibilité d’un bon plan de pièces.",
            plan: "Le noir cherche à faire de son centre un vrai instrument de contre-jeu."
          }
        ]
      },
      {
        title: "Plan de pièces",
        text: "L’Anglaise est excellente pour les plans subtils, souvent plus durables que la tactique immédiate.",
        lines: [
          {
            moves: "1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5 5.Bg2 Cxc3 6.bxc3",
            evaluation: "Le blanc a un bon contrôle d’espace et un plan de pièces très souple.",
            plan: "Le noir doit trouver sa propre logique de contre-attaque en gardant un centre sain."
          },
          {
            moves: "6...c5 7.d4 e4 8.Cf3 Cc6 9.0-0",
            evaluation: "Le blanc garde un jeu très cohérent et très constructif.",
            plan: "Le noir cherche à ajouter des tensions sur les ailes et la structure centrale."
          }
        ]
      }
    ]
  }
];

const openingGrid = document.getElementById("openingGrid");
const openingHeader = document.getElementById("openingHeader");
const openingBoard = document.getElementById("openingBoard");
const openingIdea = document.getElementById("openingIdea");
const theoryTable = document.getElementById("theoryTable");
const variantsList = document.getElementById("variantsList");
const searchInput = document.getElementById("searchInput");
const hubView = document.getElementById("hubView");
const detailView = document.getElementById("detailView");
const backButton = document.getElementById("backButton");

const pieceImageMap = {
  wK: "https://lichess1.org/assets/piece/merida/wK.svg",
  wQ: "https://lichess1.org/assets/piece/merida/wQ.svg",
  wR: "https://lichess1.org/assets/piece/merida/wR.svg",
  wB: "https://lichess1.org/assets/piece/merida/wB.svg",
  wN: "https://lichess1.org/assets/piece/merida/wN.svg",
  wP: "https://lichess1.org/assets/piece/merida/wP.svg",
  bK: "https://lichess1.org/assets/piece/merida/bK.svg",
  bQ: "https://lichess1.org/assets/piece/merida/bQ.svg",
  bR: "https://lichess1.org/assets/piece/merida/bR.svg",
  bB: "https://lichess1.org/assets/piece/merida/bB.svg",
  bN: "https://lichess1.org/assets/piece/merida/bN.svg",
  bP: "https://lichess1.org/assets/piece/merida/bP.svg"
};

function getDefaultFullBoard() {
  const pieces = [];
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

  ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"].forEach((type, index) => {
    const whiteKey = type === "rook" ? "R" : type === "knight" ? "N" : type === "bishop" ? "B" : type === "queen" ? "Q" : type === "king" ? "K" : "";
    const blackKey = whiteKey.toLowerCase();
    pieces.push({ square: `${files[index]}1`, type: whiteKey, color: "w" });
    pieces.push({ square: `${files[index]}8`, type: blackKey, color: "b" });
  });

  for (let i = 0; i < 8; i += 1) {
    pieces.push({ square: `${files[i]}2`, type: "P", color: "w" });
    pieces.push({ square: `${files[i]}7`, type: "p", color: "b" });
  }

  return pieces;
}

function renderBoardDiagram(opening) {
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));
  const usePieces = opening.basePieces && opening.basePieces.length > 12 ? opening.basePieces : getDefaultFullBoard();

  usePieces.forEach(({ square, type, color }) => {
    const file = square.charCodeAt(0) - 97;
    const rank = Number(square.slice(1)) - 1;
    board[7 - rank][file] = { type, color };
  });

  const rows = [];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      const isDark = (row + col) % 2 === 1;
      const key = piece ? `${piece.color}${piece.type.toUpperCase()}` : null;
      const imageUrl = key ? pieceImageMap[key] : "";

      rows.push(`
        <div class="board-square ${isDark ? "dark" : "light"}">
          ${imageUrl ? `<img src="${imageUrl}" alt="${piece.type.toUpperCase()}" />` : ""}
        </div>
      `);
    }
  }

  openingBoard.innerHTML = rows.join("");
}

let currentId = openings[0].id;

function renderIdea(opening) {
  openingIdea.innerHTML = opening.idea
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function renderBoard(opening) {
  openingHeader.innerHTML = `
    <span class="tag">${opening.family}</span>
    <h2>${opening.name}</h2>
    <div class="meta-row">
      <span class="meta-badge">ÉCO ${opening.eco}</span>
      <span class="meta-badge">Théorie moderne</span>
    </div>
    <div class="player-row">
      ${opening.players.map((player) => `<span class="player-chip">${player}</span>`).join("")}
    </div>
  `;

  renderBoardDiagram(opening);
  renderIdea(opening);

  theoryTable.innerHTML = opening.theory
    .map(
      (line) => `
        <tr>
          <td>${line.moves}</td>
          <td>${line.evaluation}</td>
          <td>${line.plan}</td>
        </tr>
      `
    )
    .join("");

  variantsList.innerHTML = opening.variants
    .map(
      (variant) => `
        <article class="variant-card">
          <h3>${variant.title}</h3>
          <p>${variant.text}</p>
          <ul class="variant-lines">
            ${variant.lines
              .map(
                (line) => `
                  <li>
                    <strong>${line.moves}</strong>
                    <span>${line.evaluation}</span>
                    <span>${line.plan}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function showHub() {
  hubView.classList.remove("hidden");
  detailView.classList.add("hidden");
}

function showDetail(id) {
  currentId = id;
  hubView.classList.add("hidden");
  detailView.classList.remove("hidden");
  renderBoard(openings.find((opening) => opening.id === id) ?? openings[0]);
}

function renderOpeningGrid(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const filtered = openings.filter((opening) => {
    const haystack = `${opening.name} ${opening.family} ${opening.eco} ${opening.summary}`.toLowerCase();
    return haystack.includes(normalized);
  });

  if (!filtered.length) {
    openingGrid.innerHTML = '<div class="empty-state">Aucune ouverture ne correspond à cette recherche.</div>';
    return;
  }

  openingGrid.innerHTML = filtered
    .map(
      (opening) => `
        <article class="opening-card" tabindex="0" data-id="${opening.id}">
          <div class="meta-row">
            <span class="meta-badge">${opening.eco}</span>
            <span class="meta-badge">${opening.family}</span>
          </div>
          <h3>${opening.name}</h3>
          <p>${opening.summary}</p>
        </article>
      `
    )
    .join("");

  openingGrid.querySelectorAll(".opening-card").forEach((card) => {
    const openId = card.dataset.id;
    card.addEventListener("click", () => showDetail(openId));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showDetail(openId);
      }
    });
  });
}

searchInput.addEventListener("input", (event) => {
  const value = event.target.value;
  const filtered = openings.filter((opening) => {
    const haystack = `${opening.name} ${opening.family} ${opening.eco} ${opening.summary}`.toLowerCase();
    return haystack.includes(value.trim().toLowerCase());
  });

  if (filtered.length && !filtered.some((opening) => opening.id === currentId)) {
    currentId = filtered[0].id;
  }

  renderOpeningGrid(value);
});

backButton.addEventListener("click", () => {
  showHub();
  renderOpeningGrid(searchInput.value);
});

renderOpeningGrid();
showHub();
