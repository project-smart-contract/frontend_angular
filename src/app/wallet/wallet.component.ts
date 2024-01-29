import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ethers } from 'ethers';
import  Wallet  from '../../artifacts/contracts/Wallet.sol/Wallet.json';
import { FormsModule } from '@angular/forms';

declare let window: any;
@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent implements OnInit{
  window!:Window;

  valueOfBalance: any;
  balanceEnvoyer:any;
  balanceRetirer:any;
 
   constructor(private route:Router){}
   
   ngOnInit(): void {
    this.getBalance();
   var t = localStorage.getItem("total");
   this.balanceEnvoyer=t;
   localStorage.clear();
   console.log(t)
   }
 
   addressContract: string ="0x5FbDB2315678afecb367f032d93F642f64180aa3";
   title = 'dapp';
   
 
 
 
   async  getBalance(){
     if(typeof window.ethereum !=='undefined'){
        
         const accounts = await window.ethereum.request({method:'eth_requestAccounts'})
         const provider = new ethers.providers.Web3Provider(window.ethereum);        
         const contract = new ethers.Contract(this.addressContract,Wallet.abi,provider);
         try{
           let overrides = {
             from : accounts[0]
          }
 
          const data = await contract['getBalance'](overrides);
          this.valueOfBalance = Number(data)/10**18;
        }catch(err){
         console.log("Exception !");
        }
     }
    }
 
 
   async envoyer(){
      if(this.balanceEnvoyer !== 0){
          if(typeof window.ethereum !=='undefined'){
           const accounts = await window.ethereum.request({method:'eth_requestAccounts'})
           const provider = new ethers.providers.Web3Provider(window.ethereum);        
           const signer = provider.getSigner();
           try{
             const tx = {
               from : accounts[0],
               to : this.addressContract,
               value:ethers.utils.parseEther(this.balanceEnvoyer)
             }
             console.log(accounts[0]);
             const transaction = await signer.sendTransaction(tx);
             await transaction.wait();
             console.log(transaction);
             this.valueOfBalance=Number(this.valueOfBalance)+Number(this.balanceEnvoyer);
             this.route.navigate(["/dashboard/contract/0"])
           }catch (err) {
             console.error("Erreur lors de la transaction : ", err);
         }
          }
     }
    }
 
 
    async retirerBalance(){
       if(!this.balanceRetirer){
         return;
       }
       const accounts = await window.ethereum.request({method:'eth_requestAccounts'})
       const provider = new ethers.providers.Web3Provider(window.ethereum);        
       const signer = provider.getSigner();
       const contract = new ethers.Contract(this.addressContract,Wallet.abi,signer);
       try{
          
         const transaction = await contract['withdrawMoney'](accounts[0],ethers.utils.parseEther(this.balanceRetirer));
         var res =await transaction.wait();
         this.valueOfBalance=Number(this.valueOfBalance)-Number(this.balanceRetirer);
         console.log(res);
 
       }catch(err){
         console.log(err);
       }
 
    }
}
