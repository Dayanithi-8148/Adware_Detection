document.addEventListener('DOMContentLoaded', () => {
    const adwareLinks = document.querySelectorAll('.ad-link'); 
    const warningPopup = document.getElementById('adware-warning');
    const overlay = document.getElementById('overlay');
    let currentLink = null;

    function showPopup(link) {
        currentLink = link;
        warningPopup.style.display = 'block';
        overlay.style.display = 'block';
    }

    function hidePopup() {
        warningPopup.style.display = 'none';
        overlay.style.display = 'none';
        currentLink = null;
    }

    adwareLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            showPopup(link);
        });
    });

    document.getElementById('continue').addEventListener('click', () => {
        if (currentLink) {
            window.location.href = currentLink.href;
        }
        hidePopup();
    });

    document.getElementById('cancel').addEventListener('click', () => {
        hidePopup(); 
    });
    var MenuItems = document.getElementById("MenuItems");
            MenuItems.style.maxHeight="0px";
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px")
                    {
                        MenuItems.style.maxHeight = "200px";
                        
                    }
                else{
                    MenuItems.style.maxHeight = "0px";
                }
            }
});
