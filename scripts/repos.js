const API_REPOS_URL = 'https://api.github.com/users/Flxash/repos'

async function getRepos() {
    const resp = await fetch(API_REPOS_URL);
    const respData = await resp.json();

    renderRepos(respData);
}


//const langs = await fetch(API_REPOS_URL + repo + '/languages');
//const langsData = await langs.json();

//bottom left can be for a copy clone link button ig
//repoToClone = (API_REPOS_URL + '/ssh_url') gives ssh url ten you do 'git clone repoToClone'


function renderRepos(repos) {
    const cards = document.getElementById('cards');

    repos.sort((a, b) => a.push - b.push).slice(0,6).forEach((repo) => {
        const langsPromise = fetch(API_REPOS_URL + repo.name + '/languages').then(res => res.json());
        
        const cardHTML = `
            <a class="card" href="${repo.html_url}" target="blank">
                <div class="card-content">
                    <div class="card-image">
                        <img src="./assets/icons/${repo.language}.png" />
                    </div>
                    <div class="card-info-wrapper">
                        <div class="card-info">
                            <div class="card-info-title-${repo}">
                                <h3>${repo.name}</h3>
                                <h4>${langsPromise}<h4> 
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        `;

        cards.innerHTML += cardHTML;

        //renderLangs(langsPromise, repo);
    });
}

/*
function renderLangs(langs, repo) {
    const languagesEl = document.getElementById(`card-info-title-${repo}`);

    langs.forEach((lang) => {
        const langHTML = `
            <h4 id="langauges">${lang}</h4>
        `;

        languagesEl.innerHTML += langHTML;
    });
}


getRepos();