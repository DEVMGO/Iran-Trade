export function openNav() {
    document.getElementById("open").style.display = 'none';
    document.getElementById("close").style.display = 'block';
    document.getElementById("navbarSupportedContent").style.display = 'block';
    document.getElementById("navbarSupportedContent").style.position = 'absolute';
    document.getElementById("navbarSupportedContent").style.top = '0';
    document.getElementById("navbarSupportedContent").style.left = '0';
    document.getElementById("confluid").style.padding = '0';
}

export function closeNav() {
    document.getElementById("open").style.display = 'block';
    document.getElementById("close").style.display = 'none';
    document.getElementById("navbarSupportedContent").style.display = 'none';
    document.getElementById("navbarSupportedContent").style.position = 'relative';
}