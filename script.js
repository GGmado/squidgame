document.getElementById("generate").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const gender = document.getElementById("gender").value;
    const expiryMinutes = parseInt(document.getElementById("expiry").value);

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");

        const expirationTime = Date.now() + expiryMinutes * 60 * 1000;
        const uniqueId = Math.random().toString(36).substr(2, 9);
        const link = `view.html?id=${uniqueId}&name=${encodeURIComponent(name)}&gender=${gender}&expires=${expirationTime}`;

        localStorage.setItem(uniqueId, expirationTime);
        document.getElementById("generatedLink").href = link;
        document.getElementById("generatedLink").textContent = window.location.origin + "/" + link;
        document.getElementById("result").classList.remove("hidden");
    }, 2000); // Simulating the cat loader animation time
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});
