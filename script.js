console.log('I am working');

const wrapper = document.querySelector(".wrapper");
const menuItem = document.querySelectorAll(".pointer");

const products = [
    {
      id: 1,
      title: "Blazer",
      price: 4999,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },


    {
      id: 2,
      title: "Air Force",
      price: 2999,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
        
      ],
    },
    {
      id: 3,
      title: "Air Jordan",
      price: 5999,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 1999,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 3555,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".product-title");
  const currentProductPrice = document.querySelector(".product-price");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item,index) =>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * (index-1)}vw)` ;

        chosenProduct = products[index-1];

        currentProductImg.src = chosenProduct.colors[0].img ;
        currentProductTitle.innerHTML = chosenProduct.title;
        currentProductPrice.innerHTML = chosenProduct.price;

        currentProductColors.forEach((item,index)=>{
            item.style.backgroundColor = chosenProduct.colors[index].code;
        })

    })
})

currentProductColors.forEach((item,index)=>{
    item.addEventListener("click",()=>{
     currentProductImg.src = chosenProduct.colors[index].img ;
    })
})


currentProductSizes.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentProductSizes.forEach((item,index)=>{
            item.style.backgroundColor = "white";
            item.style.color= "black";
        });
        item.style.backgroundColor = "black";
        item.style.color = "white";
      
    })
})
