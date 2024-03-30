const headerDiv = document.getElementById("headerId")

const teams = {
    Arsenal: 'logos/Arsenal.png',
    AstonVilla: 'logos/Aston Villa.png',
    Bournemouth: 'logos/Bournemouth.png',
    Brentford: 'logos/Brentford.png',
    BrightonHoveAlbion: 'logos/Brighton & Hove Albion.png',
    Burnley: 'logos/Burnley.png',
    Chelsea: 'logos/Chelsea.png',
    CrystalPalace: 'logos/Crystal Palace.png',
    Everton: 'logos/Everton.png',
    Fulham: 'logos/Fulham.png',
    Liverpool: 'logos/Liverpool.png',
    LutonTown: 'logos/Luton Town.png',
    ManchesterCity: 'logos/Manchester City.png',
    ManchesterUnited: 'logos/Manchester United.png',
    NewcastleUnited: 'logos/Newcastle United.png',
    NotthinghamForest: 'logos/Nottingham Forest.png',
    ShieffieldUnited: 'logos/Sheffield United.png',
    Tottenham: 'logos/Tottenham.png',
    WestHamUnited: 'logos/West Ham United.png',
    Wolverhampton: 'logos/Wolverhampton.png'
}

for (let team in teams) {
    let img = document.createElement("IMG")
    img.src = teams[team]
    img.className = "clubLogo"
    headerDiv.appendChild(img)
}


var myHeaders = new Headers();
myHeaders.append("x-apisports-key", "1a2ea930e74fb5048eedc41f426cb1bc");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

let requestOptions = {
    method: 'GET',
    headers: myHeaders
};

const url = 'https://v3.football.api-sports.io/standings?season=2023&league=39';
get(url, requestOptions)


async function get(url, options) {
    try {
        const response = await fetch(url, options);
        
        if (response.status !== 200) {
            throw new Error(response.status);
        }

        const data = await response.json();

        const tableNode = document.getElementById('sidebar');
        for (let i = 0; i < data.response[0].league.standings[0].length; i++) {
            const rank = data.response[0].league.standings[0][i].rank;
            const name = data.response[0].league.standings[0][i].team.name;
            const points = data.response[0].league.standings[0][i].points;

            const rankNode = document.createElement('p');
            const nameNode = document.createElement('p');
            const pointsNode = document.createElement('p');

            rankNode.textContent = rank;
            nameNode.textContent = name;
            pointsNode.textContent = points;
            console.log(name.textContent);

            tableNode.appendChild(rankNode);
            tableNode.appendChild(nameNode);
            tableNode.appendChild(pointsNode);

        }

    } catch (error) {
        console.log(error);
    }
}