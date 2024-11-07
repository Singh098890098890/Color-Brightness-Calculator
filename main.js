// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to the button
    document.getElementById("calculateButton").addEventListener("click", function () {
        // Input: Retrieve the user's data
        let r = document.getElementById("inputR").value; // R value
        let g = document.getElementById("inputG").value; // G value
        let b = document.getElementById("inputB").value; // B value

        // Convert input values to integers
        r = parseInt(r);
        g = parseInt(g);
        b = parseInt(b);

        // Calculate luminance
        let luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);

        // Output the result
        document.getElementById("luminanceOutput").textContent = luminance.toFixed(2);
    });
});

