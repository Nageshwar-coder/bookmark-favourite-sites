let bookmarkFormEl = document.getElementById('bookmarkForm');
let siteNameInputEl = document.getElementById('siteNameInput');
let siteNameErrMsgEl = document.getElementById('siteNameErrMsg');
let siteUrlInputEl = document.getElementById('siteUrlInput');
let siteUrlErrMsgEl = document.getElementById('siteUrlErrMsg');
let bookmarksListEl = document.getElementById('bookmarksList');
let submitBtnEl = document.getElementById('submitBtn');
let clearBtn = document.getElementById('clearBtn');

let formData = {
    siteName: "",
    siteUrl: ""
};

siteNameInputEl.addEventListener('blur', function(event) {
    if(event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else{
        siteNameErrMsgEl.textContent = "";
    }
    formData.siteName = event.target.value;
});
siteUrlInputEl.addEventListener('blur', function(event) {
    if(event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else{
        siteUrlErrMsgEl.textContent = "";
    }
    formData.siteUrl = event.target.value;
});

function createAndAppendData(formData) {
    let {siteName, siteUrl} = formData;
    // creating list item
    let listItemEl = document.createElement('li');
    listItemEl.classList.add('list-item');
    bookmarksListEl.appendChild(listItemEl);
    // creating list item heading element
    let listItemHeadingEl = document.createElement('h1');
    listItemHeadingEl.classList.add('list-item-heading');
    listItemHeadingEl.textContent = siteName;
    listItemEl.appendChild(listItemHeadingEl);
    // creating link Element
    let linkEl = document.createElement('a');
    linkEl.href = siteUrl;
    linkEl.textContent = siteUrl;
    linkEl.target = '_blank';
    listItemEl.appendChild(linkEl);
}

function confirmSubmission(formData) {
    let {siteName, siteUrl} = formData;
    if(siteName === "" && siteUrl === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "Required*";
    } 
    else if(siteName === "" && siteUrl !== "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "";
    }
    else if(siteName !== "" && siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        siteNameErrMsgEl.textContent = "";
    }
    else {
        siteNameErrMsgEl.textContent = "";
        siteUrlErrMsgEl.textContent = "";
        createAndAppendData(formData);
    }
}
bookmarkFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    confirmSubmission(formData);
});

clearBtn.addEventListener('click', function() {
    bookmarksListEl.classList.add('d-none');
});
