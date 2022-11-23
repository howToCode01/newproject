const allProducts=[
{titleofProduct:'Burger Dreams',price:9.20,productType:'burgers',src:'/imagines/burger1.png'},
{titleofProduct:'Burger Waldo',price:10.00,productType:'burgers',src:'/imagines/burger2.png'},
{titleofProduct:'Burger Cali',price:8.00,productType:'burgers',src:'/imagines/burger3.png'},
{titleofProduct:'Burger Bacon Buddy',price:9.99,productType:'burgers',src:'/imagines/burger4.png'},
{titleofProduct:'Burger Spicy',price:9.20,productType:'burgers',src:'/imagines/burger5.png'},
{titleofProduct:'Burger Classic',price:8.00,productType:'burgers',src:'/imagines/burger6.png'},
{titleofProduct:'Batat fri',price:8.00,productType:'sides',src:'/imagines/batat.jpeg'},
{titleofProduct:'Koul Slow',price:8.00,productType:'sides',src:'/imagines/coulSlou.jpeg'},
{titleofProduct:'Halisko',price:10.00,productType:'sides',src:'/imagines/halisko.jpeg'},
{titleofProduct:'Hot chicks',price:9.99,productType:'sides',src:'/imagines/hotChicks.jpeg'},
{titleofProduct:'Onion rings',price:8.00,productType:'sides',src:'/imagines/onionRings.jpeg'},
{titleofProduct:'Pablo Escobar',price:11.10,productType:'sides',src:'/imagines/PabloEscobar.jpeg'},
{titleofProduct:'Happy Vitamin C',price:6.00,productType:'drinks',src:'/imagines/HappyC.jpeg'},
{titleofProduct:'Love me juice',price:8.50,productType:'drinks',src:'/imagines/LoveMeJuice.jpeg'},
{titleofProduct:'Purified water',price:8.00,productType:'drinks',src:'/imagines/PurifiedWater.jpeg'},
{titleofProduct:'Tomato juice',price:10.00,productType:'drinks',src:'/imagines/TomatoJuice.jpeg'},
{titleofProduct:'Kiborg power',price:7.50,productType:'drinks',src:'/imagines/KiborgPower.jpeg'},
{titleofProduct:'Rooibos Soda',price:10.00,productType:'drinks',src:'/imagines/RooibosSoda.jpeg'},
];
const basketProduct=[];
const sign_close_modal=document.querySelector('.sign_close-modal-block');
const basket=document.querySelector('.menu_icon');
const modal_basket=document.querySelector('.modal-basket');
const menu_icon_text=document.querySelector('.menu_icon_text');
const estimate=document.querySelector('.estimate');
const addYourPhone=document.querySelector('.addYourPhone');
const button_checkout=document.querySelector('.button-checkout');
const p_basketModal_empty=document.querySelector('.p-basketModal-empty');
const modalOrder=document.querySelector('.modal-order');
const estimated_all_price=document.querySelector('.estimated-all-price');

