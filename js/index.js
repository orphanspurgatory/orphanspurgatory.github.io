
    
    
    // Cerrar al hacer click fuera del panel
    window.onclick = function (e) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}
   
        function openRules() {
            document.getElementById("modal-rules").style.display = "flex";
        }
        
        function closeRules() {
            document.getElementById("modal-rules").style.display = "none";
        }

        function openModal() {
            document.getElementById("modal-about").style.display = "flex";
        }
        
        function closeModal() {
            document.getElementById("modal-about").style.display = "none";
        }

        function openStaff() {
            document.getElementById("modal-staff").style.display = "flex";
        }
        
        function closeStaff() {
            document.getElementById("modal-staff").style.display = "none";
        }
//Firma ASCII
window.addEventListener('load', () => {
    const asciiArt = `
        
          
          
 /$$$$$$$$        /$$      /$$                              
|__  $$__/       | $$  /$ | $$                              
   | $$ /$$   /$$| $$ /$$$| $$  /$$$$$$  /$$$$$$$$  /$$$$$$ 
   | $$| $$  | $$| $$/$$ $$ $$ |____  $$|____ /$$/ /$$__  $$
   | $$| $$  | $$| $$$$_  $$$$  /$$$$$$$   /$$$$/ | $$  \ $$
   | $$| $$  | $$| $$$/ \  $$$ /$$__  $$  /$$__/  | $$  | $$
   | $$|  $$$$$$/| $$/   \  $$|  $$$$$$$ /$$$$$$$$|  $$$$$$/
   |__/ \______/ |__/     \__/ \_______/|________/ \______/ 
          
        
                                                            
  `;
  
    const asciiEl = document.getElementById('ascii-art');
    const intro = document.getElementById('intro');
    const main = document.getElementById('main-content');
  
    // Función para escribir el ASCII lentamente
    let i = 0;
    function typeAscii() {
      if (i < asciiArt.length) {
        asciiEl.textContent += asciiArt[i];
        i++;
        setTimeout(typeAscii, 1); // velocidad de escritura
      } else {
        // Después de que termine, esperar un segundo y hacer el parpadeo
        setTimeout(() => {
          flashBackground();
        }, 1000);
      }
    }
  
    // Parpadeo del fondo negro
    function flashBackground() {
      let flashes = 0;
      const flashInterval = setInterval(() => {
        intro.style.backgroundColor = flashes % 2 === 0 ? 'black' : 'white';
        flashes++;
        if (flashes > 3) { // 2 parpadeos
          clearInterval(flashInterval);
          // Desvanecer el intro
          intro.style.opacity = 0;
          setTimeout(() => {
            intro.style.display = 'none';
            main.style.display = 'block';
            document.body.style.overflow = 'auto'; // activar scroll
          }, 1000);
        }
      }, 200);
    }
  
    // Iniciar la animación
    setTimeout(typeAscii, 1); // espera inicial del fondo negro 0.7s
  });

