
import "./style.css";
import type { Produit } from "./types";
import { catalogue } from "./catalogue";
import { formatPrix } from "./outils";

function creerCarte(produit: Produit): HTMLElement {
  const carte = document.createElement("article");
  carte.className = "carte";

  const titre = document.createElement("h3");
  titre.textContent = produit.nom;

  const prix = document.createElement("p");
  prix.className = "prix";
  prix.textContent = formatPrix(produit.prix);

  const bouton = document.createElement("button");
  bouton.type = "button";
  bouton.textContent = "Ajouter au panier";

  if (produit.stock === 0) {
    bouton.textContent = "Épuisé";
    bouton.disabled = true;
  }

  carte.append(titre, prix, bouton);

  return carte;
}

console.log("La boutique démarre");

function trouver<T extends HTMLElement>(selecteur: string): T {
  const element = document.querySelector<T>(selecteur);

  if (!element) {
    throw new Error(`Élément ${selecteur} introuvable : vérifiez index.html`);
  }

  return element;
}

const zoneCatalogue = trouver<HTMLDivElement>("#catalogue");
const listePanier = trouver<HTMLUListElement>("#lignes-panier");
const zoneTotal = trouver<HTMLElement>("#total");
const compteur = trouver<HTMLSpanElement>("#compteur");
const champRecherche = trouver<HTMLInputElement>("#recherche");
const filtreCategorie = trouver<HTMLSelectElement>("#filtre-categorie");

function afficherCatalogue(): void {
  zoneCatalogue.replaceChildren(...catalogue.map(creerCarte));
}

void listePanier;
void zoneTotal;
void compteur;
void champRecherche;
void filtreCategorie;

afficherCatalogue();