let arr=[];
function calculateEstimate(){
arr.splice(0,arr.length);
   for(let elem of basketProduct){
      let elemQuantity=Number(elem.quantity);
      elem.allPrice=(elemQuantity*elem.price);
     arr.push(elem.allPrice);
   
     let summArr=arr.reduce((elem,previous)=>previous+elem,0);
   
   let summArrNew=summArr.toFixed(2);
   estimated_all_price.innerText=summArrNew;
      }
   }
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu_links');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show');
       burger.classList.toggle('active');
       let menuIcon=document.querySelector('.menu_icon');
       menuIcon.classList.toggle('menuIcon')
    })};
    let modalBasketElements=document.querySelector('.modal-basket-elements');
    function createElemForCard(title,src,price,quantity){
      let modalBasketItemTemplates=document.querySelector('.modal-basket-item-templates');
     let modalBasketItem= modalBasketItemTemplates.querySelector('.modal-basket-item');
      let modalBasketItemClone=modalBasketItem.cloneNode(true);
      modalBasketItemClone.classList.add('modal-basket-item_forDelete');
      let browseMenuIconImg=modalBasketItemClone.querySelector('.browseMenu-icon-img');
      browseMenuIconImg.setAttribute('src',src);
      let browseMenuItemTitle=modalBasketItemClone.querySelector('.browseMenu-item_title');
      browseMenuItemTitle.innerText=title;
      let browserMenuItemPrice=modalBasketItemClone.querySelector('.browserMenu-item_price');
      browserMenuItemPrice.innerText=`$ ${price.toFixed(2)} USD`;
      let browserMenuItemInput=modalBasketItemClone.querySelector('.browserMenu-item_input');
      browserMenuItemInput.value=quantity;
    return modalBasketItemClone;}

    let count=0;
    let sign_close_modal_block=document.querySelector('.sign_close-modal-block');
    function addElementToCard(event){
      let target=event.target;
       let target_browseMenu=target.closest('.browseMenu-item');
       let target_browseMenu_title=target_browseMenu.querySelector('.browseMenu-item_title');
       let allProductsInBusketDelete=modal_basket.querySelectorAll('.modal-basket-item_forDelete');
     for(let elem of allProductsInBusketDelete){
      elem.remove()
     }; 

      let target_browseMenu_quantity=target_browseMenu.querySelector('.browserMenu-item_input').value;
      if(basketProduct.length===0){
         for(let item of allProducts){
            if(item.titleofProduct===target_browseMenu_title.innerText){
               item.quantity=target_browseMenu_quantity;
               basketProduct.push(item);
               count+=1;
            menu_icon_text.innerText=count;
        }}
         for(let i of basketProduct){
            let newElemforBasket=createElemForCard(i.titleofProduct,i.src,i.price,i.quantity);
            sign_close_modal_block.insertAdjacentElement('afterend',newElemforBasket);
         }
         estimate.classList.remove('estimate-close');
         addYourPhone.classList.remove('addYourPhone-close');
         button_checkout.classList.remove('addYourPhone-close');
         p_basketModal_empty.classList.add('p-basketModal-empty-close');
         button_checkout.classList.remove('button-checkout-close');
        
      }else{
      for(let elem of basketProduct){
         if(elem.titleofProduct===target_browseMenu_title.innerText){
          let targetElemIndex=basketProduct.findIndex((item=>item===elem));
          basketProduct.splice(targetElemIndex,1);
          console.log(targetElemIndex);
          count-=1;
          menu_icon_text.innerText=count;}}
     
      for(let item of allProducts){
         if(item.titleofProduct===target_browseMenu_title.innerText){
            item.quantity=target_browseMenu_quantity;
            basketProduct.push(item);
            count+=1;
         menu_icon_text.innerText=count;
         }
         
      }
      for(let i of basketProduct){
         let newElemforBasket=createElemForCard(i.titleofProduct,i.src,i.price,i.quantity);
         sign_close_modal_block.insertAdjacentElement('afterend',newElemforBasket);
      }
      estimate.classList.remove('estimate-close');
      addYourPhone.classList.remove('addYourPhone-close');
      button_checkout.classList.remove('addYourPhone-close');
      p_basketModal_empty.classList.add('p-basketModal-empty-close');
      button_checkout.classList.remove('button-checkout-close');
     
   }calculateEstimate()}
   
   function sendOrder(){
      modal_basket.classList.add('close-basket'); 
      setTimeout(function(){modalOrder.classList.remove('modal-order-close')},3000);
      setTimeout(function(){modalOrder.classList.add('modal-order-close')},6000);
      let allProductsInBusketDelete=modal_basket.querySelectorAll('.modal-basket-item_forDelete');
      for(let elem of allProductsInBusketDelete){
         elem.remove()
      }
    basketProduct.splice(0,basketProduct.length);
      estimate.classList.add('estimate-close');
      addYourPhone.classList.add('addYourPhone-close');
      button_checkout.classList.add('addYourPhone-close');
      p_basketModal_empty.classList.remove('p-basketModal-empty-close');
      button_checkout.classList.add('button-checkout-close');
      count=0;
      menu_icon_text.innerText=count;
     
      calculateEstimate();
   }
   
    let browseMenu_item_template=document.querySelector('.browseMenu-item_template');
    function createNewElem(title,price,srcofProduct){
      let templateElem=browseMenu_item_template.cloneNode(true);
      let newElem=templateElem.querySelector('.browseMenu-item');
      newElem.querySelector('.browseMenu-icon-img').setAttribute('src',srcofProduct);
      newElem.querySelector('.browseMenu-item_title').innerText=title
      newElem.querySelector('.browserMenu-item_price').innerText=`$ ${price.toFixed(2)} USD`;

      return newElem;
    }
    const browseMenu_burgers=document.querySelector('.browseMenu-burgers');
    const browseMenu_sides=document.querySelector('.browseMenu_sides');
    const browseMenu_drinks=document.querySelector('.browseMenu-drinks');
    for(let item of allProducts){
      if(item.productType==='burgers'){
      let newElement=createNewElem(item.titleofProduct,item.price,item.src);
        browseMenu_burgers.append(newElement);
      }
      if(item.productType==='sides'){
         let newElement=createNewElem(item.titleofProduct,item.price,item.src);
         browseMenu_sides.append(newElement); 
      }
      if(item.productType==='drinks'){
         let newElement=createNewElem(item.titleofProduct,item.price,item.src);
         browseMenu_drinks.append(newElement);
    }}
    const browseMenu_button_fullMenu=document.querySelector('.browseMenu-button-fullMenu');
    const browseMenu_buttonCloseMenu=document.querySelector('.browseMenu-button-CloseMenu');
