const display=document.getElementById("display");
function appendtodisplay(input)
{
    if(display.innerText==="0")
    {
        display.innerText=input;
    }
    else{
    display.innerText+=input;
    }
}
function cleardisplay()
{
    display.innerText="0";
}
function calculate()
{
    display.innerText=eval(display.innerText);
}
function backspace()
{
    display.innerText=display.innerText.slice(0,-1);
}
