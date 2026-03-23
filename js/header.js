class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="title-container">
                    <h1><a href="index.html">BookwormKevin's Website</a></h1>
                    <img src="images/bookwormkevin.png" alt="Profile Picture" class="profile-pic">
                </div>
                <nav>
                    <a href="games.html" class="nav-btn">Games</a>
                    <a href="custom-content.html" class="nav-btn">Custom Content</a>
                    <a href="projects.html" class="nav-btn">Projects</a>
                    <a href="archive.html" class="nav-btn">Archive</a>
                </nav>
            </header>
        `;
    }
}
customElements.define('site-header', SiteHeader);

// Load the cursor effect dynamically so it applies to all pages
import("https://unpkg.com/cursor-effects@latest/dist/esm.js").then((module) => {
    //new module.fairyDustCursor();

    new module.fairyDustCursor({
        colors: ["#00ff00", "#0000ff"],
        fairySymbol: "★",
    });
    
    // new module.emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });

    // new module.bubbleCursor({
    //     fillColor: "#f771b4",
    //     strokeColor: "#e6f1f7",
    // });
});