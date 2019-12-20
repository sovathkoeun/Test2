/*

	*Function scrollFix()
  * Scroll menu will fix on the top 
  * Javascript by Sitha Khorn

  */
  window.onscroll = function () {scrollFix()};

  var fixHeader = document.getElementById('nav-bar');
  var isSticky = fixHeader.offsetTop;

  function scrollFix()
  {
  	if (window.pageYOffset > isSticky){
  		fixHeader.classList.add("fix");
  	}
  	else{
  		fixHeader.classList.remove("fix");
  	}
  }
// ==============================================================================
 

		var items =[];
		function getPrice1()
		{ 
			var getNm = document.getElementById("getName1").value;//Get name of the product.
			var getQt = document.getElementById("getQty1").value; //Get the quantity of prodcut.
			var getValue = document.getElementById("price1").value;//Get price of product.
			var totalPrice = getValue*getQt; //Find the total of the old price.
			items.push(totalPrice); //Put the old price in array.
			var finalPrice =0; 
			for (i=0; i<items.length;i++){ //Sum the item in array of the price.
				finalPrice += items[i];
			}
			
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")"; //display the name and quantiy.
		 			cell2.innerHTML =getValue; //display unit  price.
		 			cell3.innerHTML= totalPrice; //display the total price of one product.
			document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("discount").innerHTML= "Discount(%):  0%"; //display discont
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ finalPrice; //total price in dollar.
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(finalPrice*4000); //total price in riel.
		}




		var items =[];
		var itemsQty=[];
		function getPrice2()
		{ 
			var getNm = document.getElementById("getName2").value;
			var getQt = document.getElementById("getQty2").value;
			var getValue = document.getElementById("price2").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);

			if ((sumQty>=5) && (sumQty<=15)){ // if qty more than 5 to 15 will discount 5%.
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){ //if qty more start from 15 to 30 will discount8%;

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) { //if less than 5 it will not discount anymore.
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else { //if more than 30 it will discount 12%.
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);

		 	//console.log(totalPrice);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
		}



		var items =[];
		var itemsQty=[];
		function getPrice3()
		{ 
			var getNm = document.getElementById("getName3").value;
			var getQt = document.getElementById("getQty3").value;
			var getValue = document.getElementById("price3").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);
			if ((sumQty>=5) && (sumQty<=15)){
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) {
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else {
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
		}



		var items =[];
		var itemsQty=[];
		function getPrice4()
		{ 
			var getNm = document.getElementById("getName4").value;
			var getQt = document.getElementById("getQty4").value;
			var getValue = document.getElementById("price4").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);
			if ((sumQty>=5) && (sumQty<=15)){
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) {
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else {
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);

		 	//console.log(totalPrice);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
		}

 		/*part5*/


 		var items =[];
		var itemsQty=[];
		function getPrice5()
		{ 
			var getNm = document.getElementById("getName5").value;
			var getQt = document.getElementById("getQty5").value;
			var getValue = document.getElementById("price5").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);

			if ((sumQty>=5) && (sumQty<=15)){
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) {
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else {
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);

		 	//console.log(totalPrice);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
			}


		var items =[];
		var itemsQty=[];
		function getPrice6()
			{ 
			var getNm = document.getElementById("getName6").value;
			var getQt = document.getElementById("getQty6").value;
			var getValue = document.getElementById("price6").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);

			if ((sumQty>=5) && (sumQty<=15)){
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) {
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else {
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);

		 	//console.log(totalPrice);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
		}


		var items =[];
		var itemsQty=[];
		function getPrice7()
		{ 
			var getNm = document.getElementById("getName7").value;
			var getQt = document.getElementById("getQty7").value;
			var getValue = document.getElementById("price7").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);

			if ((sumQty>=5) && (sumQty<=15)){
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) {
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else {
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);

		 	//console.log(totalPrice);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
		}


		var items =[];
		var itemsQty=[];
		function getPrice8()
		{ 
			var getNm = document.getElementById("getName8").value;
			var getQt = document.getElementById("getQty8").value;
			var getValue = document.getElementById("price8").value;
		 	var totalPrice = getValue*getQt;//the total price of the user, not yet discount
		 		items.push(totalPrice);
		 	var finalPrice =0; 
			for (i=0; i<items.length;i++){
				finalPrice += items[i];
			}

			itemsQty.push(getQt);
			var sumQty =0;
			for (i=0; i<itemsQty.length;i++){
				sumQty+= parseInt(itemsQty[i]);

			}
			console.log(sumQty);

			if ((sumQty>=5) && (sumQty<=15)){
				var newPrice1 = finalPrice * 0.05;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 5%";
			}
			else if ((sumQty>15) && (sumQty<=30)){

				var newPrice1 = finalPrice * 0.08;
				var newPrice2 = finalPrice - newPrice1;
				document.getElementById("discount").innerHTML= "Discount(%): 8%";
			}else 
			{
				if (sumQty<5) {
					var newPrice1= finalPrice;
					var newPrice2= finalPrice;
					document.getElementById("discount").innerHTML= "Discount(%): 0%";
				}
				else {
					var newPrice1 = finalPrice * 0.12;
					var newPrice2 = finalPrice - newPrice1;
					document.getElementById("discount").innerHTML= "Discount(%): 12%";
				}

			}

		 	document.getElementById("total").innerHTML="Sub Total($):"+ finalPrice;
			document.getElementById("total-dollar").innerHTML= "Total payment($): "+ newPrice2;
			document.getElementById("total-riel").innerHTML= "Total payment(riel): "+(newPrice2*4000);

		 	//console.log(totalPrice);
			var table = document.getElementById("myTable");
		 			var row = table.insertRow(3);
		 			var cell1 = row.insertCell(0);
		 			var cell2 = row.insertCell();
		 			var cell3= row.insertCell();
		 			cell1.innerHTML =getNm +"("+"x "+ getQt+ ")";
		 			cell2.innerHTML =getValue;
		 			cell3.innerHTML= totalPrice;
		}