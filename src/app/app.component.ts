import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pokedex V2.0';
  pokemonListTotal: any[] = [];
  pokemonListFiltered: any[] = [];
  pokemonSuggested: string[] = [];
  pokemonList: any[] = [];
  selectedPokemonDetails: any = {};
  visible: boolean = false;
  selectedPokemonImages: any = [];
  totalPokemon: number = 0;
  tablePosition: number = 0;
  pokemonName: any = "";
  orderType: string = "pokedex";


  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemonList();
    this.filterPokemon();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList().subscribe((data: any) => {
      this.pokemonListTotal = data.results;
      this.totalPokemon = data.count;
      this.pokemonListFiltered = structuredClone(this.pokemonListTotal);
      this.pokemonList = this.pokemonListFiltered.slice(this.tablePosition * 10, (this.tablePosition + 1)* 10);
    });
  }
  onPageChange(event: any) {
    this.pokemonList = this.pokemonListFiltered.slice(event.rows * event.page ,event.rows * (event.page +1));
    this.tablePosition = event.page;
  }

  filterPokemon() {
    let tempString: string = this.pokemonName;
    let tempArray: string[] = [];
    this.pokemonListFiltered = this.pokemonListTotal.filter(function(item) {
      if(item.name.includes(tempString.toLowerCase())){
        if(tempArray.length < 5)tempArray.push(item.name);
        return item;
      }
    });
    this.pokemonSuggested = tempArray;
    this.totalPokemon = this.pokemonListFiltered.length;
    this.pokemonList = this.pokemonListFiltered.slice(0, 10);

  }
  getPokemonDetails(url: string) {
    this.pokemonService.getPokemonDetails(url).subscribe((data: any) => {
      this.selectedPokemonDetails = data;
      this.visible = true;
    });
  }
  orderPokemon(event: any) {

    switch(this.orderType){
      case "pokedex":
        this.pokemonListFiltered = structuredClone(this.pokemonListTotal);
        this.filterPokemon();
        break;
      case "ascendentName":
        this.filterPokemon();
        this.pokemonListFiltered.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case "descendentName":
        this.filterPokemon();
        this.pokemonListFiltered.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        break;

    }

    this.pokemonList = this.pokemonListFiltered.slice(this.tablePosition * 10, (this.tablePosition + 1)* 10);
  }
  showDialog() {
    this.visible = true;

    const sprites = this.selectedPokemonDetails.sprites;
    this.selectedPokemonImages = [];
    if (sprites.front_default) {
      this.selectedPokemonImages.push(sprites.front_default);
    }
    if (sprites.front_female) {
      this.selectedPokemonImages.push(sprites.front_female);
    }
    if (sprites.front_shiny) {
      this.selectedPokemonImages.push(sprites.front_shiny);
    }
    if (sprites.front_shiny_female) {
      this.selectedPokemonImages.push(sprites.front_shiny_female);
    }
    if (sprites.back_default) {
      this.selectedPokemonImages.push(sprites.back_default);
    }
    if (sprites.back_female) {
      this.selectedPokemonImages.push(sprites.back_female);
    }
    if (sprites.back_shiny) {
      this.selectedPokemonImages.push(sprites.back_shiny);
    }
    if (sprites.back_shiny_female) {
      this.selectedPokemonImages.push(sprites.back_shiny_female);
    }

  }

  protected readonly screenLeft = screenLeft;
}

