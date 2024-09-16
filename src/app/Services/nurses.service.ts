import { Injectable } from '@angular/core';
import { Nurse } from '../Models/nurse/nurse.module';
import { SweetAlertService } from './sweet-alert.service';
import { NursesByDepartementService } from './nurses-by-departement.service';

@Injectable({
  providedIn: 'root'
})
export class NursesService {
 

nurses:Nurse[]=[]
currentNurse:Nurse=new Nurse()

  constructor() {
    this.nurses[0]={id:"304741556",fName:"esther",lName:"schayek",phoneNumber:"0533198825",statu:"bahir",vetek:13}
    this.nurses[1]={id:"205741556",fName:"yaakov",lName:"bitton",phoneNumber:"0530008825",statu:"bahir",vetek:7}
    this.nurses[2]={id:"305671556",fName:"haya",lName:"benzaken",phoneNumber:"0529998825",statu:"basic",vetek:2}
    this.nurses[3]={id:"204741544",fName:"moshe",lName:"levi",phoneNumber:"0588198725",statu:"bahir",vetek:20}
    this.nurses[4]={id:"385742556",fName:"ayala",lName:"boura",phoneNumber:"0548498825",statu:"basic",vetek:4}
    this.nurses[5]={id:"301115469",fName:"miryam",lName:"cohen",phoneNumber:"0523198777",statu:"basic",vetek:2}
    this.nurses[6]={id:"300002156",fName:"aharon",lName:"shapiro",phoneNumber:"0548495825",statu:"basic",vetek:5}
    this.nurses[7]={id:"305741556",fName:"mihal",lName:"ahem tov",phoneNumber:"0522198825",statu:"bahir",vetek:37}
    this.nurses[8]={id:"304641556",fName:"tamar",lName:"bashari",phoneNumber:"0544198825",statu:"basic",vetek:7}
    this.nurses[9]={id:"354741556",fName:"simha",lName:"levi",phoneNumber:"0555198825",statu:"bahir",vetek:33}
    this.nurses[10]={id:"304741456",fName:"itshak",lName:"ram",phoneNumber:"0566198825",statu:"basic",vetek:2}
    this.nurses[11]={id:"301441556",fName:"arie",lName:"bourenshtein",phoneNumber:"0577198825",statu:"bahir",vetek:33}
    this.nurses[12]={id:"300741556",fName:"yeouda",lName:"file",phoneNumber:"0588198825",statu:"basic",vetek:3}
    this.nurses[13]={id:"304761556",fName:"avraham",lName:"itshaki",phoneNumber:"0599198825",statu:"bahir",vetek:22}
    this.nurses[14]={id:"311111556",fName:"adassa",lName:"brouk",phoneNumber:"0511198825",statu:"basic",vetek:2}
    this.nurses[15]={id:"306661556",fName:"esty",lName:"feldman",phoneNumber:"0540098825",statu:"bahir",vetek:17}
    this.nurses[16]={id:"304741006",fName:"david",lName:"alevi",phoneNumber:"0550098825",statu:"basic",vetek:7}
    this.nurses[17]={id:"302721556",fName:"yossef",lName:"sharifi",phoneNumber:"0560098825",statu:"bahir",vetek:8}
    this.nurses[18]={id:"205741448",fName:"cohava",lName:"trahtman",phoneNumber:"0570098825",statu:"basic",vetek:6}
    this.nurses[19]={id:"307041556",fName:"avital",lName:"dikanof",phoneNumber:"0580098825",statu:"bahir",vetek:14}
    this.nurses[20]={id:"307141556",fName:"avigail",lName:"niasov",phoneNumber:"0590098825",statu:"basic",vetek:4}
    this.nurses[21]={id:"307841556",fName:"yehiel",lName:"cahan",phoneNumber:"0520098825",statu:"bahir",vetek:11}
    this.nurses[22]={id:"307941556",fName:"menache",lName:"aboutboul",phoneNumber:"0530098825",statu:"basic",vetek:10}
    this.nurses[23]={id:"303041556",fName:"arhel",lName:"dvir",phoneNumber:"0510098825",statu:"bahir",vetek:14}
    this.nurses[24]={id:"303441556",fName:"devora",lName:"dikman",phoneNumber:"0533188825",statu:"basic",vetek:4}
    this.nurses[25]={id:"303021556",fName:"braha",lName:"davidi",phoneNumber:"0533178825",statu:"bahir",vetek:13}
    this.nurses[26]={id:"303031556",fName:"tsipora",lName:"hoder",phoneNumber:"0533168825",statu:"basic",vetek:3}
    this.nurses[27]={id:"303049556",fName:"elhanan",lName:"breher",phoneNumber:"0533158825",statu:"bahir",vetek:11}
    this.nurses[28]={id:"304741589",fName:"yael",lName:"bitton",phoneNumber:"0533148825",statu:"basic",vetek:1}
    this.nurses[29]={id:"304741590",fName:"yohanan",lName:"bentov",phoneNumber:"0533118825",statu:"bahir",vetek:18}
    this.nurses[30]={id:"304749156",fName:"efraim",lName:"maknouz",phoneNumber:"0533198815",statu:"basic",vetek:8}
    this.nurses[31]={id:"304749256",fName:"eva",lName:"yakovzon",phoneNumber:"0533198835",statu:"bahir",vetek:9}
    this.nurses[32]={id:"304749356",fName:"liora",lName:"zeivald",phoneNumber:"0533198836",statu:"basic",vetek:5}
    this.nurses[33]={id:"304741594",fName:"lea",lName:"akerman",phoneNumber:"0533198837",statu:"bahir",vetek:11}
    this.nurses[34]={id:"304741996",fName:"elisha",lName:"cohanim",phoneNumber:"0533198385",statu:"basic",vetek:4}
    this.nurses[35]={id:"304741100",fName:"avishag",lName:"rased",phoneNumber:"0533198395",statu:"bahir",vetek:16}
    this.nurses[36]={id:"304741200",fName:"shmouel",lName:"ifrah",phoneNumber:"0533408825",statu:"basic",vetek:6}
    this.nurses[37]={id:"304741300",fName:"shlomo",lName:"pinto",phoneNumber:"0533194125",statu:"bahir",vetek:9}
    this.nurses[38]={id:"304741400",fName:"liat",lName:"abouhatsira",phoneNumber:"0533194225",statu:"basic",vetek:1}
    this.nurses[39]={id:"304500556",fName:"yifat",lName:"disingov",phoneNumber:"0533198435",statu:"bahir",vetek:10}
    this.nurses[40]={id:"304600556",fName:"israel",lName:"shihman",phoneNumber:"0533144825",statu:"basic",vetek:3}
    this.nurses[41]={id:"304700556",fName:"refael",lName:"daskal",phoneNumber:"0533198455",statu:"bahir",vetek:14}
    this.nurses[42]={id:"304800556",fName:"mihael",lName:"shabari",phoneNumber:"0533146825",statu:"bahir",vetek:12}
    this.nurses[43]={id:"304900556",fName:"anael",lName:"yehezkel",phoneNumber:"0533198847",statu:"basic",vetek:3}
    this.nurses[44]={id:"304741900",fName:"mihal",lName:"abergel",phoneNumber:"0533194825",statu:"basic",vetek:3}
    this.nurses[45]={id:"304741110",fName:"sarah",lName:"acohen",phoneNumber:"0533198495",statu:"bahir",vetek:22}
    this.nurses[46]={id:"222741200",fName:"clodette",lName:"bit",phoneNumber:"0535098825",statu:"bahir",vetek:11}
    this.nurses[47]={id:"301210556",fName:"juliette",lName:"bitanski",phoneNumber:"0513198825",statu:"basic",vetek:2}
    this.nurses[48]={id:"301300556",fName:"yvette",lName:"twersky",phoneNumber:"0535298825",statu:"basic",vetek:2}
    this.nurses[49]={id:"304140056",fName:"yoheved",lName:"rabinovits",phoneNumber:"0559198825",statu:"bahir",vetek:12}
    this.nurses[50]={id:"304715006",fName:"efrat",lName:"moushkovski",phoneNumber:"0533160825",statu:"bahir",vetek:15}
    this.nurses[51]={id:"304716006",fName:"dina",lName:"haim",phoneNumber:"0536198825",statu:"basic",vetek:5}
    this.nurses[52]={id:"301701556",fName:"tsvi",lName:"vainman",phoneNumber:"0533628825",statu:"basic",vetek:4}
    this.nurses[53]={id:"304741805",fName:"noa",lName:"volf",phoneNumber:"0533638825",statu:"basic",vetek:4}
    this.nurses[54]={id:"304102556",fName:"noam",lName:"hayoun",phoneNumber:"0533164825",statu:"basic",vetek:4}
    this.nurses[55]={id:"304741552",fName:"sarit",lName:"aboukasis",phoneNumber:"0533708825",statu:"basic",vetek:3}
    this.nurses[56]={id:"374741556",fName:"malki",lName:"cahana",phoneNumber:"0531498825",statu:"bahir",vetek:11}
    this.nurses[57]={id:"384741556",fName:"hanna",lName:"meyer",phoneNumber:"0533178825",statu:"basic",vetek:4}
    this.nurses[58]={id:"326741556",fName:"rivka",lName:"necher",phoneNumber:"0533198735",statu:"basic",vetek:10}
    this.nurses[59]={id:"318741556",fName:"shoshana",lName:"yehiel",phoneNumber:"0537498825",statu:"basic",vetek:7}
    this.nurses[60]={id:"319741556",fName:"rahel",lName:"menashe",phoneNumber:"0753198825",statu:"basic",vetek:1}
    this.nurses[61]={id:"320741556",fName:"nina",lName:"curiel",phoneNumber:"0576198825",statu:"basic",vetek:1}
    this.nurses[62]={id:"335741556",fName:"martine",lName:"betito",phoneNumber:"0773198825",statu:"bahir",vetek:40}
    this.nurses[63]={id:"396741556",fName:"eitan",lName:"darmon",phoneNumber:"0393198825",statu:"basic",vetek:5}
    this.nurses[64]={id:"310241556",fName:"netanel",lName:"uzan",phoneNumber:"0546198825",statu:"bahir",vetek:30}
    this.nurses[65]={id:"310341556",fName:"mendel",lName:"shapira",phoneNumber:"0833198825",statu:"bahir",vetek:10}
    this.nurses[66]={id:"250741556",fName:"eidel",lName:"nankanski",phoneNumber:"0943198825",statu:"basic",vetek:4}
    this.nurses[67]={id:"260741556",fName:"coco",lName:"toledano",phoneNumber:"0599198825",statu:"basic",vetek:3}
    this.nurses[68]={id:"222741556",fName:"audel",lName:"shoukroun",phoneNumber:"0333198825",statu:"basic",vetek:0}
    this.nurses[69]={id:"248741556",fName:"dasi",lName:"derhi",phoneNumber:"0545598825",statu:"basic",vetek:0}
    this.nurses[70]={id:"259741556",fName:"mendy",lName:"elimeleh",phoneNumber:"0523122825",statu:"basic",vetek:3}
  }

getAllNurse():Nurse[]{
  
  const isUnique=this.checkUniqueNurseIds()
  console.log("are all the nurseIds unique?", isUnique)
  return this.nurses
}

loginNurse(id:string, name:string):boolean{
  for(let i=0;i<this.nurses.length;i++){
       if(id==this.nurses[i].id && name==this.nurses[i].fName)
       return true;  
  }
  return false;
}


loginAdmin(admin:string,password:string):boolean{
  if(admin=="AAAA"&& password=="0000")
  return true;
return false;
}

getOneNurseDetails(id:string):Nurse{
  for(let i=0;i<this.nurses.length;i++)
      {
        if(id==this.nurses[i].id)
         {
          return this.nurses[i]
         }
      }
  throw new Error("Nurse with the specified ID not found");
 
 }

addOneNurse(id:string,fName:string,lName:string,phoneNumber:string,statu:string,vetek:number){
  
  this.nurses.push({id,fName,lName,phoneNumber,statu,vetek})
}

deleteNurse(id: string) {
  const index = this.nurses.findIndex(nurse => nurse.id === id)
 
  if (index !== -1) {
    this.nurses.splice(index, 1);
    console.log("Nurse deleted successfully");
  } else {
    console.log("No nurse found with the provided ID");
  }
}

updateNurseInfo(i:number,fn:string,s:string, v:number){
    this.nurses[i].phoneNumber=fn;
    this.nurses[i].statu=s;
    this.nurses[i].vetek=v;
}

isNurseExiste(id: string):boolean {
  const index = this.nurses.findIndex(nurse => nurse.id === id);
  console.log(index)
  if(index>=0)
   return false;
  return true;
}

 checkUniqueNurseIds(): boolean {
  for (let i = 0; i < this.nurses.length; i++) {
      for (let j = i + 1; j < this.nurses.length; j++) {
          if (this.nurses[i].id == this.nurses[j].id) {
            console.log("i",i,"j",j)
              return false; // IDs are not unique
          }
      }
  }
  return true; // All IDs are unique
}

}


