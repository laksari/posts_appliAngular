import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   posts = [ {titre : 'Mon premier poste',
             contenu : 'Poste de developpeur en java pour le ministere de l enseinement supereur ',
     loveIts : 1},
            {titre : 'Mon deuxieme poste',
             contenu : 'Poste gestion de projet pour SNCF ',
              loveIts : -1},
           {titre : 'Encore un poste',
            contenu : 'Poste ingeneiur etude et developpement en java ',
             loveIts : 0}
   ];
}
