PennController.ResetPrefix( null );
//AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/PWI_BB/");
PennController.DebugOff()
var progressBarText = "Fortschritt";


PennController.Sequence("init", "intro", "PersonalData", "hinweise", "practice_start", randomize("practice"), "main_start", sepWithN("break", shuffle(randomize("fillers"), randomize("items")), 16) , "question", "other", "send", "end" )




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Introduction HTML


PennController("intro",

             newHtml("intro", "example_intro.html")
             .print()

             ,

             newCanvas("space1", 1, 125)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .settings.css("font-size", "20px")
             .print()
             .wait()


    )

    //.setOption("hideProgressBar", "true")
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// demographic info


PennController("PersonalData",



               newText("EnterData", "Zun&auml;chst ein paar Angaben zu deiner Person!")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               newDropDown("language", "")
               .settings.log("last")
               .add( "Deutsch" , "Deutsch und andere Sprache(n) vor dem 5. Lebensjahr" , "andere" )

               ,

               newText("languagetext", "Muttersprache:")
               .settings.css("font-size", "18px")

               ,


               newCanvas("languagecanvas", 600, 35)
               .add(0, 20, getText("languagetext"))
               .add(350, 23, getDropDown("language"))
               .print()

               ,

               newDropDown("gender", "")
               .settings.log("last")
               .add( "weiblich" , "m&auml;nnlich" , "divers", "keine Angabe" )

               ,

               newText("gendertext", "Geschlecht:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("gendercanvas", 600, 35)
               .add(0, 20, getText("gendertext"))
               .add(350, 23, getDropDown("gender"))
               .print()

               ,


               //newTextInput("age", "")
               //.settings.log()
               //.add( "17 oder j&uuml;nger" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41" "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99",  "100 oder &auml;lter" )
               newDropDown("age", "")
               .settings.log("last")
               .add("17 oder j&uuml;nger",
               "18-25",
               "26-35",
               "36-45",
               "46-55",
               "56-65",
               "66-75",
               "76-85",
               "86-95",
               "96 oder &auml;lter")
               ,

               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("agecanvas", 600, 35)
               .add(0, 20, getText("agetext"))
               .add(350, 23, getDropDown("age"))
               .print()

               ,

               newText("educationtext", "H&ouml;chste Bildungsabschluss:")
               .settings.css("font-size", "18px")
               ,

               newDropDown("education", "")
               .settings.log("last")
               .add("Hauptschulabschluss und qualifizierender Hauptschulabschluss",
               "Mittlerer Schulabschluss (Realschulabschluss und vergleichbare Schulabschl&uuml;sse)",
               "Fachhochschulreife (allgemeine oder fachgebundene Fachhochschulreife)",
               "Abitur (allgemeine oder fachgebundene Hochschulreife)",
               "Berufsausbildung",
               "Hochschulabschluss (Universit&auml;t, Fachhochschule)")
               ,

               newCanvas("educationcanvas", 600, 35)
               .add(0, 20, getText("educationtext"))
               .add(350, 23, getDropDown("education"))
               .print()
               ,

               newText("bundeslandtext", "Wo hast du am l&auml;ngsten gelebt?")
               .settings.css("font-size", "18px")
               ,

               newDropDown("bundesland", "")
               .settings.log("last")
               .add("Baden-W&uuml;rttemberg",
                "Bayern",
                "Berlin",
                "Brandenburg",
                "Bremen",
                "Hamburg",
                "Hessen",
                "Mecklenburg-Vorpommern",
                "Niedersachsen",
                "Nordrhein-Westfalen",
                "Rheinland-Pfalz",
                "Saarland",
                "Sachsen",
                "Sachsen-Anhalt",
                "Schleswig-Holstein",
                "Th&uuml;ringen"
                //"Anderer Ort"
                )
               ,

               newText("orttext", "Anderer Ort:")
               .settings.css("font-size", "18px")
               ,

               newTextInput("ort", "")
               .settings.log()
               ,

               newCanvas("bundeslandcanvas", 1000, 35)
               .add(0, 20, getText("bundeslandtext"))
               .add(350, 23, getDropDown("bundesland"))
               .add(550, 20, getText("orttext"))
               .add(680, 23, getTextInput("ort"))
               .print()
               ,

               newDropDown("browser", "")
               .settings.log("last")
               .add( "Safari" , "Firefox" , "Chrome", "Internet Explorer", "Microsoft Edge", "anderer" )

               ,

               newText("browsertext", "Verwendeter Browser:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("browsercanvas", 600, 35)
               .add(0, 20, getText("browsertext"))
               .add(350, 23, getDropDown("browser"))
               .print()

               ,

               newCanvas("space3", 1, 155)
               .print()

               ,

               newButton("weiter", "weiter")
               .settings.center()
               .settings.css("font-size", "20px")
               .print()
               .wait(//getTextInput("age")
                      //.test.text(/^\d+$/) // ende age input
                      getDropDown("age")
                      .testNot.selected("17 oder j&uuml;nger")

                    .and(getDropDown("gender")
                      .test.selected()
                    ) //ende gender scale


                     .and(getDropDown("language")
                       .test.selected("Deutsch")
                       .or(getDropDown("language")
                         .test.selected("Deutsch und andere Sprache(n) vor dem 5. Lebensjahr")

                          )
                          ) //ende language scale

                     .and(getDropDown("education")
                       .test.selected()
                        ) //ende education scale

                     .and(getDropDown("bundesland")
                       .test.selected()
                       .or(getTextInput("ort")
                              .test.text(/^.+$/)
                            )
                     ) //ende bundesland scale

                      .and(getDropDown("browser")
                        .test.selected()
                           ) //ende browser scale


                     .success()
                     .failure(

                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Du kannst leider nicht an dem Experiment teilnehmen, da du die Vorasusetzungen f&uuml;r die Teilnahme nicht erf&uuml;llst oder du nicht alle Angaben eingegeben hast.")
                         .color("red")
                         .print()

                             ) //ende failure

                    ) // ende wait

               ,

               newVar("gender")
               .settings.global()
               .set( getDropDown("gender") )

               ,

               newVar("age")
               .settings.global()
               .set( getDropDown("age") )

               ,

               newVar("language")
               .settings.global()
               .set( getDropDown("language") )

               ,

               newVar("education")
               .settings.global()
               .set(getDropDown("education"))
               ,

               newVar("bundesland")
               .settings.global()
               .set(getDropDown("bundesland"))
               ,
               newVar("ort")
               .settings.global()
               .set(getTextInput("ort"))
               ,

               newVar("browser")
               .settings.global()
               .set( getDropDown("browser") )

     )

    //.setOption("hideProgressBar", "true")
    .log( "gender" ,   getVar("gender"))
    .log( "age" ,      getVar("age"))
    .log( "language" , getVar("language"))
    .log("education", getVar("education"))
    .log("bundesland", getVar("bundesland"))
    .log("ort",        getVar("ort"))
    .log( "browser" ,  getVar("browser"))


    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Hinweise HTML

PennController("hinweise",

             newHtml("Hinweise_html.html")
             .print()

             ,

             newCanvas("space1", 1, 160)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .settings.css("font-size", "20px")
             .print()
             .wait()


    )

    //.setOption("hideProgressBar", "true")
    ;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Practice


PennController("practice_start",


              newHtml("practice_one_start", "practice_one_start.html")
              .print()
              ,

              newButton("weiter", "weiter")
              .settings.center()
              .settings.css("font-size", "20px")
              .print()
              .wait()


    )

    //.setOption("hideProgressBar", "true")

    ;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Practice


PennController.Template("uebung.csv", variable =>

    PennController("practice",


             newText("sa", variable.sa)
             .settings.css("font-size", "18px")

             ,

             newText("sb", variable.sb)
             .settings.css("font-size", "18px")

             ,

             newText("frage", "Inwieweit w&uuml;rdest du <b>Person B</b> die folgenden Eigenschaften zuschreiben?")
             //.settings.css("font-size", "18px")
             ,

             newCanvas("canvas", 1000, 130)
             .add(0, 0, getText("sa"))
             .add(0, 20, getText("sb"))
             .add(0, 80, getText("frage"))
             //.add(0, 200, getScale("hoeflich"))
             //.add(0, 240, getScale("freundlich"))
             //.add(0, 280, getScale("locker"))
             //.add(0, 320, getScale("arrogant"))
             //.add(0, 360, getScale("pingelig"))
             //.add(0, 400, getScale("gebildet"))
             //.add(0, 440, getScale("wortgewandt"))
             //.add(0, 480, getScale("formell"))
             .print()

             ,

             newScale("hoeflich", 6)
             .button()
             .radio()
             .before(newText("hoeflichtext1", "gar nicht h&ouml;flich").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("hoeflichtext1", "sehr h&ouml;flich"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("hoeflichCanvas", 1000, 70)
             .add(0,0, getScale("hoeflich"))
             .print()
             ,

             newScale("freundlich", 6)
             .button()
             .radio()
             .before(newText("freundlichtext1", "gar nicht freundlich").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("freundlichtext1", "sehr freundlich"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("freundlichCanvas", 1000, 70)
             .add(0,0, getScale("freundlich"))
             .print()
             ,

             newScale("locker", 6)
             .button()
             .radio()
             .before(newText("lockertext1", "gar nicht locker").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("lockertext1", "sehr locker"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("lockerCanvas", 1000, 70)
             .add(0,0, getScale("locker"))
             .print()
             ,

             newScale("arrogant", 6)
             .button()
             .radio()
             .before(newText("arroganttext1", "gar nicht arrogant").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("arroganttext1", "sehr arrogant"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("arrogantCanvas", 1000, 70)
             .add(0,0, getScale("arrogant"))
             .print()
             ,

             newScale("pingelig", 6)
             .button()
             .radio()
             .before(newText("pingeligtext1", "gar nicht pingelig").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("pingeligtext1", "sehr pingelig"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("pingeligCanvas", 1000, 70)
             .add(0,0, getScale("pingelig"))
             .print()
             ,

             newScale("gebildet", 6)
             .button()
             .radio()
             .before(newText("gebildettext1", "gar nicht gebildet").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("gebildettext1", "sehr gebildet"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("gebildetCanvas", 1000, 70)
             .add(0,0, getScale("gebildet"))
             .print()
             ,

             newScale("wortgewandt", 6)
             .button()
             .radio()
             .before(newText("wortgewandttext1", "gar nicht wortgewandt").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("wortgewandttext1", "sehr wortgewandt"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("wortgewandtCanvas", 1000, 70)
             .add(0,0, getScale("wortgewandt"))
             .print()
             ,

             newScale("formell", 6)
             .button()
             .radio()
             .before(newText("formelltext1", "gar nicht formell").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("formelltext1", "sehr formell"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("formellCanvas", 1000, 70)
             .add(0,0, getScale("formell"))
             .print()
             ,

             newSelector("shuffle") // shuffle the positions of the scales
             .add(getCanvas("hoeflichCanvas"), getCanvas("freundlichCanvas"), getCanvas("lockerCanvas"), getCanvas("arrogantCanvas"), getCanvas("pingeligCanvas"), getCanvas("gebildetCanvas"), getCanvas("wortgewandtCanvas"), getCanvas("formellCanvas"))
             .shuffle()
             .disableClicks()
             ,

             newCanvas("space", 1, 50)
             .print()

             ,

             newText("faster", "Bitte schneller bewerten!")
             ,

             newTimer("timeout", 60000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             .start()
             .log()
             //.callback(getCanvas("canvas")
            //          .remove()
            //          ,
            //          getCanvas("hoeflichCanvas")
            //          .remove()
            //          ,
            //          getCanvas("freundlichCanvas")
            //          .remove()
            //          ,
            //          getCanvas("lockerCanvas")
            //          .remove()
            //          ,
            //          getCanvas("arrogantCanvas")
            //          .remove()
            //          ,
            //          getCanvas("pingeligCanvas")
            //          .remove()
            //          ,
            //          getCanvas("gebildetCanvas")
            //          .remove()
            //          ,
            //          getCanvas("wortgewandtCanvas")
            //          .remove()
            //          ,
            //          getCanvas("formellCanvas")
            //          .remove()
            //          ,
            //        )
             .callback(getText("faster").print())
             ,

             newButton("weiter", "weiter")
             .settings.center()
             .settings.css("font-size", "20px")
             .log()
             .print()
             .wait(getTimer("timeout").test.ended()
                  .or(getScale("hoeflich").test.selected()
                  .and(getScale("freundlich").test.selected()
                  .and(getScale("locker").test.selected()
                  .and(getScale("arrogant").test.selected()
                  .and(getScale("pingelig").test.selected()
                  .and(getScale("gebildet").test.selected()
                  .and(getScale("wortgewandt").test.selected()
                  .and(getScale("formell").test.selected()
                  )
                  )
                  )
                  )
                  )
                  )
                  )
                  )
           )// cannot click weiter until all scales are selected or when the timer ended
           .callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    //.setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log("education"            , getVar("education"))
    .log("bundesland"           , getVar("bundesland"))
    .log("ort",        getVar("ort"))
    .log( "browser"              , getVar("browser")        )
    .log("uebungnr"                , variable.uebung_nr       )
    .log( "condition"            , variable.cond       )
    .log( "control"            , variable.control       )
    )
    ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Start_Main

PennController("main_start",

              newHtml("main_start", "main_start.html")
              .print()

              ,
              newCanvas("space1", 1, 160)
              .print()

              ,
              newButton("weiter", "weiter")
              .settings.center()
              .settings.css("font-size", "20px")
              .print()
              .wait()


    )

    //.setOption("hideProgressBar", "true")

    ;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Main

PennController.Template("items.csv", variable =>

    PennController("items",


             newText("sa", variable.sa)
             .settings.css("font-size", "18px")

             ,

             newText("sb", variable.sb)
             .settings.css("font-size", "18px")

             ,

             newText("frage", "Inwieweit w&uuml;rdest du <b>Person B</b> die folgenden Eigenschaften zuschreiben?")
             //.settings.css("font-size", "18px")
             ,

             newCanvas("canvas", 1000, 130)
             .add(0, 0, getText("sa"))
             .add(0, 20, getText("sb"))
             .add(0, 80, getText("frage"))
             //.add(0, 200, getScale("hoeflich"))
             //.add(0, 240, getScale("freundlich"))
             //.add(0, 280, getScale("locker"))
             //.add(0, 320, getScale("arrogant"))
             //.add(0, 360, getScale("pingelig"))
             //.add(0, 400, getScale("gebildet"))
             //.add(0, 440, getScale("wortgewandt"))
             //.add(0, 480, getScale("formell"))
             .print()

             ,

             newScale("hoeflich", 6)
             .button()
             .radio()
             .before(newText("hoeflichtext1", "gar nicht h&ouml;flich").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("hoeflichtext1", "sehr h&ouml;flich"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("hoeflichCanvas", 1000, 70)
             .add(0,0, getScale("hoeflich"))
             .print()
             ,

             newScale("freundlich", 6)
             .button()
             .radio()
             .before(newText("freundlichtext1", "gar nicht freundlich").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("freundlichtext1", "sehr freundlich"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("freundlichCanvas", 1000, 70)
             .add(0,0, getScale("freundlich"))
             .print()
             ,

             newScale("locker", 6)
             .button()
             .radio()
             .before(newText("lockertext1", "gar nicht locker").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("lockertext1", "sehr locker"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("lockerCanvas", 1000, 70)
             .add(0,0, getScale("locker"))
             .print()
             ,

             newScale("arrogant", 6)
             .button()
             .radio()
             .before(newText("arroganttext1", "gar nicht arrogant").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("arroganttext1", "sehr arrogant"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("arrogantCanvas", 1000, 70)
             .add(0,0, getScale("arrogant"))
             .print()
             ,

             newScale("pingelig", 6)
             .button()
             .radio()
             .before(newText("pingeligtext1", "gar nicht pingelig").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("pingeligtext1", "sehr pingelig"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("pingeligCanvas", 1000, 70)
             .add(0,0, getScale("pingelig"))
             .print()
             ,

             newScale("gebildet", 6)
             .button()
             .radio()
             .before(newText("gebildettext1", "gar nicht gebildet").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("gebildettext1", "sehr gebildet"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("gebildetCanvas", 1000, 70)
             .add(0,0, getScale("gebildet"))
             .print()
             ,

             newScale("wortgewandt", 6)
             .button()
             .radio()
             .before(newText("wortgewandttext1", "gar nicht wortgewandt").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("wortgewandttext1", "sehr wortgewandt"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("wortgewandtCanvas", 1000, 70)
             .add(0,0, getScale("wortgewandt"))
             .print()
             ,

             newScale("formell", 6)
             .button()
             .radio()
             .before(newText("formelltext1", "gar nicht formell").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("formelltext1", "sehr formell"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("formellCanvas", 1000, 70)
             .add(0,0, getScale("formell"))
             .print()
             ,

             newSelector("shuffle") // shuffle the positions of the scales
             .add(getCanvas("hoeflichCanvas"), getCanvas("freundlichCanvas"), getCanvas("lockerCanvas"), getCanvas("arrogantCanvas"), getCanvas("pingeligCanvas"), getCanvas("gebildetCanvas"), getCanvas("wortgewandtCanvas"), getCanvas("formellCanvas"))
             .shuffle()
             .disableClicks()
             ,

             newCanvas("space", 1, 50)
             .print()

             ,

             newText("faster", "Bitte schneller bewerten!")
             ,

             newTimer("timeout", 60000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             .start()
             .log()
             .callback(getCanvas("canvas")
                      .remove()
                      ,
                      getCanvas("hoeflichCanvas")
                      .remove()
                      ,
                      getCanvas("freundlichCanvas")
                      .remove()
                      ,
                      getCanvas("lockerCanvas")
                      .remove()
                      ,
                      getCanvas("arrogantCanvas")
                      .remove()
                      ,
                      getCanvas("pingeligCanvas")
                      .remove(),
                      getCanvas("gebildetCanvas")
                      .remove()
                      ,
                      getCanvas("wortgewandtCanvas")
                      .remove()
                      ,
                      getCanvas("formellCanvas")
                      .remove()
                      ,
                    )
             .callback(getText("faster").print())
             ,

             newButton("weiter", "weiter")
             .settings.center()
             .settings.css("font-size", "20px")
             .log()
             .print()
             .wait(getTimer("timeout").test.ended()
                  .or(getScale("hoeflich").test.selected()
                  .and(getScale("freundlich").test.selected()
                  .and(getScale("locker").test.selected()
                  .and(getScale("arrogant").test.selected()
                  .and(getScale("pingelig").test.selected()
                  .and(getScale("gebildet").test.selected()
                  .and(getScale("wortgewandt").test.selected()
                  .and(getScale("formell").test.selected()
                  )
                  )
                  )
                  )
                  )
                  )
                  )
                  )
           )// cannot click weiter until all scales are selected or when the timer ended
           .callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    //.setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log("education"            , getVar("education"))
    .log("bundesland"           , getVar("bundesland"))
    .log("ort",        getVar("ort"))
    .log( "browser"              , getVar("browser")        )
    .log("itemnr"                , variable.item_nr       )
    .log( "condition"            , variable.cond       )
    .log( "conddrop"            , variable.cond_drop       )
    .log("condarg"              , variable.cond_arg    )
    .log("subj"                 , variable.subj )
    .log("subjgen"                 , variable.subj_gen )
    .log("obj"                   ,variable.obj)
    .log("objgen"                  , variable.obj_gen )
    .log("mod"                 , variable.mod )
    .log("v"                    ,variable.v)
    )
    ;

///////////////////////// Fillers

PennController.Template("fillers.csv", variable =>

    PennController("fillers",


             newText("sa", variable.sa)
             .settings.css("font-size", "18px")

             ,

             newText("sb", variable.sb)
             .settings.css("font-size", "18px")

             ,

             newText("frage", "Inwieweit w&uuml;rdest du <b>Person B</b> die folgenden Eigenschaften zuschreiben?")
             //.settings.css("font-size", "18px")
             ,

             newCanvas("canvas", 1000, 130)
             .add(0, 0, getText("sa"))
             .add(0, 20, getText("sb"))
             .add(0, 80, getText("frage"))
             //.add(0, 200, getScale("hoeflich"))
             //.add(0, 240, getScale("freundlich"))
             //.add(0, 280, getScale("locker"))
             //.add(0, 320, getScale("arrogant"))
             //.add(0, 360, getScale("pingelig"))
             //.add(0, 400, getScale("gebildet"))
             //.add(0, 440, getScale("wortgewandt"))
             //.add(0, 480, getScale("formell"))
             .print()

             ,

             newScale("hoeflich", 6)
             .button()
             .radio()
             .before(newText("hoeflichtext1", "gar nicht h&ouml;flich").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("hoeflichtext1", "sehr h&ouml;flich"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("hoeflichCanvas", 1000, 70)
             .add(0,0, getScale("hoeflich"))
             .print()
             ,

             newScale("freundlich", 6)
             .button()
             .radio()
             .before(newText("freundlichtext1", "gar nicht freundlich").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("freundlichtext1", "sehr freundlich"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("freundlichCanvas", 1000, 70)
             .add(0,0, getScale("freundlich"))
             .print()
             ,

             newScale("locker", 6)
             .button()
             .radio()
             .before(newText("lockertext1", "gar nicht locker").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("lockertext1", "sehr locker"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("lockerCanvas", 1000, 70)
             .add(0,0, getScale("locker"))
             .print()
             ,

             newScale("arrogant", 6)
             .button()
             .radio()
             .before(newText("arroganttext1", "gar nicht arrogant").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("arroganttext1", "sehr arrogant"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("arrogantCanvas", 1000, 70)
             .add(0,0, getScale("arrogant"))
             .print()
             ,

             newScale("pingelig", 6)
             .button()
             .radio()
             .before(newText("pingeligtext1", "gar nicht pingelig").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("pingeligtext1", "sehr pingelig"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("pingeligCanvas", 1000, 70)
             .add(0,0, getScale("pingelig"))
             .print()
             ,

             newScale("gebildet", 6)
             .button()
             .radio()
             .before(newText("gebildettext1", "gar nicht gebildet").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("gebildettext1", "sehr gebildet"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("gebildetCanvas", 1000, 70)
             .add(0,0, getScale("gebildet"))
             .print()
             ,

             newScale("wortgewandt", 6)
             .button()
             .radio()
             .before(newText("wortgewandttext1", "gar nicht wortgewandt").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("wortgewandttext1", "sehr wortgewandt"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("wortgewandtCanvas", 1000, 70)
             .add(0,0, getScale("wortgewandt"))
             .print()
             ,

             newScale("formell", 6)
             .button()
             .radio()
             .before(newText("formelltext1", "gar nicht formell").cssContainer({width: "15em", "text-align": "right"}))//.cssContainer({height:'100%',display:'flex','flex-direction':'column', width: "15em", "text-align": "right"}).css("margin-top","auto"))
             .after(newText("formelltext1", "sehr formell"))//.cssContainer({height:'100%',display:'flex','flex-direction':'column'}).css("margin-top","auto"))
             .labelsPosition("top")
             .log("last")
             ,

             newCanvas("formellCanvas", 1000, 70)
             .add(0,0, getScale("formell"))
             .print()
             ,

             newSelector("shuffle") // shuffle the positions of the scales
             .add(getCanvas("hoeflichCanvas"), getCanvas("freundlichCanvas"), getCanvas("lockerCanvas"), getCanvas("arrogantCanvas"), getCanvas("pingeligCanvas"), getCanvas("gebildetCanvas"), getCanvas("wortgewandtCanvas"), getCanvas("formellCanvas"))
             .shuffle()
             .disableClicks()
             ,

             newCanvas("space", 1, 50)
             .print()

             ,

             newText("faster", "Bitte schneller bewerten!")
             ,

             newTimer("timeout", 60000) // a timeout so that when it runs out, the canvases are removed and the faster message appears
             .start()
             .log()
             .callback(getCanvas("canvas")
                      .remove()
                      ,
                      getCanvas("hoeflichCanvas")
                      .remove()
                      ,
                      getCanvas("freundlichCanvas")
                      .remove()
                      ,
                      getCanvas("lockerCanvas")
                      .remove()
                      ,
                      getCanvas("arrogantCanvas")
                      .remove()
                      ,
                      getCanvas("pingeligCanvas")
                      .remove(),
                      getCanvas("gebildetCanvas")
                      .remove()
                      ,
                      getCanvas("wortgewandtCanvas")
                      .remove()
                      ,
                      getCanvas("formellCanvas")
                      .remove()
                      ,
                    )
             .callback(getText("faster").print())
             ,

             newButton("weiter", "weiter")
             .settings.center()
             .settings.css("font-size", "20px")
             .log()
             .print()
             .wait(getTimer("timeout").test.ended()
                  .or(getScale("hoeflich").test.selected()
                  .and(getScale("freundlich").test.selected()
                  .and(getScale("locker").test.selected()
                  .and(getScale("arrogant").test.selected()
                  .and(getScale("pingelig").test.selected()
                  .and(getScale("gebildet").test.selected()
                  .and(getScale("wortgewandt").test.selected()
                  .and(getScale("formell").test.selected()
                  )
                  )
                  )
                  )
                  )
                  )
                  )
                  )
           )// cannot click weiter until all scales are selected or when the timer ended
           .callback(getTimer("timeout").stop()) // if the weiter button is clicked before the timer runs out, stop the timer
           ,


    )

    //.setOption("hideProgressBar", "true" )
    .log( "gender"               , getVar("gender")         )
    .log( "age"                  , getVar("age")            )
    .log( "language"             , getVar("language")       )
    .log("education"             , getVar("education"))
    .log("bundesland"            , getVar("bundesland"))
    .log("ort",        getVar("ort"))
    .log( "browser"              , getVar("browser")        )
    .log("fillernr"                , variable.filler_nr       )
    .log( "condition"            , variable.cond       )
    .log( "control"            , variable.control       )
    )
    ;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Questions

PennController("question",

              newText("bspa", "A: Hat Maria das Auto gestern verkauft?")
              .settings.css("font-size", "18px")
              ,

              newText("bspb", "B: Muss sie heute verkaufen.")
              .settings.css("font-size", "18px")
              ,

              newText("q", "Welche weitere Eigenschaften w&uuml;rdest du <b>Person B</b> noch zuschreiben?")
              ,

              newCanvas("questioncanvas", 1000, 200)
              .add(0,0, getText("bspa"))
              .add(0,20, getText("bspb"))
              .add(0,140, getText("q"))
              .print()
              ,

              newTextInput("adj")
              .log()
              .lines(0)
              .size(600, 200)
              .print()
              ,

              newCanvas("blank", 1, 20)
              .print()

              ,

              newButton("weiter", "weiter")
              .settings.css("font-size", "20px")
              .center()
              .print()
              .wait()



)
//.setOption("hideProgressBar", "true")
.log( "gender"               , getVar("gender")         )
.log( "age"                  , getVar("age")            )
.log( "language"             , getVar("language")       )
.log("education"            , getVar("education"))
.log("bundesland"           , getVar("bundesland"))
.log("ort",        getVar("ort"))
.log( "browser"              , getVar("browser")        )
;


PennController("other",

              newText("qf", "Hier kannst du Kommentare und Feedbacks f&uuml;r dieses Experiment eingeben:")
              .center()
              .print()
              ,

              newCanvas("blank", 1, 20)
              .print()

              ,

              newTextInput("feedback")
              .log()
              .lines(0)
              .size(600, 200)
              .print()
              ,

              newCanvas("blank2", 1, 20)
              .print()

              ,

              newButton("weiter", "weiter")
              .settings.css("font-size", "20px")
              .center()
              .print()
              .wait()



)
//.setOption("hideProgressBar", "true")
.log( "gender"               , getVar("gender")         )
.log( "age"                  , getVar("age")            )
.log( "language"             , getVar("language")       )
.log("education"             , getVar("education"))
.log("bundesland"            , getVar("bundesland"))
.log("ort",        getVar("ort"))
.log( "browser"              , getVar("browser")        )
;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Break

PennController("break",


              newCanvas("breakcanvas", 800, 400)
              .add(250,50, newText("pleasewait1", "Eine kurze Pause zur Erholung!").settings.css("font-size", "large"))
              .add(250,100, newText("pleasewait2", "Sobald du fortfahren kannst, erscheint unten der <i>weiter</i>-Knopf.").settings.css("font-size", "18px"))
              .print()


              ,

              newTimer("break", 10000)
              .start()
              .wait()

              ,

              getCanvas("breakcanvas")
              .remove()

              ,

              newCanvas("breakendcanvas", 800, 400)
              .add(215, 50, newText("continue", "Du kannst das Experiment jetzt fortsetzen.") .settings.css("font-size", "18px"))
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .settings.css("font-size", "20px")
              .print()
              .wait()

    )

   //.setOption("hideProgressBar", "true")
;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

PennController("end",

    newText("<p>Vielen Dank f&uuml;r deine Teilnahme!</p>")
    .settings.css("font-size", "large")
    .print()

     ,

    newCanvas("empty6", 1, 10)
    .print()

    ,

    newText("close",  "Jetzt kannst du das Fenster schlie&szlig;en.")
    .settings.css("font-size", "large")
    .print()

    ,


    newButton("void")
     .wait()

)
.setOption("countsForProgressBar", false);
  //  .setOption("hideProgressBar", "true")
