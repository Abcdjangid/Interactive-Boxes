document.addEventListener("DOMContentLoaded", function () {
    // current dropdown and indicator value.
    let activeDropdown = null; 
    let activeIndicator = null;

    const items = document.querySelectorAll(".item");

    // using for each to run loop of each items.
    items.forEach(function (item) {
        const topItem = item.querySelector(".top-item");
        const dropdown = item.querySelector(".dropdown-container");
        const indicator = item.querySelector(".indicator");

        topItem.addEventListener("click", function () {
            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.style.display = "none";
                activeIndicator.style.backgroundColor = ""; 
            }

            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
                indicator.style.backgroundColor = "";
                activeDropdown = null;
                activeIndicator = null;
            } else {
                dropdown.style.display = "block";
                indicator.style.backgroundColor = "black";
                activeDropdown = dropdown;
                activeIndicator = indicator;
            }
        });
    });
});

