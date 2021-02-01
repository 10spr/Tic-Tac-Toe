console.log("\n\nI started working on this project on Wednesday Night (27, Jan, 2021), after I ate dinner.\n\n10spr")
/* ===== START SECTION 54 ===== */

a54 = document.getElementById('container54'), latest54x = '',zid = document.getElementById(btnid54), click54 = 0, grid54 = 900, gridchange54 = grid54, sqrt54x = Math.sqrt(gridchange54), win54 = 5, winchange54 = win54, wh54 = screen.availWidth, axis54x=0, axis54y=0, axis54y2 = 0, sqrt54 = Math.sqrt(grid54), winx54x = 0, winx54o = 0, iwin54=0, winx54 = 0, loca54html='', loca54html2='', loca54 = 0, loca54a = 0, iwin54=0, loca54b = 0, loca54id2='', loca54id3='', center54fullid='';
var gridvalue54, gridsqrt54, win54no, btnid54, xwintime54=0, owintime54=0, twintime54=0, uwintime54=0, hwintime54=0, players = 2, click54w = 1;
var firstclick54='X', secondclick54='O', thirdclick54='T', fourthclick54 = 'U', fifthclick54 = 'H';
var playersclick = [firstclick54, secondclick54, thirdclick54, fourthclick54, fifthclick54];
var ratio54 = 0; font54 = 0, turns = ['first', 'second', 'third', 'fourth', 'fifth'];

  /* ====== Button Generator. Status: PASSED ====== */
function showbtn54(gridvalue54, gridsqrt54, win54no) {
  a54.style.width = wh54 + "px";
  a54.style.height += wh54 + "px";
  a54.style.margin += "10px";
  a54.style.borderLeft += "1px solid black"
  a54.style.borderRight += "1px solid black"
  a54.style.borderBottom += "1px solid black"
  ratio54 = (wh54 / gridsqrt54)
  font54 = ratio54 / 1.25

  for(i=0;i<gridvalue54;i++){
    i54 = i+1
    btnid54 = 'btn54x' + i54;
    a54.innerHTML += "<button id=\'" + btnid54 + "\'>" + "&nbsp;" + "</button>"
    btnid54x2 = 'btn54click(' + btnid54 + ', ' + gridvalue54 + ', ' + gridsqrt54 + ', ' + win54no + ')'
    document.getElementById(btnid54).setAttribute('onclick',btnid54x2)
  }

  document.getElementById('styledit').innerHTML = "<style>#main button{width: " + ratio54 +"px; height: " + ratio54 + "px; font-size: " + font54 + "px}</style>"
}
showbtn54(grid54, sqrt54, win54)


  /* ====== DISPLAY X or O ====== Status: PASSED ====== */

function btn54click(clickidx, clickscangrid54a, clickscansqrt54b, clickwin54) {
  if(click54w == 1) {
    if(clickidx.innerHTML !== '&nbsp;') {
      click54 -= 1
      click54w -= 1
    } else {
        clickidx.innerHTML = firstclick54
      }
  }

  function btn54clickif(clicksnumber, clicksletter) {
    if(click54w == clicksnumber) {
      if(clickidx.innerHTML !== '&nbsp;') {
        click54 -= 1
        click54w -= 1
      } else {
          clickidx.innerHTML = clicksletter
          if(players == clicksnumber) {
            click54w = 0
          }
        }
    }
  }

  for(clicksloop=2; clicksloop<=players; clicksloop++) {
    btn54clickif(clicksloop, playersclick[clicksloop-1])
  }

  click54 += 1
  click54w +=1
  document.getElementById('clicksno54').innerHTML = click54;
  scan54(clickscangrid54a, clickscansqrt54b, clickwin54)
  y = clickidx.id // For LatestClick54 Function
  latestvar54(y) // For LatestClick54 Function
}


  /* ======== SCAN FUNCTION ======== */
