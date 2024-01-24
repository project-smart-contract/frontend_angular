import { Pack } from '../models/Pack';
import { Produit } from '../models/Produit';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PackService {

  arrayProduit:Produit[] = [
    {
     "type":"particulier",
     "titre":"test",
     "description":"test",
     "packs":[
      {
        "titre": "Pack Standard",
        "description": "Un pack de base avec des avantages essentiels.",
        "image": "url_image_standard.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Assistance téléphonique" },
          { "label": "Couverture de base" }
        ],
        "options": [
          {
            "titre": "Option Essentielle",
            "descriptions": "Une option essentielle pour une couverture de base.",
            "isCheck": true,
            "montantGarantie": "9000",
            "isOblg": false,
            "franchise": 450,
            "prixOption": 55.99
          },
          {
            "titre": "Option Voyage",
            "descriptions": "Une option idéale pour une couverture pendant les voyages.",
            "isCheck": true,
            "montantGarantie": "15000",
            "isOblg": true,
            "franchise": 250,
            "prixOption": 65.00
          },{
            "titre": "Option Assurance Plus",
            "descriptions": "Une option complète pour une couverture étendue.",
            "isCheck": true,
            "montantGarantie": "7000",
            "isOblg": false,
            "franchise": 300,
            "prixOption": 40.50
          },{
            "titre": "Option Sécurité Totale",
            "descriptions": "Une option offrant une couverture maximale en toutes circonstances.",
            "isCheck": false,
            "montantGarantie": "12000",
            "isOblg": true,
            "franchise": 200,
            "prixOption": 75.25
          },{
            "titre": "Option Économique",
            "descriptions": "Une option économique pour une couverture de base.",
            "isCheck": true,
            "montantGarantie": "5000",
            "isOblg": true,
            "franchise": 150,
            "prixOption": 30.99
          },
          {
            "titre": "Option Prestige",
            "descriptions": "Une option de luxe avec des avantages exceptionnels.",
            "isCheck": false,
            "montantGarantie": "10000",
            "isOblg": false,
            "franchise": 250,
            "prixOption": 45.75
          },
          {
            "titre": "Option Voyage Plus",
            "descriptions": "Une option idéale pour une couverture pendant les voyages.",
            "isCheck": true,
            "montantGarantie": "8000",
            "isOblg": false,
            "franchise": 180,
            "prixOption": 55.99
          },
          {
            "titre": "Option Santé Premium",
            "descriptions": "Une option premium pour une couverture santé complète.",
            "isCheck": true,
            "montantGarantie": "9500",
            "isOblg": true,
            "franchise": 120,
            "prixOption": 68.50
          },
          {
            "titre": "Option Entreprise Pro",
            "descriptions": "Une option professionnelle avec des avantages dédiés aux entreprises.",
            "isCheck": false,
            "montantGarantie": "11000",
            "isOblg": true,
            "franchise": 200,
            "prixOption": 72.00
          },{
            "titre": "Option Famille Sérénité",
            "descriptions": "Une option idéale pour la protection de toute la famille.",
            "isCheck": true,
            "montantGarantie": "6000",
            "isOblg": false,
            "franchise": 300,
            "prixOption": 35.25
          },{
            "titre": "Option Jeunesse Dynamique",
            "descriptions": "Une option dynamique adaptée aux besoins des jeunes.",
            "isCheck": false,
            "montantGarantie": "8500",
            "isOblg": true,
            "franchise": 250,
            "prixOption": 60.00
          },
          {
            "titre": "Option Technologie Avancée",
            "descriptions": "Une option axée sur la technologie pour une protection avancée.",
            "isCheck": true,
            "montantGarantie": "7500",
            "isOblg": false,
            "franchise": 180,
            "prixOption": 42.99
          }
        ]
      },
      {
        "titre": "Pack Premium Plus",
        "description": "Un pack premium avec des avantages exclusifs et une couverture étendue.",
        "image": "url_image_premium_plus.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Assistance routière 24/7" },
          { "label": "Couverture étendue" },
          { "label": "Remplacement de véhicule" }
        ],
        "options": [
          {
            "titre": "Option Deluxe",
            "descriptions": "Une option de luxe avec une couverture exceptionnelle.",
            "isCheck": true,
            "montantGarantie": "25000",
            "isOblg": false,
            "franchise": 200,
            "prixOption": 90.25
          },
          {
            "titre": "Option Familiale",
            "descriptions": "Une option adaptée pour une couverture familiale complète.",
            "isCheck": true,
            "montantGarantie": "35000",
            "isOblg": false,
            "franchise": 180,
            "prixOption": 95.75
          }
        ]
      },
      {
        "titre": "Pack Voyageur",
        "description": "Un pack spécialement conçu pour les amateurs de voyages.",
        "image": "url_image_voyageur.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Assistance mondiale" },
          { "label": "Couverture voyage étendue" },
          { "label": "Remboursement des frais médicaux à l'étranger" }
        ],
        "options": [
          {
            "titre": "Option Voyage",
            "descriptions": "Une option idéale pour une couverture pendant les voyages.",
            "isCheck": true,
            "montantGarantie": "15000",
            "isOblg": false,
            "franchise": 250,
            "prixOption": 65.00
          },
          {
            "titre": "Option de Sécurité",
            "descriptions": "Une option offrant une couverture maximale pour la sécurité.",
            "isCheck": true,
            "montantGarantie": "40000",
            "isOblg": false,
            "franchise": 100,
            "prixOption": 120.50
          }
        ]
      },
      {
        "titre": "Pack Famille",
        "description": "Un pack idéal pour la protection de toute la famille.",
        "image": "url_image_famille.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Couverture familiale complète" },
          { "label": "Assistance téléphonique dédiée" }
        ],
        "options": [
          {
            "titre": "Option Familiale",
            "descriptions": "Une option adaptée pour une couverture familiale complète.",
            "isCheck": true,
            "montantGarantie": "35000",
            "isOblg": false,
            "franchise": 180,
            "prixOption": 95.75
          },
          {
            "titre": "Option Deluxe",
            "descriptions": "Une option de luxe avec une couverture exceptionnelle.",
            "isCheck": true,
            "montantGarantie": "25000",
            "isOblg": false,
            "franchise": 200,
            "prixOption": 90.25
          }
        ]
      },
      {
        "titre": "Pack Sécurité Totale",
        "description": "Un pack offrant une sécurité totale en toutes circonstances.",
        "image": "url_image_securite_totale.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Assistance 24/7" },
          { "label": "Couverture maximale" },
          { "label": "Remplacement de véhicule en cas de panne" }
        ],
        "options": [
          {
            "titre": "Option de Sécurité",
            "descriptions": "Une option offrant une couverture maximale pour la sécurité.",
            "isCheck": true,
            "montantGarantie": "40000",
            "isOblg": false,
            "franchise": 100,
            "prixOption": 120.50
          },
          {
            "titre": "Option Deluxe",
            "descriptions": "Une option de luxe avec une couverture exceptionnelle.",
            "isCheck": true,
            "montantGarantie": "25000",
            "isOblg": false,
            "franchise": 200,
            "prixOption": 90.25
          }
        ]
      },
      {
        "titre": "Pack Économique",
        "description": "Un pack économique avec des avantages de base.",
        "image": "url_image_economique.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Couverture de base" },
          { "label": "Assistance téléphonique" }
        ],
        "options": [
          {
            "titre": "Option de Base",
            "descriptions": "Une option économique pour une couverture de base.",
            "isCheck": true,
            "montantGarantie": "8000",
            "isOblg": false,
            "franchise": 600,
            "prixOption": 40.00
          },
          {
            "titre": "Option Essentielle",
            "descriptions": "Une option essentielle pour une couverture de base.",
            "isCheck": true,
            "montantGarantie": "9000",
            "isOblg": false,
            "franchise": 450,
            "prixOption": 55.99
          }
        ]
      },
      {
        "titre": "Pack Aventure",
        "description": "Un pack conçu pour les amateurs d'aventure.",
        "image": "url_image_aventure.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Assistance en montagne" },
          { "label": "Couverture étendue pour les activités de plein air" },
          { "label": "Remboursement des frais médicaux en cas d'accident" }
        ],
        "options": [
          {
            "titre": "Option Aventure",
            "descriptions": "Une option spécialement conçue pour les amateurs d'aventure.",
            "isCheck": true,
            "montantGarantie": "18000",
            "isOblg": false,
            "franchise": 300,
            "prixOption": 70.50
          },
          {
            "titre": "Option Voyage",
            "descriptions": "Une option idéale pour une couverture pendant les voyages.",
            "isCheck": true,
            "montantGarantie": "15000",
            "isOblg": false,
            "franchise": 250,
            "prixOption": 65.00
          }
        ]
      },
      {
        "titre": "Pack Étudiant",
        "description": "Un pack adapté aux besoins des étudiants.",
        "image": "url_image_etudiant.jpg",
        "slug":"_",
        "avantages": [
          { "label": "Couverture de base pour les étudiants" },
          { "label": "Assistance étudiante" }
        ],
        "options": [
          {
            "titre": "Option Étudiante",
            "descriptions": "Une option spécialement conçue pour les étudiants.",
            "isCheck": true,
            "montantGarantie": "12000",
            "isOblg": false,
            "franchise": 350,
            "prixOption": 45.75
          },
          {
            "titre": "Option de Base",
            "descriptions": "Une option économique pour une couverture de base.",
            "isCheck": true,
            "montantGarantie": "8000",
            "isOblg": false,
            "franchise": 600,
            "prixOption": 40.00
          }
        ]
      },
      
     ]
    },
          {
             "type":"entreprise",
             "titre":"Pack Entreprise - Votre Partenaire en Sécurité Complète",
             "description":"Protégez votre entreprise avec notre Pack Entreprise, une solution complète conçue pour répondre à tous vos besoins en matière d'assurance. Offrant une gamme d'avantages exclusifs et des options personnalisées, notre pack s'adapte à la taille et à la nature unique de votre entreprise",
             "packs" : [
              {
                "titre": "Pack Entreprise Standard",
                "description": "Un pack d'assurance standard pour répondre aux besoins de base des entreprises.",
                "image": "url_image_standard.jpg",
                "slug":"_",
                "avantages": [
                  { "label": "Assistance entreprise 24/7" },
                  { "label": "Couverture pour les dommages matériels" },
                  { "label": "Gestion des sinistres dédiée" }
                ],
                "options": [
                  {
                    "titre": "Option Entreprise de Base",
                    "descriptions": "Une option de base avec une couverture standard.",
                    "isCheck": true,
                    "montantGarantie": "50000",
                    "isOblg": false,
                    "franchise": 120,
                    "prixOption": 150.00
                  },
                  {
                    "titre": "Option Responsabilité Civile",
                    "descriptions": "Une option offrant une couverture pour la responsabilité civile.",
                    "isCheck": true,
                    "montantGarantie": "1000000",
                    "isOblg": false,
                    "franchise": 200,
                    "prixOption": 200.00
                  }
                ]
              },
              {
                "titre": "Pack Entreprise Premium",
                "description": "Un pack premium offrant une couverture étendue pour les entreprises.",
                "image": "url_image_premium.jpg",
                "slug":"_",
                "avantages": [
                  { "label": "Assistance dédiée aux grandes entreprises" },
                  { "label": "Couverture complète pour les biens et les employés" },
                  { "label": "Services de prévention des risques" }
                ],
                "options": [
                  {
                    "titre": "Option Tous Risques",
                    "descriptions": "Une option offrant une couverture tous risques pour les biens de l'entreprise.",
                    "isCheck": true,
                    "montantGarantie": "100000",
                    "isOblg": false,
                    "franchise": 150,
                    "prixOption": 250.00
                  },
                  {
                    "titre": "Option Santé et Prévoyance",
                    "descriptions": "Une option couvrant la santé et la prévoyance des employés.",
                    "isCheck": true,
                    "montantGarantie": "50000",
                    "isOblg": false,
                    "franchise": 100,
                    "prixOption": 180.00
                  }
                ]
              },{
                "titre": "Pack Entreprise Cybersécurité",
                "description": "Un pack spécialisé dans la protection contre les cybermenaces pour les entreprises.",
                "image": "url_image_cybersecurity.jpg",
                "slug":"_",
                "avantages": [
                  { "label": "Assistance en cas d'incident cybernétique" },
                  { "label": "Couverture des pertes financières liées à la cybercriminalité" },
                  { "label": "Audit de sécurité régulier" }
                ],
                "options": [
                  {
                    "titre": "Option Protection Cybernétique",
                    "descriptions": "Une option offrant une couverture contre les cybermenaces.",
                    "isCheck": true,
                    "montantGarantie": "500000",
                    "isOblg": false,
                    "franchise": 200,
                    "prixOption": 300.00
                  },
                  {
                    "titre": "Option Responsabilité Civile Cyber",
                    "descriptions": "Une option couvrant la responsabilité civile liée aux incidents cybernétiques.",
                    "isCheck": true,
                    "montantGarantie": "1000000",
                    "isOblg": false,
                    "franchise": 250,
                    "prixOption": 400.00
                  }
                ]
              },
              {
                "titre": "Pack Entreprise Santé",
                "description": "Un pack axé sur la santé des employés pour les entreprises soucieuses du bien-être de leurs équipes.",
                "image": "url_image_sante_entreprise.jpg",
                "slug":"_",
                "avantages": [
                  { "label": "Programme de bien-être en entreprise" },
                  { "label": "Couverture santé complète" },
                  { "label": "Assistance médicale téléphonique 24/7" }
                ],
                "options": [
                  {
                    "titre": "Option Santé Globale",
                    "descriptions": "Une option offrant une couverture santé complète pour les employés.",
                    "isCheck": true,
                    "montantGarantie": "50000",
                    "isOblg": false,
                    "franchise": 100,
                    "prixOption": 180.00
                  },
                  {
                    "titre": "Option Prévention Santé",
                    "descriptions": "Une option axée sur la prévention et le bien-être des employés.",
                    "isCheck": true,
                    "montantGarantie": "20000",
                    "isOblg": false,
                    "franchise": 50,
                    "prixOption": 120.00
                  }
                ]
              }
             ]
          }
  ]


  constructor() { }


  getPacks(type:string):Produit[]{
    this.arrayProduit.forEach(product => {
      product.packs.forEach(pack => {
        pack.slug = this.generateSlug(pack.titre);
      });
    });
      return this.filtrePacksByType(type);
   
  }

  filtrePacksByType(type:string):Produit[]{
    return this.arrayProduit.filter(
                             produit =>produit.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()));
  }

    generateSlug(str:string) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
    } 

  // Fonction de filtrage des packs par slug
  filterPacksBySlug(slug: string): Pack[] {
    const filteredPacks: Pack[] = [];

    // Parcours de chaque produit
    for (const produit of this.arrayProduit) {
      // Parcours de chaque pack dans le produit
      for (const pack of produit.packs) {
        // Vérification du slug du pack
        if (pack.slug === slug) {
          filteredPacks.push(pack);
        }
      }
    }

    return filteredPacks;
  }

}