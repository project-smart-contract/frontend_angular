# Développement Frontend avec Angular :

Notre équipe a récemment achevé le développement du frontend de notre application en utilisant le puissant framework Angular. Nous avons choisi Angular pour sa structure modulaire et sa capacité à créer des applications web dynamiques et réactives.

L'un des points forts de notre interface utilisateur est l'utilisation d'Angular Material, une bibliothèque de composants prêts à l'emploi qui offre une esthétique moderne et une convivialité optimale. Les composants d'Angular Material ont permis de créer une expérience utilisateur homogène tout en facilitant la gestion des éléments interactifs tels que les formulaires et les dialogues.

En parallèle, nous avons intégré Bootstrap, un framework CSS très populaire, pour tirer parti de ses utilitaires et de sa grille de mise en page. Cette combinaison d'Angular Material et de Bootstrap a permis de créer une interface visuellement attrayante et conviviale.

En plus de ces frameworks, nous avons également exploré d'autres outils pour styliser nos pages et améliorer l'expérience utilisateur. L'utilisation judicieuse de ces outils a permis de personnaliser davantage l'apparence de notre application, la rendant ainsi plus adaptée à nos besoins spécifiques.

# Intégration des Contrats Intelligents avec Hardhat et Metamask : Sécurité et Fiabilité

En parallèle au développement frontend avec Angular, notre application repose sur la robustesse des contrats intelligents. Nous avons intégré des contrats intelligents dans notre architecture, utilisant pour cela le framework Hardhat, une suite de développement Ethereum puissante et flexible.

Les contrats intelligents fournissent la base de la logique métier sécurisée et transparente de notre application décentralisée. Ils sont déployés sur la blockchain, garantissant une immutabilité et une sécurité accrues. La gestion des transactions, des paiements, et d'autres opérations clés s'effectue de manière efficace grâce à ces contrats intelligents.

Pour faciliter les interactions entre l'utilisateur et les contrats intelligents, nous avons intégré Metamask. Cette extension de navigateur permet aux utilisateurs de payer les contrats intelligents et d'envoyer des transactions sur la blockchain de manière sécurisée. Metamask offre une interface utilisateur conviviale pour gérer les transactions cryptographiques tout en garantissant la sécurité des clés privées.

Cette intégration harmonieuse de Hardhat et Metamask dans notre infrastructure permet à notre application de fonctionner de manière transparente sur la blockchain, offrant ainsi à nos utilisateurs une expérience fluide et sécurisée dans l'univers décentralisé. Ces outils combinés constituent la pierre angulaire de la fiabilité et de la sécurité de notre solution blockchain.

## Lancer les commandes suivantes  :
- ng serve
- npx hardhat node
- npx hardhat run scripts/deploy.js --network localhost

### npx hardhat node :
Cette commande fait partie de l'environnement de développement Ethereum Hardhat. Elle lance un nœud Ethereum local, vous permettant d'interagir avec une blockchain simulée à des fins de test et de développement.
### npx hardhat run scripts/deploy.js --network localhost :
Cette commande utilise Hardhat pour exécuter un script de déploiement (deploy.js) pour des contrats intelligents Ethereum. Le drapeau --network localhost spécifie que le déploiement doit être effectué sur le nœud Ethereum local.













# InsuranceApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
