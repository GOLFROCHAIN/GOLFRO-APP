const CaverExtKAS = require('caver-js-ext-kas')
const accessKeyId = ""
const secretAccessKey = ""
const krn = ''
const chainId = 8217

const caver = new CaverExtKAS()
caver.initKASAPI(chainId, accessKeyId, secretAccessKey)

var alias   = 'golfro'
var master  = '0x' // master address

async function sendToken(adr, number)
{
    try
    {
        const result = await caver.kas.kip7.transfer(alias, master, adr, decimal2hex(number))
        console.log(result)
    }
    catch(e)
    {
        console.log(e)
    }
}

async function balance(adr)
{
    try
    {
        const result = await caver.kas.kip7.balance(alias, adr)
        console.log(result)
    }
    catch(e)
    {
        console.log(e)
    }
}

async function paus(adr)
{
    try
    {
        const result = await caver.kas.kip7.pause(adr)
        console.log(result)
    }
    catch(e)
    {
        console.log(e)
    }
}

async function unpaus(adr)
{
    try
    {
        const result = await caver.kas.kip7.unpause(alias)
        console.log(result)
    }
    catch(e)
    {
        console.log(e)
    }
}

async function burn(adr, amount)
{
    try
    {
        const result = await caver.kas.kip7.burnFrom(adr, decimal2hex(amount))
        console.log(result)
    }
    catch(e)
    {
        console.log(e)
    }
}

function decimal2hex(number){
    number = number * 10**18
    hexString = "0x" + number.toString(16);
    return hexString;
}

var test_wallet_address = ''
sendToken(test_wallet_address, 10);