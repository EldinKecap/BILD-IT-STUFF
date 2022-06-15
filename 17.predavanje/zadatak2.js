// 2. Kreirajte funkciju koja uzima imgur link (kao string) i izdvaja jedinstveni id i tip. 
// Vratite objekat koji sadrži jedinstveni id i string koji ukazuje na vrstu linka.

// Link moze upućivati na:

//     • Album (npr. http://imgur.com/a/cjh4E)
//     • Galerija (npr. http://imgur.com/gallery/59npG)
//     • Slika (npr. http://imgur.com/OzZUNMM)
//     • Slika (direktan link) (npr. http://i.imgur.com/altd8Ld.png)

// 		PRIMJERI:

// imgurUrlParser("http://imgur.com/a/cjh4E") ➞ { id: "cjh4E", type: "album" }

// imgurUrlParser("http://imgur.com/gallery/59npG") ➞ { id: "59npG", type: "gallery" }

// imgurUrlParser("http://i.imgur.com/altd8Ld.png") ➞ { id: "altd8Ld", type: "image" }
function imgurUrlParser(link) {
    let counter = 0;
    let obj = {};
    let end = 0;
    for (let i = 0; i < link.length; i++) {
        if (link[i]==='/') {
            counter++;
        }
    }
    if (counter === 4) {
        for (let i = link.length-1; i > 0; i--) {
            if(link[i]==='/'&&counter==4){
                counter--;
                // console.log(i,link.length-i)
                obj.id = link.slice(i+1,link.length);
                end = i;
                i--;
            }   
            if(link[i]==='/'&&counter==3){
                counter--;
                // console.log(i,link.length-i)
                obj.type = link.slice(i+1,end);
                i--;
            }   
        }    
    }
    if(counter === 3){
        for (let i = link.length-1; i > 0; i--) {
            if(link[i]==='/'&&counter===3){
                counter--;
                // console.log(i,link.length-i)
                obj.id = link.slice(i+1,link.length);
                obj.type = 'image';
                i--;
                
            }   
         

        }
}
if(obj.type === 'a'){
    obj.type = 'album'
}
if (obj.id.includes('.png')) {
    obj.id = obj.id.replace('.png','')
    console.log('sd')
}
    return obj;
}
// console.log(imgurUrlParser("http://imgur.com/gallery/59npG"));
console.log(imgurUrlParser("http://i.imgur.com/altd8Ld.png"));
// console.log(imgurUrlParser("http://imgur.com/a/cjh4E"));