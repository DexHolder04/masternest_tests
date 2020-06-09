// Insert Footer
function buildFooter() {

    let footer = document.getElementById("footer");
    let footerRaw = `<div class="boundboxb"> <div class="footer-container"> <div class="footerC" style="font-family:lithos; font-size:24px">~ Master Nest ~</div><div class="footerC">developed by <strong>DexHolder23</strong></div><div class="footerC">sponsored by <strong>DaicosMagic</strong></div><div class="footerC">brought together by the amazing </div><div class="footerC">team of <strong>CoolDownClub</strong></div><div class="footerC1"> <div class="discordLogo"> <a href="https://discord.gg/yaFNCak"> <i class="fab fa-discord"></i> </a> </div><div> <i>join the club!</i> </div></div><div class="footerC2"> <a href="./itools.html"> <img src="resources/images/iToolslogo.png" alt="iTools Logo" class="iToolsLogo"> </a> <div> <i>iTools Partner</i> </div></div></div></div>`;
    footer.innerHTML = footerRaw

}

// Navbar minimizing
function checkRes() {

    if (window.innerWidth <= 490) {
        document.getElementById(
            "home"
        ).innerHTML = `<i class="fas fa-home faNavbar"></i>`;
        document.getElementById("gen1").innerHTML = "I";
        document.getElementById("gen2").innerHTML = "II";
        document.getElementById("gen3").innerHTML = "III";
        document.getElementById("gen4").innerHTML = "IV";
        document.getElementById("gen5").innerHTML = "V";
        document.getElementById("gpx").innerHTML =
            `<i class="far fa-map faNavbar"></i>`;
    } else {
        return
    }
    
    let pageIndex = document.documentElement.getAttribute("data-page");
    if (pageIndex == "itools") return;
    document.getElementById(pageIndex).classList.add("active");
}

// Dark/Light Theme Toggle
let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

let theme = localStorage.getItem("theme");

function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

function checkTheme() {
    if (!theme) {
        localStorage.setItem("theme", "light");
        return console.log("No theme selected, set to default");
    } else if (theme === "dark") {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
        document.querySelector("input[name=theme]").checked = true;
        return console.log("Dark Theme selected");
    } else if (theme === "light") {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
        document.querySelector("input[name=theme]").checked = false;
        return console.log("Light Theme selected");
    } else {
        localStorage.setItem("theme", "light");
        return console.log("Invalid theme, set to default");
    }
}

function toggleTheme() {
    if (document.querySelector("input[name=theme]").checked) {
        setTheme("dark");
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        setTheme("light");
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
}

// Show list of nesting species
function showText() {
    let hideButton = document.getElementById("showhide-button");
    let hiddenText = document.getElementById("nesting-species");
    let currentState = hiddenText.getAttribute("data-isHidden");

    if (!currentState || currentState === "yes") {
        hiddenText.style.height = "auto";
        hiddenText.style.visibility = "visible";
        hiddenText.style.marginTop = "15px";
        hiddenText.style.transition = "750ms";
        hiddenText.setAttribute("data-isHidden", "no");
        hideButton.innerHTML = "Hide Nesting Species";
    } else if (currentState === "no") {
        hiddenText.style.height = "0px";
        hiddenText.style.visibility = "hidden";
        hiddenText.style.marginTop = "0px";
        hiddenText.style.transition = "0s";
        hiddenText.setAttribute("data-isHidden", "yes");
        hideButton.innerHTML = "Show Nesting Species";
    } else {
        return console.log("Error.");
    }
}


// Display frameshift message on top of the page
function frameshiftNotice() {

    if (notice) {

        let top = document.getElementById("top");
        let noticeDiv = document.createElement("div");
        let noticeP = document.createElement("p");
        noticeP.innerHTML = noticeText;
        noticeDiv.setAttribute("class", "notice");
        noticeP.setAttribute("class", "bodyText");
        noticeDiv.appendChild(noticeP);

        top.insertAdjacentHTML("beforebegin", noticeDiv.outerHTML);

    } else {
        return
    }


}

// Merge all HTML functions in one single call
function buildHTMLPage() {
    
        buildFooter();
        checkRes();
        checkTheme();
        frameshiftNotice();  
    
}
