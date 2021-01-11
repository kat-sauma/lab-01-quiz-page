# lab-01-quiz-page
quiz practice page

UIZ PAGE:

- Plan:
- Act on It


Clone down

Run create-alechemy-bootstrap

ACP directly to main branch of your repo

Branch off, make a DEV branch

		- PRlab


Make new repo in github

Cd in terminal to alchemy folder

Git clone https:// from repo

Npx create-alchemy-bootstrap .

Git add .

Git commit -m ‘initial commit of bootstrap’

Git push

Git checkout -b dev (switches to new branch)

Code .

OUTCOMES:

- there should be an alert
- Should be a confirm so the user can opt out
- Should be a first name  prompt
- Last name prompt
- three question prompts
- show the users their results after taking quiz


HTML SETUP

- some info presented nicely with an image and list items
	- why? User knows what do-instructions
- A button to launch the quiz
	- why? To launch quiz
- A secret empty results div
	- why? To inject/display the results to the user


1) grab DOM elements
2) Add event listeners
3) Respond to user input
4) series of prompts

- button
- Secret div

- button

- in most apps, the real work happens in the cool zone
	- launch an alert
	- Launch a confirmation
		- if the user says no: nothing else happens: ‘return’ nothing to break out of the cool zone
		- If the user says yes: launch the series of prompts
- prompt series:

- first name prompt: store that output to dsplay. Later
- last name prompt: store that output to dsplay. Later
- Launch quiz prompts with specific yes/no questions
	- how do we evaluate the answers?
		- what counts as a yes?
			- yes
			- Yeah
			- Yep
			- Y
			- Yes
			- Lower case versions of all, all caps versions
			- ANYTHING THAT STARTS WITH A “Y”
			- How many times are we going to see if something counts as a yes?
				- three times
				- Instead of copying and pasting, lets write a ‘countsAsAYes’ function!
- make a results string
- Display that results string
	- inject stuff into the ‘textContent’ of our secret results div

CAN ADD ALL THESE IN README.FILE AND PUSH TO YOUR REPO