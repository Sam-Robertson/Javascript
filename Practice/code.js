/**
 * Created by samrobertson on 9/27/16.
 */

var firstname = "Joel";
var lastname = " Frasier";
var middlename = "Darryl";
var nametitle = "Sir ";
var combo = "bob" + nametitle + "";

$("#container" + 3).html("bob");

function combinename(fname, lname){

    fname += " John";
    return nametitle + fname + " " + middlename + " " + lname;
}

alert(combinename(firstname, lastname));

