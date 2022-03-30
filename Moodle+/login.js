console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split("\n")[3].split(" ");
 // Use split and array operations on the login_text string to extract the question

let answer = ''; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
if (question[1]=="add")
{
    answer=Number(question[2])+Number(question[4]);
    console.log("1");
}
if (question[1]=="subtract")
{
    answer=Number(question[2])-Number(question[4]);
}
if (question[1]=="enter")
{
    if (question[2]=="first")
    {
        answer=Number(question[4]);
    }
    else
    {
        answer=Number(question[6]);
    }
}
const captcha_input_element = document.querySelector("input#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
