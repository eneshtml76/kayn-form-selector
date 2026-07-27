const kaynImage = document.getElementById("kayn-img");
const mainTitle = document.getElementById("main-title");
const skillsContainer = document.getElementById("skills-container");

function shadowForm() {
    kaynImage.src = "164605.jpg"; 
    mainTitle.innerText = "Time for speed and assassination! (Shadow Assassin)";
    document.body.style.backgroundColor = "#001133"; 

    // Render Shadow Assassin English Skills
    skillsContainer.className = "skills-box blue-glow";
    skillsContainer.innerHTML = `
        <h3>Shadow Assassin Skills</h3>
        <p><strong>W - Blade's Reach:</strong> Deals extra damage and leaves a living shadow that casts the skill for Kayn.</p>
        <p><strong>E - Shadow Step:</strong> Gains increased movement speed and can walk through walls.</p>
        <p><strong>R - Umbral Trespass:</strong> Infests a target, dealing massive magic damage.</p>
    `;
}

function darkinForm() {
    kaynImage.src = "1018150.jpg"; 
    mainTitle.innerText = "Let the slaughter begin! (Rhaast)";
    document.body.style.backgroundColor = "#330005"; 

    // Render Darkin Rhaast English Skills
    skillsContainer.className = "skills-box red-glow";
    skillsContainer.innerHTML = `
        <h3>Darkin Rhaast Skills</h3>
        <p><strong>W - Blade's Reach:</strong> Knocks up all enemies hit into the air for 1 second.</p>
        <p><strong>E - Shadow Step:</strong> Allows him to walk through walls and heals Rhaast.</p>
        <p><strong>R - Umbral Trespass:</strong> Infests a target, dealing maximum health damage and healing.</p>
    `;
}
