// 3. Kreirajte funkciju koja broji imena u nizu i određuje jednakost. 
// Imena su ubacena u string i pomiješani sa posebnim simbolima i znakovima. 
// Imena koja se traze su proslijednjena sa simbolom ampersanda(&) kao drugi parametar funkcije. 
// Pogledajte sljedeće primjere za više detalja.
// PRIMJERI:

// equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
// ➞ {"Peter":6, "Paul": 6, "equality": true}

// equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
// ➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// // "difference" key is added to the object if count is not equal.

// equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
// ➞ {"Ken": 0, "Tom": 0, "equality": true}

function equalCount(str,strTest) {
       strTest = strTest.split('&');
       counterFirstName = 0;
       counterSecondName = 0;
       let obj = {};
    //    console.log(str.indexOf(strTest[0]));
    //    console.log(strTest)
    //    console.log(str.indexOf(strTest[1]));
       for (let i = 0; i < str.length; i++) {
           if(str.indexOf(strTest[0])>=0){
               str = str.replace(strTest[0],'');
            //    console.log(str.indexOf(strTest[0]));
               counterFirstName++;
           }
           if(str.indexOf(strTest[1])>=0){
            str = str.replace(strTest[1],'')
            counterSecondName++;
        }
       }
       obj[strTest[0]]=counterFirstName;
       obj[strTest[1]]=counterSecondName;
       obj.equality = counterFirstName===counterSecondName?true:false;
       if(obj.equality === false ){
           if(counterFirstName > counterSecondName){
               obj.difference = counterFirstName-counterSecondName;
           }

           if(counterFirstName < counterSecondName){
            obj.difference = counterSecondName-counterFirstName;
        }
       }
    //    console.log(counterFirstName,counterSecondName)
       console.log(obj)
       return obj;
}
equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
// ➞ {"Peter":6, "Paul": 6, "equality": true}

equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
// ➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// // "difference" key is added to the object if count is not equal.

equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
// ➞ {"Ken": 0, "Tom": 0, "equality": true}