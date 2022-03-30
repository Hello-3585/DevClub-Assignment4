const http = require("http");
const SECRET = "CIGAR"; // You can set any word as the secret answer
const SECRET_LIST=SECRET.split("");
function myFunction(req, res) {
	//console.log({req}); // You can uncomment this to see the request object
	//console.log(req.url);

	const GUESS = req.url.substring(10,15); // Write logic to parse the word which the user guessed from the URL string
	const GUESS_LIST=GUESS.split("");
	var feedback = "";
	var decider=false; 
	for (let step=0;step<5;step++)
	{
		decider=true;
		if(GUESS_LIST[step]==SECRET_LIST[step])
		{
			feedback=feedback.concat("g");
		}
		else
		{
			for(let step2=0;step2<5;step2++)
			{
				if(GUESS_LIST[step]==SECRET_LIST[step2])
				{
					feedback=feedback.concat("y");
					decider=false;
				}
			}
			if( decider)
			{
				feedback=feedback.concat("b");
			}
		}
	}
	// Write logic to compare the word with the secret, and generate the feedback string
	const result=feedback;
	res.write(result);
	res.end();
}
http.createServer(myFunction).listen(8080);
