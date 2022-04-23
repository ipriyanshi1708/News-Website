console.log("This is my news website");

let apiKey='17b6ba23bddf46708124de7ec2fa72d7';

let newsAccordian= document.getElementById('newsAccordion');

const xhr= new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`,true);

xhr.onload = function(){
    if(this.status === 200){
        let json= JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach((element,index) => {
                let news = ` <div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
              <button
                class="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${index}"
                aria-expanded="true"
                aria-controls="collapse${index}"
              >
                <b>Breaking News ${index+1}: </b> ${element["title"]}
              </button>
            </h2>
            <div
              id="collapse${index}"
              class="accordion-collapse collapse "
              aria-labelledby="heading${index}"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">${element["content"]} <a href="${element['url']}" target="_blank">Read More</a>
              </div>
            </div>
            </div>`;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else{
        console.log("Some Error Occured");
    }
}

xhr.send();
