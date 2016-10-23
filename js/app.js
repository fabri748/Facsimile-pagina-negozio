(function(){
	var app = angular.module('negozio', ['negozio-prodotti']);
	
	
	
	 app.controller('ControllerNegozio', ['$http', function($http){
		var contenutoJson = this;
		contenutoJson.prodotti = [];
		
		$http.get('/data/databaseProdotti.json').success(function(data){
			contenutoJson.prodotti= data;
			
		});
  }]);
	
	
	// controller per recensioni	
	app.controller('ControllerRecensioni', function(){
		this.recensione = {};
		//roba di fazio
 		/*this.getRecensione = function(r){
			var rec = {};
			rec.stelle = r?r.stelle:null;
			rec.testo = r?r.testo:null;
			rec.autore = r?r.autore:null;
			return rec;
		} */
		
		this.aggRec = function(prodotto){
			//pippo.recensioni.push(this.getRecensione(this.recensione)); ALTRA ROBA DI FAZIO
			prodotto.recensioni.push(this.recensione);
			this.recensione={};
		};		
	});

		
})();