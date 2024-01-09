export const renderProjects = (container, data)=>{
    const newData = data.map(({heading, tech, description, code, live})=>{
        return (
            `<div class="project">
                <h3 class="project-heading">${heading}</h3>
                <code class="tech-used">${tech}</code>
                <p class="project-description">${description}</p>
                <div class="btns">
                    <a href="${code}" target="_blank"><button class="Code-btn">Code</button></a>
                    ${ live ? `<a href="${live}" target="_blank"><button class="Live-btn">Live</button></a>` : ``}
                </div>
            </div>`
        );
    }).join('');
    container.innerHTML = newData;
}