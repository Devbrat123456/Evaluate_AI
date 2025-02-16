Thank you for using our template!

For more awesome templates please visit https://colorlib.com/wp/templates/

Copyright information for the template can't be altered/removed unless you purchase a license.
More information about the license is available here: https://colorlib.com/wp/licence/

Removing copyright information without the license will result in suspension of your hosting and/or domain name(s).



const container = document.getElementById('threeContainer');
container.appendChild(renderer.domElement);

Adjust the renderer size to match the container dimensions:

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
renderer.setSize(containerWidth, containerHeight);

Ensure that the camera's aspect ratio matches the container dimensions:

    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();

Let me know if you need help integrating this!