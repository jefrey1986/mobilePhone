$(function(){
	
	var iPhone6S = new Telefon("Apple", 2250, "srebrny");
	var SamsungGalaxyS6 = new Telefon("Samsung", 1799, "biały");
	var OnePlusOne = new Telefon("OnePlus", 1299, "czarny");

	function Telefon(marka, cena, kolor) {
		var self = this;
		this.marka = marka;
		this.cena = cena;
		this.kolor = kolor;
		this.warrantyCost = getWarrantyCost();

			function getWarrantyCost() {
				var result = self.cena / 10;
				return result;
			}
	};
	
	Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Koszt przedłużonej gwarancji to " + this.warrantyCost + ".");
	};

	iPhone6S.printInfo();
	SamsungGalaxyS6.printInfo();
	OnePlusOne.printInfo();


	
});  
