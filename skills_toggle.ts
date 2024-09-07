document.getElementById("skillsToggle")!.addEventListener("click", function() {
    const skillsList = document.getElementById("skillsList") as HTMLElement;
    const toggleArrow = document.getElementById("toggleArrow") as HTMLElement;
    if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "block";
        toggleArrow.textContent = "▲";
    } else {
        skillsList.style.display = "none";
        toggleArrow.textContent = "▼";
    }
});
