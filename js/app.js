document.addEventListener("DOMContentLoaded", e => {
    let xml, xmlhttp, xmlDoc, vliste;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "produit.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    console.log(xmlDoc);
    vliste = String("");
    xml = xmlDoc.getElementsByTagName("produit");

    console.log(xml[0].childNodes[1]);
    for (let i = 0; i < xml.length; i++) {

        //variables pour les noeuds

        const nom = xml[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        const mandat = xml[i].getElementsByTagName("mandat")[0].childNodes[0].nodeValue;
        const naissance = xml[i].getElementsByTagName("naissance")[0].childNodes[0].nodeValue;
        const statut = xml[i].getElementsByTagName("statut")[0].childNodes[0].nodeValue;

        //ajout de chaque propriété dans boucle
        console.log(nom + " " + marque + " " + prix);

        vliste += "<li>Nom : " + nom + "</li>";
        vliste += "<li>Mandat : " + mandat + "</li>";
        vliste += "<li>Naissance : " + naissance + "</li>";
        vliste += "<li>Statut : " + statut + "</li>";

        //stockage dans un tableau
        myRacine = [];
        myRacine.push(nom, mandat, naissance, statut);
        console.log(JSON.stringify(myRacine));
        localStorage.setItem("racine", myRacine);
    }

    document.querySelector("ul").innerHTML = vliste;
});