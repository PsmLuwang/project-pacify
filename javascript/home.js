const sideBarBtn = document.querySelector('.sideBarBtn');
const aside = document.getElementById('aside');
const main = document.querySelector('.main');

sideBarBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
    // main.style.left = '280px'
});
// document.addEventListener('DOMContentLoaded', () => {
//     if (main.style.display === 'block') {
document.addEventListener('click', (event) => {
    if (!aside.contains(event.target) && !sideBarBtn.contains(event.target)) {
        aside.classList.remove('open');
    }
});
//     }
// });


const groupContainer = document.querySelector('.groupContainer');

for (let i = 0; i < 10; i++) {
    groupContainer.innerHTML += `
                <div class="group">
                    <img src="https://www.herbalife.com/dmassets/regional-reusable-assets/workflow/emea/india/lifestyle/li-man-drinking-formula-1-shale-kitchen.jpg?fmt=webp-alpha" alt="">
                    <div class="groupName">
                        <span>
                            TDNC Group
                            <p>Announcement</p>
                        </span>
                    </div>
                    <div class="time">
                        <span>
                            Today
                            <p>10:00 am</p>
                        </span>
                    </div>
                </div>
            `;
}