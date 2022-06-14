import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

home = {
	"type_de_repas" : "Déjeuner",
	"cuisine": "Africaine",
	"Distance": 5,
	"populaire": true,
	"Prixsurcommande": "Hautenbas",
	"prix": {
	"Prixinférieur": "5",
	"prixplusélevé": "10",
	}

}
  constructor() {}
ngOnInit() {
	
}
typederepasChange (ev) {
	console.log(ev.detail.value);
	const type = ev.detail.value;
	this.home.type_de_repas = type;
}
cuisinetypeChange (ev) {
	console.log(ev.detail.value);
	const type = ev.detail.value;
	this.home.cuisine = type;
}

distanceChange (ev) {
	console.log(ev.detail.value);
	const type = ev.detail.value;
	this.home.Distance = type;
}

populaireChange  (ev) {
	console.log(ev.detail.value);
	const type = ev.detail.value;
	this.home.populaire = type;
}

 PrixsurcommandeChange(ev) {
	console.log(ev.detail.value);
	const type = ev.detail.value;
	this.home.prix = type;
}

 prixChange (ev) {
	console.log(ev.detail.value);
	const type = ev.detail.value;
	this.home.prix.Prixinférieur = type.Prixinférieur;
	this.home.prix.prixplusélevé = type.prixplusélevé;
	console.log(this.home.prix);
}
}
