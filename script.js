const headerDiv = document.getElementById("headerId")


const logoArray = ['logos/Arsenal.png',
    'logos/Aston Villa.png',
    'logos/Bournemouth.png',
    'logos/Brentford.png',
    'logos/Brighton & Hove Albion.png',
    'logos/Burnley.png',
    'logos/Chelsea.png',
    'logos/Crystal Palace.png',
    'logos/Everton.png',
    'logos/Fulham.png',
    'logos/Liverpool.png',
    'logos/Luton Town.png',
    'logos/Manchester City.png',
    'logos/Manchester United.png',
    'logos/Newcastle United.png',
    'logos/Nottingham Forest.png',
    'logos/Sheffield United.png',
    'logos/Tottenham.png',
    'logos/West Ham United.png',
    'logos/Wolverhampton.png']

for (let index = 0; index < logoArray.length; index++) {
    let img = document.createElement("IMG")
    img.src = logoArray[index]
    img.className = "clubLogo"
    headerDiv.appendChild(img)
}

