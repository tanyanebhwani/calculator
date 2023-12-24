let string = "";
prev = 0;
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
button.addEventListener("click",(e)=>{
    if(e.target.innerText=='=')
    {

        try
        {
        string = eval(string); //note this step
        prev = string;
        }
        catch(err)
        {
            alert("Please Enter valid text");
            document.querySelector('input').value = "";
        }
        document.querySelector('input').value = string;
    }
    else if(e.target.innerText=='C')
    {
        string = "";
        document.querySelector('input').value = "";
    }
    else if(e.target.innerText=='M+')
    {
        val = document.querySelector('input').value;
        string = eval(prev+"+"+val);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerText=='M-')
    {
        val = document.querySelector('input').value;
        string = eval(string+"+"+val);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerText=='%')
    {
        string = eval(string)/100.0;
        document.querySelector('input').value = string;
    }
    else
    {
    console.log(e.target);
    string = string + e.target.innerText;
    document.querySelector('input').value = string;
    }
})
})