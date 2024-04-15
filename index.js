// Index Javascript file, housing the functions of the web page

// Scroll to function, to smoothly navigate through the web page.
function toSection(section) {
    console.log(section);
    const element = document.getElementById(section);
    element.scrollIntoView( { behavior: "smooth" } );
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