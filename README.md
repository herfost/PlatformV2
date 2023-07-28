# Platform

Semplice [piattaforma web per visualizzare FAQ](https://herfost.github.io/PlatformV2).

## Archiviazione dei dati

Al fine di veicolare l'archiviazione su database, i dati vengono memorizzati su File [JSON](/src/data/)

## Struttura dell'oggetto FAQ:

```json
{
  "title": "",
  "answers": [
    {
      "id": "",
      "username": "",
      "content": ""
    }
  ],
  "tags": []
}
```

## Esegui in locale

```sh
git clone https://github.com/herfost/PlatformV2.git
cd PlatformV2
npm i
npm run dev
```

## Deployment:
```sh
npm run build
git add dist -f
git commit -m "dist version #{versione dist}"
git subtree push --prefix dist origin gh-pages
```

Per maggiori informazioni: https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane
