document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
        const topItem = item.querySelector(".top-item");
        const dropdown = item.querySelector(".dropdown-container");

        topItem.addEventListener("click", function () {
            document.querySelectorAll(".dropdown-container").forEach((drop) => {
                if (drop !== dropdown) {
                    drop.style.display = "none";
                }
            });

            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });
    });
});
