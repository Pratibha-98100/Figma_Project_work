var data;
 

// -----fetching the data from the API
fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
.then(response=>response.json())
.then(dataFetch=>{
    data = dataFetch;


        //------------------- Getting men data from the array : in men ------------------------- 
            const men=data.categories[0].category_products;
            const cardsContainer1 = document.getElementById('tab1');
            // console.log(men);  

            
            //--- Ittrating over the each data array : in men---
            men.forEach(product => {
                console.log(product);
                const mencard1 = document.createElement('div');
                mencard1.classList.add('mencard1');                                                                                                                                   // created card


                const imageAndBadge = document.createElement('div');
                imageAndBadge.classList.add('imageAndBadge'); 
                const productImage = document.createElement('img');
                productImage.src = product.image;                                                                                                                             // getting image URL
                productImage.alt = product.title;
                imageAndBadge.appendChild(productImage);
                mencard1.appendChild(imageAndBadge);
                cardsContainer1.appendChild(mencard1); 


                // badge_text
                const menBadge_text = document.createElement('span');
                menBadge_text.classList.add('menBadge_text'); 
                menBadge_text.textContent = product.badge_text;
                mencard1.appendChild(menBadge_text);
                cardsContainer1.appendChild(mencard1);



                const menCard2 = document.createElement('div');
                menCard2.classList.add('menCard2'); 
                const productName = document.createElement('h3');
                productName.textContent = product.title;
                menCard2.appendChild(productName);
                mencard1.appendChild(menCard2);
                cardsContainer1.appendChild(mencard1); 


                const productVendor = document.createElement('li');
                productVendor.classList.add('menBrand'); 
                productVendor.textContent = product.vendor;
                // mencard1.appendChild(productVendor);
                menCard2.appendChild(productVendor);
                mencard1.appendChild(menCard2);
                cardsContainer1.appendChild(mencard1);


                const menCard3 = document.createElement('div');
                menCard3.classList.add('menCard3');                                   
                const productPrice = document.createElement('span');
                productPrice.textContent = `Rs${product.price}`;
                menCard3.appendChild(productPrice);
                mencard1.appendChild(menCard3);
                cardsContainer1.appendChild(mencard1);
                console.log(productPrice)


                const compare_at_price = document.createElement('span');
                compare_at_price.textContent = `Rs${product.compare_at_price}`;
                compare_at_price.classList.add('compare_at_price'); 
                menCard3.appendChild(compare_at_price);
                mencard1.appendChild(menCard3);
                cardsContainer1.appendChild(mencard1);



                const comparePrice = Number.parseInt(product.compare_at_price); 
                const price = Number.parseInt(product.price); 
                const dis = Number.parseInt(comparePrice - price)
                // console.log(product.compare_at_price)

                const discountPercentage = Math.round(((comparePrice - price) / comparePrice )* 100) ;
                console.log(discountPercentage); 

                const discountSpan = document.createElement('span');
                discountSpan.classList.add('discountSpan'); 
                discountSpan.textContent =  discountPercentage + "%Off"; 

                menCard3.appendChild(discountSpan);
                mencard1.appendChild(menCard3);
                cardsContainer1.appendChild(mencard1);




                const addToCartBtn = document.createElement('button');
                addToCartBtn.classList.add('addToCartBtn');      
                addToCartBtn.textContent = 'Add to Cart';
                mencard1.appendChild(addToCartBtn);


            })





        //------------------- Getting women data from the array : in women ------------------------- 
            const women=data.categories[1].category_products;
            const cardsContainer2 = document.getElementById('tab2') 

            
            //--- Ittrating over the each data array : in women---
            women.forEach(product => {
                console.log(product);
                const womenCard1 = document.createElement('div');
                womenCard1.classList.add('womenCard1');                                                                                                                                   // created card


                const imageAndBadge = document.createElement('div');
                imageAndBadge.classList.add('imageAndBadge'); 
                const productImage = document.createElement('img');
                productImage.src = product.image;                                                                                                                             // getting image URL
                productImage.alt = product.title;
                imageAndBadge.appendChild(productImage);
                womenCard1.appendChild(imageAndBadge);
                cardsContainer2.appendChild(womenCard1); 


                // badge_text
                const womenBadge_text = document.createElement('span');
                womenBadge_text.classList.add('womenBadge_text'); 
                womenBadge_text.textContent = product.badge_text;
                womenCard1.appendChild(womenBadge_text);
                cardsContainer2.appendChild(womenCard1);



                const womenCard2 = document.createElement('div');
                womenCard2.classList.add('womenCard2'); 
                const productName = document.createElement('h3');
                let name = product.title;

                if(product.title.length>11){
                    console.log("length"+product.title.length)
                    name= name.slice(0, 10) + "..";
                    productName.textContent = name;
                    console.log("length"+ name)
                }
                else{
                    productName.textContent = name;
                }

                womenCard2.appendChild(productName);
                womenCard1.appendChild(womenCard2);
                cardsContainer2.appendChild(womenCard1); 


                const productVendor = document.createElement('li');
                productVendor.textContent = product.vendor;
                productVendor.classList.add('womenBrand'); 
                // womenCard1.appendChild(productVendor);
                womenCard2.appendChild(productVendor);
                womenCard1.appendChild(womenCard2);
                cardsContainer2.appendChild(womenCard1);


                const womenCard3 = document.createElement('div');
                womenCard3.classList.add('womenCard3');                                   
                const productPrice = document.createElement('span');
                productPrice.textContent = `Rs${product.price}`;
                womenCard3.appendChild(productPrice);
                womenCard1.appendChild(womenCard3);
                cardsContainer2.appendChild(womenCard1);
                console.log(productPrice)


                const compare_at_price = document.createElement('span');
                compare_at_price.textContent = `Rs${product.compare_at_price}`;
                compare_at_price.classList.add('compare_at_price'); 
                womenCard3.appendChild(compare_at_price);
                womenCard1.appendChild(womenCard3);
                cardsContainer2.appendChild(womenCard1);



                const comparePrice = Number.parseInt(product.compare_at_price);
                const price = Number.parseInt(product.price); 
                const dis = Number.parseInt(comparePrice - price)
                // console.log(product.compare_at_price)

                const discountPercentage = Math.round(((comparePrice - price) / comparePrice )* 100) ; 
                console.log(discountPercentage); 

                const discountSpan = document.createElement('span');
                discountSpan.classList.add('discountSpan'); 
                discountSpan.textContent =  discountPercentage + "%Off"; 

                womenCard3.appendChild(discountSpan);
                womenCard1.appendChild(womenCard3);
                cardsContainer2.appendChild(womenCard1);




                const addToCartBtn = document.createElement('button');
                addToCartBtn.classList.add('addToCartBtn');      
                addToCartBtn.textContent = 'Add to Cart';
                womenCard1.appendChild(addToCartBtn);


            })




    //-------------------------------------------------------- Getting kid data from the array : in kid ---------------------------------------------- 
            const kid=data.categories[2].category_products;
            const cardsContainer3 = document.getElementById('tab3');
            console.log(kid);  


            //--- Ittrating over the each data array : in kid---
            kid.forEach(product => {
                console.log(product);
                const  kidCard1 = document.createElement('div');
                kidCard1.classList.add('kidCard1');                                                                                                                                   // created card


                const imageAndBadge = document.createElement('div');
                imageAndBadge.classList.add('imageAndBadge'); 
                const productImage = document.createElement('img');
                productImage.src = product.image;                                                                                                                             // getting image URL
                productImage.alt = product.title;
                imageAndBadge.appendChild(productImage);
                kidCard1.appendChild(imageAndBadge);
                cardsContainer3.appendChild(kidCard1); 


                // badge_text
                const kidBadge_text = document.createElement('span');
                kidBadge_text.classList.add('kidBadge_text'); 
                kidBadge_text.textContent = product.badge_text;
                kidCard1.appendChild(kidBadge_text);
                cardsContainer3.appendChild(kidCard1);



                const kidCard2 = document.createElement('div');
                kidCard2.classList.add('kidCard2'); 
                const productName = document.createElement('h3');
                productName.textContent = product.title;
                kidCard2.appendChild(productName);
                kidCard1.appendChild(kidCard2);
                cardsContainer3.appendChild(kidCard1); 


                const productVendor = document.createElement('li');
                productVendor.classList.add('kidBrand'); 
                productVendor.textContent = product.vendor;
                kidCard2.appendChild(productVendor);
                kidCard1.appendChild(kidCard2);
                cardsContainer3.appendChild(kidCard1);


                let kidname = product.title;

                if(product.title.length>12){
                    console.log("length"+product.title.length)
                    kidname= kidname.slice(0, 10) + "..";
                    productName.textContent = kidname;
                    console.log("length"+ kidname)
                }
                else{
                    productName.textContent = kidname;
                }






                const kidCard3 = document.createElement('div');
                kidCard3.classList.add('kidCard3');                                   
                const productPrice = document.createElement('span');
                productPrice.textContent = `Rs${product.price}`;
                kidCard3.appendChild(productPrice);
                kidCard1.appendChild(kidCard3);
                cardsContainer3.appendChild(kidCard1);
                console.log(productPrice)


                const compare_at_price = document.createElement('span');
                compare_at_price.textContent = `Rs${product.compare_at_price}`;
                compare_at_price.classList.add('compare_at_price'); 
                kidCard3.appendChild(compare_at_price);
                kidCard1.appendChild(kidCard3);
                cardsContainer3.appendChild(kidCard1);



                const comparePrice = Number.parseInt(product.compare_at_price); // Convert string to float
                const price = Number.parseInt(product.price); // Convert string to float
                const dis = Number.parseInt(comparePrice - price)
                // console.log(product.compare_at_price)

                const discountPercentage = Math.round(((comparePrice - price) / comparePrice )* 100) ;

                console.log(discountPercentage); 


                const discountSpan = document.createElement('span');
                discountSpan.classList.add('discountSpan'); 
                discountSpan.textContent =  discountPercentage + "%Off";

                kidCard3.appendChild(discountSpan);
                kidCard1.appendChild(kidCard3);
                cardsContainer3.appendChild(kidCard1);



                const addToCartBtn = document.createElement('button');
                addToCartBtn.classList.add('addToCartBtn');      
                addToCartBtn.textContent = 'Add to Cart';
                kidCard1.appendChild(addToCartBtn);


            })


})  


  function openTab(tabName) {
      // for hide all tab content
      var tabcontent = document.getElementsByClassName('tabcontent');
      for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'; 
      }
    
      // removing the 'active' class from all tab links
      var tablinks = document.getElementsByClassName('tablink');
      for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
      }
    
      // showing the selected tab content
      document.getElementById(tabName).style.display = 'block';
    
      // adding the 'active' class to the button that opened the tab
      event.currentTarget.classList.add('active');



    // -----------------condition of toggle----------------------------  

      var menButton = document.getElementById('men');
      var womenButton = document.getElementById('women');
      var kidButton = document.getElementById('kid');

      if (tabName === 'tab1') {
          menButton.innerText ='Men 👨🏻';
          womenButton.innerText = 'Women ';
          kidButton.innerText = 'Kids ';
          menButton.style.backgroundColor="black";
          menButton.style.color="white";
          kidButton.style.backgroundColor="white";
          kidButton.style.color="black";
          womenButton.style.backgroundColor="white";
          womenButton.style.color="black";
          womenButton.innerText = 'Women ';

      } 
      else if (tabName === 'tab2') {
          womenButton.innerText = 'Women 👩🏻';
          menButton.innerText ='Men ';
          kidButton.innerText = 'Kids ';
          womenButton.style.backgroundColor="black";
          womenButton.style.color="white";
          menButton.style.backgroundColor="white";
          menButton.style.color="black";
          kidButton.style.backgroundColor="white";
          kidButton.style.color="black";
      }
      else if (tabName === 'tab3') {
        kidButton.innerText = 'Kids 👶🏻';
        womenButton.innerText = 'Women';
        menButton.innerText ='Men ';
        kidButton.style.backgroundColor="black";
        kidButton.style.color="white";
        menButton.style.backgroundColor="white";
        menButton.style.color="black";
        womenButton.style.backgroundColor="white";
        womenButton.style.color="black";
    }
  }