// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo {
  string public name;

  function set(string memory _name) public{
    name=_name;
  }

  function get() public view returns(string memory)
  {
    return name;
  }
}
