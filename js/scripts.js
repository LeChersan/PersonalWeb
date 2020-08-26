function aboutMe(sectionAbout){
    $(".sectionAbout").hide();
    if(sectionAbout=="experience"){
        $("#rowExperience").show();
    } else if(sectionAbout=="education"){
        $("#rowEducation").show();
    } else if(sectionAbout=="skills"){
        $("#rowSkills").show();
    } else if(sectionAbout=="languages"){
        $("#rowLanguages").show();
    }
}
aboutMe();

