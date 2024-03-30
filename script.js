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


for (let team of teams) {
    console.log(team);
    let img = document.createElement("IMG")
    img.src = team
    img.className = "clubLogo"
    headerDiv.appendChild(img)
}


