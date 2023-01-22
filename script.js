const luas= "&nbsp &nbsp &nbsp &nbsp"
const keliling= "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp"
const br = "<br/>"
const volume="&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp"
const luasPer="&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp"
const pytha="&nbsp &nbsp &nbsp &nbsp&nbsp"

function copyButton(){
    const copy=document.querySelector('.copy-button')
    copy.style.backgroundImage="url(../img/copied.jpg)"
    setInterval(()=>{
        copy.style.backgroundImage="url(../img/copy.jpg)"
    },9000)}
const tombolCopy=document.querySelector('.copy-button')

//PERSEGI
const sisipersegi= document.getElementById('sisipersegi')
const luasPersegi= document.getElementById('luasPersegi')
const kelilingPersegi=document.querySelector('#kelilingPersegi')
const langkahPersegi=document.querySelector('.langkahPersegi')
const tombolLangkah=document.getElementById("tombol")
if(sisipersegi){
    sisipersegi.addEventListener('input',function(){
        const sPersegi= sisipersegi.value
        const lPersegi=sPersegi*sPersegi
        const kPersegi=sPersegi*4
        luasPersegi.innerHTML=lPersegi
        kelilingPersegi.innerHTML=kPersegi
        if (sPersegi.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahPersegi.innerHTML=`
        Sisi = ${sPersegi}${br}${br}
        Luas = S x S ${br}
        ${luas} = ${sPersegi} x ${sPersegi} ${br}
        ${luas} = ${lPersegi} ${br}
        Keliling = Sisi x 4 ${br}
        ${keliling} = ${sPersegi} x 4 ${br}
        ${keliling} = ${kPersegi} ${br}`
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahPersegi").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
    
}

//PERSEGI PANJANG

const PanjangPP=document.getElementById('panjangPP')
const LebarPP=document.getElementById('lebarPP')
const luasPersegiPanjang=document.getElementById('luasPersegiPanjang')
const kelilingPersegiPanjang=document.getElementById('kelilingPersegiPanjang')
const langkahPP=document.querySelector('.langkahPP')
if(PanjangPP){
    PanjangPP&&LebarPP.addEventListener('input',function(){
        const panPP= PanjangPP.value;
        const lebPP=LebarPP.value
        const luasPP=panPP*lebPP
        const kPP=(panPP*2)+(lebPP*2)
        luasPersegiPanjang.innerHTML=luasPP
        kelilingPersegiPanjang.innerHTML=kPP
        if (panPP.length>0&&lebPP.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahPP.innerHTML=`
Panjang = ${panPP}${br}
Lebar &nbsp &nbsp = ${lebPP}${br}${br}
Luas = P x L ${br}
${luas} = ${panPP} x ${lebPP} ${br}
${luas} = ${luasPP} ${br}
Keliling = (2 x P) + (2 x L) ${br}
${keliling} = (2 x ${panPP}) + (2 x ${lebPP}) ${br}
${keliling} = ${panPP*2} + ${lebPP*2} ${br}
${keliling} = ${kPP}`
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahPP").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
    
}

//Segitiga

const alasSegitiga=document.getElementById('alasSegitiga')
const tinggiSegitiga=document.getElementById('tinggiSegitiga')
const luasSegitiga=document.getElementById('luasSegitiga')
const kelilingSegitiga=document.getElementById('kelilingSegitiga')
const langkahSegitiga=document.getElementsByClassName('langkahSegitiga')
if(alasSegitiga)
    alasSegitiga&&tinggiSegitiga.addEventListener('input',function(){
        const alaSegitiga= alasSegitiga.value
        const tiSegitiga=tinggiSegitiga.value
        const lSegitiga=(alaSegitiga*tiSegitiga)/2
        const sisiMiring=Number(Math.sqrt((alaSegitiga/2)**2+(tiSegitiga**2)))
        const kSegitiga= Number(sisiMiring*2+Number(alaSegitiga))
        luasSegitiga.innerHTML=lSegitiga
        kelilingSegitiga.innerHTML=kSegitiga
        if (alaSegitiga.length>0&&tiSegitiga.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahSegitiga[0].innerHTML=`
        Alas&nbsp &nbsp = ${alaSegitiga}${br}
        Tinggi = ${tiSegitiga}${br}${br}
        Luas = ½ x Alas x Tinggi ${br}
        ${luas} = ½ x ${alaSegitiga} x ${tiSegitiga} ${br}
        ${luas} = ½ x ${alaSegitiga*tiSegitiga} ${br}
        ${luas} = ${lSegitiga}${br}
        Keliling = ( Sisi Miring x 2 ) + Alas ${br}
        ${keliling} = (( (√a : 2)² + t²) x 2 ) + ${alaSegitiga}${br}
        ${keliling} = (( √${alaSegitiga/2}² + ${tiSegitiga}²) x 2 ) + ${alaSegitiga}${br}
        ${keliling} = ( √${(alaSegitiga/2)**2+tiSegitiga**2}² x 2 ) + ${alaSegitiga}${br}
        ${keliling} = ( ${sisiMiring} x 2 ) + ${alaSegitiga} ${br}
        ${keliling} = ${sisiMiring*2} + ${alaSegitiga}${br}
        ${keliling} = ${kSegitiga}` 
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahSegitiga")[0].innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    })


//LINGKARAN

const jjLingkaran=document.getElementById('jjLingkaran')
const luasLingkaran=document.getElementById('luasLingkaran')
const kelilingLingkaran=document.getElementById('kelilingLingkaran')
const langkahLingkaran=document.getElementsByClassName('langkahLingkaran')
if(jjLingkaran){
    jjLingkaran.addEventListener('input',function(){
        let phi;
        const JJlingkaran= jjLingkaran.value;
        if (JJlingkaran%7==0){
            phi=22/7
            pi="22/7"
        }
        else{
            phi=3.14
            pi="3.14"
        }
        if (JJlingkaran.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        const lLingkaran=phi*JJlingkaran**2
        const kLingkaran=phi*(JJlingkaran*2)
        luasLingkaran.innerHTML=lLingkaran
        kelilingLingkaran.innerHTML=kLingkaran
        langkahLingkaran[0].innerHTML=`
        Jari Jari = ${JJlingkaran}${br}${br}
        Luas = π x r² ${br}
        ${luas} = ${pi} x ${JJlingkaran}² ${br}
        ${luas} = ${pi} x ${JJlingkaran**2} ${br}
        ${luas} = ${lLingkaran} ${br}
        Keliling = π x 2 x r ${br}
        ${keliling} = ${pi} x 2 x ${JJlingkaran} ${br}
        ${keliling} = ${pi} x ${JJlingkaran*2} ${br}
        ${keliling} = ${kLingkaran}` 
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahLingkaran")[0].innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//JAJARGENJANG

const alasJJ=document.getElementById('alasJJ')
const tinggiJJ=document.getElementById('tinggiJJ')
const luasJJ=document.getElementById('luasJJ')
const langkahJJ=document.getElementsByClassName('langkahJJ')
if(alasJJ){
    alasJJ&&tinggiJJ.addEventListener('input',function(){
        const alJJ= alasJJ.value;
        const tiJJ=tinggiJJ.value
        const lJJ=alJJ*tiJJ
        luasJJ.innerHTML=lJJ
        if (alJJ.length>0&&tiJJ.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahJJ[0].innerHTML=`
        Alas &nbsp&nbsp = ${alJJ}${br}
        Tinggi = ${tiJJ}${br}${br}
        Luas = A x T ${br}
        ${luas} = ${alJJ} x ${tiJJ} ${br}
        ${luas} = ${lJJ} ${br}`
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahJJ")[0].innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
    
}

//TRAPESIUM

const sisiaTrapesium=document.getElementById('sisiaTrapesium')
const sisibTrapesium=document.getElementById('sisibTrapesium')
const TinggiTrapesium=document.getElementById('tinggiTrapesium')
const luasTrapesium=document.getElementById('luasTrapesium')
const langkahTrapesium=document.getElementsByClassName('langkahTrapesium')
if(sisiaTrapesium){
    sisiaTrapesium&&sisibTrapesium&&TinggiTrapesium.addEventListener('input',function(){
        const aTrapesium=sisiaTrapesium.value
        const bTrapesium=sisibTrapesium.value
        const tiTrapesium=TinggiTrapesium.value
        const lTrapesium=1/2*(Number(aTrapesium)+Number(bTrapesium))*tiTrapesium
        luasTrapesium.innerHTML=lTrapesium
        if (aTrapesium.length>0&&bTrapesium.length>0&&tiTrapesium.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahTrapesium[0].innerHTML=`
        Sisi a&nbsp = ${aTrapesium}${br}
        Sisi b &nbsp= ${bTrapesium}${br}
        Tinggi = ${tiTrapesium}${br}${br}
        Luas = ½ x (Sisi a + Sisi b) x T${br}
        ${luas} = ½ x (${aTrapesium} + ${bTrapesium}) x ${tiTrapesium} ${br}
        ${luas} = ½ x ${Number(aTrapesium)+Number(bTrapesium)} x ${tiTrapesium} ${br}
        ${luas} = ½ x ${(Number(aTrapesium)+Number(bTrapesium))*tiTrapesium} ${br}
        ${luas} = ${lTrapesium}`
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahTrapesium")[0].innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
    
}

//BELAH KETUPAT

const diagonal1BK=document.getElementById('diagonal1BK')
const diagonal2BK=document.getElementById('diagonal2BK')
const luasBK=document.getElementById('luasBK')
const kelilingBK=document.getElementById('kelilingBK')
const langkahBK=document.getElementsByClassName('langkahBK')
if(diagonal1BK){
    diagonal1BK&&diagonal2BK.addEventListener('input',function(){
        const d1BK= diagonal1BK.value;
        const d2BK=diagonal2BK.value
        const lBK=d1BK*d2BK/2
        const sisiMiring=Math.sqrt((d1BK/2)**2+(d2BK/2)**2)
        const kBK=sisiMiring*4
        luasBK.innerHTML=lBK
        kelilingBK.innerHTML=kBK
        if (d1BK.length>0&&d2BK.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahBK[0].innerHTML=`
        Diagonal 1 = ${d1BK}${br}
        Diagonal 2 = ${d2BK}${br}${br}
        Luas = ½ x Diagonal 1 x Diagonal 2${br}
        ${luas} = ½ x ${d1BK} x ${d2BK} ${br}
        ${luas} = ${lBK} ${br}
        Keliling = Sisi x 4 ${br}
        ${keliling} = (√(d1 : 2)² + (d2 : 2)²) x 4 ${br}
        ${keliling} = (√(${d1BK} : 2)² + (${d2BK} : 2)²) x 4 ${br}
        ${keliling} = (√${d1BK/2}² + ${d2BK/2}²) x 4 ${br}
        ${keliling} = (√${(d1BK/2)**2} + ${(d2BK/2)**2}) x 4 ${br}
        ${keliling} = √${Number((d1BK/2)**2)+Number((d2BK/2)**2)} x 4 ${br}
        ${keliling} = ${sisiMiring} x 4 ${br}
        ${keliling} = ${kBK}`
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahBK")[0].innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
    
}

//LAYANG LAYANG

const diagonal1LL=document.getElementById('diagonal1LL')
const diagonal2LL=document.getElementById('diagonal2LL')
const luasLL=document.getElementById('luasLL')
const langkahLL=document.getElementsByClassName('langkahLL')
if(diagonal1LL){
    diagonal1LL&&diagonal2LL.addEventListener('input',function(){
        const d1LL= diagonal1LL.value;
        const d2LL=diagonal2LL.value
        const lLL=d1LL*d2LL/2
        luasLL.innerHTML=lLL
        if (d1LL.length>0&&d2LL.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahLL[0].innerHTML=`
        Diagonal 1 = ${d1LL}${br}
        Diagonal 2 = ${d2LL}${br}${br}
        Luas = ½ x Diagonal 1 x Diagonal 2${br}
        ${luas} = ½ x ${d1LL} x ${d2LL} ${br}
        ${luas} = ½ x ${d1LL*d2LL} ${br}
        ${luas} = ${lLL} ${br}`
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahLL")[0].innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });    
}

//KUBUS

const sisiKubus= document.getElementById('sisiKubus')
const volumeKubus= document.getElementById('volumeKubus')
const luasKubus=document.querySelector('#luasKubus')
const langkahKubus=document.querySelector('.langkahKubus')

if(sisiKubus){
    sisiKubus.addEventListener('input',function(){
        const sKubus= sisiKubus.value;
        const vKubus=sKubus**3
        const lKubus=(sKubus**2)*6
        volumeKubus.innerHTML=vKubus
        luasKubus.innerHTML=lKubus
        if (sKubus.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahKubus.innerHTML=`
        Sisi = ${sKubus}${br}${br}
        Volume = S x S x S ${br}
        ${volume} = ${sKubus} x ${sKubus} x ${sKubus} ${br}
        ${volume} = ${vKubus} ${br}
        Luas Permukaan = (S x S) x 6 ${br}
        ${luasPer} = (${sKubus} x ${sKubus}) x 6 ${br}
        ${luasPer} = ${sKubus**2} x 6 ${br}
        ${luasPer} = ${lKubus} `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahKubus").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//BALOK

const PanjangBalok=document.getElementById('panjangBalok')
const LebarBalok=document.getElementById('lebarBalok')
const TinggiBalok=document.getElementById('tinggiBalok')
const volumeBalok=document.getElementById('volumeBalok')
const luasBalok=document.getElementById('luasBalok')
const langkahBalok=document.querySelector('.langkahBalok')
if(PanjangBalok){
    PanjangBalok&&LebarBalok&&TinggiBalok.addEventListener('input',function(){
        const panBalok=PanjangBalok.value
        const lebBalok=LebarBalok.value
        const tiBalok=TinggiBalok.value
        const volBalok=panBalok*tiBalok*lebBalok
        const lBalok=(lebBalok*tiBalok)*2+(tiBalok*panBalok)*2+(panBalok*lebBalok)*2
        volumeBalok.innerHTML=volBalok
        luasBalok.innerHTML=lBalok
        if (panBalok.length>0&&lebBalok.length>0&&tiBalok.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahBalok.innerHTML=`
        Panjang = ${panBalok}${br}
        Lebar &nbsp &nbsp= ${lebBalok}${br}
        Tinggi &nbsp = ${tiBalok}${br}${br}
        Volume = P x L x T ${br}
        ${volume} = ${panBalok} x ${lebBalok} x ${tiBalok} ${br}
        ${volume} = ${volBalok} ${br}
        Luas Permukaan = ((P x L) + (P x T) + (T x L)) x 2 ${br}
        ${luasPer} = ((${panBalok} x ${lebBalok}) + (${panBalok} x ${tiBalok}) + (${tiBalok} x ${lebBalok})) x 2 ${br}
        ${luasPer} = (${panBalok*lebBalok} + ${panBalok*tiBalok} + ${tiBalok*lebBalok}) x 2 ${br}
        ${luasPer} = ${panBalok*lebBalok + panBalok*tiBalok + tiBalok*lebBalok} x 2 ${br}
        ${luasPer} = ${lBalok} `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahBalok").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//KERUCUT
const jjKerucut=document.getElementById('jjKerucut')
const tinggiKerucut=document.getElementById('tinggiKerucut')
const volumeKerucut=document.getElementById('volumeKerucut')
const luasKerucut=document.getElementById('luasKerucut')
const langkahKerucut=document.querySelector('.langkahKerucut')
if(jjKerucut){
    jjKerucut&&tinggiKerucut.addEventListener('input',function(){
        const jarijariKerucut= jjKerucut.value
        let phi;
        if (jarijariKerucut%7==0){
            phi=22/7
            pi = '22/7'
        }
        else{
            phi=3.14
            pi='3,14'
        }
        const tiKerucut=tinggiKerucut.value
        const vKerucut=phi*(jarijariKerucut**2)*tiKerucut/3
        const sisiMiring=Number(Math.sqrt(jarijariKerucut**2+(tiKerucut**2)))
        const lKerucut= phi * jarijariKerucut * (Number(jarijariKerucut)+sisiMiring)
        volumeKerucut.innerHTML=vKerucut
        luasKerucut.innerHTML=lKerucut
        if (jarijariKerucut.length>0&&tiKerucut.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahKerucut.innerHTML=`
        Jari Jari = ${jarijariKerucut}${br}
        Tinggi &nbsp = ${tiKerucut}${br} ${br}
        Volume = ⅓ x π x r² x t ${br}
        ${volume} = ⅓ x ${pi} x ${jarijariKerucut}² x ${tiKerucut} ${br}
        ${volume} = ⅓ x ${pi} x ${jarijariKerucut**2} x ${tiKerucut} ${br}
        ${volume} = ${vKerucut} ${br}
        Luas Permukaan = π x r x (r + s) ${br}
        ${luasPer} = ${pi} x ${jarijariKerucut} x (${jarijariKerucut} + √r² + t²) ${br}
        ${luasPer} = ${pi} x ${jarijariKerucut} x (${jarijariKerucut} + √${jarijariKerucut}² + ${tiKerucut}²) ${br}
        ${luasPer} = ${pi} x ${jarijariKerucut} x (${jarijariKerucut} + √${jarijariKerucut**2} +${tiKerucut**2}) ${br}
        ${luasPer} = ${pi} x ${jarijariKerucut} x (${jarijariKerucut} + √${jarijariKerucut**2+tiKerucut**2}) ${br}
        ${luasPer} = ${pi} x ${jarijariKerucut} x (${jarijariKerucut} + ${sisiMiring}) ${br}
        ${luasPer} = ${pi} x ${jarijariKerucut} x ${Number(jarijariKerucut)+Number(sisiMiring)} ${br}
        ${luasPer} = ${lKerucut}
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahKerucut").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//TABUNG

const jjTabung=document.getElementById('jjTabung')
const tinggiTabung=document.getElementById('tinggiTabung')
const volumeTabung=document.getElementById('volumeTabung')
const luasTabung=document.getElementById('luasTabung')
const langkahTabung=document.querySelector('.langkahTabung')
if(jjTabung){
    jjTabung&&tinggiTabung.addEventListener('input',function(){
        const jarijariTabung= jjTabung.value
        let phi;
        if (jarijariTabung%7==0){
            phi=22/7
            pi='22/7'
        }
        else{
            phi=3.14
            pi='3,14'
        }
        const tiTabung=tinggiTabung.value
        const vTabung=phi*(jarijariTabung**2)*tiTabung
        const lTabung= 2*phi*jarijariTabung*(Number(jarijariTabung)+Number(tiTabung))
        volumeTabung.innerHTML=vTabung
        luasTabung.innerHTML=lTabung
        if (jarijariTabung.length>0&&tiTabung.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahTabung.innerHTML=`
        Jari Jari = ${jarijariTabung}${br}
        Tinggi &nbsp = ${tiTabung}${br}${br}
        Volume = π x r² x t ${br}
        ${volume} = ${pi} x ${jarijariTabung}² x ${tiTabung} ${br}
        ${volume} = ${pi} x ${jarijariTabung**2} x ${tiTabung} ${br}
        ${volume} = ${pi} x ${jarijariTabung**2*tiTabung} ${br}
        ${volume} = ${vTabung}${br}
        Luas Permukaan = 2 x π x r x (r + t) ${br}
        ${luasPer} = 2 x ${pi} x ${jarijariTabung} x (${jarijariTabung} + ${tiTabung}) ${br}
        ${luasPer} = 2 x ${pi} x ${jarijariTabung} x ${Number(jarijariTabung)+Number(tiTabung)}${br}
        ${luasPer} = ${lTabung}       
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahTabung").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//BOLA

const jjBola=document.getElementById('jjBola')
const volumeBola=document.getElementById('volumeBola')
const luasBola=document.getElementById('luasBola')
const langkahBola=document.querySelector('.langkahBola')
if(jjBola){
    jjBola.addEventListener('input',function(){
        let phi;
        const JJBola= jjBola.value;
        if (JJBola%7==0){
            phi=22/7
            pi="22/7"
        }
        else{
            phi=3.14
            pi="3,14"
        }
        const vBola=phi*(JJBola**3)*4/3
        const lBola=phi*4*(JJBola**2)
        volumeBola.innerHTML=vBola
        luasBola.innerHTML=lBola
        if (JJBola.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahBola.innerHTML=`
        Jari Jari = ${JJBola}${br}${br}
        Volume = 4⁄3 x π x r³ ${br}
        ${volume} = 4⁄3 x ${pi} x ${JJBola}³ ${br}
        ${volume} = 4⁄3 x ${pi} x ${JJBola**3}${br}
        ${volume} = ${vBola}${br}
        Luas Permukaan = 4 x π x r²${br}
        ${luasPer} = 4 x ${pi} x ${JJBola}²${br}
        ${luasPer} = 4 x ${pi} x ${JJBola**2}${br}
        ${luasPer} = ${lBola}        
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahBola").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//PRISMA

const alasPrisma=document.getElementById('alasPrisma')
const tinggiSegPris=document.getElementById('tinggiSegPrisma')
const tinggiPrisma=document.getElementById('tinggiPrisma')
const volumePrisma=document.getElementById('volumePrisma')
const luasPrisma=document.getElementById('luasPrisma')
const langkahPrisma = document.querySelector(".langkahPrisma")
if(alasPrisma){
    alasPrisma&&tinggiSegPris&&tinggiPrisma.addEventListener('input',function(){
        const alaPrisma= alasPrisma.value;
        const tiSeg=tinggiSegPris.value;
        const tiPrisma=tinggiPrisma.value;
        const vPrisma=(alaPrisma*tiSeg/2)*tiPrisma
        volumePrisma.innerHTML=vPrisma
        if (alaPrisma.length>0&&tiSeg.length>0&&tiPrisma.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahPrisma.innerHTML=`
        Alas &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp= ${alaPrisma}${br}
        Tinggi Alas &nbsp&nbsp&nbsp = ${tiSeg}${br}
        Tinggi Prisma = ${tiPrisma}${br}${br}
        Volume = Luas alas x Tinggi ${br}
        ${volume} = (½ x a x t) x T ${br}
        ${volume} = (½ x ${alaPrisma} x ${tiSeg}) x ${tiPrisma}${br}
        ${volume} = (½ x ${alaPrisma*tiSeg}) x ${tiPrisma}${br}
        ${volume} = ${alaPrisma*tiSeg/2} x ${tiPrisma}${br}
        ${volume} = ${vPrisma}        
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahPrisma").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

//LIMAS

const sisiLimas=document.getElementById('sisiLimas')
const tinggiLimas=document.getElementById('tinggiLimas')
const volumeLimas=document.getElementById('volumeLimas')
const luasLimas=document.getElementById('luasLimas')
const langkahLimas = document.querySelector('.langkahLimas')
if(sisiLimas){
    sisiLimas&&tinggiLimas.addEventListener('input',function(){
        const sLimas=sisiLimas.value
        const tiLimas=tinggiLimas.value
        const tiSegLim=Math.sqrt((sLimas/2)**2+(tiLimas**2))
        const vLimas=((sLimas**2)*tiLimas)/3
        const lLimas= (sLimas**2)+(4*(sLimas*tiSegLim/2))
        volumeLimas.innerHTML=vLimas
        luasLimas.innerHTML=lLimas
        if (sLimas.length>0&&tiLimas.length>0){
            tombolLangkah.removeAttribute("disabled")
        }else{
            tombolLangkah.setAttribute("disabled","disabled")
        }
        langkahLimas.innerHTML=`
        Sisi &nbsp &nbsp&nbsp = ${sLimas}${br}
        Tinggi = ${tiLimas}${br}${br}
        Volume = ⅓ x Luas Alas x Tinggi ${br}
        ${volume} = ⅓ x ${sLimas}² x ${tiLimas}${br}
        ${volume} = ⅓ x ${sLimas**2} x ${tiLimas}${br}
        ${volume} = ⅓ x ${sLimas**2*tiLimas}${br}
        ${volume} = ${vLimas}${br}
        Luas Permukaan = Luas Alas + Jumlah luas sisi tegak${br}
        ${luasPer} = S² + (4 x (½ x a x t))${br}
        ${luasPer} = ${sLimas}² + (4 x (½ x ${sLimas} x √(${sLimas} : 2)² + ${tiLimas}²))${br}
        ${luasPer} = ${sLimas**2} + (4 x (½ x ${sLimas} x √${(sLimas/2)**2} + ${tiLimas**2}))${br}
        ${luasPer} = ${sLimas**2} + (4 x (½ x ${sLimas} x √${(sLimas/2)**2+tiLimas**2}))${br}
        ${luasPer} = ${sLimas**2} + (4 x (½ x ${sLimas} x ${tiSegLim}))${br}
        ${luasPer} = ${sLimas**2} + (4 x ${sLimas*tiSegLim/2})${br}
        ${luasPer} = ${sLimas**2} + ${sLimas*tiSegLim/2*4}${br}
        ${luasPer} = ${lLimas}    
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahLimas").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    });
}

const sisiBA = document.getElementById('sisiBA')
const sisiCA = document.getElementById('sisiCA')
const hasilsisia = document.getElementById('sisiA')
const langkahSisia= document.querySelector('.langkahSisia')
if (sisiBA){
    sisiBA&&sisiCA.addEventListener('input',function(){
        const sisiba=sisiBA.value;
        const sisica=sisiCA.value;
        const sisiaa= Math.sqrt((sisica**2)-(sisiba**2))
        hasilsisia.innerHTML=sisiaa
        const nan=isNaN(sisiaa)
        if (nan){
           alert("Sisi b tidak bisa lebih besar dari sisi c")
        }
        if(sisiba.length>0&&sisica.length>0){
            tombolLangkah.removeAttribute('disabled')
        }else{
            tombolLangkah.setAttribute('disabled','disabled')
        }
        langkahSisia.innerHTML=`
        Sisi a = √Sisi c² - Sisi b² ${br}
        ${pytha} = √${sisica}² - ${sisiba}²${br}
        ${pytha} = √${sisica**2} - ${sisiba**2}${br}
        ${pytha} = √${sisica**2-sisiba**2}${br}
        ${pytha} = ${sisiaa}
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahSisia").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    })
}

const sisiAB = document.getElementById('sisiAB')
const sisiCB = document.getElementById('sisiCB')
const hasilsisib = document.getElementById('sisiB')
const langkahSisib= document.querySelector('.langkahSisib')
if (sisiAB){
    sisiAB&&sisiCB.addEventListener('input',function(){
        const sisiab=sisiAB.value;
        const sisicb=sisiCB.value;
        const sisibb= Math.sqrt((sisicb**2)-(sisiab**2))
        hasilsisib.innerHTML=sisibb
        const nan=isNaN(sisibb)
        if (nan){
           alert("Sisi a tidak bisa lebih besar dari sisi c")
        }
        if(sisiab.length>0&&sisicb.length>0){
            tombolLangkah.removeAttribute('disabled')
        }else{
            tombolLangkah.setAttribute('disabled','disabled')
        }
        langkahSisib.innerHTML=`
        Sisi b = √Sisi c² - Sisi a² ${br}
        ${pytha} = √${sisicb}² - ${sisiab}²${br}
        ${pytha} = √${sisicb**2} - ${sisiab**2}${br}
        ${pytha} = √${sisicb**2-sisiab**2}${br}
        ${pytha} = ${sisibb}
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahSisib").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    })
}

const sisiAC = document.getElementById('sisiAC')
const sisiBC = document.getElementById('sisiBC')
const hasilsisic = document.getElementById('sisiC')
const langkahSisic= document.querySelector('.langkahSisic')
if (sisiAC){
    sisiAC&&sisiBC.addEventListener('input',function(){
        const sisiac=sisiAC.value;
        const sisibc=sisiBC.value;
        const sisicc= Math.sqrt((sisiac**2)+(sisibc**2))
        hasilsisic.innerHTML=sisicc
        if(sisiac.length>0&&sisibc.length>0){
            tombolLangkah.removeAttribute('disabled')
        }else{
            tombolLangkah.setAttribute('disabled','disabled')
        }
        langkahSisic.innerHTML=`
        Sisi c = √Sisi a² + Sisi b² ${br}
        ${pytha} = √${sisiac}² + ${sisibc}²${br}
        ${pytha} = √${sisiac**2} + ${sisibc**2}${br}
        ${pytha} = √${sisiac**2+sisibc**2}${br}
        ${pytha} = ${sisicc}
        `
        tombolCopy.addEventListener('click',()=>{
            let copyText = document.querySelector(".langkahSisic").innerHTML;
            copyTextClean= copyText.replace(/&nbsp/g," ");
            copyTextClean1= copyTextClean.replace(/<br>/g,"");
            copyTextClean2= copyTextClean1.replace(/;/g,"");
            navigator.clipboard.writeText(copyTextClean2).innerHTML; 
        })
    })
}
