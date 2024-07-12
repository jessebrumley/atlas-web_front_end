function createElement(data) {
  const para = document.createElement('p');
  
  para.textContent = data;
  
  document.body.appendChild(para);
}

function queryWikipedia(callback) {
  var xhr = new XMLHttpRequest();
  
  var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  
  xhr.open('GET', url, true);
  
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          
          var extract = response.query.pages[0].extract;
          
          callback(extract);
      }
  };
  
  xhr.send();
}

queryWikipedia(createElement);

