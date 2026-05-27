/* RSS NEWS */

fetch(
'https://api.rss2json.com/v1/api.json?rss_url=https://berita.rtm.gov.my/rss'
)

.then(response => response.json())

.then(data => {

  let output = '<div class="news-scroll">';

  data.items.slice(0,10).forEach(item => {

    output += `

    <a href="${item.link}" target="_blank">
      ${item.title}
    </a>

    `;

  });

  output += '</div>';

  document.getElementById('rss-news').innerHTML = output;

});

/* VISITOR COUNTER */

fetch('https://api.countapi.xyz/hit/naniscommunication.com/visits')

.then(res => res.json())

.then(res => {

  console.log(res.value);

});
