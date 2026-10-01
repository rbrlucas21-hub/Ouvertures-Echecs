const openings = [
  {
    id: "ruy-lopez",
    name: "Partie espagnole",
    eco: "C60",
    family: "Ouverture classique",
    summary:
      "La Partie espagnole est la référence classique du jeu de pièces. Elle offre un développement harmonieux, du contrôle central et une pression durable sur la structure noire.",
    idea: [
      "Le blanc cherche à construire une position solide avec une activité supérieure des pièces.",
      "Le point d’appui sur e5 et la pression sur le point f7 font partie du cœur stratégique de l’ouverture.",
      "L’objectif est de garder l’avantage de l’espace et de provoquer des complications minimales mais très précises."
    ],
    theory: [
      {
        moves: "1.e4 e5 2.Cf3 Cc6 3.Fb5",
        evaluation: "Le blanc obtient un petit avantage stratégique. La position reste solide, mais le camp blanc a une meilleure activité et un meilleur contrôle du centre.",
        plan: "Le but est de garder la pression sur la case e5 et d’intégrer la menace sur f7 sans précipiter le jeu."
      },
      {
        moves: "3...a6 4.Fa4 Cf6 5.0-0 Fe7 6.Te1 b5 7.Fb3 d6",
        evaluation: "La qualité de la position est légèrement meilleure pour les blancs, car ils ont un meilleur développement et une meilleure mobilité en raison de la présence du fou b5.",
        plan: "Le blanc continue à développer très proprement et à pousser le noir vers un jeu de pièces délicat."
      },
      {
        moves: "8.c3 0-0 9.h3 h6 10.d4",
        evaluation: "Le centre est maintenant poussé et très contesté. Le blanc bénéficie d’une structure de pions plus solide et d’un meilleur espace.",
        plan: "Le noir doit gérer la pression sur la case d5 et sur la structure de pion centrale."
      },
      {
        moves: "10...Cd7 11.Cbd2 Cf8 12.b4",
        evaluation: "Le plan blanc vise l’espace et la domination plus que la tactique immédiate. La position reste favorable sur le plan stratégique.",
        plan: "Le noir doit répondre au contrôle de la diagonale et aux menaces sur le point c5."
      }
    ],
    variants: [
      {
        title: "Variante ouverte",
        text: "Le centre s’ouvre tôt et la position devient très dynamique, avec des pièces actives et des ambitions tactiques."
      },
      {
        title: "Défense berlinoise",
        text: "Le noir défend sa structure et cherche un jeu solide, souvent plus ferme et plus technique."
      },
      {
        title: "Variation Morphy",
        text: "Une ligne plus tactique dans laquelle les sacrifices et les échanges peuvent donner plus d’initiative au joueur qui prend l’initiative."
      }
    ]
  },
  {
    id: "sicilienne",
    name: "Défense sicilienne",
    eco: "B20",
    family: "Défense semi-ouverte",
    summary:
      "La Sicilienne est l’une des ouvertures les plus vivantes de l’échiquier. Elle suppose que le noir défie directement le centre du roi et cherche à créer un contre-jeu profond.",
    idea: [
      "Le noir conteste le centre en utilisant ...c5 et s’appuie sur un asymétrisme permanent.",
      "Le but est de créer des tensions sur les cases d5 et e4 et de profiter des faiblesses structurelles.",
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
        evaluation: "Le blanc garde un meilleur développement et une meilleure coordination, mais le noir dispose d’un contre-jeu utile sur les cases sombres.",
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
        text: "Un combat de pièces très rapide dans lequel le développement et l’initiative prennent toute leur valeur."
      },
      {
        title: "Dragon",
        text: "Le noir cherche la structure autour du point f7 et une attaque sur le roi."
      },
      {
        title: "Najdorf",
        text: "Une ligne ultra profonde qui demande beaucoup de précision et de préparation stratégique."
      }
    ]
  },
  {
    id: "francaise",
    name: "Défense française",
    eco: "C00",
    family: "Défense semi-ouverte",
    summary:
      "La Française est une ouverture très solide et très instructive. Elle laisse au noir une structure de pions durable, mais avec un pion avancé en d5 qui doit être défendu avec rigueur.",
    idea: [
      "Le noir cherche à transformer le centre en chaîne et à utiliser l’avance du pion d5 comme un outil d’attaque.",
      "Les pièces du blanc sont souvent poussées à l’aile roi, tandis que le noir joue sur l’aile dame ou sur le centre.",
      "Le plan noir est à la fois technique, calme et durable, avec des contre-jeux très précis."
    ],
    theory: [
      {
        moves: "1.e4 e6 2.d4 d5 3.Cc3 dxe4 4.Cxe4",
        evaluation: "Le blanc a un centre solide, mais sa structure est souvent moins harmonieuse. Le noir vise un jeu actif et bien préparé.",
        plan: "Le noir essaye de développer ses pièces, d’engager des échanges et de chercher un contre-jeu."
      },
      {
        moves: "4...Cf6 5.Cxf6+ gxf6 6.c3",
        evaluation: "Le camp blanc a un avantage structurel légèrement plus net, mais la chaîne centrale reste encore très forte pour le noir.",
        plan: "Le noir cherche à remettre les pièces sur le centre et à organiser un jeu sur le flanc."
      },
      {
        moves: "6...Fd7 7.Fd3 c5 8.De2",
        evaluation: "Le centre est encore très riche et l’activité des pièces devient centrale. L’avantage est mince, mais il est bien réel.",
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
        text: "Une ligne très tactique avec des échanges de pièces et des complications majeures."
      },
      {
        title: "Variante d’échange",
        text: "Une ligne plus calme et plus technique, souvent choisie pour simplifier le jeu et viser la finale."
      },
      {
        title: "Ligne d’Abrahams",
        text: "Une approche moderne qui part sur des plans dynamiques, de contre-jeu et d’attaque."
      }
    ]
  },
  {
    id: "caro-kann",
    name: "Défense Caro-Kann",
    eco: "B10",
    family: "Défense semi-ouverte",
    summary:
      "Le Caro-Kann est très solide et très propre. Le noir cherche à construire une structure robuste, puis à utiliser les faiblesses du camp adverse sans pour autant livrer de jeu trop sain.",
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
        text: "Une structure solide et très saine, souvent choisie pour une logique très convaincante et nette."
      },
      {
        title: "Ligne d’échange",
        text: "La simplification offre souvent une finale bien gérée, avec un bon équilibre technique."
      },
      {
        title: "Structure d’attaque",
        text: "Le noir cherche à utiliser les cases faibles et le profit d’une structure moins favorable au blanc."
      }
    ]
  },
  {
    id: "italienne",
    name: "Partie italienne",
    eco: "C50",
    family: "Ouverture ouverte",
    summary:
      "La Partie italienne est l’ouverture des grands principes du jeu de pièces : développement harmonieux, centre fort et initiative sur le point f7.",
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
        text: "Une ligne calme et solide, souvent très appréciée pour le développement harmonieux et la bonne coordination."
      },
      {
        title: "Partie italienne classique",
        text: "Le blanc cherche à construire un plan de pièces plus agressif avec une pression continue sur le roi."
      },
      {
        title: "Gambit Evans",
        text: "Le blanc sacrifie du matériel pour une initiative plus rapide et un meilleur contrôle du centre."
      }
    ]
  },
  {
    id: "dame-indienne",
    name: "Défense indienne de la dame",
    eco: "A45",
    family: "Défense indienne",
    summary:
      "La Défense indienne de la dame est un cadre très moderne, fondé sur la flexibilité et la possibilité de contester le centre de manière indirecte.",
    idea: [
      "Le noir cherche à contrôler le centre sans se fixer trop vite sur un schéma trop statique.",
      "Le but est d’utiliser la structure de flanc et le contre-jeu pour contester la logique du blanc.",
      "L’ouverture donne souvent au noir des chances de contre-attaque sur l’aile dame ou sur l’aile roi."
    ],
    theory: [
      {
        moves: "1.d4 d5 2.c4 Cf6 3.Cc3 e6",
        evaluation: "Le noir est en train de construire un plan classique et très solide, avec un développement harmonieux et une bonne flexibilité.",
        plan: "Le noir veut ensuite préparer le centre et préparer un éventuel contre-jeu sur l’aile dame."
      },
      {
        moves: "4.Fg5 c5 5.e3 Cc6 6.cxd5 exd5",
        evaluation: "La position est légèrement meilleure pour le blanc en raison de l’espace, mais le noir garde de belles chances d’activité et d’équilibre.",
        plan: "Le noir doit continuer à développer et à préparer la pression sur les cases faibles du blanc."
      },
      {
        moves: "7.Cf3 Fe7 8.Dc2 0-0 9.Fd3",
        evaluation: "La position se complique et le centre devient plus centralisé. Le noir cherche la meilleure mobilisation de ses pièces.",
        plan: "Le noir va tenter de trouver un bon équilibre entre sécurité et possibilité de pression sur le centre."
      },
      {
        moves: "9...b6 10.0-0 Bb7 11.Ce5",
        evaluation: "Le blanc prend du terrain et la pression devient plus claire. Le noir doit être utilement actif et précis.",
        plan: "Les rêves de contre-jeu du noir doivent reposer sur un bon placement des pièces et de bons échanges."
      }
    ],
    variants: [
      {
        title: "Ligne classique",
        text: "Le noir cherche à construire un schéma solide avec des idées de structure, de développement et de jeu de pièces."
      },
      {
        title: "Grünfeld",
        text: "Une ligne plus dynamique où le noir s’engage dans un combat de structures profond et actif."
      },
      {
        title: "Benoni",
        text: "Une structure agressive, très riche et très vivante, qui exige une bonne préparation et des idées concrètes."
      }
    ]
  },
  {
    id: "catalan",
    name: "Catalan",
    eco: "E00",
    family: "Ouverture semi-ouverte",
    summary:
      "Le Catalan est une ouverture très moderne et très instructive. Il repose sur un jeu de pièces harmonieux, du contrôle du centre et des plans subtils sur les ailes.",
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
        evaluation: "Le centre est maintenant renforcé et le camp blanc garde la meilleure base stratégique de la position.",
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
        text: "Le blanc cherche à contrôler la case d5 et à travailler sur la structure centrale avant de lancer des plans de pièces."
      },
      {
        title: "Catalan moderne",
        text: "Le blanc garde le contrôle du centre tout en laissant la possibilité d’autres structures plus actives et plus flexibles."
      },
      {
        title: "Structure de pièces",
        text: "Le grand intérêt du Catalan réside dans la richesse des plans de pièces, des échanges et des transitions."
      }
    ]
  },
  {
    id: "scandinave",
    name: "Défense scandinave",
    eco: "B01",
    family: "Défense semi-ouverte",
    summary:
      "La Scandinavave est une ouverture directe, moderne et très agressive. Elle s’appuie sur un sacrifice de pion immédiat et sur une activité de pièces rapide.",
    idea: [
      "Le noir répond à 1.e4 par 1...d5, ce qui remet immédiatement le centre en jeu.",
      "Au lieu de refuser la confrontation, le noir cherche la compensation et le développement rapide.",
      "Le but est d’obtenir de l’activité et des chances tactiques, parfois très tôt dans la partie."
    ],
    theory: [
      {
        moves: "1.e4 d5 2.exd5 Dxd5 3.Cc3 Da5",
        evaluation: "Le noir a déjà directement pris le centre et obtenu une compensation de pion avec beaucoup de complications tactiques.",
        plan: "Le noir cherche un développement rapide, une bonne activité des pièces et le plus de liberté possible."
      },
      {
        moves: "4.d4 Cf6 5.Cf3 c6 6.Fd3",
        evaluation: "Le blanc garde un certaine qualité de pièces, mais le noir a de grandes chances d’activité sur les cases centrales et sur le roque adverse.",
        plan: "Le noir vise le centre, le développement rapide et la possibilité de tensions."
      },
      {
        moves: "6...Fg4 7.0-0 e6 8.h3 Fh5",
        evaluation: "Le jeu reste très actif, et la position est compliquée dès les premières phases. Les blancs ne sont pas tranquilles.",
        plan: "Le noir se prépare au jeu sur le point d4 et cherche à lancer une attaque sur le roi blanc."
      },
      {
        moves: "9.Ce5 Cbd7 10.Cxd7 Cxd7",
        evaluation: "Le développement est largement avancé. Le noir a acquis de la liberté et de la qualité de jeu, mais il doit rester précis dans la manière d’exploiter son avantage.",
        plan: "La suite dépendra du bon placement de la dame et de la préparation des plans sur le centre."
      }
    ],
    variants: [
      {
        title: "Variante principale",
        text: "Une approche directe et très tactique où les blancs doivent bien gérer la structure et le développement."
      },
      {
        title: "Ligne des échanges",
        text: "Le noir choisit souvent le plan de simplification pour obtenir une structure plus technique et plus dure."
      },
      {
        title: "Jeu actif",
        text: "Le noir cherche un jeu de pièces très actif et des menaces immédiates sur le roi."
      }
    ]
  },
  {
    id: "anglaise",
    name: "Ouverture anglaise",
    eco: "A10",
    family: "Ouverture flanquée",
    summary:
      "L’Anglaise est une ouverture de flanc très moderne, très souple et très utile dans les parties de haut niveau. Elle façonne le centre par des idées indirectes.",
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
        evaluation: "La structure est ouverte, le centre est plus équilibré et l’avantage du blanc reste subtil mais bien présent.",
        plan: "Le blanc cherchera à créer un jeu de pièces plus souple et à utiliser la structure ouverte pour sa coordination."
      },
      {
        moves: "6...c5 7.d4",
        evaluation: "Le centre se stabilise. Le jeu est très équilibré, mais le blanc a de meilleures chances d’initiative sur les plans de pièces.",
        plan: "Le noir doit gérer la concurrence sur le centre et ne pas trop transiger dans ses préparatifs de développement."
      },
      {
        moves: "7...e4 8.Cf3 Cc6 9.0-0",
        evaluation: "La position est toujours très propre et le blanc garde un jeu à la fois solide et bien préparé.",
        plan: "Le blanc continue à chercher le meilleur schéma de développement et la flexibilité sur les ailes."
      }
    ],
    variants: [
      {
        title: "Système du four-pion",
        text: "Une approche centrée sur l’espace, le contrôle indirect et la flexibilité structurelle."
      },
      {
        title: "Variantes du flanc",
        text: "La position est très ouverte et les plans peuvent varier selon l’initiative de chacun."
      },
      {
        title: "Plan de pièces",
        text: "L’Anglaise est excellente pour les plans subtils, souvent plus durables que la tactique immédiate."
      }
    ]
  }
];