function scan54(scangrid54a, scansqrt54b, scanwin54) {

  function globalHTML54a(html54) { // This is used in the scan54() function
    loca54html = document.getElementById(html54).innerHTML
  }

  function globalstyle54(style54) { // This is used in the scan54() function
    document.getElementById(style54).style.background = "#7deb34"
  }

  for(i=0; i<scangrid54a; i++) { // Loop Function Starts with Button 1 till Grid Number
    loca54 = i+1 // Button ID Number
    loca54id = 'btn54x' + loca54 // Button ID
    axis54x = loca54 % scansqrt54b //x-axis (Top to Bottom)
    if(axis54x==0) { // 56/8 remainder = 0;
      axis54x = scansqrt54b;
    }
    axis54y = Math.ceil(loca54/scansqrt54b) // y-axis (Top to Bottom)

    globalHTML54a(loca54id) // Get the innerHTML of the button

    function winner54(winner54, winx54, method54, loop54a, loop54b) {
      if(loca54html==winner54) { // If button id.... equals letter "X" or "O". Note: this is and can be determined in the function parameter.
        axis54y2 = axis54y+scansqrt54b-1; // A copy of axis54y. I'll need to edit the value of axis54y so I'm making a copy to not lose the original value.

        for(i54a=axis54x,i54b=1 ; loop54b>=i54b && i54a >= loop54a; i54a--, i54b++) {

          if(method54==1){ //Horizontal Method
            loca54a = scansqrt54b * (axis54y-1) + i54a //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==2){ //Vertical Method.
            loca54a = scansqrt54b * (axis54y-i54b) + axis54x //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==3){ //Vertical Method.
            loca54a = scansqrt54b * (axis54y-i54b) + axis54x -i54b +1 //Find the current location. With the loop, location will always move left by 1 step at a time
          }
          if(method54==4){ //Vertical Method.
            loca54a = scansqrt54b * (axis54y-i54b) + axis54x +i54b  -1//Find the current location. With the loop, location will always move left by 1 step at a time
          }

          loca54id2 = 'btn54x' + loca54a

          function globalHTML54b(html54a) {
            loca54html2 = document.getElementById(html54a).innerHTML
          }
          globalHTML54b(loca54id2)

          if(loca54html2==winner54) { // Scoring System. Status: Passed. Details: If winx54x = 4 (it's the value of variable scanwin54), there is a winner.
            winx54 += 1;
          } else {
            winx54 = 0;
          }

          if(winx54 == scanwin54) { // Whenever someone wins
            for(iwin54=0;iwin54<scanwin54;iwin54++) {
              if(method54==1) {
                loca54b = loca54a + iwin54
              }
              if(method54==2) {
                loca54b = loca54a + (iwin54 * scansqrt54b)
              }
              if(method54==3) {
                loca54b = loca54a + (iwin54 * scansqrt54b) +iwin54
              }
              if(method54==4) {
                loca54b = loca54a + (iwin54 * scansqrt54b) -iwin54
              }
              loca54id3 = 'btn54x' + loca54b
              globalstyle54(loca54id3) //change background color to green
            }
            someonewin54(loca54html)
            click54w = 1;
            break;
          }
          if(iwin54 == scanwin54) {
            break;
          }
        }
      }
    }

    // Syntax winner54(winner54, winx54, method54, loop54a, loop54b)
    for(iplayers=0; iplayers < players; iplayers++) {
      winner54(playersclick[iplayers], winx54x, 1, 1, axis54y2); //Horizontal X (Method 1)
      winner54(playersclick[iplayers], winx54x, 2, -scansqrt54b+2, axis54y); //Vertical X (Method 2)
      winner54(playersclick[iplayers], winx54o, 3, 1, axis54y); //Diagonal Left X (Method 3)
      winner54(playersclick[iplayers], winx54x, 4, -1*scanwin54+2, axis54y); //Diagonal Right X (Method 4)
    }

    if(iwin54 == scanwin54) {
      break;
    }
  }
}


  /* ====== Grid Slider Range ====== Status: PASSED ====== */
function editgrid54() {
  document.getElementById('gridspan54').innerHTML = "<input type=\'range\' min=\'9\' max=\'1600\' value=\'" + grid54 + "\' class=\'slider\' id=\'gridrange54\'>"
}
editgrid54()
document.getElementById('gridvaluespan54').innerHTML = document.getElementById('gridrange54').value

gridrange54.oninput = function() {
  gridvaluespan54.innerHTML = this.value;
}

  /* ====== Confirm Grid Change ====== Status: PASSED ====== */
