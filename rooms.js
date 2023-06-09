export { rooms };

const rooms = {
    "room_start": { image:"0_01.jpg", silent:true, playNextSong:false, preloadSaloon: 0,
        areas:[]},
    "room_0_01": { image:"0_01.jpg", silent:true,
        areas:[
            {desc:"vrata",top:"70%",left:"46.5%",width:"10%",height:"25%",cursor:"up",actions:[{action:"setRoom",room:"room_0_02"}]},
            {desc:"banner",top:"31%",left:"61%",width:"5%",height:"26%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_DP"}]},
            {desc:"banner",top:"31%",left:"34%",width:"6%",height:"26%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_DP"}]},
            {desc:"balkon",top:"43%",left:"43%",width:"16%",height:"15%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_01_BALK"}]}]},
    "room_0_02": {image:"0_02.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"21%",width:"50%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_01"}]},
            {desc:"vrata",top:"41%",left:"47.5%",width:"10%",height:"44%",cursor:"up",actions:[{action:"setRoom",room:"room_0_03",clearChoices:true}]},
            {desc:"ploča",top:"44%",left:"72%",width:"10%",height:"12%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_ZB"}]}]},
    "room_0_03": {image:"0_03.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_02"},{action:"setChat",chat:"chat_0_NO"}]},
            {desc:"vrata",top:"24%",left:"34%",width:"10%",height:"44%",cursor:"up",actions:[{action:"setRoom",room:"room_0_04_closed"}]},
            {desc:"vrata",top:"24%",left:"54%",width:"10%",height:"44%",cursor:"up",actions:[{action:"setRoom",room:"room_0_04_closed"}]},
            {desc:"ekran",top:"23%",left:"10%",width:"21%",height:"22%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_03_EKR"}]}]},
    "room_0_04_closed": { image:"0_04.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_03"}]},
            {desc:"vrata",top:"29%",left:"40%",width:"14%",height:"47%",cursor:"up",actions:[{action:"setRoom",room:"room_0_05_closed"}]},
            {desc:"mapa",top:"41%",left:"79%",width:"21%",height:"32%",cursor:"right",actions:[{action:"setRoom",room:"room_0_06_closed"},{action:"setChatAndClearHistory",chat:"chat_0_06"}]}]},
    "room_0_04_open": { image:"0_04.jpg", 
        areas:[
            {desc:"vrata",top:"29%",left:"40%",width:"14%",height:"47%",cursor:"up",actions:[{action:"setRoom",room:"room_0_05_open"}]},
            {desc:"mapa",top:"41%",left:"79%",width:"21%",height:"32%",cursor:"right",actions:[{action:"setRoom",room:"room_0_06_open"}]}]}, 
    "room_0_05_closed": { image:"0_05.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_04_closed"}]},
            {desc:"vrata",top:"16%",left:"30%",width:"37%",height:"69%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_ZV"}]}]},
    "room_0_05_open": { image:"0_07.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_04_open"}]},
            {desc:"vrata",top:"18%",left:"33%",width:"25%",height:"63%",cursor:"up",actions:[{action:"setRoom",room:"room_0_08"}]}]},
    "room_0_06_closed": { image:"0_06.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"disabled",actions:[{action:"setChat",chat:"chat_0_06_noback"}]},
            {desc:"zona1",top:"10%",left:"17%",width:"13%",height:"23%",cursor:"hand",actions:[{action:"drainBattery",amount:1},{action:"animateLose"},{action:"setChat",chat:"chat_0_06_lose"}]},
            {desc:"zona2",top:"17%",left:"31%",width:"9%",height:"17%",cursor:"hand",actions:[{action:"drainBattery",amount:1},{action:"animateLose"},{action:"setChat",chat:"chat_0_06_lose4"}]},
            {desc:"zona3",top:"11%",left:"42.5%",width:"13%",height:"24%",cursor:"hand",actions:[{action:"drainBattery",amount:1},{action:"animateLose"},{action:"setChat",chat:"chat_0_06_lose2"}]},
            {desc:"zona4",top:"17%",left:"56%",width:"9%",height:"18%",cursor:"hand",actions:[{action:"animateWin"},{action:"setChat",chat:"chat_0_06_win"},{action:"setRoom",room:"room_0_06_open",clearChoices:true}]},
            {desc:"zona5",top:"12%",left:"67%",width:"11%",height:"23%",cursor:"hand",actions:[{action:"drainBattery",amount:1},{action:"animateLose"},{action:"setChat",chat:"chat_0_06_lose3"}]},]},
    "room_0_06_open": {image:"0_06.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_04_open"},]}]},
    "room_0_08": { image:"0_08.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_05_open"}]},
            {desc:"vrata",top:"31%",left:"49.5%",width:"10%",height:"44%",cursor:"up",actions:[{action:"setChat",chat:"chat_0_09"},{action:"setRoom",room:"room_0_09"}]},
            {desc:"vrata",top:"28%",left:"35.5%",width:"8%",height:"55%",cursor:"left",actions:[{action:"setChat",chat:"chat_0_10"},{action:"setRoom",room:"room_0_10"}]},
            {desc:"ploča",top:"32%",left:"19%",width:"7%",height:"10%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_08_EKR"}]}]},
    "room_0_09": { image:"0_09.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_08"}]},
            {desc:"vrata",top:"16%",left:"41%",width:"10%",height:"36%",cursor:"up",actions:[{action:"setRoom",room:"room_0_11"}]}]},    
    "room_0_10": { image:"0_10.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_08"}]},
            {desc:"vrata",top:"28%",left:"42%",width:"9%",height:"27%",cursor:"hand",actions:[{action:"setChat",chat:"chat_0_10_vrata"}]}]},
    "room_0_11": { image:"0_11.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_09"}]},
            {desc:"vrata",top:"0%",left:"41%",width:"16%",height:"34%",cursor:"up",actions:[{action:"setRoom",room:"room_0_12"}]}]},
    "room_0_12": { image:"0_12.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_11"}]},
            {desc:"vrata",top:"25%",left:"31.5%",width:"15%",height:"27%",cursor:"up",actions:[{action:"setRoom",room:"room_0_13"}]}]},
    "room_0_13": { image:"0_13.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_12"}]},
            {desc:"vrata",top:"26%",left:"46.5%",width:"8%",height:"29%",cursor:"right",actions:[{action:"setChat",chat:"chat_0_14"},{action:"setRoom",room:"room_0_14"}]}]},   
    "room_0_14": { image:"0_14.jpg", preloadSaloon: 1,
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_0_13"}]},
            {desc:"vrata",top:"3%",left:"43%",width:"16%",height:"73%",cursor:"up",actions:[{action:"setRoom",room:"room_1_01"},{action:"setChatAndClearHistory",chat:"chat_1_01",clearChoices:true}]}]}, 
    "room_1_01": { image:"1_01.jpg", playNextSong: true,
        areas:[
            {desc:"slika",top:"6%",left:"78%",width:"22%",height:"66%",cursor:"right",actions:[{action:"setRoom",room:"room_1_s1"}]}, 
            {desc:"krevet",top:"48%",left:"0%",width:"35%",height:"36%",cursor:"left",actions:[{action:"setRoom",room:"room_1_k1"}]},
            {desc:"ogledalo",top:"18%",left:"35%",width:"8%",height:"37%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o1"}]}]}, 
    "room_1_s1": { image:"1_s1.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_01"}]},
            {desc:"slika",top:"2%",left:"36%",width:"26%",height:"42%",cursor:"up",actions:[{action:"setRoom",room:"room_1_s5"}]}, 
            {desc:"stol",top:"53%",left:"30%",width:"35%",height:"30%",cursor:"up",actions:[{action:"setRoom",room:"room_1_s3"}]},
            {desc:"plocica",top:"92%",left:"0%",width:"13%",height:"8%",cursor:"left",actions:[{action:"setRoom",room:"room_1_s2"}]},
            {desc:"vrata_l",top:"4%",left:"0%",width:"13%",height:"78%",cursor:"disabled",actions:[{action:"setChat",chat:"chat_1_salon2"}]},
            {desc:"vrata_d",top:"7%",left:"87%",width:"13%",height:"78%",cursor:"disabled",actions:[{action:"setChat",chat:"chat_1_salon2"}]}]},
    "room_1_s2": { image:"1_s2.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_s1"}]},
            {desc:"desno",top:"7%",left:"90%",width:"10%",height:"64%",cursor:"right",actions:[{action:"setRoom",room:"room_1_s1"}]},
            {desc:"ploča1",top:"24%",left:"30%",width:"22%",height:"54%",cursor:"hand",actions:[]},
            {desc:"ploča2",top:"24%",left:"57%",width:"22%",height:"55%",cursor:"hand",actions:[]}]}, 
    "room_1_s3": { image:"1_s3.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_s1"}]},
            {desc:"detalj",top:"45%",left:"43%",width:"14%",height:"26%",cursor:"up",actions:[{action:"setRoom",room:"room_1_s4"}]}]}, 
    "room_1_s4": { image:"1_s4.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_s3"}]},
            {desc:"detalj",top:"14%",left:"38%",width:"24%",height:"55%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_s4_detail"}]}]}, 
    "room_1_s5": { image:"1_s5.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_s1"}]},
            {requisite:"crusader",desc:"armida",top:"18%",left:"26%",width:"14%",height:"42%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_armida"}]},
            {requisite:"crusader",desc:"križar",top:"16%",left:"64%",width:"14%",height:"55%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_11quest"}]},
            {desc:"robovi",top:"52%",left:"48%",width:"13%",height:"20%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_s5_detail1"}]}/*,
        {desc:"moda",top:"38%",left:"66%",width:"12%",height:"36%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_s5_detail2"}]}*/]},
    "room_1_o1": { image:"1_o1.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_01"}]},
            {desc:"ogledalo",top:"4%",left:"41%",width:"13%",height:"51%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o8"}]}, 
            {desc:"komoda",top:"57%",left:"36%",width:"22%",height:"30%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o2"}]},
            {desc:"krevet",top:"69%",left:"0%",width:"14%",height:"31%",cursor:"left",actions:[{action:"setRoom",room:"room_1_k1"}]}]},
    "room_1_o2": { image:"1_o2.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o1"}]},
            {desc:"gore",top:"7%",left:"28%",width:"49%",height:"12%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o4"}]}, 
            {desc:"front",top:"26%",left:"31%",width:"40%",height:"51%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o3"}]}, 
            {desc:"desno",top:"19%",left:"72%",width:"6%",height:"47%",cursor:"right",actions:[{action:"setRoom",room:"room_1_o6"}]},
            {desc:"lijevo",top:"19%",left:"24%",width:"6%",height:"47%",cursor:"left",actions:[{action:"setRoom",room:"room_1_o5"}]}]},
    "room_1_o3": { image:"1_o3.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o2"}]},
            {desc:"desno",top:"9%",left:"92%",width:"8%",height:"47%",cursor:"right",actions:[{action:"setRoom",room:"room_1_o6"}]},
            {requisite:"bug_hunt",desc:"leptir",top:"2%",left:"43%",width:"3%",height:"6%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_o3_leptir"}]},
            {desc:"lijevo",top:"9%",left:"12%",width:"8%",height:"47%",cursor:"left",actions:[{action:"setRoom",room:"room_1_o5"}]}]},
    "room_1_o4": { image:"1_o4.jpg", 
        areas:[
            {requisite:"butterfly",desc:"leptir",top:"17%",left:"31%",width:"5%",height:"7%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_08a"}]},
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o2"}]}]},
    "room_1_o5": { image:"1_o5.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o2"}]},
            {desc:"ploča",top:"77%",left:"90%",width:"9%",height:"15%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o7"}]}, 
            {desc:"front",top:"19%",left:"76%",width:"19%",height:"42%",cursor:"right",actions:[{action:"setRoom",room:"room_1_o3"}]}]},
    "room_1_o6": { image:"1_o6.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o2"}]},
            {requisite:"bug_hunt",desc:"detalj",top:"25%",left:"69%",width:"6%",height:"10%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_o6_detail"}]},
            {desc:"front",top:"6%",left:"15%",width:"20%",height:"39%",cursor:"left",actions:[{action:"setRoom",room:"room_1_o3"}]}]},
    "room_1_o7": { image:"1_o7.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o2"}]},
            {desc:"ploča1",top:"13%",left:"29%",width:"23%",height:"58%",cursor:"hand",actions:[]},
            {desc:"ploča2",top:"13%",left:"57%",width:"23%",height:"59%",cursor:"hand",actions:[]}]},                           
    "room_1_o8": { image:"1_o8.jpg", 
        areas:[
            {desc:"natrag",top:"89%",left:"15%",width:"41%",height:"11%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o1"}]},
            {desc:"gore",top:"3%",left:"40%",width:"13%",height:"19%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o9"}]}, 
            {desc:"desno",top:"77%",left:"56%",width:"9%",height:"19%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o10"}]}, 
            {desc:"dole",top:"77%",left:"38%",width:"15%",height:"11%",cursor:"up",actions:[{action:"setRoom",room:"room_1_o11"}]}]},
    "room_1_o9": { image:"1_o9.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o8"}]},
            {desc:"detalj",top:"34%",left:"40%",width:"21%",height:"36%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_o9_detail"}]}]},
    "room_1_o10": { image:"1_o10.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o8"}]},
            {desc:"detalj",top:"34%",left:"40%",width:"21%",height:"36%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_10_detail"}]}]},
    "room_1_o11": { image:"1_o11.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_o8"}]}]},
    "room_1_k1":{ image:"1_k1.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_01"}]},
            {desc:"slika",top:"1%",left:"42%",width:"18%",height:"28%",cursor:"up",actions:[{action:"setRoom",room:"room_1_k4"}]}, 
            {desc:"zaglavlje",top:"37%",left:"37%",width:"27%",height:"15%",cursor:"up",actions:[{action:"setRoom",room:"room_1_k3"}]}, 
            {desc:"front",top:"70%",left:"29%",width:"43%",height:"14%",cursor:"up",actions:[{action:"setRoom",room:"room_1_k2"}]},
            {desc:"kantunalić_l",top:"51%",left:"30%",width:"7%",height:"17%",cursor:"up",actions:[{action:"setRoom",room:"room_1_ka1"}]},
            {desc:"kantunalić_d",top:"51%",left:"65%",width:"7%",height:"17%",cursor:"up",actions:[{action:"setRoom",room:"room_1_kb1"}]},
            {desc:"ploča",top:"94%",left:"82%",width:"8%",height:"6%",cursor:"right",actions:[{action:"setRoom",room:"room_1_k5"}]},
            {desc:"ploča",top:"94%",left:"11%",width:"8%",height:"6%",cursor:"left",actions:[{action:"setRoom",room:"room_1_k5"}]}]},
    "room_1_k2":{ image:"1_k2.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_k1"}]},
            {requisite:"bug_hunt",desc:"leptir1",top:"35%",left:"20%",width:"6%",height:"16%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_k2_leptir1"}]},
            {requisite:"bug_hunt",desc:"leptir2",top:"35%",left:"72%",width:"8%",height:"9%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_k2_leptir2"}]},
            {requisite:"bug_hunt",desc:"leptir3",top:"68%",left:"88%",width:"4%",height:"6%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_k2_leptir3"},{action:"clearProgress"}]}]},
    "room_1_k3":{ image:"1_k3.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_k1"}]},
            {requisite:"bug_hunt",desc:"leptir",top:"45%",left:"34%",width:"34%",height:"16%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_k3_leptir"}]}]},
    "room_1_k4":{ image:"1_k4.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_k1"}]},
            {desc:"djeca",top:"37%",left:"26%",width:"13%",height:"19%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_ka4_detail1"}]},
            {desc:"grudi",top:"38%",left:"53%",width:"10%",height:"9%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_ka4_detail2"}]},
            {desc:"janje",top:"64%",left:"68%",width:"9%",height:"22%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_ka4_detail3"}]}]},
    "room_1_k5":{ image:"1_k5.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_k1"}]}]},
    "room_1_ka1":{ image:"1_ka1.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_k1"}]},
            {desc:"lijevo",top:"16%",left:"20%",width:"7%",height:"64%",cursor:"left",actions:[{action:"setRoom",room:"room_1_ka2"}]}, 
            {desc:"desno",top:"19%",left:"49%",width:"6%",height:"55%",cursor:"right",actions:[{action:"setRoom",room:"room_1_ka4"}]}, 
            {desc:"gore",top:"4%",left:"22%",width:"29%",height:"10%",cursor:"up",actions:[{action:"setRoom",room:"room_1_ka3"}]}]},
    "room_1_ka2":{ image:"1_ka2.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_ka1"}]},
            {desc:"front",top:"6%",left:"53%",width:"8%",height:"67%",cursor:"right",actions:[{action:"setRoom",room:"room_1_ka1"}]}, 
            {requisite:"bug_hunt",desc:"leptir",top:"25%",left:"38%",width:"4%",height:"11%",cursor:"hand",actions:[{action:"setChat",chat:"chat_1_ka2_leptir"}]}, 
            {desc:"gore",top:"0%",left:"13%",width:"46%",height:"5%",cursor:"up",actions:[{action:"setRoom",room:"room_1_ka3"}]}]}, 
    "room_1_ka3":{ image:"1_ka3.jpg", 
        areas:[
            {desc:"natrag",top:"77%",left:"16%",width:"45%",height:"23%",cursor:"back",actions:[{action:"setRoom",room:"room_1_ka1"}]}]}, 
    "room_1_ka4":{ image:"1_ka4.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_ka1"}]},
            {desc:"lijevo",top:"13%",left:"11%",width:"26%",height:"67%",cursor:"left",actions:[{action:"setRoom",room:"room_1_ka1"}]}]},
    "room_1_kb1":{ image:"1_kb1.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_k1"}]},
            {desc:"lijevo",top:"16%",left:"61%",width:"7%",height:"64%",cursor:"right",actions:[{action:"setRoom",room:"room_1_kb2"}]}, 
            {desc:"desno",top:"19%",left:"31%",width:"6%",height:"60%",cursor:"left",actions:[{action:"setRoom",room:"room_1_kb4"}]}, 
            {desc:"gore",top:"4%",left:"35%",width:"29%",height:"10%",cursor:"up",actions:[{action:"setRoom",room:"room_1_kb3"}]}]},
    "room_1_kb2":{ image:"1_kb2.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_kb1"}]},
            {desc:"lijevo",top:"24%",left:"23%",width:"13%",height:"62%",cursor:"left",actions:[{action:"setRoom",room:"room_1_kb1"}]},
            {desc:"gore",top:"0%",left:"25%",width:"49%",height:"24%",cursor:"up",actions:[{action:"setRoom",room:"room_1_kb3"}]}]}, 
    "room_1_kb3":{ image:"1_kb3.jpg", 
        areas:[
            {desc:"natrag",top:"85%",left:"20%",width:"60%",height:"15%",cursor:"back",actions:[{action:"setRoom",room:"room_1_kb1"}]}]}, 
    "room_1_kb4":{ image:"1_kb4.jpg", 
        areas:[
            {desc:"natrag",top:"87%",left:"43%",width:"50%",height:"13%",cursor:"back",actions:[{action:"setRoom",room:"room_1_kb1"}]},
            {desc:"desno",top:"36%",left:"76%",width:"24%",height:"51%",cursor:"right",actions:[{action:"setRoom",room:"room_1_kb1"}]},
            {desc:"gore",top:"0%",left:"47%",width:"49%",height:"28%",cursor:"up",actions:[{action:"setRoom",room:"room_1_kb3"}]}]},      
};




