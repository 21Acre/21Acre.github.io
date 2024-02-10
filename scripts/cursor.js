 // Get reference to the cursor element
 const cursor = document.getElementById('cursor');

 // Update the position of the circle to follow the cursor
 document.addEventListener('mousemove', (e) => {
     cursor.style.left = e.clientX + 'px';
     cursor.style.top = e.clientY + 'px';
 });