function openFullMenu(){
   browseMenu_sides.classList.remove('browseMenu_disappear');
   browseMenu_drinks.classList.remove('browseMenu_disappear');
   let browseMenu_button_fullMenu=document.querySelector('.browseMenu-button-fullMenu');
   browseMenu_button_fullMenu.classList.add('browseMenu_disappear');
   browseMenu_buttonCloseMenu.classList.remove('browseMenu_disappear');
}
function closeFullMenu(){
   browseMenu_sides.classList.add('browseMenu_disappear');
   browseMenu_drinks.classList.add('browseMenu_disappear');
   browseMenu_buttonCloseMenu.classList.add('browseMenu_disappear');
   browseMenu_button_fullMenu.classList.remove('browseMenu_disappear');
}
function underlineButton(event){
   let target=event.target;
   let allButtons=document.querySelectorAll('.buttons');
   for(let i of allButtons){
      i.classList.remove('button-blue');
}
target.classList.add('button-blue')
}
function openBurgers(){
   browseMenu_burgers.classList.remove('browseMenu_disappear');
   browseMenu_drinks.classList.add('browseMenu_disappear');
   browseMenu_sides.classList.add('browseMenu_disappear');
   underlineButton(event);
}

   
function openSides(){
   browseMenu_burgers.classList.add('browseMenu_disappear');
   browseMenu_drinks.classList.add('browseMenu_disappear');
   browseMenu_sides.classList.remove('browseMenu_disappear');
   underlineButton(event);
}
function openDrinks(){
   browseMenu_burgers.classList.add('browseMenu_disappear');
   browseMenu_drinks.classList.remove('browseMenu_disappear');
   browseMenu_sides.classList.add('browseMenu_disappear');
   underlineButton(event);
}
function openBasket(){
   modal_basket.classList.remove('close-basket');
   
}
function closeBasket(){
   modal_basket.classList.add('close-basket');
}
function deleteElemInBasket(event){
   let target=event.target;
   let modalBasketItem_delete=target.closest('.modal-basket-item');
   let titleTarget=modalBasketItem_delete.querySelector('.browseMenu-item_title');
   modalBasketItem_delete.remove();
   for(let elem of basketProduct){
      if(elem.titleofProduct===titleTarget.innerText){
       let targetElemIndex=basketProduct.findIndex((item=>item===elem));
       basketProduct.splice(targetElemIndex,1);
       count-=1;
       menu_icon_text.innerText=count;}}
      
       calculateEstimate();
       
       if(basketProduct.length===0){
         estimate.classList.add('estimate-close');
         addYourPhone.classList.add('addYourPhone-close');
         button_checkout.classList.add('addYourPhone-close');
         p_basketModal_empty.classList.remove('p-basketModal-empty-close');
         button_checkout.classList.add('button-checkout-close');
      }
}
function changeQuantity(event){
   let target=event.target;
   let target_MenuItem=target.closest('.browseMenu-item');
   let target_title=target_MenuItem.querySelector('.browseMenu-item_title');
   for(let elem of basketProduct){
      if(target_title.innerText===elem.titleofProduct){
         elem.quantity=target.value;
      }
   }
   calculateEstimate();
   
}