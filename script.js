document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const target = tab.getAttribute("data-target");

           
            tabs.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

           
            tab.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});
