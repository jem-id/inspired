# TypeScript College

Welkom bij het **TypeScript College** van jem-id!  
Deze repository bevat voorbeelden, oefeningen en demo’s verdeeld over drie blokken.


## **Blok 1: Basisprincipes van TypeScript**

*Waarom TypeScript? Wat lost het op?*

- Verschil tussen JavaScript en TypeScript  
- Primitive types (`string`, `number`, `boolean`, `unknown`, `never`)  
- Type inference en type checking  
- Objecten en interfaces  
- Enums en exhaustiveness checks
- Compiler en configuratie (`tsconfig.json`)

### Oefening:

Kijk naar je huidige project en pas de typings toe of verbeter ze op basis van wat je zojuist hebt geleerd. Als je al met TypeScript werkt, onderzoek dan waar je de types nog verder kunt verfijnen of explicieter kunt maken.

## **Blok 2: TypeScript in de diepte**

*Hoe maak je herbruikbare en robuuste types?*

- Type combinaties: union en intersection types
- Utility types (`Partial`, `Pick`, `Omit`)  
- Generics (eigen functies en helpers)  
- Structuur in meerdere bestanden
- Type narrowing (`typeof`, `instanceof`, type guards)

### Oefening:

Maak een generiek type en methode dat een API-respons representeert, waarbij we de status (loading, success, error), een eventuele foutmelding en de bijbehorende data kunnen vastleggen.


## **Blok 3: TypeScript in de praktijk (React + Vite)**

*Hoe gebruik je TypeScript in echte projecten?*

- Component props en events typen  
- `useState` en `useEffect` met generics  
- Eigen `useForm`-hook maken (zonder externe packages)  

### Oefening:

Maak een generieke React hook usePaginate<T> die:
- een array met items (T[]) ontvangt,
- en een vaste pageSize (aantal items per pagina),
- en de volgende functionaliteit biedt: 

```
const {
  pageItems,   // huidige pagina-items (T[])
  currentPage, // huidige paginanummer
  totalPages,  // totaal aantal pagina's
  nextPage,    // functie om naar volgende pagina te gaan
  prevPage,    // functie om naar vorige pagina te gaan
  setPage      // functie om direct naar pagina X te gaan
} = usePaginate<T>(items, pageSize);
```
