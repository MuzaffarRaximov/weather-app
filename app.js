
// inputni qiymatini olish funsiyasi

const input=document.querySelector(".input")

input.addEventListener("keypress",(e)=>{
    if(e.keyCode==13){
        console.log(e.target.value)
        getData( e.target.value)
    }
})

// API dan malumot olish funcsiyasi

  const YourKey="990fd221f21648292a00afade56afe58"
  async function getData(value){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${YourKey}`)
    const data = await response.json();
   UI(data);
   
}

// APIdan kelgan malumotlarni saytimizni UI qismida ishlatish funcsiyasi

const country=document.querySelector(".country");
const date=document.querySelector(".date");
const temp=document.querySelector(".temp");
const condition=document.querySelector(".condition");
const min=document.querySelector(".min");
const max=document.querySelector(".max");
const modal_block =document.querySelector(".modal_block");
const body=document.body
const day=new Date()
const currentDate=`${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`

const UI=function(data){

  if(data.cod==200){
    country.innerHTML= data.name;
    temp.innerHTML=Math.round(data.main.temp);
    condition.innerHTML=data.weather[0].main;
    min.innerHTML=Math.round(data.main.temp_min);
    max.innerHTML=Math.round(data.main.temp_max);

    switch(data.weather[0].main){
      case "Clear":
      body.style.backgroundImage='url("./sunishi.jpg")'
      break;
      case "Clouds":
      body.style.backgroundImage='url("./tabiat.png")'
      break;
      case "District":
      body.style.backgroundImage='url("./tuman.jpg")'
      break;
      case "Rain":
      body.style.backgroundImage='url("./yomgir2.jpg")'
      break;
      case "Snow":
      body.style.backgroundImage='url("./qor2.jpg")'
      break;
      case "Lightning":
      body.style.backgroundImage='url("./chaqmoq.webp")'
      break;
    }
  }
  else{
    const div=document.createElement("div");
    div.classList.add("modal");
    div.innerHTML="Afsuski,bunaqa joy topilmadi";
    modal_block.appendChild(div);
    setTimeout(()=>div.classList.add("fade"),2000);
    setTimeout(()=>div.classList.add("none"),2500);
  };

 
};

date.innerHTML = currentDate;
