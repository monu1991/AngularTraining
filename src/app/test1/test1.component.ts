import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  firstName='Nirzar';
  LastName='Ambade';
  toggleBold():void{
    let ele=document.getElementsByClassName('bold-toggle');
    for(let i=0;i<ele.length;i++)
    {
      if(ele[i].classList.contains('bold'))
      {
        ele[i].classList.remove('bold');
      }
      else{
        ele[i].classList.add('bold');        
      }
        
    }
  }
  addPara():void{
    let div=document.getElementById('addPara');
    
    for(let i=0;i<15;i++)
    {      
      let pEle=document.createElement("p");
      pEle.innerText='Paragraph - ' + i;
      pEle.className='para';
      if((i+1)%2==0)
      {
        pEle.classList.add('even');
      }
      else{
        pEle.classList.add('odd');
      }
      div.appendChild(pEle);      
    }
  }
  invertText():void{
    let para=document.getElementById('changeText');
    let text=para.innerText;
    let invertedText="";
    for(let i=text.length;i>0;i--)
    {
      invertedText+=text[i-1];
    }
    para.innerText=invertedText;
  }
  Fib(n:number):number{
    if (n <= 1) 
    { 
        return n; 
    } 
    else
    { 
        return this.Fib(n - 1) + this.Fib(n - 2); 
    } 
  }

}
