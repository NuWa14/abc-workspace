// SPDX-License-Identifier: UNLICENSED
// Deployment of ERC20 Fungible Token
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Weeb is ERC20{
    constructor(uint256 initialSupply) ERC20("Weeb", "BL") {
        _mint(msg.sender, initialSupply);
    }
}