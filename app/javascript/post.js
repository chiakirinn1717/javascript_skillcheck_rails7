function post(){
    const form = document.getElementById("form");
    form.addEventListener("submit",(e)=>{
        const formData = new FormData(document.getElementById("form"));
        const XHR = new XMLHttpRequest();
        XHR.open("POST", "/articles", true);
        XHR.responseType = "json";
        XHR.send(formData);
        XHR.onload = () => {
            if(XHR.status != 200){
                alert(`Error ${XHR.status}:${XHR.statusText}`);
                return null;
            }
            const contents = document.getElementById("contents_area");
            const item = XHR.response.article;
            const formText = document.getElementById("article_text");
            const html = `
            <div class="article">${item.text}</div>
            `;
            contents.insertAdjacentHTML("afterbegin",html)
            formText.value = "";

            const charNum = document.getElementById("char_num");
            charNum.innerHTML = "0文字";
          };
        e.preventDefault();
    });
};

window.addEventListener('turbo:load',post);