function confirmgrid54() {
  gridchange54 = Math.pow(Math.ceil(Math.sqrt(gridrange54.value)), 2)
  sqrt54x = Math.sqrt(gridchange54)

  if(grid54>gridchange54){ // Determine whether to add or remove buttons
    for(gridremove54 = gridchange54+1; gridremove54 <= grid54; gridremove54++) { // A loop to remove buttons
      confirmgrid54xid = 'btn54x' + gridremove54
      document.getElementById(confirmgrid54xid).remove()
    }
  } else {
    for(gridadd54 = grid54+1; gridadd54<=gridchange54; gridadd54++) { // A loop to add buttons
      confirmgridadd54id = 'btn54x' + gridadd54
      document.getElementById('container54').innerHTML += "<button id=\'" + confirmgridadd54id + "\'>&nbsp;</button"
    }
  }

  for(gridremove54x=1; gridremove54x <= gridchange54; gridremove54x++) { // Changing the onclick attribute to a new one
    confirmgrid54xid2 = 'btn54x' + gridremove54x
    confirmgrid54xonclick = 'btn54click(' + confirmgrid54xid2 + ', ' + gridchange54 + ', ' + sqrt54x + ', ' + winchange54 + ')'
    document.getElementById(confirmgrid54xid2).setAttribute('onclick', confirmgrid54xonclick)
  }

  ratio54 = (wh54 / sqrt54x) //The 3 lines of codes below (counting this line too) is to change the css of the buttons
  font54 = ratio54 / 1.25
  document.getElementById('styledit').innerHTML = "<style>#main button{width: " + ratio54 +"px; height: " + ratio54 + "px; font-size: " + font54 + "px}</style>"

  gridvaluespan54.innerHTML = gridchange54 // Displaying the new number of grids
  clean54(gridchange54)
  click54 = 0;
  click54w = 1;
  document.getElementById('clicksno54').innerHTML = click54;
  grid54 = gridchange54
}

  /* ====== Win At Slider Range ====== Status: PASSED ====== */
function editwin54() {
  document.getElementById('winspan54').innerHTML = "<input type=\'range\' min=\'3\' max=\'10\' value=\'" + win54 + "\' class=\'slider\' id=\'winrange54\'>"
}
editwin54()

document.getElementById('win54at').innerHTML = document.getElementById('winrange54').value

winrange54.oninput = function() {
  win54at.innerHTML = this.value;
  winchange54 = this.value;
}

  /* ====== Confirm Win Change ====== Status: PASSED ====== */
function confirmwin54() {
  winchange54 = parseFloat(winrange54.value)
  for(confirmwin54i=1; confirmwin54i<=gridchange54; confirmwin54i++){
    confirmwin54id = 'btn54x' + confirmwin54i
    confirmwin54onclick = 'btn54click(' + confirmwin54id + ', ' + gridchange54 + ', ' + sqrt54x + ', ' + winchange54 + ')'
    document.getElementById(confirmwin54id).setAttribute('onclick', confirmwin54onclick)
  }
  clean54(gridchange54)
  click54 = 0;
  click54w = 1;
  document.getElementById('clicksno54').innerHTML = click54;
}


