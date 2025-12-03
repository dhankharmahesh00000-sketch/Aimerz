async function generate(){
  const prompt = document.getElementById('prompt').value;
  document.getElementById('result').innerHTML = "Generating...";
  const res = await fetch('/.netlify/functions/generate',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({prompt})
  });
  const data = await res.json();
  document.getElementById('result').innerHTML = `<img src="${data.image}" />`;
}
