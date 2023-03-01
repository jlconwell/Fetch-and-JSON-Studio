window.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            let astronauts = json;
            astronauts.sort(function(a,b) {return b.hoursInSpace - a.hoursInSpace});
            let astroDiv = document.getElementById("container");
            astroDiv.innerHTML = `<p>Astronaut Count: ${json.length}</p>`
            for(let value of astronauts) {
                astroDiv.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${value.firstName} ${value.lastName}</h2>
                        <ul>
                            <li ${(value.active ? "class='active'" : "")}>Active: ${value.active}</li>
                            <li>Last Name: ${value.lastName}</li>
                            <li>Hours in Space: ${value.hoursInSpace}</li>
                            <li>Skills: ${value.skills}, </li>
                        </ul>
                    </div>
                    <img class="avatar" src = "${value.picture}" />
                </div>
                `;
            }
        });
    });
});