/* ======== Modifying Number of Players ======== */
function setplayer(playerid2x, playerno2x) {
  document.getElementById(playerid2x).addEventListener('click', function() {

    for(playeri2x=1; playeri2x<=5; playeri2x++){ // Setting all the player buttons to opacity 0.3
      playeri2xid = 'player' + playeri2x
      document.getElementById(playeri2xid).style.opacity = '0.3'
    }
    document.getElementById(playerid2x).style.opacity = '1' // Then set the activated player button to opacity 1

    clean54(gridchange54) // Clean the whole grid
    click54 = 0; // Then, set the total number of clicks to 0
    document.getElementById('clicksno54').innerHTMl = click54 // And display it
    click54w = 1; // Re-defining the click to return the turn to the beginning

    firstclick54='X', secondclick54='O', thirdclick54='T', fourthclick54 = 'U', fifthclick54 = 'H'; // Returning the default order of turns everytime the number of player changes
    playersclick = [firstclick54, secondclick54, thirdclick54, fourthclick54, fifthclick54];

    if(players<playerno2x){ // An if statement to verfiy that it is NEEDED to add more buttons
      for(playerbtni = players; playerbtni < playerno2x; playerbtni++) { // Add new buttons
        if(playerbtni==1) {
          continue;
        }
        newplayerbtnid = playersclick[playerbtni].toLowerCase() + 'first54' // Defining the id for the new letter buttons
        newplayerbtn(playerno2x, newplayerbtnid, playersclick[playerbtni]) // A function to add buttons
      }
    } else { // Verfiy that it is NOT NEEDED to add more buttons
      for(playerbtni2 = players-1; playerbtni2 >= playerno2x; playerbtni2--) { // Remove buttons
        if(playerbtni2==1) {
          break;
        }
        removeplayerbtnid = playersclick[playerbtni2].toLowerCase() + 'first54' // Defining the id for removing letter buttons
        document.getElementById(removeplayerbtnid).remove() // Function to remove buttons
      }
    }

    prvplayers = players;
    players = playerno2x;

    windocs = document.getElementById('wins')

    playerletters = ['x', 'o', 't', 'u', 'h']

    if(prvplayers>players) {
      for(prvplayersx = prvplayers-1; prvplayersx >= players; prvplayersx--) {
        if(prvplayersx==1) {
          break;
        }
        playeridremove = playerletters[prvplayersx] + 'wintime54container'
        document.getElementById(playeridremove).remove()
      }
    }

    if(players>=1) {
      firstturn54x('xfirst54', 'X')
    }

    if(players>=2) {
      firstturn54x('ofirst54', 'O')
    }

    if(players>=3) {
      firstturn54x('tfirst54', 'T')
      if(prvplayers!==3 && prvplayers!==4 && prvplayers!==5) {
        windocs.innerHTML += "<span id=\'twintime54container\'><br>\"T\" won <span id=\'twintime54\'></span></span>"
        wintime54('twintime54', twintime54)
      }
    }

    if(players>=4) {
      firstturn54x('ufirst54', 'U')
      if(prvplayers!==4 && prvplayers!==5) {
        windocs.innerHTML += "<span id=\'uwintime54container\'><br>\"U\" won <span id=\'uwintime54\'></span></span>"
        wintime54('uwintime54', uwintime54)
      }
    }

    if(players>=5) {
      firstturn54x('hfirst54', 'H')
      if(prvplayers!==5){
        windocs.innerHTML += "<span id=\'hwintime54container\'><br>\"H\" won <span id=\'hwintime54\'></span></span>"
        wintime54('hwintime54', hwintime54)
      }
    }



    for(playersloop=1; playersloop<players; playersloop++) {
      playersloopid = playerletters[playersloop] + 'first54'
      document.getElementById(playersloopid).style.opacity = '0.3'
    }
    document.getElementById('xfirst54').style.opacity = '1'
  })
}

function newplayerbtn(newplayerno, newplayerid, btncontent) { // This function is used in the setplayer() function
    document.getElementById('turnbutton54container').innerHTML += "<button id=\'" + newplayerid + "\'>" + btncontent + "</button>"
}

function setplayerloop() {
  for(setplayeri1=1; setplayeri1<=5; setplayeri1++) {
    setplayerid = 'player' + setplayeri1
    setplayer(setplayerid, setplayeri1)
  }
}
setplayerloop()


/* ======== The First To Go ======== */

// The idea here is to swap between each in letter in each click. Example: The first turn is 'X'. If the 3rd button is clicked which is 'T', then the position of X will swap with T, which means T will will be first, X will be third.
function firstturn54x(turnid, turnletter) {
  document.getElementById(turnid).addEventListener('click', function(){firstturn54y(turnid, turnletter)} )
}

var turnloop = 0, turnloopref = turnloop+1, iturn = 0;

function firstturn54y(turnid2, turnletter2) {

  for(turnloop=0; turnloop<players; turnloop++) { // Capture the previous first click and swap it with its new position
    if(playersclick[turnloop] == turnletter2) {
      turnloopref = turnloop + 1;
      if(turnloopref == 1) {
        firstclick54 == firstclick54
      }
      if(turnloopref == 2) {
        secondclick54 == firstclick54
      }
      if(turnloopref == 3) {
        thirdclick54 == firstclick54
      }
      if(turnloopref == 4) {
        fourthclick54 == firstclick54
      }
      if(turnloopref == 5) {
        fifthclick54 == firstclick54
      }
      playersclick[turnloop] = firstclick54 // playersclick[2] = firstclick54 which is 'X'
      break;
    }
  }
  firstclick54 = turnletter2
  playersclick[0] = firstclick54

  for(iturn=0; iturn<players; iturn++) {
    firstturnid2 = playersclick[iturn].toLowerCase() + 'first54'
    document.getElementById(firstturnid2).style.opacity = '0.3'
  }
  document.getElementById(turnid2).style.opacity = '1'
  clean54(gridchange54)
  click54 = 0;
  click54w = 1;
  document.getElementById('clicksno54').innerHTML = click54;
}

