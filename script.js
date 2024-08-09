var app = angular.module("cpapp", []);
app.controller("cpctrl", function () {
    this.key = "";
    this.search = "";
    this.appname = "InfosCamppus";
    this.database= datas;
    this.univs = univs; 
    
    this.database.forEach(filiere => {
        test= filiere.universite.sigle.toLowerCase()
        this.univs[test].infos.filieres.push({name:filiere.name});
    });   
    // this.univs.filter(this.search); 
})