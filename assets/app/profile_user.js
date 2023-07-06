const profile_user = [
  {
    name: `Md Zahirul Islam`,
    author_url: `https://web.facebook.com/developerzahir`,
    author_image: `./assets/images/author/zahir.jpg`,
  },
];

// author infor on right sidebar
const author_inner_on_righ_ridebar = document.querySelector(".author-inner-on-righ-ridebar");
profile_user.map((author_info) => {
  // author infor on right sidebar
  author_inner_on_righ_ridebar.innerHTML += `
        <a href="${author_info.author_url}">
            <div class="body-icon">
                 <img src="${author_info.author_image}" alt="" />
            </div>
            <span>${author_info.name}</span>
        </a>
    `;

  // author image on post submite box and header left 
  document.querySelector(".author_image").innerHTML = ` <img src="${author_info.author_image}" alt="" /> `;
  document.querySelector(".author_image_").innerHTML = ` <img src="${author_info.author_image}" alt="" /> `;
});
