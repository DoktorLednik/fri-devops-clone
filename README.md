# Keymanagement (simple photo uploader)

Projekt narejen po Udemy tečaju https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide - Angular & NodeJS - The MEAN Stack Guide [2023 Edition] iz leta 2018...

Projekt je hostan na https://fly.io/apps/keymanagement/monitoring
Baza je na Atlasdb

Storage na Fly ni persistenčen, tako da lokalni zapisi (slike) po shutdownu fly dockerja izginejo.

Prezentacija (stara):
https://docs.google.com/presentation/d/e/2PACX-1vTFkt5TTiNOsBZZI1tavYEgo513oY6u-SYy_yu6gFPi2CcMeTLwXwyZG4pNdf1HJNyc7_v3coCVJkT2/pub?start=false&loop=false&delayms=3000

Cloud-Init deploy:
Deploya se z cloud-init-test.yaml receptom. V vrstici 25 je potrebno zamenjati geslo (XXXXX) z dejanskim github tokenom.

Kratek opis deploya:
- lxc launch ubuntu:jammy cloud-init-test --config=user.user-data="$(cat /home/ubuntu/cloud-init-test.yaml)"
- namestita se repozitorija za MongoDB in NodeJS
- apt-get install npm, nodejs, mongodb
- v /home/ubuntu/LP-doktorlednik se sklonira private repozitorij
- z npm se namestijo dependancy-ji
- namesto zagona node server.js se namesti service, v katerem je zaradi uporabe .env dodan variable za mongo bazo
- app je dosegljiv na portu 3000 na ipju, ki se dodali deployani VM