const openingList = document.getElementById("openingList");
const openingGrid = document.getElementById("openingGrid");
const openingHeader = document.getElementById("openingHeader");
const openingIdea = document.getElementById("openingIdea");
const theoryTable = document.getElementById("theoryTable");
const variantsList = document.getElementById("variantsList");
const searchInput = document.getElementById("searchInput");
const hubView = document.getElementById("hubView");
const detailView = document.getElementById("detailView");
const backButton = document.getElementById("backButton");

let currentId = openings[0].id;

function getSelectedOpening() {
  return openings.find((opening) => opening.id === currentId) ?? openings[0];
}

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
  `;

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
        </article>
      `
    )
    .join("");
}

function setActiveButton(id) {
  const buttons = document.querySelectorAll(".opening-btn");
  buttons.forEach((button) => {
    const isActive = button.dataset.id === id;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function showHub() {
  hubView.classList.remove("hidden");
  detailView.classList.add("hidden");
}

function showDetail(id) {
  currentId = id;
  hubView.classList.add("hidden");
  detailView.classList.remove("hidden");
  renderBoard(getSelectedOpening());
  renderList(searchInput.value);
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
          <h3>${opening.name}</h3>
          <div class="meta-row">
            <span class="meta-badge">${opening.eco}</span>
            <span class="meta-badge">${opening.family}</span>
          </div>
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

function renderList(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const filtered = openings.filter((opening) => {
    const haystack = `${opening.name} ${opening.family} ${opening.eco} ${opening.summary}`.toLowerCase();
    return haystack.includes(normalized);
  });

  if (!filtered.length) {
    openingList.innerHTML = '<div class="empty-state">Aucune ouverture trouvée.</div>';
    return;
  }

  openingList.innerHTML = filtered
    .map(
      (opening) => `
        <button
          class="opening-btn ${opening.id === currentId ? "active" : ""}"
          type="button"
          data-id="${opening.id}"
          aria-pressed="${opening.id === currentId}"
        >
          <span class="opening-name">${opening.name}</span>
          <span class="opening-eco">${opening.eco}</span>
        </button>
      `
    )
    .join("");

  openingList.querySelectorAll(".opening-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentId = button.dataset.id;
      showDetail(currentId);
    });
  });

  setActiveButton(currentId);
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
  renderList(value);

  if (!hubView.classList.contains("hidden")) {
    renderBoard(getSelectedOpening());
  }
});

backButton.addEventListener("click", () => {
  showHub();
  renderOpeningGrid(searchInput.value);
  renderList(searchInput.value);
});

renderOpeningGrid();
renderList();
showHub();


