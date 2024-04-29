// Index Javascript file, housing the functions of the web page
window.addEventListener("load", (event) => {
    currentSection = "aboutMe";
    currentTab = "activeAbout";
    currentTabInactive = "inactiveAbout";

    // retrieve all active tab elements
    document.getElementById("inactiveAbout").style.display = "none";
    var tempActiveElements = document.getElementsByClassName("active-tab");
    activeElements = Array.from(tempActiveElements);
    activeElements.forEach(element => {
        if (element.id != currentTab) {
            element.style.display = "none";
        }
    });
    var tempInactiveElements = document.getElementsByClassName("inactive-tab");
    inactiveElements = Array.from(tempInactiveElements);
  });

// Scroll to function, to smoothly navigate through the web page.
function toSection(section, activeTabName, inactiveTabName) {
    const element = document.getElementById(section, activeTabName);
    element.scrollIntoView( { behavior: "smooth" } );

    if (window.screen.width <= 540) {
        changeMobileTab(section, activeTabName, inactiveTabName);
    }
}

function changeMobileTab(section, activeTabName, inactiveTabName) {
    document.getElementById(currentTabInactive).style.display = "block";
    document.getElementById(inactiveTabName).style.display = "none";

    inactiveElements.forEach(element => {
        if (element.id == activeTabName) {
            element.style.display = "block";
        }
    })
    activeElements.forEach(element => {
        if (element.id == currentTab) {
            element.style.display = "none";
        }
        if (element.id == activeTabName) {
            element.style.display = "flex";
        }
    });
    currentSection = section;
    currentTab = activeTabName;
    currentTabInactive = inactiveTabName;
}

// Function to open the various links on the web page. 
function openLink(link) {
    window.open(link, '_blank');
}

// Function to send an email. 
function sendEmail(address) {
    window.location.href = 'mailto:' + address;
}

// Function to open the resume pdf in the assets folder. 
function openResume() {
    window.open('/assets/files/2024_resume_revised.pdf', '_blank');
}