//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Wallet { 
 
  mapping(address => uint) Wallets;

  function withdrawMoney(address payable _to,uint _montant) external{
    require(_montant<Wallets[msg.sender],"Not enought funds");
    Wallets[msg.sender]-=_montant;
    _to.transfer(_montant);
  }

  function getBalance() external view returns(uint){
        return Wallets[msg.sender];
  } 

  receive()external payable {
     Wallets[msg.sender]+=msg.value;
  }

  fallback() external payable{}



    
}
