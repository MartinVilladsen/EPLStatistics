const headerDiv = document.getElementById("headerId")

const teams = {
    'Arsenal': 'logos/Arsenal.png',
    'Aston Villa': 'logos/Aston Villa.png',
    'Bournemouth': 'logos/Bournemouth.png',
    'Brentford': 'logos/Brentford.png',
    'Brighton': 'logos/Brighton & Hove Albion.png',
    'Burnley': 'logos/Burnley.png',
    'Chelsea': 'logos/Chelsea.png',
    'Crystal Palace': 'logos/Crystal Palace.png',
    'Everton': 'logos/Everton.png',
    'Fulham': 'logos/Fulham.png',
    'Liverpool': 'logos/Liverpool.png',
    'Luton': 'logos/Luton Town.png',
    'Manchester City': 'logos/Manchester City.png',
    'Manchester United': 'logos/Manchester United.png',
    'Newcastle': 'logos/Newcastle United.png',
    'Nottingham Forest': 'logos/Nottingham Forest.png',
    'Sheffield Utd': 'logos/Sheffield United.png',
    'Tottenham': 'logos/Tottenham.png',
    'West Ham': 'logos/West Ham United.png',
    'Wolves': 'logos/Wolverhampton.png'
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
getAsTable(url, requestOptions)


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

            rankNode.className = 'rank';
            nameNode.className = 'rank';
            pointsNode.className = 'rank';

            tableNode.appendChild(rankNode);
            tableNode.appendChild(nameNode);
            tableNode.appendChild(pointsNode);

        }

    } catch (error) {
        console.log(error);
    }
}


async function getAsTable(url, options) {
    try {
        const response = await fetch(url, options);
        
        if (response.status !== 200) {
            throw new Error(response.status);
        }

        const data = await response.json();

        const sideBarNode = document.getElementById('sidebar');
        const tableNode = document.createElement('table');
        sideBarNode.appendChild(tableNode);

        // Headers
        const trNode = document.createElement('tr');
        tableNode.appendChild(trNode);
        const headerArray = ['Rank','Club', '','Points'];
        for (header of headerArray) {
            const thNode = document.createElement('th');
            thNode.textContent = header;
            trNode.appendChild(thNode);
        }


        for (let i = 0; i < data.response[0].league.standings[0].length; i++) {
            const trDataNode = document.createElement('tr');
            const rank = data.response[0].league.standings[0][i].rank;
            const name = data.response[0].league.standings[0][i].team.name;
            const points = data.response[0].league.standings[0][i].points;

            
            const rankNode = document.createElement('td');
            let logoNode;
            const nameNode = document.createElement('td');
            const pointsNode = document.createElement('td');
            for (let team in teams) {
                if (team == name) {
                    logoNode = document.createElement('td');
                    logoNode.className = 'logo-cell';
                    const logoImage = document.createElement('img');
                    logoImage.src = teams[team];
                    logoNode.appendChild(logoImage);
                }
            }

            rankNode.textContent = rank;
            nameNode.textContent = name;
            pointsNode.textContent = points;
            console.log(name.textContent);

            rankNode.className = 'rank';
            logoNode.classList.add('rank');
            nameNode.className = 'rank';
            pointsNode.className = 'rank';
            tableNode.appendChild(trDataNode);
            trDataNode.appendChild(rankNode);
            if (logoNode && logoNode.childNodes.length > 0) {
                trDataNode.appendChild(logoNode);
            }
            trDataNode.appendChild(nameNode);
            trDataNode.appendChild(pointsNode);

        }

    } catch (error) {
        console.log(error);
    }
}