firstturn54x('xfirst54', 'X')
firstturn54x('ofirst54', 'O')

/* ====== Number of Wins ====== Status: PASSED ====== */
function wintime54(wintime54id, wintime54letter) {
  if(wintime54letter>1) {
    document.getElementById(wintime54id).innerHTML = wintime54letter + ' times';
  } else {
    document.getElementById(wintime54id).innerHTML = wintime54letter + ' time';
  }
}
wintime54('xwintime54', xwintime54)
wintime54('owintime54', owintime54)

function someonewin54(winletter54) {
  if(winletter54=='X'){
    xwintime54 +=1
    wintime54('xwintime54', xwintime54)
  }
  if(winletter54=='O'){
    owintime54 +=1
    wintime54('owintime54', owintime54)
  }
  if(winletter54=='T'){
    twintime54 +=1
    wintime54('twintime54', twintime54)
  }
  if(winletter54=='U'){
    uwintime54 +=1
    wintime54('uwintime54', uwintime54)
  }
  if(winletter54=='H'){
    hwintime54 +=1
    wintime54('hwintime54', hwintime54)
  }
}


/* ====== Remove all letters from all buttons (grids) ====== */
function clean54(cleangrid54) {
for(icl54=1; icl54<=cleangrid54; icl54++) {
  clean54id = 'btn54x' + icl54;
  nbsp54(clean54id)
}
  click54 = 0;
  iwin54 = 0;
  click54w = 1;
  document.getElementById('clicksno54').innerHTML = click54;
}

document.getElementById('restart54').addEventListener('click', function() {clean54(gridchange54)})

function nbsp54(cleanid54a) {
  document.getElementById(cleanid54a).innerHTML = "&nbsp;"
  document.getElementById(cleanid54a).style.background = "#fff"
}

/* ======== Latest Click ======== Note: This whole function is connected to the function btn54click()*/
function latestclick54(latest54) {
  var clickid54style = document.getElementById(latest54).style.background
  document.getElementById(latest54).style.background="#000"
  setTimeout(function(){
    if(clickid54style=='rgb(125, 235, 52)') {
    document.getElementById(latest54).style.background="rgb(125, 235, 52)"
  } else {
    document.getElementById(latest54).style.background="#fff"
  }}, 500)
}

function latestvar54(latestvar54) {
  latest54x = latestvar54
}

/* ====== Hide & Show Sidebar Settings ====== Status: PASSED ====== */
function sidebarIn() {
  document.getElementById('sidenav').style.left = "-25%"
  document.getElementById('main').style.marginLeft = '0px'
  document.getElementById('main').style.paddingLeft = '0px'
  document.getElementById('showsetting').style.opacity = '0.3'
  document.getElementById('hidesetting').style.opacity = '1'
}

function sidebarOut() {
  document.getElementById('sidenav').style.left = "0%"
  document.getElementById('main').style.marginLeft = '20%'
  document.getElementById('main').style.paddingLeft = '20px'
  document.getElementById('showsetting').style.opacity = '1'
  document.getElementById('hidesetting').style.opacity = '0.3'
}

document.getElementById('hidesetting').onclick = function() {sidebarIn()}
document.getElementById('showsetting').onclick = function() {sidebarOut()}

















console.log('\n\nI\'m taking a break from this project (Feb 01 2021 2:30pm GMT+0700).\n\nMost of my ideas have been completely integrated but there are still a few left that I will have to do in the future:\n\n1. Display a sound on every click.\n\n2. Display a whose turn it is (whether it\' X or O...) throughout the whole game.\n\n3. Allowing players to choose their own custom characters/symbols display.\n\n4. Creating a 1 player mode where you can compete with a machine.\n\n10spr')
