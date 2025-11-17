function showLastModified() {
    try {

        var divElement = document.getElementById("lastModifiedDiv");

        if (!divElement) {
            console.error("Data with ID 'lastModifiedDiv' not found.");
            return;
        }


        var lastMod = document.lastModified;

        divElement.innerHTML = "Last Modified: " + lastMod;
    } catch (error) {
        console.error("Error displaying last modified date:", error);
    }
}

