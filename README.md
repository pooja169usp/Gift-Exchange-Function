# Gift-Exchange-Function

## Instructions:

You are tasked with organizing a gift exchange among friends; every member of the group has 
to both give, and receive, a gift from among the others.

The only rule is that one can not receive a gift from the same person to whom they give a gift.

Write a solution for the above requirements for groups of varying sizes using Javascript. 
Remember to account for edge cases that would make the above rules impossible to follow.

*   example input:
        ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']

*   example output:
        Abe gives a gift to Quan
        Ardi gives a gift to Beth
        Susan gives a gift to Abe
        Quan gives a gift to Ardi
        Beth gives a gift to Susan

## Solution:

*   Edge cases handled:
    1. Checking for input type to be string and eliminating any input that is not of string type
    2. Checking for duplicates in the list given
    3. Making sure there are at least 3 people (valid names) in the given list so that we follow the rule given (one can not receive a gift from the same person to whom they give a gift).

*   Logic gist:
    Once we have the unique list of valid names, the list is then randomly shuffled so that the function gives different pairs every time. It is made sure that there are at least 3 members in the list and then each person in the list is paired with the person next to him/her in the shuffled list and the last person is paired with the first person.


You can find the solution for this [here](https://github.com/pooja169usp/Gift-Exchange-Function/blob/master/giftExchangeFunction.js)