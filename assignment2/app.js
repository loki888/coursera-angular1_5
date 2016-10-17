(function(){
	//'use strict';
	
	angular.module('shoppingList', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	
	
	function ToBuyController (ShoppingListCheckOffService){
		var toBuyItem = this;
		
		toBuyItem.items = ShoppingListCheckOffService.getitemsToBuy();
		
		
		toBuyItem.toBuy = function (itemIndex) {
			ShoppingListCheckOffService.toBought(itemIndex);
		};
		
		
		
		
		toBuyItem.isEmpty = function(){
			return toBuyItem.items.length === 0;
		};
		
		
		
		
	};
	
	function AlreadyBoughtController (ShoppingListCheckOffService){
		var bought = this;

		bought.items = ShoppingListCheckOffService.getitemsBoughted();
		
		
		bought.isFull = function(){
			return bought.items.length === 0;
		};
	};
	
	
	
	
	
	function ShoppingListCheckOffService(){
		var service = this;
		var itemsToBuy = [
			{
				name: "tea",
				quantity: 1
			},
			{
				name: "coffe",
				quantity: 8
			},
			{
				name: "meat",
				quantity: 3
			},
			{
				name: "snak",
				quantity: 10
			},
			{
				name: "sugar",
				quantity: 11
			},
			{
				name: "sugar",
				quantity: 11
			},
			{
				name: "sugar",
				quantity: 11
			},
			{
				name: "sugar",
				quantity: 11
			},
			{
				name: "sugar",
				quantity: 11
			},
			{
				name: "sugar",
				quantity: 11
			},
		];
		var itemsBoughted = [];
		
		
	

		service.toBought = function (itemIdex) {
			var toBoughtItem = itemsToBuy.splice(itemIdex, 1);
			//console.log(toBoughtItem);
			//itemsBoughted.push(toBoughtItem);
			//console.log(itemsBoughted);
			
			
				var item = {
					name: toBoughtItem[0].name,
					quantity: toBoughtItem[0].quantity
				};
				itemsBoughted.push(item);
			console.log(itemsBoughted);
			
			
			
			
		};

		service.getitemsToBuy = function () {
			return itemsToBuy;
		};
		
		service.getitemsBoughted = function () {
			return itemsBoughted;
		};
		
		
		
	};
})();