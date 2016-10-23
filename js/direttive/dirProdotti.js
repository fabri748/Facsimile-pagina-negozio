(function(){
	var app = angular.module('negozio-prodotti', []);
		
		// DIRETTIVE PER CONTENUTI DINAMICI PAGINA PRODOTTI
		
		//  etichette pannelli
		
	app.directive('etichettePannelli', function(){
		return{
			restrict: 'E',
			templateUrl: 'pgs/paginaPannelli.html',
			controller: function(){
				this.tab = 1;
					
				this.selezionato = function(controllaTab){
					return this.tab === controllaTab;	
				};
				this.selezioneTab = function(settaTab){
					this.tab = settaTab;
				};
			},
			controllerAs: 'pannello'
		};
	});
	
	
		//DIRETTIVE DEL  SINGOLO PRODOTTO
		// titolo e prezzo
		app.directive('prodTitolo', function(){
			return{
				restrict: 'E',
				templateUrl: 'pgs/paginaTit.html',
		};
	});
		// descrizione
		app.directive('prodDescrizione', function(){
			return{
				restrict: 'E',
				templateUrl: 'pgs/paginaDesc.html',
		};
	});
		// specifiche
		app.directive('prodSpecifiche', function(){	
			return{
				restrict: 'E',
				templateUrl: 'pgs/paginaSpec.html',
		};
	});
		// recensioni
		app.directive('prodRecensione', function(){
			return{
				restrict: 'E',
				templateUrl: 'pgs/paginaRece.html',
		};
	});
		// immagini
		app.directive('prodImmagini', function(){
			return{
				restrict: 'E',
				templateUrl: 'pgs/paginaImg.html',
				controller: function(){
				this.current = 0;
					
				this.setCurrent = function(imageNumber){
					this.current = imageNumber || 0;	
				};
				
			},
			controllerAs: 'gallery'
		};
	});
	
})();
	
	
	
	