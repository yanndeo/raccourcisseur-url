# Raccourcisseurl-url 1.0

> Api url shortener
Il s'agit là d'une petite api sans authentification quelquonque , tournant sous nodeJs . Il stocke l'url (longUrl) qui lui est fournit et retourne une version d'ulr courte et claire (shortUrl), qui redigera malgré tout ,l'utilisateur sur la bonne page, le bon site.Tout en stockant la version longue et la version raccourcit en base de donnée (mongo cloud) .

## Quick Start

```
# change default.json file in config folder

# this file is located in config/default.json

# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/url-shortener...",
 
```

```bash
# Install server dependencies
npm install

# Run node/Express 
npm run dev

```

## App Info

### Author
[yanndeo](http://www.yanndeo.xyz)

### Version

1.0.0

### License

This project is licensed under the MIT License
