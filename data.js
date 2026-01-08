// Real Data from Transfermarkt & Sources (Jan 2026 Window)
const transfersData = [
    // Confirmed (Jan 1 - Jan 8, 2026)
    {
        id: 101,
        player: "Gabigol",
        photo: "https://img.a.transfermarkt.technology/portrait/header/244275-1660003081.jpg?lm=1",
        fromTeam: "Cruzeiro",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/609.png",
        toTeam: "Santos",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/221.png",
        type: "Transferência",
        value: "Retorno do Menino da Vila",
        date: "2026-01-03", // Verified verification
        status: "confirmed",
        position: "Atacante"
    },
    {
        id: 102,
        player: "Renan Lodi",
        photo: "https://img.a.transfermarkt.technology/portrait/header/476352-1703065997.jpg?lm=1",
        fromTeam: "Al-Hilal",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/614.png",
        toTeam: "Atlético-MG",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/330.png",
        type: "Transferência",
        value: "Até 2030",
        date: "2026-01-01", // Verified
        status: "confirmed",
        position: "Lateral Esq."
    },
    {
        id: 106,
        player: "Guilherme Arana",
        photo: "https://img.a.transfermarkt.technology/portrait/header/346766-1719653784.jpg?lm=1",
        fromTeam: "Atlético-MG",
        fromLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Clube_Atl%C3%A9tico_Mineiro_logo.svg/100px-Clube_Atl%C3%A9tico_Mineiro_logo.svg.png",
        toTeam: "Fluminense",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/2462.png",
        type: "Transferência",
        value: "Não revelado",
        date: "2026-01-06", // Verified
        status: "confirmed",
        position: "Lateral Esq."
    },
    {
        id: 108,
        player: "Marlon Freitas",
        photo: "https://img.a.transfermarkt.technology/portrait/header/364972-1751918531.jpg?lm=1",
        fromTeam: "Botafogo",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/537.png",
        toTeam: "Palmeiras",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/1023.png",
        type: "Transferência",
        value: "Pedido de Abel",
        date: "2026-01-01", // Verified
        status: "confirmed",
        position: "Volante"
    },
    {
        id: 109,
        player: "Matías Viña",
        photo: "https://img.a.transfermarkt.technology/portrait/header/439072-1663581362.jpg?lm=1",
        fromTeam: "Flamengo",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/614.png",
        toTeam: "River Plate",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/209.png",
        type: "Empréstimo",
        value: "Até Dez/2026",
        date: "2026-01-06", // Verified
        status: "confirmed",
        position: "Lateral Esq."
    },
    {
        id: 110,
        player: "Vitão",
        photo: "https://img.a.transfermarkt.technology/portrait/header/428783-1641992592.png?lm=1",
        fromTeam: "Internacional",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/6600.png",
        toTeam: "Flamengo",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/614.png",
        type: "Transferência",
        value: "R$ 45M",
        date: "2026-01-01", // Verified
        status: "confirmed",
        position: "Zagueiro"
    },
    {
        id: 111,
        player: "Thiago Silva",
        photo: "https://img.a.transfermarkt.technology/portrait/header/29241-1661856081.jpg?lm=1",
        fromTeam: "Fluminense",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/2462.png",
        toTeam: "FC Porto",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/720.png",
        type: "Fim de Contrato",
        value: "Free Agent",
        date: "2026-01-01", // Verified
        status: "confirmed",
        position: "Zagueiro"
    },
    {
        id: 103,
        player: "Alejandro García",
        photo: "https://img.a.transfermarkt.technology/portrait/header/632246-1722214610.JPG?lm=1",
        fromTeam: "Once Caldas",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/468.png",
        toTeam: "Athletico-PR",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/679.png",
        type: "Transferência",
        value: "Definitivo",
        date: "2026-01-05", // Verified
        status: "confirmed",
        position: "Meia"
    },
    {
        id: 104,
        player: "Jean Carlos",
        photo: "https://img.a.transfermarkt.technology/portrait/header/102574-1725225691.jpg?lm=1",
        fromTeam: "Ceará",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/2030.png",
        toTeam: "Chapecoense",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/17776.png",
        type: "Transferência",
        value: "Até 2026",
        date: "2026-01-07", // Verified
        status: "confirmed",
        position: "Meia"
    },
    {
        id: 105,
        player: "Martín Anselmi (Técnico)",
        photo: "https://img.a.transfermarkt.technology/portrait/header/99471-1737974393.jpg?lm=1",
        fromTeam: "Ind. del Valle",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/2990.png",
        toTeam: "Botafogo",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/537.png",
        type: "Contratação",
        value: "Até 2027",
        date: "2026-01-02", // Verified start date
        status: "confirmed",
        position: "Treinador"
    },

    // Rumors (Current Context Jan 1-8)
    {
        id: 201,
        player: "Neymar Jr",
        photo: "https://img.a.transfermarkt.technology/portrait/header/68290-1692601435.jpg?lm=1",
        fromTeam: "Al-Hilal",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/1114.png",
        toTeam: "Santos",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/221.png",
        type: "Free Agent",
        value: "Retorno Sonhado",
        date: "2026-01-08", // Recent
        status: "rumor",
        position: "Atacante"
    },
    {
        id: 202,
        player: "Hulk",
        photo: "https://img.a.transfermarkt.technology/portrait/header/80562-1563436073.jpg?lm=1",
        fromTeam: "Atlético-MG",
        fromLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Clube_Atl%C3%A9tico_Mineiro_logo.svg/100px-Clube_Atl%C3%A9tico_Mineiro_logo.svg.png",
        toTeam: "Fluminense",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/2462.png",
        type: "Transferência",
        value: "Sondagem",
        date: "2026-01-08", // Recent
        status: "rumor",
        position: "Atacante"
    },
    {
        id: 203,
        player: "Gabriel Paulista",
        photo: "https://img.a.transfermarkt.technology/portrait/header/149498-1727355000.png?lm=1",
        fromTeam: "Besiktas",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/114.png",
        toTeam: "Corinthians",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/199.png",
        type: "Transferência",
        value: "Negociando",
        date: "2026-01-08",
        status: "rumor",
        position: "Zagueiro"
    },
    {
        id: 204,
        player: "Oscar",
        photo: "https://img.a.transfermarkt.technology/portrait/header/85314-1563435929.jpg?lm=1",
        fromTeam: "Shanghai Port",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/27190.png",
        toTeam: "São Paulo",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/585.png",
        type: "Fim de Contrato",
        value: "Pré-contrato",
        date: "2026-01-08",
        status: "rumor",
        position: "Meia"
    },
    {
        id: 205,
        player: "Gérson",
        photo: "https://img.a.transfermarkt.technology/portrait/header/341705-1752473227.png?lm=1",
        fromTeam: "Zenit",
        fromLogo: "https://tmssl.akamaized.net/images/wappen/head/964.png",
        toTeam: "Cruzeiro",
        toLogo: "https://tmssl.akamaized.net/images/wappen/head/609.png",
        type: "Transferência",
        value: "Negociando",
        date: "2026-01-08",
        status: "rumor",
        position: "Meia"
    }
];

const teamsData = [
    { name: "Athletico-PR", logo: "https://tmssl.akamaized.net/images/wappen/head/679.png" },
    { name: "Atlético-MG", logo: "https://tmssl.akamaized.net/images/wappen/head/330.png" },
    { name: "Bahia", logo: "https://tmssl.akamaized.net/images/wappen/head/10010.png" },
    { name: "Botafogo", logo: "https://tmssl.akamaized.net/images/wappen/head/537.png" },
    { name: "Corinthians", logo: "https://tmssl.akamaized.net/images/wappen/head/199.png" },
    { name: "Cruzeiro", logo: "https://tmssl.akamaized.net/images/wappen/head/609.png" },
    { name: "Flamengo", logo: "https://tmssl.akamaized.net/images/wappen/head/614.png" },
    { name: "Fluminense", logo: "https://tmssl.akamaized.net/images/wappen/head/2462.png" },
    { name: "Fortaleza", logo: "https://tmssl.akamaized.net/images/wappen/head/10870.png" },
    { name: "Grêmio", logo: "https://tmssl.akamaized.net/images/wappen/head/210.png" },
    { name: "Internacional", logo: "https://tmssl.akamaized.net/images/wappen/head/6600.png" },
    { name: "Palmeiras", logo: "https://tmssl.akamaized.net/images/wappen/head/1023.png" },
    { name: "São Paulo", logo: "https://tmssl.akamaized.net/images/wappen/head/585.png" },
    { name: "Santos", logo: "https://tmssl.akamaized.net/images/wappen/head/221.png" },
    { name: "Vasco", logo: "https://tmssl.akamaized.net/images/wappen/head/978.png" },
];
