# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Noah Joseph Pilkington

Time spent: 8 hours spent in total

Link to project: (https://glitch.com/edit/#!/chambray-pastoral-brontomerus)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!

- Added a background image instead of a just colour. 
- Changed the start/stop button colours.
- Changed the title and body colours, fonts and sizes to fill the screen.
- Changed the pattern of the lights.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x](gif1- http://g.recordit.co/DSehveJwuJ.gif)
![x](gif2- http://g.recordit.co/8nlDxaDVNE.gif)
![x](gif3- http://g.recordit.co/Q8kcBbkAeS.gif)
![x](gif4- http://g.recordit.co/OVv19jZfLw.gif)

-![Sample Gif](http://g.recordit.co/DSehveJwuJ.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

W3 Schools, Stack Overflow, CODEPATH TAs via Slack

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

The main problem I encountered in this project was an error regarding the capitalisation of a word. Within the HTML file the button … id= “Button1”... was capitalized. However it was not capitalized in the JavaScript file. I first encountered the problem when using the Developers Tools to query what was not working. I googled the errors to see what they could be but that was not too helpful. I believed the problem was something to do with the LightButton function but I could not see any obvious issues. My next approach was to make sure the code was in a logical order, which it was. After this I compared the three files (CSS, HTML and JavaScript) to see if everything matched up. As far as I could see it seemed perfectly fine but still the error persisted. I then reread the CodePath Prework to see if I had misread something. Still to no avail. After this I reached out to the CodePath TA’s and they suggested using the Developers Tools which I had already done. I decided to sleep on the problem and come back to it. After restarting my search for the issue I had soon found it to be a lack of capitalization of the word Button within the LightButton function. Before discovering this bug I was clearly suffering from short sightedness and was focusing too much on the problem whereas I should have taken a break earlier so my mind could stay fresh and think smoothly. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I have plenty of questions about Web development and plenty more to learn about it! One question I am interested in is how would I create a website that could have multiple pages that it could click through. This would be useful to know as I would have liked to add a starting menu to the website before launching into the game. Perhaps the user could login in so they could save their progress, choose their difficulty level and maybe even change the theme, all executed in separate popups or pages. Perhaps one way to create multiple pages would be through utilizing classes and features. I think Classes would be a great way to keep certain aspects the same such as the website's title always displaying at the top of the game, keeping a general color/design theme/layout. Then adding unique features to certain new pages. 
A second question would be what other languages can be used to create websites? I believe Python is very popular for the backend of certain websites but how would this interact with the other files? 
Thirdly, when not using a platform like Glitch how do the files continuously interact with each other so you can see their progress. Perhaps this is something more technical and why we used Glitch in the first place.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more extra hours I would have made a pop up gif of a sad or happy mole depending if the user won or lost to help support my twist of a theme of ‘Whac-A-Mole.’ I would have achieved this through declaring the image/gif and pop up feature through HTML, then adding an activation feature within the winGame() and loseGame() functions. In addition, it would have been cool to add in different sound effects such as a ‘whack’ or ‘bang’ sound. This would also support my theme of Whac-A-Mole and make it more comedic for the user. My method of achieving this would be most likely trying to find a cartoon sound effects library in JavaScript and replacing the current tunes with that.
Another feature I would have added is varying difficulty levels. Once you have played the games a few times over it is relatively easy. A method to combat this would be to give the user the option of how difficult they would want to make the game. I could achieve this through adding a menu function before the game's homepage lands, where the user could specify their desired difficulty. This would be executed through the use of functions with varying speeds the lights/mole flashes up.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/2023a696bfd849519dc6afbf7538cbda)


## License

    Copyright [Noah Joseph Pilkington]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.