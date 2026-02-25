export const labbar = [
    [
        {
            id: "labb1a",
            title: "Moduler",
            desc: "Den första labben i kursen, med lite tester med moduler, export och import.",
            week: 1,
            complete: true,
            link: "1a/index.html",
            category: ["module", "export/import"]
        },
        {
            id: "labb1b",
            title: "Git Basics",
            desc: "Git är ett versionshanteringssystem som låter dig spåra ändringar i din kod över tid.",
            week: 1,
            complete: true,
            link: "index.html",
            category: ["Git", "repository", "staging", "commit", "gitignore"]
        }, {
            id: "labb1c",
            title: "Ändringar och branching i Git",
            desc: "En av de största fördelarna med Git är möjligheten att “resa i tiden” - återställa filer, ångra ändringar, och experimentera utan rädsla.",
            week: 1,
            complete: true,
            link: "index.html",
            category: ["Git", "discardChanges", "branch", "restoreContent"]
        }, {
            id: "labb1b",
            title: "GitHub setup",
            desc: "Nu är det dags att koppla ditt repository till GitHub - en molnbaserad plattform för att lagra och dela kod.",
            week: 1,
            complete: true,
            link: "index.html",
            category: ["Git", "GitHub", "push", "pages"]
        }, {
            id: "labb1e",
            title: "Landningssida till labbarna",
            desc: "Detta blir din 'portfolio' för kursen - en plats där du enkelt kan navigera till alla dina laborationer.",
            week: 1,
            complete: true,
            link: "index.html",
            category: ["commit", "readme"]
        }
    ],
    [
        {
            id: "labb2a",
            title: "JS-objekt",
            desc: "Objekt är en av de viktigaste datastrukturerna i JavaScript. De låter oss gruppera relaterad data och funktionalitet tillsammans, vilket gör koden mer organiserad och lättare att förstå.",
            week: 2,
            complete: true,
            link: "2a/index.html",
            category: ["object", "DOM", "key", "iterate"]
        }, {
            id: "labb2b",
            title: "Metoder och this",
            desc: "Metoder är funktioner som tillhör ett objekt. De kan använda nyckelordet this för att komma åt objektets egna egenskaper.",
            week: 2,
            complete: true,
            link: "2b/index.html",
            category: ["method", "this", "object"]
        }, {
            id: "labb2c",
            title: "localStorage",
            desc: "localStorage ger oss ett enkelt sätt att spara data i webbläsaren som överlever både sidladdningar och att webbläsaren stängs.",
            week: 2,
            complete: true,
            link: "2c/index.html",
            category: ["localStorage"]
        }, {
            id: "labb2d",
            title: "JSON",
            desc: "JSON - ett textformat som låter oss representera komplex data som strängar.",
            week: 2,
            complete: true,
            link: "2d/index.html",
            category: ["JSON", "localStorage", "object", "parse/stringify"]
        }, {
            id: "labb2e",
            title: "Ternary-operatorn",
            desc: "Ternary-operatorn (villkorsoperatorn) ger dig ett kortare sätt att skriva enkla if/else-satser.",
            week: 2,
            complete: true,
            link: "2e/index.html",
            category: ["if/else", "ternary"]
        }
    ],
    [
        {
            id: "labb3a",
            title: "Arrow-funktioner",
            desc: "Arrow-funktioner (även kallade pilfunktioner) är ett kortare sätt att skriva funktioner i JavaScript.",
            week: 3,
            complete: true,
            link: "3a/index.html",
            category: ["arrow"]
        }, {
            id: "labb3b",
            title: "Fetch",
            desc: "Hittills har all data vi arbetat med varit hårdkodad i JavaScript-filer. I verkligheten kommer data ofta från externa källor - filer, databaser eller API:er. fetch är webbläsarens inbyggda sätt att hämta data asynkront.",
            week: 3,
            complete: true,
            link: "3b/index.html",
            category: ["fetch", "async", "promise", "response", "JSON", "await"]
        }, {
            id: "labb3c",
            title: "Strukturera data",
            desc: "En väldesignad datastruktur gör koden enklare att skriva och underhålla.",
            week: 3,
            complete: true,
            link: "3c/index.html",
            category: ["structure", "JSON", "object"]
        }, {
            id: "labb3d",
            title: "Skapa element dynamiskt",
            desc: "Här skapar vi riktiga DOM-element med document.createElement() och lägger till dem med exempelvis append().",
            week: 3,
            complete: true,
            link: "3d/index.html",
            category: ["DOM", "createElement", "object", "dynamic"]
        }, {
            id: "labb3e",
            title: "Dynamsik landningssida",
            desc: "Nu är det dags att göra din landningssida för labbarna lite smartare. Nu när du behärskar både objekt och arrayer ska vi bygga om sidan så att den genereras utifrån data istället.",
            week: 3,
            complete: false,
            link: "index.html",
            category: ["dynamic", "object"]
        }
    ],
    [
        {
            id: "labb4a",
            title: "Klasser och konstruktorer",
            desc: "Klasser löser detta genom att fungera som en mall (engelska: template) som beskriver hur objekt ska se ut.",
            week: 4,
            complete: true,
            link: "4a/index.html",
            category: ["class", "object", "constructor", "array"]
        }, {
            id: "labb4b",
            title: "Metoder i klasser",
            desc: "Genom att inkludera metoder i våra klasser slipper vi ha fristående funktioner utspridda i koden — istället bär objekten med sig sitt eget beteende och vet själva hur de ska hantera sin information.",
            week: 4,
            complete: true,
            link: "4b/index.html",
            category: ["method", "class", "this"]
        }, {
            id: "labb4c",
            title: "Inkapsling",
            desc: "Inkapsling handlar om att skydda ett objekts interna data och kontrollera hur den kan ändras.",
            week: 4,
            complete: true,
            link: "4c/index.html",
            category: ["class", "private", "get", "set"]
        }, {
            id: "labb4d",
            title: "Array.find",
            desc: "Array.find() gör detta enklare genom att returnera det första elementet som matchar ett villkor.",
            week: 4,
            complete: true,
            link: "4d/index.html",
            category: ["array", "find", "object", "class"]
        }
    ],
    [
        {
            id: "labb5a",
            title: "Array.filter",
            desc: "den skapar en ny array som bara innehåller de element som matchar villkoret.",
            week: 5,
            complete: true,
            link: "5a/index.html",
            category: ["array", "find", "filter", "object"]
        },
        {
            id: "labb5b",
            title: "Hantering av saknade värden, null och undefined",
            desc: "Ibland saknas information. Tänk dig att du hämtar data om en användare och inte alla har angett sin e-postadress, eller att ett API-svar saknar ett visst fält. I dessa situationer ger JavaScript oss värdena null och undefined — två speciella värden som betyder “inget värde finns här”. I den här labben lär vi oss hantera sådana saknade värden på ett säkert och elegant sätt.",
            week: 5,
            complete: true,
            link: "5b/index.html",
            category: ["null", "undefined", "nullish coalescing", "optional chaining"]
        },
        {
            id: "labb5c",
            title: "Array.map",
            desc: "Ofta behöver vi omvandla varje element till något nytt. Kanske vill vi beräkna priset inklusive moms för varje produkt, extrahera bara namnen ur en lista av objekt eller skapa ett html-element att lägga till i DOM:en för varje objekt. Array.map() skapar en ny array där varje element har omvandlats enligt en funktion vi anger.",
            week: 5,
            complete: true,
            link: "5c/index.html",
            category: ["array", "map", "object", "filter"]
        },
        {
            id: "labb5d",
            title: "Återställa commits med Git",
            desc: "I lab 1b lärde vi oss grunderna i Git — att stagea filer och skapa commits. I lab 1c lärde vi oss att ångra ostageade ändringar och att arbeta med branches. Men vad gör man om man redan har committat något man vill ångra? Kanske skapade du en commit med en bugg, eller så vill du gå tillbaka till ett tidigare tillstånd i projektet. I denna laboration utforskar vi två kraftfulla verktyg för att hantera commit-historiken: git revert och git reset.",
            week: 5,
            complete: false,
            link: "index.html",
            category: ["git", "revert", "reset", "github"]
        }
    ],
    [
        {
            id: "labb6a",
            title: "HTML5-formulär",
            desc: "Formulär är grundläggande för interaktivitet på webben — de låter användaren skicka data. HTML5 ger oss kraftfulla verktyg för att bygga formulär med inbyggd validering, utan JavaScript. I denna laboration repeterar vi grundläggande formulär från Webbteknik 1 samt fördjupar våra kunskaper lite.",
            week: 6,
            complete: false,
            link: "6a/index.html",
            category: ["form", "input", "validation"]
        },
        {
            id: "labb6b",
            title: "Interaktiva formulärfält",
            desc: "I labb 6a använde vi formulär för att samla och validera data. Men formulärelement kan också användas för att bygga interaktiva gränssnitt — helt utan att skicka iväg ett formulär. Tänk på inställningspaneler, filterfunktioner eller visuella verktyg där användaren direkt ser resultatet av sina val. I denna laboration bygger vi just sådana interaktiva kontroller med JavaScript.",
            week: 6,
            complete: false,
            link: "6b/index.html",
            category: ["form", "validatio", "input"]
        },
        {
            id: "labb6c",
            title: "Felhantering",
            desc: "I lab 4c använde vi console.log för att signalera att något gick fel — till exempel om ett ogiltigt pris skickades till en setter. Problemen med det är flera. Dels att koden som anropade settern aldrig fick veta att det gick fel, programmet fortsatte köra som om ingenting hänt. Men även att användaren aldrig får någon feedback. I denna labb lär vi oss ett bättre sätt: att kasta fel med throw och fånga dem med try/catch, så att vi kan reagera på problem och visa tydliga felmeddelanden för användaren.",
            week: 6,
            complete: false,
            link: "6c/index.html",
            category: ["throw", "catch", "error", "try"]
        }
    ]
]